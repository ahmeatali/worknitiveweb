# Worknitive Pro - Yayına Alma ve Alan Adı Rehberi

Bu proje **Worknitive B2B SaaS** platformunun ana tanıtım sayfasıdır.

## 🚀 Profesyonel Yayın (Önerilen)

En iyi performans ve SEO için alan adınızı doğrudan Vercel'e yönlendirin:

1. **Vercel Paneli:** Settings > Domains > Add 'worknitive.com'
2. **DNS Ayarları:**
   - **A Kaydı:** `@` -> `76.76.21.21`
   - **CNAME:** `www` -> `cname.vercel-dns.com`

## 📥 WordPress Üzerinden Yayın

Eğer WordPress kullanmaya devam etmek istiyorsanız:

1. WordPress'te yeni bir sayfa açın ve "Sabit Sayfa" (Static Page) olarak ayarlayın.
2. Aşağıdaki kodu "Özel HTML" bloğuna ekleyin:

```html
<div style="width: 100vw; height: 100vh; overflow: hidden; position: fixed; top: 0; left: 0; z-index: 999999;">
    <iframe 
        src="https://SİZİN-VERCEL-LİNKİNİZ.vercel.app" 
        style="width: 100%; height: 100%; border: none;"
        title="Worknitive Landing Page">
    </iframe>
</div>
```

---
© 2025 Worknitive Bilişim A.Ş.
