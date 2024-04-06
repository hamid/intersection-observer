document.addEventListener('DOMContentLoaded', function() {
  // Initialize the Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Extract the classes to add from the 'data-on-reach' attribute
        const newClassNames = entry.target.getAttribute('data-on-reach');
        newClassNames.split(' ').forEach(className => {
          entry.target.classList.add(className);
        });
        // Optionally, stop observing the element
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0 // Trigger as soon as one pixel is visible
  });

  // Attach the observer to each target element
  document.querySelectorAll('[data-on-reach]').forEach(target => {
    observer.observe(target);
  });
});
