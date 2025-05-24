/**
 * Mobile Navigation Script
 * Handles mobile dropdown menu functionality without Bootstrap
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileNavigation();
    initSmoothScrolling();
    initActiveNavStates();
});

/**
 * Initialize mobile navigation dropdown functionality
 */
function initMobileNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (!mobileMenuBtn || !dropdownMenu) return;
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // Toggle aria-expanded attribute
        this.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle dropdown visibility
        dropdownMenu.classList.toggle('show');
        
        // Animate hamburger menu icon
        if (menuIcon) {
            menuIcon.classList.toggle('active');
        }
        
        // Add/remove body scroll lock on mobile
        if (window.innerWidth <= 768) {
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            closeDropdownMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDropdownMenu();
        }
    });
    
    // Close menu on window resize if switching to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            closeDropdownMenu();
        }
    });
    
    // Close menu when clicking on nav links
    const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            // Small delay to allow navigation to start
            setTimeout(closeDropdownMenu, 100);
        });
    });
}

/**
 * Close the dropdown menu
 */
function closeDropdownMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    
    if (dropdownMenu) {
        dropdownMenu.classList.remove('show');
    }
    
    if (menuIcon) {
        menuIcon.classList.remove('active');
    }
    
    // Restore body scroll
    document.body.style.overflow = '';
}

/**
 * Add smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                closeDropdownMenu();
                
                // Smooth scroll to target
                const headerHeight = document.querySelector('.site-header')?.offsetHeight || 60;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Update active navigation states based on current page
 */
function initActiveNavStates() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-btn, .dropdown-item');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (currentPath === href || currentPath.startsWith(href + '/'))) {
            link.classList.add('active');
        }
    });
}

/**
 * Add header scroll effects (optional enhancement)
 */
function initHeaderScrollEffects() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateHeader() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll (optional)
        if (scrollY > lastScrollY && scrollY > 200) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Optional: Initialize header scroll effects
// Uncomment the line below to enable header scroll effects
// initHeaderScrollEffects();
