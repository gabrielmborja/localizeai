"use client";

import { useState } from "react";
import { Check, Sparkles, Calculator } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [wordCount, setWordCount] = useState<number>(30); // em milhares de palavras (30k)

  const calculateSavings = (kWords: number) => {
    // Estimativa de custo médio com agência de tradução (R$ 0,40 por palavra) vs LocalizeAI
    const agencyCostPerWord = 0.40;
    const monthlyAgencyCost = kWords * 1000 * agencyCostPerWord;
    return monthlyAgencyCost.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <section id="precos" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider">
            Planos & Investimento
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Planos sob medida para <span className="gradient-text">expandir suas vendas</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Cancele a qualquer momento. Sem fidelidade. Teste gratuitamente por 14 dias.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${billingCycle === "monthly" ? "text-white" : "text-slate-400"}`}>
              Cobrança Mensal
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative w-14 h-8 rounded-full bg-slate-800 p-1 transition-colors border border-slate-700 focus:outline-none"
              aria-label="Alternar ciclo de cobrança"
            >
              <div
                className={`w-6 h-6 rounded-full bg-indigo-500 shadow-md transition-transform duration-300 ${
                  billingCycle === "annual" ? "translate-x-6 bg-cyan-400" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-sm font-semibold ${billingCycle === "annual" ? "text-white" : "text-slate-400"}`}>
                Cobrança Anual
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-sm">
                20% OFF
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <div className="rounded-2xl glass-panel p-8 flex flex-col justify-between space-y-8 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Starter</h3>
                <p className="text-sm text-slate-400 mt-1">Para pequenas empresas e criadores expandindo mercados.</p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">
                  {billingCycle === "annual" ? "R$ 149" : "R$ 189"}
                </span>
                <span className="text-slate-400 text-sm font-medium">/ mês</span>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Até 20.000 palavras localizadas / mês</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Suporte a 3 mercados de destino</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Adaptação de tom de voz e estilo</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Exportação instantânea de campanhas</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Suporte por e-mail em português</span>
                </li>
              </ul>
            </div>

            <a
              href="/dashboard"
              className="w-full py-3.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-center transition-colors block"
            >
              Iniciar 14 Dias Grátis
            </a>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="relative rounded-2xl p-[2px] bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-600 shadow-2xl shadow-indigo-500/20 transform lg:-translate-y-2">
            <div className="w-full h-full rounded-[14px] bg-slate-950 p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    Professional
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    MAIS POPULAR
                  </span>
                </div>

                <p className="text-sm text-slate-300">Para equipes de marketing e vendas globais em escala.</p>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    {billingCycle === "annual" ? "R$ 399" : "R$ 499"}
                  </span>
                  <span className="text-slate-400 text-sm font-medium">/ mês</span>
                </div>

                <ul className="space-y-3.5 text-sm text-slate-200">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-semibold text-white">Até 100.000 palavras localizadas / mês</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Mercados e idiomas ilimitados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Alinhamento automático de SEO por país</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Gerenciador de campanhas e histórico</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Integrações com CMS e redes sociais</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Suporte VIP 24/7 prioritário</span>
                  </li>
                </ul>
              </div>

              <a
                href="/dashboard"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold text-center shadow-lg shadow-indigo-500/30 transition-all block"
              >
                Garantir 14 Dias Grátis
              </a>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-2xl glass-panel p-8 flex flex-col justify-between space-y-8 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Enterprise</h3>
                <p className="text-sm text-slate-400 mt-1">Para grandes corporações e marcas multinacionais.</p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">Sob Consulta</span>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Volume de palavras ilimitado</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Glossário e memória de tradução corporativa</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Revisão por linguistas nativos sob demanda</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Autenticação SSO / SAML & Segurança SOC2</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Gerente de contas dedicado</span>
                </li>
              </ul>
            </div>

            <a
              href="#contato"
              className="w-full py-3.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-center transition-colors block"
            >
              Falar com Especialista
            </a>
          </div>
        </div>

        {/* Interactive ROI Calculator */}
        <div className="mt-16 max-w-4xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 flex-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                Calculadora de Economia vs Agências Tradicionais
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Economize milhares de reais em tradução de marketing
              </h3>
              <p className="text-sm text-slate-400">
                Arraste o seletor para estimar seu volume mensal em milhares de palavras:
              </p>

              {/* Slider Control */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-sm font-semibold text-slate-300">
                  <span>Volume Mensal:</span>
                  <span className="text-cyan-400 font-bold text-lg">{wordCount}.000 palavras</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={wordCount}
                  onChange={(e) => setWordCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </div>

            {/* Result Box */}
            <div className="w-full md:w-auto p-6 rounded-xl bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-indigo-500/30 text-center space-y-2 shadow-xl">
              <span className="text-xs font-semibold text-slate-400 uppercase">Custo Tradicional Evitado</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                {calculateSavings(wordCount)}
              </div>
              <p className="text-xs text-slate-400 max-w-[220px] mx-auto">
                Estimado comparando com custo médio de agências de tradução (~R$ 0,40/palavra).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
