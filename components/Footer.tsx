
import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onLegalClick: (title: string, type: 'privacy' | 'kvkk' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <Logo className="h-10 mb-6" />
            <p className="text-slate-500 max-w-sm mb-8">
              B2B SaaS platformumuzla harcama, PDKS, izin ve puantaj süreçlerini tek noktada birleştirerek İK ve finans operasyonlarını dijitalleştiriyoruz.
            </p>
            <div className="flex items-center gap-4">
              {['twitter', 'linkedin', 'instagram'].map((s) => (
                <div key={s} className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-worknitive hover:border-worknitive transition-all cursor-pointer">
                  <span className="capitalize text-[10px] font-bold">{s[0]}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Ürün</h4>
            <ul className="space-y-4">
              {['Harcama Yönetimi', 'PDKS', 'İzin Takibi', 'Puantaj', 'Entegrasyonlar'].map(l => (
                <li key={l}><a href="#" className="text-slate-500 text-sm hover:text-worknitive">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Şirket</h4>
            <ul className="space-y-4">
              {['Hakkımızda', 'Kariyer', 'Basın Kiti', 'İletişim'].map(l => (
                <li key={l}><a href="#" className="text-slate-500 text-sm hover:text-worknitive">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Kaynaklar</h4>
            <ul className="space-y-4">
              {['Blog', 'Yardım Merkezi', 'API Dökümanı', 'Sistem Durumu'].map(l => (
                <li key={l}><a href="#" className="text-slate-500 text-sm hover:text-worknitive">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Yasal</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => onLegalClick('KVKK Politikası', 'kvkk')} className="text-slate-500 text-sm hover:text-worknitive">KVKK Politikası</button>
              </li>
              <li>
                <button onClick={() => onLegalClick('Gizlilik Politikası', 'privacy')} className="text-slate-500 text-sm hover:text-worknitive">Gizlilik</button>
              </li>
              <li>
                <button onClick={() => onLegalClick('Kullanım Şartları', 'terms')} className="text-slate-500 text-sm hover:text-worknitive">Kullanım Şartları</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">
            © 2025 Worknitive Bilişim ve Ticaret A.Ş. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6 text-slate-500 text-sm font-medium">
             <span>info@worknitive.com</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Tüm Sistemler Aktif
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
