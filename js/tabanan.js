// Initialize map
const map = L.map("mapid", {
  center: [-8.35, 115.1], // Centered around Bali's central highlands
  zoom: 10,
  scrollWheelZoom: true,
  zoomControl: false,
});

// Add tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);