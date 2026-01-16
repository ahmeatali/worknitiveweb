
import React from 'react';
import { Logo } from './Logo';

export const DashboardMock: React.FC = () => {
  return (
    <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex aspect-video lg:aspect-auto lg:h-[500px]">
      {/* Sidebar */}
      <div className="w-16 md:w-56 bg-slate-900 flex flex-col p-4 shrink-0">
        <div className="mb-8 overflow-hidden">
          {/* Dashboard sidebarda logoyu biraz küçültüp sadece icon kısmına odaklanabiliriz 
              veya direkt logoyu orantılı gösteririz */}
          <Logo className="h-6" variant="light" />
        </div>
        <div className="space-y-4">
          {[
            { n: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z' },
            { n: 'Harcamalar', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
            { n: 'PDKS', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
            { n: 'İzinler', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
            { n: 'Puantaj', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            { n: 'Raporlar', icon: 'M16 8v8m-4-5v5m-4-2v2' },
          ].map((item, idx) => (
            <div key={idx} className={`flex items-center gap-3 p-2 rounded ${idx === 0 ? 'bg-white/10 text-white' : 'text-slate-400'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="hidden md:block text-sm font-medium">{item.n}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="text-xs font-semibold bg-slate-100 px-2 py-1 rounded">Manolya Ltd.</div>
            <div className="hidden sm:block text-slate-400 text-xs">Genel Bakış</div>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-slate-100"></div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { l: 'Bekleyen Onaylar', v: '12', c: 'text-amber-600' },
              { l: 'Bu Ay Harcama', v: '₺42.500', c: 'text-worknitive' },
              { l: 'İzinli Sayısı', v: '4', c: 'text-blue-600' },
              { l: 'PDKS Özet', v: '%98', c: 'text-green-600' },
            ].map((card, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{card.l}</div>
                <div className={`text-lg font-bold ${card.c}`}>{card.v}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-bold text-slate-700">Harcama Dağılımı</div>
                <div className="text-[10px] text-slate-400">Son 30 Gün</div>
              </div>
              <div className="flex items-end gap-2 h-24 pt-2">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <div key={i} className="flex-1 bg-purple-100 rounded-t-sm relative group">
                    <div style={{ height: `${h}%` }} className="bg-worknitive w-full rounded-t-sm group-hover:bg-purple-800 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-bold text-slate-700">Son Aktiviteler</div>
              </div>
              <div className="space-y-3">
                {[
                  { u: 'Ahmet Y.', a: 'Yeni Fiş Yükledi', t: '12:45' },
                  { u: 'Ayşe K.', a: 'İzin Talebi Onaylandı', t: '10:30' },
                  { u: 'Sistem', a: 'Puantaj Hazır', t: '09:15' },
                ].map((act, i) => (
                  <div key={i} className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-50 last:border-0">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-100"></div>
                      <div>
                        <span className="font-bold">{act.u}</span>
                        <span className="text-slate-500 ml-1">{act.a}</span>
                      </div>
                    </div>
                    <div className="text-slate-400 italic">{act.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
