---
layout: page
title: "Outbreak location: Guntur"
---
<div style="width: 100%; overflow: auto;">
<div style="width: 75%; float: left;">
<div id="mapid">
<script src="https://buda-magenta.github.io/hazard_map/load_map.js"></script>

<script>
var marker_outbreak = L.marker([16.291519, 80.454159],{"autoPan": true}).addTo(map); marker_outbreak.bindTooltip("Guntur").openTooltip();

var circle_1 = L.circle([16.508759, 80.618510], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 113234, "stroke": true, "weight": 3}).addTo(map);
circle_1.bindTooltip("Vijayawada<br>rank: 1<br>hazard index: 0.113235")
circle_1.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vijayawada">Vijayawada</a>')

var circle_2 = L.circle([16.237773, 80.646422], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 99876, "stroke": true, "weight": 3}).addTo(map);
circle_2.bindTooltip("Tenali<br>rank: 2<br>hazard index: 0.099877")
circle_2.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tenali">Tenali</a>')

var circle_3 = L.circle([17.388786, 78.461065], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 46726, "stroke": true, "weight": 3}).addTo(map);
circle_3.bindTooltip("Hyderabad<br>rank: 3<br>hazard index: 0.046726")
circle_3.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hyderabad">Hyderabad</a>')

var circle_4 = L.circle([17.723128, 83.301284], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 16958, "stroke": true, "weight": 3}).addTo(map);
circle_4.bindTooltip("Visakhapatnam<br>rank: 4<br>hazard index: 0.016958")
circle_4.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Visakhapatnam">Visakhapatnam</a>')

var circle_5 = L.circle([16.238924, 80.047288], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 11559, "stroke": true, "weight": 3}).addTo(map);
circle_5.bindTooltip("Narasaraopet<br>rank: 5<br>hazard index: 0.011559")
circle_5.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Narasaraopet">Narasaraopet</a>')

var circle_6 = L.circle([16.094950, 80.165878], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9670, "stroke": true, "weight": 3}).addTo(map);
circle_6.bindTooltip("Chilakaluripet<br>rank: 6<br>hazard index: 0.009671")
circle_6.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chilakaluripet">Chilakaluripet</a>')

var circle_7 = L.circle([17.005045, 81.780473], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8808, "stroke": true, "weight": 3}).addTo(map);
circle_7.bindTooltip("Rajahmundry<br>rank: 7<br>hazard index: 0.008808")
circle_7.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rajahmundry">Rajahmundry</a>')

var circle_8 = L.circle([15.475377, 78.478558], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7537, "stroke": true, "weight": 3}).addTo(map);
circle_8.bindTooltip("Nandyal<br>rank: 8<br>hazard index: 0.007537")
circle_8.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nandyal">Nandyal</a>')

var circle_9 = L.circle([16.432998, 80.993715], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6399, "stroke": true, "weight": 3}).addTo(map);
circle_9.bindTooltip("Gudivada<br>rank: 9<br>hazard index: 0.006399")
circle_9.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gudivada">Gudivada</a>')

var circle_10 = L.circle([16.676135, 81.170868], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6354, "stroke": true, "weight": 3}).addTo(map);
circle_10.bindTooltip("Eluru<br>rank: 10<br>hazard index: 0.006354")
circle_10.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Eluru">Eluru</a>')

var circle_11 = L.circle([16.181939, 81.135130], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4753, "stroke": true, "weight": 3}).addTo(map);
circle_11.bindTooltip("Machilipatnam<br>rank: 11<br>hazard index: 0.004753")
circle_11.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Machilipatnam">Machilipatnam</a>')

var circle_12 = L.circle([16.542769, 81.527344], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4607, "stroke": true, "weight": 3}).addTo(map);
circle_12.bindTooltip("Bhimavaram<br>rank: 12<br>hazard index: 0.004607")
circle_12.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhimavaram">Bhimavaram</a>')

var circle_13 = L.circle([15.507555, 80.060800], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3986, "stroke": true, "weight": 3}).addTo(map);
circle_13.bindTooltip("Ongole<br>rank: 13<br>hazard index: 0.003987")
circle_13.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ongole">Ongole</a>')

