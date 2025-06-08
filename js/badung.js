// Initialize map 
const map = L.map('mapid', {
    center: [-8.5415, 115.3227],
    zoom: 12,
    scrollWheelZoom: true,
    zoomControl: false
});

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add custom icon
const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Add markers
const markers = [
  {
    coords: [-8.8004, 115.2360],  // Pantai Nusa Dua
    title: "Pantai Nusa Dua",
    desc: "Pantai berpasir putih yang tenang, dikelilingi oleh resor mewah dan cocok untuk aktivitas keluarga serta olahraga air ringan."
  },
  {
    coords: [-8.7287, 115.1712],  // Waterbom Bali
    title: "Waterbom Bali",
    desc: "Taman air kelas dunia di jantung Kuta, menawarkan berbagai seluncuran dan atraksi air yang menyenangkan untuk segala usia."
  },
  {
    coords: [-8.8289, 115.0853],  // Pura Luhur Uluwatu
    title: "Pura Luhur Uluwatu",
    desc: "Pura Hindu megah di atas tebing tinggi, terkenal dengan pemandangan sunset dan pertunjukan tari Kecak setiap sore."
  },
  {
    coords: [-8.7392, 115.1711],  // Pantai Kuta
    title: "Pantai Kuta",
    desc: "Pantai ikonik dengan ombak untuk berselancar dan area sekitar yang ramai dengan restoran, bar, dan toko oleh-oleh."
  }
];




markers.forEach(marker => {
    L.marker(marker.coords, { icon: customIcon }).addTo(map)
        .bindPopup(`<b>${marker.title}</b><br>${marker.desc}`)
        .openPopup();
});

// Fit map to show all markers
const group = new L.featureGroup(markers.map(m => L.marker(m.coords)));
map.fitBounds(group.getBounds().pad(0.2));