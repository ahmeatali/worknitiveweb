
import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  scrolled: boolean;
  onDemoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ scrolled, onDemoClick }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = scrolled ? 80 : 100;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl py-3 shadow-xl shadow-slate-900/5 border-b border-slate-100' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Bölümü */}
        <div 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
          className="cursor-pointer group flex items-center shrink-0"
        >
          <Logo className={scrolled ? "h-10 md:h-12" : "h-12 md:h-16"} />
        </div>

        {/* Navigasyon Linkleri - Desktop */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-[12px] font-extrabold text-slate-500 hover:text-worknitive uppercase tracking-[0.2em] transition-colors"
          >
            Çözümler
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-[12px] font-extrabold text-slate-500 hover:text-worknitive uppercase tracking-[0.2em] transition-colors"
          >
            Nasıl Çalışır?
          </button>
          <button 
            onClick={() => scrollToSection('blog')} 
            className="text-[12px] font-extrabold text-slate-500 hover:text-worknitive uppercase tracking-[0.2em] transition-colors"
          >
            Blog
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-[12px] font-extrabold text-slate-500 hover:text-worknitive uppercase tracking-[0.2em] transition-colors"
          >
            SSS
          </button>
        </nav>

        {/* Sağ Taraf - Aksiyon Butonu */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onDemoClick}
            className="px-6 md:px-8 py-3 bg-worknitive text-white rounded-xl font-bold text-sm hover:bg-worknitive-dark transition-all shadow-lg shadow-worknitive/20 active:scale-95"
          >
            <span className="hidden sm:inline">Ücretsiz</span> Demo Al
          </button>
        </div>
      </div>
    </header>
  );
};
