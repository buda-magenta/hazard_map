---
layout: page
title: "Outbreak location: Solapur"
---
<div style="width: 100%; overflow: auto;">
<div style="width: 75%; float: left;">
<div id="mapid">
<script src="https://buda-magenta.github.io/hazard_map/load_map.js"></script>

<script>
var marker_outbreak = L.marker([17.849907, 75.276320],{"autoPan": true}).addTo(map); marker_outbreak.bindTooltip("Solapur").openTooltip();

var circle_1 = L.circle([18.793568, 80.815939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 67469, "stroke": true, "weight": 3}).addTo(map);
circle_1.bindTooltip("Bijapur<br>rank: 1<br>hazard index: 0.067470")
circle_1.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bijapur">Bijapur</a>')

var circle_2 = L.circle([18.521428, 73.854454], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 55437, "stroke": true, "weight": 3}).addTo(map);
circle_2.bindTooltip("Pune<br>rank: 2<br>hazard index: 0.055438")
circle_2.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pune">Pune</a>')

var circle_3 = L.circle([12.979120, 77.591300], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 31076, "stroke": true, "weight": 3}).addTo(map);
circle_3.bindTooltip("Bangalore<br>rank: 3<br>hazard index: 0.031076")
circle_3.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bangalore">Bangalore</a>')

var circle_4 = L.circle([16.850253, 74.594888], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 28416, "stroke": true, "weight": 3}).addTo(map);
circle_4.bindTooltip("Sangli<br>rank: 4<br>hazard index: 0.028417")
circle_4.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sangli">Sangli</a>')

var circle_5 = L.circle([16.702841, 74.240533], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 23998, "stroke": true, "weight": 3}).addTo(map);
circle_5.bindTooltip("Kolhapur<br>rank: 5<br>hazard index: 0.023998")
circle_5.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolhapur">Kolhapur</a>')

var circle_6 = L.circle([17.388786, 78.461065], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 22971, "stroke": true, "weight": 3}).addTo(map);
circle_6.bindTooltip("Hyderabad<br>rank: 6<br>hazard index: 0.022971")
circle_6.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hyderabad">Hyderabad</a>')

var circle_7 = L.circle([18.351469, 76.755121], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 18213, "stroke": true, "weight": 3}).addTo(map);
circle_7.bindTooltip("Latur<br>rank: 7<br>hazard index: 0.018213")
circle_7.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Latur">Latur</a>')

var circle_8 = L.circle([18.627929, 73.800983], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 17980, "stroke": true, "weight": 3}).addTo(map);
circle_8.bindTooltip("Pimpri Chinchwad<br>rank: 8<br>hazard index: 0.017981")
circle_8.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pimpri_Chinchwad">Pimpri Chinchwad</a>')

var circle_9 = L.circle([19.075990, 72.877393], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 14130, "stroke": true, "weight": 3}).addTo(map);
circle_9.bindTooltip("Mumbai<br>rank: 9<br>hazard index: 0.014130")
circle_9.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mumbai">Mumbai</a>')

var circle_10 = L.circle([16.185317, 75.696792], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10417, "stroke": true, "weight": 3}).addTo(map);
circle_10.bindTooltip("Bagalkot<br>rank: 10<br>hazard index: 0.010418")
circle_10.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bagalkot">Bagalkot</a>')

var circle_11 = L.circle([16.695935, 74.455575], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9341, "stroke": true, "weight": 3}).addTo(map);
circle_11.bindTooltip("Ichalkaranji<br>rank: 11<br>hazard index: 0.009342")
circle_11.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ichalkaranji">Ichalkaranji</a>')

var circle_12 = L.circle([15.426365, 75.630079], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9075, "stroke": true, "weight": 3}).addTo(map);
circle_12.bindTooltip("Gadag<br>rank: 12<br>hazard index: 0.009076")
circle_12.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gadag">Gadag</a>')

var circle_13 = L.circle([12.869810, 74.843008], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8890, "stroke": true, "weight": 3}).addTo(map);
circle_13.bindTooltip("Mangalore<br>rank: 13<br>hazard index: 0.008890")
circle_13.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mangalore">Mangalore</a>')