var circle_14 = L.circle([13.083694, 80.270186], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3574, "stroke": true, "weight": 3}).addTo(map);
circle_14.bindTooltip("Chennai<br>rank: 14<br>hazard index: 0.003575")
circle_14.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chennai">Chennai</a>')

var circle_15 = L.circle([16.876586, 81.545145], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2977, "stroke": true, "weight": 3}).addTo(map);
circle_15.bindTooltip("Tadepalligudem<br>rank: 15<br>hazard index: 0.002977")
circle_15.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tadepalligudem">Tadepalligudem</a>')

var circle_16 = L.circle([15.143395, 76.919388], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2463, "stroke": true, "weight": 3}).addTo(map);
circle_16.bindTooltip("Bellary<br>rank: 16<br>hazard index: 0.002463")
circle_16.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bellary">Bellary</a>')

var circle_17 = L.circle([16.943739, 82.235061], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1861, "stroke": true, "weight": 3}).addTo(map);
circle_17.bindTooltip("Kakinada<br>rank: 17<br>hazard index: 0.001861")
circle_17.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kakinada">Kakinada</a>')

var circle_18 = L.circle([14.449372, 79.987376], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1828, "stroke": true, "weight": 3}).addTo(map);
circle_18.bindTooltip("Nellore<br>rank: 18<br>hazard index: 0.001829")
circle_18.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nellore">Nellore</a>')

var circle_19 = L.circle([17.980609, 79.598212], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1827, "stroke": true, "weight": 3}).addTo(map);
circle_19.bindTooltip("Warangal<br>rank: 19<br>hazard index: 0.001828")
circle_19.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Warangal">Warangal</a>')

var circle_20 = L.circle([12.979120, 77.591300], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1507, "stroke": true, "weight": 3}).addTo(map);
circle_20.bindTooltip("Bangalore<br>rank: 20<br>hazard index: 0.001508")
circle_20.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bangalore">Bangalore</a>')

var circle_21 = L.circle([17.500000, 80.333333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1419, "stroke": true, "weight": 3}).addTo(map);
circle_21.bindTooltip("Khammam<br>rank: 21<br>hazard index: 0.001420")
circle_21.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Khammam">Khammam</a>')

var circle_22 = L.circle([14.654623, 77.556260], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1341, "stroke": true, "weight": 3}).addTo(map);
circle_22.bindTooltip("Anantapur<br>rank: 22<br>hazard index: 0.001341")
circle_22.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Anantapur">Anantapur</a>')

var circle_23 = L.circle([15.266493, 76.387230], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1239, "stroke": true, "weight": 3}).addTo(map);
circle_23.bindTooltip("Hospet<br>rank: 23<br>hazard index: 0.001240")
circle_23.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hospet">Hospet</a>')

var circle_24 = L.circle([16.857964, 79.217494], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1051, "stroke": true, "weight": 3}).addTo(map);
circle_24.bindTooltip("Nalgonda<br>rank: 24<br>hazard index: 0.001052")
circle_24.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nalgonda">Nalgonda</a>')

var circle_25 = L.circle([15.426365, 75.630079], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1039, "stroke": true, "weight": 3}).addTo(map);
circle_25.bindTooltip("Gadag<br>rank: 25<br>hazard index: 0.001039")
circle_25.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gadag">Gadag</a>')

var circle_26 = L.circle([19.075990, 72.877393], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 938, "stroke": true, "weight": 3}).addTo(map);
circle_26.bindTooltip("Mumbai<br>rank: 26<br>hazard index: 0.000938")
circle_26.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mumbai">Mumbai</a>')

var circle_27 = L.circle([18.112082, 83.405220], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 924, "stroke": true, "weight": 3}).addTo(map);
circle_27.bindTooltip("Vizianagaram<br>rank: 27<br>hazard index: 0.000924")
circle_27.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vizianagaram">Vizianagaram</a>')

var circle_28 = L.circle([13.631637, 79.423171], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 819, "stroke": true, "weight": 3}).addTo(map);
circle_28.bindTooltip("Tirupati<br>rank: 28<br>hazard index: 0.000820")
circle_28.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tirupati">Tirupati</a>')

