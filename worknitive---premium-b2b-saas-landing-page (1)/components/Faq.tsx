
import React, { useState } from 'react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Worknitive tam olarak ne yapar?',
      a: 'Worknitive; HRIS, harcama yönetimi, sanal kart altyapısı ve AI destekli otomasyon katmanlarını tek platformda birleştirir. Şirketinizin tüm İK ve finans operasyonlarını tek merkezden, kağıtsız ve hatasız yönetmenizi sağlar.'
    },
    {
      q: 'Worknitive bir HRIS mi, yoksa masraf yönetimi aracı mı?',
      a: 'İkisi birden. Worknitive modüler bir yapıdadır. Sadece masraf yönetimini kullanabileceğiniz gibi, tüm İK süreçlerinizi (izin, PDKS, puantaj) kapsayan tam teşekküllü bir HRIS olarak da konumlandırabilirsiniz.'
    },
    {
      q: 'Sanal kart altyapısı nasıl çalışıyor?',
      a: 'Şirketiniz çalışanlara anında limitli ve kurallı sanal kartlar tanımlayabilir. Harcamalar yapıldığı an sisteme düşer, AI fişi otomatik eşleştirir ve muhasebe kaydı için onay akışını başlatır.'
    },
    {
      q: 'Muhasebe ve ERP sistemleriyle entegrasyonu var mı?',
      a: 'Evet. Worknitive; Logo, Mikro, LUCA ve SAP gibi Türkiye\'de yaygın kullanılan muhasebe yazılımları ile entegre çalışır. Verilerinizi manuel taşımak yerine tek tıkla aktarabilirsiniz.'
    },
    {
      q: 'Veri güvenliği ve KVKK uyumluluğu nasıl sağlanıyor?',
      a: 'Tüm verileriniz yüksek güvenlikli bulut sunucularda saklanır. Worknitive, KVKK standartlarına tam uyumlu, rol bazlı yetkilendirme ve ISO 27001 protokolleri ile kurumsal düzeyde güvenlik sunar.'
    }
  ];

  return (
    <section id="faq" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight uppercase">Sıkça Sorulan <span className="text-worknitive">Sorular</span></h2>
            <p className="text-slate-500 font-medium">Worknitive hakkında en çok merak edilen temel konular.</p>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all hover:shadow-md">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left group outline-none"
                >
                  <span className={`font-bold text-lg transition-colors ${openIndex === i ? 'text-worknitive' : 'text-slate-700'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-worknitive text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openIndex === i && (
                  <div className="px-8 pb-8 text-slate-500 leading-relaxed font-medium animate-fadeIn">
                    <div className="h-px bg-slate-50 mb-6"></div>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
