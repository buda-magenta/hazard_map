---
layout: page
title: "Outbreak location: Parbhani"
---
<div style="width: 100%; overflow: auto;">
<div style="width: 75%; float: left;">
<div id="mapid">
<script src="https://buda-magenta.github.io/hazard_map/load_map.js"></script>

<script>
var marker_outbreak = L.marker([19.290314, 76.602903],{"autoPan": true}).addTo(map); marker_outbreak.bindTooltip("Parbhani").openTooltip();

var circle_1 = L.circle([19.169335, 77.311013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 121492, "stroke": true, "weight": 3}).addTo(map);
circle_1.bindTooltip("Nanded Waghala<br>rank: 1<br>hazard index: 0.121493")
circle_1.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nanded_Waghala">Nanded Waghala</a>')

var circle_2 = L.circle([19.918233, 75.868625], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 93838, "stroke": true, "weight": 3}).addTo(map);
circle_2.bindTooltip("Jalna<br>rank: 2<br>hazard index: 0.093839")
circle_2.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalna">Jalna</a>')

var circle_3 = L.circle([17.388786, 78.461065], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43540, "stroke": true, "weight": 3}).addTo(map);
circle_3.bindTooltip("Hyderabad<br>rank: 3<br>hazard index: 0.043540")
circle_3.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hyderabad">Hyderabad</a>')

var circle_4 = L.circle([20.761862, 77.192172], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 25529, "stroke": true, "weight": 3}).addTo(map);
circle_4.bindTooltip("Akola<br>rank: 4<br>hazard index: 0.025529")
circle_4.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Akola">Akola</a>')

var circle_5 = L.circle([19.877263, 75.339024], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 19368, "stroke": true, "weight": 3}).addTo(map);
circle_5.bindTooltip("Aurangabad<br>rank: 5<br>hazard index: 0.019368")
circle_5.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Aurangabad">Aurangabad</a>')

var circle_6 = L.circle([19.250000, 74.750000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9917, "stroke": true, "weight": 3}).addTo(map);
circle_6.bindTooltip("Ahmadnagar<br>rank: 6<br>hazard index: 0.009917")
circle_6.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmadnagar">Ahmadnagar</a>')

var circle_7 = L.circle([18.351469, 76.755121], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8332, "stroke": true, "weight": 3}).addTo(map);
circle_7.bindTooltip("Latur<br>rank: 7<br>hazard index: 0.008332")
circle_7.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Latur">Latur</a>')

var circle_8 = L.circle([20.259399, 76.976203], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7763, "stroke": true, "weight": 3}).addTo(map);
circle_8.bindTooltip("Malegaon<br>rank: 8<br>hazard index: 0.007763")
circle_8.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Malegaon">Malegaon</a>')

var circle_9 = L.circle([26.055318, 82.993139], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7275, "stroke": true, "weight": 3}).addTo(map);
circle_9.bindTooltip("Nizamabad<br>rank: 9<br>hazard index: 0.007275")
circle_9.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nizamabad">Nizamabad</a>')

var circle_10 = L.circle([19.500000, 78.500000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4915, "stroke": true, "weight": 3}).addTo(map);
circle_10.bindTooltip("Adilabad<br>rank: 10<br>hazard index: 0.004916")
circle_10.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Adilabad">Adilabad</a>')

var circle_11 = L.circle([21.365999, 74.284004], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4533, "stroke": true, "weight": 3}).addTo(map);
circle_11.bindTooltip("Nandurbar<br>rank: 11<br>hazard index: 0.004533")
circle_11.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nandurbar">Nandurbar</a>')

var circle_12 = L.circle([19.075990, 72.877393], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3611, "stroke": true, "weight": 3}).addTo(map);
circle_12.bindTooltip("Mumbai<br>rank: 12<br>hazard index: 0.003611")
circle_12.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mumbai">Mumbai</a>')

var circle_13 = L.circle([20.843512, 75.525927], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3519, "stroke": true, "weight": 3}).addTo(map);
circle_13.bindTooltip("Jalgaon<br>rank: 13<br>hazard index: 0.003520")
circle_13.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalgaon">Jalgaon</a>')