var circle_29 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 808, "stroke": true, "weight": 3}).addTo(map);
circle_29.bindTooltip("Delhi<br>rank: 29<br>hazard index: 0.000809")
circle_29.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Delhi">Delhi</a>')

var circle_30 = L.circle([16.870988, 79.561398], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 807, "stroke": true, "weight": 3}).addTo(map);
circle_30.bindTooltip("Miryalaguda<br>rank: 30<br>hazard index: 0.000808")
circle_30.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Miryalaguda">Miryalaguda</a>')

var circle_31 = L.circle([26.055318, 82.993139], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 782, "stroke": true, "weight": 3}).addTo(map);
circle_31.bindTooltip("Nizamabad<br>rank: 31<br>hazard index: 0.000782")
circle_31.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nizamabad">Nizamabad</a>')

var circle_32 = L.circle([15.119651, 77.455290], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 778, "stroke": true, "weight": 3}).addTo(map);
circle_32.bindTooltip("Guntakal<br>rank: 32<br>hazard index: 0.000778")
circle_32.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guntakal">Guntakal</a>')

var circle_33 = L.circle([15.830925, 78.042537], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 748, "stroke": true, "weight": 3}).addTo(map);
circle_33.bindTooltip("Kurnool<br>rank: 33<br>hazard index: 0.000749")
circle_33.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kurnool">Kurnool</a>')

var circle_34 = L.circle([14.752266, 78.548552], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 693, "stroke": true, "weight": 3}).addTo(map);
circle_34.bindTooltip("Proddatur<br>rank: 34<br>hazard index: 0.000693")
circle_34.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Proddatur">Proddatur</a>')

var circle_35 = L.circle([16.743454, 77.992319], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 655, "stroke": true, "weight": 3}).addTo(map);
circle_35.bindTooltip("Mahbubnagar<br>rank: 35<br>hazard index: 0.000656")
circle_35.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mahbubnagar">Mahbubnagar</a>')

var circle_36 = L.circle([22.541418, 88.357691], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 647, "stroke": true, "weight": 3}).addTo(map);
circle_36.bindTooltip("Kolkata<br>rank: 36<br>hazard index: 0.000647")
circle_36.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolkata">Kolkata</a>')

var circle_37 = L.circle([14.422347, 77.720069], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 623, "stroke": true, "weight": 3}).addTo(map);
circle_37.bindTooltip("Dharmavaram<br>rank: 37<br>hazard index: 0.000624")
circle_37.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dharmavaram">Dharmavaram</a>')

var circle_38 = L.circle([20.266777, 85.843559], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 617, "stroke": true, "weight": 3}).addTo(map);
circle_38.bindTooltip("Bhubaneswar<br>rank: 38<br>hazard index: 0.000618")
circle_38.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhubaneswar">Bhubaneswar</a>')

var circle_39 = L.circle([18.761516, 79.478785], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 567, "stroke": true, "weight": 3}).addTo(map);
circle_39.bindTooltip("Ramagundam<br>rank: 39<br>hazard index: 0.000567")
circle_39.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ramagundam">Ramagundam</a>')

var circle_40 = L.circle([15.351838, 75.137985], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 544, "stroke": true, "weight": 3}).addTo(map);
circle_40.bindTooltip("Hubli<br>rank: 40<br>hazard index: 0.000544")
circle_40.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hubli">Hubli</a>')

var circle_41 = L.circle([17.910400, 77.519900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 465, "stroke": true, "weight": 3}).addTo(map);
circle_41.bindTooltip("Bidar<br>rank: 41<br>hazard index: 0.000466")
circle_41.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bidar">Bidar</a>')

var circle_42 = L.circle([14.906956, 78.009707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 460, "stroke": true, "weight": 3}).addTo(map);
circle_42.bindTooltip("Tadipatri<br>rank: 42<br>hazard index: 0.000461")
circle_42.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tadipatri">Tadipatri</a>')

var circle_43 = L.circle([17.166667, 77.083333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 436, "stroke": true, "weight": 3}).addTo(map);
circle_43.bindTooltip("Gulbarga<br>rank: 43<br>hazard index: 0.000436")
circle_43.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gulbarga">Gulbarga</a>')

