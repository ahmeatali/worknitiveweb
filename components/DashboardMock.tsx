
import React from 'react';

export const DashboardMockup: React.FC = () => {
  return (
    <div className="relative bg-white rounded-[2rem] shadow-[0_40px_80px_-15px_rgba(106,13,173,0.15)] border border-slate-200 overflow-hidden w-full aspect-[16/11] flex max-w-[640px] mx-auto">
      {/* Sidebar */}
      <div className="w-14 md:w-40 bg-[#f8fafc] border-r border-slate-200 p-4 hidden md:flex flex-col gap-6">
        <div className="text-worknitive font-black text-[10px] italic mb-4 opacity-50 tracking-tighter">WORKNITIVE</div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`h-7 w-full rounded-lg flex items-center gap-3 px-2 ${i === 0 ? 'bg-worknitive text-white' : ''}`}>
            <div className={`w-3 h-3 rounded-full shrink-0 ${i === 0 ? 'bg-white/20' : 'bg-slate-200'}`}></div>
            <div className={`h-1.5 w-12 rounded ${i === 0 ? 'bg-white/40' : 'bg-slate-200'}`}></div>
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="h-10 bg-worknitive flex items-center justify-end px-4 shrink-0">
          <div className="w-12 h-4 bg-white/10 rounded-md"></div>
        </div>

        <div className="p-5 space-y-5 bg-slate-50 flex-1 overflow-hidden">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-worknitive/10 shrink-0"></div>
            <div className="flex-1">
              <div className="h-2.5 w-24 bg-slate-900/10 rounded mb-2"></div>
              <div className="h-2 w-16 bg-slate-400/10 rounded"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[9px] text-slate-400 font-black uppercase mb-1">Onay Bekleyen</div>
              <div className="text-2xl font-black text-worknitive">2</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-[6px] border-slate-100 border-t-rose-400 rotate-12"></div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-4 space-y-3">
             {[1, 2].map((_, i) => (
               <div key={i} className="flex items-center gap-3 border-b border-slate-50 pb-2 last:border-0">
                 <div className="w-5 h-5 rounded-full bg-slate-50 shrink-0"></div>
                 <div className="h-2 w-full bg-slate-50 rounded"></div>
                 <div className="h-2 w-10 bg-worknitive/10 rounded shrink-0"></div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};
