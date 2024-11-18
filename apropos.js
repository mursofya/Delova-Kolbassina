const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');  // Переключаем класс 'open' для открытия и закрытия меню
});