var circle_14 = L.circle([20.011247, 73.790236], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3444, "stroke": true, "weight": 3}).addTo(map);
circle_14.bindTooltip("Nashik<br>rank: 14<br>hazard index: 0.003445")
circle_14.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nashik">Nashik</a>')

var circle_15 = L.circle([18.169844, 76.117963], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2618, "stroke": true, "weight": 3}).addTo(map);
circle_15.bindTooltip("Osmanabad<br>rank: 15<br>hazard index: 0.002619")
circle_15.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Osmanabad">Osmanabad</a>')

var circle_16 = L.circle([17.910400, 77.519900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2253, "stroke": true, "weight": 3}).addTo(map);
circle_16.bindTooltip("Bidar<br>rank: 16<br>hazard index: 0.002254")
circle_16.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bidar">Bidar</a>')

var circle_17 = L.circle([18.521428, 73.854454], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2152, "stroke": true, "weight": 3}).addTo(map);
circle_17.bindTooltip("Pune<br>rank: 17<br>hazard index: 0.002153")
circle_17.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pune">Pune</a>')

var circle_18 = L.circle([18.182992, 75.743925], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2024, "stroke": true, "weight": 3}).addTo(map);
circle_18.bindTooltip("Barshi<br>rank: 18<br>hazard index: 0.002024")
circle_18.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barshi">Barshi</a>')

var circle_19 = L.circle([21.149813, 79.082056], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1984, "stroke": true, "weight": 3}).addTo(map);
circle_19.bindTooltip("Nagpur<br>rank: 19<br>hazard index: 0.001984")
circle_19.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagpur">Nagpur</a>')

var circle_20 = L.circle([20.325704, 78.116914], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1425, "stroke": true, "weight": 3}).addTo(map);
circle_20.bindTooltip("Yavatmal<br>rank: 20<br>hazard index: 0.001426")
circle_20.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Yavatmal">Yavatmal</a>')

var circle_21 = L.circle([12.979120, 77.591300], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1305, "stroke": true, "weight": 3}).addTo(map);
circle_21.bindTooltip("Bangalore<br>rank: 21<br>hazard index: 0.001305")
circle_21.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bangalore">Bangalore</a>')

var circle_22 = L.circle([20.993276, 75.839983], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1148, "stroke": true, "weight": 3}).addTo(map);
circle_22.bindTooltip("Bhusawal<br>rank: 22<br>hazard index: 0.001148")
circle_22.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhusawal">Bhusawal</a>')

var circle_23 = L.circle([18.437436, 77.110521], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1143, "stroke": true, "weight": 3}).addTo(map);
circle_23.bindTooltip("Udgir<br>rank: 23<br>hazard index: 0.001144")
circle_23.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Udgir">Udgir</a>')

var circle_24 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1015, "stroke": true, "weight": 3}).addTo(map);
circle_24.bindTooltip("Delhi<br>rank: 24<br>hazard index: 0.001016")
circle_24.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Delhi">Delhi</a>')

var circle_25 = L.circle([21.154541, 77.644296], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 984, "stroke": true, "weight": 3}).addTo(map);
circle_25.bindTooltip("Amravati<br>rank: 25<br>hazard index: 0.000984")
circle_25.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Amravati">Amravati</a>')

var circle_26 = L.circle([17.980609, 79.598212], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 950, "stroke": true, "weight": 3}).addTo(map);
circle_26.bindTooltip("Warangal<br>rank: 26<br>hazard index: 0.000951")
circle_26.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Warangal">Warangal</a>')

var circle_27 = L.circle([19.794750, 75.077922], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 855, "stroke": true, "weight": 3}).addTo(map);
circle_27.bindTooltip("Gangapur<br>rank: 27<br>hazard index: 0.000855")
circle_27.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gangapur">Gangapur</a>')

var circle_28 = L.circle([16.508759, 80.618510], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 773, "stroke": true, "weight": 3}).addTo(map);
circle_28.bindTooltip("Vijayawada<br>rank: 28<br>hazard index: 0.000773")
circle_28.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vijayawada">Vijayawada</a>')

var circle_29 = L.circle([21.145629, 80.268387], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 630, "stroke": true, "weight": 3}).addTo(map);
circle_29.bindTooltip("Gondiya<br>rank: 29<br>hazard index: 0.000630")
circle_29.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gondiya">Gondiya</a>')