var circle_14 = L.circle([16.083333, 77.166667], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6135, "stroke": true, "weight": 3}).addTo(map);
circle_14.bindTooltip("Raichur<br>rank: 14<br>hazard index: 0.006135")
circle_14.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raichur">Raichur</a>')

var circle_15 = L.circle([15.351838, 75.137985], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6049, "stroke": true, "weight": 3}).addTo(map);
circle_15.bindTooltip("Hubli<br>rank: 15<br>hazard index: 0.006050")
circle_15.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hubli">Hubli</a>')

var circle_16 = L.circle([13.083694, 80.270186], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5334, "stroke": true, "weight": 3}).addTo(map);
circle_16.bindTooltip("Chennai<br>rank: 16<br>hazard index: 0.005335")
circle_16.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chennai">Chennai</a>')

var circle_17 = L.circle([17.980609, 79.598212], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4228, "stroke": true, "weight": 3}).addTo(map);
circle_17.bindTooltip("Warangal<br>rank: 17<br>hazard index: 0.004229")
circle_17.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Warangal">Warangal</a>')

var circle_18 = L.circle([16.181939, 81.135130], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4026, "stroke": true, "weight": 3}).addTo(map);
circle_18.bindTooltip("Machilipatnam<br>rank: 18<br>hazard index: 0.004026")
circle_18.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Machilipatnam">Machilipatnam</a>')

var circle_19 = L.circle([18.169844, 76.117963], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3733, "stroke": true, "weight": 3}).addTo(map);
circle_19.bindTooltip("Osmanabad<br>rank: 19<br>hazard index: 0.003734")
circle_19.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Osmanabad">Osmanabad</a>')

var circle_20 = L.circle([19.250000, 74.750000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3630, "stroke": true, "weight": 3}).addTo(map);
circle_20.bindTooltip("Ahmadnagar<br>rank: 20<br>hazard index: 0.003630")
circle_20.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmadnagar">Ahmadnagar</a>')

var circle_21 = L.circle([15.857267, 74.506934], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3273, "stroke": true, "weight": 3}).addTo(map);
circle_21.bindTooltip("Belgaum<br>rank: 21<br>hazard index: 0.003273")
circle_21.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Belgaum">Belgaum</a>')

var circle_22 = L.circle([18.182992, 75.743925], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2575, "stroke": true, "weight": 3}).addTo(map);
circle_22.bindTooltip("Barshi<br>rank: 22<br>hazard index: 0.002575")
circle_22.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barshi">Barshi</a>')

var circle_23 = L.circle([12.305183, 76.655361], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2041, "stroke": true, "weight": 3}).addTo(map);
circle_23.bindTooltip("Mysore<br>rank: 23<br>hazard index: 0.002041")
circle_23.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mysore">Mysore</a>')

var circle_24 = L.circle([19.194329, 72.970178], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1994, "stroke": true, "weight": 3}).addTo(map);
circle_24.bindTooltip("Thane<br>rank: 24<br>hazard index: 0.001995")
circle_24.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thane">Thane</a>')

var circle_25 = L.circle([17.636129, 74.298278], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1777, "stroke": true, "weight": 3}).addTo(map);
circle_25.bindTooltip("Satara<br>rank: 25<br>hazard index: 0.001777")
circle_25.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Satara">Satara</a>')

var circle_26 = L.circle([19.087076, 82.023572], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1353, "stroke": true, "weight": 3}).addTo(map);
circle_26.bindTooltip("Jagdalpur<br>rank: 26<br>hazard index: 0.001353")
circle_26.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jagdalpur">Jagdalpur</a>')

var circle_27 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1175, "stroke": true, "weight": 3}).addTo(map);
circle_27.bindTooltip("Delhi<br>rank: 27<br>hazard index: 0.001175")
circle_27.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Delhi">Delhi</a>')

var circle_28 = L.circle([19.169335, 77.311013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1017, "stroke": true, "weight": 3}).addTo(map);
circle_28.bindTooltip("Nanded Waghala<br>rank: 28<br>hazard index: 0.001017")
circle_28.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nanded_Waghala">Nanded Waghala</a>')

var circle_29 = L.circle([14.466127, 75.920636], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 972, "stroke": true, "weight": 3}).addTo(map);
circle_29.bindTooltip("Davanagere<br>rank: 29<br>hazard index: 0.000972")
circle_29.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Davanagere">Davanagere</a>')

