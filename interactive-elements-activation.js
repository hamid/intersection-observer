document.addEventListener('DOMContentLoaded', () => {
  const chatbot = document.getElementById('chatbot');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // Chatbot icon enters the dormant state when not in viewport
        chatbot.classList.remove('active');
        chatbot.classList.add('dormant');
      } else {
        // Activate the chatbot icon when it comes into view
        chatbot.classList.remove('dormant');
        chatbot.classList.add('active');
      }
    });
  }, {
    root: null, // observing relative to viewport
    threshold: 0.5 // Half of the element's visibility triggers the callback
  });

  // Assuming the chatbot becomes relevant only after the user scrolls down a bit
  observer.observe(document.getElementById('footer'));
});
