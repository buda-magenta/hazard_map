---
layout: page
title: "Outbreak location: Nimach"
---
<div style="width: 100%; overflow: auto;">
<div style="width: 75%; float: left;">
<div id="mapid">
<script src="https://buda-magenta.github.io/hazard_map/load_map.js"></script>

<script>
var marker_outbreak = L.marker([24.462465, 74.850114],{"autoPan": true}).addTo(map); marker_outbreak.bindTooltip("Nimach").openTooltip();

var circle_1 = L.circle([24.265131, 75.387182], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 113483, "stroke": true, "weight": 3}).addTo(map);
circle_1.bindTooltip("Mandsaur<br>rank: 1<br>hazard index: 0.113483")
circle_1.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mandsaur">Mandsaur</a>')

var circle_2 = L.circle([24.500000, 74.500000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 66657, "stroke": true, "weight": 3}).addTo(map);
circle_2.bindTooltip("Chittaurgarh<br>rank: 2<br>hazard index: 0.066657")
circle_2.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chittaurgarh">Chittaurgarh</a>')

var circle_3 = L.circle([24.578721, 73.686257], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 45006, "stroke": true, "weight": 3}).addTo(map);
circle_3.bindTooltip("Udaipur<br>rank: 3<br>hazard index: 0.045007")
circle_3.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Udaipur">Udaipur</a>')

var circle_4 = L.circle([23.480592, 74.917790], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43414, "stroke": true, "weight": 3}).addTo(map);
circle_4.bindTooltip("Ratlam<br>rank: 4<br>hazard index: 0.043415")
circle_4.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ratlam">Ratlam</a>')

var circle_5 = L.circle([25.196826, 76.000893], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 33351, "stroke": true, "weight": 3}).addTo(map);
circle_5.bindTooltip("Kota<br>rank: 5<br>hazard index: 0.033351")
circle_5.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kota">Kota</a>')

var circle_6 = L.circle([25.488773, 74.699613], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 23465, "stroke": true, "weight": 3}).addTo(map);
circle_6.bindTooltip("Bhilwara<br>rank: 6<br>hazard index: 0.023466")
circle_6.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhilwara">Bhilwara</a>')

var circle_7 = L.circle([23.174597, 75.785142], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 12940, "stroke": true, "weight": 3}).addTo(map);
circle_7.bindTooltip("Ujjain<br>rank: 7<br>hazard index: 0.012941")
circle_7.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ujjain">Ujjain</a>')

var circle_8 = L.circle([25.604091, 73.415609], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5692, "stroke": true, "weight": 3}).addTo(map);
circle_8.bindTooltip("Pali<br>rank: 8<br>hazard index: 0.005693")
circle_8.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pali">Pali</a>')

var circle_9 = L.circle([22.720362, 75.868200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5134, "stroke": true, "weight": 3}).addTo(map);
circle_9.bindTooltip("Indore<br>rank: 9<br>hazard index: 0.005135")
circle_9.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Indore">Indore</a>')

var circle_10 = L.circle([26.099214, 74.312704], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3612, "stroke": true, "weight": 3}).addTo(map);
circle_10.bindTooltip("Beawar<br>rank: 10<br>hazard index: 0.003613")
circle_10.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Beawar">Beawar</a>')

var circle_11 = L.circle([26.915458, 75.818982], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3274, "stroke": true, "weight": 3}).addTo(map);
circle_11.bindTooltip("Jaipur<br>rank: 11<br>hazard index: 0.003274")
circle_11.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jaipur">Jaipur</a>')

var circle_12 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2934, "stroke": true, "weight": 3}).addTo(map);
circle_12.bindTooltip("Delhi<br>rank: 12<br>hazard index: 0.002934")
circle_12.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Delhi">Delhi</a>')

var circle_13 = L.circle([25.500000, 75.833333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2322, "stroke": true, "weight": 3}).addTo(map);
circle_13.bindTooltip("Bundi<br>rank: 13<br>hazard index: 0.002322")
circle_13.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bundi">Bundi</a>')

var circle_14 = L.circle([26.469100, 74.639000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2263, "stroke": true, "weight": 3}).addTo(map);
circle_14.bindTooltip("Ajmer<br>rank: 14<br>hazard index: 0.002263")
circle_14.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ajmer">Ajmer</a>')

