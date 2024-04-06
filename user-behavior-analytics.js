document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.content-section');
  const sectionVisibilityStartTimes = {};
  const observedSections = new Set();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;

      if (entry.isIntersecting) {
        // Mark the start time if not already marked
        if (!sectionVisibilityStartTimes[id]) {
          sectionVisibilityStartTimes[id] = Date.now();
          observedSections.add(id);
        }
      } else {
        // Calculate duration and log it if the section was previously observed
        if (observedSections.has(id)) {
          const duration = Date.now() - sectionVisibilityStartTimes[id];
          console.log(`${id} was visible for ${duration} milliseconds`);
          // Reset or remove from observed to prevent duplicate logs
          delete sectionVisibilityStartTimes[id];
          observedSections.delete(id);
          // Here, you might send this data to your analytics backend
        }
      }
    });
  }, {
    threshold: 0.5 // Consider a section 'viewed' when 50% is visible
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});