var circle_30 = L.circle([11.001812, 76.962843], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 821, "stroke": true, "weight": 3}).addTo(map);
circle_30.bindTooltip("Coimbatore<br>rank: 30<br>hazard index: 0.000821")
circle_30.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Coimbatore">Coimbatore</a>')

var circle_31 = L.circle([13.340077, 77.100621], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 794, "stroke": true, "weight": 3}).addTo(map);
circle_31.bindTooltip("Tumkur<br>rank: 31<br>hazard index: 0.000794")
circle_31.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tumkur">Tumkur</a>')

var circle_32 = L.circle([16.508759, 80.618510], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 752, "stroke": true, "weight": 3}).addTo(map);
circle_32.bindTooltip("Vijayawada<br>rank: 32<br>hazard index: 0.000752")
circle_32.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vijayawada">Vijayawada</a>')

var circle_33 = L.circle([17.166667, 77.083333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 732, "stroke": true, "weight": 3}).addTo(map);
circle_33.bindTooltip("Gulbarga<br>rank: 33<br>hazard index: 0.000732")
circle_33.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gulbarga">Gulbarga</a>')

var circle_34 = L.circle([14.475294, 78.821686], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 699, "stroke": true, "weight": 3}).addTo(map);
circle_34.bindTooltip("Kadapa<br>rank: 34<br>hazard index: 0.000700")
circle_34.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kadapa">Kadapa</a>')

var circle_35 = L.circle([11.664300, 78.146000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 687, "stroke": true, "weight": 3}).addTo(map);
circle_35.bindTooltip("Salem<br>rank: 35<br>hazard index: 0.000688")
circle_35.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Salem">Salem</a>')

var circle_36 = L.circle([20.325704, 78.116914], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 667, "stroke": true, "weight": 3}).addTo(map);
circle_36.bindTooltip("Yavatmal<br>rank: 36<br>hazard index: 0.000667")
circle_36.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Yavatmal">Yavatmal</a>')

var circle_37 = L.circle([15.631900, 77.275900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 571, "stroke": true, "weight": 3}).addTo(map);
circle_37.bindTooltip("Adoni<br>rank: 37<br>hazard index: 0.000571")
circle_37.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Adoni">Adoni</a>')

var circle_38 = L.circle([8.576971, 77.050125], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 515, "stroke": true, "weight": 3}).addTo(map);
circle_38.bindTooltip("Thiruvananthapuram<br>rank: 38<br>hazard index: 0.000516")
circle_38.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thiruvananthapuram">Thiruvananthapuram</a>')

var circle_39 = L.circle([20.843512, 75.525927], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 487, "stroke": true, "weight": 3}).addTo(map);
circle_39.bindTooltip("Jalgaon<br>rank: 39<br>hazard index: 0.000488")
circle_39.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalgaon">Jalgaon</a>')

var circle_40 = L.circle([15.143395, 76.919388], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 469, "stroke": true, "weight": 3}).addTo(map);
circle_40.bindTooltip("Bellary<br>rank: 40<br>hazard index: 0.000470")
circle_40.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bellary">Bellary</a>')

var circle_41 = L.circle([15.119651, 77.455290], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 452, "stroke": true, "weight": 3}).addTo(map);
circle_41.bindTooltip("Guntakal<br>rank: 41<br>hazard index: 0.000453")
circle_41.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guntakal">Guntakal</a>')

var circle_42 = L.circle([17.723128, 83.301284], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 443, "stroke": true, "weight": 3}).addTo(map);
circle_42.bindTooltip("Visakhapatnam<br>rank: 42<br>hazard index: 0.000444")
circle_42.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Visakhapatnam">Visakhapatnam</a>')

var circle_43 = L.circle([14.422347, 77.720069], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 430, "stroke": true, "weight": 3}).addTo(map);
circle_43.bindTooltip("Dharmavaram<br>rank: 43<br>hazard index: 0.000431")
circle_43.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dharmavaram">Dharmavaram</a>')

var circle_44 = L.circle([19.290314, 76.602903], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 430, "stroke": true, "weight": 3}).addTo(map);
circle_44.bindTooltip("Parbhani<br>rank: 44<br>hazard index: 0.000430")
circle_44.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Parbhani">Parbhani</a>')

