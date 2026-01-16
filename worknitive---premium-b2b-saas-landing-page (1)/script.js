
// Modal Yönetimi
function openModal(modalId) {
    document.getElementById(modalId).classList.add('open');
    document.body.style.overflow = 'hidden'; // Scroll kilidi
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('open');
    document.body.style.overflow = '';
}

// Yumuşak Kaydırma (Scroll)
function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// SSS Akordeon Mantığı
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Diğerlerini kapat
        document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
        
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Form Gönderimi (Simülasyon)
const demoForm = document.getElementById('demo-form');
if (demoForm) {
    demoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerText = 'Gönderiliyor...';

        // 1.5 saniye bekle (simülasyon)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Başarılı ekranına geç
        demoForm.classList.add('hide');
        document.getElementById('form-success').classList.remove('hide');
        document.querySelector('#demo-modal h3').style.display = 'none';
        document.querySelector('#demo-modal p').style.display = 'none';
    });
}

// Mobil Menü Toggle (Opsiyonel Geliştirme)
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        alert('Bu sürümde mobil menü için tıklanan linklere kaydırma yapılması önerilir.');
    });
}

// Sayfa kaydırıldığında header gölgesi ekle
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.05)';
    } else {
        header.style.boxShadow = 'none';
    }
});
