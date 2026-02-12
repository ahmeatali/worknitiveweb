
import React, { useState } from 'react';
import { Logo } from './Logo';

type ModuleType = 'Anasayfa' | 'Harcamalar' | 'İzinler' | 'Yoklama' | 'Raporlar';

export const ProductShowcase: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>('Anasayfa');

  const modules: { id: ModuleType; label: string; icon: string }[] = [
    { id: 'Anasayfa', label: 'Anasayfa', icon: '🏠' },
    { id: 'İzinler', label: 'İzinler', icon: '📅' },
    { id: 'Harcamalar', label: 'Harcamalar', icon: '💳' },
    { id: 'Yoklama', label: 'Yoklama', icon: '📍' },
    { id: 'Raporlar', label: 'Raporlar', icon: '📊' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            Gerçek <span className="text-worknitive">Kullanıcı Deneyimi</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Karmaşık Excel dosyalarını bırakın. Worknitive'in modern ve sade arayüzü ile tanışın.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-3 border-2 ${
                activeModule === m.id
                  ? 'bg-worknitive border-worknitive text-white shadow-xl shadow-worknitive/20'
                  : 'bg-white border-slate-100 text-slate-500 hover:border-worknitive/30'
              }`}
            >
              <span>{m.icon}</span>
              {m.label}
            </button>
          ))}
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="bg-slate-100 rounded-[3rem] p-4 md:p-8 shadow-2xl border border-slate-200">
            <div className="bg-white rounded-[2.5rem] overflow-hidden flex aspect-video shadow-inner min-h-[600px] border border-slate-200">
              {/* Sidebar Mock */}
              <div className="w-20 md:w-64 bg-[#f8fafc] border-r border-slate-200 flex flex-col p-4 md:p-6">
                <div className="mb-12 px-2">
                  {/* Sadece logo.svg dosyasını basan bileşen */}
                  <Logo className="h-7 md:h-8" />
                </div>
                <div className="space-y-4">
                  {modules.map((m) => (
                    <div
                      key={m.id}
                      className={`flex items-center gap-4 p-4 rounded-full font-extrabold text-[15px] transition-all cursor-pointer group ${
                        activeModule === m.id 
                          ? 'bg-worknitive text-white shadow-lg shadow-worknitive/20' 
                          : 'text-slate-400 hover:bg-slate-100'
                      }`}
                      onClick={() => setActiveModule(m.id)}
                    >
                      <span className="text-xl shrink-0 leading-none">{m.icon}</span>
                      <span className="hidden md:block tracking-tight">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content Mock */}
              <div className="flex-1 flex flex-col bg-[#fbfcfd]">
                <div className="h-16 bg-worknitive flex items-center justify-end px-6">
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-white text-xs font-bold flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-colors">
                    Tümü <span className="opacity-50 text-[10px]">▼</span>
                  </div>
                </div>

                <div className="p-4 md:p-10 overflow-y-auto text-slate-800">
                   {/* Buradaki içerikler statik mockup verileridir */}
                   <p className="font-bold opacity-50 uppercase text-[10px] tracking-widest mb-4">Seçili Modül: {activeModule}</p>
                   <div className="w-20 h-1 bg-worknitive/20 rounded mb-8"></div>
                   
                   {/* Aktif modüle göre detaylı içerik render edilir... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
