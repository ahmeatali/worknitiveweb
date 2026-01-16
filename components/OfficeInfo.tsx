
import React from 'react';

export const OfficeInfo: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-10">
          
          {/* Section Title & Logos Group */}
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="text-center">
              <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">
                Kurumsal İş Ortaklarımız
              </h4>
              <div className="h-0.5 w-8 bg-worknitive mx-auto rounded-full opacity-50"></div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
              {/* TÜBİTAK Marmara Teknokent */}
              <div className="group relative h-10 md:h-12 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/tr/0/05/T%C3%BCbitak_logo.png" 
                  alt="TÜBİTAK Marmara Teknokent" 
                  className="h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = "text-[10px] font-black text-slate-400 uppercase tracking-tighter";
                      fallback.innerHTML = `TÜBİTAK <span class="text-slate-900">MARTEK</span>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>

              {/* Albaraka Garaj */}
              <div className="group relative h-10 md:h-12 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://pbs.twimg.com/profile_images/930704085429813248/qYq8rJ4k_400x400.jpg" 
                  alt="Albaraka Garaj" 
                  className="h-full object-contain grayscale group-hover:grayscale-0 rounded-full transition-all"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = "text-[10px] font-black text-slate-400 uppercase tracking-tighter";
                      fallback.innerHTML = `ALBARAKA <span class="text-red-600">GARAJ</span>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Compact Address Section */}
          <div className="w-full max-w-xl bg-slate-50 rounded-[2rem] p-5 md:p-6 border border-slate-100 flex items-center gap-6 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-500">
            <div className="w-12 h-12 bg-worknitive rounded-2xl flex items-center justify-center text-white shadow-md shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            
            <div className="flex-1 min-w-0">
              <h5 className="text-slate-900 font-black text-xs uppercase tracking-wider mb-1">Genel Merkez Ofisi</h5>
              <p className="text-slate-500 font-bold text-sm leading-snug truncate md:whitespace-normal">
                Barış Mah. Tübitak Gebze Yerleşkesi, Koşu Yolu Cad. Gebze/Kocaeli
              </p>
            </div>

            <div className="hidden md:flex flex-col items-end gap-1 border-l border-slate-200 pl-6">
              <a href="mailto:info@worknitive.com" className="text-[10px] font-black text-worknitive hover:underline tracking-widest">INFO@WORKNITIVE.COM</a>
              <span className="text-[10px] font-bold text-slate-300">KOCAELİ / TR</span>
            </div>
          </div>

          {/* Minimal Copyright */}
          <div className="pt-4 border-t border-slate-50 w-full text-center">
            <div className="text-slate-300 text-[9px] font-black uppercase tracking-[0.4em]">
              © 2025 WORKNITIVE A.Ş.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
