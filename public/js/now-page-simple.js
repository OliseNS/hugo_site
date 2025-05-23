// Simple script for the Now page timeline
document.addEventListener('DOMContentLoaded', function() {
  // Apply timeline styling to sections with headings
  const timeline = document.querySelector('.timeline-container');
  if (!timeline) return;
  
  // Find all h2 headings within the timeline
  const headings = timeline.querySelectorAll('h2');
  
  headings.forEach(heading => {
    // Get the date from the data-date attribute
    const date = heading.getAttribute('data-date');
    
    if (date) {
      // Create a date badge
      const dateBadge = document.createElement('span');
      dateBadge.className = 'timeline-date';
      dateBadge.textContent = date;
      
      // Insert the date badge before the heading text
      heading.insertAdjacentElement('afterbegin', dateBadge);
    }
    
    // Create a timeline card wrapper for the content following the heading
    const card = document.createElement('div');
    card.className = 'timeline-card';
    
    // Find all elements until the next heading
    let nextElement = heading.nextElementSibling;
    const elementsToMove = [];
    
    while (nextElement && nextElement.tagName !== 'H2') {
      elementsToMove.push(nextElement);
      nextElement = nextElement.nextElementSibling;
    }
    
    // Add the content to the card
    elementsToMove.forEach(element => {
      card.appendChild(element.cloneNode(true));
    });
    
    // Insert the card after the heading
    heading.insertAdjacentElement('afterend', card);
    
    // Remove the original elements
    elementsToMove.forEach(element => {
      element.remove();
    });
  });
});
