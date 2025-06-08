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
        coords: [ -8.4156,  115.3187],  // Coordinates for Pura Tirta Empul
        title: "Pura Tirta Empul",
        desc: "Pura pembersihan diri yang terkenal dengan mata air sucinya, tempat ritual melukat (mandi suci). Lokasi di Tampaksiring."
    },
    {
        coords: [-8.4269, 115.2763],  // Coordinates for Tegallalang Rice Terrace
        title: "Sawah Terasering Tegallalang",
        desc: "Pemandangan sawah berundak yang spektakuler, contoh sempurna sistem subak warisan UNESCO."
    },
    {
        coords: [-8.5238, 115.2879],  // Coordinates for Goa Gajah
        title: "Goa Gajah",
        desc: "Situs arkeologi abad ke-11 dengan gua batu yang diukir dan kolam pemandian kuno. Terletak di Desa Bedulu."
    },
    {
        coords: [-8.5069, 115.2620],  // Coordinates for Ubud Art Market
        title: "Pasar Seni Ubud",
        desc: "Pasar tradisional yang menjual berbagai kerajinan tangan, seni, dan oleh-oleh khas Bali. Buka setiap hari di jantung Ubud."
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