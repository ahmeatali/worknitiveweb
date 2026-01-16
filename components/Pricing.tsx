
import React from 'react';

interface PricingProps {
  onDemoClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onDemoClick }) => {
  const plans = [
    {
      name: 'Başlangıç',
      price: '$199',
      desc: 'Küçük ekipler için temel özellikler.',
      features: ['25 Çalışana Kadar', 'AI Harcama (50 Fiş)', 'Temel İzin Takibi', 'Puantaj Çıktısı', 'Email Desteği']
    },
    {
      name: 'Büyüme',
      price: '$499',
      desc: 'Orta ölçekli şirketler için tam kontrol.',
      isPopular: true,
      features: ['100 Çalışana Kadar', 'Sınırsız AI Harcama', 'PDKS & Vardiya', 'Logo/Mikro Entegrasyonu', 'Öncelikli Destek']
    },
    {
      name: 'Kurumsal',
      price: 'Özel',
      desc: 'Büyük ölçekli yapılar için esnek çözümler.',
      features: ['Sınırsız Çalışan', 'Özel Entegrasyonlar', 'SLA Garantisi', 'Dedicated Müşteri Temsilcisi', 'On-Premise Opsiyonu']
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Size Uygun Planı Seçin</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Fiyatlandırma çalışan sayısı ve seçilen modüllere göre değişir. Şeffaf ve adil bir yapı sunuyoruz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl border ${p.isPopular ? 'border-worknitive shadow-2xl scale-105 z-10' : 'border-slate-100'} bg-white flex flex-col`}
            >
              {p.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-worknitive text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  En Popüler
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">{p.price}</span>
                  {p.price !== 'Özel' && <span className="text-slate-400 text-sm">/ ay</span>}
                </div>
                <p className="text-slate-500 text-sm mt-4">{p.desc}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button 
                onClick={onDemoClick}
                className={`w-full py-4 rounded-xl font-bold transition-all ${p.isPopular ? 'bg-worknitive text-white hover:bg-purple-800 shadow-lg shadow-purple-200' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}
              >
                {p.price === 'Özel' ? 'Satışla Görüş' : 'Demo Talep Et'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
