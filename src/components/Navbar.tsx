"use client";

import { useState, useEffect } from "react";
import { Globe, Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#070913]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/40"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-[#070913] rounded-[10px] flex items-center justify-center">
                <Globe className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                LocalizeAI
                <span className="text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 uppercase">
                  Global
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#recursos"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-400 hover:after:w-full after:transition-all"
            >
              Recursos
            </a>
            <a
              href="#demo"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              Exemplos de Campanhas
            </a>
            <a
              href="#precos"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-400 hover:after:w-full after:transition-all"
            >
              Planos & Preços
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-400 hover:after:w-full after:transition-all"
            >
              FAQ
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/dashboard"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2"
            >
              Entrar
            </a>
            <a
              href="/dashboard"
              className="btn-halo-primary px-5 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2 group"
            >
              Criar Campanha Grátis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-slate-400 hover:text-white rounded-xl bg-slate-900/80 border border-slate-800 focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-5 rounded-2xl glass-panel-halo border border-white/10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <a
              href="#recursos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-indigo-400 py-2 border-b border-slate-800/60"
            >
              Recursos
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-indigo-400 py-2 border-b border-slate-800/60"
            >
              Exemplos de Campanhas
            </a>
            <a
              href="#precos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-indigo-400 py-2 border-b border-slate-800/60"
            >
              Planos & Preços
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-indigo-400 py-2 border-b border-slate-800/60"
            >
              FAQ
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-medium text-slate-300 border border-slate-800 rounded-xl bg-slate-900/60"
              >
                Entrar
              </a>
              <a
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 shadow-md shadow-indigo-500/20"
              >
                Criar Campanha Grátis
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
