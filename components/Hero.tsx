
import React from 'react';
import { DashboardMockup } from './DashboardMockup';

interface HeroProps {
  onDemoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  return (
    <section className="pt-56 pb-16 lg:pt-80 lg:pb-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-worknitive/10 text-worknitive text-xs font-black mb-10 uppercase tracking-[0.2em]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-worknitive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-worknitive"></span>
              </span>
              Türkiye'nin En Akıllı İK Platformu
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-[88px] font-[900] tracking-tighter text-slate-900 mb-10 leading-[0.92]">
              İK Süreçlerinde <br/> 
              <span className="gradient-text">Zekayı</span> Hissedin.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-14 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Harcama, PDKS ve puantaj süreçlerini AI desteğiyle tek ekranda toplayın. Modern şirketler için yüksek performanslı bir işletim sistemi.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button 
                onClick={onDemoClick}
                className="px-12 py-6 bg-worknitive text-white rounded-[2rem] font-black text-xl hover:bg-worknitive-dark transition-all shadow-[0_20px_40px_rgba(106,13,173,0.3)] hover:-translate-y-1 active:scale-95"
              >
                Ücretsiz Deneyin
              </button>
              <button className="px-12 py-6 bg-white text-slate-900 border-2 border-slate-100 rounded-[2rem] font-black text-xl hover:bg-slate-50 transition-all hover:border-slate-200">
                Ürün Videosunu İzle
              </button>
            </div>
          </div>
          
          <div className="relative group lg:scale-125 xl:scale-140 transition-transform duration-1000">
            <div className="absolute -inset-20 bg-gradient-to-r from-worknitive/20 to-blue-500/20 rounded-[4rem] blur-[100px] group-hover:blur-[130px] transition-all duration-700 opacity-60"></div>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
