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
    coords: [-8.6575, 115.2185],  // Museum Bali
    title: "Museum Bali",
    desc: "Museum sejarah dan budaya Bali dengan koleksi arkeologi, seni, dan etnografi. Terletak di pusat kota Denpasar."
  },
  {
    coords: [-8.6830, 115.2670],  // Pantai Sanur
    title: "Pantai Sanur",
    desc: "Pantai tenang yang cocok untuk melihat matahari terbit dan aktivitas keluarga. Favorit wisatawan lokal dan mancanegara."
  },
  {
    coords: [-8.6564, 115.2122],  // Pasar Badung
    title: "Pasar Badung",
    desc: "Pasar tradisional terbesar di Bali, tempat membeli oleh-oleh, kain, dan rempah khas Bali."
  },
  {
   coords: [-8.6829, 115.2359],  // I AM Bali 3D Museum & Upside Down Zone
    title: "I AM Bali 3D Museum & Upside Down Zone",
    desc: "Museum seni interaktif dengan lebih dari 100 lukisan 3D dan zona rumah terbalik. Terletak di lantai dasar Monumen Bajra Sandhi, Renon, Denpasar."
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