// ============================================
// ma3ak — Professional Restaurant Account Management
// Vanilla JavaScript - Interactivity & Animations
// ============================================

// Smooth scroll navigation
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

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact form handling



// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards, process steps, and value cards
document.querySelectorAll('.service-card, .process-step, .value-card').forEach(el => {
    observer.observe(el);
});

// Add active state to nav links on scroll
const addActiveClass = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--text-secondary)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--accent-teal)';
        }
    });
};

window.addEventListener('scroll', addActiveClass);

// Mobile menu toggle (if needed in future)
const toggleMobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
};

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('slide-in-left');
    }
    
    // Add fade-in animation to about section
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.classList.add('fade-in');
    }
});

// Prevent form submission if fields are empty
const validateForm = () => {
    const form = document.getElementById('contactForm');
    if (form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#ff6b6b';
                } else {
                    input.style.borderColor = 'var(--border-color)';
                }
            });
        });
    }
};

validateForm();

// Smooth scroll for button clicks
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

// Export for use in HTML
window.scrollToSection = scrollToSection;