var circle_44 = L.circle([19.169335, 77.311013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 396, "stroke": true, "weight": 3}).addTo(map);
circle_44.bindTooltip("Nanded Waghala<br>rank: 44<br>hazard index: 0.000397")
circle_44.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nanded_Waghala">Nanded Waghala</a>')

var circle_45 = L.circle([18.521428, 73.854454], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 326, "stroke": true, "weight": 3}).addTo(map);
circle_45.bindTooltip("Pune<br>rank: 45<br>hazard index: 0.000327")
circle_45.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pune">Pune</a>')

var circle_46 = L.circle([21.237947, 81.633683], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 316, "stroke": true, "weight": 3}).addTo(map);
circle_46.bindTooltip("Raipur<br>rank: 46<br>hazard index: 0.000317")
circle_46.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raipur">Raipur</a>')

var circle_47 = L.circle([18.434644, 79.132265], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 295, "stroke": true, "weight": 3}).addTo(map);
circle_47.bindTooltip("Karimnagar<br>rank: 47<br>hazard index: 0.000296")
circle_47.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Karimnagar">Karimnagar</a>')

var circle_48 = L.circle([16.083333, 77.166667], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 285, "stroke": true, "weight": 3}).addTo(map);
circle_48.bindTooltip("Raichur<br>rank: 48<br>hazard index: 0.000286")
circle_48.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raichur">Raichur</a>')

var circle_49 = L.circle([18.320022, 83.916077], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 276, "stroke": true, "weight": 3}).addTo(map);
circle_49.bindTooltip("Srikakulam<br>rank: 49<br>hazard index: 0.000276")
circle_49.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Srikakulam">Srikakulam</a>')

var circle_50 = L.circle([19.087076, 82.023572], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 256, "stroke": true, "weight": 3}).addTo(map);
circle_50.bindTooltip("Jagdalpur<br>rank: 50<br>hazard index: 0.000257")
circle_50.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jagdalpur">Jagdalpur</a>')

var circle_51 = L.circle([17.849907, 75.276320], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 243, "stroke": true, "weight": 3}).addTo(map);
circle_51.bindTooltip("Solapur<br>rank: 51<br>hazard index: 0.000243")
circle_51.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Solapur">Solapur</a>')

var circle_52 = L.circle([19.290314, 76.602903], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 217, "stroke": true, "weight": 3}).addTo(map);
circle_52.bindTooltip("Parbhani<br>rank: 52<br>hazard index: 0.000218")
circle_52.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Parbhani">Parbhani</a>')

var circle_53 = L.circle([11.001812, 76.962843], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 214, "stroke": true, "weight": 3}).addTo(map);
circle_53.bindTooltip("Coimbatore<br>rank: 53<br>hazard index: 0.000214")
circle_53.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Coimbatore">Coimbatore</a>')

var circle_54 = L.circle([23.021624, 72.579707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 188, "stroke": true, "weight": 3}).addTo(map);
circle_54.bindTooltip("Ahmedabad<br>rank: 54<br>hazard index: 0.000189")
circle_54.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmedabad">Ahmedabad</a>')

var circle_55 = L.circle([11.664300, 78.146000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 167, "stroke": true, "weight": 3}).addTo(map);
circle_55.bindTooltip("Salem<br>rank: 55<br>hazard index: 0.000168")
circle_55.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Salem">Salem</a>')

var circle_56 = L.circle([8.576971, 77.050125], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 151, "stroke": true, "weight": 3}).addTo(map);
circle_56.bindTooltip("Thiruvananthapuram<br>rank: 56<br>hazard index: 0.000152")
circle_56.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thiruvananthapuram">Thiruvananthapuram</a>')

var circle_57 = L.circle([15.398403, 73.812918], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 150, "stroke": true, "weight": 3}).addTo(map);
circle_57.bindTooltip("Vasco Da Gama<br>rank: 57<br>hazard index: 0.000150")
circle_57.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vasco_Da_Gama">Vasco Da Gama</a>')

var circle_58 = L.circle([21.149813, 79.082056], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 141, "stroke": true, "weight": 3}).addTo(map);
circle_58.bindTooltip("Nagpur<br>rank: 58<br>hazard index: 0.000142")
circle_58.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagpur">Nagpur</a>')

