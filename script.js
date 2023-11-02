const images = [
    'assets/sideImage1.png', // Add your image URLs here
    'assets/sideImage2.png',
    'assets/sideImage3.png',
  ];

  let currentImageIndex = 0;
  const slideshowElement = document.getElementById('slideshow');

  function updateSlideshow() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideshowElement.src = images[currentImageIndex];
  }

  // Start the slideshow and set the interval to switch images every second (1000ms)
  setInterval(updateSlideshow, 2000);