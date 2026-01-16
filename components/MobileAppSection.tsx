
import React from 'react';

export const MobileAppSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-worknitive/10 text-worknitive text-sm font-black mb-8 uppercase tracking-widest">
              Worknitive Mobile
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight uppercase">
              İK Süreçleri <br />
              <span className="text-worknitive">Cebinizde.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Sadece masa başında değil, sahada ve yolda da tam kontrol. Çalışanlarınız saniyeler içinde izin isteyebilir, yöneticileriniz tek tıkla onaylayabilir.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { t: 'Hızlı Harcama Girişi', d: 'Kamerayı aç, fişi çek, AI otomatik işlesin.' },
                { t: 'Anlık Bildirimler', d: 'Onaylanan izinler ve harcamalar anında cebinizde.' },
                { t: 'Konum Bazlı Yoklama', d: 'Ofise veya sahaya vardığınızda tek tıkla giriş yapın.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 text-left group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-worknitive shrink-0 group-hover:bg-worknitive group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.t}</h4>
                    <p className="text-sm text-slate-400 font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-black transition-all shadow-xl active:scale-95">
                <div className="text-2xl"></div>
                <div className="text-left">
                  <div className="text-[10px] opacity-50 font-bold uppercase leading-none">Download on the</div>
                  <div className="text-sm font-black">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-black transition-all shadow-xl active:scale-95">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-[10px]">▶</div>
                <div className="text-left">
                  <div className="text-[10px] opacity-50 font-bold uppercase leading-none">Get it on</div>
                  <div className="text-sm font-black">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Mockup - Matching user screenshots */}
          <div className="flex-1 relative flex justify-center order-1 lg:order-2">
            <div className="absolute -inset-10 bg-worknitive/10 rounded-full blur-[100px] -z-10"></div>
            
            {/* Phone Frame */}
            <div className="w-[340px] h-[680px] bg-[#1e293b] rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-slate-800 relative">
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col relative">
                
                {/* Purple Header Bar (Matching Screenshot) */}
                <div className="h-14 bg-worknitive flex items-center justify-between px-6 shrink-0">
                  <button className="text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <div className="bg-white/10 px-3 py-1.5 rounded-lg text-white text-[10px] font-black flex items-center gap-2">
                    Tümü <span className="text-[8px] opacity-50">▼</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                  
                  {/* Profile Card (Matching Screenshot) */}
                  <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 text-center flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border-[1.5px] border-slate-100 p-1 mb-4">
                       <img 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop&facepad=2" 
                          alt="Profile" 
                          className="w-full h-full object-cover rounded-full shadow-lg"
                       />
                    </div>
                    <h3 className="text-lg font-black text-[#1e293b] mb-4">Ahmet Ali Yılmaz</h3>
                    <div className="space-y-1 text-sm font-medium text-slate-500 mb-6">
                      <div>Yönetici: -</div>
                      <div>Ünvan: CPO</div>
                    </div>
                    <div className="text-[11px] text-slate-400 font-bold border-t border-slate-50 pt-4 w-full">
                      İşe başlangıç Tarihi: 01.07.2024
                    </div>
                  </div>

                  {/* Weekly Leave Section (Matching Screenshot) */}
                  <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
                    <h4 className="text-base font-black text-[#1e293b] mb-4">Haftalık İzin Günleri</h4>
                    <div className="space-y-1 text-sm font-medium text-slate-600">
                      <div>14 Ocak 2026</div>
                      <div>18 Ocak 2026</div>
                    </div>
                  </div>

                  {/* Leaves List (Matching Screenshot) */}
                  <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
                    <h4 className="text-base font-black text-[#1e293b] mb-4">İzinler</h4>
                    <div className="flex items-center justify-between group">
                      <div className="space-y-0.5">
                        <div className="text-sm font-bold text-slate-900">Enes Faruk</div>
                        <div className="text-xs font-medium text-slate-400">Berber</div>
                      </div>
                      <div className="text-[11px] font-bold text-slate-600">
                        19 Ocak<br/>2026
                      </div>
                      <div className="text-xs font-black text-slate-400">9 gün</div>
                    </div>
                  </div>

                  {/* Pie Chart Section (Matching Screenshot) */}
                  <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
                    <h4 className="text-base font-black text-[#1e293b] mb-6">Cinsiyet Dağılımı</h4>
                    <div className="relative aspect-square w-full max-w-[180px] mx-auto flex items-center justify-center">
                       {/* SVG Pie Chart Mock */}
                       <svg viewBox="0 0 100 100" className="transform -rotate-90">
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="0" />
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#fbbf24" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="120" />
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ef4444" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="210" />
                       </svg>
                    </div>
                    {/* Legend */}
                    <div className="flex flex-wrap gap-3 mt-6 justify-center">
                      {[
                        { l: 'Kadın', c: 'bg-rose-500' },
                        { l: 'Belirtilmemiş', c: 'bg-amber-400' },
                        { l: 'Erkek', c: 'bg-blue-500' }
                      ].map((tag, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                           <div className={`w-3 h-1.5 rounded-full ${tag.c}`}></div>
                           <span className="text-[9px] font-black text-slate-400 uppercase tracking-tight">{tag.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="h-1 w-20 bg-slate-200 rounded-full mx-auto mb-2 shrink-0"></div>
              </div>

              {/* Volume Buttons / Power Button Decor */}
              <div className="absolute left-[-12px] top-32 w-1 h-16 bg-slate-800 rounded-l-lg border-r border-slate-700"></div>
              <div className="absolute left-[-12px] top-52 w-1 h-12 bg-slate-800 rounded-l-lg border-r border-slate-700"></div>
              <div className="absolute right-[-12px] top-40 w-1 h-20 bg-slate-800 rounded-r-lg border-l border-slate-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
