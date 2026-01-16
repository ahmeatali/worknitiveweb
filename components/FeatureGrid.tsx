
import React, { useState } from 'react';
import { FeatureDetailModal } from './FeatureDetailModal';

export interface Feature {
  title: string;
  desc: string;
  icon: string;
  longDesc: string;
  benefits: string[];
}

export const FeatureGrid: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const features: Feature[] = [
    {
      title: 'AI Harcama Yönetimi',
      desc: 'OCR teknolojisi ile fişleri okur, harcama kalemlerini otomatik oluşturur.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      longDesc: 'Geleneksel masraf formlarını tarihe gömün. Worknitive AI, saniyeler içinde fiş ve faturaları tarayarak verileri dijitalleştirir.',
      benefits: [
        'Saniyeler içinde OCR ile veri yakalama',
        'Kategori bazlı harcama limitleri',
        'Çoklu para birimi desteği',
        'Şirket politikası uyumluluk kontrolü'
      ]
    },
    {
      title: 'PDKS Yönetimi',
      desc: 'Lokasyon bazlı giriş-çıkış takibi, vardiya planlama ve mesai raporlama.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      longDesc: 'Ekibinizin nerede ve ne zaman çalıştığını şeffaf bir şekilde yönetin. Mobil uyumlu altyapı ile sahada da kontrol sizde.',
      benefits: [
        'GPS/QR kod ile giriş-çıkış doğrulama',
        'Esnek vardiya ve mola tanımlama',
        'Geç kalma ve erken çıkış bildirimleri',
        'Anlık konum bazlı personel haritası'
      ]
    },
    {
      title: 'İzin Takibi',
      desc: 'Tüm izin türlerini yönetin, bakiye hesaplamalarını otomatiğe bağlayın.',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      longDesc: 'Kağıt üzerindeki izin formlarını unutun. Çalışanlar saniyeler içinde talep oluşturur, yöneticiler anında onaylar.',
      benefits: [
        'Otomatik hak ediş ve bakiye hesaplama',
        'Departman bazlı izin takvimi',
        'Resmi tatil ve özel gün entegrasyonu',
        'Çok aşamalı onay akışları'
      ]
    },
    {
      title: 'Puantaj Hazırlama',
      desc: 'Fazla mesai ve izinleri harmanlayarak puantajı saniyeler içinde oluşturun.',
      icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      longDesc: 'Ay sonu kabusuna son verin. PDKS ve İzin verilerini harmanlayarak hatasız bordro hazırlığı yapın.',
      benefits: [
        'Otomatik fazla mesai hesaplama',
        'Logo, Mikro ve LUCA uyumlu çıktı',
        'SGK ve yasal parametre güncellemeleri',
        'Tek tıkla Excel veya PDF aktarımı'
      ]
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            İK Süreçlerinde <span className="text-worknitive">Uçtan Uca</span> Çözüm
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Karmaşıklıktan kurtulun. İhtiyacınız olan en temel İK ve finans araçları tek platformda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-worknitive/20 hover:shadow-[0_20px_40px_rgba(106,13,173,0.08)] transition-all duration-500 flex flex-col items-start hover:-translate-y-2">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-worknitive mb-8 group-hover:bg-worknitive group-hover:text-white transition-all duration-500">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{f.title}</h3>
              <p className="text-sm text-slate-500 mb-8 flex-1 leading-relaxed font-medium">{f.desc}</p>
              <button 
                onClick={() => setSelectedFeature(f)}
                className="text-xs font-black text-worknitive uppercase tracking-widest group-hover:gap-3 flex items-center gap-2 transition-all outline-none"
              >
                Detayları Gör
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedFeature && (
        <FeatureDetailModal 
          feature={selectedFeature} 
          onClose={() => setSelectedFeature(null)} 
        />
      )}
    </section>
  );
};
