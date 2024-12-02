const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');  // Переключаем класс 'open' для открытия и закрытия меню
});

<script>
  function togglePlay() {
    const video = document.getElementById('myVideo');
    const button = document.querySelector('.play-button');
    
    if (video.paused) {
      video.play();
      button.style.display = 'none'; // Cache le bouton pendant la lecture
    } else {
      video.pause();
      button.style.display = 'flex'; // Réaffiche le bouton en cas de pause
    }
  }
</script>
