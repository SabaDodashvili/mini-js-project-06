const downBtn = document.querySelector('.controls__btn_down');
const upBtn = document.querySelector('.controls__btn_up');
const sideBarSlider = document.querySelector('.sidebar-slider');
const mainSLider = document.querySelector('.main-slider');
const slidesCount = document.querySelectorAll('.main-slider__slide').length;

sideBarSlider.style.transform = `translateY(-${(slidesCount - 1) * 100}vh)`;

let slidesIndex = 0;

downBtn.addEventListener('click', () => {
  changeSlides('down');
});
upBtn.addEventListener('click', () => {
  changeSlides('up');
});

function changeSlides(direction) {
  if (direction === 'up') {
    slidesIndex++;
    if (slidesIndex === slidesCount) {
      slidesIndex = 0;
    }
  } else if (direction === 'down') {
    slidesIndex--;
    if (slidesIndex < 0) {
      slidesIndex = slidesCount - 1;
    }
  }
  mainSLider.style.transform = `translateY(-${slidesIndex * 100}vh)`;
  sideBarSlider.style.transform = `translateY(-${(slidesCount - 1 - slidesIndex) * 100}vh)`;
}
