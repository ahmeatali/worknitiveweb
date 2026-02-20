
import React from 'react';

interface FooterProps {
  onLegalClick: (title: string, type: 'privacy' | 'kvkk' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  return (
    <footer className="bg-white pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12">
          
          {/* Legal Links Bar - Crucial for Google Play */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 border-t border-slate-100 pt-12 w-full max-w-4xl">
            <button 
              onClick={() => onLegalClick('Gizlilik Politikası', 'privacy')} 
              className="text-[11px] font-black text-slate-400 hover:text-worknitive uppercase tracking-[0.2em] transition-colors"
            >
              Gizlilik Politikası
            </button>
            <button 
              onClick={() => onLegalClick('KVKK Aydınlatma Metni', 'kvkk')} 
              className="text-[11px] font-black text-slate-400 hover:text-worknitive uppercase tracking-[0.2em] transition-colors"
            >
              KVKK Metni
            </button>
            <button 
              onClick={() => onLegalClick('Kullanım Şartları', 'terms')} 
              className="text-[11px] font-black text-slate-400 hover:text-worknitive uppercase tracking-[0.2em] transition-colors"
            >
              Kullanım Şartları
            </button>
            <a 
              href="mailto:info@worknitive.com" 
              className="text-[11px] font-black text-slate-400 hover:text-worknitive uppercase tracking-[0.2em] transition-colors"
            >
              Destek
            </a>
          </div>

          {/* Minimal Copyright */}
          <div className="text-center">
            <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.5em]">
              © 2025 WORKNITIVE BİLİŞİM VE TİCARET A.Ş.
            </p>
            <p className="text-slate-200 text-[9px] mt-4 font-bold tracking-widest uppercase">
              İstanbul & Kocaeli, Türkiye
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
