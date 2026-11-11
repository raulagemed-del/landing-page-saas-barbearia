import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CtaBannerProps {
  onOpenSignup: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenSignup }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0c0d10] via-[#14161f] to-[#0c0d10] border-b border-neutral-800/80 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4af37]/8 blur-[100px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] bg-[#d4af37]/10 px-3.5 py-1.5 rounded-full border border-[#d4af37]/20 mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          <span>flowbarb.site · O Futuro da Sua Barbearia</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-balance leading-tight">
          Pronto para ter o controle total da sua barbearia na palma da mão?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Junte-se a centenas de barbearias que abandonaram as planilhas e multiplicaram o faturamento com a inteligência do FlowBarb.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenSignup}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5b842] px-8 py-4 text-sm font-bold text-neutral-950 transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-[#d4af37]/25 whitespace-nowrap"
          >
            <span>Criar Conta Gratuita de 14 Dias</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#d4af37]" />
            <span>Sem fidelidade</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#d4af37]" />
            <span>Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#d4af37]" />
            <span>Suporte humanizado no WhatsApp</span>
          </div>
        </div>

      </div>
    </section>
  );
};
