import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { FeatureGrid } from './components/FeatureGrid';
import { AiEngineSection } from './components/AiEngineSection';
import { RoiCalculator } from './components/RoiCalculator';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { SignupModal } from './components/SignupModal';

export default function App() {
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginRole, setLoginRole] = useState<'owner' | 'barber' | 'client'>('owner');

  const handleOpenSignup = () => {
    setSignupOpen(true);
  };

  const handleOpenLogin = (role: 'owner' | 'barber' | 'client' = 'owner') => {
    setLoginRole(role);
    setLoginOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-neutral-100 selection:bg-[#d4af37]/30 selection:text-[#f4d068]">
      {/* Top Bar Header */}
      <Header 
        onOpenSignup={handleOpenSignup} 
        onOpenLogin={handleOpenLogin} 
      />

      {/* Hero Section */}
      <main>
        <Hero 
          onOpenSignup={handleOpenSignup} 
          onOpenLogin={handleOpenLogin} 
        />

        {/* Interactive Multi-Role Showcase (Dono, Equipe/Barbeiro, Cliente, IA) */}
        <InteractiveShowcase 
          onOpenSignup={handleOpenSignup} 
          onOpenLogin={handleOpenLogin} 
        />

        {/* Bento Grid of Core Capabilities */}
        <FeatureGrid 
          onOpenSignup={handleOpenSignup} 
          onOpenLogin={handleOpenLogin} 
        />

        {/* AI Engine Deep Dive */}
        <AiEngineSection 
          onOpenSignup={handleOpenSignup} 
        />

        {/* Interactive Barbershop ROI & Revenue Calculator */}
        <RoiCalculator 
          onOpenSignup={handleOpenSignup} 
        />

        {/* Pricing Plans */}
        <Pricing 
          onOpenSignup={handleOpenSignup} 
        />

        {/* Verified Social Proof & Case Studies */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Final Conversion CTA Banner */}
        <CtaBanner 
          onOpenSignup={handleOpenSignup} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenLogin={handleOpenLogin} 
        onOpenSignup={handleOpenSignup} 
      />

      {/* Interactive Modals */}
      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        initialRole={loginRole} 
      />

      <SignupModal 
        isOpen={signupOpen} 
        onClose={() => setSignupOpen(false)} 
      />
    </div>
  );
}