var circle_59 = L.circle([19.918233, 75.868625], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 138, "stroke": true, "weight": 3}).addTo(map);
circle_59.bindTooltip("Jalna<br>rank: 59<br>hazard index: 0.000138")
circle_59.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalna">Jalna</a>')

var circle_60 = L.circle([26.915458, 75.818982], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 137, "stroke": true, "weight": 3}).addTo(map);
circle_60.bindTooltip("Jaipur<br>rank: 60<br>hazard index: 0.000137")
circle_60.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jaipur">Jaipur</a>')

var circle_61 = L.circle([9.931308, 76.267414], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 133, "stroke": true, "weight": 3}).addTo(map);
circle_61.bindTooltip("Kochi<br>rank: 61<br>hazard index: 0.000133")
circle_61.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kochi">Kochi</a>')

var circle_62 = L.circle([18.437436, 77.110521], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 131, "stroke": true, "weight": 3}).addTo(map);
circle_62.bindTooltip("Udgir<br>rank: 62<br>hazard index: 0.000132")
circle_62.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Udgir">Udgir</a>')

var circle_63 = L.circle([20.843512, 75.525927], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 126, "stroke": true, "weight": 3}).addTo(map);
circle_63.bindTooltip("Jalgaon<br>rank: 63<br>hazard index: 0.000126")
circle_63.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalgaon">Jalgaon</a>')

var circle_64 = L.circle([25.335649, 83.007629], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 106, "stroke": true, "weight": 3}).addTo(map);
circle_64.bindTooltip("Varanasi<br>rank: 64<br>hazard index: 0.000107")
circle_64.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Varanasi">Varanasi</a>')

var circle_65 = L.circle([14.475294, 78.821686], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 105, "stroke": true, "weight": 3}).addTo(map);
circle_65.bindTooltip("Kadapa<br>rank: 65<br>hazard index: 0.000105")
circle_65.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kadapa">Kadapa</a>')

var circle_66 = L.circle([18.793568, 80.815939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 96, "stroke": true, "weight": 3}).addTo(map);
circle_66.bindTooltip("Bijapur<br>rank: 66<br>hazard index: 0.000096")
circle_66.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bijapur">Bijapur</a>')

var circle_67 = L.circle([11.101781, 77.345192], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 89, "stroke": true, "weight": 3}).addTo(map);
circle_67.bindTooltip("Tiruppur<br>rank: 67<br>hazard index: 0.000090")
circle_67.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tiruppur">Tiruppur</a>')

var circle_68 = L.circle([10.804973, 78.687030], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 88, "stroke": true, "weight": 3}).addTo(map);
circle_68.bindTooltip("Tiruchirappalli<br>rank: 68<br>hazard index: 0.000089")
circle_68.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tiruchirappalli">Tiruchirappalli</a>')

var circle_69 = L.circle([26.838100, 80.934600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 83, "stroke": true, "weight": 3}).addTo(map);
circle_69.bindTooltip("Lucknow<br>rank: 69<br>hazard index: 0.000083")
circle_69.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Lucknow">Lucknow</a>')

var circle_70 = L.circle([25.531031, 78.652689], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 80, "stroke": true, "weight": 3}).addTo(map);
circle_70.bindTooltip("Jhansi<br>rank: 70<br>hazard index: 0.000080")
circle_70.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jhansi">Jhansi</a>')

var circle_71 = L.circle([20.468600, 85.879200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 75, "stroke": true, "weight": 3}).addTo(map);
circle_71.bindTooltip("Cuttack<br>rank: 71<br>hazard index: 0.000076")
circle_71.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Cuttack">Cuttack</a>')

var circle_72 = L.circle([21.200996, 81.335426], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 75, "stroke": true, "weight": 3}).addTo(map);
circle_72.bindTooltip("Bhilai Nagar<br>rank: 72<br>hazard index: 0.000075")
circle_72.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhilai_Nagar">Bhilai Nagar</a>')

var circle_73 = L.circle([13.160105, 79.155551], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 73, "stroke": true, "weight": 3}).addTo(map);
circle_73.bindTooltip("Chittoor<br>rank: 73<br>hazard index: 0.000074")
circle_73.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chittoor">Chittoor</a>')

