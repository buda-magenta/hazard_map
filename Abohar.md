---
layout: page
title: Hazard Map India
cover-img: https://images.unsplash.com/photo-1613521084668-e54e09e77b26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80
---
<div id="mapid">
<script>
   // var map = L.map('mapid').setView([51.505, -0.09], 13);
    var map = L.map(
             'mapid',
             {
                 center: [23.5120, 83],
                 crs: L.CRS.EPSG3857,
                 zoom: 5,
                 zoomControl: true,
                 preferCanvas: false,
             });
   var layer = new L.StamenTileLayer("watercolor");
   map.addLayer(layer);

  function geo_json_styler(feature) {
         switch(feature.properties.ST_NM) {
             default:
                 return {"color": "blue", "fillColor": "white", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1.0};
         }
     }
     function geo_json_onEachFeature(feature, layer) {
         layer.on({
         });
     };
     var geo_json_layer = L.geoJson(null, {
             onEachFeature: geo_json_onEachFeature,

             style: geo_json_styler,
     });
  geo_json_layer.addTo(map);
  $.ajax({
    dataType: "json",
    url: "https://buda-magenta.github.io/hazard_map//india_states_modified1.geojson",
    success: function(data) {
      $(data.features).each(function(key, data) {
        geo_json_layer.addData(data);
      });
    }
  });
</script>
<script src="https://buda-magenta.github.io/hazard_map/IndiaMap_Abohar_100_cities.js"></script>
</div>
