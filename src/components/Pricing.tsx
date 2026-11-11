import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { PLANS } from '../data/mockData';

interface PricingProps {
  onOpenSignup: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenSignup }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="planos" className="py-20 border-b border-neutral-800/80 bg-[#0c0d10] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <span>Investimento Transparente</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Sem Taxas Escondidas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Planos que cabem no bolso e multiplicam seu lucro
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Comece com 14 dias de teste grátis sem precisar de cartão de crédito. Cancele quando quiser no <strong className="text-neutral-300">flowbarb.site</strong>.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center p-1 rounded-xl bg-neutral-900 border border-neutral-800">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                billingCycle === 'monthly'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Faturamento Mensal
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                billingCycle === 'annual'
                  ? 'bg-[#d4af37] text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Faturamento Anual</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                billingCycle === 'annual' ? 'bg-neutral-950 text-[#d4af37]' : 'bg-[#d4af37]/20 text-[#d4af37]'
              }`}>
                20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-[#151720] border-2 border-[#d4af37] shadow-xl shadow-[#d4af37]/10 ring-1 ring-[#d4af37]/30 scale-[1.02] md:-translate-y-2'
                    : 'bg-[#101217] border border-neutral-800/90 hover:border-neutral-700/80'
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d4af37] to-[#e5b842] text-neutral-950 font-bold text-[11px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md">
                    {plan.badge || 'Mais Escolhido'}
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white font-display">{plan.name}</h3>
                      <span className="text-xs font-mono font-medium text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                        {plan.barbersCount}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 min-h-[36px] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="pb-6 mb-6 border-b border-neutral-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-neutral-400 text-sm font-semibold">R$</span>
                      <span className="font-mono text-4xl font-extrabold text-white tracking-tight tabular-nums">
                        {price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs text-neutral-400">/ mês</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      {billingCycle === 'annual' ? 'Cobrado anualmente (economia de 20%)' : 'Sem contrato de fidelidade'}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      O que está incluído:
                    </p>
                    <ul className="space-y-2.5 text-xs text-neutral-300">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-[#d4af37]' : 'text-emerald-400'}`} />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <button
                    onClick={onOpenSignup}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-[#d4af37] to-[#e5b842] text-neutral-950 hover:brightness-110 active:scale-95 shadow-md shadow-[#d4af37]/20'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                    }`}
                  >
                    <span>{plan.highlight ? 'Assinar Agora com 14 Dias Grátis' : 'Testar 14 Dias Grátis'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-[10px] text-center text-neutral-400 mt-2">
                    Acesso imediato no flowbarb.site
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust banner underneath pricing */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-neutral-900/50 border border-neutral-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <ShieldCheck className="h-5 w-5 text-[#d4af37] shrink-0" />
            <span>Garantia incondicional: Se não gostar em 14 dias, você não paga absolutamente nada.</span>
          </div>
          <button
            onClick={onOpenSignup}
            className="text-[#d4af37] hover:underline font-bold whitespace-nowrap"
          >
            Começar Agora Sem Cartão &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
