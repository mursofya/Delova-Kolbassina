const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
