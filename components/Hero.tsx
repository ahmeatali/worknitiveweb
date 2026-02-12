
import React from 'react';
import { DashboardMockup } from './DashboardMockup';

interface HeroProps {
  onDemoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  return (
    <section className="pt-32 pb-16 lg:pt-52 lg:pb-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-worknitive/10 text-worknitive text-xs font-bold mb-8 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-worknitive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-worknitive"></span>
              </span>
              Türkiye'nin En Akıllı İK Platformu
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-[800] tracking-tight text-slate-900 mb-8 leading-[1.05]">
              İK Süreçlerinde <br/> 
              <span className="gradient-text">Zekayı</span> Hissedin.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Harcama, PDKS ve puantaj süreçlerini AI desteğiyle tek ekranda toplayın. Modern şirketler için yüksek performanslı bir işletim sistemi.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button 
                onClick={onDemoClick}
                className="px-10 py-5 bg-worknitive text-white rounded-2xl font-bold text-lg hover:bg-worknitive-dark transition-all shadow-2xl shadow-worknitive/30 hover:-translate-y-1 active:scale-95"
              >
                Ücretsiz Deneyin
              </button>
              <button className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all hover:border-slate-300">
                Ürün Videosunu İzle
              </button>
            </div>
          </div>
          
          <div className="relative group lg:scale-110 xl:scale-125 transition-transform duration-700">
            <div className="absolute -inset-10 bg-gradient-to-r from-worknitive/20 to-blue-500/20 rounded-[4rem] blur-[80px] group-hover:blur-[100px] transition-all duration-500 opacity-60"></div>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
