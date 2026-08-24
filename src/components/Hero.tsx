"use client";

import { ArrowRight, Play, CheckCircle2, ShieldCheck, Globe, Sparkles, Languages } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 text-xs sm:text-sm font-medium text-indigo-300 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-400 font-semibold">LocalizeAI 4.0</span>
            <span className="text-slate-400">|</span>
            <span>Inteligência Cultural & Tradução Contextual</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Adapte seu conteúdo <br className="hidden sm:inline" />
            <span className="gradient-text">para qualquer mercado</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Crie seu conteúdo uma vez e gere versões localizadas, persuasivas e adaptadas culturalmente para vários países em segundos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white font-semibold text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              Criar Campanha Gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-slate-200 font-semibold text-base border border-slate-800 hover:bg-slate-800/60 hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              <Play className="w-4 h-4 fill-cyan-400 text-cyan-400 group-hover:scale-110 transition-transform" />
              Abrir Dashboard
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sem necessidade de cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Conformidade com mais de 30 idiomas</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Pronto para Brasil, EUA, México e Europa</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner / Localized Campaign Snapshot */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-indigo-500/30 via-slate-800/40 to-slate-950/80 shadow-2xl shadow-indigo-950/50">
            <div className="rounded-xl bg-slate-950/90 border border-slate-800/80 overflow-hidden">
              {/* Window Bar Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">https://app.localizeai.com/campaigns/q3-global</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Localizações Ativas: 4 Países</span>
                </div>
              </div>

              {/* Localized Cards Preview */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-b from-slate-950 to-slate-900/60">
                {/* Campaign Card 1: Estados Unidos */}
                <div className="p-5 rounded-xl glass-panel border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <span className="text-lg">🇺🇸</span> Estados Unidos (EN)
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      ROI Focus
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    "Supercharge your business growth with enterprise AI automation"
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    Start your 14-day free trial today — no credit card required. Streamline operations in seconds.
                  </p>
                </div>

                {/* Campaign Card 2: México */}
                <div className="p-5 rounded-xl glass-panel border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <span className="text-lg">🇲🇽</span> México (ES)
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Persuasivo
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    "Impulsa el crecimiento de tu empresa con automatización de IA"
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    Optimiza tus flujos de trabajo e incrementa la productividad de tu equipo hoy mismo.
                  </p>
                </div>

                {/* Campaign Card 3: Alemanha */}
                <div className="p-5 rounded-xl glass-panel border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <span className="text-lg">🇩🇪</span> Alemanha (DE)
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      DSGVO OK
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    "Skalieren Sie Ihr Unternehmen mit datenschutzkonformer KI"
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    Steigern Sie Ihre Effizienz nahtlos gemäß höchsten DSGVO-Sicherheitsstandards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
