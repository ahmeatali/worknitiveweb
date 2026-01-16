
import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      n: '01',
      t: 'Kuralları Tanımlayın',
      d: 'Harcama politikaları, onay akışları, vardiya kuralları ve izin bakiyelerini sistemde bir kez kurgulayın.'
    },
    {
      n: '02',
      t: 'Çalışanlar İşlemleri Yapar',
      d: 'Mobil veya web üzerinden fişini yükleyen, iznini isteyen veya giriş-çıkışını yapan çalışanlar süreci başlatır.'
    },
    {
      n: '03',
      t: 'Sistem Otomatikleştirir',
      d: 'AI harcamayı kontrol eder, yöneticiye onaya sunar, puantajı oluşturur ve muhasebe çıktısını hazırlar.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Nasıl Çalışır?</h2>
          <p className="text-slate-600">Karmaşık süreçleri 3 basit adımda otomatize ediyoruz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-slate-100 -z-10"></div>
          {steps.map((s, i) => (
            <div key={i} className="space-y-6">
              <div className="w-16 h-16 bg-worknitive text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-200">
                {s.n}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.t}</h3>
                <p className="text-slate-600 leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
