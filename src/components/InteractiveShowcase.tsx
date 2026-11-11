import React, { useState } from 'react';
import { 
  Crown, 
  Scissors, 
  Smartphone, 
  Sparkles, 
  Calendar, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  TrendingUp, 
  User, 
  BellRing,
  ChevronRight,
  ShieldAlert,
  Send
} from 'lucide-react';
import { SAMPLE_TODAY_APPOINTMENTS } from '../data/mockData';

type ShowcaseTab = 'owner' | 'barber' | 'client' | 'ai';

interface InteractiveShowcaseProps {
  onOpenSignup: () => void;
  onOpenLogin: (role?: 'owner' | 'barber' | 'client') => void;
}

export const InteractiveShowcase: React.FC<InteractiveShowcaseProps> = ({ onOpenSignup, onOpenLogin }) => {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('owner');
  const [selectedService, setSelectedService] = useState('corte_barba');
  const [selectedBarber, setSelectedBarber] = useState('Lucas "Navalha"');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [aiDispatched, setAiDispatched] = useState(false);

  return (
    <section id="demonstracao" className="py-20 bg-[#0e0f14] border-b border-neutral-800/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <span>Experiência Multi-Perfil</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Tudo na Palma da Mão</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Um ecossistema feito para o Dono, a Equipe e o Cliente
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Sem complicação, sem planilhas perdidas. Cada usuário tem sua própria tela intuitiva acessível de qualquer smartphone no <span className="text-neutral-200 font-mono">flowbarb.site</span>.
          </p>
        </div>

        {/* Tab Controls: Segmented Interactive Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('owner')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'owner'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700/80'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Crown className="h-4 w-4 text-[#d4af37]" />
              <span>Painel do Dono</span>
            </button>

            <button
              onClick={() => setActiveTab('barber')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'barber'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700/80'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Scissors className="h-4 w-4 text-[#d4af37]" />
              <span>Login da Equipe / Barbeiro</span>
            </button>

            <button
              onClick={() => setActiveTab('client')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'client'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700/80'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Smartphone className="h-4 w-4 text-[#d4af37]" />
              <span>App do Cliente Final</span>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'ai'
                  ? 'bg-[#d4af37]/15 text-[#f4d068] shadow-sm border border-[#d4af37]/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="h-4 w-4 text-[#d4af37]" />
              <span>Inteligência Artificial</span>
            </button>
          </div>
        </div>

        {/* Interactive Device Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Context Explanation */}
          <div className="lg:col-span-5 space-y-5">
            {activeTab === 'owner' && (
              <>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-md border border-[#d4af37]/20">
                  <Crown className="h-3.5 w-3.5" />
                  <span>Visão Estratégica do Proprietário</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Controle total do caixa e equipe onde você estiver
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Monitore o faturamento minuto a minuto, acompanhe a taxa de ocupação das cadeiras e calcule as comissões da semana automaticamente com deduções de custos de produto ou taxas de máquina.
                </p>
                <div className="space-y-2.5 text-xs text-neutral-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Fechamento de caixa cego para evitar discrepâncias</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Rateio inteligente com porcentagens configuráveis por barbeiro</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Relatórios de lucratividade, despesas fixas e estoque de pomadas</span>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenLogin('owner')}
                    className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1.5"
                  >
                    <span>Testar painel de dono na prática</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </>
            )}

            {activeTab === 'barber' && (
              <>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-md border border-[#d4af37]/20">
                  <Scissors className="h-3.5 w-3.5" />
                  <span>Login Individual do Barbeiro</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Autonomia e transparência que motivam sua equipe
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Cada barbeiro acessa pelo próprio celular. Ele visualiza a fila do dia, o horário do próximo corte e o valor exato da sua comissão acumulada no mês, sem permissão para ver dados confidenciais do dono.
                </p>
                <div className="space-y-2.5 text-xs text-neutral-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Notificação instantânea quando um novo cliente agenda</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Extrato de comissões limpo e transparente em tempo real</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Pausa rápida para almoço ou encaixe direto pelo celular</span>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenLogin('barber')}
                    className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1.5"
                  >
                    <span>Simular acesso de barbeiro</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </>
            )}

            {activeTab === 'client' && (
              <>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-md border border-[#d4af37]/20">
                  <Smartphone className="h-3.5 w-3.5" />
                  <span>Agendamento do Cliente 24/7</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Seu cliente agenda em 30 segundos sem atrito
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Chega de passar horas respondendo WhatsApp para encaixar horários. Seu cliente acessa sua página no <strong className="text-white">flowbarb.site/suabarbearia</strong>, escolhe o barbeiro preferido e o serviço em segundos.
                </p>
                <div className="space-y-2.5 text-xs text-neutral-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Lembrete automático 2h antes no WhatsApp reduz faltas em até 84%</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Clube de fidelidade: o cliente acumula pontos a cada corte</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Sem necessidade de cadastro demorado com senhas chatas</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'ai' && (
              <>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-md border border-[#d4af37]/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>FlowBarb AI Brain</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Inteligência Artificial que busca clientes sumidos
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  O FlowBarb aprende os hábitos dos seus clientes. Ele sabe exatamente quantos dias cada homem demora para aparar a barba ou o corte, e ativa ações preditivas antes que ele vá no concorrente.
                </p>
                <div className="space-y-2.5 text-xs text-neutral-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Previsão de horários de ociosidade com 48h de antecedência</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Disparo humanizado para clientes inativos há mais de 25 dias</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Previsão de faturamento mensal baseada no histórico de recorrência</span>
                  </div>
                </div>
              </>
            )}

            <div className="pt-2">
              <button
                onClick={onOpenSignup}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#d4af37] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-sm shadow-[#d4af37]/20"
              >
                <span>Quero isso na minha barbearia</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Smartphone Simulator Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[380px] rounded-[36px] border-4 border-neutral-700/80 bg-neutral-950 p-3 shadow-2xl shadow-black/80 ring-1 ring-white/10">
              
              {/* Phone Speaker & Camera Notch */}
              <div className="mx-auto h-4 w-28 rounded-full bg-neutral-800 mb-2 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-neutral-900" />
              </div>

              {/* Phone Inner Display Screen */}
              <div className="rounded-[26px] bg-[#0d0e12] border border-neutral-800/80 p-4 text-white overflow-hidden min-h-[510px] flex flex-col justify-between">
                
                {/* 1. VISÃO DONO SIMULATOR */}
                {activeTab === 'owner' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                      <div>
                        <p className="text-[11px] text-neutral-400">Barbearia Dom Corleone</p>
                        <p className="text-sm font-bold text-white">Painel Geral do Dono</p>
                      </div>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                        Caixa Aberto
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                        <p className="text-[10px] text-neutral-400">Total Hoje</p>
                        <p className="font-mono text-base font-bold text-white tabular-nums">R$ 2.480,00</p>
                        <p className="text-[9px] text-emerald-400">32 atendimentos</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                        <p className="text-[10px] text-neutral-400">Ticket Médio</p>
                        <p className="font-mono text-base font-bold text-[#d4af37] tabular-nums">R$ 77,50</p>
                        <p className="text-[9px] text-neutral-400">+12% com pomadas</p>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span>Rateio de Comissões (Hoje)</span>
                        <span className="text-[#d4af37] font-mono text-[11px]">R$ 1.140,00</span>
                      </div>
                      
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-300">Lucas Navalha (50%)</span>
                          <span className="font-mono text-white">R$ 480,00</span>
                        </div>
                        <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#d4af37] h-full w-[80%]" />
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-neutral-300">Felipe Barber (50%)</span>
                          <span className="font-mono text-white">R$ 390,00</span>
                        </div>
                        <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#d4af37] h-full w-[65%]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-neutral-900/50 border border-neutral-800 text-[11px] flex items-center justify-between">
                      <span className="text-neutral-300">Estoque Pomada Matte (8 un.)</span>
                      <span className="text-amber-400 font-medium">Reordenar</span>
                    </div>

                    <div className="pt-1">
                      <button
                        onClick={() => onOpenLogin('owner')}
                        className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-xs font-semibold text-neutral-200 border border-neutral-700 transition-colors"
                      >
                        Abrir Relatório Completo
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. VISÃO BARBEIRO / EQUIPE */}
                {activeTab === 'barber' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#d4af37] text-neutral-950 font-bold flex items-center justify-center text-xs">
                          LN
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Lucas "Navalha"</p>
                          <p className="text-[10px] text-neutral-400">Minha Agenda Individual</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                        Cadeira 01
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-neutral-400">Minha Comissão Hoje</p>
                        <p className="font-mono text-lg font-bold text-[#d4af37] tabular-nums">R$ 480,00</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-neutral-400">Cortes Feitos</p>
                        <p className="font-mono text-lg font-bold text-white tabular-nums">7 / 9</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold text-neutral-300">Próximos Clientes:</p>
                      
                      <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">Gabriel Siqueira</span>
                          <span className="text-[10px] font-mono text-[#d4af37]">15:00 · Agora</span>
                        </div>
                        <p className="text-[11px] text-neutral-400">Corte Degradê + Barba Terapia</p>
                        <div className="flex items-center justify-between pt-1 text-[10px]">
                          <span className="text-neutral-400">R$ 85,00 (Sua comissão: R$ 42,50)</span>
                          <span className="text-emerald-400 font-medium">Cliente na recepção</span>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-neutral-900/50 border border-neutral-800/60 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-neutral-300">Rodrigo Mendonça</span>
                          <span className="text-[10px] font-mono text-neutral-400">16:00</span>
                        </div>
                        <p className="text-[11px] text-neutral-400">Corte Clássico na Tesoura</p>
                        <div className="flex items-center justify-between pt-1 text-[10px]">
                          <span className="text-neutral-400">R$ 55,00</span>
                          <span className="text-neutral-400">WhatsApp Confirmado</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenLogin('barber')}
                        className="w-full py-2 bg-gradient-to-r from-[#d4af37] to-[#e5b842] text-neutral-950 font-bold text-xs rounded-lg hover:brightness-110 transition-all"
                      >
                        Entrar no App da Equipe
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. VISÃO CLIENTE FINAL */}
                {activeTab === 'client' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                      <div>
                        <p className="text-[10px] font-mono text-[#d4af37]">flowbarb.site/domcorleone</p>
                        <p className="text-xs font-bold text-white">Agendamento Online 24h</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px]">
                        ★ 4.9
                      </div>
                    </div>

                    {bookingSuccess ? (
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 my-auto">
                        <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto" />
                        <p className="text-xs font-bold text-white">Agendamento Confirmado!</p>
                        <p className="text-[11px] text-neutral-300">
                          Horário reservado com <strong className="text-white">{selectedBarber}</strong> às 15:30.
                        </p>
                        <div className="p-2 rounded bg-neutral-900/80 text-[10px] text-neutral-400 flex items-center justify-center gap-1.5">
                          <MessageSquare className="h-3 w-3 text-emerald-400" />
                          <span>Lembrete automático enviado no seu WhatsApp</span>
                        </div>
                        <button
                          onClick={() => setBookingSuccess(false)}
                          className="text-[10px] text-[#d4af37] underline pt-1"
                        >
                          Fazer outro teste de agendamento
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-1.5">
                          <p className="text-[11px] font-semibold text-neutral-300">1. Escolha o Serviço:</p>
                          <div className="grid grid-cols-2 gap-1.5 text-left">
                            <button
                              onClick={() => setSelectedService('corte_barba')}
                              className={`p-2 rounded-lg border text-[11px] transition-colors ${
                                selectedService === 'corte_barba'
                                  ? 'bg-[#d4af37]/20 border-[#d4af37] text-white'
                                  : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                              }`}
                            >
                              <p className="font-semibold">Cabelo + Barba</p>
                              <p className="font-mono text-[#d4af37] text-[10px]">R$ 85,00 · 45m</p>
                            </button>
                            <button
                              onClick={() => setSelectedService('corte_solo')}
                              className={`p-2 rounded-lg border text-[11px] transition-colors ${
                                selectedService === 'corte_solo'
                                  ? 'bg-[#d4af37]/20 border-[#d4af37] text-white'
                                  : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                              }`}
                            >
                              <p className="font-semibold">Corte Degradê</p>
                              <p className="font-mono text-[#d4af37] text-[10px]">R$ 55,00 · 30m</p>
                            </button>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <p className="text-[11px] font-semibold text-neutral-300">2. Escolha o Barbeiro:</p>
                          <div className="flex gap-1.5">
                            {['Lucas "Navalha"', 'Felipe Barber'].map((b) => (
                              <button
                                key={b}
                                onClick={() => setSelectedBarber(b)}
                                className={`flex-1 py-1.5 px-2 rounded-md border text-[10px] font-medium transition-colors ${
                                  selectedBarber === b
                                    ? 'bg-neutral-800 border-[#d4af37] text-white'
                                    : 'bg-neutral-900/60 border-neutral-800 text-neutral-400'
                                }`}
                              >
                                {b}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <p className="text-[11px] font-semibold text-neutral-300">3. Horários Disponíveis:</p>
                          <div className="grid grid-cols-3 gap-1.5">
                            <span className="p-1.5 rounded bg-neutral-800 text-center text-[10px] text-white font-mono border border-neutral-700">
                              15:30
                            </span>
                            <span className="p-1.5 rounded bg-neutral-900 text-center text-[10px] text-neutral-400 font-mono">
                              16:30
                            </span>
                            <span className="p-1.5 rounded bg-neutral-900 text-center text-[10px] text-neutral-400 font-mono">
                              17:15
                            </span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => setBookingSuccess(true)}
                            className="w-full py-2.5 bg-[#d4af37] text-neutral-950 font-bold text-xs rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#d4af37]/20"
                          >
                            Confirmar Agendamento em 1 Clique
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* 4. VISÃO INTELIGÊNCIA ARTIFICIAL */}
                {activeTab === 'ai' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-[#d4af37]" />
                        <p className="text-xs font-bold text-white">IA Preditiva FlowBarb</p>
                      </div>
                      <span className="text-[10px] bg-[#d4af37]/10 text-[#d4af37] px-2 py-0.5 rounded font-mono">
                        Ativa 24h
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <BellRing className="h-3.5 w-3.5 text-amber-400" />
                          Previsão de Horário Vago
                        </span>
                        <span className="text-[10px] text-neutral-400">Terça-feira 10h</span>
                      </div>
                      <p className="text-[11px] text-neutral-300">
                        A IA detectou baixa ocupação na terça-feira pela manhã. 
                      </p>
                      <div className="p-2 rounded bg-neutral-950 border border-neutral-800/80 text-[10px] text-[#f4d068] space-y-1">
                        <p className="font-semibold">Ação Automática Sugerida:</p>
                        <p className="text-neutral-300">
                          Disparar convite VIP para 8 clientes que cortam barba de manhã com 10% OFF.
                        </p>
                      </div>
                      <button
                        onClick={() => setAiDispatched(!aiDispatched)}
                        className={`w-full py-1.5 rounded text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${
                          aiDispatched
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-[#d4af37] text-neutral-950 hover:brightness-110'
                        }`}
                      >
                        {aiDispatched ? (
                          <>
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>8 Mensagens Disparadas com Sucesso!</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-3.5 w-3.5" />
                            <span>Aprovar Disparo Inteligente</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[11px] space-y-1">
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>Clientes Reativados este mês:</span>
                        <span className="font-mono text-emerald-400 font-bold">+28 clientes</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>Receita Recuperada:</span>
                        <span className="font-mono text-white font-bold">R$ 2.140,00</span>
                      </div>
                    </div>

                    <div className="pt-1">
                      <button
                        onClick={onOpenSignup}
                        className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs rounded-lg transition-colors border border-neutral-700"
                      >
                        Ativar IA na Minha Barbearia
                      </button>
                    </div>
                  </div>
                )}

                {/* Mobile Mockup bottom pill indicator */}
                <div className="pt-2 flex justify-center">
                  <div className="h-1 w-24 rounded-full bg-neutral-700/80" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
