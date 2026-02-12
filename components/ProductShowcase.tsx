
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
            {/* Real App UI Container */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden flex aspect-video shadow-inner min-h-[600px] border border-slate-200">
              {/* Sidebar Mock */}
              <div className="w-20 md:w-64 bg-[#f8fafc] border-r border-slate-200 flex flex-col p-4 md:p-6">
                <div className="mb-12 px-2">
                  <Logo className="h-6 md:h-7" />
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

                <div className="p-4 md:p-10 overflow-y-auto">
                  {activeModule === 'Anasayfa' && (
                    <div className="space-y-8 animate-fadeIn">
                      <div className="bg-white px-10 py-10 rounded-[2.5rem] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center gap-8 max-w-2xl">
                        <div className="w-32 h-32 rounded-full border-[1.5px] border-slate-100 p-1 shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop&facepad=2" 
                            alt="Ahmet Ali Yılmaz" 
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-[32px] font-extrabold text-[#1e293b] tracking-tight leading-none">
                            Ahmet Ali Yılmaz
                          </h4>
                          <div className="text-[#94a3b8] text-xl font-medium tracking-tight">
                            Ünvan: CPO | Yönetici: -
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                          <div className="text-[#1e293b] font-black mb-6 uppercase text-sm tracking-widest">Bekleyen İzin Onayları</div>
                          <div className="text-7xl font-black text-worknitive">2</div>
                          <div className="text-slate-400 text-sm mt-4 font-medium">Onayınızı bekleyen toplam talep sayısı.</div>
                        </div>
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center">
                           <div className="text-[#1e293b] font-black mb-6 uppercase text-sm tracking-widest w-full">Cinsiyet Dağılımı</div>
                           <div className="relative w-32 h-32 flex items-center justify-center">
                              <div className="absolute inset-0 rounded-full border-[24px] border-[#60a5fa] border-t-[#fb7185] border-r-[#fbbf24]"></div>
                              <div className="text-[10px] font-black text-slate-400 uppercase">Veri</div>
                           </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeModule === 'İzinler' && (
                    <div className="animate-fadeIn bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                      <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                        <h4 className="font-black text-[#1e293b] text-xl uppercase tracking-tight">İzinlerim</h4>
                        <button className="bg-worknitive text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-worknitive/20">İzin Ekle</button>
                      </div>
                      <table className="w-full text-left">
                        <thead className="bg-worknitive text-white text-sm">
                          <tr>
                            <th className="p-5 font-bold">Başlangıç</th>
                            <th className="p-5 font-bold">Bitiş</th>
                            <th className="p-5 font-bold">Tür</th>
                            <th className="p-5 font-bold">Durum</th>
                            <th className="p-5 font-bold text-center">İşlem</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium">
                          {[
                            { s: '13.01.2026', e: '15.01.2026', t: 'Yıllık İzin', st: 'Bekliyor', c: 'bg-yellow-100 text-yellow-700' },
                            { s: '24.12.2025', e: '26.12.2025', t: 'Yıllık İzin', st: 'Onaylandı', c: 'bg-green-100 text-green-700' },
                            { s: '12.12.2025', e: '14.12.2025', t: 'Evlilik İzni', st: 'Onaylandı', c: 'bg-green-100 text-green-700' },
                            { s: '06.05.2025', e: '10.05.2025', t: 'Babalık İzni', st: 'Reddedildi', c: 'bg-red-100 text-red-700' },
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition-colors">
                              <td className="p-5 text-slate-600">{row.s}</td>
                              <td className="p-5 text-slate-600">{row.e}</td>
                              <td className="p-5 text-slate-900 font-bold">{row.t}</td>
                              <td className="p-5">
                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tight ${row.c}`}>
                                  {row.st}
                                </span>
                              </td>
                              <td className="p-5 text-center">
                                {row.st === 'Bekliyor' ? (
                                  <button className="text-red-500 font-black text-xs hover:underline bg-red-50 px-3 py-1.5 rounded-lg">SİL</button>
                                ) : (
                                  <span className="text-slate-300">—</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeModule === 'Harcamalar' && (
                    <div className="animate-fadeIn bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                      <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-[#fbfcfd]">
                        <h4 className="font-black text-[#1e293b] text-xl uppercase tracking-tight">Harcamalarım</h4>
                        <button className="bg-worknitive text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-worknitive/20">Harcama Ekle</button>
                      </div>
                      <table className="w-full text-left text-sm">
                        <thead className="bg-worknitive text-white">
                          <tr>
                            <th className="p-5 font-bold">Fatura Tarihi</th>
                            <th className="p-5 font-bold">Harcama Türü</th>
                            <th className="p-5 font-bold">Tutar</th>
                            <th className="p-5 font-bold">Açıklama</th>
                            <th className="p-5 font-bold text-center">İşlem</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-bold">
                          {[
                            { d: '31.10.2025', t: 'Product Test', a: '315.00 TL', desc: '-' },
                            { d: '31.10.2025', t: 'Product Test', a: '1.000.00 TL', desc: '123' },
                            { d: '13.11.2025', t: 'Product Test', a: '10.000.00 TL', desc: '-' },
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition-colors">
                              <td className="p-5 text-slate-500">{row.d}</td>
                              <td className="p-5 text-[#1e293b]">{row.t}</td>
                              <td className="p-5 text-worknitive text-base">{row.a}</td>
                              <td className="p-5 text-slate-400 font-medium italic">{row.desc}</td>
                              <td className="p-5 text-center"><button className="bg-rose-500 text-white px-4 py-1.5 rounded-lg text-xs font-black">SİL</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeModule === 'Yoklama' && (
                    <div className="animate-fadeIn space-y-8">
                      <div className="flex gap-4">
                        <div className="bg-white px-6 py-3 rounded-2xl border-2 border-worknitive text-worknitive text-sm font-black">Yoklama</div>
                        <div className="bg-slate-100 px-6 py-3 rounded-2xl text-sm font-bold opacity-50 cursor-not-allowed">Vardiya Yönetimi</div>
                      </div>
                      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 flex flex-wrap gap-6 items-center">
                         <div className="bg-slate-50 px-5 py-3 rounded-xl text-xs font-black text-slate-600 border border-slate-100">GÜNLÜK ▼</div>
                         <div className="bg-slate-50 px-5 py-3 rounded-xl text-xs font-black text-slate-600 border border-slate-100">13.01.2026 ✕</div>
                         <button className="bg-worknitive text-white px-8 py-3 rounded-xl font-black text-sm ml-auto">DIŞA AKTAR</button>
                      </div>
                      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                         <table className="w-full text-left text-sm">
                            <thead className="bg-worknitive text-white font-bold">
                               <tr>
                                  <th className="p-5">Çalışan</th>
                                  <th className="p-5">Devam Durumu</th>
                                  <th className="p-5">Giriş Saati</th>
                                  <th className="p-5">Çıkış Saati</th>
                               </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 font-bold">
                               {['Ahmet Ali Yılmaz', 'Ali Yılmaz', 'Enes Faruk Berber'].map((name, i) => (
                                 <tr key={i} className="hover:bg-slate-50">
                                    <td className="p-5 flex items-center gap-4">
                                       <div className="w-10 h-10 rounded-full bg-worknitive/5 flex items-center justify-center text-xs text-worknitive font-black">AY</div>
                                       {name}
                                    </td>
                                    <td className="p-5"><div className="border border-slate-200 px-4 py-2 rounded-xl text-xs">Geldi ▼</div></td>
                                    <td className="p-5"><div className="border border-slate-200 px-4 py-2 rounded-xl text-xs">09:00 🕒</div></td>
                                    <td className="p-5"><div className="border border-slate-200 px-4 py-2 rounded-xl text-xs">18:00 🕒</div></td>
                                 </tr>
                               ))}
                            </tbody>
                         </table>
                      </div>
                    </div>
                  )}

                  {activeModule === 'Raporlar' && (
                    <div className="animate-fadeIn space-y-8">
                       <div className="flex justify-between items-center">
                          <h4 className="text-2xl font-black text-[#1e293b]">Raporlarım</h4>
                          <button className="bg-worknitive text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-worknitive/30 hover:-translate-y-1 transition-transform">Rapor Oluştur</button>
                       </div>
                       <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-50">
                          <div className="flex justify-between items-center mb-10">
                             <div className="text-worknitive font-black text-xl tracking-tight">Rapor Önizleme</div>
                             <button className="bg-worknitive text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest">Dışa Aktar</button>
                          </div>
                          <div className="flex gap-3 flex-wrap mb-10">
                             {['Ad Soyad', 'Cinsiyet', 'Şirket', 'Şube', 'Departman', 'Kalan İzin'].map(tag => (
                               <span key={tag} className="bg-slate-100 text-[#1e293b] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider">{tag}</span>
                             ))}
                          </div>
                          <div className="border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
                             <table className="w-full text-xs">
                                <thead className="bg-worknitive text-white">
                                   <tr>
                                      <th className="p-5 text-left font-bold">Ad Soyad</th>
                                      <th className="p-5 text-left font-bold">Şirket</th>
                                      <th className="p-5 text-left font-bold">Departman</th>
                                      <th className="p-5 text-center font-bold">Kalan İzin</th>
                                   </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-slate-700 font-bold">
                                   {[
                                     {n: 'Yalcin Yusa', d: 'IT', k: '0'},
                                     {n: 'Vuslat Tunç', d: 'HR', k: '7'},
                                     {n: 'Hazal Gelenbey', d: 'Marketing', k: '12'},
                                     {n: 'Enes Faruk Berber', d: 'Sales', k: '4'}
                                   ].map((row, i) => (
                                     <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-5">{row.n}</td>
                                        <td className="p-5 text-slate-400">Worknitive</td>
                                        <td className="p-5 text-worknitive">{row.d}</td>
                                        <td className="p-5 text-center font-black">{row.k} Gün</td>
                                     </tr>
                                   ))}
                                </tbody>
                             </table>
                          </div>
                       </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
