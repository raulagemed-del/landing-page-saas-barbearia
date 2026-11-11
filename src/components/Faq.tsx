import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#0c0d10] border-b border-neutral-800/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Tire Suas Dúvidas</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Transparência Total</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Perguntas Frequentes de Donos de Barbearia
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Entenda como o FlowBarb funciona no dia a dia da sua operação.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-neutral-800/80 bg-[#12141a] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-[#d4af37] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#d4af37]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/50 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
