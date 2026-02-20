
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
import { LegalContent } from './components/LegalModal';
import { BlogPost } from './types';

export const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [path, setPath] = useState(window.location.pathname);

  // Sayfa değiştirme fonksiyonu (SPA Routing)
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
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Yasal sayfa rotaları
  const legalRoutes: Record<string, { title: string; type: 'privacy' | 'kvkk' | 'terms' }> = {
    '/gizlilik': { title: 'Gizlilik Politikası', type: 'privacy' },
    '/kvkk': { title: 'KVKK Aydınlatma Metni', type: 'kvkk' },
    '/kullanim-sartlari': { title: 'Kullanım Şartları', type: 'terms' }
  };

  const activeLegal = legalRoutes[path];

  // --- ALT SAYFA GÖRÜNÜMÜ ---
  if (activeLegal) {
    return (
      <div className="min-h-screen bg-white selection:bg-worknitive selection:text-white flex flex-col">
        <Header 
          scrolled={true} 
          onDemoClick={handleDemoClick} 
          currentPath={path}
          onNavigate={navigateTo}
        />
        
        <main className="flex-1 pt-32 pb-24">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Breadcrumb / Navigasyon */}
            <div className="mb-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <button onClick={() => navigateTo('/')} className="hover:text-worknitive transition-colors">Ana Sayfa</button>
              <span>/</span>
              <span className="text-slate-900">{activeLegal.title}</span>
            </div>

            <article className="bg-slate-50 p-10 md:p-20 rounded-[4rem] border border-slate-100 shadow-sm animate-fadeIn">
              <LegalContent type={activeLegal.type} />
            </article>

            <div className="mt-12 text-center">
              <button 
                onClick={() => navigateTo('/')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Ana Sayfaya Dön
              </button>
            </div>
          </div>
        </main>

        <OfficeInfo />
        <Footer onLegalClick={(title, type) => navigateTo(`/${type === 'privacy' ? 'gizlilik' : type === 'kvkk' ? 'kvkk' : 'kullanim-sartlari'}`)} />
      </div>
    );
  }

  // --- ANA SAYFA GÖRÜNÜMÜ ---
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-worknitive selection:text-white">
      <Header 
        scrolled={scrolled} 
        onDemoClick={handleDemoClick} 
        currentPath={path}
        onNavigate={navigateTo}
      />
      
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
      <Footer onLegalClick={(title, type) => navigateTo(`/${type === 'privacy' ? 'gizlilik' : type === 'kvkk' ? 'kvkk' : 'kullanim-sartlari'}`)} />

      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
      {selectedPost && <BlogPostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  );
};
