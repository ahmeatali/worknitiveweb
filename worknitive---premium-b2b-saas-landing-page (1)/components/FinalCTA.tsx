
import React from 'react';

interface FinalCTAProps {
  onDemoClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onDemoClick }) => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#4c1d95] via-[#6a0dad] to-[#8b5cf6] p-12 md:p-24 text-center shadow-[0_20px_50px_rgba(106,13,173,0.3)]">
          {/* Arka plan dekoratif elementler */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-black/20 blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight uppercase">
              İK ve Harcama Süreçlerinizi <br className="hidden md:block" />
              Bugün Modernize Edin.
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              Worknitive ile tanışmak için 15 dakikalık bir keşif görüşmesi planlayın, ekibinizin verimliliğini hemen artırın.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={onDemoClick}
                className="w-full sm:w-auto bg-white text-[#6a0dad] px-10 py-5 rounded-2xl text-xl font-black hover:bg-slate-50 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-95"
              >
                Ücretsiz Demo Talep Et
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-white/10 transition-all active:scale-95">
                Satış Ekibiyle Görüş
              </button>
            </div>
            
            <p className="mt-10 text-white/40 text-sm font-bold uppercase tracking-widest">
              Kurulum gerektirmez, hemen bulut üzerinden başlayın.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
