
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

  const renderModuleContent = () => {
    switch (activeModule) {
      case 'Anasayfa':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                <div className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Bekleyen Onaylar</div>
                <div className="text-3xl font-black text-worknitive">12</div>
                <div className="mt-2 text-[10px] text-emerald-500 font-bold">↑ %12 geçen haftadan</div>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                <div className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Aktif Çalışan</div>
                <div className="text-3xl font-black text-slate-900">148</div>
                <div className="mt-2 text-[10px] text-slate-400 font-bold">5 yeni katılım</div>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                <div className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Aylık Harcama</div>
                <div className="text-3xl font-black text-blue-600">₺84.2K</div>
                <div className="mt-2 text-[10px] text-rose-500 font-bold">↓ %4 bütçe tasarrufu</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <h4 className="font-black text-slate-900 mb-4 text-sm uppercase tracking-tight">Son Aktiviteler</h4>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center gap-4 py-2 border-b border-slate-50 last:border-0">
                    <div className="w-10 h-10 rounded-full bg-slate-100 shrink-0 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-slate-800">Caner Yıldırım <span className="font-medium text-slate-400">izin talebinde bulundu.</span></div>
                      <div className="text-[10px] text-slate-400 font-bold">2 saat önce • Yıllık İzin</div>
                    </div>
                    <button className="text-[10px] font-black text-worknitive uppercase tracking-widest hover:underline">İncele</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Harcamalar':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">Masraf Listesi</h4>
              <button className="bg-worknitive text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-worknitive/20">+ Yeni Harcama</button>
            </div>
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Fiş/Fatura</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Kategori</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tutar</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Durum</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { t: 'Yemek / Müşteri Toplantısı', c: 'Temsil & Ağırlama', a: '₺1,450.00', s: 'AI Onaylı', sc: 'bg-emerald-50 text-emerald-600' },
                    { t: 'Taksi / Ofis-Havalimanı', c: 'Ulaşım', a: '₺420.00', s: 'Bekliyor', sc: 'bg-amber-50 text-amber-600' },
                    { t: 'Otobüs Bileti', c: 'Seyahat', a: '₺850.00', s: 'AI Onaylı', sc: 'bg-emerald-50 text-emerald-600' },
                    { t: 'Ofis Kırtasiye', c: 'Genel Gider', a: '₺2,100.00', s: 'Onaylandı', sc: 'bg-blue-50 text-blue-600' },
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-800">{item.t}</td>
                      <td className="px-6 py-4 text-slate-500 font-medium">{item.c}</td>
                      <td className="px-6 py-4 font-black text-slate-900">{item.a}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${item.sc}`}>{item.s}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'İzinler':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100">
                <div className="text-[10px] font-black text-emerald-600 uppercase mb-1 tracking-widest">Kalan Yıllık İzin</div>
                <div className="text-4xl font-black text-emerald-700">14 <span className="text-sm font-medium">gün</span></div>
              </div>
              <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100">
                <div className="text-[10px] font-black text-blue-600 uppercase mb-1 tracking-widest">Kullanılan İzin</div>
                <div className="text-4xl font-black text-blue-700">6 <span className="text-sm font-medium">gün</span></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <h4 className="font-black text-slate-900 mb-6 text-sm uppercase tracking-tight">İzin Takvimi</h4>
              <div className="flex gap-2">
                {['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz'].map(day => (
                  <div key={day} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-[9px] font-black text-slate-300 uppercase">{day}</span>
                    <div className="w-full aspect-square bg-slate-50 rounded-xl flex items-center justify-center font-bold text-slate-400 text-xs border border-slate-100">
                      {Math.floor(Math.random() * 30) + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Yoklama':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-worknitive/5 flex flex-col items-center justify-center border-8 border-white shadow-xl mb-6 relative">
                 <div className="absolute inset-0 rounded-full border-4 border-worknitive border-t-transparent animate-spin duration-[3s]"></div>
                 <span className="text-2xl font-black text-slate-900">08:54</span>
                 <span className="text-[8px] font-black text-worknitive uppercase tracking-widest mt-1">Canlı Saat</span>
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">Giriş Yapmaya Hazır</h4>
              <p className="text-sm text-slate-400 font-medium mb-8 max-w-xs">Konumunuz doğrulandı: <span className="text-emerald-500 font-bold">Gebze Yerleşkesi</span></p>
              <button className="w-full py-4 bg-worknitive text-white rounded-2xl font-black text-lg shadow-xl shadow-worknitive/30 hover:bg-worknitive-dark transition-all active:scale-95">Mesaiyi Başlat</button>
            </div>
          </div>
        );
      case 'Raporlar':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <h4 className="font-black text-slate-900 mb-6 text-sm uppercase tracking-tight">Departman Bazlı Harcama Analizi</h4>
              <div className="space-y-5">
                {[
                  { l: 'Yazılım & IT', p: 75, c: 'bg-worknitive' },
                  { l: 'Pazarlama', p: 45, c: 'bg-blue-500' },
                  { l: 'Satış', p: 60, c: 'bg-emerald-500' },
                  { l: 'İnsan Kaynakları', p: 30, c: 'bg-amber-400' },
                ].map((bar, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                      <span className="text-slate-500">{bar.l}</span>
                      <span className="text-slate-900">% {bar.p}</span>
                    </div>
                    <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                      <div className={`h-full ${bar.c} rounded-full transition-all duration-1000`} style={{ width: `${bar.p}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-900 p-5 rounded-3xl text-white">
                  <div className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Yıllık Tasarruf</div>
                  <div className="text-2xl font-black text-emerald-400">₺142.500</div>
               </div>
               <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Hata Payı</div>
                  <div className="text-2xl font-black text-rose-500">-% 0.02</div>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            Gerçek <span className="text-worknitive">Kullanıcı Deneyimi</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Karmaşık Excel dosyalarını bırakın. Worknitive'in modern, hızlı ve sade arayüzü ile tanışın.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id)}
              className={`px-5 py-3 md:px-6 md:py-3 rounded-2xl font-bold text-xs md:text-sm transition-all flex items-center gap-2 md:gap-3 border-2 ${
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

        {/* Browser Mockup Wrapper */}
        <div className="relative mx-auto max-w-6xl">
          <div className="bg-slate-100 rounded-[3rem] p-3 md:p-6 shadow-2xl border border-slate-200">
            {/* Top Bar / Controls */}
            <div className="flex items-center gap-1.5 mb-4 px-4">
              <div className="w-3 h-3 rounded-full bg-rose-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              <div className="ml-4 h-6 w-full max-w-md bg-white/50 rounded-lg border border-slate-200/50"></div>
            </div>

            <div className="bg-white rounded-[2rem] overflow-hidden flex shadow-inner min-h-[640px] border border-slate-200 relative">
              {/* Sidebar Mock */}
              <div className="w-20 md:w-64 bg-[#f8fafc] border-r border-slate-200 flex flex-col p-4 md:p-6 shrink-0">
                <div className="mb-12 px-2">
                  <Logo className="h-6 md:h-8" />
                </div>
                <div className="space-y-2 md:space-y-4">
                  {modules.map((m) => (
                    <div
                      key={m.id}
                      className={`flex items-center gap-4 p-3 md:p-4 rounded-2xl font-extrabold text-[14px] transition-all cursor-pointer group ${
                        activeModule === m.id 
                          ? 'bg-worknitive text-white shadow-lg shadow-worknitive/20 scale-[1.02]' 
                          : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                      }`}
                      onClick={() => setActiveModule(m.id)}
                    >
                      <span className="text-xl shrink-0 leading-none">{m.icon}</span>
                      <span className="hidden md:block tracking-tight">{m.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto hidden md:block">
                   <div className="bg-slate-100 p-4 rounded-2xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-worknitive/20"></div>
                      <div className="flex-1 min-w-0">
                         <div className="text-[10px] font-black text-slate-900 truncate tracking-tight">Kullanıcı Paneli</div>
                         <div className="text-[9px] font-bold text-slate-400">Yönetici Modu</div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col bg-[#fbfcfd] min-w-0">
                {/* Internal Top Nav */}
                <div className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-6 shrink-0">
                  <div className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">{activeModule}</div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div className="bg-slate-900 px-3 py-1.5 rounded-lg text-white text-[10px] font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-slate-900/10">
                      Tümü <span className="opacity-50 text-[10px]">▼</span>
                    </div>
                  </div>
                </div>

                {/* Dynamic Content Scroll Area */}
                <div className="p-4 md:p-8 overflow-y-auto bg-slate-50/30 flex-1">
                   {renderModuleContent()}
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Decors around the mockup */}
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-worknitive/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
          <div className="absolute -left-12 top-20 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};