var circle_30 = L.circle([16.743454, 77.992319], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 611, "stroke": true, "weight": 3}).addTo(map);
circle_30.bindTooltip("Mahbubnagar<br>rank: 30<br>hazard index: 0.000611")
circle_30.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mahbubnagar">Mahbubnagar</a>')

var circle_31 = L.circle([17.849907, 75.276320], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 598, "stroke": true, "weight": 3}).addTo(map);
circle_31.bindTooltip("Solapur<br>rank: 31<br>hazard index: 0.000599")
circle_31.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Solapur">Solapur</a>')

var circle_32 = L.circle([17.723128, 83.301284], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 595, "stroke": true, "weight": 3}).addTo(map);
circle_32.bindTooltip("Visakhapatnam<br>rank: 32<br>hazard index: 0.000596")
circle_32.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Visakhapatnam">Visakhapatnam</a>')

var circle_33 = L.circle([15.830925, 78.042537], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 580, "stroke": true, "weight": 3}).addTo(map);
circle_33.bindTooltip("Kurnool<br>rank: 33<br>hazard index: 0.000580")
circle_33.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kurnool">Kurnool</a>')

var circle_34 = L.circle([18.761516, 79.478785], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 528, "stroke": true, "weight": 3}).addTo(map);
circle_34.bindTooltip("Ramagundam<br>rank: 34<br>hazard index: 0.000529")
circle_34.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ramagundam">Ramagundam</a>')

var circle_35 = L.circle([13.083694, 80.270186], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 499, "stroke": true, "weight": 3}).addTo(map);
circle_35.bindTooltip("Chennai<br>rank: 35<br>hazard index: 0.000499")
circle_35.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chennai">Chennai</a>')

var circle_36 = L.circle([16.291519, 80.454159], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 499, "stroke": true, "weight": 3}).addTo(map);
circle_36.bindTooltip("Guntur<br>rank: 36<br>hazard index: 0.000499")
circle_36.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guntur">Guntur</a>')

var circle_37 = L.circle([25.531031, 78.652689], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 497, "stroke": true, "weight": 3}).addTo(map);
circle_37.bindTooltip("Jhansi<br>rank: 37<br>hazard index: 0.000497")
circle_37.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jhansi">Jhansi</a>')

var circle_38 = L.circle([20.030976, 79.358139], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 478, "stroke": true, "weight": 3}).addTo(map);
circle_38.bindTooltip("Chandrapur<br>rank: 38<br>hazard index: 0.000479")
circle_38.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chandrapur">Chandrapur</a>')

var circle_39 = L.circle([17.166667, 77.083333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 406, "stroke": true, "weight": 3}).addTo(map);
circle_39.bindTooltip("Gulbarga<br>rank: 39<br>hazard index: 0.000407")
circle_39.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gulbarga">Gulbarga</a>')

var circle_40 = L.circle([22.541418, 88.357691], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 356, "stroke": true, "weight": 3}).addTo(map);
circle_40.bindTooltip("Kolkata<br>rank: 40<br>hazard index: 0.000356")
circle_40.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolkata">Kolkata</a>')

var circle_41 = L.circle([16.702841, 74.240533], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 342, "stroke": true, "weight": 3}).addTo(map);
circle_41.bindTooltip("Kolhapur<br>rank: 41<br>hazard index: 0.000343")
circle_41.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolhapur">Kolhapur</a>')

var circle_42 = L.circle([19.194329, 72.970178], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 342, "stroke": true, "weight": 3}).addTo(map);
circle_42.bindTooltip("Thane<br>rank: 42<br>hazard index: 0.000343")
circle_42.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thane">Thane</a>')

var circle_43 = L.circle([16.850253, 74.594888], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 313, "stroke": true, "weight": 3}).addTo(map);
circle_43.bindTooltip("Sangli<br>rank: 43<br>hazard index: 0.000314")
circle_43.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sangli">Sangli</a>')

var circle_44 = L.circle([18.434644, 79.132265], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 275, "stroke": true, "weight": 3}).addTo(map);
circle_44.bindTooltip("Karimnagar<br>rank: 44<br>hazard index: 0.000276")
circle_44.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Karimnagar">Karimnagar</a>')

