const canvas = document.createElement('canvas');
canvas.id = 'starCanvas';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');
let stars = [];
let mouse = { x: -1000, y: -1000, radius: 150 };

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    // Yıldız yoğunluğu
    for (let i = 0; i < 250; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        stars.push({
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 2,
            density: (Math.random() * 20) + 2,
            color: '#c49952' // Yıldız rengi (Altın sarısı tonu)
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        let s = stars[i];
        let dx = mouse.x - s.x;
        let dy = mouse.y - s.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            s.x -= (dx / distance) * force * s.density;
            s.y -= (dy / distance) * force * s.density;
        } else {
            // Yavaşça eski yerine dönme
            s.x += (s.baseX - s.x) * 0.05;
            s.y += (s.baseY - s.y) * 0.05;
        }

        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();