var circle_15 = L.circle([24.917151, 76.696403], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2209, "stroke": true, "weight": 3}).addTo(map);
circle_15.bindTooltip("Baran<br>rank: 15<br>hazard index: 0.002209")
circle_15.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baran">Baran</a>')

var circle_16 = L.circle([23.258486, 77.401989], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1704, "stroke": true, "weight": 3}).addTo(map);
circle_16.bindTooltip("Bhopal<br>rank: 16<br>hazard index: 0.001705")
circle_16.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhopal">Bhopal</a>')

var circle_17 = L.circle([19.075990, 72.877393], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1559, "stroke": true, "weight": 3}).addTo(map);
circle_17.bindTooltip("Mumbai<br>rank: 17<br>hazard index: 0.001559")
circle_17.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mumbai">Mumbai</a>')

var circle_18 = L.circle([23.587548, 75.675679], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1386, "stroke": true, "weight": 3}).addTo(map);
circle_18.bindTooltip("Nagda<br>rank: 18<br>hazard index: 0.001387")
circle_18.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagda">Nagda</a>')

var circle_19 = L.circle([26.296772, 73.035143], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1350, "stroke": true, "weight": 3}).addTo(map);
circle_19.bindTooltip("Jodhpur<br>rank: 19<br>hazard index: 0.001351")
circle_19.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jodhpur">Jodhpur</a>')

var circle_20 = L.circle([24.935635, 82.647701], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 781, "stroke": true, "weight": 3}).addTo(map);
circle_20.bindTooltip("Mirzapur<br>rank: 20<br>hazard index: 0.000782")
circle_20.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mirzapur">Mirzapur</a>')

var circle_21 = L.circle([26.229141, 76.304533], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 762, "stroke": true, "weight": 3}).addTo(map);
circle_21.bindTooltip("Sawai Madhopur<br>rank: 21<br>hazard index: 0.000762")
circle_21.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sawai_Madhopur">Sawai Madhopur</a>')

var circle_22 = L.circle([23.493079, 74.348402], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 657, "stroke": true, "weight": 3}).addTo(map);
circle_22.bindTooltip("Banswara<br>rank: 22<br>hazard index: 0.000658")
circle_22.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Banswara">Banswara</a>')

var circle_23 = L.circle([25.531031, 78.652689], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 483, "stroke": true, "weight": 3}).addTo(map);
circle_23.bindTooltip("Jhansi<br>rank: 23<br>hazard index: 0.000483")
circle_23.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jhansi">Jhansi</a>')

var circle_24 = L.circle([23.000000, 76.166667], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 441, "stroke": true, "weight": 3}).addTo(map);
circle_24.bindTooltip("Dewas<br>rank: 24<br>hazard index: 0.000442")
circle_24.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dewas">Dewas</a>')

var circle_25 = L.circle([24.500000, 77.500000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 367, "stroke": true, "weight": 3}).addTo(map);
circle_25.bindTooltip("Guna<br>rank: 25<br>hazard index: 0.000368")
circle_25.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guna">Guna</a>')

var circle_26 = L.circle([23.160894, 79.949770], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 308, "stroke": true, "weight": 3}).addTo(map);
circle_26.bindTooltip("Jabalpur<br>rank: 26<br>hazard index: 0.000308")
circle_26.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jabalpur">Jabalpur</a>')

var circle_27 = L.circle([23.021624, 72.579707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 275, "stroke": true, "weight": 3}).addTo(map);
circle_27.bindTooltip("Ahmedabad<br>rank: 27<br>hazard index: 0.000276")
circle_27.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmedabad">Ahmedabad</a>')

var circle_28 = L.circle([26.203725, 78.157363], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 267, "stroke": true, "weight": 3}).addTo(map);
circle_28.bindTooltip("Gwalior<br>rank: 28<br>hazard index: 0.000267")
circle_28.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gwalior">Gwalior</a>')

var circle_29 = L.circle([26.838100, 80.934600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 218, "stroke": true, "weight": 3}).addTo(map);
circle_29.bindTooltip("Lucknow<br>rank: 29<br>hazard index: 0.000219")
circle_29.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Lucknow">Lucknow</a>')

