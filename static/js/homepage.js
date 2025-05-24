/**
 * Minimalist Homepage JavaScript
 * Simple animations for the centered, single-column layout
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize minimalist homepage features
    initHeaderImageAnimation();
    initHelloTextAnimation();
    initSkillHoverEffects();
    initProjectHoverEffects();
    initSmoothScrolling();
});

/**
 * Header image hover animation
 */
function initHeaderImageAnimation() {
    const headerImage = document.querySelector('.header-image');
    if (!headerImage) return;
    
    headerImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    headerImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

/**
 * Hello text cycling animation
 */
function initHelloTextAnimation() {
    const helloMessage = document.getElementById('hello-message');
    if (!helloMessage) return;
    
    const messages = [
        "Hello",          // English
        "नमस्ते",          // Nepali
        "Ndewo",          // Igbo
        "Ciao",           // Italian
        "Bonjour",        // French
        "Hola",           // Spanish
        "こんにちは",       // Japanese
        "Guten Tag",      // German
        "Привет",         // Russian
        "Olá",            // Portuguese
        "Kamusta",        // Filipino
    ];
    
    let index = 0;
    setInterval(() => {
        helloMessage.textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 1500);
}

/**
 * Skill items hover effects
 */
function initSkillHoverEffects() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Project items hover effects
 */
function initProjectHoverEffects() {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Smooth scrolling for internal links
 */
function initSmoothScrolling() {    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
}
