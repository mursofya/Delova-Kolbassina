document.addEventListener('DOMContentLoaded', function(){
    let burger = document.getElementById('burger');
    burger.addEventListener('click', function(){
        burger.classList.toggle('open')
    }
}