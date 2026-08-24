"use client";

import { useState } from "react";
import {
  Sparkles,
  Copy,
  Check,
  Languages,
  Wand2,
  RefreshCw,
  ArrowRight,
  MessageSquare
} from "lucide-react";

export default function DashboardPreview() {
  const [activeCategory, setActiveCategory] = useState<"ads" | "emails" | "social">("ads");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copiedMarket, setCopiedMarket] = useState<string | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const handleCopy = (market: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMarket(market);
    setTimeout(() => setCopiedMarket(null), 2000);
  };

  return (
    <section id="demo" className="py-28 relative bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-halo border border-white/10 text-xs font-semibold text-cyan-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Prévia de Campanhas Localizadas
          </div>
          <h2 className="editorial-title text-3xl sm:text-5xl font-extrabold text-white">
            Veja a inteligência do <span className="gradient-text-halo">LocalizeAI em Ação</span>
          </h2>
          <p className="editorial-sub text-base sm:text-lg text-slate-400">
            Experimente como o mesmo texto base se transforma em mensagens persuasivas e perfeitamente adaptadas a cada cultura.
          </p>
        </div>

        {/* Embedded Interactive Interface */}
        <div className="max-w-5xl mx-auto glass-panel-halo rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Control Bar */}
          <div className="p-4 sm:p-6 bg-slate-900/90 border-b border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 p-1 bg-slate-950/80 rounded-xl border border-white/10 w-full sm:w-auto">
              <button
                onClick={() => setActiveCategory("ads")}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeCategory === "ads"
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
                Anúncios (Ads)
              </button>
              <button
                onClick={() => setActiveCategory("emails")}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeCategory === "emails"
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Languages className="w-4 h-4 text-emerald-400" />
                E-mails de Vendas
              </button>
              <button
                onClick={() => setActiveCategory("social")}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeCategory === "social"
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                Redes Sociais
              </button>
            </div>

            <button
              onClick={handleRefresh}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors border border-white/10 self-end sm:self-auto cursor-pointer"
              title="Recarregar demonstração"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin text-cyan-400" : ""}`} />
            </button>
          </div>

          {/* Interactive Body */}
          <div className="p-6 md:p-8 bg-[#070913]/90 space-y-6">
            {/* Input Box Summary */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="text-base">🇧🇷</span> Texto Base em Português (Origem)
                </span>
                <span className="text-indigo-400">Tom: Persuasivo</span>
              </div>
              <p className="text-sm font-medium text-slate-200 bg-[#070913] p-4 rounded-lg border border-white/5 leading-relaxed">
                {activeCategory === "ads" &&
                  "\"Acelere o crescimento da sua empresa com nossa inteligência artificial. Teste grátis por 14 dias sem cartão!\""}
                {activeCategory === "emails" &&
                  "\"Olá! Notamos que sua equipe gasta horas traduzindo cópias de marketing. Conheça a LocalizeAI e teste por 14 dias sem custo.\""}
                {activeCategory === "social" &&
                  "\"Quer expandir suas vendas para os EUA e Europa sem contratar agências internacionais? Veja como o LocalizeAI faz isso em minutos!\""}
              </p>
            </div>

            {/* Localized Outputs Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* USA Card */}
              <div className="p-6 rounded-xl glass-panel-halo border border-white/10 space-y-3.5 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                    <span className="text-lg">🇺🇸</span> Estados Unidos (EN-US)
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        "us",
                        "Supercharge your revenue growth with enterprise-grade AI automation. Start your 14-day free trial — no credit card required."
                      )
                    }
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-white/5 cursor-pointer"
                  >
                    {copiedMarket === "us" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-sm font-bold text-white leading-snug">
                  "Supercharge your revenue growth with enterprise AI"
                </div>
                <p className="text-xs text-slate-300 bg-[#070913] p-3.5 rounded-lg border border-white/5 leading-relaxed">
                  {activeCategory === "ads" &&
                    "Start your 14-day free trial today — no credit card required. Scale your team operations instantly."}
                  {activeCategory === "emails" &&
                    "Hey there! Ready to cut your international localization overhead by 80%? Try LocalizeAI free for 14 days."}
                  {activeCategory === "social" &&
                    "Scaling your SaaS to North America? Ditch slow agencies and automate cultural copy adaptation with LocalizeAI."}
                </p>
                <span className="inline-block text-[11px] text-cyan-400 font-medium">
                  ✓ Foco em ROI & velocidade de onboarding
                </span>
              </div>

              {/* Mexico Card */}
              <div className="p-6 rounded-xl glass-panel-halo border border-white/10 space-y-3.5 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                    <span className="text-lg">🇲🇽</span> México (ES-MX)
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        "mx",
                        "Impulsa el crecimiento de tu empresa con automatización de IA. Prueba gratis durante 14 días sin tarjeta."
                      )
                    }
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-white/5 cursor-pointer"
                  >
                    {copiedMarket === "mx" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-sm font-bold text-white leading-snug">
                  "Impulsa el crecimiento de tu empresa con IA"
                </div>
                <p className="text-xs text-slate-300 bg-[#070913] p-3.5 rounded-lg border border-white/5 leading-relaxed">
                  {activeCategory === "ads" &&
                    "Prueba gratis durante 14 días sin necesidad de tarjeta de crédito. ¡Empieza a escalar hoy mismo!"}
                  {activeCategory === "emails" &&
                    "¡Hola! Optimiza los flujos de trabajo de tu equipo e incrementa las conversiones en Latinoamérica."}
                  {activeCategory === "social" &&
                    "¿Quieres vender en todo el continente sin complicarte? Descubre cómo LocalizeAI lo hace en minutos."}
                </p>
                <span className="inline-block text-[11px] text-indigo-400 font-medium">
                  ✓ Espanhol LATAM com gatilhos de conversão
                </span>
              </div>

              {/* Germany Card */}
              <div className="p-6 rounded-xl glass-panel-halo border border-white/10 space-y-3.5 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                    <span className="text-lg">🇩🇪</span> Alemanha (DE-DE)
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        "de",
                        "Skalieren Sie Ihr Unternehmen mit datenschutzkonformer KI. Jetzt 14 Tage kostenlos testen."
                      )
                    }
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-white/5 cursor-pointer"
                  >
                    {copiedMarket === "de" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-sm font-bold text-white leading-snug">
                  "Skalieren Sie Ihr Unternehmen mit datenschutzkonformer KI"
                </div>
                <p className="text-xs text-slate-300 bg-[#070913] p-3.5 rounded-lg border border-white/5 leading-relaxed">
                  {activeCategory === "ads" &&
                    "Jetzt 14 Tage kostenlos testen – ohne Kreditkarte und gemäß höchsten DSGVO-Sicherheitsstandards."}
                  {activeCategory === "emails" &&
                    "Sehr geehrte Damen und Herren, automatisieren Sie Ihre Übersetzungsprozesse präzise und sicher."}
                  {activeCategory === "social" &&
                    "Internationale Expansion leicht gemacht: Wie Sie Marketingtexte DSGVO-konform in Minuten lokalisieren."}
                </p>
                <span className="inline-block text-[11px] text-emerald-400 font-medium">
                  ✓ Tom formal (Sie-Form) & Conformidade DSGVO
                </span>
              </div>

              {/* Action Banner */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-950/90 to-slate-900 border border-indigo-500/30 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
                    <Wand2 className="w-4 h-4 text-cyan-400" />
                    Experimente com seu próprio texto
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Gere versões para o seu produto em tempo real
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Acesse nossa plataforma interativa e teste com o seu próprio texto de marketing.
                  </p>
                </div>

                <a
                  href="/dashboard"
                  className="btn-halo-primary w-full py-3 rounded-xl text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5"
                >
                  Abrir LocalizeAI no Dashboard
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
