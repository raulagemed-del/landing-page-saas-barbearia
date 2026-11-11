import React, { useState } from 'react';
import { X, Crown, Scissors, User, ArrowRight, CheckCircle2, Lock, Smartphone } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: 'owner' | 'barber' | 'client';
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, initialRole = 'owner' }) => {
  const [role, setRole] = useState<'owner' | 'barber' | 'client'>(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  if (!isOpen) return null;

  const handleQuickFill = (targetRole: 'owner' | 'barber' | 'client') => {
    setRole(targetRole);
    setIsLogged(false);
    if (targetRole === 'owner') {
      setEmail('dono@imperialbarber.com.br');
      setPassword('••••••••');
    } else if (targetRole === 'barber') {
      setEmail('lucas.navalha@flowbarb.site');
      setPassword('••••••••');
    } else {
      setPhone('(11) 98765-4321');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogged(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-[#12141c] border border-neutral-800 p-6 sm:p-8 shadow-2xl text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800/80 transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        {isLogged ? (
          <div className="space-y-4 text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="font-display text-xl font-bold text-white">
              {role === 'owner' && 'Acesso Dono Confirmado!'}
              {role === 'barber' && 'Bem-vindo, Barbeiro Lucas!'}
              {role === 'client' && 'Portal do Cliente Acessado!'}
            </h3>

            <p className="text-xs text-neutral-300 leading-relaxed">
              {role === 'owner' && 'Você está conectado à Barbearia Imperial no flowbarb.site. Caixa do dia aberto e relatórios atualizados.'}
              {role === 'barber' && 'Sua agenda pessoal e extrato de comissões foram carregados com sucesso no seu dispositivo.'}
              {role === 'client' && 'Seus agendamentos ativos e pontos de fidelidade estão disponíveis.'}
            </p>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
              Ambiente de demonstração interativa ativo no <strong className="text-white">flowbarb.site</strong>.
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => setIsLogged(false)}
                className="w-full py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold"
              >
                Testar outro perfil de login
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-lg bg-[#d4af37] text-neutral-950 text-xs font-bold hover:brightness-110"
              >
                Voltar à Página Principal
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Modal Header */}
            <div className="space-y-1.5 mb-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#d4af37]">
                <Lock className="h-3.5 w-3.5" />
                <span>Ambiente Seguro · flowbarb.site</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Acesse sua Conta
              </h3>
              <p className="text-xs text-neutral-400">
                Escolha o perfil desejado para acessar a plataforma.
              </p>
            </div>

            {/* Profile Selector Buttons */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <button
                type="button"
                onClick={() => handleQuickFill('owner')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  role === 'owner'
                    ? 'bg-[#d4af37]/15 border-[#d4af37] text-white shadow-sm'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <Crown className={`h-4 w-4 mx-auto mb-1 ${role === 'owner' ? 'text-[#d4af37]' : 'text-neutral-500'}`} />
                <span className="text-[11px] font-semibold block leading-tight">Dono Barbearia</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickFill('barber')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  role === 'barber'
                    ? 'bg-[#d4af37]/15 border-[#d4af37] text-white shadow-sm'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <Scissors className={`h-4 w-4 mx-auto mb-1 ${role === 'barber' ? 'text-[#d4af37]' : 'text-neutral-500'}`} />
                <span className="text-[11px] font-semibold block leading-tight">Equipe / Barbeiro</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickFill('client')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  role === 'client'
                    ? 'bg-[#d4af37]/15 border-[#d4af37] text-white shadow-sm'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <User className={`h-4 w-4 mx-auto mb-1 ${role === 'client' ? 'text-[#d4af37]' : 'text-neutral-500'}`} />
                <span className="text-[11px] font-semibold block leading-tight">Cliente</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              {role !== 'client' ? (
                <>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      E-mail profissional
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={role === 'owner' ? 'dono@suabarbearia.com' : 'seu.nome@flowbarb.site'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-medium text-neutral-300">Senha</label>
                      <a href="#" className="text-[10px] text-[#d4af37] hover:underline">Esqueceu a senha?</a>
                    </div>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Número do WhatsApp / Celular
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37]"
                  />
                  <p className="text-[10px] text-neutral-400 mt-1">
                    Clientes acessam com código SMS ou WhatsApp sem precisar lembrar senha.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5b842] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#d4af37]/20 flex items-center justify-center gap-2 mt-2"
              >
                <span>Entrar no {role === 'owner' ? 'Painel do Dono' : role === 'barber' ? 'App do Barbeiro' : 'Meus Agendamentos'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {/* Quick Demo Pre-fill Hint */}
            <div className="mt-4 pt-4 border-t border-neutral-800 text-center">
              <button
                type="button"
                onClick={() => handleQuickFill(role)}
                className="text-[11px] text-[#d4af37] hover:underline"
              >
                Clique para preencher com dados de teste
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
