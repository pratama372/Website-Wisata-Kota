// Menambahkan header scroll effect
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
    center: [-8.18, 115.10], // Adjusted center point for better view of all locations
    zoom: 10,
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
        coords: [-8.09876, 114.51448], // Pulau Menjangan
        title: "Pulau Menjangan",
        desc: "Pulau kecil di Taman Nasional Bali Barat dengan terumbu karang spektakuler dan biota laut yang kaya"
    },
    {
        coords: [-8.24490, 115.12300], // Danau Buyan
        title: "Danau Buyan",
        desc: "Danau vulkanik yang dikelilingi hutan hijau subur dengan udara sejuk"
    },
    {
        coords: [-8.14927, 115.03999], // Pantai Lovina
        title: "Pantai Lovina",
        desc: "Pantai dengan pasir hitam yang tenang, terkenal dengan atraksi lumba-lumba di pagi hari"
    }, 
    {
        coords: [-8.17760, 115.18255], // Air Terjun Sekumpul
        title: "Air Terjun Sekumpul",
        desc: "Air terjun tertinggi di Bali dengan ketinggian sekitar 80 meter, dikelilingi hutan tropis"
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

// Menambah toggle menu mobile
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}