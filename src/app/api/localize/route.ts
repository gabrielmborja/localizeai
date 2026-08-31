import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getGeminiClient, GEMINI_MODEL } from "@/lib/gemini";
import { Type } from "@google/genai";
import type { Prisma } from "@prisma/client";
import type {
  LocalizeRequest,
  LocalizeResponse,
  LocalizedItem,
  MarketType,
} from "@/types/localize";

const COUNTRY_FLAGS: Record<string, string> = {
  BR: "🇧🇷",
  US: "🇺🇸",
  MX: "🇲🇽",
  DE: "🇩🇪",
};

interface GeminiRawMarketItem {
  market: string;
  country: string;
  language: string;
  localizedTitle: string;
  localizedContent: string;
  localizedCta: string;
  hashtags?: string[];
  adaptationNotes?: string[];
  needsHumanReview?: boolean;
}

export async function POST(request: Request) {
  try {
    const body: LocalizeRequest = await request.json();

    const missingFields: string[] = [];
    if (!body.campaignName || typeof body.campaignName !== "string" || !body.campaignName.trim()) {
      missingFields.push("campaignName");
    }
    if (!body.content || typeof body.content !== "string" || !body.content.trim()) {
      missingFields.push("content");
    }
    if (!body.sourceLanguage || typeof body.sourceLanguage !== "string") {
      missingFields.push("sourceLanguage");
    }
    if (!Array.isArray(body.markets) || body.markets.length === 0) {
      missingFields.push("markets");
    }
    if (!body.tone || typeof body.tone !== "string") {
      missingFields.push("tone");
    }

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: `Campos obrigatórios ausentes ou inválidos: ${missingFields.join(", ")}.`,
          missingFields,
        },
        { status: 400 }
      );
    }

    const { campaignName, product, offer, content, sourceLanguage, markets, tone, keywords } = body;
    const prodName = product?.trim() || "LocalizeAI Platform";
    const extraKeywords = Array.isArray(keywords) && keywords.length > 0 ? keywords.join(", ") : "Growth, SaaS, IA";

    // Instancia o cliente da Gemini API
    let ai;
    try {
      ai = getGeminiClient();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "";
      if (errorMessage === "CONFIG_MISSING") {
        return NextResponse.json(
          { error: "Serviço de IA temporariamente indisponível. Configuração pendente." },
          { status: 500 }
        );
      }
      throw err;
    }

    const prompt = `Você é um especialista mundial em localização de marketing e adaptação cultural de conteúdo B2B/B2C SaaS.

Sua tarefa é adaptar a campanha de marketing para cada um dos seguintes mercados solicitados: ${markets.join(", ")}.

INFORMAÇÕES DA CAMPANHA (BRIEFING):
- Nome da Campanha: "${campaignName}"
- Produto/Serviço: "${prodName}"
- Oferta / CTA Original: "${offer || "Não informado"}"
- Idioma de Origem: "${sourceLanguage}"
- Tom de Comunicação: "${tone}"
- Palavras-chave de Referência: "${extraKeywords}"
- Conteúdo Original:
"""
${content}
"""

REGRAS DE ADAPTAÇÃO E SEGURANÇA (OBRIGATÓRIAS):
1. Adapte culturalmente o tom, expressões e apelo de marketing para cada mercado de destino. Não faça tradução literal palavra por palavra.
2. NÃO invente preços, percentuais de desconto, disponibilidade, datas limite, prazos, garantias, certificações ou informações legais que não estejam explícitas no briefing.
3. Mantenha alegações comerciais com linguagem cuidadosa e marque "needsHumanReview": true quando houver qualquer dúvida legal, cultural ou de mercado.
4. Para o mercado da Alemanha (DE), considere exigências de conformidade com a DSGVO/GDPR se aplicável e mantenha tratamento formal se adequado.
5. Forneça o campo "hashtags" com 3 a 5 hashtags estratégicas para redes sociais locais.
6. Forneça "adaptationNotes" como uma lista de 1 a 3 explicações curtas de adaptação cultural e tom de marketing.

Retorne obrigatoriamente um objeto JSON com a propriedade raiz "versions" contendo exatamente uma versão para cada mercado solicitado: ${JSON.stringify(markets)}.`;

    const responseSchema = {
      type: Type.OBJECT,
      description: "Objeto raiz contendo a lista de versões de campanhas localizadas",
      properties: {
        versions: {
          type: Type.ARRAY,
          description: "Lista de versões localizadas de campanha por mercado",
          items: {
            type: Type.OBJECT,
            properties: {
              market: { type: Type.STRING, description: "Código do mercado solicitado (ex: BR, US, MX, DE)" },
              country: { type: Type.STRING, description: "Nome do país no idioma local ou português" },
              language: { type: Type.STRING, description: "Idioma localizado" },
              localizedTitle: { type: Type.STRING, description: "Título adaptado para o mercado" },
              localizedContent: { type: Type.STRING, description: "Conteúdo adaptado para o mercado" },
              localizedCta: { type: Type.STRING, description: "CTA adaptado para o mercado" },
              hashtags: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Hashtags ou palavras-chave para mídias sociais",
              },
              adaptationNotes: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Notas de adaptação cultural e de tom",
              },
              needsHumanReview: { type: Type.BOOLEAN, description: "Indica necessidade de revisão humana" },
            },
            required: [
              "market",
              "country",
              "language",
              "localizedTitle",
              "localizedContent",
              "localizedCta",
              "hashtags",
              "adaptationNotes",
              "needsHumanReview",
            ],
          },
        },
      },
      required: ["versions"],
    };

    let response;
    let attempts = 0;
    const maxAttempts = 2;

    while (attempts < maxAttempts) {
      try {
        attempts++;
        response = await ai.models.generateContent({
          model: GEMINI_MODEL,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: responseSchema,
          },
        });
        break; // Sucesso na geração
      } catch (apiError: any) {
        const errStatus = apiError?.status || apiError?.statusCode || 500;
        const errStr = (apiError?.message || String(apiError)).toLowerCase();

        // Se for erro 500 ou 503 e restarem tentativas, realiza backoff de 1s
        if ((errStatus === 500 || errStatus === 503 || errStr.includes("503") || errStr.includes("unavailable")) && attempts < maxAttempts) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          continue;
        }

        if (errStatus === 429 || errStr.includes("429") || errStr.includes("quota") || errStr.includes("rate limit")) {
          return NextResponse.json(
            { error: "Limite de uso da API de IA temporariamente atingido. Tente novamente em instantes." },
            { status: 429 }
          );
        }
        if (errStatus === 403 || errStr.includes("403") || errStr.includes("forbidden") || errStr.includes("permission")) {
          return NextResponse.json(
            { error: "Acesso à API de inteligência artificial não autorizado. Verifique as permissões do projeto." },
            { status: 403 }
          );
        }
        if (errStatus === 400 || errStr.includes("400") || errStr.includes("invalid") || errStr.includes("not found")) {
          return NextResponse.json(
            { error: "Solicitação inválida enviada ao serviço de IA." },
            { status: 400 }
          );
        }
        if (errStatus === 503 || errStatus === 500 || errStr.includes("503") || errStr.includes("unavailable") || errStr.includes("fetch failed")) {
          return NextResponse.json(
            { error: "Serviço de IA temporariamente indisponível. Tente novamente em breve." },
            { status: 503 }
          );
        }

        return NextResponse.json(
          { error: "Falha de comunicação com o serviço de inteligência artificial." },
          { status: 500 }
        );
      }
    }

    if (!response || !response.text || !response.text.trim()) {
      return NextResponse.json(
        { error: "A resposta gerada pela inteligência artificial é inválida ou vazia." },
        { status: 502 }
      );
    }

    const rawText = response.text;
    let parsedJson: { versions?: GeminiRawMarketItem[] };
    try {
      parsedJson = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { error: "Não foi possível interpretar a estrutura da resposta gerada pela IA." },
        { status: 502 }
      );
    }

    const rawVersions = parsedJson?.versions;

    if (!Array.isArray(rawVersions)) {
      return NextResponse.json(
        { error: "A IA retornou um resultado incompleto para os mercados selecionados." },
        { status: 502 }
      );
    }

    const requestedMarketsUpper = markets.map((m) => m.trim().toUpperCase());

    // Valida contagem de mercados
    if (rawVersions.length !== requestedMarketsUpper.length) {
      return NextResponse.json(
        { error: "A IA retornou um resultado incompleto para os mercados selecionados." },
        { status: 502 }
      );
    }

    // Valida duplicidade de mercados
    const returnedMarketSet = new Set<string>();
    for (const item of rawVersions) {
      const code = (item.market || "").trim().toUpperCase();
      if (!code || returnedMarketSet.has(code)) {
        return NextResponse.json(
          { error: "A IA retornou um resultado incompleto para os mercados selecionados." },
          { status: 502 }
        );
      }
      returnedMarketSet.add(code);
    }

    // Validação estrita de cada mercado solicitado e estruturação em ordem
    const orderedVersions: LocalizedItem[] = [];

    for (const reqCode of requestedMarketsUpper) {
      const item = rawVersions.find(
        (v) => (v.market || "").trim().toUpperCase() === reqCode
      );

      if (
        !item ||
        typeof item.country !== "string" ||
        !item.country.trim() ||
        typeof item.language !== "string" ||
        !item.language.trim() ||
        typeof item.localizedTitle !== "string" ||
        !item.localizedTitle.trim() ||
        typeof item.localizedContent !== "string" ||
        !item.localizedContent.trim() ||
        typeof item.localizedCta !== "string" ||
        !item.localizedCta.trim()
      ) {
        return NextResponse.json(
          { error: "A IA retornou um resultado incompleto para os mercados selecionados." },
          { status: 502 }
        );
      }

      const notesArray = Array.isArray(item.adaptationNotes)
        ? item.adaptationNotes.filter((n) => typeof n === "string")
        : [];
      const hashtagsArray = Array.isArray(item.hashtags)
        ? item.hashtags.filter((h) => typeof h === "string")
        : [];

      const mCode = reqCode as MarketType;

      orderedVersions.push({
        market: mCode,
        country: item.country.trim(),
        flag: COUNTRY_FLAGS[mCode] || "🌐",
        language: item.language.trim(),
        localizedTitle: item.localizedTitle.trim(),
        localizedContent: item.localizedContent.trim(),
        localizedCta: item.localizedCta.trim(),
        keywords: hashtagsArray,
        adaptationNotes: {
          cultural: notesArray[0] || "Adaptação cultural direcionada para o público local.",
          currencyAndSeasonal: notesArray[1] || "Linguagem e apelo alinhados ao mercado.",
          toneAndStyle: notesArray[2] || notesArray.join("; ") || "Tom ajustado para conversão.",
        },
        needsHumanReview: typeof item.needsHumanReview === "boolean" ? item.needsHumanReview : true,
      });
    }

    // Salva a campanha no Supabase somente após geração e validações completas
    const savedCampaign = await prisma.campaign.create({
      data: {
        title: campaignName,
        content: content,
        cta: offer?.trim() || "Iniciar Teste Grátis",
        markets: markets as unknown as Prisma.InputJsonValue,
        versions: orderedVersions as unknown as Prisma.InputJsonValue,
        status: "draft",
      },
    });

    const responseData: LocalizeResponse = {
      success: true,
      campaignName,
      results: orderedVersions,
      campaign: {
        id: savedCampaign.id,
        title: savedCampaign.title,
        content: savedCampaign.content,
        cta: savedCampaign.cta,
        markets: savedCampaign.markets,
        versions: savedCampaign.versions,
        status: savedCampaign.status,
        createdAt: savedCampaign.createdAt,
        updatedAt: savedCampaign.updatedAt,
      },
    };

    return NextResponse.json(responseData, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Erro interno no servidor ao processar a localização de campanha." },
      { status: 500 }
    );
  }
}
