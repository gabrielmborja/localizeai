"use client";

import { useState } from "react";
import {
  Globe,
  LayoutDashboard,
  PlusCircle,
  FolderKanban,
  History,
  Settings,
  Sparkles,
  Copy,
  Check,
  Loader2,
  Menu,
  X,
  Languages,
  Sliders,
  Tag,
  ArrowRight,
  Wand2,
  User,
  CheckCircle2,
  Target,
  Megaphone,
  Share2,
  AlertCircle,
  FileText,
  DollarSign
} from "lucide-react";

interface LocalizedResult {
  country: string;
  flag: string;
  lang: string;
  headline: string;
  content: string;
  adaptedCta: string;
  localKeywords: string[];
  notes: {
    cultural: string;
    currencyAndSeasonal: string;
    toneAndStyle: string;
  };
}

const MARKETS = [
  { id: "br", name: "Brasil", flag: "🇧🇷", lang: "Português (BR)", currency: "BRL (R$)" },
  { id: "us", name: "Estados Unidos", flag: "🇺🇸", lang: "Inglês (US)", currency: "USD ($)" },
  { id: "mx", name: "México", flag: "🇲🇽", lang: "Espanhol (MX)", currency: "MXN ($)" },
  { id: "de", name: "Alemanha", flag: "🇩🇪", lang: "Alemão (DE)", currency: "EUR (€)" },
];

const GOALS = [
  { id: "vendas", label: "Vendas Diretas" },
  { id: "leads", label: "Geração de Leads" },
  { id: "brand", label: "Reconhecimento de Marca" },
  { id: "retencao", label: "Retenção & Fidelização" },
];

const CHANNELS = [
  { id: "instagram", label: "Instagram" },
  { id: "email", label: "E-mail Marketing" },
  { id: "google-ads", label: "Google Ads" },
  { id: "landing-page", label: "Landing Page" },
  { id: "whatsapp", label: "WhatsApp" },
];

