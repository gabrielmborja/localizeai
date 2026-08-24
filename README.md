# LocalizeAI — Plataforma de Localização Cultural de Conteúdo

O **LocalizeAI** é uma plataforma SaaS desenvolvida em Next.js 16 para adaptar conteúdos de marketing (anúncios, e-mails, posts e landing pages) para múltiplos idiomas e mercados internacionais.

---

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev

# Compilar para produção
npm run build
```

Navegue em seu navegador em:
- **Landing Page Pública**: [http://localhost:3000](http://localhost:3000)
- **Dashboard do Produto**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

---

## 📡 Rota de API Interna: `POST /api/localize`

A rota `/api/localize` processa o briefing da campanha de marketing e retorna versões localizadas personalizadas para os mercados selecionados.

### 📋 Requisição (`POST /api/localize`)

**Headers**:
```http
Content-Type: application/json
```

**Exemplo de Payload JSON**:

```json
{
  "campaignName": "Lançamento Global Q3",
  "product": "LocalizeAI Platform",
  "audience": "CEOs, Diretores de Marketing e Gestores de Growth",
  "objective": "sales",
  "channel": "instagram",
  "offer": "20% OFF na assinatura anual + 14 dias grátis",
  "content": "Acelere seu crescimento com nossa plataforma de automação e inteligência artificial. Teste grátis por 14 dias sem cartão de crédito!",
  "sourceLanguage": "pt-BR",
  "markets": ["BR", "US", "MX", "DE"],
  "tone": "persuasive",
  "keywords": ["SaaS", "IA", "Automação", "Crescimento"]
}
```

#### Campos do Payload:
- `campaignName` *(obrigatório, string)*: Nome da campanha.
- `content` *(obrigatório, string)*: Texto ou cópia original para localização.
- `sourceLanguage` *(obrigatório, string)*: Idioma original (`pt-BR`, `en-US`, `es-ES`).
- `markets` *(obrigatório, array)*: Lista dos códigos de mercado de destino (`BR`, `US`, `MX`, `DE`).
- `tone` *(obrigatório, string)*: Tom de voz (`professional`, `persuasive`, `casual`, `technical`).
- `product` *(opcional, string)*: Nome do produto ou serviço.
- `audience` *(opcional, string)*: Descrição do público-alvo.
- `objective` *(opcional, string)*: `sales` | `leads` | `awareness` | `retention`.
- `channel` *(opcional, string)*: `instagram` | `email` | `google_ads` | `landing_page` | `whatsapp`.
- `offer` *(opcional, string)*: Oferta comercial ou call-to-action de destaque.
- `keywords` *(opcional, array de strings)*: Palavras-chave para otimização de SEO local.

---

### 📥 Exemplo de Resposta de Sucesso (`HTTP 200`)

```json
{
  "success": true,
  "campaignName": "Lançamento Global Q3",
  "results": [
    {
      "market": "US",
      "country": "Estados Unidos",
      "flag": "🇺🇸",
      "language": "Inglês (US)",
      "localizedTitle": "Supercharge your enterprise revenue growth with LocalizeAI Platform",
      "localizedContent": "Accelerate your pipeline and streamline team operations with LocalizeAI's enterprise-grade workflow engine.\n\nBuilt for high-growth tech teams scaling internationally.",
      "localizedCta": "Claim Offer: 20% OFF na assinatura anual + 14 dias grátis",
      "keywords": ["#B2BGrowth", "#RevenueOps", "#ScaleUp", "#SaaS", "#IA"],
      "adaptationNotes": {
        "cultural": "Foco estrito em métricas de ROI, eficiência operacional e facilidade de onboarding.",
        "currencyAndSeasonal": "Valores em Dólares Norte-Americanos (USD $).",
        "toneAndStyle": "Comunicação assertiva e objetiva típica do mercado B2B dos EUA."
      },
      "needsHumanReview": false
    }
  ]
}
```

---

### ⚠️ Exemplo de Resposta de Erro (`HTTP 400`)

```json
{
  "error": "Campos obrigatórios ausentes ou inválidos: campaignName, content.",
  "missingFields": ["campaignName", "content"]
}
```
