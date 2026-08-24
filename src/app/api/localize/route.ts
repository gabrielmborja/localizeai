import { NextResponse } from "next/server";
import type {
  LocalizeRequest,
  LocalizeResponse,
  LocalizedItem,
  MarketType,
} from "@/types/localize";

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

    const { campaignName, product, offer, content, markets, keywords } = body;
    const prodName = product?.trim() || "LocalizeAI Platform";
    const extraKeywords = Array.isArray(keywords) && keywords.length > 0 ? keywords : ["Growth", "SaaS", "IA"];

    const mockCatalog: Record<MarketType, LocalizedItem> = {
      BR: {
        market: "BR",
        country: "Brasil",
        flag: "🇧🇷",
        language: "Português (BR)",
        localizedTitle: `Impulsione a expansão da sua marca com ${prodName}`,
        localizedContent: `${content}\n\n👉 Aproveite a oferta exclusiva para o mercado brasileiro e escale seus resultados com total conformidade com a LGPD.`,
        localizedCta: offer ? `Garantir Oferta: ${offer}` : "Iniciar Teste Grátis no Brasil",
        keywords: ["#MarketingDigital", "#SaaSBrasil", ...extraKeywords.map((k) => `#${k.replace(/\s+/g, "")}`)],
        adaptationNotes: {
          cultural: "Tom caloroso, dinâmico e focado em engajamento rápido em mídias sociais.",
          currencyAndSeasonal: "Preços e valores exibidos em Reais (BRL R$).",
          toneAndStyle: "Linguagem persuasiva e direta orientada à conversão.",
        },
        needsHumanReview: false,
      },
      US: {
        market: "US",
        country: "Estados Unidos",
        flag: "🇺🇸",
        language: "Inglês (US)",
        localizedTitle: `Supercharge your enterprise revenue growth with ${prodName}`,
        localizedContent: `Accelerate your pipeline and streamline team operations with LocalizeAI's enterprise-grade workflow engine.\n\nBuilt for high-growth tech teams scaling internationally.`,
        localizedCta: offer ? `Claim Offer: ${offer}` : "Start 14-Day Free Trial (No Credit Card)",
        keywords: ["#B2BGrowth", "#RevenueOps", "#ScaleUp", ...extraKeywords.map((k) => `#${k.replace(/\s+/g, "")}`)],
        adaptationNotes: {
          cultural: "Foco estrito em métricas de ROI, eficiência operacional e facilidade de onboarding.",
          currencyAndSeasonal: "Valores em Dólares Norte-Americanos (USD $).",
          toneAndStyle: "Comunicação assertiva e objetiva típica do mercado B2B dos EUA.",
        },
        needsHumanReview: false,
      },
      MX: {
        market: "MX",
        country: "México",
        flag: "🇲🇽",
        language: "Espanhol (MX)",
        localizedTitle: `Impulsa el crecimiento de tu empresa con la tecnología de ${prodName}`,
        localizedContent: `Optimiza tus campañas de marketing e incrementa la conversión en toda América Latina.\n\nPrueba la solución líder para equipos de alto rendimiento.`,
        localizedCta: offer ? `Obtener Oferta: ${offer}` : "Comenzar Prueba Gratuita Hoy",
        keywords: ["#MarketingLATAM", "#EstrategiaDigital", "#NegociosMx", ...extraKeywords.map((k) => `#${k.replace(/\s+/g, "")}`)],
        adaptationNotes: {
          cultural: "Espanhol latino-americano empresarial com vocabulário regional otimizado para vendas.",
          currencyAndSeasonal: "Preços adaptados para Pesos Mexicanos (MXN $) ou Dólares globais.",
          toneAndStyle: "Tom profissional, receptivo e focado no relacionamento comercial.",
        },
        needsHumanReview: false,
      },
      DE: {
        market: "DE",
        country: "Alemanha",
        flag: "🇩🇪",
        language: "Alemão (DE)",
        localizedTitle: `Skalieren Sie Ihr Unternehmen mit präziser KI-Technologie von ${prodName}`,
        localizedContent: `Steigern Sie die Effizienz Ihrer Marketingprozesse nahtlos und DSGVO-konform.\n\nEntwickelt für höchste Ansprüche an Qualität, Präzision und Datensicherheit.`,
        localizedCta: offer ? `Jetzt Angebot Sichern: ${offer}` : "Jetzt DSGVO-Konform Testen",
        keywords: ["#DSGVO", "#EnterpriseSoftware", "#B2BMarketing", ...extraKeywords.map((k) => `#${k.replace(/\s+/g, "")}`)],
        adaptationNotes: {
          cultural: "Tratamento formal e cortês (Sie-Form), enfatizando precisão, segurança e conformidade.",
          currencyAndSeasonal: "Valores em Euros (EUR €) com destaque explícito para conformidade DSGVO (GDPR).",
          toneAndStyle: "Tom sóbrio, técnico e focado em fatos e conformidade regulatória.",
        },
        needsHumanReview: true,
      },
    };

    const results: LocalizedItem[] = markets
      .map((m) => mockCatalog[m])
      .filter(Boolean);

    const responseData: LocalizeResponse = {
      success: true,
      campaignName,
      results,
    };

    return NextResponse.json(responseData, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Erro interno no servidor ao processar a requisição de localização." },
      { status: 500 }
    );
  }
}