var circle_45 = L.circle([14.422347, 77.720069], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 273, "stroke": true, "weight": 3}).addTo(map);
circle_45.bindTooltip("Dharmavaram<br>rank: 45<br>hazard index: 0.000274")
circle_45.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dharmavaram">Dharmavaram</a>')

var circle_46 = L.circle([16.083333, 77.166667], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 266, "stroke": true, "weight": 3}).addTo(map);
circle_46.bindTooltip("Raichur<br>rank: 46<br>hazard index: 0.000266")
circle_46.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raichur">Raichur</a>')

var circle_47 = L.circle([20.825623, 78.613146], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 262, "stroke": true, "weight": 3}).addTo(map);
circle_47.bindTooltip("Wardha<br>rank: 47<br>hazard index: 0.000262")
circle_47.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Wardha">Wardha</a>')

var circle_48 = L.circle([16.857964, 79.217494], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 236, "stroke": true, "weight": 3}).addTo(map);
circle_48.bindTooltip("Nalgonda<br>rank: 48<br>hazard index: 0.000236")
circle_48.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nalgonda">Nalgonda</a>')

var circle_49 = L.circle([13.631637, 79.423171], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 232, "stroke": true, "weight": 3}).addTo(map);
circle_49.bindTooltip("Tirupati<br>rank: 49<br>hazard index: 0.000233")
circle_49.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tirupati">Tirupati</a>')

var circle_50 = L.circle([17.500000, 80.333333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 197, "stroke": true, "weight": 3}).addTo(map);
circle_50.bindTooltip("Khammam<br>rank: 50<br>hazard index: 0.000197")
circle_50.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Khammam">Khammam</a>')

var circle_51 = L.circle([21.170200, 72.831100], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 190, "stroke": true, "weight": 3}).addTo(map);
circle_51.bindTooltip("Surat<br>rank: 51<br>hazard index: 0.000191")
circle_51.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Surat">Surat</a>')

var circle_52 = L.circle([20.266777, 85.843559], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 182, "stroke": true, "weight": 3}).addTo(map);
circle_52.bindTooltip("Bhubaneswar<br>rank: 52<br>hazard index: 0.000182")
circle_52.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhubaneswar">Bhubaneswar</a>')

var circle_53 = L.circle([16.870988, 79.561398], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 181, "stroke": true, "weight": 3}).addTo(map);
circle_53.bindTooltip("Miryalaguda<br>rank: 53<br>hazard index: 0.000181")
circle_53.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Miryalaguda">Miryalaguda</a>')

var circle_54 = L.circle([23.258486, 77.401989], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 177, "stroke": true, "weight": 3}).addTo(map);
circle_54.bindTooltip("Bhopal<br>rank: 54<br>hazard index: 0.000178")
circle_54.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhopal">Bhopal</a>')

var circle_55 = L.circle([23.021624, 72.579707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 175, "stroke": true, "weight": 3}).addTo(map);
circle_55.bindTooltip("Ahmedabad<br>rank: 55<br>hazard index: 0.000176")
circle_55.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmedabad">Ahmedabad</a>')

var circle_56 = L.circle([17.005045, 81.780473], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 169, "stroke": true, "weight": 3}).addTo(map);
circle_56.bindTooltip("Rajahmundry<br>rank: 56<br>hazard index: 0.000169")
circle_56.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rajahmundry">Rajahmundry</a>')

var circle_57 = L.circle([14.475294, 78.821686], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 168, "stroke": true, "weight": 3}).addTo(map);
circle_57.bindTooltip("Kadapa<br>rank: 57<br>hazard index: 0.000168")
circle_57.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kadapa">Kadapa</a>')

var circle_58 = L.circle([18.627929, 73.800983], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 156, "stroke": true, "weight": 3}).addTo(map);
circle_58.bindTooltip("Pimpri Chinchwad<br>rank: 58<br>hazard index: 0.000157")
circle_58.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pimpri_Chinchwad">Pimpri Chinchwad</a>')

var circle_59 = L.circle([15.398403, 73.812918], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 139, "stroke": true, "weight": 3}).addTo(map);
circle_59.bindTooltip("Vasco Da Gama<br>rank: 59<br>hazard index: 0.000140")
circle_59.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vasco_Da_Gama">Vasco Da Gama</a>')

