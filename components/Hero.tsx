
import React from 'react';
import { DashboardMockup } from './DashboardMockup';

interface HeroProps {
  onDemoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-worknitive/10 text-worknitive text-sm font-bold mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-worknitive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-worknitive"></span>
              </span>
              Türkiye'nin En Akıllı İK Platformu
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[1.1]">
              İK Süreçlerinde <br/> 
              <span className="gradient-text">Zekayı</span> Hissedin.
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Harcama, PDKS ve puantaj süreçlerini AI desteğiyle tek ekranda toplayın. Modern şirketler için modern bir işletim sistemi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onDemoClick}
                className="px-10 py-5 bg-worknitive text-white rounded-2xl font-bold text-lg hover:bg-worknitive-dark transition-all shadow-2xl shadow-worknitive/20 hover:-translate-y-1"
              >
                Ücretsiz Deneyin
              </button>
              <button className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                Ürün Videosunu İzle
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-worknitive/20 to-blue-500/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
