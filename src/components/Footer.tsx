import React from 'react';
import { Scissors, ShieldCheck, Mail, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenLogin: (role?: 'owner' | 'barber' | 'client') => void;
  onOpenSignup: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogin, onOpenSignup }) => {
  return (
    <footer className="bg-[#08090b] text-neutral-400 text-xs border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d4af37] text-neutral-950 font-bold">
                <Scissors className="h-4 w-4" />
              </div>
              <span className="font-display text-lg font-bold text-white tracking-tight">
                Flow<span className="text-[#d4af37]">Barb</span>
              </span>
            </div>
            
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              O sistema de gestão mais completo e inteligente para barbearias modernas. Agenda 24h, inteligência artificial preditiva, controle de comissões e financeiro na palma da mão.
            </p>

            <div className="pt-2 text-neutral-400 text-[11px] space-y-1">
              <p>Domínio oficial: <strong className="text-neutral-200 font-mono">flowbarb.site</strong></p>
              <p>CNPJ: 48.912.845/0001-30 · FlowBarb Software Brasil Ltda.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Plataforma</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#recursos" className="hover:text-white transition-colors">Recursos de Gestão</a></li>
              <li><a href="#inteligencia-ia" className="hover:text-white transition-colors">Tecnologia IA</a></li>
              <li><a href="#demonstracao" className="hover:text-white transition-colors">Visão na Prática</a></li>
              <li><a href="#calculadora" className="hover:text-white transition-colors">Calculadora ROI</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos & Preços</a></li>
            </ul>
          </div>

          {/* User Portals */}
          <div className="md:col-span-2 space-y-3">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Acessos & Portais</p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenLogin('owner')} className="hover:text-[#d4af37] transition-colors text-left">
                  Login Dono da Barbearia
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLogin('barber')} className="hover:text-[#d4af37] transition-colors text-left">
                  Login Equipe / Barbeiro
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLogin('client')} className="hover:text-[#d4af37] transition-colors text-left">
                  Portal de Agendamento do Cliente
                </button>
              </li>
              <li>
                <button onClick={onOpenSignup} className="hover:text-[#d4af37] transition-colors text-left font-medium text-neutral-200">
                  Criar Conta 14 Dias Grátis
                </button>
              </li>
            </ul>
          </div>

          {/* Support and Contact */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Atendimento & Suporte</p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <MessageSquare className="h-4 w-4 text-[#d4af37] shrink-0" />
                <span>WhatsApp de Suporte: (11) 99872-4011</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Mail className="h-4 w-4 text-[#d4af37] shrink-0" />
                <span>contato@flowbarb.site</span>
              </div>
              <p className="text-[11px] text-neutral-500 pt-1">
                Atendimento de Segunda a Sábado das 08h às 21h.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} FlowBarb (flowbarb.site). Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacidade & LGPD</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Segurança dos Dados</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
