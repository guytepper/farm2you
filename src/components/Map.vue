<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet';
let farms = [
    {
      type: 'Feature',
      properties: {
        "name": 'משק בן יהודה'
      },
      geometry: {
        type: 'Point',
        coordinates: [34.894993399999976, 32.3397543]
      }
    },
    {
      type: 'Feature',
      properties: {
        "name": 'הגינה האורגנית'
      },
      geometry: {
        type: 'Point',
        coordinates: [34.89038110000001, 32.3383156]
      }
    }
  ];
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
    L.geoJSON(farms, {
      onEachFeature: function(feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name);
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