var circle_30 = L.circle([26.653396, 77.624206], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 214, "stroke": true, "weight": 3}).addTo(map);
circle_30.bindTooltip("Dhaulpur<br>rank: 30<br>hazard index: 0.000214")
circle_30.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dhaulpur">Dhaulpur</a>')

var circle_31 = L.circle([21.170200, 72.831100], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 179, "stroke": true, "weight": 3}).addTo(map);
circle_31.bindTooltip("Surat<br>rank: 31<br>hazard index: 0.000179")
circle_31.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Surat">Surat</a>')

var circle_32 = L.circle([28.015929, 73.317137], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 172, "stroke": true, "weight": 3}).addTo(map);
circle_32.bindTooltip("Bikaner<br>rank: 32<br>hazard index: 0.000172")
circle_32.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bikaner">Bikaner</a>')

var circle_33 = L.circle([17.388786, 78.461065], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 138, "stroke": true, "weight": 3}).addTo(map);
circle_33.bindTooltip("Hyderabad<br>rank: 33<br>hazard index: 0.000139")
circle_33.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hyderabad">Hyderabad</a>')

var circle_34 = L.circle([26.122147, 75.663754], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 137, "stroke": true, "weight": 3}).addTo(map);
circle_34.bindTooltip("Tonk<br>rank: 34<br>hazard index: 0.000138")
circle_34.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tonk">Tonk</a>')

var circle_35 = L.circle([27.175255, 78.009816], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 137, "stroke": true, "weight": 3}).addTo(map);
circle_35.bindTooltip("Agra<br>rank: 35<br>hazard index: 0.000137")
circle_35.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Agra">Agra</a>')

var circle_36 = L.circle([26.460914, 80.321759], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 129, "stroke": true, "weight": 3}).addTo(map);
circle_36.bindTooltip("Kanpur<br>rank: 36<br>hazard index: 0.000130")
circle_36.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kanpur">Kanpur</a>')

var circle_37 = L.circle([12.979120, 77.591300], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 126, "stroke": true, "weight": 3}).addTo(map);
circle_37.bindTooltip("Bangalore<br>rank: 37<br>hazard index: 0.000126")
circle_37.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bangalore">Bangalore</a>')

var circle_38 = L.circle([21.818774, 75.606458], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 121, "stroke": true, "weight": 3}).addTo(map);
circle_38.bindTooltip("Khargone<br>rank: 38<br>hazard index: 0.000121")
circle_38.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Khargone">Khargone</a>')

var circle_39 = L.circle([13.083694, 80.270186], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 120, "stroke": true, "weight": 3}).addTo(map);
circle_39.bindTooltip("Chennai<br>rank: 39<br>hazard index: 0.000120")
circle_39.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chennai">Chennai</a>')

var circle_40 = L.circle([25.375241, 77.828119], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 115, "stroke": true, "weight": 3}).addTo(map);
circle_40.bindTooltip("Shivpuri<br>rank: 40<br>hazard index: 0.000116")
circle_40.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Shivpuri">Shivpuri</a>')

var circle_41 = L.circle([22.541418, 88.357691], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 113, "stroke": true, "weight": 3}).addTo(map);
circle_41.bindTooltip("Kolkata<br>rank: 41<br>hazard index: 0.000113")
circle_41.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolkata">Kolkata</a>')

var circle_42 = L.circle([23.223288, 72.649227], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 104, "stroke": true, "weight": 3}).addTo(map);
circle_42.bindTooltip("Gandhinagar<br>rank: 42<br>hazard index: 0.000104")
circle_42.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gandhinagar">Gandhinagar</a>')

var circle_43 = L.circle([23.666667, 72.500000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 99, "stroke": true, "weight": 3}).addTo(map);
circle_43.bindTooltip("Mahesana<br>rank: 43<br>hazard index: 0.000099")
circle_43.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mahesana">Mahesana</a>')

var circle_44 = L.circle([23.115688, 77.066239], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 98, "stroke": true, "weight": 3}).addTo(map);
circle_44.bindTooltip("Sehore<br>rank: 44<br>hazard index: 0.000099")
circle_44.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sehore">Sehore</a>')

