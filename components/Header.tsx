
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
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl py-3 shadow-xl shadow-slate-900/5 border-b border-slate-100' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="cursor-pointer group flex items-center">
          {/* Logo yüksekliği ideal B2B SaaS standartlarına (32px - 44px) getirildi */}
          <Logo className={scrolled ? "h-8 md:h-9" : "h-10 md:h-11"} />
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          <button onClick={() => scrollToSection('features')} className="text-[13px] font-bold text-slate-500 hover:text-worknitive uppercase tracking-[0.15em] transition-colors">Çözümler</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-[13px] font-bold text-slate-500 hover:text-worknitive uppercase tracking-[0.15em] transition-colors">Nasıl Çalışır?</button>
          <button onClick={() => scrollToSection('faq')} className="text-[13px] font-bold text-slate-500 hover:text-worknitive uppercase tracking-[0.15em] transition-colors">SSS</button>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onDemoClick}
            className="px-7 py-3 bg-worknitive text-white rounded-xl font-bold text-sm hover:bg-worknitive-dark transition-all shadow-lg shadow-worknitive/20 active:scale-95"
          >
            Ücretsiz Demo Al
          </button>
        </div>
      </div>
    </header>
  );
};
