
import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onLegalClick: (title: string, type: 'privacy' | 'kvkk' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  const handleLegalLink = (e: React.MouseEvent, title: string, type: 'privacy' | 'kvkk' | 'terms') => {
    e.preventDefault();
    onLegalClick(title, type);
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Logo className="h-10 mb-8" />
            <p className="text-slate-500 font-medium leading-relaxed max-w-xs">
              Yeni nesil İK, Harcama ve PDKS yönetim platformu. Operasyonel yükü AI ile dijitalleştirin.
            </p>
          </div>
          
          <div>
            <h5 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-6">Hızlı Erişim</h5>
            <ul className="space-y-4">
              <li><a href="/#features" className="text-slate-400 hover:text-worknitive font-bold text-sm transition-colors">Çözümler</a></li>
              <li><a href="/#how-it-works" className="text-slate-400 hover:text-worknitive font-bold text-sm transition-colors">Nasıl Çalışır?</a></li>
              <li><a href="/#blog" className="text-slate-400 hover:text-worknitive font-bold text-sm transition-colors">Blog & Insight</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-6">Yasal Linkler</h5>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/gizlilik" 
                  onClick={(e) => handleLegalLink(e, 'Gizlilik Politikası', 'privacy')}
                  className="text-slate-400 hover:text-worknitive font-bold text-sm transition-colors"
                >
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a 
                  href="/kvkk" 
                  onClick={(e) => handleLegalLink(e, 'KVKK Aydınlatma Metni', 'kvkk')}
                  className="text-slate-400 hover:text-worknitive font-bold text-sm transition-colors"
                >
                  KVKK Aydınlatma Metni
                </a>
              </li>
              <li>
                <a 
                  href="/kullanim-sartlari" 
                  onClick={(e) => handleLegalLink(e, 'Kullanım Şartları', 'terms')}
                  className="text-slate-400 hover:text-worknitive font-bold text-sm transition-colors"
                >
                  Kullanım Şartları
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-6">İletişim</h5>
            <ul className="space-y-4">
              <li><a href="mailto:info@worknitive.com" className="text-slate-400 hover:text-worknitive font-bold text-sm transition-colors">info@worknitive.com</a></li>
              <li className="text-slate-400 font-bold text-sm">Gebze Yerleşkesi, Kocaeli / TR</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-50">
          <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.4em]">
            © 2025 WORKNITIVE BİLİŞİM VE TİCARET A.Ş.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-300 text-[9px] font-black uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></span>
              Sistem Durumu: Aktif
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
