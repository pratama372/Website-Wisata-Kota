// funcion slide gambar di hero
const heroSection = document.querySelector('.hero');
const images = [
    'assets/kecaksunset.jpeg',
    'assets/sawahubud.jpeg',
    'assets/klingkingbeach.jpeg',
    'assets/tamanujung2.jpeg',
    'assets/danaubatur2.jpeg',
    'assets/pantailovina2.jpeg'
  ];

let current = 0;

function changeBackground() {
  heroSection.style.backgroundImage = `url(${images[current]})`;
  current = (current + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 3000);


// function slider galeri
const slider = document.querySelector('.gallery-grid');
slider.innerHTML += slider.innerHTML;