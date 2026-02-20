
import React from 'react';

export const LegalContent: React.FC<{ type: 'privacy' | 'kvkk' | 'terms' }> = ({ type }) => {
  switch (type) {
    case 'privacy':
      return (
        <div className="space-y-6 text-slate-600">
          <div className="inline-flex px-3 py-1 rounded-full bg-worknitive/10 text-worknitive text-[9px] font-black uppercase tracking-[0.2em] mb-4">
            Son Güncelleme: 01.01.2025
          </div>
          <h4 className="font-black text-slate-900 uppercase tracking-tight text-3xl md:text-4xl mb-8 leading-tight">GİZLİLİK POLİTİKASI</h4>
          <div className="space-y-8 text-base md:text-lg leading-relaxed text-justify">
            <p>Worknitive Bilişim A.Ş. (“Worknitive”) olarak, kullanıcılarımızın gizliliğine en üst düzeyde önem veriyoruz. Bu politika, platformumuzun kullanımı sırasında toplanan verilerin işlenme esaslarını belirler.</p>
            
            <section className="space-y-4">
              <h5 className="font-black text-slate-900 text-sm uppercase tracking-widest flex items-center gap-3">
                <span className="w-6 h-px bg-worknitive"></span> 1. Veri Depolama ve Global Altyapı
              </h5>
              <p>Worknitive tarafından işlenen tüm veriler, en yüksek güvenlik standartlarına sahip <strong>GDPR (Genel Veri Koruma Yönetmeliği)</strong> uyumlu Avrupa Birliği bölgelerindeki dağıtık bulut sunucularımızda şifrelenmiş olarak saklanmaktadır. Verileriniz, tek bir fiziksel sunucuya bağlı kalmaksızın, yedekli ve yüksek erişilebilirlikli bir global mimaride barındırılır.</p>
            </section>

            <section className="space-y-4">
              <h5 className="font-black text-slate-900 text-sm uppercase tracking-widest flex items-center gap-3">
                <span className="w-6 h-px bg-worknitive"></span> 2. Toplanan Veriler
              </h5>
              <p>Hizmet sunabilmek için ad-soyad, kurumsal e-posta, şirket bilgileri, AI analizi için yüklenen fiş görselleri ve PDKS doğrulaması için anlık konum verileri toplanır.</p>
            </section>

            <section className="space-y-4">
              <h5 className="font-black text-slate-900 text-sm uppercase tracking-widest flex items-center gap-3">
                <span className="w-6 h-px bg-worknitive"></span> 3. İşleme Amaçları
              </h5>
              <p>Veriler; AI destekli harcama yönetimi süreçlerinin yürütülmesi, PDKS doğrulaması ve puantaj raporlarının hatasız oluşturulması amaçlarıyla işlenir.</p>
            </section>
          </div>
        </div>
      );
    case 'kvkk':
      return (
        <div className="space-y-6 text-slate-600">
          <div className="inline-flex px-3 py-1 rounded-full bg-worknitive/10 text-worknitive text-[9px] font-black uppercase tracking-[0.2em] mb-4">
            Resmi Metin
          </div>
          <h4 className="font-black text-slate-900 uppercase tracking-tight text-3xl md:text-4xl mb-8 leading-tight">KVKK AYDINLATMA METNİ</h4>
          <div className="space-y-8 text-base md:text-lg leading-relaxed text-justify">
            <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca Worknitive, "Veri İşleyen" ve yer yer "Veri Sorumlusu" sıfatıyla hareket etmektedir.</p>
            
            <section className="space-y-4">
              <h5 className="font-black text-slate-900 text-sm uppercase tracking-widest flex items-center gap-3">
                <span className="w-6 h-px bg-worknitive"></span> Verilerin Sınır Ötesi Aktarımı ve Depolama
              </h5>
              <p>Şirketimiz, verilerin güvenliğini ve sürdürülebilirliğini sağlamak amacıyla <strong>uluslararası standartlarda (GDPR uyumlu) dağıtık sunucu altyapıları</strong> kullanmaktadır. Kişisel verileriniz, işbu aydınlatma metninde belirtilen amaçlar doğrultusunda, yüksek güvenlikli global veri merkezlerinde muhafaza edilmektedir.</p>
            </section>

            <section className="space-y-4">
              <h5 className="font-black text-slate-900 text-sm uppercase tracking-widest flex items-center gap-3">
                <span className="w-6 h-px bg-worknitive"></span> Haklarınız
              </h5>
              <p>Kanun'un 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme ve silinmesini isteme haklarına sahipsiniz. Başvurularınızı <strong>info@worknitive.com</strong> adresine iletebilirsiniz.</p>
            </section>
          </div>
        </div>
      );
    case 'terms':
      return (
        <div className="space-y-6 text-slate-600">
          <div className="inline-flex px-3 py-1 rounded-full bg-worknitive/10 text-worknitive text-[9px] font-black uppercase tracking-[0.2em] mb-4">
            Sözleşme Şartları
          </div>
          <h4 className="font-black text-slate-900 uppercase tracking-tight text-3xl md:text-4xl mb-8 leading-tight">KULLANIM ŞARTLARI</h4>
          <div className="space-y-8 text-base md:text-lg leading-relaxed text-justify">
            <p>Worknitive platformu, kurumsal bir B2B SaaS çözümüdür. Sistem kullanımı, Worknitive ile Kullanıcı (Şirket) arasında akdedilen lisans sözleşmesi ve bu genel şartlara tabidir.</p>
            
            <section className="space-y-4">
              <h5 className="font-black text-slate-900 text-sm uppercase tracking-widest flex items-center gap-3">
                <span className="w-6 h-px bg-worknitive"></span> Sorumluluklar
              </h5>
              <p>Kullanıcılar, sisteme yükledikleri verilerin (fiş, fatura, personel bilgisi vb.) doğruluğundan ve bu verilerin sisteme yüklenmesi için gerekli yasal izinleri almış olduklarından sorumludur.</p>
            </section>

            <section className="space-y-4">
              <h5 className="font-black text-slate-900 text-sm uppercase tracking-widest flex items-center gap-3">
                <span className="w-6 h-px bg-worknitive"></span> Fikri Mülkiyet
              </h5>
              <p>Sistemin izinsiz kopyalanması, tersine mühendislik işlemlerine tabi tutulması veya kötüye kullanımı yasal yaptırımlara tabidir.</p>
            </section>
          </div>
        </div>
      );
    default:
      return null;
  }
};

interface LegalModalProps {
  title: string;
  onClose: () => void;
  type: 'privacy' | 'kvkk' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ title, onClose, type }) => {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col animate-scaleIn">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white shrink-0">
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
          <LegalContent type={type} />
        </div>
      </div>
    </div>
  );
};
