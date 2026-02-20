
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
            <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4">GİZLİLİK POLİTİKASI VE VERİ GÜVENLİĞİ</h4>
            <div className="space-y-4 text-sm leading-relaxed">
              <p><strong>1. Veri Sorumlusu:</strong> Worknitive Bilişim ve Ticaret A.Ş. olarak, worknitive.com ve mobil uygulamalarımız aracılığıyla topladığımız kişisel verilerin güvenliğinden sorumluyuz.</p>
              <p><strong>2. Toplanan Veriler:</strong> Hizmetlerimizi sunabilmek adına; ad-soyad, kurumsal e-posta, şirket unvanı, IP adresi ve sistem kullanımı sırasında paylaşılan fiş/fatura görselleri (AI analizi için) toplanmaktadır.</p>
              <p><strong>3. Konum Verileri (PDKS):</strong> PDKS (Personel Devam Kontrol Sistemi) kullanımı sırasında, personelin yalnızca "Giriş" ve "Çıkış" yaptığı anlarda GPS verisi kontrol edilir. Uygulamamız arka planda sürekli konum takibi yapmaz; bu veri yalnızca personelin tanımlı lokasyonda olup olmadığını doğrulamak içindir.</p>
              <p><strong>4. Veri İşleme Amaçları:</strong> Veriler; sözleşme süreçlerinin yürütülmesi, harcama kalemlerinin AI ile dijitalleştirilmesi ve personelin puantaj kayıtlarının oluşturulması amaçlarıyla işlenir.</p>
              <p><strong>5. Üçüncü Taraflar:</strong> Verileriniz, yasal zorunluluklar veya entegrasyon sağlanan muhasebe yazılımları (Logo, Mikro vb.) dışında üçüncü taraflarla paylaşılmaz.</p>
            </div>
          </div>
        );
      case 'kvkk':
        return (
          <div className="space-y-6 text-slate-600 pb-10">
            <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4">6698 SAYILI KVKK AYDINLATMA METNİ</h4>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>Worknitive, 6698 sayılı Kişisel Verilerin Korunması Kanunu’na uygun olarak kişisel verilerinizi işlemekte ve muhafaza etmektedir.</p>
              <p><strong>Haklarınız:</strong> Kanun'un 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini isteme ve silinmesini talep etme haklarına sahipsiniz. Taleplerinizi info@worknitive.com adresine iletebilirsiniz.</p>
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-6 text-slate-600 pb-10">
            <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4">KULLANIM ŞARTLARI</h4>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>Worknitive bir B2B SaaS platformudur. Platformun kullanımı, satın alınan paket limitleri ve şirket içi yetkilendirmeler dahilinde gerçekleştirilir.</p>
              <p>Kullanıcı, sisteme yüklediği verilerin doğruluğundan ve personeline ait verilerin KVKK kapsamındaki rızalarından kendisi sorumludur.</p>
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
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
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