var circle_45 = L.circle([23.809612, 78.759114], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 95, "stroke": true, "weight": 3}).addTo(map);
circle_45.bindTooltip("Sagar<br>rank: 45<br>hazard index: 0.000096")
circle_45.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sagar">Sagar</a>')

var circle_46 = L.circle([19.194329, 72.970178], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 87, "stroke": true, "weight": 3}).addTo(map);
circle_46.bindTooltip("Thane<br>rank: 46<br>hazard index: 0.000087")
circle_46.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thane">Thane</a>')

var circle_47 = L.circle([26.588559, 74.861097], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 86, "stroke": true, "weight": 3}).addTo(map);
circle_47.bindTooltip("Kishangarh<br>rank: 47<br>hazard index: 0.000087")
circle_47.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kishangarh">Kishangarh</a>')

var circle_48 = L.circle([24.197443, 82.666145], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 83, "stroke": true, "weight": 3}).addTo(map);
circle_48.bindTooltip("Singrauli<br>rank: 48<br>hazard index: 0.000083")
circle_48.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Singrauli">Singrauli</a>')

var circle_49 = L.circle([24.170979, 72.436638], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 82, "stroke": true, "weight": 3}).addTo(map);
circle_49.bindTooltip("Palanpur<br>rank: 49<br>hazard index: 0.000083")
circle_49.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Palanpur">Palanpur</a>')

var circle_50 = L.circle([23.833962, 80.392456], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 77, "stroke": true, "weight": 3}).addTo(map);
circle_50.bindTooltip("Murwara<br>rank: 50<br>hazard index: 0.000078")
circle_50.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Murwara">Murwara</a>')

var circle_51 = L.circle([24.268349, 72.204387], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 75, "stroke": true, "weight": 3}).addTo(map);
circle_51.bindTooltip("Deesa<br>rank: 51<br>hazard index: 0.000075")
circle_51.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Deesa">Deesa</a>')

var circle_52 = L.circle([22.297314, 73.194257], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 65, "stroke": true, "weight": 3}).addTo(map);
circle_52.bindTooltip("Vadodara<br>rank: 52<br>hazard index: 0.000065")
circle_52.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vadodara">Vadodara</a>')

var circle_53 = L.circle([18.521428, 73.854454], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 65, "stroke": true, "weight": 3}).addTo(map);
circle_53.bindTooltip("Pune<br>rank: 53<br>hazard index: 0.000065")
circle_53.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pune">Pune</a>')

var circle_54 = L.circle([27.662826, 75.027926], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 63, "stroke": true, "weight": 3}).addTo(map);
circle_54.bindTooltip("Sikar<br>rank: 54<br>hazard index: 0.000063")
circle_54.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sikar">Sikar</a>')

var circle_55 = L.circle([22.305199, 70.802833], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 62, "stroke": true, "weight": 3}).addTo(map);
circle_55.bindTooltip("Rajkot<br>rank: 55<br>hazard index: 0.000062")
circle_55.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rajkot">Rajkot</a>')

var circle_56 = L.circle([25.609324, 85.123525], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 61, "stroke": true, "weight": 3}).addTo(map);
circle_56.bindTooltip("Patna<br>rank: 56<br>hazard index: 0.000062")
circle_56.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Patna">Patna</a>')

var circle_57 = L.circle([23.916667, 78.000000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 59, "stroke": true, "weight": 3}).addTo(map);
circle_57.bindTooltip("Vidisha<br>rank: 57<br>hazard index: 0.000060")
circle_57.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vidisha">Vidisha</a>')

var circle_58 = L.circle([22.778500, 73.624516], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 50, "stroke": true, "weight": 3}).addTo(map);
circle_58.bindTooltip("Godhra<br>rank: 58<br>hazard index: 0.000051")
circle_58.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Godhra">Godhra</a>')

var circle_59 = L.circle([28.428262, 77.002700], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 50, "stroke": true, "weight": 3}).addTo(map);
circle_59.bindTooltip("Gurgaon<br>rank: 59<br>hazard index: 0.000050")
circle_59.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gurgaon">Gurgaon</a>')

