// Получаем элементы слайдера
const sliderM = document.querySelector('.slider-mobile');
const prevButtonM = document.querySelector('.prev-button-mobile');
const nextButtonM = document.querySelector('.next-button-mobile');
const slidesM = Array.from(sliderM.querySelectorAll('img'));
const slideMCount = slidesM.length;
let slideMIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButtonM.addEventListener('click', showPreviousSlideM);
nextButtonM.addEventListener('click', showNextSlideM);

// Функция для показа предыдущего слайда
function showPreviousSlideM() {
  slideMIndex = (slideMIndex - 1 + slideMCount) % slideMCount;
  updateSliderM();
}

// Функция для показа следующего слайда
function showNextSlideM() {
  slideMIndex = (slideMIndex + 1) % slideMCount;
  updateSliderM();
}

// Функция для обновления отображения слайдера
function updateSliderM() {
  slidesM.forEach((slide, index) => {
    if (index === slideMIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSliderM();