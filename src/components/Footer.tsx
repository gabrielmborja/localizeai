"use client";

import { useState } from "react";
import { Globe, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Globe className="w-5 h-5 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                LocalizeAI <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Global</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Plataforma de inteligência cultural, tradução contextual e localização de conteúdo de marketing em escala.
            </p>

            {/* Newsletter Form */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Dicas de Expansão Global & Marketing
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-sm text-emerald-400 font-semibold p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Inscrição realizada com sucesso!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail..."
                    className="px-4 py-2.5 text-sm rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 flex-1"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors flex items-center gap-1 shrink-0"
                  >
                    Assinar
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Produto */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Produto</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#recursos" className="hover:text-indigo-400 transition-colors">Localização Cultural</a></li>
              <li><a href="#demo" className="hover:text-indigo-400 transition-colors">Prévia de Campanhas</a></li>
              <li><a href="#precos" className="hover:text-indigo-400 transition-colors">Planos & Preços</a></li>
              <li><a href="/dashboard" className="hover:text-indigo-400 transition-colors">Acessar Dashboard</a></li>
            </ul>
          </div>

          {/* Column 3: Soluções */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Mercados</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Estados Unidos (EN)</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">América Latina (ES)</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Europa (DE/FR/IT)</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Ásia & Pacífico</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Suporte */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Legal & Contato</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Segurança & LGPD</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <span>© 2026 LocalizeAI. Todos os direitos reservados.</span>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Motor de Localização 100% Operacional</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors font-medium flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors font-medium flex items-center gap-1.5"
            >
              <span>Twitter / X</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors font-medium flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
