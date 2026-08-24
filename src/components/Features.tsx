"use client";

import { Globe, Languages, Search, FolderKanban, Wand2, Share2, Sparkles } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Localização Cultural",
    description: "Vá além da simples tradução de palavras. Nossa IA adapta gírias, expressões regionais e nuances culturais para que sua marca pareça ter nascido naquele país.",
    tag: "Engajamento",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Languages,
    title: "Tradução Contextual",
    description: "Preserva a intenção comercial e a psicologia de vendas original do seu texto sem traduções literais robóticas ou erros de interpretação.",
    tag: "Qualidade",
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: Search,
    title: "SEO por Mercado",
    description: "Alinha automaticamente palavras-chave de busca locais em cada idioma para garantir alto posicionamento no Google e motores de busca regionais.",
    tag: "Tráfego Organico",
    color: "from-emerald-400 to-teal-600",
  },
  {
    icon: FolderKanban,
    title: "Gerenciamento de Campanhas",
    description: "Organize seus lançamentos por produto, canal de divulgação e país em um único painel centralizado sem perder o histórico de alterações.",
    tag: "Organização",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Wand2,
    title: "Preservação de Tom de Voz",
    description: "Mantenha a identidade da sua marca intacta, seja com um tom de voz estritamente profissional, técnico, descontraído ou focado em vendas diretas.",
    tag: "Branding",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Share2,
    title: "Exportação Instantânea",
    description: "Copie as versões com 1 clique ou exporte em blocos diretamente para suas ferramentas de e-mail marketing, CMS e redes sociais.",
    tag: "Produtividade",
    color: "from-violet-500 to-indigo-600",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="py-24 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Recursos Exclusivos de Localização
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tudo o que sua equipe precisa para <span className="gradient-text">vender globalmente</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Elimine barreiras linguísticas e crie cópias de alta conversão adaptadas aos hábitos de consumo de cada região.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-indigo-400 group-hover:text-cyan-400 transition-colors">
                  Saiba mais sobre {item.title} →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
