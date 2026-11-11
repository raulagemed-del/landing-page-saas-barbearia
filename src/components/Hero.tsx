import React from 'react';
import { ArrowRight, Smartphone, Sparkles, CheckCircle, ShieldCheck, Users } from 'lucide-react';

interface HeroProps {
  onOpenSignup: () => void;
  onOpenLogin: (role?: 'owner' | 'barber' | 'client') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSignup, onOpenLogin }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-neutral-800/80">
      {/* Background subtle radial illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#d4af37]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context kicker: clean unboxed text with subtle separator */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              <span>flowbarb.site</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">Software SaaS Especializado para Barbearias</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-[1.12]">
              A Gestão da Sua Barbearia{' '}
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f3d97b] to-[#d4af37] bg-clip-text text-transparent">
                na Palma da Mão
              </span>{' '}
              com Inteligência Artificial
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Deixe o <strong className="text-white font-medium">FlowBarb</strong> organizar sua agenda 24h, financeiro e comissões de equipe enquanto você foca no corte. Logins independentes para barbeiros e app sem atrito para seus clientes no <span className="text-neutral-200 underline decoration-[#d4af37]/50 underline-offset-4">flowbarb.site</span>.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenSignup}
                className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5b842] px-6 py-3.5 text-sm font-bold text-neutral-950 transition-all hover:brightness-110 active:scale-95 shadow-md shadow-[#d4af37]/20 whitespace-nowrap"
              >
                <span>Começar Teste Grátis de 14 Dias</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#demonstracao"
                className="flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/90 hover:bg-neutral-800/80 px-5 py-3.5 text-sm font-medium text-neutral-200 transition-colors whitespace-nowrap hover:border-neutral-700"
              >
                <Smartphone className="h-4 w-4 text-[#d4af37]" />
                <span>Ver Demonstração Interativa</span>
              </a>
            </div>

            {/* Trust bullet features */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-[#d4af37]" />
                <span>Sem necessidade de cartão para testar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-[#d4af37]" />
                <span>Configuração em 5 minutos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-[#d4af37]" />
                <span>Cancelamento livre sem fidelidade</span>
              </div>
            </div>

            {/* Quick Proof metrics strip */}
            <div className="pt-6 border-t border-neutral-800/90 grid grid-cols-3 gap-4">
              <div>
                <p className="font-mono text-2xl font-bold text-white tabular-nums tracking-tight">840+</p>
                <p className="text-xs text-neutral-400 mt-0.5">Barbearias ativas</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-[#d4af37] tabular-nums tracking-tight">-78%</p>
                <p className="text-xs text-neutral-400 mt-0.5">Faltas com WhatsApp</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-white tabular-nums tracking-tight">+35%</p>
                <p className="text-xs text-neutral-400 mt-0.5">Retenção com IA</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              
              {/* Main Barbershop Image with subtle overlay */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/hero_barbershop_modern_1794368577545.jpg"
                  alt="Interior de barbearia moderna com sistema FlowBarb"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14] via-black/30 to-transparent" />
              </div>

              {/* Floating UI Card inside Hero: Live Operations Status */}
              <div className="p-4 bg-[#111319] border-t border-neutral-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                    <span className="text-xs font-semibold text-white tracking-wide">Painel do Dono em Tempo Real</span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 tabular-nums">Hoje · Sáb 14:32</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-lg bg-neutral-950/70 border border-neutral-800/60">
                    <p className="text-[11px] text-neutral-400">Faturamento do Dia</p>
                    <p className="font-mono text-lg font-bold text-white tabular-nums">R$ 2.480,00</p>
                    <p className="text-[10px] text-emerald-400 font-medium">+18% vs sábado passado</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-950/70 border border-neutral-800/60">
                    <p className="text-[11px] text-neutral-400">Ocupação de Cadeiras</p>
                    <p className="font-mono text-lg font-bold text-[#d4af37] tabular-nums">92%</p>
                    <p className="text-[10px] text-neutral-400">4 de 4 barbeiros atendendo</p>
                  </div>
                </div>

                {/* AI Notification Card */}
                <div className="p-2.5 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-start gap-2.5 text-left">
                  <Sparkles className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-white">IA FlowBarb Ativa</p>
                    <p className="text-[11px] text-neutral-300">
                      3 clientes que não cortavam há 25 dias acabaram de confirmar via WhatsApp automático.
                    </p>
                  </div>
                </div>

                {/* Interactive Trigger in hero */}
                <div className="pt-1 flex items-center justify-between text-xs text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Equipe: Lucas, Felipe, Diego</span>
                  </div>
                  <button
                    onClick={() => onOpenLogin('barber')}
                    className="text-[#d4af37] hover:underline font-medium text-xs flex items-center gap-1"
                  >
                    <span>Ver app da equipe</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
