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

// Add custom icon
const customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const markers = [
  {
    coords: [-8.3525, 115.1389], // Desa Wisata Jatiluwih
    title: "Desa Wisata Jatiluwih",
    desc: "Warisan Dunia UNESCO dengan panorama sawah berundak yang spektakuler dan sistem subak tradisional.",
  },
  {
    coords: [-8.2744, 115.1661], // Pura Ulun Danu Beratan
    title: "Pura Ulun Danu Beratan",
    desc: "Kuil air ikonik di tepi Danau Beratan dengan arsitektur megah yang seolah mengapung di atas air.",
  },
  {
    coords: [-8.4439, 114.8894], // Pantai Soka
    title: "Pantai Soka",
    desc: "Pantai tersembunyi dengan tebing karang dramatis dan pasir hitam vulkanik di Bali Barat.",
  },
  {
    coords: [-8.275, 115.165], // Kebun Raya Bali
    title: "Kebun Raya Bali",
    desc: "Kebun botani seluas 157 hektar di Bedugul dengan koleksi lebih dari 2,000 jenis tanaman tropis.",
  },
];
// Add markers to map
markers.forEach((marker) => {
  L.marker(marker.coords, { icon: customIcon })
    .addTo(map)
    .bindPopup(`<b>${marker.title}</b><br>${marker.desc}`);
});

// Fit map to show all markers with padding
const markerGroup = new L.featureGroup(markers.map((m) => L.marker(m.coords)));
map.fitBounds(markerGroup.getBounds().pad(0.2));