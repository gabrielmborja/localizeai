"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "Como o LocalizeAI garante que o texto não será traduzido ao pé da letra?",
    answer: "Nossa IA não faz traduções palavra por palavra. Ela analisa o contexto do seu negócio, a psicologia de vendas e as nuances culturais do país de destino, adaptando gírias, expressões idiomáticas e chamadas para ação para soarem 100% naturais.",
  },
  {
    question: "Quais idiomas e mercados são suportados?",
    answer: "Suportamos mais de 30 idiomas e variações regionais, incluindo Português (BR e PT), Inglês (US e UK), Espanhol (LATAM e Espanha), Alemão, Francês, Italiano, Japonês, Chinês e muito mais.",
  },
  {
    question: "Como funciona o período de teste gratuito de 14 dias?",
    answer: "Você pode se cadastrar e acessar a plataforma inteira por 14 dias sem precisar informar cartão de crédito. Ao final do período, escolha o plano que melhor atende o volume de palavras da sua equipe.",
  },
  {
    question: "Posso ajustar o tom de voz para manter a identidade da minha marca?",
    answer: "Com certeza! Você pode selecionar entre tons Profissional/Corporativo, Persuasivo/Vendas, Descontraído/Moderno, Técnico/Especialista ou personalizar instruções adicionais de estilo antes de gerar.",
  },
  {
    question: "Meus conteúdos e textos confidenciais estão seguros?",
    answer: "Sim. Todos os dados são criptografados com padrões AES-256 e não são utilizados para treinamento público de modelos de terceiros. Mantemos total conformidade com a LGPD e GDPR.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            Ainda tem dúvidas sobre como o LocalizeAI vai acelerar sua expansão global de marketing?
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-xl border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-900/50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-indigo-600 text-white border-indigo-500" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-300 border-t border-slate-800/60 leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-500 p-0.5 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Precisa de suporte na expansão global?</h4>
              <p className="text-sm text-slate-400">Nossa equipe especializada está pronta para auxiliar no onboarding da sua marca.</p>
            </div>
          </div>
          <a
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-colors shrink-0"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
