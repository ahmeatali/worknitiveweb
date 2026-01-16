
import React from 'react';

export const ProblemSolution: React.FC = () => {
  const points = [
    {
      problem: "Manuel Harcama Süreçleri",
      solution: "AI destekli OCR ile saniyeler içinde fiş girişi.",
      icon: "⚡"
    },
    {
      problem: "Dağınık Zaman/İzin Verisi",
      solution: "Tek platformda entegre PDKS ve İzin yönetimi.",
      icon: "🧩"
    },
    {
      problem: "Muhasebe Aktarım Hataları",
      solution: "Doğrudan Logo, Mikro, LUCA entegrasyonu.",
      icon: "🔄"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Eski Yöntemleri Geride Bırakın</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">İK operasyonlarını verimsiz kılan manuel süreçleri akıllı otomasyonla değiştiriyoruz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-purple-100 hover:shadow-xl transition-all">
              <div className="text-4xl mb-6">{point.icon}</div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Problem</div>
                  <h3 className="text-lg font-bold text-slate-900 line-through decoration-red-300">{point.problem}</h3>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs font-bold text-worknitive uppercase tracking-wider mb-1">Worknitive Çözümü</div>
                  <p className="text-slate-700 font-medium italic">"{point.solution}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
