// Header scroll effects
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  const logoContainer = document.querySelector('.logo-container');
  const signature = document.querySelector('.signature');
  
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
    signature.addEventListener('mouseover', function() {
      this.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
      this.style.fill = 'var(--accent)';
    });
    
    signature.addEventListener('mouseout', function() {
      this.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    });
  }
  
  // Add animation class to navbar items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item, index) => {
    item.style.setProperty('--animation-order', index);
    item.classList.add('fade-in');
  });
});
