
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-xl shadow-slate-900/5 border-b border-slate-100' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="cursor-pointer group">
          <Logo className={scrolled ? "h-8" : "h-10"} />
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          <button onClick={() => scrollToSection('features')} className="text-sm font-black text-slate-600 hover:text-worknitive uppercase tracking-widest transition-colors">Çözümler</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-black text-slate-600 hover:text-worknitive uppercase tracking-widest transition-colors">Nasıl Çalışır?</button>
          <button onClick={() => scrollToSection('faq')} className="text-sm font-black text-slate-600 hover:text-worknitive uppercase tracking-widest transition-colors">SSS</button>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onDemoClick}
            className="px-8 py-3.5 bg-worknitive text-white rounded-xl font-bold text-sm hover:bg-worknitive-dark transition-all shadow-xl shadow-worknitive/30 active:scale-95"
          >
            Ücretsiz Demo Al
          </button>
        </div>
      </div>
    </header>
  );
};