var circle_60 = L.circle([25.438130, 81.833800], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 49, "stroke": true, "weight": 3}).addTo(map);
circle_60.bindTooltip("Allahabad<br>rank: 60<br>hazard index: 0.000050")
circle_60.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Allahabad">Allahabad</a>')

var circle_61 = L.circle([27.060786, 74.176675], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 49, "stroke": true, "weight": 3}).addTo(map);
circle_61.bindTooltip("Nagaur<br>rank: 61<br>hazard index: 0.000049")
circle_61.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagaur">Nagaur</a>')

var circle_62 = L.circle([27.639077, 76.614452], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 49, "stroke": true, "weight": 3}).addTo(map);
circle_62.bindTooltip("Alwar<br>rank: 62<br>hazard index: 0.000049")
circle_62.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Alwar">Alwar</a>')

var circle_63 = L.circle([24.700385, 78.518668], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 45, "stroke": true, "weight": 3}).addTo(map);
circle_63.bindTooltip("Lalitpur<br>rank: 63<br>hazard index: 0.000045")
circle_63.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Lalitpur">Lalitpur</a>')

var circle_64 = L.circle([23.750000, 79.583333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43, "stroke": true, "weight": 3}).addTo(map);
circle_64.bindTooltip("Damoh<br>rank: 64<br>hazard index: 0.000044")
circle_64.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Damoh">Damoh</a>')

var circle_65 = L.circle([26.166667, 77.500000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 41, "stroke": true, "weight": 3}).addTo(map);
circle_65.bindTooltip("Morena<br>rank: 65<br>hazard index: 0.000041")
circle_65.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Morena">Morena</a>')

var circle_66 = L.circle([25.335649, 83.007629], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 40, "stroke": true, "weight": 3}).addTo(map);
circle_66.bindTooltip("Varanasi<br>rank: 66<br>hazard index: 0.000041")
circle_66.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Varanasi">Varanasi</a>')

var circle_67 = L.circle([26.732501, 77.036312], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 39, "stroke": true, "weight": 3}).addTo(map);
circle_67.bindTooltip("Hindaun<br>rank: 67<br>hazard index: 0.000040")
circle_67.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hindaun">Hindaun</a>')

var circle_68 = L.circle([27.265212, 77.369126], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 39, "stroke": true, "weight": 3}).addTo(map);
circle_68.bindTooltip("Bharatpur<br>rank: 68<br>hazard index: 0.000040")
circle_68.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bharatpur">Bharatpur</a>')

var circle_69 = L.circle([28.402979, 77.310384], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 38, "stroke": true, "weight": 3}).addTo(map);
circle_69.bindTooltip("Faridabad<br>rank: 69<br>hazard index: 0.000038")
circle_69.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Faridabad">Faridabad</a>')

var circle_70 = L.circle([28.457876, 79.405571], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 37, "stroke": true, "weight": 3}).addTo(map);
circle_70.bindTooltip("Bareilly<br>rank: 70<br>hazard index: 0.000038")
circle_70.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bareilly">Bareilly</a>')

var circle_71 = L.circle([21.977864, 76.568828], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_71.bindTooltip("Khandwa<br>rank: 71<br>hazard index: 0.000037")
circle_71.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Khandwa">Khandwa</a>')

var circle_72 = L.circle([27.633333, 77.583333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 35, "stroke": true, "weight": 3}).addTo(map);
circle_72.bindTooltip("Mathura<br>rank: 72<br>hazard index: 0.000035")
circle_72.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mathura">Mathura</a>')

var circle_73 = L.circle([28.206144, 74.691907], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 31, "stroke": true, "weight": 3}).addTo(map);
circle_73.bindTooltip("Churu<br>rank: 73<br>hazard index: 0.000032")
circle_73.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Churu">Churu</a>')

var circle_74 = L.circle([28.901090, 76.580194], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 30, "stroke": true, "weight": 3}).addTo(map);
circle_74.bindTooltip("Rohtak<br>rank: 74<br>hazard index: 0.000030")
circle_74.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rohtak">Rohtak</a>')

var circle_75 = L.circle([29.168807, 75.746110], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 28, "stroke": true, "weight": 3}).addTo(map);
circle_75.bindTooltip("Hisar<br>rank: 75<br>hazard index: 0.000029")
circle_75.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hisar">Hisar</a>')

