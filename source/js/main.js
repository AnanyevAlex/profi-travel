'use strict'

// слайдер
var buttonPrevSlide = document.querySelector('.intro__slide-prev');
var buttonNextSlide = document.querySelector('.intro__slide-next');

buttonPrevSlide.addEventListener('click', function () {
	minusSlide()
})

buttonNextSlide.addEventListener('click', function () {
	plusSlide()
})

	/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
	showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
	showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
	showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("intro__slide");
	if (n > slides.length) {
	  slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

// слайдер конец

// окно регистрации
var ESC_KEY_CODE = 27;
var btnRegistr = document.querySelector('.menu-block__registr');
var modal = document.querySelector('.modal');


btnRegistr.addEventListener('click', function() {
	modal.style.display = 'block'
	document.addEventListener('keydown', closeModalOnEscClick);
})

var closeModalOnEscClick = function (e) {
    if (e.keyCode === ESC_KEY_CODE) {
      modal.style.display = 'none'
      document.removeEventListener('keydown', closeModalOnEscClick);
    }
};

// окно регистрации конец
var burgerOpen = document.querySelector('.header__burger-btn-open');
var burgerClose = document.querySelector('.header__burger-btn-close');
var headerMenuBlock = document.querySelector('.header__menu-block');

burgerOpen.addEventListener('click', function () {
	headerMenuBlock.style.display = 'block'
	document.addEventListener('keydown', closeMenulOnEscClick);
})

burgerClose.addEventListener('click', function () {
	headerMenuBlock.style.display = 'none'
})

var closeMenulOnEscClick = function (e) {
    if (e.keyCode === ESC_KEY_CODE) {
      headerMenuBlock.style.display = 'none'
      document.removeEventListener('keydown', closeMenulOnEscClick);
    }
};


// мобильное меню
