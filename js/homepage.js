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

let isDragging = false;
let startX;
let scrollStart;
let isMoved = false;
let lastMoveX = 0;
let velocity = 0;
let momentumID;

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

slider.scrollLeft = slider.scrollWidth / 2;