var circle_45 = L.circle([11.258608, 75.778874], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 403, "stroke": true, "weight": 3}).addTo(map);
circle_45.bindTooltip("Kozhikode<br>rank: 45<br>hazard index: 0.000404")
circle_45.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kozhikode">Kozhikode</a>')

var circle_46 = L.circle([12.955100, 78.269900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 394, "stroke": true, "weight": 3}).addTo(map);
circle_46.bindTooltip("Robertson Pet<br>rank: 46<br>hazard index: 0.000395")
circle_46.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Robertson_Pet">Robertson Pet</a>')

var circle_47 = L.circle([9.926115, 78.114098], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 388, "stroke": true, "weight": 3}).addTo(map);
circle_47.bindTooltip("Madurai<br>rank: 47<br>hazard index: 0.000389")
circle_47.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Madurai">Madurai</a>')

var circle_48 = L.circle([26.055318, 82.993139], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 384, "stroke": true, "weight": 3}).addTo(map);
circle_48.bindTooltip("Nizamabad<br>rank: 48<br>hazard index: 0.000385")
circle_48.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nizamabad">Nizamabad</a>')

var circle_49 = L.circle([16.432998, 80.993715], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 381, "stroke": true, "weight": 3}).addTo(map);
circle_49.bindTooltip("Gudivada<br>rank: 49<br>hazard index: 0.000382")
circle_49.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gudivada">Gudivada</a>')

var circle_50 = L.circle([14.654623, 77.556260], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 371, "stroke": true, "weight": 3}).addTo(map);
circle_50.bindTooltip("Anantapur<br>rank: 50<br>hazard index: 0.000371")
circle_50.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Anantapur">Anantapur</a>')

var circle_51 = L.circle([23.021624, 72.579707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 364, "stroke": true, "weight": 3}).addTo(map);
circle_51.bindTooltip("Ahmedabad<br>rank: 51<br>hazard index: 0.000364")
circle_51.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmedabad">Ahmedabad</a>')

var circle_52 = L.circle([11.101781, 77.345192], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 343, "stroke": true, "weight": 3}).addTo(map);
circle_52.bindTooltip("Tiruppur<br>rank: 52<br>hazard index: 0.000344")
circle_52.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tiruppur">Tiruppur</a>')

var circle_53 = L.circle([21.149813, 79.082056], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 334, "stroke": true, "weight": 3}).addTo(map);
circle_53.bindTooltip("Nagpur<br>rank: 53<br>hazard index: 0.000334")
circle_53.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagpur">Nagpur</a>')

var circle_54 = L.circle([16.743454, 77.992319], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 322, "stroke": true, "weight": 3}).addTo(map);
circle_54.bindTooltip("Mahbubnagar<br>rank: 54<br>hazard index: 0.000322")
circle_54.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mahbubnagar">Mahbubnagar</a>')

var circle_55 = L.circle([19.439885, 72.880383], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 317, "stroke": true, "weight": 3}).addTo(map);
circle_55.bindTooltip("Vasai<br>rank: 55<br>hazard index: 0.000318")
circle_55.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vasai">Vasai</a>')

var circle_56 = L.circle([12.523889, 76.896196], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 316, "stroke": true, "weight": 3}).addTo(map);
circle_56.bindTooltip("Mandya<br>rank: 56<br>hazard index: 0.000317")
circle_56.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mandya">Mandya</a>')

var circle_57 = L.circle([22.541418, 88.357691], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 315, "stroke": true, "weight": 3}).addTo(map);
circle_57.bindTooltip("Kolkata<br>rank: 57<br>hazard index: 0.000315")
circle_57.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolkata">Kolkata</a>')

var circle_58 = L.circle([21.170200, 72.831100], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 310, "stroke": true, "weight": 3}).addTo(map);
circle_58.bindTooltip("Surat<br>rank: 58<br>hazard index: 0.000310")
circle_58.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Surat">Surat</a>')

var circle_59 = L.circle([15.830925, 78.042537], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 306, "stroke": true, "weight": 3}).addTo(map);
circle_59.bindTooltip("Kurnool<br>rank: 59<br>hazard index: 0.000306")
circle_59.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kurnool">Kurnool</a>')

