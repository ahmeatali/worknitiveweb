
import React from 'react';

interface LegalModalProps {
  title: string;
  onClose: () => void;
  type: 'privacy' | 'kvkk' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ title, onClose, type }) => {
  const getContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="space-y-6 text-slate-600 pb-10">
            <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4">GİZLİLİK POLİTİKASI</h4>
            <div className="space-y-4 text-sm leading-relaxed text-justify">
              <p>Worknitive Bilişim A.Ş. (“Worknitive”) olarak, kullanıcılarımızın gizliliğine en üst düzeyde önem veriyoruz. Bu politika, platformumuzun kullanımı sırasında toplanan verilerin işlenme esaslarını belirler.</p>
              <p><strong>Veri Depolama ve Güvenlik:</strong> Worknitive tarafından işlenen tüm veriler, yüksek güvenlik standartlarına sahip <strong>GDPR (Genel Veri Koruma Yönetmeliği)</strong> uyumlu bölgelerdeki dağıtık bulut sunucularımızda şifrelenmiş olarak saklanmaktadır. Verileriniz, fiziksel bir sunucu merkezine bağlı kalmaksızın, yedekli ve güvenli bir mimaride barındırılır.</p>
              <p><strong>Toplanan Veriler:</strong> Hizmet sunabilmek için ad-soyad, kurumsal e-posta, şirket bilgileri, AI analizi için yüklenen fiş görselleri ve PDKS doğrulaması için anlık konum verileri toplanır.</p>
              <p><strong>İşleme Amaçları:</strong> Veriler; AI destekli harcama yönetimi süreçlerinin yürütülmesi, PDKS doğrulaması ve puantaj raporlarının hatasız oluşturulması amaçlarıyla işlenir.</p>
            </div>
          </div>
        );
      case 'kvkk':
        return (
          <div className="space-y-6 text-slate-600 pb-10">
            <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4">KVKK AYDINLATMA METNİ</h4>
            <div className="space-y-4 text-sm leading-relaxed text-justify">
              <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca Worknitive, "Veri İşleyen" ve yer yer "Veri Sorumlusu" sıfatıyla hareket etmektedir.</p>
              <p><strong>Verilerin Aktarımı:</strong> Şirketimiz, verilerin güvenliğini sağlamak amacıyla <strong>uluslararası standartlarda (GDPR uyumlu) dağıtık sunucu altyapıları</strong> kullanmaktadır. Kişisel verileriniz, işbu aydınlatma metninde belirtilen amaçlar dışında üçüncü taraflarla paylaşılmaz.</p>
              <p><strong>Haklarınız:</strong> Kanun'un 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme ve silinmesini isteme haklarına sahipsiniz. Başvurularınızı <strong>info@worknitive.com</strong> adresine iletebilirsiniz.</p>
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-6 text-slate-600 pb-10">
            <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4">KULLANIM ŞARTLARI</h4>
            <div className="space-y-4 text-sm leading-relaxed text-justify">
              <p>Worknitive platformu, kurumsal bir B2B SaaS çözümüdür. Sistem kullanımı, Worknitive ile Kullanıcı (Şirket) arasında akdedilen lisans sözleşmesi ve bu genel şartlara tabidir.</p>
              <p>Kullanıcılar, sisteme yükledikleri verilerin (fiş, fatura, personel bilgisi vb.) doğruluğundan ve bu verilerin sisteme yüklenmesi için gerekli yasal izinleri almış olduklarından sorumludur.</p>
              <p>Sistemin izinsiz kopyalanması, tersine mühendislik işlemlerine tabi tutulması veya kötüye kullanımı yasal yaptırımlara tabidir.</p>
            </div>
          </div>
        );
      default:
        return <p>İçerik yükleniyor...</p>;
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col animate-scaleIn">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white">
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
          {getContent()}
        </div>
      </div>
    </div>
  );
};
