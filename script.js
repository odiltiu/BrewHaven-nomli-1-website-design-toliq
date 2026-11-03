// Smooth scrolling for navigation links
// Tuzatildi: href="#" bo'lgan havolada querySelector('#') xato tashlardi.
// Endi "#" sahifa boshiga olib chiqadi, mavjud bo'lmagan bo'lim esa oddiy havola kabi ishlaydi.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mahsulot kartalaridagi ko'tarilish effekti CSS'dagi .product-card:hover orqali ishlaydi
