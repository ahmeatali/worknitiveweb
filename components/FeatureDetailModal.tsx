
import React from 'react';
import { Feature } from './FeatureGrid';

interface FeatureDetailModalProps {
  feature: Feature;
  onClose: () => void;
}

export const FeatureDetailModal: React.FC<FeatureDetailModalProps> = ({ feature, onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity animate-fadeIn" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-[3rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-scaleIn">
        {/* Header Decor */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-worknitive to-blue-500"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-20 h-20 bg-worknitive/10 rounded-3xl flex items-center justify-center text-worknitive shrink-0">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
              </svg>
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{feature.title}</h3>
              <div className="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-4">
                Canlı Kullanımda
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Genel Bakış</h4>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {feature.longDesc}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Öne Çıkan Özellikler</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-bold bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-worknitive text-white flex items-center justify-center text-xs shrink-0">
                      ✓
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onClose}
                className="flex-1 py-5 bg-worknitive text-white rounded-2xl font-black text-lg hover:bg-worknitive-dark transition-all shadow-xl shadow-worknitive/20"
              >
                Hemen Ücretsiz Deneyin
              </button>
              <button 
                onClick={onClose}
                className="px-8 py-5 bg-slate-100 text-slate-900 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
