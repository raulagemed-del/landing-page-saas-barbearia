import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, ShieldCheck, DollarSign, Check } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenSignup: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenSignup }) => {
  const [barbers, setBarbers] = useState(3);
  const [ticketPrice, setTicketPrice] = useState(65);
  const [cutsPerDay, setCutsPerDay] = useState(8);
  const [daysPerMonth, setDaysPerMonth] = useState(24);

  // Financial calculations
  const totalCutsMonth = barbers * cutsPerDay * daysPerMonth;
  const currentGrossRevenue = totalCutsMonth * ticketPrice;
  
  // No-show rate without automated WhatsApp is typically ~18% in Brazilian barbershops
  const estimatedNoShowLoss = currentGrossRevenue * 0.18;
  
  // FlowBarb reduces no-shows by 78%, recovering roughly 14% of gross revenue
  const recoveredFromNoShows = estimatedNoShowLoss * 0.78;
  
  // AI proactive recall brings back roughly 12% additional appointments that would churn
  const aiAdditionalRevenue = currentGrossRevenue * 0.12;
  
  // Total additional revenue gained per month
  const totalMonthlyGain = recoveredFromNoShows + aiAdditionalRevenue;

  // Yearly projected gain
  const yearlyGain = totalMonthlyGain * 12;

  // FlowBarb Pro monthly cost (approx R$ 89,90)
  const systemCost = 89.9;
  const roiMultiplier = Math.round((totalMonthlyGain / systemCost) * 10) / 10;

  return (
    <section id="calculadora" className="py-20 bg-[#0e0f14] border-b border-neutral-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <Calculator className="h-3.5 w-3.5" />
            <span>Simulador Financeiro</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Retorno Real</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Calcule quanto sua barbearia ganha a mais com o FlowBarb
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Ajuste os controles abaixo com os números da sua barbearia e veja a receita extra gerada com a redução de faltas e reativação de clientes com IA.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-neutral-800 bg-[#12141c] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Barbeiros */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <label className="text-neutral-300 font-medium">Barbeiros / Profissionais na equipe</label>
                  <span className="font-mono text-base font-bold text-white tabular-nums bg-neutral-900 px-3 py-1 rounded-md border border-neutral-800">
                    {barbers} {barbers === 1 ? 'barbeiro' : 'barbeiros'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={barbers}
                  onChange={(e) => setBarbers(Number(e.target.value))}
                  className="w-full accent-[#d4af37] bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-400">
                  <span>1 (Solo)</span>
                  <span>6</span>
                  <span>12+ barbeiros</span>
                </div>
              </div>

              {/* Slider 2: Ticket Médio */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <label className="text-neutral-300 font-medium">Ticket médio por cliente (corte/barba/produtos)</label>
                  <span className="font-mono text-base font-bold text-[#d4af37] tabular-nums bg-neutral-900 px-3 py-1 rounded-md border border-neutral-800">
                    R$ {ticketPrice},00
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="150"
                  step="5"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full accent-[#d4af37] bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-400">
                  <span>R$ 30</span>
                  <span>R$ 75</span>
                  <span>R$ 150</span>
                </div>
              </div>

              {/* Slider 3: Atendimentos por dia por barbeiro */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <label className="text-neutral-300 font-medium">Média de atendimentos diários por barbeiro</label>
                  <span className="font-mono text-base font-bold text-white tabular-nums bg-neutral-900 px-3 py-1 rounded-md border border-neutral-800">
                    {cutsPerDay} cortes / dia
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="16"
                  value={cutsPerDay}
                  onChange={(e) => setCutsPerDay(Number(e.target.value))}
                  className="w-full accent-[#d4af37] bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-400">
                  <span>4 cortes</span>
                  <span>10 cortes</span>
                  <span>16 cortes</span>
                </div>
              </div>

              {/* Slider 4: Dias trabalhados */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <label className="text-neutral-300 font-medium">Dias de barbearia aberta no mês</label>
                  <span className="font-mono text-base font-bold text-white tabular-nums bg-neutral-900 px-3 py-1 rounded-md border border-neutral-800">
                    {daysPerMonth} dias
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="28"
                  value={daysPerMonth}
                  onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                  className="w-full accent-[#d4af37] bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

            </div>

            {/* Results Output Column */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 border border-neutral-700/80 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Ganho Estimado Extra</p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-[#d4af37]">R$</span>
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
                    {Math.round(totalMonthlyGain).toLocaleString('pt-BR')}
                  </span>
                  <span className="text-xs text-neutral-400">/ mês</span>
                </div>
                <p className="text-[11px] text-emerald-400 font-medium mt-1">
                  Aproximadamente R$ {Math.round(yearlyGain).toLocaleString('pt-BR')} a mais por ano
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-neutral-800 text-xs">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[#d4af37]" />
                    Economia com faltas evitadas:
                  </span>
                  <span className="font-mono font-bold text-white tabular-nums">
                    +R$ {Math.round(recoveredFromNoShows).toLocaleString('pt-BR')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[#d4af37]" />
                    Reativação de clientes com IA:
                  </span>
                  <span className="font-mono font-bold text-white tabular-nums">
                    +R$ {Math.round(aiAdditionalRevenue).toLocaleString('pt-BR')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[#d4af37]" />
                    Retorno sobre Investimento (ROI):
                  </span>
                  <span className="font-mono font-bold text-[#d4af37] tabular-nums">
                    {roiMultiplier}x o valor do plano
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenSignup}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5b842] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#d4af37]/20 flex items-center justify-center gap-2"
                >
                  <span>Garantir Esse Ganho no flowbarb.site</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <p className="text-[10px] text-center text-neutral-400">
                Baseado em dados consolidados de mais de 840 barbearias utilizando FlowBarb no Brasil.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