var circle_74 = L.circle([19.807608, 85.825254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 71, "stroke": true, "weight": 3}).addTo(map);
circle_74.bindTooltip("Puri<br>rank: 74<br>hazard index: 0.000071")
circle_74.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Puri">Puri</a>')

var circle_75 = L.circle([12.305183, 76.655361], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 70, "stroke": true, "weight": 3}).addTo(map);
circle_75.bindTooltip("Mysore<br>rank: 75<br>hazard index: 0.000071")
circle_75.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mysore">Mysore</a>')

var circle_76 = L.circle([8.887951, 76.595501], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 70, "stroke": true, "weight": 3}).addTo(map);
circle_76.bindTooltip("Kollam<br>rank: 76<br>hazard index: 0.000070")
circle_76.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kollam">Kollam</a>')

var circle_77 = L.circle([22.720362, 75.868200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 69, "stroke": true, "weight": 3}).addTo(map);
circle_77.bindTooltip("Indore<br>rank: 77<br>hazard index: 0.000069")
circle_77.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Indore">Indore</a>')

var circle_78 = L.circle([9.926115, 78.114098], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 63, "stroke": true, "weight": 3}).addTo(map);
circle_78.bindTooltip("Madurai<br>rank: 78<br>hazard index: 0.000064")
circle_78.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Madurai">Madurai</a>')

var circle_79 = L.circle([10.525626, 76.213254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 63, "stroke": true, "weight": 3}).addTo(map);
circle_79.bindTooltip("Thrissur<br>rank: 79<br>hazard index: 0.000064")
circle_79.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thrissur">Thrissur</a>')

var circle_80 = L.circle([23.370035, 85.325013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 58, "stroke": true, "weight": 3}).addTo(map);
circle_80.bindTooltip("Ranchi<br>rank: 80<br>hazard index: 0.000058")
circle_80.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ranchi">Ranchi</a>')

var circle_81 = L.circle([19.194329, 72.970178], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 57, "stroke": true, "weight": 3}).addTo(map);
circle_81.bindTooltip("Thane<br>rank: 81<br>hazard index: 0.000057")
circle_81.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thane">Thane</a>')

var circle_82 = L.circle([21.170200, 72.831100], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 52, "stroke": true, "weight": 3}).addTo(map);
circle_82.bindTooltip("Surat<br>rank: 82<br>hazard index: 0.000053")
circle_82.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Surat">Surat</a>')

var circle_83 = L.circle([13.125476, 80.094090], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 51, "stroke": true, "weight": 3}).addTo(map);
circle_83.bindTooltip("Avadi<br>rank: 83<br>hazard index: 0.000051")
circle_83.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Avadi">Avadi</a>')

var circle_84 = L.circle([14.226644, 76.400512], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 50, "stroke": true, "weight": 3}).addTo(map);
circle_84.bindTooltip("Chitradurga<br>rank: 84<br>hazard index: 0.000050")
circle_84.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chitradurga">Chitradurga</a>')

var circle_85 = L.circle([13.826383, 77.493772], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 49, "stroke": true, "weight": 3}).addTo(map);
circle_85.bindTooltip("Hindupur<br>rank: 85<br>hazard index: 0.000050")
circle_85.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hindupur">Hindupur</a>')

var circle_86 = L.circle([13.156387, 80.300528], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 48, "stroke": true, "weight": 3}).addTo(map);
circle_86.bindTooltip("Tiruvottiyur<br>rank: 86<br>hazard index: 0.000049")
circle_86.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tiruvottiyur">Tiruvottiyur</a>')

var circle_87 = L.circle([15.631900, 77.275900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 45, "stroke": true, "weight": 3}).addTo(map);
circle_87.bindTooltip("Adoni<br>rank: 87<br>hazard index: 0.000046")
circle_87.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Adoni">Adoni</a>')

var circle_88 = L.circle([23.258486, 77.401989], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 45, "stroke": true, "weight": 3}).addTo(map);
circle_88.bindTooltip("Bhopal<br>rank: 88<br>hazard index: 0.000045")
circle_88.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhopal">Bhopal</a>')

var circle_89 = L.circle([19.309813, 84.797156], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43, "stroke": true, "weight": 3}).addTo(map);
circle_89.bindTooltip("Brahmapur<br>rank: 89<br>hazard index: 0.000043")
circle_89.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Brahmapur">Brahmapur</a>')

