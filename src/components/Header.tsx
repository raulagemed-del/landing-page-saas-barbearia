import React, { useState } from 'react';
import { Scissors, Menu, X, ArrowRight, UserCheck } from 'lucide-react';

interface HeaderProps {
  onOpenSignup: () => void;
  onOpenLogin: (role?: 'owner' | 'barber' | 'client') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSignup, onOpenLogin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-[#0c0d10]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Brand wordmark (single element, clean display face) */}
        <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#d4af37] to-[#aa7d1d] text-neutral-950 shadow-sm shadow-[#d4af37]/20 transition-transform group-hover:scale-105">
            <Scissors className="h-5 w-5" />
          </div>
          <span className="font-display text-xl tracking-tight text-white">
            Flow<span className="text-[#d4af37]">Barb</span>
          </span>
        </a>

        {/* Zone 2: 4–5 single-line nav links with clean typography */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#recursos" className="whitespace-nowrap shrink-0 transition-colors hover:text-[#d4af37]">
            Recursos
          </a>
          <a href="#demonstracao" className="whitespace-nowrap shrink-0 transition-colors hover:text-[#d4af37]">
            Visão na Prática
          </a>
          <a href="#inteligencia-ia" className="whitespace-nowrap shrink-0 transition-colors hover:text-[#d4af37]">
            Tecnologia IA
          </a>
          <a href="#calculadora" className="whitespace-nowrap shrink-0 transition-colors hover:text-[#d4af37]">
            Calculadora ROI
          </a>
          <a href="#planos" className="whitespace-nowrap shrink-0 transition-colors hover:text-[#d4af37]">
            Planos
          </a>
        </nav>

        {/* Zone 3: Primary CTA action and subtle login trigger */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenLogin('owner')}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-white rounded-lg transition-colors whitespace-nowrap shrink-0 border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60"
          >
            <UserCheck className="h-3.5 w-3.5 text-[#d4af37]" />
            <span>Acessar Sistema</span>
          </button>
          <button
            onClick={onOpenSignup}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#e5b842] px-4 py-2 text-xs font-bold text-neutral-950 transition-all hover:brightness-110 active:scale-95 shadow-sm shadow-[#d4af37]/20 whitespace-nowrap shrink-0"
          >
            <span>Testar 14 Dias Grátis</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenLogin('owner')}
            className="px-2.5 py-1.5 text-xs font-semibold text-neutral-200 border border-neutral-800 rounded-md bg-neutral-900"
          >
            Entrar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-400 hover:text-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-neutral-800 bg-[#0e0f14] px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-300">
            <a
              href="#recursos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d4af37]"
            >
              Recursos
            </a>
            <a
              href="#demonstracao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d4af37]"
            >
              Visão na Prática
            </a>
            <a
              href="#inteligencia-ia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d4af37]"
            >
              Tecnologia IA
            </a>
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d4af37]"
            >
              Calculadora ROI
            </a>
            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d4af37]"
            >
              Planos & Preços
            </a>
          </nav>
          <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin('barber');
              }}
              className="w-full py-2.5 text-xs font-semibold text-neutral-200 bg-neutral-900 rounded-lg border border-neutral-800 text-center"
            >
              Login Barbeiro / Equipe
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignup();
              }}
              className="w-full py-2.5 text-xs font-bold text-neutral-950 bg-[#d4af37] rounded-lg text-center"
            >
              Começar Teste Grátis
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
