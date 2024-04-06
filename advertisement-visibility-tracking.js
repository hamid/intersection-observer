document.addEventListener('DOMContentLoaded', () => {
  const ad = document.querySelector('.ad');
  let isVisible = false;

  const adObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isVisible) {
        isVisible = true; // Mark as visible
        console.log('Ad is now visible');

        // Perform any action, such as logging the visibility event
        // logAdVisibility(); // This would be an API call or similar

        // Optionally, unobserve the ad if you only need to know once if it was visible
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Consider visible when at least 50% of the ad is in view
  });

  adObserver.observe(ad);
});
