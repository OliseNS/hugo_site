// Enhanced animations for the header elements
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  const logoContainer = document.querySelector('.logo-container');
  const signature = document.querySelector('.signature');
  const navItems = document.querySelectorAll('.nav-item');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const menuIcon = document.querySelector('.menu-icon');
  
  // Add scroll effect to header
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  // Enhanced signature animation
  if (signature) {
    // The CSS animation handles the initial draw
    signature.addEventListener('mouseover', function() {
      this.style.filter = 'drop-shadow(0 0 3px rgba(238, 195, 94, 0.7))';
    });
    
    signature.addEventListener('mouseout', function() {
      this.style.filter = 'none';
    });
  }
  
  // Mobile menu button click animation
  if (menuBtn && menuIcon) {
    let isOpen = false;
    
    menuBtn.addEventListener('click', function() {
      if (!isOpen) {
        // Add open state animation
        setTimeout(() => {
          document.querySelectorAll('.menu-icon span').forEach((span, index) => {
            if (index === 0) {
              span.style.transform = 'rotate(45deg)';
              span.style.top = '9px';
            } else if (index === 1) {
              span.style.opacity = '0';
              span.style.width = '100%';
            } else if (index === 2) {
              span.style.transform = 'rotate(-45deg)';
              span.style.top = '9px';
            }
          });
        }, 10);
      } else {
        // Reset animation
        document.querySelectorAll('.menu-icon span').forEach((span, index) => {
          if (index === 0) {
            span.style.transform = 'rotate(0deg)';
            span.style.top = '0px';
          } else if (index === 1) {
            span.style.opacity = '1';
            span.style.width = '80%';
          } else if (index === 2) {
            span.style.transform = 'rotate(0deg)';
            span.style.top = '18px';
          }
        });
      }
      
      isOpen = !isOpen;
    });
    
    // Reset menu icon when dropdown is closed
    document.addEventListener('click', function(event) {
      if (isOpen && !menuBtn.contains(event.target) && !document.querySelector('.dropdown-menu').contains(event.target)) {
        document.querySelectorAll('.menu-icon span').forEach((span, index) => {
          if (index === 0) {
            span.style.transform = 'rotate(0deg)';
            span.style.top = '0px';
          } else if (index === 1) {
            span.style.opacity = '1';
            span.style.width = '80%';
          } else if (index === 2) {
            span.style.transform = 'rotate(0deg)';
            span.style.top = '18px';
          }
        });
        isOpen = false;
      }
    });
  }
});