var circle_76 = L.circle([30.909016, 75.851601], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 26, "stroke": true, "weight": 3}).addTo(map);
circle_76.bindTooltip("Ludhiana<br>rank: 76<br>hazard index: 0.000027")
circle_76.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ludhiana">Ludhiana</a>')

var circle_77 = L.circle([28.863842, 78.805778], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 26, "stroke": true, "weight": 3}).addTo(map);
circle_77.bindTooltip("Moradabad<br>rank: 77<br>hazard index: 0.000026")
circle_77.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Moradabad">Moradabad</a>')

var circle_78 = L.circle([28.195647, 76.616518], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 25, "stroke": true, "weight": 3}).addTo(map);
circle_78.bindTooltip("Rewari<br>rank: 78<br>hazard index: 0.000026")
circle_78.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rewari">Rewari</a>')

var circle_79 = L.circle([29.000653, 77.768229], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 25, "stroke": true, "weight": 3}).addTo(map);
circle_79.bindTooltip("Meerut<br>rank: 79<br>hazard index: 0.000026")
circle_79.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Meerut">Meerut</a>')

var circle_80 = L.circle([22.473242, 70.055210], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 25, "stroke": true, "weight": 3}).addTo(map);
circle_80.bindTooltip("Jamnagar<br>rank: 80<br>hazard index: 0.000026")
circle_80.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jamnagar">Jamnagar</a>')

var circle_81 = L.circle([21.149813, 79.082056], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 25, "stroke": true, "weight": 3}).addTo(map);
circle_81.bindTooltip("Nagpur<br>rank: 81<br>hazard index: 0.000025")
circle_81.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagpur">Nagpur</a>')

var circle_82 = L.circle([22.610318, 73.461706], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 23, "stroke": true, "weight": 3}).addTo(map);
circle_82.bindTooltip("Kalol<br>rank: 82<br>hazard index: 0.000023")
circle_82.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kalol">Kalol</a>')

var circle_83 = L.circle([25.280733, 83.125128], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 22, "stroke": true, "weight": 3}).addTo(map);
circle_83.bindTooltip("Mughal Sarai<br>rank: 83<br>hazard index: 0.000023")
circle_83.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mughal_Sarai">Mughal Sarai</a>')

var circle_84 = L.circle([18.627929, 73.800983], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 21, "stroke": true, "weight": 3}).addTo(map);
circle_84.bindTooltip("Pimpri Chinchwad<br>rank: 84<br>hazard index: 0.000022")
circle_84.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pimpri_Chinchwad">Pimpri Chinchwad</a>')

var circle_85 = L.circle([20.993276, 75.839983], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 21, "stroke": true, "weight": 3}).addTo(map);
circle_85.bindTooltip("Bhusawal<br>rank: 85<br>hazard index: 0.000021")
circle_85.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhusawal">Bhusawal</a>')

var circle_86 = L.circle([20.011247, 73.790236], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 21, "stroke": true, "weight": 3}).addTo(map);
circle_86.bindTooltip("Nashik<br>rank: 86<br>hazard index: 0.000021")
circle_86.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nashik">Nashik</a>')

var circle_87 = L.circle([26.500000, 78.750000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 19, "stroke": true, "weight": 3}).addTo(map);
circle_87.bindTooltip("Bhind<br>rank: 87<br>hazard index: 0.000020")
circle_87.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhind">Bhind</a>')

var circle_88 = L.circle([29.988077, 77.508130], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 19, "stroke": true, "weight": 3}).addTo(map);
circle_88.bindTooltip("Saharanpur<br>rank: 88<br>hazard index: 0.000020")
circle_88.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Saharanpur">Saharanpur</a>')

var circle_89 = L.circle([21.237947, 81.633683], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 19, "stroke": true, "weight": 3}).addTo(map);
circle_89.bindTooltip("Raipur<br>rank: 89<br>hazard index: 0.000020")
circle_89.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raipur">Raipur</a>')

var circle_90 = L.circle([19.439885, 72.880383], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 18, "stroke": true, "weight": 3}).addTo(map);
circle_90.bindTooltip("Vasai<br>rank: 90<br>hazard index: 0.000019")
circle_90.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vasai">Vasai</a>')

