
import React from 'react';

export const OfficeInfo: React.FC = () => {
  return (
    <section className="pt-24 pb-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12">
          
          {/* Section Title & Logos Group */}
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="text-center">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-3">
                Kurumsal İş Ortaklarımız
              </h4>
              <div className="h-0.5 w-10 bg-worknitive mx-auto rounded-full opacity-30"></div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
              <div className="text-[14px] md:text-[16px] font-black text-slate-400 uppercase tracking-tighter transition-all">
                TÜBİTAK <span className="text-slate-900 font-black">MARTEK</span>
              </div>
              <div className="text-[14px] md:text-[16px] font-black text-slate-400 uppercase tracking-tighter transition-all">
                ALBARAKA <span className="text-rose-600 font-black">GARAJ</span>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div className="w-full max-w-2xl bg-[#f8fafc] rounded-[2.5rem] p-6 md:p-8 border border-slate-100 flex flex-col md:flex-row items-center gap-8">
            <div className="w-14 h-14 bg-worknitive rounded-2xl flex items-center justify-center text-white shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h5 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-2">Genel Merkez Ofisi</h5>
              <p className="text-slate-500 font-bold text-base leading-relaxed">
                Barış Mah. Tübitak Gebze Yerleşkesi, <br className="hidden md:block" />
                Koşu Yolu Cad. Gebze/Kocaeli
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 md:border-l md:border-slate-200 md:pl-8 pt-6 md:pt-0 border-t border-slate-100 md:border-t-0 w-full md:w-auto">
              <a href="mailto:info@worknitive.com" className="text-[12px] font-black text-worknitive hover:text-worknitive-dark tracking-widest transition-colors uppercase">
                info@worknitive.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
