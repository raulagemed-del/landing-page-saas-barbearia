export type UserRole = 'owner' | 'barber' | 'client' | 'ai';

export interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  highlight?: boolean;
  barbersCount: string;
  badge?: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  ownerName: string;
  role: string;
  shopName: string;
  city: string;
  metric: string;
  metricLabel: string;
  quote: string;
  barbersCount: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Appointment {
  id: string;
  clientName: string;
  service: string;
  time: string;
  barber: string;
  price: number;
  status: 'confirmado' | 'em_andamento' | 'finalizado' | 'agendado';
  phone: string;
}