var circle_60 = L.circle([17.910400, 77.519900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 286, "stroke": true, "weight": 3}).addTo(map);
circle_60.bindTooltip("Bidar<br>rank: 60<br>hazard index: 0.000286")
circle_60.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bidar">Bidar</a>')

var circle_61 = L.circle([18.761516, 79.478785], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 278, "stroke": true, "weight": 3}).addTo(map);
circle_61.bindTooltip("Ramagundam<br>rank: 61<br>hazard index: 0.000279")
circle_61.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ramagundam">Ramagundam</a>')

var circle_62 = L.circle([10.804973, 78.687030], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 277, "stroke": true, "weight": 3}).addTo(map);
circle_62.bindTooltip("Tiruchirappalli<br>rank: 62<br>hazard index: 0.000278")
circle_62.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tiruchirappalli">Tiruchirappalli</a>')

var circle_63 = L.circle([12.732884, 77.830948], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 265, "stroke": true, "weight": 3}).addTo(map);
circle_63.bindTooltip("Hosur<br>rank: 63<br>hazard index: 0.000265")
circle_63.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hosur">Hosur</a>')

var circle_64 = L.circle([16.291519, 80.454159], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 263, "stroke": true, "weight": 3}).addTo(map);
circle_64.bindTooltip("Guntur<br>rank: 64<br>hazard index: 0.000263")
circle_64.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guntur">Guntur</a>')

var circle_65 = L.circle([25.335649, 83.007629], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 244, "stroke": true, "weight": 3}).addTo(map);
circle_65.bindTooltip("Varanasi<br>rank: 65<br>hazard index: 0.000245")
circle_65.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Varanasi">Varanasi</a>')

var circle_66 = L.circle([8.887951, 76.595501], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 239, "stroke": true, "weight": 3}).addTo(map);
circle_66.bindTooltip("Kollam<br>rank: 66<br>hazard index: 0.000239")
circle_66.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kollam">Kollam</a>')

var circle_67 = L.circle([15.266493, 76.387230], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 236, "stroke": true, "weight": 3}).addTo(map);
circle_67.bindTooltip("Hospet<br>rank: 67<br>hazard index: 0.000237")
circle_67.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hospet">Hospet</a>')

var circle_68 = L.circle([14.625888, 75.635724], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 235, "stroke": true, "weight": 3}).addTo(map);
circle_68.bindTooltip("Ranibennur<br>rank: 68<br>hazard index: 0.000236")
circle_68.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ranibennur">Ranibennur</a>')

var circle_69 = L.circle([16.676135, 81.170868], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 227, "stroke": true, "weight": 3}).addTo(map);
circle_69.bindTooltip("Eluru<br>rank: 69<br>hazard index: 0.000228")
circle_69.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Eluru">Eluru</a>')

var circle_70 = L.circle([25.438130, 81.833800], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 227, "stroke": true, "weight": 3}).addTo(map);
circle_70.bindTooltip("Allahabad<br>rank: 70<br>hazard index: 0.000227")
circle_70.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Allahabad">Allahabad</a>')

var circle_71 = L.circle([19.261944, 73.194760], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 225, "stroke": true, "weight": 3}).addTo(map);
circle_71.bindTooltip("Ulhas Nagar<br>rank: 71<br>hazard index: 0.000225")
circle_71.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ulhas_Nagar">Ulhas Nagar</a>')

var circle_72 = L.circle([19.918233, 75.868625], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 225, "stroke": true, "weight": 3}).addTo(map);
circle_72.bindTooltip("Jalna<br>rank: 72<br>hazard index: 0.000225")
circle_72.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalna">Jalna</a>')

var circle_73 = L.circle([15.431506, 76.532774], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 219, "stroke": true, "weight": 3}).addTo(map);
circle_73.bindTooltip("Gangawati<br>rank: 73<br>hazard index: 0.000220")
circle_73.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gangawati">Gangawati</a>')

var circle_74 = L.circle([10.525626, 76.213254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 216, "stroke": true, "weight": 3}).addTo(map);
circle_74.bindTooltip("Thrissur<br>rank: 74<br>hazard index: 0.000216")
circle_74.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thrissur">Thrissur</a>')

var circle_75 = L.circle([23.160894, 79.949770], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 214, "stroke": true, "weight": 3}).addTo(map);
circle_75.bindTooltip("Jabalpur<br>rank: 75<br>hazard index: 0.000214")
circle_75.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jabalpur">Jabalpur</a>')

