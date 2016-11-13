<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet';
let farm = {
  type: 'Feature',
  properties: {
    "amenity": "Baseball Stadium",
    "popupContent": "This is where the Rockies play!",
    "name": 'My cool farm'
  },
  geometry: {
    type: 'Point',
    coordinates: [34.894993399999976, 32.3397543]}
}

export default {
  name: 'mymap',
  mounted: function() {
    var mymap = L.map('map').setView([32.3397543, 34.894], 13);
    // var mymap = L.map('map').setView([-104.99404, 39.75621], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiZ3V5dGVwcGVyIiwiYSI6ImNpdmdwcHB3YjAwNmkyenA0NTd5Nng1N2IifQ.Zk6lVem6vQDq5_UKuk-zBg'
      }).addTo(mymap);
    L.geoJSON(farm, {
      onEachFeature: function(feature, layer) {
        if (feature.properties && feature.properties.popupContent) {
          layer.bindPopup(feature.properties.popupContent);
        }
      }
    }).addTo(mymap);
  }
}
</script>

<style lang="css">
#map {
  height: 500px;
}
</style>
