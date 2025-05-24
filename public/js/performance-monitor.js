/**
 * Performance Monitor - Simple performance tracking for the site
 * Tracks Core Web Vitals and provides insights
 */

(function() {
    'use strict';
    
    // Only run in development or when explicitly enabled
    const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const forceEnable = new URLSearchParams(window.location.search).has('perf');
    
    if (!isDev && !forceEnable) return;
    
    console.log('🚀 Performance Monitor initialized');
    
    // Track page load time
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`📈 Page load time: ${Math.round(loadTime)}ms`);
        
        // Track resource loading
        const resources = performance.getEntriesByType('resource');
        const cssFiles = resources.filter(r => r.name.includes('.css'));
        const jsFiles = resources.filter(r => r.name.includes('.js'));
        const images = resources.filter(r => r.initiatorType === 'img');
        
        console.log(`📊 Resources loaded:`, {
            css: cssFiles.length,
            js: jsFiles.length,
            images: images.length,
            total: resources.length
        });
        
        // Track largest files
        const largestFiles = resources
            .sort((a, b) => b.transferSize - a.transferSize)
            .slice(0, 5)
            .map(r => ({
                name: r.name.split('/').pop(),
                size: Math.round(r.transferSize / 1024) + 'KB',
                time: Math.round(r.duration) + 'ms'
            }));
            
        console.log('📦 Largest files:', largestFiles);
    });
    
    // Track Core Web Vitals if available
    if ('web-vitals' in window) {
        // This would require importing web-vitals library
        // For now, we'll track basic metrics
    }
    
    // Track scroll performance
    let scrollCount = 0;
    let lastScrollTime = 0;
    
    function trackScrollPerformance() {
        scrollCount++;
        const now = performance.now();
        const deltaTime = now - lastScrollTime;
        
        if (deltaTime < 16.67) { // Less than 60fps
            console.warn(`⚠️ Scroll performance issue: ${Math.round(1000/deltaTime)}fps`);
        }
        
        lastScrollTime = now;
        
        // Log every 100 scroll events
        if (scrollCount % 100 === 0) {
            console.log(`📜 Scroll events: ${scrollCount}`);
        }
    }
    
    // Throttled scroll listener
    let scrollTimer;
    window.addEventListener('scroll', function() {
        if (!scrollTimer) {
            scrollTimer = setTimeout(function() {
                trackScrollPerformance();
                scrollTimer = null;
            }, 10);
        }
    }, { passive: true });
    
    // Track memory usage (if available)
    if ('memory' in performance) {
        setInterval(function() {
            const memory = performance.memory;
            const used = Math.round(memory.usedJSHeapSize / 1048576);
            const total = Math.round(memory.totalJSHeapSize / 1048576);
            
            if (used > 50) { // More than 50MB
                console.warn(`🧠 High memory usage: ${used}MB / ${total}MB`);
            }
        }, 30000); // Check every 30 seconds
    }
    
    // Track animation performance
    let animationFrameCount = 0;
    let lastAnimationTime = performance.now();
    
    function trackAnimationPerformance() {
        animationFrameCount++;
        const now = performance.now();
        
        if (animationFrameCount % 60 === 0) { // Every 60 frames (roughly 1 second)
            const fps = 60000 / (now - lastAnimationTime);
            if (fps < 55) {
                console.warn(`🎬 Animation performance issue: ${Math.round(fps)}fps`);
            }
            lastAnimationTime = now;
        }
        
        if (document.querySelector('.hero-section')) {
            requestAnimationFrame(trackAnimationPerformance);
        }
    }
    
    // Start animation tracking when animations are likely to occur
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(trackAnimationPerformance);
                observer.disconnect();
            }
        });
    });
    
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        observer.observe(heroSection);
    }
    
    // Export performance data for debugging
    window.performanceData = function() {
        return {
            navigation: performance.getEntriesByType('navigation')[0],
            resources: performance.getEntriesByType('resource'),
            memory: performance.memory || null,
            scrollEvents: scrollCount,
            animationFrames: animationFrameCount
        };
    };
    
})();