var circle_76 = L.circle([19.295200, 72.854400], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 213, "stroke": true, "weight": 3}).addTo(map);
circle_76.bindTooltip("Mira-Bhayandar<br>rank: 76<br>hazard index: 0.000214")
circle_76.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mira-Bhayandar">Mira-Bhayandar</a>')

var circle_77 = L.circle([13.137000, 78.133961], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 203, "stroke": true, "weight": 3}).addTo(map);
circle_77.bindTooltip("Kolar<br>rank: 77<br>hazard index: 0.000204")
circle_77.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolar">Kolar</a>')

var circle_78 = L.circle([8.188047, 77.429049], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 203, "stroke": true, "weight": 3}).addTo(map);
circle_78.bindTooltip("Nagercoil<br>rank: 78<br>hazard index: 0.000203")
circle_78.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagercoil">Nagercoil</a>')

var circle_79 = L.circle([14.906956, 78.009707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 200, "stroke": true, "weight": 3}).addTo(map);
circle_79.bindTooltip("Tadipatri<br>rank: 79<br>hazard index: 0.000201")
circle_79.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tadipatri">Tadipatri</a>')

var circle_80 = L.circle([15.398403, 73.812918], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 199, "stroke": true, "weight": 3}).addTo(map);
circle_80.bindTooltip("Vasco Da Gama<br>rank: 80<br>hazard index: 0.000199")
circle_80.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vasco_Da_Gama">Vasco Da Gama</a>')

var circle_81 = L.circle([19.362531, 73.078475], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 198, "stroke": true, "weight": 3}).addTo(map);
circle_81.bindTooltip("Bhiwandi<br>rank: 81<br>hazard index: 0.000199")
circle_81.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhiwandi">Bhiwandi</a>')

var circle_82 = L.circle([20.011247, 73.790236], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 195, "stroke": true, "weight": 3}).addTo(map);
circle_82.bindTooltip("Nashik<br>rank: 82<br>hazard index: 0.000196")
circle_82.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nashik">Nashik</a>')

var circle_83 = L.circle([13.631637, 79.423171], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 194, "stroke": true, "weight": 3}).addTo(map);
circle_83.bindTooltip("Tirupati<br>rank: 83<br>hazard index: 0.000194")
circle_83.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tirupati">Tirupati</a>')

var circle_84 = L.circle([13.007082, 76.099270], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 182, "stroke": true, "weight": 3}).addTo(map);
circle_84.bindTooltip("Hassan<br>rank: 84<br>hazard index: 0.000182")
circle_84.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hassan">Hassan</a>')

var circle_85 = L.circle([20.761862, 77.192172], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 175, "stroke": true, "weight": 3}).addTo(map);
circle_85.bindTooltip("Akola<br>rank: 85<br>hazard index: 0.000175")
circle_85.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Akola">Akola</a>')

var circle_86 = L.circle([13.932609, 75.574978], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 167, "stroke": true, "weight": 3}).addTo(map);
circle_86.bindTooltip("Shimoga<br>rank: 86<br>hazard index: 0.000168")
circle_86.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Shimoga">Shimoga</a>')

var circle_87 = L.circle([18.434644, 79.132265], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 166, "stroke": true, "weight": 3}).addTo(map);
circle_87.bindTooltip("Karimnagar<br>rank: 87<br>hazard index: 0.000167")
circle_87.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Karimnagar">Karimnagar</a>')

var circle_88 = L.circle([13.341917, 74.747323], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 162, "stroke": true, "weight": 3}).addTo(map);
circle_88.bindTooltip("Udupi<br>rank: 88<br>hazard index: 0.000162")
circle_88.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Udupi">Udupi</a>')

var circle_89 = L.circle([9.931308, 76.267414], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 145, "stroke": true, "weight": 3}).addTo(map);
circle_89.bindTooltip("Kochi<br>rank: 89<br>hazard index: 0.000146")
circle_89.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kochi">Kochi</a>')

var circle_90 = L.circle([18.437436, 77.110521], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 142, "stroke": true, "weight": 3}).addTo(map);
circle_90.bindTooltip("Udgir<br>rank: 90<br>hazard index: 0.000143")
circle_90.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Udgir">Udgir</a>')

