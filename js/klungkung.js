// Initialize map 
const map = L.map('mapid', {
    center: [-8.6500, 115.2000], // Centered around Bali (adjusted for new locations)
    zoom: 10,
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

// Add markers for new destinations
const markers = [
    {
        coords: [-8.5393, 115.4032],  // Kertha Gosa
        title: "Kertha Gosa",
        desc: "Kompleks bangunan bersejarah di Klungkung dengan paviliun pengadilan tradisional dan langit-langit penuh lukisan wayang."
    },
    {
        coords: [-8.732337, 115.451820],  // Pantai Pasih Uug 
        title: "Pantai Pasih Uug",
        desc: "Pantai tersembunyi di balik tebing karang dengan pemandangan spektakuler, populer di kalangan peselancar."
    },
    {
        coords: [-8.7279, 115.5445],  // Nusa Penida (central area)
        title: "Nusa Penida",
        desc: "Pulau dengan pemandangan tebing dramatis, pantai berpasir putih, dan spot snorkeling terbaik di Bali."
    },
    {
        coords: [-8.5356, 115.4078],  // Desa Kamasan
        title: "Desa Kamasan",
        desc: "Desa seniman tradisional yang terkenal dengan lukisan gaya Kamasan klasik yang telah ada sejak abad ke-17."
    }
];

// Add markers to map
markers.forEach(marker => {
    L.marker(marker.coords, { icon: customIcon }).addTo(map)
        .bindPopup(`<b>${marker.title}</b><br>${marker.desc}`);
});

// Fit map to show all markers with padding
const markerGroup = new L.featureGroup(markers.map(m => L.marker(m.coords)));
map.fitBounds(markerGroup.getBounds().pad(0.2));