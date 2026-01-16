# Worknitive Landing Page - Yayına Alma Rehberi

Bu proje **React + Vite** ile hazırlanmıştır. Vercel üzerinden yayına alıp WordPress sitenize gömmek için aşağıdaki adımları izleyin.

## 🚀 1. Vercel ile Yayına Alma (2 Dakika)

1. Proje dosyalarını GitHub'a yükleyin.
2. [Vercel](https://vercel.com) üzerinden "Add New Project" diyerek GitHub reponuzu seçin.
3. Ayarların şu şekilde olduğundan emin olun:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. **Deploy** butonuna basın ve oluşan `.vercel.app` uzantılı linki kopyalayın.

## 📥 2. WordPress'e Entegre Etme (Iframe Yöntemi)

WordPress sitenizde herhangi bir sayfaya "Özel HTML" bloğu ekleyerek aşağıdaki kodu yapıştırın. Bu kod, sayfanın tam ekran ve mobil uyumlu görünmesini sağlar.

```html
<!-- Worknitive Iframe Entegrasyonu -->
<div class="worknitive-container" style="width: 100%; height: 100vh; overflow: hidden; position: relative;">
    <iframe 
        src="https://SİZİN-PROJE-ADINIZ.vercel.app" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        title="Worknitive"
        allow="autoplay; camera; focus-without-user-activation">
    </iframe>
</div>

<style>
    /* WordPress temanızın oluşturabileceği olası boşlukları sıfırlamak için */
    .worknitive-container {
        margin-left: calc(-50vw + 50%);
        margin-right: calc(-50vw + 50%);
        width: 100vw;
    }
</style>
```

## 🛠 Yerel Geliştirme
Yerel bilgisayarınızda çalıştırmak için:
```bash
npm install
npm run dev
```

## 📝 Önemli Not
WordPress içinde iframe kullanırken, WordPress temanızın sayfa genişliği (container) kısıtlamaları olabilir. Eğer sayfa tam genişlikte görünmezse, WordPress sayfa ayarlarından "Full Width" veya "Canvas" şablonunu seçmeyi deneyin.

---
© 2025 Worknitive Bilişim A.Ş.
