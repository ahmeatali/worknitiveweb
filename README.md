
# Worknitive Pro - Yayın ve Domain Rehberi

Bu proje **Worknitive B2B SaaS** platformunun ana tanıtım sayfasıdır.

## 🚀 Profesyonel Yayın (Vercel & Domain)

En iyi performans ve Google Play / SEO uyumluluğu için alan adınızı doğrudan Vercel'e yönlendirin:

1. **Vercel Paneli:** Settings > Domains > Add **'worknitive.com'**
2. **DNS Ayarları:**
   - **A Kaydı:** `@` -> `76.76.21.21`
   - **CNAME:** `www` -> `cname.vercel-dns.com`

## 📱 Google Play Gizlilik Politikası URL'si
Google Play Console üzerinde "Veri Güvenliği" kısmına girmeniz gereken link:
`https://worknitive.com` (Sitedeki footer linkleri üzerinden politikaya erişilebilir)

## 📥 WordPress Üzerinden Yayın (Alternatif)

Eğer WordPress kullanıyorsanız, sayfanın bozulmaması için iframe metodunu kullanabilirsiniz:

1. WordPress'te yeni bir sayfa açın.
2. Aşağıdaki kodu "Özel HTML" bloğuna ekleyin:

```html
<div style="width: 100vw; height: 100vh; overflow: hidden; position: fixed; top: 0; left: 0; z-index: 999999;">
    <iframe 
        src="https://worknitive.com" 
        style="width: 100%; height: 100%; border: none;"
        title="Worknitive Landing Page">
    </iframe>
</div>
```

---
© 2025 Worknitive Bilişim ve Ticaret A.Ş.
