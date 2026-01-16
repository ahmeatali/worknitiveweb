
import React from 'react';

export const DashboardMockup: React.FC = () => {
  return (
    <div className="relative bg-white rounded-[2.5rem] shadow-[0_48px_96px_-12px_rgba(106,13,173,0.2)] border border-slate-200 overflow-hidden w-full aspect-[4/3] flex">
      {/* Real-style Sidebar */}
      <div className="w-12 md:w-44 bg-[#f8fafc] border-r border-slate-200 p-4 hidden md:flex flex-col gap-6">
        <div className="text-worknitive font-black text-xs italic mb-4">WORKNITIVE</div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`h-8 w-full rounded-xl flex items-center gap-3 px-2 ${i === 0 ? 'bg-worknitive text-white' : ''}`}>
            <div className={`w-4 h-4 rounded-full ${i === 0 ? 'bg-white/20' : 'bg-slate-200'}`}></div>
            <div className={`h-2 w-16 rounded ${i === 0 ? 'bg-white/40' : 'bg-slate-200'}`}></div>
          </div>
        ))}
      </div>
      
      {/* Real-style Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Real-style Purple Topbar */}
        <div className="h-12 bg-worknitive flex items-center justify-end px-4">
          <div className="w-16 h-5 bg-white/10 rounded-md"></div>
        </div>

        <div className="p-6 space-y-6 bg-slate-50 flex-1">
          {/* User Profile Card */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-worknitive/20"></div>
            <div>
              <div className="h-3 w-32 bg-slate-900/10 rounded mb-2"></div>
              <div className="h-2 w-20 bg-slate-400/10 rounded"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-3xl border border-slate-100">
              <div className="text-[10px] text-slate-400 font-black uppercase mb-2">İzin Onayları</div>
              <div className="text-3xl font-black text-worknitive">2</div>
            </div>
            <div className="bg-white p-5 rounded-3xl border border-slate-100 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-[10px] border-slate-100 border-t-rose-400"></div>
            </div>
          </div>

          <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-5 overflow-hidden">
            <div className="flex justify-between mb-4">
              <div className="h-3 w-20 bg-slate-100 rounded"></div>
              <div className="h-3 w-10 bg-slate-100 rounded"></div>
            </div>
            <div className="space-y-3">
               {[100, 100, 100].map((w, i) => (
                 <div key={i} className="flex items-center gap-4 border-b border-slate-50 pb-2">
                   <div className="w-6 h-6 rounded-full bg-slate-50"></div>
                   <div className="h-2 w-24 bg-slate-100 rounded"></div>
                   <div className="h-2 w-12 bg-worknitive/20 rounded ml-auto"></div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glossy Overlay for Premium Look */}
      <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 rounded-[2.5rem]"></div>
    </div>
  );
};
