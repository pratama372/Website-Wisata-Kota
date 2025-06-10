// Menambahkan header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }
});

// Menambahkan smooth scrolling for navigation
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

// Menambahkan hero image slider
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

// Menambahkan slide change
setInterval(nextSlide, 5000);

// Menambahkan scroll map zoom tanpa zoom control
const map = L.map('mapid', {
    center: [-8.35, 115.38], // Centered around Bangli attractions
    zoom: 11,
    scrollWheelZoom: true,
    zoomControl: false
});

// Menambahkan tile 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Menambahkan custom icon
const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Menambahkan koordinat objek wisata
const markers = [
    {
        coords: [-8.4555, 115.3636], // Desa Penglipuran (corrected)
        title: "Desa Penglipuran",
        desc: "Desa tradisional Bali yang terpelihara dengan sempurna, terkenal dengan tata letak yang rapi"
    },
    {
        coords: [-8.25833, 115.40833], // Danau Batur
        title: "Danau Batur",
        desc: "Danau vulkanik terbesar di Bali yang terletak di kaldera Gunung Batur"
    },
    {
        coords: [-8.44, 115.387], // Air Terjun Tukad Cepung
        title: "Air Terjun Tukad Cepung",
        desc: "Air terjun tersembunyi yang menakjubkan di dalam gua dengan efek cahaya magis"
    }, 
    {
        coords: [-8.239, 115.322028], // Kintamani
        title: "Kintamani",
        desc: "Kawasan dengan pemandangan Gunung Batur dan Danau Batur yang spektakuler"
    }
];

// Menambahkan marker pada map
markers.forEach(marker => {
    L.marker(marker.coords, { icon: customIcon }).addTo(map)
        .bindPopup(`<b>${marker.title}</b><br><small>${marker.desc}</small>`)
        .openPopup();
});

// Menambahkan padding ukuran map agar semua marker terlihat
const markerGroup = new L.featureGroup(markers.map(m => L.marker(m.coords)));
map.fitBounds(markerGroup.getBounds().pad(0.5));

// Menambahkan toggle menu mobile 
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}