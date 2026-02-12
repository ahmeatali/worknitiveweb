
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl py-4 shadow-xl shadow-slate-900/5 border-b border-slate-100' : 'py-10'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="cursor-pointer group">
          {/* Logo boyutları radikal şekilde büyütüldü: h-20 (80px) ve h-28 (112px) */}
          <Logo className={scrolled ? "h-12 md:h-14" : "h-20 md:h-24 lg:h-28"} />
        </div>

        <nav className="hidden lg:flex items-center gap-14">
          <button onClick={() => scrollToSection('features')} className="text-[14px] font-extrabold text-slate-500 hover:text-worknitive uppercase tracking-[0.2em] transition-colors">Çözümler</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-[14px] font-extrabold text-slate-500 hover:text-worknitive uppercase tracking-[0.2em] transition-colors">Nasıl Çalışır?</button>
          <button onClick={() => scrollToSection('faq')} className="text-[14px] font-extrabold text-slate-500 hover:text-worknitive uppercase tracking-[0.2em] transition-colors">SSS</button>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onDemoClick}
            className="px-9 py-4 bg-worknitive text-white rounded-2xl font-black text-sm hover:bg-worknitive-dark transition-all shadow-2xl shadow-worknitive/30 active:scale-95 uppercase tracking-wider"
          >
            Ücretsiz Demo Al
          </button>
        </div>
      </div>
    </header>
  );
};
