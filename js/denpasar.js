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
