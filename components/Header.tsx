
import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  scrolled: boolean;
  onDemoClick: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ scrolled, onDemoClick, currentPath, onNavigate }) => {
  const isHome = currentPath === '/' || currentPath === '';

  const scrollToSection = (id: string) => {
    if (!isHome) {
      // Önce ana sayfaya git
      onNavigate('/');
      // Sayfa yüklendikten sonra scroll yap
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 50);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      const offset = scrolled ? 80 : 100;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate('/');
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl py-3 shadow-xl shadow-slate-900/5 border-b border-slate-100' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="/"
          onClick={handleLogoClick} 
          className="cursor-pointer group flex items-center shrink-0"
        >
          <Logo className={scrolled ? "h-10 md:h-12" : "h-12 md:h-16"} />
        </a>

        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {['features', 'how-it-works', 'blog', 'faq'].map((id) => (
            <button 
              key={id}
              onClick={() => scrollToSection(id)} 
              className="text-[12px] font-extrabold text-slate-500 hover:text-worknitive uppercase tracking-[0.2em] transition-colors"
            >
              {id === 'features' ? 'Çözümler' : id === 'how-it-works' ? 'Nasıl Çalışır?' : id === 'blog' ? 'Blog' : 'SSS'}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onDemoClick}
            className="px-6 md:px-8 py-3 bg-worknitive text-white rounded-xl font-bold text-sm hover:bg-worknitive-dark transition-all shadow-lg shadow-worknitive/20 active:scale-95"
          >
            Demo Al
          </button>
        </div>
      </div>
    </header>
  );
};