var circle_60 = L.circle([27.175255, 78.009816], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 131, "stroke": true, "weight": 3}).addTo(map);
circle_60.bindTooltip("Agra<br>rank: 60<br>hazard index: 0.000131")
circle_60.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Agra">Agra</a>')

var circle_61 = L.circle([31.634308, 74.873679], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 129, "stroke": true, "weight": 3}).addTo(map);
circle_61.bindTooltip("Amritsar<br>rank: 61<br>hazard index: 0.000129")
circle_61.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Amritsar">Amritsar</a>')

var circle_62 = L.circle([26.915458, 75.818982], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 127, "stroke": true, "weight": 3}).addTo(map);
circle_62.bindTooltip("Jaipur<br>rank: 62<br>hazard index: 0.000128")
circle_62.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jaipur">Jaipur</a>')

var circle_63 = L.circle([9.931308, 76.267414], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 124, "stroke": true, "weight": 3}).addTo(map);
circle_63.bindTooltip("Kochi<br>rank: 63<br>hazard index: 0.000124")
circle_63.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kochi">Kochi</a>')

var circle_64 = L.circle([25.335649, 83.007629], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 102, "stroke": true, "weight": 3}).addTo(map);
circle_64.bindTooltip("Varanasi<br>rank: 64<br>hazard index: 0.000103")
circle_64.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Varanasi">Varanasi</a>')

var circle_65 = L.circle([21.237947, 81.633683], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 97, "stroke": true, "weight": 3}).addTo(map);
circle_65.bindTooltip("Raipur<br>rank: 65<br>hazard index: 0.000097")
circle_65.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raipur">Raipur</a>')

var circle_66 = L.circle([25.438130, 81.833800], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 95, "stroke": true, "weight": 3}).addTo(map);
circle_66.bindTooltip("Allahabad<br>rank: 66<br>hazard index: 0.000095")
circle_66.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Allahabad">Allahabad</a>')

var circle_67 = L.circle([11.001812, 76.962843], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 90, "stroke": true, "weight": 3}).addTo(map);
circle_67.bindTooltip("Coimbatore<br>rank: 67<br>hazard index: 0.000090")
circle_67.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Coimbatore">Coimbatore</a>')

var circle_68 = L.circle([18.793568, 80.815939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 89, "stroke": true, "weight": 3}).addTo(map);
circle_68.bindTooltip("Bijapur<br>rank: 68<br>hazard index: 0.000090")
circle_68.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bijapur">Bijapur</a>')

var circle_69 = L.circle([15.631900, 77.275900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 89, "stroke": true, "weight": 3}).addTo(map);
circle_69.bindTooltip("Adoni<br>rank: 69<br>hazard index: 0.000090")
circle_69.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Adoni">Adoni</a>')

var circle_70 = L.circle([16.676135, 81.170868], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 82, "stroke": true, "weight": 3}).addTo(map);
circle_70.bindTooltip("Eluru<br>rank: 70<br>hazard index: 0.000082")
circle_70.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Eluru">Eluru</a>')

var circle_71 = L.circle([26.203725, 78.157363], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 80, "stroke": true, "weight": 3}).addTo(map);
circle_71.bindTooltip("Gwalior<br>rank: 71<br>hazard index: 0.000080")
circle_71.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gwalior">Gwalior</a>')

var circle_72 = L.circle([26.838100, 80.934600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 77, "stroke": true, "weight": 3}).addTo(map);
circle_72.bindTooltip("Lucknow<br>rank: 72<br>hazard index: 0.000078")
circle_72.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Lucknow">Lucknow</a>')

var circle_73 = L.circle([30.909016, 75.851601], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 76, "stroke": true, "weight": 3}).addTo(map);
circle_73.bindTooltip("Ludhiana<br>rank: 73<br>hazard index: 0.000077")
circle_73.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ludhiana">Ludhiana</a>')

var circle_74 = L.circle([14.449372, 79.987376], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 74, "stroke": true, "weight": 3}).addTo(map);
circle_74.bindTooltip("Nellore<br>rank: 74<br>hazard index: 0.000075")
circle_74.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nellore">Nellore</a>')

