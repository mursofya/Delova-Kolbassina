const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index, direction) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'next', 'prev');

        if (i === index) {
            slide.classList.add('active');
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add(direction === 'left' ? 'prev' : 'next');
        } else if (i === (index + 1) % slides.length) {
            slide.classList.add(direction === 'right' ? 'next' : 'prev');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide, 'right');
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide, 'left');
}

showSlide(currentSlide, 'right');