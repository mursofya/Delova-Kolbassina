const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

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
