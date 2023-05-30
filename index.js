const images = document.querySelectorAll('.main-image img');

const setImagesSize = () => {
  const firstImageHeight = images[0].clientHeight;
  const containerWidth = document.querySelector('.gallery').clientWidth;
  const imageWidth = containerWidth / 3;

  images.forEach(image => {
    image.style.height = `${firstImageHeight}px`;
    image.style.width = `${imageWidth}px`;
  });
};

window.addEventListener('resize', setImagesSize);
setImagesSize();


  
