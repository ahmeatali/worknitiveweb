
import React from 'react';

export const Integrations: React.FC = () => {
  const brands = ['Logo', 'Mikro', 'LUCA', 'Paraşüt', 'SAP (Planlanan)', 'Slack'];

  return (
    <section id="integrations" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Muhasebe ve İş Araçlarınızla Uyumlu</h2>
            <p className="text-slate-400 text-lg mb-8">
              Verilerinizi manuel taşımaya son verin. Worknitive, Türkiye'nin en yaygın kullanılan muhasebe yazılımları ve iş platformları ile entegre çalışacak şekilde tasarlanmıştır.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">✓</div>
                <span>Tek tıkla Excel/CSV export</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">✓</div>
                <span>Modern REST API mimarisi</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">✓</div>
                <span>Özel entegrasyon çözümleri</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">
              * Belirtilen logolar desteklenen veya yol haritasında planlanan entegrasyon seçeneklerini ifade eder.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {brands.map((b, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                 <div className="w-12 h-12 bg-white/10 rounded-full mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                 </div>
                 <span className="font-bold text-sm tracking-wide">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
