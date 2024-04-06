document.addEventListener('DOMContentLoaded', () => {
  let lazyImages = document.querySelectorAll('.lazy-load');
  let imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let img = entry.target;
        img.src = img.getAttribute('data-src');
        observer.unobserve(img); // Stop observing the image once it's loaded.
      } else {
        // Adjust priority based on connection speed or other criteria
        adjustLoadingPriority(entry.target);
      }
    });
  }, {
    rootMargin: '500px 0px', // Start loading images 500px before they enter the viewport
    threshold: 0.01
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
});

function adjustLoadingPriority(img) {
  if (navigator.connection) {
    switch (navigator.connection.effectiveType) {
      case '4g':
        // High priority - load immediately
        img.src = img.getAttribute('data-src');
        break;
      case '3g':
        // Medium priority - maybe load
        break;
      case '2g':
      case 'slow-2g':
        // Low priority - delay loading
        break;
    }
  }
}
