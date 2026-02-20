
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { FeatureGrid } from './components/FeatureGrid';
import { ProductShowcase } from './components/ProductShowcase';
import { VideoSection } from './components/VideoSection';
import { Integrations } from './components/Integrations';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { MobileAppSection } from './components/MobileAppSection';
import { HowItWorks } from './components/HowItWorks';
import { Blog } from './components/Blog';
import { BlogPostDetail } from './components/BlogPostDetail';
import { Faq } from './components/Faq';
import { FinalCTA } from './components/FinalCTA';
import { DemoModal } from './components/DemoModal';
import { VideoModal } from './components/VideoModal';
import { OfficeInfo } from './components/OfficeInfo';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { BlogPost } from './types';

export const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [legalModal, setLegalModal] = useState<{ title: string; type: 'privacy' | 'kvkk' | 'terms' } | null>(null);

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
    <div className="min-h-screen bg-white selection:bg-worknitive selection:text-white">
      <Header scrolled={scrolled} onDemoClick={handleDemoClick} />
      
      <main>
        <Hero onDemoClick={handleDemoClick} />
        <ProductShowcase />
        <ProblemSolution />
        <FeatureGrid />
        <VideoSection onVideoClick={() => setShowVideo(true)} />
        <MobileAppSection />
        <Integrations />
        <Testimonials />
        <HowItWorks />
        <Pricing onDemoClick={handleDemoClick} />
        <Blog onPostClick={(post) => setSelectedPost(post)} />
        <Faq />
        <FinalCTA onDemoClick={handleDemoClick} />
      </main>

      {/* Alt Bölüm: Partnerler -> Adres Kartı -> Yasal Linkler -> Copyright */}
      <OfficeInfo />
      <Footer onLegalClick={(title, type) => setLegalModal({ title, type })} />

      {/* Modallar */}
      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
      {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
      {selectedPost && <BlogPostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />}
      {legalModal && (
        <LegalModal 
          title={legalModal.title} 
          type={legalModal.type} 
          onClose={() => setLegalModal(null)} 
        />
      )}
    </div>
  );
};
