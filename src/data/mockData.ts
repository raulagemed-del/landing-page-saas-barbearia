import { Plan, Testimonial, FaqItem, Appointment } from '../types';

export const PLANS: Plan[] = [
  {
    id: 'solo',
    name: 'Barbeiro Solo',
    description: 'Ideal para profissionais autônomos ou quem atende em estúdio próprio individual.',
    monthlyPrice: 49.9,
    annualPrice: 39.9,
    barbersCount: '1 Barbeiro',
    features: [
      'Agenda online 24/7 personalizada',
      'Link exclusivo de agendamento no flowbarb.site',
      'Lembretes automáticos no WhatsApp',
      'Controle financeiro e fluxo de caixa',
      'Histórico e cadastro de clientes ilimitado',
      'Acesso no celular, tablet e computador',
    ],
  },
  {
    id: 'pro',
    name: 'Flow Pro',
    description: 'O mais escolhido por barbearias em expansão que querem organização máxima.',
    monthlyPrice: 89.9,
    annualPrice: 71.9,
    highlight: true,
    badge: 'Mais Recomendado',
    barbersCount: 'Até 4 Barbeiros',
    features: [
      'Tudo do plano Solo',
      'Logins individuais para cada barbeiro',
      'Cálculo e rateio automático de comissões',
      'Inteligência Artificial FlowBarb integrada',
      'Disparo inteligente anti-cadeira vazia',
      'PDV de balcão e controle de comanda',
      'Relatórios de faturamento por colaborador',
      'Suporte prioritário via WhatsApp',
    ],
  },
  {
    id: 'imperio',
    name: 'Império',
    description: 'Para barbearias de grande porte, franquias e redes com múltiplos barbeiros.',
    monthlyPrice: 149.9,
    annualPrice: 119.9,
    barbersCount: 'Barbeiros Ilimitados',
    features: [
      'Tudo do plano Flow Pro',
      'Barbeiros e colaboradores ilimitados',
      'Gestão de múltiplas unidades ou filiais',
      'IA avançada com previsão de demanda',
      'Clube de assinatura e fidelidade VIP',
      'Exportação contábil e conciliação bancária',
      'Gerente de contas dedicado no WhatsApp',
      'Treinamento ao vivo para toda a equipe',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    ownerName: 'Matheus Albuquerque',
    role: 'Fundador & Master Barber',
    shopName: 'Barbearia Dom Corleone',
    city: 'São Paulo, SP',
    metric: '-84% de faltas',
    metricLabel: 'após ativar lembretes inteligentes via WhatsApp',
    quote:
      'Antes do FlowBarb, perdíamos de 4 a 6 cortes por dia com clientes que esqueciam o horário. Agora o cliente confirma no WhatsApp com um clique e a IA preenche qualquer horário vago em minutos.',
    barbersCount: 6,
  },
  {
    id: '2',
    ownerName: 'Renato Silveira',
    role: 'Proprietário',
    shopName: 'Studio Imperial Barber',
    city: 'Belo Horizonte, MG',
    metric: '+R$ 5.800/mês',
    metricLabel: 'recuperados com a IA reativando clientes sumidos',
    quote:
      'A função de IA do flowbarb.site é surreal. Ela identifica quem não corta o cabelo há mais de 22 dias e manda uma mensagem no tom certo. Recuperamos clientes antigos sem gastar um centavo em anúncio.',
    barbersCount: 4,
  },
  {
    id: '3',
    ownerName: 'Lucas & Diego Prado',
    role: 'Sócios-Proprietários',
    shopName: 'Barbearia Vintage 1980',
    city: 'Curitiba, PR',
    metric: 'Zero conflitos',
    metricLabel: 'no fechamento semanal de comissões da equipe',
    quote:
      'Sexta-feira à noite era um inferno somando comandas de papel. Com o login individual da equipe, cada barbeiro já vê sua comissão acumulada ao vivo no celular. Acabou qualquer desconfiança na barbearia.',
    barbersCount: 8,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona o teste grátis de 14 dias?',
    answer:
      'Você cria sua conta em menos de 2 minutos e tem acesso imediato a todas as ferramentas do FlowBarb Pro, incluindo a Inteligência Artificial e logins da equipe. Não solicitamos dados de cartão de crédito no cadastro de teste.',
  },
  {
    id: 'faq-2',
    question: 'Meus barbeiros têm acesso aos dados financeiros gerais da barbearia?',
    answer:
      'Não. O FlowBarb possui níveis rígidos de acesso. O barbeiro faz login com a conta dele e só enxerga a sua própria agenda, seus clientes atendidos e o extrato da sua própria comissão. O faturamento global, despesas e relatórios gerais são visíveis unicamente para o dono/administrador.',
  },
  {
    id: 'faq-3',
    question: 'O cliente precisa baixar um aplicativo pesado pela Google Play ou App Store?',
    answer:
      'Não é obrigatório! O FlowBarb funciona através de uma aplicação web progressiva (PWA) de alta velocidade no seu link personalizado do flowbarb.site. O cliente abre no WhatsApp ou Instagram, escolhe o barbeiro e agenda em 30 segundos sem precisar gastar memória do telefone.',
  },
  {
    id: 'faq-4',
    question: 'Como a Inteligência Artificial ajuda minha barbearia a faturar mais?',
    answer:
      'A IA do FlowBarb analisa o histórico de frequência de cada cliente. Se um cliente costuma cortar cabelo a cada 20 dias e atingiu 25 dias sem agendar, a IA sugere um lembrete no WhatsApp com horário personalizado. Além disso, a IA identifica horários ociosos (como terças-feiras de manhã) e sugere ações automáticas para preencher as cadeiras.',
  },
  {
    id: 'faq-5',
    question: 'Posso usar no celular, tablet e computador ao mesmo tempo?',
    answer:
      'Sim! O sistema é 100% em nuvem e responsivo. Você pode ter um tablet no balcão da recepção, os barbeiros usando em seus próprios celulares enquanto atendem, e você acompanhando o faturamento da sua casa ou de onde estiver.',
  },
  {
    id: 'faq-6',
    question: 'É difícil migrar os dados se eu já uso outro sistema ou planilha?',
    answer:
      'É muito simples. Nossa equipe de suporte ajuda você a importar sua lista de clientes e contatos sem nenhum custo adicional. Em menos de 1 hora sua barbearia estará 100% pronta para rodar.',
  },
];

export const SAMPLE_TODAY_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-1',
    clientName: 'Gabriel Siqueira',
    service: 'Corte Degradê + Barba Alinhada',
    time: '14:00',
    barber: 'Lucas "Navalha"',
    price: 85,
    status: 'em_andamento',
    phone: '(11) 98765-4321',
  },
  {
    id: 'apt-2',
    clientName: 'Rodrigo Mendonça',
    service: 'Barboterapia & Toalha Quente',
    time: '15:00',
    barber: 'Felipe Barber',
    price: 60,
    status: 'confirmado',
    phone: '(11) 97654-3210',
  },
  {
    id: 'apt-3',
    clientName: 'Alexandre Pires',
    service: 'Corte Clássico na Tesoura',
    time: '16:00',
    barber: 'Lucas "Navalha"',
    price: 55,
    status: 'agendado',
    phone: '(11) 96543-2109',
  },
  {
    id: 'apt-4',
    clientName: 'Bruno Henrique',
    service: 'Combo Cabelo + Barba + Sobrancelha',
    time: '17:00',
    barber: 'Diego Master',
    price: 110,
    status: 'confirmado',
    phone: '(11) 95432-1098',
  },
];
