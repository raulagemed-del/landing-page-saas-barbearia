import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#0e0f14] border-b border-neutral-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <span>Histórias Reais de Sucesso</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Comunidade Barbearia</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Quem usa o FlowBarb não volta para a agenda de papel
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Mais de 840 donos de barbearia profissionalizaram sua gestão, multiplicaram faturamento e acabaram com as dores de cabeça de comissões.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-neutral-800/90 bg-[#12141c] p-6 flex flex-col justify-between hover:border-neutral-700/80 transition-all"
            >
              <div className="space-y-4">
                {/* Metric Badge */}
                <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800/80">
                  <p className="font-mono text-xl font-bold text-[#d4af37] tracking-tight tabular-nums">
                    {t.metric}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    {t.metricLabel}
                  </p>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Lockup */}
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">{t.ownerName}</p>
                  <p className="text-[11px] text-neutral-400">
                    {t.role} · {t.shopName}
                  </p>
                  <p className="text-[10px] text-neutral-500">{t.city}</p>
                </div>
                <div className="text-right">
                  <div className="flex gap-0.5 text-[#d4af37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 mt-1 block">
                    {t.barbersCount} barbeiros
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Barbershop Ecosystem Trust strip */}
        <div className="mt-14 pt-10 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-neutral-400 text-xs font-medium">
          <span className="text-neutral-400 uppercase tracking-widest text-[11px] font-semibold">
            Tecnologia aprovada em:
          </span>
          <span className="hover:text-white transition-colors">Barbearias Tradicionais</span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="hover:text-white transition-colors">Studios de Alta Performance</span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="hover:text-white transition-colors">Redes & Franquias</span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="hover:text-white transition-colors">Barbeiros Autônomos</span>
        </div>

      </div>
    </section>
  );
};
