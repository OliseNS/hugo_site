// Enhanced animations for the header elements
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  const logoContainer = document.querySelector('.logo-container');
  const signature = document.querySelector('.signature');
  const navItems = document.querySelectorAll('.nav-item');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const menuIcon = document.querySelector('.menu-icon');
  const activeNavItem = document.querySelector('.nav-btn.active');
  
  // Add scroll effect to header - smoother transition
  if (header) {
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 30) {
        header.classList.add('scrolled');
        // Make header more compact on scroll
        if (scrollTop > lastScrollTop) {
          // Scrolling down - additional class for ultra compact header
          if (scrollTop > 150) {
            header.classList.add('compact');
          }
        } else {
          // Scrolling up - remove ultra compact
          header.classList.remove('compact');
        }
      } else {
        header.classList.remove('scrolled');
        header.classList.remove('compact');
      }
      lastScrollTop = scrollTop;
    });
  }
  
  // Enhance active page highlight
  if (activeNavItem) {
    // Highlight is primarily handled in CSS, but we can add some subtle effects
    activeNavItem.setAttribute('aria-current', 'page');
  }
  
  // Enhanced signature animation
  if (signature) {
    // The CSS animation handles the initial draw
    signature.addEventListener('mouseover', function() {
      this.style.filter = 'drop-shadow(0 0 3px rgba(238, 195, 94, 0.7))';
      this.style.transform = 'scale(1.05)';
    });
    
    signature.addEventListener('mouseout', function() {
      this.style.filter = 'none';
      this.style.transform = 'scale(1)';
    });
  }
  
  // Mobile menu button click animation - improved for responsiveness
  if (menuBtn && menuIcon) {
    let isOpen = false;
    
    menuBtn.addEventListener('click', function() {
      if (!isOpen) {
        // Add open state animation
        setTimeout(() => {
          document.querySelectorAll('.menu-icon span').forEach((span, index) => {
            if (index === 0) {
              span.style.transform = 'rotate(45deg)';
              span.style.top = '8px'; // Adjusted for smaller icon
            } else if (index === 1) {
              span.style.opacity = '0';
              span.style.width = '100%';
            } else if (index === 2) {
              span.style.transform = 'rotate(-45deg)';
              span.style.top = '8px'; // Adjusted for smaller icon
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
            span.style.top = '16px';  // Adjusted for smaller icon
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
            span.style.top = '16px';  // Adjusted for smaller icon
          }
        });
        isOpen = false;
      }
    });
    
    // Update dropdown menu links for active state
    const currentPath = window.location.pathname;
    document.querySelectorAll('.dropdown-item').forEach(item => {
      const itemPath = item.getAttribute('href');
      // Check if the link matches current page
      if (currentPath === itemPath || 
          (itemPath !== '/' && currentPath.startsWith(itemPath))) {
        item.classList.add('active');
      }
    });
  }
});
