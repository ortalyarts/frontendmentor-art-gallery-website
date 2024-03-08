var map = L.map('map', { zoomControl: false }).setView([29.89154270032846, -81.31613017361073], 17);
// remove: , { zoomControl: false } to enable zoom buttons. It should be just ('map')
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([29.89154270032846, -81.31613017361073]).addTo(map)
    .bindPopup('Modern Art Gallery - 99 King Street');

const customMarker = document.querySelector('.leaflet-marker-pane img');
customMarker.src = "./assets/icon-location.svg";