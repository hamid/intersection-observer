document.addEventListener('DOMContentLoaded', () => {
  const sentinel = document.getElementById('sentinel');
  let isLoading = false;

  const loadMoreContent = () => {
    // Simulate asynchronous content loading
    isLoading = true;
    setTimeout(() => {
      const contentContainer = document.getElementById('content-container');
      for (let i = 0; i < 10; i++) {
        const newItem = document.createElement('div');
        newItem.textContent = 'More content ' + i;
        contentContainer.appendChild(newItem);
      }
      isLoading = false;
    }, 1000);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isLoading) {
        loadMoreContent();
      }
    });
  });

  observer.observe(sentinel);
});
