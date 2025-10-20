// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll for photo cards
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all photo cards
document.querySelectorAll('.photo-card').forEach((card, index) => {
    observer.observe(card);
});

// Add click event to cards for better mobile experience
document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // If the click is not on the link itself, trigger the link click
        if (!e.target.closest('.card-link')) {
            const link = this.querySelector('.card-link');
            if (link) {
                window.location.href = link.href;
            }
        }
    });
});

// Add mouse move parallax effect
document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        const background = card.querySelector('.photo-background');
        if (background) {
            background.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const background = card.querySelector('.photo-background');
        if (background) {
            background.style.transform = 'scale(1) rotateX(0) rotateY(0)';
        }
    });
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
