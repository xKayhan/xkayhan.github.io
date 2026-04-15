// Sayfa yüklendiğinde bir karşılama mesajı
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sayfa hazır!");

    // Proje kartlarına tıklandığında efekt (Opsiyonel)
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            console.log(`${title} projesine bakılıyor...`);
        });
    });
});

// Navbar rengini kaydırınca değiştirme
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#0f172a';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = '#1e293b';
        nav.style.boxShadow = 'none';
    }
});