var circle_91 = L.circle([19.143607, 73.295535], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 130, "stroke": true, "weight": 3}).addTo(map);
circle_91.bindTooltip("Ambarnath<br>rank: 91<br>hazard index: 0.000131")
circle_91.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ambarnath">Ambarnath</a>')

var circle_92 = L.circle([16.857964, 79.217494], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 124, "stroke": true, "weight": 3}).addTo(map);
circle_92.bindTooltip("Nalgonda<br>rank: 92<br>hazard index: 0.000125")
circle_92.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nalgonda">Nalgonda</a>')

var circle_93 = L.circle([20.266777, 85.843559], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 124, "stroke": true, "weight": 3}).addTo(map);
circle_93.bindTooltip("Bhubaneswar<br>rank: 93<br>hazard index: 0.000124")
circle_93.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhubaneswar">Bhubaneswar</a>')

var circle_94 = L.circle([11.369204, 77.676627], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 123, "stroke": true, "weight": 3}).addTo(map);
circle_94.bindTooltip("Erode<br>rank: 94<br>hazard index: 0.000123")
circle_94.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Erode">Erode</a>')

var circle_95 = L.circle([22.297314, 73.194257], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 115, "stroke": true, "weight": 3}).addTo(map);
circle_95.bindTooltip("Vadodara<br>rank: 95<br>hazard index: 0.000116")
circle_95.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vadodara">Vadodara</a>')

var circle_96 = L.circle([8.701220, 77.579269], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 109, "stroke": true, "weight": 3}).addTo(map);
circle_96.bindTooltip("Tirunelveli<br>rank: 96<br>hazard index: 0.000109")
circle_96.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tirunelveli">Tirunelveli</a>')

var circle_97 = L.circle([17.500000, 80.333333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 104, "stroke": true, "weight": 3}).addTo(map);
circle_97.bindTooltip("Khammam<br>rank: 97<br>hazard index: 0.000104")
circle_97.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Khammam">Khammam</a>')

var circle_98 = L.circle([17.005045, 81.780473], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 103, "stroke": true, "weight": 3}).addTo(map);
circle_98.bindTooltip("Rajahmundry<br>rank: 98<br>hazard index: 0.000103")
circle_98.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rajahmundry">Rajahmundry</a>')

var circle_99 = L.circle([16.870988, 79.561398], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 95, "stroke": true, "weight": 3}).addTo(map);
circle_99.bindTooltip("Miryalaguda<br>rank: 99<br>hazard index: 0.000096")
circle_99.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Miryalaguda">Miryalaguda</a>')

var circle_100 = L.circle([25.531031, 78.652689], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 95, "stroke": true, "weight": 3}).addTo(map);
circle_100.bindTooltip("Jhansi<br>rank: 100<br>hazard index: 0.000095")
circle_100.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jhansi">Jhansi</a>')
</script>
</div>
</div>


<div style="width: 20%; float: right;">
<table>
<tr>
<th>Rank</th>
<th>City</th>
</tr>

<tr>
<td>1</td>
<td>Bijapur</td>
</tr>

<tr>
<td>2</td>
<td>Pune</td>
</tr>

<tr>
<td>3</td>
<td>Bangalore</td>
</tr>

<tr>
<td>4</td>
<td>Sangli</td>
</tr>

<tr>
<td>5</td>
<td>Kolhapur</td>
</tr>

<tr>
<td>6</td>
<td>Hyderabad</td>
</tr>

<tr>
<td>7</td>
<td>Latur</td>
</tr>

<tr>
<td>8</td>
<td>Pimpri Chinchwad</td>
</tr>

<tr>
<td>9</td>
<td>Mumbai</td>
</tr>

<tr>
<td>10</td>
<td>Bagalkot</td>
</tr>

</table>
</div>
</div>


<p align="center">This hazard map shows top-100 cities that are at most risk if an infectious disease breaks out at Solapur. The size of red circle indicates the relative magnitude of risk. Bigger the circle, more the risk. The table on the side highlights the list of top-10 cities that are at most risk. Smaller the rank, more the risk. Thus, rank 3 is more at risk compared to rank 4, and so on.You can also click on any city to make that city an outbreak location. You will get a new hazard map with the chosen city/town as outbreak location.
</p>