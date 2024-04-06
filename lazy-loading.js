document.addEventListener('DOMContentLoaded', function() {
  let lazyImages = document.querySelectorAll('.lazy-load');
  let imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let image = entry.target;
        image.src = image.getAttribute('data-src');
        image.onload = () => image.removeAttribute('data-src');
        observer.unobserve(image);
      }
    });
  });

  lazyImages.forEach(image => {
    imageObserver.observe(image);
  });
});
