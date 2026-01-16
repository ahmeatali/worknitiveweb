
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { HowItWorks } from './components/HowItWorks';
import { ProductShowcase } from './components/ProductShowcase';
import { MobileAppSection } from './components/MobileAppSection';
import { Faq } from './components/Faq';
import { FinalCTA } from './components/FinalCTA';
import { DemoModal } from './components/DemoModal';
import { OfficeInfo } from './components/OfficeInfo';

export const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClick = () => {
    // @ts-ignore
    if (typeof Calendly !== 'undefined') {
      // @ts-ignore
      Calendly.initPopupWidget({
        url: 'https://calendly.com/ahmet-yilmaz-worknitive/meet-with-worknitive'
      });
    } else {
      setShowDemo(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-worknitive selection:text-white">
      <Header scrolled={scrolled} onDemoClick={handleDemoClick} />
      
      <main>
        <Hero onDemoClick={handleDemoClick} />
        
        <ProductShowcase />
        
        <MobileAppSection />
        
        <div id="features">
          <FeatureGrid />
        </div>

        <HowItWorks />

        <Faq />

        <FinalCTA onDemoClick={handleDemoClick} />
      </main>

      <OfficeInfo />

      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
    </div>
  );
};
