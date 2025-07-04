// Function slide gambar di hero
const heroSection = document.querySelector('.hero');
const images = [
    'assets/kecaksunset.jpeg',
    'assets/sawahubud.jpeg',
    'assets/klingkingbeach.jpeg',
    'assets/tamanujung2.jpeg',
    'assets/danaubatur2.jpeg',
    'assets/pantailovina.jpeg'
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

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  isMoved = false;
  startX = e.pageX - slider.offsetLeft;
  scrollStart = slider.scrollLeft;
  lastMoveX = e.pageX;
  velocity = 0;
  cancelAnimationFrame(momentumID);
  slider.classList.add('dragging');
});

slider.addEventListener('mouseleave', stopDragging);
slider.addEventListener('mouseup', stopDragging);

slider.addEventListener('scroll', () => {
  requestAnimationFrame(checkScrollLoop);
});

function stopDragging() {
  if (!isDragging) return;
  isDragging = false;
  slider.classList.remove('dragging');
  momentumScroll();
}

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  const now = e.pageX;
  velocity = now - lastMoveX;
  lastMoveX = now;

  if (Math.abs(walk) > 5) isMoved = true;
  slider.scrollLeft = scrollStart - walk;

  checkScrollLoop();
});

function momentumScroll() {
  if (Math.abs(velocity) < 0.5) return;
  slider.scrollLeft -= velocity;
  velocity *= 0.95;
  checkScrollLoop();
  momentumID = requestAnimationFrame(momentumScroll);
}

function checkScrollLoop() {
  const half = slider.scrollWidth / 2;
  const maxScroll = slider.scrollWidth;
  const buffer = 10;

  if (slider.scrollLeft <= buffer) {
    slider.scrollLeft = half;
  } else if (slider.scrollLeft >= maxScroll - slider.clientWidth - buffer) {
    slider.scrollLeft -= half;
  }
}

// Function(Galeri): Scroll otomatis ke kanan
let pauseAutoScroll = false;

slider.addEventListener('mouseenter', () => pauseAutoScroll = true);
slider.addEventListener('mouseleave', () => pauseAutoScroll = false);


function autoScrollRight() {
  if (!pauseAutoScroll && !isDragging) {
    slider.scrollLeft += 0.5; 
    checkScrollLoop(); 
  }
  requestAnimationFrame(autoScrollRight);
}

autoScrollRight();


// === Tambahan: Dukungan swipe mobile ===
let startTouchX = 0;

slider.addEventListener('touchstart', (e) => {
  isDragging = true;
  isMoved = false;
  startTouchX = e.touches[0].clientX;
  scrollStart = slider.scrollLeft;
  lastMoveX = e.touches[0].clientX;
  velocity = 0;
  cancelAnimationFrame(momentumID);
});

slider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const walk = currentX - startTouchX;
  velocity = currentX - lastMoveX;
  lastMoveX = currentX;

  if (Math.abs(walk) > 5) isMoved = true;

  slider.scrollLeft = scrollStart - walk;

  checkScrollLoop();
});

slider.addEventListener('touchend', () => {
  if (!isDragging) return;
  isDragging = false;
  momentumScroll();
});


// Function(Galeri): Menambahakan event klik pada gambar untuk membuka modal jika tidak sedang di drag
slider.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', (e) => {
    if (isMoved) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      modal.style.display = 'block';
      modalImg.src = img.src;
    }
  });

  img.setAttribute('draggable', 'false');
  img.addEventListener('dragstart', (e) => e.preventDefault());
});

// Function(modal):Menambahkan fungsi menutup modal saat klik tombol close atau diluar gambar
closeBtn.onclick = function() {
  modal.style.display = 'none';
}
modal.onclick = function() {
  modal.style.display = 'none';
}