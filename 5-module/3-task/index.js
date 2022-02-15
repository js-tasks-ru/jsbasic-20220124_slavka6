
function initCarousel() {
  const innerDiv = document.querySelector('.carousel__inner');
  const leftArrow = document.querySelector('.carousel__arrow_left');
  const rightArrow = document.querySelector('.carousel__arrow_right');
  let slide = 0;
  let lastSlide = document.querySelectorAll('.carousel__slide').length;
  leftArrow.style.display = 'none';
  
  rightArrow.addEventListener('click', () => { 
    innerDiv.style.transform = `translateX(-${(slide + 1) * innerDiv.offsetWidth}px)`;
    slide += 1;
  leftArrow.style.display = '';
    if(slide === lastSlide - 1) {
      rightArrow.style.display = 'none';
    }
  });

  leftArrow.addEventListener('click', () => {
    innerDiv.style.transform = `translateX(-${(slide - 1) * innerDiv.offsetWidth}px)`;
    slide -= 1;
    rightArrow.style.display = '';
    if(slide === 0) {
      leftArrow.style.display = 'none';
    }
  });
}
