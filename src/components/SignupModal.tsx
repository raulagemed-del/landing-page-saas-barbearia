import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Scissors } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [shopName, setShopName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [teamSize, setTeamSize] = useState('3-5');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  // Format shop slug
  const shopSlug = shopName
    ? shopName
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '')
    : 'suabarbearia';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#12141c] border border-neutral-800 p-6 sm:p-8 shadow-2xl text-left">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800/80 transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        {isSuccess ? (
          <div className="space-y-4 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mx-auto text-[#d4af37]">
              <Sparkles className="h-8 w-8" />
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              Conta Criada com Sucesso!
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
              Parabéns, <strong className="text-white">{ownerName || 'Barbeiro'}</strong>! Seu período de 14 dias grátis na plataforma FlowBarb começou agora.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-left space-y-2">
              <p className="text-xs text-neutral-400">Seu link exclusivo para clientes agendarem:</p>
              <div className="p-2.5 rounded-lg bg-neutral-950 font-mono text-xs text-[#d4af37] border border-neutral-800 flex items-center justify-between">
                <span>https://flowbarb.site/{shopSlug}</span>
                <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">Ativo</span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Enviamos suas credenciais de primeiro acesso para o WhatsApp <strong className="text-neutral-200">{whatsapp || '(11) 99999-9999'}</strong>.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5b842] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-md shadow-[#d4af37]/20"
              >
                Acessar Meu Painel Agora
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37]">
                <Scissors className="h-3.5 w-3.5" />
                <span>Teste Grátis de 14 Dias · flowbarb.site</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Comece a Organizar Sua Barbearia
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Sem cartão de crédito, sem contrato de fidelidade. Acesso imediato à IA e aos logins de equipe.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Nome da Barbearia *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Barbearia Viking"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Seu Nome (Proprietário) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Subdomain preview */}
              <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-[11px] flex items-center justify-between">
                <span className="text-neutral-400">Seu endereço no ar:</span>
                <span className="font-mono text-[#d4af37] font-semibold">
                  flowbarb.site/{shopSlug}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    WhatsApp Comercial *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    E-mail do Administrador *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="carlos@barbearia.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Quantos barbeiros atendem na barbearia?
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['1 (Solo)', '2 a 3', '4 a 6', '7 ou mais'].map((size) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => setTeamSize(size)}
                      className={`py-2 px-2 rounded-xl text-center text-xs font-medium border transition-all ${
                        teamSize === size
                          ? 'bg-[#d4af37]/20 border-[#d4af37] text-white'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5b842] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#d4af37]/20 flex items-center justify-center gap-2"
                >
                  <span>Ativar Meu Teste Grátis de 14 Dias</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-[#d4af37]" />
                <span>Dados 100% protegidos pela LGPD. Cancele com 1 clique a qualquer momento.</span>
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
