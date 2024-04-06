document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('backToTop');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        backToTopButton.classList.remove('hidden');
        backToTopButton.classList.add('visible');
        // Optionally, set focus to the button when it becomes visible
        // backToTopButton.focus();
      } else {
        backToTopButton.classList.remove('visible');
        backToTopButton.classList.add('hidden');
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1 // Adjust threshold based on requirement
  });

  // Observe a specific target, in this case, a footer or a bottom marker element
  const pageBottom = document.querySelector('#page-bottom');
  observer.observe(pageBottom);
});

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
