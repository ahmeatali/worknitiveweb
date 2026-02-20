
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

  // Sayfa değiştirme fonksiyonu
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
  const isLegalPage = ['/gizlilik', '/kvkk', '/kullanim-sartlari'].includes(path);

  // Render Logic
  const renderLegalPage = () => {
    const type = path === '/gizlilik' ? 'privacy' : path === '/kvkk' ? 'kvkk' : 'terms';
    
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
            <button 
              onClick={() => navigateTo('/')}
              className="group mb-12 flex items-center gap-2 text-slate-400 hover:text-worknitive font-black text-[10px] uppercase tracking-[0.2em] transition-all"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              Ana Sayfaya Dön
            </button>

            <article className="bg-slate-50 p-10 md:p-20 rounded-[4rem] border border-slate-100 shadow-sm animate-fadeIn">
              <LegalContent type={type as 'privacy' | 'kvkk' | 'terms'} />
            </article>

            <div className="mt-12 p-8 bg-worknitive/5 rounded-[2.5rem] border border-worknitive/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h5 className="font-bold text-slate-900 mb-1 text-sm uppercase tracking-tight">Hukuki bir sorunuz mu var?</h5>
                <p className="text-xs text-slate-500 font-medium tracking-tight">Süreçlerimiz hakkında daha fazla bilgi almak için hukuk ekibimizle iletişime geçebilirsiniz.</p>
              </div>
              <a href="mailto:info@worknitive.com" className="px-6 py-3 bg-worknitive text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-worknitive/20 hover:scale-105 transition-all">
                info@worknitive.com
              </a>
            </div>
          </div>
        </main>

        <OfficeInfo />
        <Footer onLegalClick={(title, type) => navigateTo(`/${type === 'privacy' ? 'gizlilik' : type === 'kvkk' ? 'kvkk' : 'kullanim-sartlari'}`)} />
      </div>
    );
  };

  const renderLandingPage = () => (
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

  return isLegalPage ? renderLegalPage() : renderLandingPage();
};
