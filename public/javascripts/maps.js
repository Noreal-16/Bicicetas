/**
var mymap = L.map('mapid').setView([-3.9977806, -79.2024518], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
 */
var map = L.map('mapid').setView([-3.9977806, -79.2024518], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



$.ajax({
    dataType: "json",
    url: "http://localhost:9000/api/bicicleta",
    success: function(resultado) {
        console.log('**************************');
        console.log(resultado);
        console.log('**************************');
        resultado.bicicletas.forEach(function(bici) {
            L.marker(bici.ubicacion, { title: bici.id }).addTo(map);

        });
    }
});