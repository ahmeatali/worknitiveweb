
import React from 'react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Deniz Aksu',
      role: 'Finans Sorumlusu',
      company: 'Manolya Pastaneleri',
      text: 'Worknitive ile harcama onay süreçlerimiz %40 hızlandı. Eskiden fişlerin muhasebeye ulaşması günler alırdı, şimdi anında sistemde.'
    },
    {
      name: 'Murat Erten',
      role: 'Operasyon Müdürü',
      company: 'Lojistik Pro A.Ş.',
      text: '3 farklı şubedeki personelin giriş-çıkışlarını takip etmek kabustu. PDKS modülü sayesinde her şey tek bir ekranda ve şeffaf.'
    },
    {
      name: 'Selin Yıldız',
      role: 'İK Yöneticisi',
      company: 'Tech Solutions',
      text: 'İzin bakiyelerini manuel hesaplamaktan kurtulduk. Puantaj modülü ay sonunda bize en az 2 gün zaman kazandırıyor.'
    },
    {
      name: 'Ahmet Mert',
      role: 'Genel Müdür',
      company: 'Mert İnşaat',
      text: 'Basit arayüzü sayesinde sahada çalışan ekibimiz bile zorlanmadan kullanıyor. Destek ekibi her sorumuzda yanımızdaydı.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-slate-600">Sektör liderleri Worknitive ile dijitalleşiyor.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 flex-1 leading-relaxed">"{r.text}"</p>
              <div>
                <div className="font-bold text-slate-900">{r.name}</div>
                <div className="text-xs text-slate-400 font-medium">{r.role} / {r.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-worknitive rounded-[2rem] p-10 md:p-14 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">%40</div>
              <div className="text-sm font-medium text-white/70">Onay Sürelerinde Azalma</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">%35</div>
              <div className="text-sm font-medium text-white/70">Daha Az Operasyonel Hata</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">24/7</div>
              <div className="text-sm font-medium text-white/70">Kesintisiz Zaman Takibi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
