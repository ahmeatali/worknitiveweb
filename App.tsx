
import React, { useState, useEffect, useCallback } from 'react';
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
import { LegalModal, LegalContent } from './components/LegalModal';
import { BlogPost } from './types';

export const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [path, setPath] = useState(window.location.pathname);
  const [legalModal, setLegalModal] = useState<{ title: string; type: 'privacy' | 'kvkk' | 'terms' } | null>(null);

  const navigateTo = useCallback((newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
    window.scrollTo(0, 0);
  }, []);

  const handleDemoClick = useCallback(() => {
    // @ts-ignore
    if (typeof Calendly !== 'undefined') {
      // @ts-ignore
      Calendly.initPopupWidget({
        url: 'https://calendly.com/ahmet-yilmaz-worknitive/meet-with-worknitive'
      });
    } else {
      setShowDemo(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleLocationChange = () => {
      setPath(window.location.pathname);
      const hash = window.location.hash;
      
      if (hash === '#gizlilik') setLegalModal({ title: 'Gizlilik Politikası', type: 'privacy' });
      else if (hash === '#kvkk') setLegalModal({ title: 'KVKK Aydınlatma Metni', type: 'kvkk' });
      else if (hash === '#kullanim-sartlari') setLegalModal({ title: 'Kullanım Şartları', type: 'terms' });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    
    handleLocationChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const isLegalPage = ['/gizlilik', '/kvkk', '/kullanim-sartlari'].includes(path);

  if (isLegalPage) {
    const type = path === '/gizlilik' ? 'privacy' : path === '/kvkk' ? 'kvkk' : 'terms';
    const title = type === 'privacy' ? 'Gizlilik Politikası' : type === 'kvkk' ? 'KVKK Aydınlatma Metni' : 'Kullanım Şartları';

    return (
      <div className="min-h-screen bg-white selection:bg-worknitive selection:text-white">
        <Header scrolled={true} onDemoClick={handleDemoClick} />
        <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
          <button 
            onClick={() => navigateTo('/')}
            className="mb-8 flex items-center gap-2 text-worknitive font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all"
          >
            ← Ana Sayfaya Dön
          </button>
          <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm">
            <LegalContent type={type} />
          </div>
        </div>
        <Footer onLegalClick={(t, type) => navigateTo(`/${type === 'privacy' ? 'gizlilik' : type === 'kvkk' ? 'kvkk' : 'kullanim-sartlari'}`)} />
      </div>
    );
  }

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

      <OfficeInfo />
      <Footer onLegalClick={(t, type) => navigateTo(`/${type === 'privacy' ? 'gizlilik' : type === 'kvkk' ? 'kvkk' : 'kullanim-sartlari'}`)} />

      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
      {selectedPost && <BlogPostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />}
      {legalModal && (
        <LegalModal 
          title={legalModal.title} 
          type={legalModal.type} 
          onClose={() => {
            setLegalModal(null);
            window.history.replaceState(null, '', window.location.pathname);
          }} 
        />
      )}
    </div>
  );
};
