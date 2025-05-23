document.addEventListener('DOMContentLoaded', function() {
    const tocContainer = document.getElementById('toc-container');
    if (!tocContainer) return;
  
    const articleContent = document.querySelector('.article-content');
    if (!articleContent) return;

    const tocWrapper = document.querySelector('.table-of-contents');
    const tocHeading = tocWrapper.querySelector('h4');
  
    // Get all headings in the article content
    const headings = articleContent.querySelectorAll('h2, h3, h4');
    
    if (headings.length === 0) {
        tocContainer.innerHTML = '<p>No table of contents available</p>';
        return;
    }
  
    const toc = document.createElement('ul');
    toc.className = 'toc-list';
  
    // Add IDs to headings if they don't have them
    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
  
        const listItem = document.createElement('li');
        listItem.className = `toc-${heading.tagName.toLowerCase()}`;
  
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
  
        listItem.appendChild(link);
        toc.appendChild(listItem);
    });
  
    tocContainer.appendChild(toc);

    // Make TOC collapsible on mobile
    if (window.innerWidth <= 1024) {
        // Initial state - expanded
        tocWrapper.classList.remove('collapsed');
        
        // Toggle TOC when heading is clicked
        if (tocHeading) {
            tocHeading.addEventListener('click', function() {
                tocWrapper.classList.toggle('collapsed');
            });
        }
    }

    // Add active state to TOC item when scrolling
    window.addEventListener('scroll', function() {
        const headingElements = Array.from(headings);
        const visibleHeadings = headingElements.filter(heading => {
            const rect = heading.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= 300;
        });

        if (visibleHeadings.length > 0) {
            const activeHeading = visibleHeadings[0];
            const tocItems = tocContainer.querySelectorAll('a');
            
            tocItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${activeHeading.id}`) {
                    item.classList.add('active');
                }
            });
        }
    });

    // Handle TOC link clicks
    tocContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            // If we're on mobile, collapse the TOC after clicking a link
            if (window.innerWidth <= 1024) {
                setTimeout(() => {
                    tocWrapper.classList.add('collapsed');
                }, 300);
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 1024) {
            tocHeading.addEventListener('click', function() {
                tocWrapper.classList.toggle('collapsed');
            });
        } else {
            tocWrapper.classList.remove('collapsed');
            tocHeading.removeEventListener('click', function() {});
        }
    });
});
