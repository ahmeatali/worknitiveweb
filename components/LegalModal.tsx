
import React from 'react';

interface LegalModalProps {
  title: string;
  onClose: () => void;
  type: 'privacy' | 'kvkk' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ title, onClose, type }) => {
  const getContent = () => {
    switch (type) {
      case 'terms':
        return (
          <div className="space-y-8 text-slate-600 pb-10">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
              <p className="text-sm font-medium leading-relaxed italic">
                İşbu kullanıcı sözleşmesi (“Sözleşme”), worknitive.com internet sitesinin (“Site”) faaliyetlerini yürüten worknitive şirketi (“worknitive”) ile Site’ye üye olan kullanıcı şirket (“Kullanıcı”) arasında akdedilmiştir. Kullanıcı, Site’ye üye olmakla birlikte Sözleşme’yi okuduğunu, içeriğinde yer alan bütün hususları anladığını ve onayladığını kabul etmektedir.
              </p>
            </div>

            <section>
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">Madde 1. Taraflar</h4>
              <p className="text-sm leading-relaxed">Sözleşme, yukarıda tanımlanan Worknitive ile Site üzerinden hizmet alan tüzel kişilik (Kullanıcı) arasında dijital onay ile yürürlüğe girmiştir.</p>
            </section>

            <section>
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">Madde 2. Sözleşmenin Konusu</h4>
              <div className="space-y-3 text-sm leading-relaxed">
                <p><strong>2.1</strong> Sözleşme’nin konusunu Site’de yer alan ürün ve hizmetlerin Kullanıcı’ya sunulmasına, Kullanıcı’nın bu ürün ve hizmetleri kullanmasına, Kullanıcı tarafından Site’ye yüklenen verilere ilişkin koşul ve şartlar ile tarafların hak ve yükümlülüklerinin belirlenmesi oluşturmaktadır.</p>
                <p><strong>2.2</strong> Sözleşme her ne kadar ödeme koşullarını ihtiva etse de bir satış sözleşmesi niteliğinde değil, yalnızca kullanım haklarına ilişkin bir sözleşmedir.</p>
                <p><strong>2.3</strong> Sözleşme, worknitive tarafından Kullanıcı’nın bilgisine sunulan kullanım koşulları, kurallar ve ekleriyle birlikte bir bütündür.</p>
              </div>
            </section>

            <section>
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">Madde 3. Tarafların Hak ve Yükümlülükleri</h4>
              <div className="space-y-3 text-sm leading-relaxed">
                <p><strong>3.1</strong> Kullanıcı, Site’deki ürün ve hizmetleri kullanmak için worknitive tarafından talep edilen bütün bilgileri eksiksiz ve gerçeğe uygun şekilde sağlar.</p>
                <p><strong>3.2</strong> Kullanıcı kendi adına oluşturulmuş şifreyi başka kişi veya kuruluşlara vermeyeceğini, şifre ve giriş bilgilerinin gizlilik ve güvenliğini sağlama yükümlülüğü altında olduğunu beyan eder.</p>
                <p><strong>3.3</strong> Site hukuka aykırı hiçbir faaliyet için kullanılamaz. Kullanıcı, Site’yi ve Site’yle beraber sunulan ürün ve hizmetleri yalnızca hukuka uygun faaliyetleri kapsamında kullanacağını kabul eder.</p>
                <p><strong>3.4</strong> Worknitive, Site ve beraberinde sunulan ürün ve hizmetlere ilişkin elektronik altyapıyı sağlamakla yükümlüdür.</p>
                <p><strong>3.5</strong> Kullanıcı, Site’ye yüklenecek her türlü kişisel veri için veri sahipleri yönünden 6698 sayılı Kişisel Verilerin Korunması Hakkında Kanun kapsamında veri sorumlusu sıfatındadır.</p>
              </div>
            </section>

            <section>
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">Madde 4. Ödeme Koşulları</h4>
              <p className="text-sm leading-relaxed"><strong>4.1</strong> Kullanıcı, Site ve beraberindeki ürün ve hizmetlerden worknitive tarafından belirlenen ücretleri yine worknitive tarafından bildirilen ödeme koşulları ve araçları ile ödediği takdirde faydalanabilecektir.</p>
            </section>

            <section>
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">Madde 5. Fikri Mülkiyet Hakları</h4>
              <p className="text-sm leading-relaxed"><strong>5.1</strong> Site içerisinde bulunan bütün haklar worknitive’e aittir. Bu haklara site içerisinde bulunan bütün görsel ve tasarımlar, grafik ve logolar ve münhasıran Site’ye ait bütün içerik dahildir.</p>
            </section>

            <section>
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">Madde 6. Sorumlulukların Kapsamı ve Sınırlandırılması</h4>
              <div className="space-y-3 text-sm leading-relaxed">
                <p><strong>6.1</strong> Worknitive, Site’yi mevcut haliyle sunmakta olup; Site’nin ve hizmetlerin hatasız çalışacağı yönünde açık ya da örtülü bir taahhütte bulunmamaktadır.</p>
                <p><strong>6.5</strong> Worknitive’nin Sözleşme kapsamında Kullanıcı nezdinde doğabilecek her türlü zararında sorumluluğu, kullanıcının satın aldığı hizmet veya ürün için ödediği aylık ücretin bir kat arttırılmış halidir.</p>
              </div>
            </section>

            <section>
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">Madde 7. Fesih Koşulları</h4>
              <p className="text-sm leading-relaxed"><strong>7.2</strong> Taraflardan her biri, en az on dört gün öncesinden yazılı bildirimde bulunmak suretiyle Sözleşme’yi dilediği zaman feshetme hakkına sahiptir.</p>
            </section>

            <section>
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">Madde 10. Kayıtların Hukuki Niteliği</h4>
              <p className="text-sm leading-relaxed"><strong>10.1</strong> Uyuşmazlıklarda, Site üzerinde tutulan dijital kayıtlar, mailler ve yazışmalar HMK Madde 193 uyarınca tek ve gerçek delil olarak kabul edilecektir. Yetkili mahkemeler İstanbul Anadolu Adliyesi mahkemeleridir.</p>
            </section>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-6 text-slate-600">
            <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">Gizlilik Politikası</h4>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>Worknitive, hizmet sunabilmek için ad-soyad, e-posta, şirket bilgileri, konum verileri (PDKS girişi için) ve kamera aracılığıyla yüklenen fiş görsellerini toplar.</p>
              <p>Toplanan veriler, AI destekli harcama analizi, mesai takibi ve raporlama amacıyla işlenir. Konum verileriniz sadece "Mesai Başlat/Bitir" işlemi sırasında anlık olarak kontrol edilir, sürekli takip yapılmaz.</p>
            </div>
          </div>
        );
      case 'kvkk':
        return (
          <div className="space-y-6 text-slate-600">
            <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">KVKK Aydınlatma Metni</h4>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, Worknitive "Veri İşleyen" sıfatıyla hareket eder. Verileriniz Türkiye sınırları içerisindeki yüksek güvenlikli sunucularda saklanmaktadır.</p>
            </div>
          </div>
        );
      default:
        return <p>İçerik hazırlanıyor...</p>;
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col transition-all duration-500 animate-scaleIn">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex flex-col">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">{title}</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Son Güncelleme: Ocak 2025</p>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-slate-200 text-slate-400 hover:text-slate-900 rounded-full transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
          {getContent()}
        </div>
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose} 
            className="px-8 py-3 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-worknitive transition-all"
          >
            Anladım
          </button>
        </div>
      </div>
    </div>
  );
};