var circle_91 = L.circle([15.398403, 73.812918], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 17, "stroke": true, "weight": 3}).addTo(map);
circle_91.bindTooltip("Vasco Da Gama<br>rank: 91<br>hazard index: 0.000018")
circle_91.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vasco_Da_Gama">Vasco Da Gama</a>')

var circle_92 = L.circle([27.876990, 78.137290], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 16, "stroke": true, "weight": 3}).addTo(map);
circle_92.bindTooltip("Aligarh<br>rank: 92<br>hazard index: 0.000017")
circle_92.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Aligarh">Aligarh</a>')

var circle_93 = L.circle([29.003314, 77.016732], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 16, "stroke": true, "weight": 3}).addTo(map);
circle_93.bindTooltip("Sonipat<br>rank: 93<br>hazard index: 0.000017")
circle_93.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sonipat">Sonipat</a>')

var circle_94 = L.circle([22.600150, 77.926645], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 16, "stroke": true, "weight": 3}).addTo(map);
circle_94.bindTooltip("Hoshangabad<br>rank: 94<br>hazard index: 0.000017")
circle_94.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hoshangabad">Hoshangabad</a>')

var circle_95 = L.circle([23.774057, 71.683735], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 16, "stroke": true, "weight": 3}).addTo(map);
circle_95.bindTooltip("Patan<br>rank: 95<br>hazard index: 0.000017")
circle_95.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Patan">Patan</a>')

var circle_96 = L.circle([28.733400, 77.298600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 16, "stroke": true, "weight": 3}).addTo(map);
circle_96.bindTooltip("Loni<br>rank: 96<br>hazard index: 0.000017")
circle_96.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Loni">Loni</a>')

var circle_97 = L.circle([22.383333, 82.133333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 16, "stroke": true, "weight": 3}).addTo(map);
circle_97.bindTooltip("Bilaspur<br>rank: 97<br>hazard index: 0.000016")
circle_97.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bilaspur">Bilaspur</a>')

var circle_98 = L.circle([23.071874, 70.131715], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 15, "stroke": true, "weight": 3}).addTo(map);
circle_98.bindTooltip("Gandhidham<br>rank: 98<br>hazard index: 0.000016")
circle_98.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gandhidham">Gandhidham</a>')

var circle_99 = L.circle([30.733442, 76.779714], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 15, "stroke": true, "weight": 3}).addTo(map);
circle_99.bindTooltip("Chandigarh<br>rank: 99<br>hazard index: 0.000016")
circle_99.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chandigarh">Chandigarh</a>')

var circle_100 = L.circle([31.634308, 74.873679], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 13, "stroke": true, "weight": 3}).addTo(map);
circle_100.bindTooltip("Amritsar<br>rank: 100<br>hazard index: 0.000013")
circle_100.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Amritsar">Amritsar</a>')
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
<td><a href="https://buda-magenta.github.io/hazard_map/Mandsaur">Mandsaur</a></td>
</tr>

<tr>
<td>2</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Chittaurgarh">Chittaurgarh</a></td>
</tr>

<tr>
<td>3</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Udaipur">Udaipur</a></td>
</tr>

<tr>
<td>4</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Ratlam">Ratlam</a></td>
</tr>

<tr>
<td>5</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Kota">Kota</a></td>
</tr>

<tr>
<td>6</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Bhilwara">Bhilwara</a></td>
</tr>

<tr>
<td>7</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Ujjain">Ujjain</a></td>
</tr>

<tr>
<td>8</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Pali">Pali</a></td>
</tr>

<tr>
<td>9</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Indore">Indore</a></td>
</tr>

<tr>
<td>10</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Beawar">Beawar</a></td>
</tr>

</table>
</div>
</div>


<p align="left">This hazard map shows top-100 cities that are at most risk if an infectious disease breaks out at Nimach. The size of red circle indicates the relative magnitude of risk. Bigger the circle, more the risk. The table on the side highlights the list of top-10 cities that are at most risk. Smaller the rank, more the risk. Thus, rank 3 is more at risk compared to rank 4, and so on.You can also click on any city to make that city an outbreak location. You will get a new hazard map with the chosen city/town as outbreak location.
</p>