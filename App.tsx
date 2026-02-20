
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { HowItWorks } from './components/HowItWorks';
import { ProductShowcase } from './components/ProductShowcase';
import { MobileAppSection } from './components/MobileAppSection';
import { Blog } from './components/Blog';
import { BlogPostDetail } from './components/BlogPostDetail';
import { Faq } from './components/Faq';
import { FinalCTA } from './components/FinalCTA';
import { DemoModal } from './components/DemoModal';
import { OfficeInfo } from './components/OfficeInfo';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { BlogPost } from './types';

export const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [legalModal, setLegalModal] = useState<{ title: string; type: 'privacy' | 'kvkk' | 'terms' } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#gizlilik') {
        setLegalModal({ title: 'Gizlilik Politikası', type: 'privacy' });
      } else if (hash === '#kvkk') {
        setLegalModal({ title: 'KVKK Aydınlatma Metni', type: 'kvkk' });
      } else if (hash === '#kullanim-sartlari') {
        setLegalModal({ title: 'Kullanım Şartları', type: 'terms' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
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

  const closeLegalModal = () => {
    setLegalModal(null);
    // Clear hash without jump
    history.replaceState(null, "", window.location.pathname + window.location.search);
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
        <Blog onPostClick={(post) => setSelectedPost(post)} />
        <Faq />
        <FinalCTA onDemoClick={handleDemoClick} />
      </main>

      {/* Modern SaaS Akışı: Adres Kartı -> Footer Linkleri */}
      <OfficeInfo />
      <Footer onLegalClick={(title, type) => setLegalModal({ title, type })} />

      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
      {selectedPost && <BlogPostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />}
      {legalModal && (
        <LegalModal 
          title={legalModal.title} 
          type={legalModal.type} 
          onClose={closeLegalModal} 
        />
      )}
    </div>
  );
};
