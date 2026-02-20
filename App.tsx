
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
  const [path, setPath] = useState(window.location.pathname);
  const [scrolled, setScrolled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Sayfa başlığını güncelleme (SEO için)
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Worknitive | Yeni Nesil İK ve Harcama Yönetimi',
      '/gizlilik': 'Gizlilik Politikası | Worknitive',
      '/kvkk': 'KVKK Aydınlatma Metni | Worknitive',
      '/kullanim-sartlari': 'Kullanım Şartları | Worknitive'
    };
    document.title = titles[path] || 'Worknitive';
  }, [path]);

  // SPA Navigasyon Fonksiyonu
  const navigateTo = useCallback((newPath: string) => {
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
      setPath(newPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handlePopState = () => setPath(window.location.pathname);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Yasal sayfa rotaları
  const legalRoutes: Record<string, { title: string; type: 'privacy' | 'kvkk' | 'terms' }> = {
    '/gizlilik': { title: 'Gizlilik Politikası', type: 'privacy' },
    '/kvkk': { title: 'KVKK Aydınlatma Metni', type: 'kvkk' },
    '/kullanim-sartlari': { title: 'Kullanım Şartları', type: 'terms' }
  };

  const activeLegal = legalRoutes[path];

  // --- ALT SAYFA RENDER (SUBPAGE) ---
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
            {/* Navigasyon / Geri Dön */}
            <nav className="mb-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <button 
                onClick={() => navigateTo('/')}
                className="hover:text-worknitive transition-colors"
              >
                Ana Sayfa
              </button>
              <span className="opacity-30">/</span>
              <span className="text-slate-900">{activeLegal.title}</span>
            </nav>

            {/* Document Content */}
            <article className="bg-slate-50 p-10 md:p-20 rounded-[4rem] border border-slate-100 shadow-sm animate-fadeIn">
              <LegalContent type={activeLegal.type} />
            </article>

            {/* Bottom Actions */}
            <div className="mt-16 text-center">
              <button 
                onClick={() => navigateTo('/')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95"
              >
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Ana Sayfaya Dön
              </button>
            </div>
          </div>
        </main>

        <OfficeInfo />
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  // --- ANA SAYFA RENDER ---
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
      <Footer onNavigate={navigateTo} />

      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
      {selectedPost && <BlogPostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  );
};
