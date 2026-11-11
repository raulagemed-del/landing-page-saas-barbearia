import React from 'react';
import { 
  Sparkles, 
  Users, 
  Smartphone, 
  DollarSign, 
  Package, 
  MessageCircle, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

interface FeatureGridProps {
  onOpenSignup: () => void;
  onOpenLogin: (role?: 'owner' | 'barber' | 'client') => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ onOpenSignup, onOpenLogin }) => {
  return (
    <section id="recursos" className="py-20 border-b border-neutral-800/80 bg-[#0c0d10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <span>Capacidades da Plataforma</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Gestão Completa</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Tudo o que sua barbearia precisa em um único sistema
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Desenvolvido exclusivamente para as rotinas reais de barbearias brasileiras. Elimine planilhas manuais, evite desentendimentos de comissão e conquiste clientes recorrentes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: 8 Cols - Inteligência Artificial Preditiva */}
          <div className="md:col-span-8 rounded-2xl border border-neutral-800/90 bg-[#12141a] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700/80 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#d4af37]">01. INTELIGÊNCIA ARTIFICIAL</span>
                <span className="text-xs text-neutral-400">flowbarb.site AI</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Disparo Preditivo Anti-Cadeira Vazia & Recuperação de Churn
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed max-w-2xl">
                O FlowBarb rastreia o ciclo médio de retorno de cada homem. Quando um cliente que costumava cortar a cada 20 dias atinge 26 dias sem agendamento, a IA gera um gatilho de reativação humanizado para o WhatsApp com link direto da agenda dele.
              </p>
            </div>

            {/* Simulated AI metric card inside */}
            <div className="mt-6 pt-6 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <p className="text-xs text-neutral-400">Taxa de Reativação</p>
                <p className="font-mono text-xl font-bold text-white mt-1 tabular-nums">38,4%</p>
                <p className="text-[11px] text-emerald-400 mt-0.5">dos clientes sumidos retornam</p>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <p className="text-xs text-neutral-400">Ocupação Horários Ociosos</p>
                <p className="font-mono text-xl font-bold text-[#d4af37] mt-1 tabular-nums">+42%</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">terças e quartas preenchidas</p>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <p className="text-xs text-neutral-400">Tempo Economizado</p>
                <p className="font-mono text-xl font-bold text-white mt-1 tabular-nums">3h / dia</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">em conversas no WhatsApp</p>
              </div>
            </div>
          </div>

          {/* Card 2: 4 Cols - Barbeiro e Equipe (With high-res image) */}
          <div className="md:col-span-4 rounded-2xl border border-neutral-800/90 bg-[#12141a] overflow-hidden flex flex-col justify-between hover:border-neutral-700/80 transition-all">
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#d4af37]">02. EQUIPE</span>
                <Users className="h-4 w-4 text-neutral-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Login Individual para Cada Barbeiro
              </h3>
              <p className="text-neutral-300 text-xs leading-relaxed">
                Cada profissional tem sua própria área protegida. Ele acompanha a comissão acumulada, agenda e horários sem visualizar dados confidenciais do caixa do dono.
              </p>
            </div>
            
            <div className="relative aspect-[16/10] w-full mt-2">
              <img
                src="/src/assets/images/barber_team_working_1794368578436.jpg"
                alt="Barbeiro profissional cuidando da barba de um cliente"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-black/20 to-transparent" />
            </div>
          </div>

          {/* Card 3: 4 Cols - 100% Mobile (Na Palma da Mão) */}
          <div className="md:col-span-4 rounded-2xl border border-neutral-800/90 bg-[#12141a] p-6 space-y-4 hover:border-neutral-700/80 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#d4af37]">03. NA PALMA DA MÃO</span>
                <Smartphone className="h-4 w-4 text-[#d4af37]" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                100% Mobile & Nuvem Instantânea
              </h3>
              <p className="text-neutral-300 text-xs leading-relaxed">
                Desenvolvido com tecnologia PWA de ponta. Não ocupa memória do aparelho e sincroniza instantaneamente entre o celular do barbeiro, o tablet do balcão e o notebook do dono.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300">Compatibilidade Total:</span>
                <span className="text-[#d4af37] font-mono text-[11px]">iOS · Android · Web</span>
              </div>
              <div className="text-[11px] text-neutral-400">
                Acesse de qualquer navegador em qualquer dispositivo 24h por dia.
              </div>
            </div>
          </div>

          {/* Card 4: 4 Cols - Rateio de Comissões e Finanças */}
          <div className="md:col-span-4 rounded-2xl border border-neutral-800/90 bg-[#12141a] p-6 space-y-4 hover:border-neutral-700/80 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#d4af37]">04. FINANCEIRO</span>
                <DollarSign className="h-4 w-4 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Comissões Automáticas sem Discussão
              </h3>
              <p className="text-neutral-300 text-xs leading-relaxed">
                Configure porcentagens personalizadas por profissional ou tipo de serviço (corte, barba, química). O sistema calcula os repasses automaticamente com deduções configuráveis de taxas de cartão ou produtos.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Fechamento Semanal</span>
                <span className="text-emerald-400 font-bold font-mono">1 Clique</span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Extratos em PDF prontos para enviar no WhatsApp de cada barbeiro na sexta-feira.
              </p>
            </div>
          </div>

          {/* Card 5: 4 Cols - Experiência do Cliente & Imagem */}
          <div className="md:col-span-4 rounded-2xl border border-neutral-800/90 bg-[#12141a] overflow-hidden flex flex-col justify-between hover:border-neutral-700/80 transition-all">
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#d4af37]">05. CLIENTE VIP</span>
                <MessageCircle className="h-4 w-4 text-[#d4af37]" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Agendamento 24h com WhatsApp
              </h3>
              <p className="text-neutral-300 text-xs leading-relaxed">
                Seu cliente agenda em 3 cliques e recebe lembretes com botão de confirmação. Reduza o não-comparecimento em até 84% com zero trabalho manual.
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full mt-2">
              <img
                src="/src/assets/images/barbershop_client_lifestyle_1794368578112.jpg"
                alt="Cliente satisfeito admirando corte no espelho da barbearia"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-black/20 to-transparent" />
            </div>
          </div>

        </div>

        {/* Bottom CTA trigger inside capabilities */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenSignup}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 px-5 py-2.5 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            <span>Descubra como o FlowBarb transforma sua rotina</span>
            <ArrowUpRight className="h-4 w-4 text-[#d4af37]" />
          </button>
        </div>

      </div>
    </section>
  );
};
