// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }
});

// Menambahkan smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Hero image slider
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(index) {
    heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
}

// Menambahkan mengubah slide
setInterval(nextSlide, 5000);

// Menambahkan scroll map zoom tanpa zoom control
const map = L.map('mapid', {
    center: [-8.38, 114.68], 
    zoom: 11,
    scrollWheelZoom: true,
    zoomControl: false
});

// Menambahkan tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Menambahkan icon custom
const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Menambahkan marker koordinat untuk objek wisata
const markers = [
    {
        coords: [-8.418808, 114.805054], // Pantai Medewi
        title: "Pantai Medewi",
        desc: "Pantai dengan ombak panjang yang populer di kalangan peselancar"
    }, 
    {
        coords: [-8.340500, 114.568000], // Taman Nasional Bali Barat
        title: "Taman Nasional Bali Barat",
        desc: "Kawasan konservasi alam yang melindungi flora dan fauna endemik Bali"
    },
    {
        coords: [-8.382600, 114.649300], // Sangkaragung
        title: "Sangkaragung",
        desc: "Desa nelayan tradisional dengan pantai berpasir hitam yang indah"
    },];