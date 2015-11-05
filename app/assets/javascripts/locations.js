$(document).on('ready page:load', function(event) {
  // get data from view 
  var mapDiv = document.getElementById('map');
  var locations = mapDiv.dataset.locations;
  locations = JSON.parse(locations);

  // create map
  var map = L.map('map');

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets'
  }).addTo(map);

  //create pins
  for (var i = 0; i < locations.length; i++) {
    L.marker([parseFloat(locations[i][0]) , parseFloat(locations[i][1])]).addTo(map);
  };

  // center the map on the first marker in the list
  // TODO: make all markers show up, even the ones in New York
  map.setView([parseFloat(locations[0][0]) , parseFloat(locations[0][1])], 10);
});