const TONES = [
  { id: "profissional", label: "Profissional & Corporativo" },
  { id: "persuasivo", label: "Persuasivo & Vendas (Copywriting)" },
  { id: "descontraido", label: "Descontraído & Moderno" },
  { id: "tecnico", label: "Técnico & Especialista" },
];

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("nova-campanha");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Form Briefing states
  const [campaignName, setCampaignName] = useState("Lançamento Global Q3");
  const [productName, setProductName] = useState("LocalizeAI Platform");
  const [targetAudience, setTargetAudience] = useState("CEOs, Diretores de Marketing e Gestores de Growth");
  const [goal, setGoal] = useState("vendas");
  const [channel, setChannel] = useState("instagram");
  const [offer, setOffer] = useState("20% de desconto na assinatura anual + 14 dias de teste grátis");

  // Content & localization parameters
  const [content, setContent] = useState(
    "Acelere seu crescimento com nossa plataforma de automação e inteligência artificial. Teste grátis por 14 dias sem cartão de crédito!"
  );
  const [sourceLang, setSourceLang] = useState("pt-BR");
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>(["us", "mx", "de"]);
  const [tone, setTone] = useState("persuasivo");
  const [keywords, setKeywords] = useState("SaaS, IA, Automação, Crescimento");

  // Output states
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<LocalizedResult[] | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const toggleMarket = (marketId: string) => {
    if (selectedMarkets.includes(marketId)) {
      if (selectedMarkets.length > 1) {
        setSelectedMarkets(selectedMarkets.filter((id) => id !== marketId));
      }
    } else {
      setSelectedMarkets([...selectedMarkets, marketId]);
    }
  };

  const handleGenerate = () => {
    if (!content.trim()) return;

    setIsGenerating(true);
    setResults(null);

    setTimeout(() => {
      const mockData: Record<string, LocalizedResult> = {
        br: {
          country: "Brasil",
          flag: "🇧🇷",
          lang: "Português (BR)",
          headline: `Impulsione o crescimento da sua marca com ${productName || "LocalizeAI"}`,
          content: `${content}\n\n👉 Aproveite esta oferta exclusiva para o mercado brasileiro e transforme sua operação com total segurança.`,
          adaptedCta: offer ? `Garantir 20% OFF + 14 Dias Grátis em R$` : "Iniciar Teste Grátis no Brasil",
          localKeywords: ["#MarketingDigital", "#SaaSBrasil", "#GrowthHack", "#LocalizeAI"],
          notes: {
            cultural: "Tom direto e engajador com forte apelo visual para redes sociais.",
            currencyAndSeasonal: "Preços e valores convertidos em Reais (BRL R$).",
            toneAndStyle: "Estilo persuasivo orientado a conversão em canais móveis.",
          },
        },
        us: {
          country: "Estados Unidos",
          flag: "🇺🇸",
          lang: "Inglês (US)",
          headline: `Supercharge your B2B revenue growth with ${productName || "LocalizeAI"}`,
          content: `Accelerate your pipeline and streamline team productivity with enterprise-grade copy adaptation.\n\nBuilt for high-growth tech companies scaling internationally.`,
          adaptedCta: offer ? `Claim 20% Off Annual Plan + 14-Day Free Trial` : "Start Free Trial (No Credit Card)",
          localKeywords: ["#B2BGrowth", "#RevenueOperations", "#ScaleUp", "#MarketingAI"],
          notes: {
            cultural: "Foco claro em métricas de ROI, eficiência e aceleração de receita (Revenue Operations).",
            currencyAndSeasonal: "Valores em Dólares (USD $) sem taxas ocultas.",
            toneAndStyle: "Linguagem direta e assertiva característica do mercado de tecnologia americano.",
          },
        },
        mx: {
          country: "México",
          flag: "🇲🇽",
          lang: "Espanhol (MX)",
          headline: `Impulsa las ventas de tu empresa con la tecnología de ${productName || "LocalizeAI"}`,
          content: `Optimiza tus campañas de marketing e incrementa la tasa de conversión en toda América Latina.\n\nPrueba la solución líder para equipos de alto rendimiento.`,
          adaptedCta: offer ? `Obtén 20% de Descuento + 14 Días Gratis` : "Comienza tu Prueba Gratuita Hoy",
          localKeywords: ["#MarketingLATAM", "#EstrategiaDigital", "#NegociosMx", "#LocalizeAI"],
          notes: {
            cultural: "Espanhol latino-americano empresarial com vocabulário regional de vendas.",
            currencyAndSeasonal: "Preços adaptados em Pesos Mexicanos (MXN $) ou Dólares globais.",
            toneAndStyle: "Tom profissional, convidativo e focado na construção de relacionamento.",
          },
        },
        de: {
          country: "Alemanha",
          flag: "🇩🇪",
          lang: "Alemão (DE)",
          headline: `Skalieren Sie Ihr Unternehmen mit präziser KI-Technologie von ${productName || "LocalizeAI"}`,
          content: `Steigern Sie die Effizienz Ihrer Marketingprozesse nahtlos und datenschutzkonform.\n\nEntwickelt für höchste Ansprüche an Qualität und Sicherheit.`,
          adaptedCta: offer ? `Jetzt 20% Rabatt & 14 Tage Kostenlos Testen` : "Jetzt DSGVO-Konform Testen",
          localKeywords: ["#DSGVO", "#EnterpriseSoftware", "#B2BMarketing", "#InnovationDE"],
          notes: {
            cultural: "Forma de tratamento cortês e formal (Sie-Form), enfatizando precisão e confiabilidade.",
            currencyAndSeasonal: "Valores em Euros (EUR €) com menção explícita de conformidade DSGVO (GDPR).",
            toneAndStyle: "Tom sóbrio, altamente técnico e baseado em dados e conformidade legal.",
          },
        },
      };

      const filtered = selectedMarkets.map((id) => mockData[id]).filter(Boolean);
      setResults(filtered);
      setIsGenerating(false);
    }, 1200);
  };

  const handleCopy = (res: LocalizedResult, index: number) => {
    const formattedText = `=== LOCALIZEAI: ${res.country.toUpperCase()} (${res.lang}) ===\nTítulo: ${res.headline}\n\nConteúdo:\n${res.content}\n\nCTA Adaptado: ${res.adaptedCta}\nHashtags/SEO: ${res.localKeywords.join(" ")}\n\nNotas de Adaptação:\n- Cultural: ${res.notes.cultural}\n- Moeda/Sazonalidade: ${res.notes.currencyAndSeasonal}\n- Tom: ${res.notes.toneAndStyle}\n\n[Revise informações legais, preços e disponibilidade antes de publicar.]`;
    
    navigator.clipboard.writeText(formattedText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row font-sans selection:bg-indigo-500 selection:text-white">
      {/* Mobile Top Navbar Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5">
            <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
              <Globe className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
          <span className="font-bold text-lg text-white">LocalizeAI</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-slate-900/95 md:bg-slate-900/60 backdrop-blur-xl border-r border-slate-800/80 flex flex-col justify-between transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 space-y-8">
          {/* Brand Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Globe className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white">LocalizeAI</span>
              <span className="text-[11px] font-semibold text-cyan-400 tracking-wide uppercase">
                Enterprise Suite
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {[
              { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
              { id: "nova-campanha", label: "Nova campanha", icon: PlusCircle, highlight: true },
              { id: "campanhas", label: "Campanhas", icon: FolderKanban },
              { id: "historico", label: "Histórico", icon: History },
              { id: "configuracoes", label: "Configurações", icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveNav(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="p-4 m-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 font-bold text-sm">
            <User className="w-4 h-4" />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-xs font-semibold text-white truncate">Conta Enterprise</span>
            <span className="text-[11px] text-slate-400 truncate">admin@empresa.com</span>
          </div>
        </div>
      </aside>

      {/* Main Workspace Content Area */}
      <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-8 md:p-10 space-y-8">
        {/* Workspace Title & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              Localize seu conteúdo para o mundo
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-1">
              Defina o briefing de marketing, selecione os países-alvo e gere versões perfeitamente adaptadas ao mercado global.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Motor IA 4.0 Ativo
          </div>
        </div>

        {/* Campaign Briefing & Input Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Extended Marketing Briefing Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Briefing Setup Box */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-800/80 space-y-5">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 border-b border-slate-800/80 pb-3">
                <Target className="w-4 h-4 text-indigo-400" />
                Briefing da Campanha Internacional
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Campaign Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Nome da Campanha</label>
                  <input
                    type="text"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                    placeholder="Ex: Lançamento Global Q3"
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* Product Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Produto ou Serviço Promovido</label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Ex: Plataforma SaaS LocalizeAI"
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Target Audience */}
                <div className="sm:col-span-1 space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Público-Alvo</label>
                  <input
                    type="text"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="Ex: CEOs, Gestores de Growth..."
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* Campaign Goal */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Objetivo da Campanha</label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  >
                    {GOALS.map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Channel */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Canal de Publicação</label>
                  <select
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  >
                    {CHANNELS.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Offer / CTA */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span>Oferta ou CTA Principal (Opcional)</span>
                  <span className="text-[11px] text-slate-500">Ex: 20% OFF + 14 dias grátis</span>
                </label>
                <input
                  type="text"
                  value={offer}
                  onChange={(e) => setOffer(e.target.value)}
                  placeholder="Ex: 20% de desconto na assinatura anual + 14 dias de teste grátis"
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Textarea Box */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-800/80 space-y-3">
              <label htmlFor="content-input" className="text-sm font-semibold text-slate-200 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  Conteúdo Original para Localização
                </span>
                <span className="text-xs text-slate-400">{content.length} caracteres</span>
              </label>
              <textarea
                id="content-input"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Cole aqui seu anúncio, e-mail de vendas, post para redes sociais ou cópia do site..."
                className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm leading-relaxed resize-y"
              />
            </div>

            {/* Markets Selection */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  Seleção de Mercados de Alvo
                </label>
                <span className="text-xs text-slate-400">
                  {selectedMarkets.length} {selectedMarkets.length === 1 ? "país selecionado" : "países selecionados"}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {MARKETS.map((m) => {
                  const isSelected = selectedMarkets.includes(m.id);
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => toggleMarket(m.id)}
                      className={`p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-500/10"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl">{m.flag}</span>
                        {isSelected && <Check className="w-4 h-4 text-indigo-400" />}
                      </div>
                      <span className="text-xs font-bold text-slate-200 mt-1">{m.name}</span>
                      <span className="text-[10px] text-slate-400">{m.lang}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Parameters & Config */}
          <div className="space-y-6">
            {/* Language & Tone Box */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-800/80 space-y-5">
              <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-400" />
                Parâmetros de Tradução & Estilo
              </h3>

              {/* Source Language */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5" />
                  Idioma de Origem
                </label>
                <select
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                >
                  <option value="pt-BR">Português (Brasil)</option>
                  <option value="en-US">Inglês (Estados Unidos)</option>
                  <option value="es-ES">Espanhol (Espanha)</option>
                </select>
              </div>

              {/* Tone of Voice */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                  <Wand2 className="w-3.5 h-3.5 text-cyan-400" />
                  Tom de Voz
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                >
                  {TONES.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Keywords */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  Palavras-chave Opcionais (SEO)
                </label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="Ex: SaaS, IA, Conversão..."
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Action Submit Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !content.trim()}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 disabled:opacity-50 text-white font-bold text-base shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                  <span>Processando estratégia de localização...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-cyan-300 group-hover:rotate-12 transition-transform" />
                  <span>Gerar versões localizadas</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mocked Results Section */}
        {isGenerating && (
          <div className="p-12 rounded-2xl glass-panel border border-slate-800 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/30 mx-auto flex items-center justify-center text-indigo-400">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
            <h3 className="text-lg font-bold text-white">Processando inteligência cultural para {selectedMarkets.length} mercados...</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Nossa IA está adaptando o tom de voz, inserindo chamadas para ação específicas da região e ajustando normas legais e de moeda.
            </p>
          </div>
        )}

        {results && !isGenerating && (
          <div className="space-y-6 animate-in fade-in duration-500 pt-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Campanha Localizada: {campaignName} ({results.length} Países)
              </h2>
              <span className="text-xs text-slate-400">Pronto para publicação</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((res, index) => {
                const isCopied = copiedIndex === index;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl glass-panel border border-slate-800/90 space-y-5 flex flex-col justify-between relative group hover:border-slate-700 transition-all"
                  >
                    <div className="space-y-4">
                      {/* Card Header */}
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl">{res.flag}</span>
                          <div>
                            <div className="text-sm font-bold text-white flex items-center gap-2">
                              {res.country}
                              <span className="text-[10px] font-normal px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                {res.lang}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-400">Canal: {CHANNELS.find(c => c.id === channel)?.label || "Digital"}</div>
                          </div>
                        </div>

                        <button
                          onClick={() => handleCopy(res, index)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                            isCopied
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-400" />
                              <span>Copiar versão</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Main Copy Headline */}
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400">
                          Título Adaptado
                        </span>
                        <h4 className="text-base font-bold text-white leading-snug">{res.headline}</h4>
                      </div>

                      {/* Main Content Text */}
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                          Texto Localizado
                        </span>
                        <p className="text-sm text-slate-300 whitespace-pre-line leading-relaxed p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
                          {res.content}
                        </p>
                      </div>

                      {/* Adapted CTA Callout */}
                      <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                          <Megaphone className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>CTA Adaptado:</span>
                        </div>
                        <span className="text-xs font-bold text-cyan-300 bg-slate-950 px-2.5 py-1 rounded border border-cyan-500/30">
                          {res.adaptedCta}
                        </span>
                      </div>

                      {/* Local SEO Keywords / Hashtags */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                          Hashtags & Palavras-chave Locais
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {res.localKeywords.map((kw, i) => (
                            <span key={i} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Structured Adaptation Notes */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Notas de Adaptação Cultural & Mercado:
                        </span>
                        <div className="space-y-1.5 text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                          <div className="flex items-start gap-2">
                            <span className="text-cyan-400 font-bold">•</span>
                            <span><strong className="text-slate-300">Cultural & Idioma:</strong> {res.notes.cultural}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span><strong className="text-slate-300">Moeda & Sazonalidade:</strong> {res.notes.currencyAndSeasonal}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-indigo-400 font-bold">•</span>
                            <span><strong className="text-slate-300">Tom & Estilo:</strong> {res.notes.toneAndStyle}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Discrete Legal & Compliance Notice */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Aviso:</strong> Revise informações legais, preços e disponibilidade antes de publicar em seus canais oficiais.
              </span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
