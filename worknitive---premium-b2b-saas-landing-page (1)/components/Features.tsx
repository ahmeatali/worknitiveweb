
import React from 'react';

export const Features: React.FC = () => {
  const list = [
    { t: 'AI Harcama', d: 'Fişleri saniyeler içinde okuyan gelişmiş OCR teknolojisi.', i: '⚡' },
    { t: 'PDKS 2.0', d: 'GPS onaylı giriş-çıkış ve tam otomatik mesai hesaplama.', i: '📍' },
    { t: 'İzin Hub', d: 'Bakiyeler, onaylar ve hakedişler tek bir akışta.', i: '📅' },
    { t: 'Akıllı Puantaj', d: 'Hataları sıfıra indiren bordro öncesi otomatik hazırlık.', i: '📊' },
    { t: 'Logo Entegre', d: 'Türkiye’nin en büyük muhasebe araçlarıyla tam uyum.', i: '🔄' },
    { t: 'Derin Analiz', d: 'Şirketinizin nabzını tutan görsel raporlar.', i: '📈' }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {list.map((item, i) => (
        <div key={i} className="group p-10 bg-white rounded-4xl border border-slate-100 hover:border-worknitive/30 transition-all duration-500 hover:shadow-[0_20px_40px_-20px_rgba(106,13,173,0.15)] hover:-translate-y-1">
          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-worknitive/10 transition-colors">
            {item.i}
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-4">{item.t}</h4>
          <p className="text-slate-500 leading-relaxed mb-6">{item.d}</p>
          <a href="#" className="text-xs font-bold text-worknitive uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Detayları Gör <span>→</span>
          </a>
        </div>
      ))}
    </div>
  );
};
