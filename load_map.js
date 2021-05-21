    var map = L.map(
             'mapid',
             {
                 center: [20.5937, 78.9629],
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
