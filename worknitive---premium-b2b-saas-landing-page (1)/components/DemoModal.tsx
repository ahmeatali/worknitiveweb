
import React, { useState } from 'react';

export const DemoModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [done, setDone] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-[2.5rem] p-10 max-w-lg w-full shadow-2xl animate-scaleIn">
        {done ? (
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Harika!</h3>
            <p className="text-slate-500 mb-8">Uzman ekibimiz 24 saat içinde sizinle iletişime geçecektir.</p>
            <button onClick={onClose} className="w-full py-4 bg-worknitive text-white rounded-2xl font-bold">Kapat</button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Ücretsiz Demo</h2>
            <p className="text-slate-500 mb-8 font-medium">Worknitive'in şirketinize nasıl tasarruf ettireceğini keşfedin.</p>
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4">
              <input required placeholder="Adınız Soyadınız" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-worknitive outline-none transition-colors" />
              <input required type="email" placeholder="İş E-postanız" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-worknitive outline-none transition-colors" />
              <input required placeholder="Şirket Adı" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-worknitive outline-none transition-colors" />
              <button type="submit" className="w-full py-5 bg-worknitive text-white rounded-2xl font-bold text-lg hover:bg-worknitive-dark transition-all shadow-xl shadow-worknitive/20 mt-4">Randevu Planla</button>
              <p className="text-[10px] text-center text-slate-400">Verileriniz KVKK kapsamında korunmaktadır.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
