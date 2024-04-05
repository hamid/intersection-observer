# Intersection Observer API
Show some examples of The Intersection Observer: as the key to faster element tracking


# Lazy-Loading of Resources
Lazy-loading is a strategy to delay loading of non-critical resources at page load time. Instead, these resources are loaded at the moment they are needed, which might be when they enter the viewport. This approach can significantly reduce initial page load time, lower data usage for users, and decrease resource consumption on servers. For images and videos, this means the browser will only fetch them when the user scrolls near them, rather than loading all media assets upfront when the page loads.

Code Example
Here's a basic example of how to implement lazy-loading for images using the *Intersection Observer API*:
```html
<img class="lazy-load" data-src="path/to/image1.jpg" alt="A beautiful scene">
<img class="lazy-load" data-src="path/to/image2.jpg" alt="Another beautiful scene">
<!-- More lazy-load images -->
```
```js
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

```
### How It Works
**HTML**: Each img element has a class of lazy-load and uses a data-src attribute for the image URL instead of the src attribute. This prevents the browser from loading the images immediately.

**JavaScript**:
- An IntersectionObserver is created with a callback function that iterates over all observed entries.
- If an entry is intersecting (visible within the viewport), the src attribute of the image is set to the value of the data-src attribute, which triggers the loading of the image.
- Once the image is loaded, the data-src attribute is removed, and the image is unobserved to stop further intersection checks.
By only loading images as they become visible, this method significantly improves the page load time and overall performance, especially on websites with a large number of images or media files.
