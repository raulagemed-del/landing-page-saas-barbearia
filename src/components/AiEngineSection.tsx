import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  MessageSquare, 
  CalendarCheck, 
  TrendingUp, 
  Flame, 
  Clock, 
  CheckCheck,
  SendHorizontal
} from 'lucide-react';

interface AiEngineSectionProps {
  onOpenSignup: () => void;
}

export const AiEngineSection: React.FC<AiEngineSectionProps> = ({ onOpenSignup }) => {
  const [activeSimulation, setActiveSimulation] = useState<'churn' | 'busy' | 'upsell'>('churn');

  return (
    <section id="inteligencia-ia" className="py-20 bg-[#090a0d] border-b border-neutral-800/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 px-3.5 py-1.5 rounded-full border border-[#d4af37]/20">
            <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" />
            <span>Tecnologia IA Exclusiva</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>flowbarb.site</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Como a IA do FlowBarb trabalha pela sua barbearia enquanto você corta cabelo
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Não é chatbot genérico que irrita o cliente. É um motor de inteligência matemática que analisa padrões de frequência, prevê desistências e age na hora exata pelo WhatsApp.
          </p>
        </div>

        {/* 3 AI Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Pillar 1 */}
          <div 
            onClick={() => setActiveSimulation('churn')}
            className={`cursor-pointer rounded-2xl p-6 border transition-all text-left ${
              activeSimulation === 'churn'
                ? 'bg-[#151722] border-[#d4af37] ring-1 ring-[#d4af37]/30 shadow-lg'
                : 'bg-[#101218] border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <Bot className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-mono text-neutral-400">01</span>
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Radar Anti-Perda de Clientes
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Calcula o intervalo médio de cada cliente. Se o cliente corta a cada 20 dias, no 23º dia a IA dispara um lembrete amigável no WhatsApp antes que ele procure outra barbearia.
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-[#d4af37]">
              <span>Simular no WhatsApp &rarr;</span>
              <span className="text-[10px] text-emerald-400 font-mono">+38% retenção</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div 
            onClick={() => setActiveSimulation('busy')}
            className={`cursor-pointer rounded-2xl p-6 border transition-all text-left ${
              activeSimulation === 'busy'
                ? 'bg-[#151722] border-[#d4af37] ring-1 ring-[#d4af37]/30 shadow-lg'
                : 'bg-[#101218] border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <Flame className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-mono text-neutral-400">02</span>
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Otimizador de Horários Vagos
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Detecta que a quarta-feira às 14h tem 3 cadeiras vazias e sugere campanhas instantâneas para clientes flexíveis (estudantes, autônomos ou aposentados).
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-[#d4af37]">
              <span>Ver como funciona &rarr;</span>
              <span className="text-[10px] text-emerald-400 font-mono">-72% ociosidade</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div 
            onClick={() => setActiveSimulation('upsell')}
            className={`cursor-pointer rounded-2xl p-6 border transition-all text-left ${
              activeSimulation === 'upsell'
                ? 'bg-[#151722] border-[#d4af37] ring-1 ring-[#d4af37]/30 shadow-lg'
                : 'bg-[#101218] border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-mono text-neutral-400">03</span>
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Venda Casada Inteligente (Upsell)
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Durante o agendamento no flowbarb.site, a IA recomenda produtos certos baseados no corte do cliente (ex: pomada efeito matte para quem faz texturizado).
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-[#d4af37]">
              <span>Ver recomendação &rarr;</span>
              <span className="text-[10px] text-emerald-400 font-mono">+R$ 22 ticket médio</span>
            </div>
          </div>

        </div>

        {/* Live Simulation Box */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-neutral-800 bg-[#12141c] p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold text-white">
                Simulação em Tempo Real · WhatsApp da Barbearia
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#d4af37]">Status: Disparo Ativo</span>
          </div>

          {/* Simulated WhatsApp conversation */}
          <div className="py-6 space-y-3">
            {activeSimulation === 'churn' && (
              <>
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#1c212d] p-3 text-xs text-neutral-200 border border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-[#d4af37] font-semibold">
                    <span>FlowBarb IA · Mensagem Automática</span>
                    <span>10:14</span>
                  </div>
                  <p>
                    "Fala, Bruno! Tudo na paz? Faz 24 dias desde o seu último fade com o Lucas na <strong>Barbearia Viking</strong>. Separamos um horário pra você amanhã às 16:30 pra manter o alinhamento em dia. Dá pra confirmar aqui no link:"
                  </p>
                  <p className="font-mono text-[#d4af37] text-[11px] underline pt-1">
                    flowbarb.site/viking/bruno-agendar
                  </p>
                </div>

                <div className="max-w-[75%] ml-auto rounded-2xl rounded-tr-sm bg-[#075e54]/30 border border-[#075e54]/60 p-3 text-xs text-neutral-100 space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-neutral-400">
                    <span>Bruno (Cliente)</span>
                    <span className="flex items-center gap-1">10:16 <CheckCheck className="h-3 w-3 text-sky-400" /></span>
                  </div>
                  <p>
                    "Opa! Cara, tava precisando mesmo e acabei esquecendo da correria. Horário das 16:30 perfeito, acabei de confirmar no link! Valeu!"
                  </p>
                </div>
              </>
            )}

            {activeSimulation === 'busy' && (
              <>
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#1c212d] p-3 text-xs text-neutral-200 border border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-[#d4af37] font-semibold">
                    <span>FlowBarb IA · Preenchimento de Horário Ocioso</span>
                    <span>09:30</span>
                  </div>
                  <p>
                    "Bom dia, Rodrigo! Vimos que você costuma vir em horários mais tranquilos. Temos 2 vagas exclusivas hoje às 14:00 com o Felipe Barber e liberamos uma cerveja cortesia na comanda. Topa?"
                  </p>
                </div>

                <div className="max-w-[75%] ml-auto rounded-2xl rounded-tr-sm bg-[#075e54]/30 border border-[#075e54]/60 p-3 text-xs text-neutral-100 space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-neutral-400">
                    <span>Rodrigo (Cliente)</span>
                    <span className="flex items-center gap-1">09:32 <CheckCheck className="h-3 w-3 text-sky-400" /></span>
                  </div>
                  <p>
                    "Show de bola! Tô saindo da academia agora e já vou direto às 14h. Pode me segurar aí!"
                  </p>
                </div>
              </>
            )}

            {activeSimulation === 'upsell' && (
              <>
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#1c212d] p-3 text-xs text-neutral-200 border border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-[#d4af37] font-semibold">
                    <span>Checkout Inteligente no flowbarb.site</span>
                    <span>Ao Agendar</span>
                  </div>
                  <p>
                    "Gabriel, você escolheu o corte Pompadour Clássico com o Lucas. 92% dos clientes com esse corte levam a <strong>Pomada Efeito Matte 80g</strong> para manter o penteado o dia todo. Deseja incluir por apenas R$ 45,00?"
                  </p>
                  <div className="pt-2 flex gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#d4af37] text-neutral-950 font-bold text-[10px]">
                      + Adicionar à Comanda
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-400 text-center sm:text-left">
              Totalmente integrado com a API do WhatsApp Oficial e homologado no Brasil.
            </span>
            <button
              onClick={onOpenSignup}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5b842] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#d4af37]/20 whitespace-nowrap"
            >
              Testar IA na Minha Barbearia
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