var circle_90 = L.circle([23.160894, 79.949770], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 41, "stroke": true, "weight": 3}).addTo(map);
circle_90.bindTooltip("Jabalpur<br>rank: 90<br>hazard index: 0.000042")
circle_90.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jabalpur">Jabalpur</a>')

var circle_91 = L.circle([21.934900, 86.732400], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 41, "stroke": true, "weight": 3}).addTo(map);
circle_91.bindTooltip("Baripada<br>rank: 91<br>hazard index: 0.000042")
circle_91.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baripada">Baripada</a>')

var circle_92 = L.circle([20.761862, 77.192172], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 40, "stroke": true, "weight": 3}).addTo(map);
circle_92.bindTooltip("Akola<br>rank: 92<br>hazard index: 0.000041")
circle_92.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Akola">Akola</a>')

var circle_93 = L.circle([13.340077, 77.100621], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 38, "stroke": true, "weight": 3}).addTo(map);
circle_93.bindTooltip("Tumkur<br>rank: 93<br>hazard index: 0.000039")
circle_93.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tumkur">Tumkur</a>')

var circle_94 = L.circle([21.400000, 83.883333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 37, "stroke": true, "weight": 3}).addTo(map);
circle_94.bindTooltip("Sambalpur<br>rank: 94<br>hazard index: 0.000037")
circle_94.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sambalpur">Sambalpur</a>')

var circle_95 = L.circle([26.180598, 91.753943], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 37, "stroke": true, "weight": 3}).addTo(map);
circle_95.bindTooltip("Guwahati<br>rank: 95<br>hazard index: 0.000037")
circle_95.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guwahati">Guwahati</a>')

var circle_96 = L.circle([15.857267, 74.506934], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_96.bindTooltip("Belgaum<br>rank: 96<br>hazard index: 0.000037")
circle_96.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Belgaum">Belgaum</a>')

var circle_97 = L.circle([11.715950, 79.767053], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_97.bindTooltip("Cuddalore Port<br>rank: 97<br>hazard index: 0.000036")
circle_97.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Cuddalore_Port">Cuddalore Port</a>')

var circle_98 = L.circle([12.794811, 79.000641], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 35, "stroke": true, "weight": 3}).addTo(map);
circle_98.bindTooltip("Vellore<br>rank: 98<br>hazard index: 0.000036")
circle_98.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vellore">Vellore</a>')

var circle_99 = L.circle([22.214285, 84.872437], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 35, "stroke": true, "weight": 3}).addTo(map);
circle_99.bindTooltip("Raurkela<br>rank: 99<br>hazard index: 0.000036")
circle_99.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raurkela">Raurkela</a>')

var circle_100 = L.circle([12.869810, 74.843008], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 34, "stroke": true, "weight": 3}).addTo(map);
circle_100.bindTooltip("Mangalore<br>rank: 100<br>hazard index: 0.000034")
circle_100.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mangalore">Mangalore</a>')
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
<td>Vijayawada</td>
</tr>

<tr>
<td>2</td>
<td>Tenali</td>
</tr>

<tr>
<td>3</td>
<td>Hyderabad</td>
</tr>

<tr>
<td>4</td>
<td>Visakhapatnam</td>
</tr>

<tr>
<td>5</td>
<td>Narasaraopet</td>
</tr>

<tr>
<td>6</td>
<td>Chilakaluripet</td>
</tr>

<tr>
<td>7</td>
<td>Rajahmundry</td>
</tr>

<tr>
<td>8</td>
<td>Nandyal</td>
</tr>

<tr>
<td>9</td>
<td>Gudivada</td>
</tr>

<tr>
<td>10</td>
<td>Eluru</td>
</tr>

</table>
</div>
</div>


<p align="center"> The above map shows the top 100 at most risk cities when the outbreak location is Guntur. You can hover over any city to see the corresponding rank and the hazard index. You may also click on any city to see the situation when that city is the outbreak location. Finally, you can also see the list of top 10 cities at risk on side.  Click <a href="https://buda-magenta.github.io/hazard_map/">here</a> to go back to the home page.
</p>