var circle_75 = L.circle([21.977864, 76.568828], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 71, "stroke": true, "weight": 3}).addTo(map);
circle_75.bindTooltip("Khandwa<br>rank: 75<br>hazard index: 0.000071")
circle_75.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Khandwa">Khandwa</a>')

var circle_76 = L.circle([15.119651, 77.455290], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 68, "stroke": true, "weight": 3}).addTo(map);
circle_76.bindTooltip("Guntakal<br>rank: 76<br>hazard index: 0.000068")
circle_76.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guntakal">Guntakal</a>')

var circle_77 = L.circle([26.732501, 77.036312], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 66, "stroke": true, "weight": 3}).addTo(map);
circle_77.bindTooltip("Hindaun<br>rank: 77<br>hazard index: 0.000067")
circle_77.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hindaun">Hindaun</a>')

var circle_78 = L.circle([22.720362, 75.868200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 64, "stroke": true, "weight": 3}).addTo(map);
circle_78.bindTooltip("Indore<br>rank: 78<br>hazard index: 0.000064")
circle_78.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Indore">Indore</a>')

var circle_79 = L.circle([19.439885, 72.880383], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 63, "stroke": true, "weight": 3}).addTo(map);
circle_79.bindTooltip("Vasai<br>rank: 79<br>hazard index: 0.000064")
circle_79.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vasai">Vasai</a>')

var circle_80 = L.circle([16.237773, 80.646422], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 63, "stroke": true, "weight": 3}).addTo(map);
circle_80.bindTooltip("Tenali<br>rank: 80<br>hazard index: 0.000064")
circle_80.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tenali">Tenali</a>')

var circle_81 = L.circle([12.305183, 76.655361], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 61, "stroke": true, "weight": 3}).addTo(map);
circle_81.bindTooltip("Mysore<br>rank: 81<br>hazard index: 0.000061")
circle_81.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mysore">Mysore</a>')

var circle_82 = L.circle([20.475195, 78.742396], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 61, "stroke": true, "weight": 3}).addTo(map);
circle_82.bindTooltip("Hinganghat<br>rank: 82<br>hazard index: 0.000061")
circle_82.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hinganghat">Hinganghat</a>')

var circle_83 = L.circle([26.671329, 83.364583], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 57, "stroke": true, "weight": 3}).addTo(map);
circle_83.bindTooltip("Gorakhpur<br>rank: 83<br>hazard index: 0.000057")
circle_83.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gorakhpur">Gorakhpur</a>')

var circle_84 = L.circle([25.609324, 85.123525], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 55, "stroke": true, "weight": 3}).addTo(map);
circle_84.bindTooltip("Patna<br>rank: 84<br>hazard index: 0.000056")
circle_84.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Patna">Patna</a>')

var circle_85 = L.circle([22.297314, 73.194257], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 54, "stroke": true, "weight": 3}).addTo(map);
circle_85.bindTooltip("Vadodara<br>rank: 85<br>hazard index: 0.000055")
circle_85.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vadodara">Vadodara</a>')

var circle_86 = L.circle([23.370035, 85.325013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 54, "stroke": true, "weight": 3}).addTo(map);
circle_86.bindTooltip("Ranchi<br>rank: 86<br>hazard index: 0.000054")
circle_86.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ranchi">Ranchi</a>')

var circle_87 = L.circle([14.906956, 78.009707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 52, "stroke": true, "weight": 3}).addTo(map);
circle_87.bindTooltip("Tadipatri<br>rank: 87<br>hazard index: 0.000052")
circle_87.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tadipatri">Tadipatri</a>')

var circle_88 = L.circle([28.402979, 77.310384], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 50, "stroke": true, "weight": 3}).addTo(map);
circle_88.bindTooltip("Faridabad<br>rank: 88<br>hazard index: 0.000050")
circle_88.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Faridabad">Faridabad</a>')

var circle_89 = L.circle([21.879616, 77.875681], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43, "stroke": true, "weight": 3}).addTo(map);
circle_89.bindTooltip("Betul<br>rank: 89<br>hazard index: 0.000044")
circle_89.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Betul">Betul</a>')

var circle_90 = L.circle([16.432998, 80.993715], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43, "stroke": true, "weight": 3}).addTo(map);
circle_90.bindTooltip("Gudivada<br>rank: 90<br>hazard index: 0.000044")
circle_90.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gudivada">Gudivada</a>')

