"use client";

import { ArrowRight, Play, CheckCircle2, ShieldCheck, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Ambient Halo Light Beams */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none animate-halo-pulse" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-halo border border-white/10 text-xs sm:text-sm font-medium text-indigo-200 shadow-xl">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-400 font-semibold tracking-wide">LocalizeAI 4.0</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Inteligência Cultural & Tradução Contextual</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
          </div>

          {/* Editorial Headline */}
          <h1 className="editorial-title text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white">
            Adapte seu conteúdo <br className="hidden sm:inline" />
            <span className="gradient-text-halo">para qualquer mercado</span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="editorial-sub text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Crie seu conteúdo uma vez e gere versões localizadas, persuasivas e adaptadas culturalmente para vários países em segundos.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/dashboard"
              className="btn-halo-primary w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2 group shadow-xl"
            >
              Criar Campanha Gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel-halo text-slate-200 font-semibold text-base border border-white/10 hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              <Play className="w-4 h-4 fill-cyan-400 text-cyan-400 group-hover:scale-110 transition-transform" />
              Abrir Dashboard
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs sm:text-sm text-slate-400">
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

        {/* Hero Visual Container / Localized Campaign Showcase */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-indigo-500/30 via-slate-800/40 to-slate-950/90 shadow-2xl shadow-indigo-950/60">
            <div className="rounded-xl bg-[#080b18] border border-white/10 overflow-hidden">
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/5 flex items-center justify-between">
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
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-b from-[#080b18] to-slate-950/90">
                {/* Campaign Card 1: EUA */}
                <div className="p-5 rounded-xl glass-panel-halo border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <span className="text-lg">🇺🇸</span> Estados Unidos (EN)
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      ROI Focus
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white leading-snug">
                    "Supercharge your business growth with enterprise AI automation"
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    Start your 14-day free trial today — no credit card required. Streamline operations in seconds.
                  </p>
                </div>

                {/* Campaign Card 2: México */}
                <div className="p-5 rounded-xl glass-panel-halo border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <span className="text-lg">🇲🇽</span> México (ES)
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Persuasivo
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white leading-snug">
                    "Impulsa el crecimiento de tu empresa con automatización de IA"
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    Optimiza tus flujos de trabajo e incrementa la productividad de tu equipo hoy mismo.
                  </p>
                </div>

                {/* Campaign Card 3: Alemanha */}
                <div className="p-5 rounded-xl glass-panel-halo border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <span className="text-lg">🇩🇪</span> Alemanha (DE)
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      DSGVO OK
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white leading-snug">
                    "Skalieren Sie Ihr Unternehmen mit datenschutzkonformer KI"
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
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