var circle_91 = L.circle([19.295200, 72.854400], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 42, "stroke": true, "weight": 3}).addTo(map);
circle_91.bindTooltip("Mira-Bhayandar<br>rank: 91<br>hazard index: 0.000043")
circle_91.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mira-Bhayandar">Mira-Bhayandar</a>')

var circle_92 = L.circle([31.292011, 75.568058], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 41, "stroke": true, "weight": 3}).addTo(map);
circle_92.bindTooltip("Jalandhar<br>rank: 92<br>hazard index: 0.000041")
circle_92.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalandhar">Jalandhar</a>')

var circle_93 = L.circle([14.654623, 77.556260], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 40, "stroke": true, "weight": 3}).addTo(map);
circle_93.bindTooltip("Anantapur<br>rank: 93<br>hazard index: 0.000041")
circle_93.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Anantapur">Anantapur</a>')

var circle_94 = L.circle([8.576971, 77.050125], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 40, "stroke": true, "weight": 3}).addTo(map);
circle_94.bindTooltip("Thiruvananthapuram<br>rank: 94<br>hazard index: 0.000040")
circle_94.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thiruvananthapuram">Thiruvananthapuram</a>')

var circle_95 = L.circle([23.160894, 79.949770], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 39, "stroke": true, "weight": 3}).addTo(map);
circle_95.bindTooltip("Jabalpur<br>rank: 95<br>hazard index: 0.000039")
circle_95.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jabalpur">Jabalpur</a>')

var circle_96 = L.circle([19.261944, 73.194760], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 38, "stroke": true, "weight": 3}).addTo(map);
circle_96.bindTooltip("Ulhas Nagar<br>rank: 96<br>hazard index: 0.000039")
circle_96.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ulhas_Nagar">Ulhas Nagar</a>')

var circle_97 = L.circle([16.542769, 81.527344], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 37, "stroke": true, "weight": 3}).addTo(map);
circle_97.bindTooltip("Bhimavaram<br>rank: 97<br>hazard index: 0.000037")
circle_97.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhimavaram">Bhimavaram</a>')

var circle_98 = L.circle([19.362531, 73.078475], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 37, "stroke": true, "weight": 3}).addTo(map);
circle_98.bindTooltip("Bhiwandi<br>rank: 98<br>hazard index: 0.000037")
circle_98.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhiwandi">Bhiwandi</a>')

var circle_99 = L.circle([15.857267, 74.506934], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_99.bindTooltip("Belgaum<br>rank: 99<br>hazard index: 0.000036")
circle_99.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Belgaum">Belgaum</a>')

var circle_100 = L.circle([15.426365, 75.630079], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_100.bindTooltip("Gadag<br>rank: 100<br>hazard index: 0.000036")
circle_100.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gadag">Gadag</a>')
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
<td><a href="https://buda-magenta.github.io/hazard_map/Nanded_Waghala">Nanded Waghala</a></td>
</tr>

<tr>
<td>2</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Jalna">Jalna</a></td>
</tr>

<tr>
<td>3</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Hyderabad">Hyderabad</a></td>
</tr>

<tr>
<td>4</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Akola">Akola</a></td>
</tr>

<tr>
<td>5</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Aurangabad">Aurangabad</a></td>
</tr>

<tr>
<td>6</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Ahmadnagar">Ahmadnagar</a></td>
</tr>

<tr>
<td>7</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Latur">Latur</a></td>
</tr>

<tr>
<td>8</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Malegaon">Malegaon</a></td>
</tr>

<tr>
<td>9</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Nizamabad">Nizamabad</a></td>
</tr>

<tr>
<td>10</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Adilabad">Adilabad</a></td>
</tr>

</table>
</div>
</div>


<p align="left">This hazard map shows top-100 cities that are at most risk if an infectious disease breaks out at Parbhani. The size of red circle indicates the relative magnitude of risk. Bigger the circle, more the risk. The table on the side highlights the list of top-10 cities that are at most risk. Smaller the rank, more the risk. Thus, rank 3 is more at risk compared to rank 4, and so on.You can also click on any city to make that city an outbreak location. You will get a new hazard map with the chosen city/town as outbreak location.
</p>