---
layout: page
title: "Outbreak location: Purnia"
---
<div style="width: 100%; overflow: auto;">
<div style="width: 75%; float: left;">
<div id="mapid">
<script src="https://buda-magenta.github.io/hazard_map/load_map.js"></script>

<script>
var marker_outbreak = L.marker([26.000000, 87.500000],{"autoPan": true}).addTo(map); marker_outbreak.bindTooltip("Purnia").openTooltip();

var circle_1 = L.circle([25.832642, 86.614893], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 111897, "stroke": true, "weight": 3}).addTo(map);
circle_1.bindTooltip("Saharsa<br>rank: 1<br>hazard index: 0.111898")
circle_1.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Saharsa">Saharsa</a>')

var circle_2 = L.circle([25.560900, 87.647654], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 79934, "stroke": true, "weight": 3}).addTo(map);
circle_2.bindTooltip("Katihar<br>rank: 2<br>hazard index: 0.079935")
circle_2.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Katihar">Katihar</a>')

var circle_3 = L.circle([26.083143, 86.032571], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 18249, "stroke": true, "weight": 3}).addTo(map);
circle_3.bindTooltip("Darbhanga<br>rank: 3<br>hazard index: 0.018250")
circle_3.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Darbhanga">Darbhanga</a>')

var circle_4 = L.circle([25.609324, 85.123525], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 16795, "stroke": true, "weight": 3}).addTo(map);
circle_4.bindTooltip("Patna<br>rank: 4<br>hazard index: 0.016796")
circle_4.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Patna">Patna</a>')

var circle_5 = L.circle([26.716413, 88.430992], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 15814, "stroke": true, "weight": 3}).addTo(map);
circle_5.bindTooltip("Siliguri<br>rank: 5<br>hazard index: 0.015814")
circle_5.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Siliguri">Siliguri</a>')

var circle_6 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 14874, "stroke": true, "weight": 3}).addTo(map);
circle_6.bindTooltip("Delhi<br>rank: 6<br>hazard index: 0.014874")
circle_6.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Delhi">Delhi</a>')

var circle_7 = L.circle([22.541418, 88.357691], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 13202, "stroke": true, "weight": 3}).addTo(map);
circle_7.bindTooltip("Kolkata<br>rank: 7<br>hazard index: 0.013203")
circle_7.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolkata">Kolkata</a>')

var circle_8 = L.circle([25.286698, 87.132254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 12352, "stroke": true, "weight": 3}).addTo(map);
circle_8.bindTooltip("Bhagalpur<br>rank: 8<br>hazard index: 0.012353")
circle_8.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhagalpur">Bhagalpur</a>')

var circle_9 = L.circle([23.370035, 85.325013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9395, "stroke": true, "weight": 3}).addTo(map);
circle_9.bindTooltip("Ranchi<br>rank: 9<br>hazard index: 0.009395")
circle_9.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ranchi">Ranchi</a>')

var circle_10 = L.circle([27.037755, 88.263176], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7674, "stroke": true, "weight": 3}).addTo(map);
circle_10.bindTooltip("Darjeeling<br>rank: 10<br>hazard index: 0.007675")
circle_10.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Darjeeling">Darjeeling</a>')

var circle_11 = L.circle([27.329046, 88.612267], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6974, "stroke": true, "weight": 3}).addTo(map);
circle_11.bindTooltip("Gangtok<br>rank: 11<br>hazard index: 0.006974")
circle_11.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gangtok">Gangtok</a>')

var circle_12 = L.circle([25.263487, 88.789003], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6517, "stroke": true, "weight": 3}).addTo(map);
circle_12.bindTooltip("Balurghat<br>rank: 12<br>hazard index: 0.006518")
circle_12.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Balurghat">Balurghat</a>')

var circle_13 = L.circle([25.512719, 86.090571], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5949, "stroke": true, "weight": 3}).addTo(map);
circle_13.bindTooltip("Begusarai<br>rank: 13<br>hazard index: 0.005950")
circle_13.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Begusarai">Begusarai</a>')

var circle_14 = L.circle([26.698885, 88.320030], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5638, "stroke": true, "weight": 3}).addTo(map);
circle_14.bindTooltip("Bagdogra<br>rank: 14<br>hazard index: 0.005639")
circle_14.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bagdogra">Bagdogra</a>')

var circle_15 = L.circle([25.680654, 88.124646], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5443, "stroke": true, "weight": 3}).addTo(map);
circle_15.bindTooltip("Raiganj<br>rank: 15<br>hazard index: 0.005443")
circle_15.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raiganj">Raiganj</a>')

var circle_16 = L.circle([26.626484, 88.734077], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5341, "stroke": true, "weight": 3}).addTo(map);
circle_16.bindTooltip("Jalpaiguri<br>rank: 16<br>hazard index: 0.005342")
circle_16.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalpaiguri">Jalpaiguri</a>')

var circle_17 = L.circle([24.965712, 88.127778], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4710, "stroke": true, "weight": 3}).addTo(map);
circle_17.bindTooltip("English Bazar<br>rank: 17<br>hazard index: 0.004711")
circle_17.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/English_Bazar">English Bazar</a>')

var circle_18 = L.circle([24.796436, 85.007956], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4056, "stroke": true, "weight": 3}).addTo(map);
circle_18.bindTooltip("Gaya<br>rank: 18<br>hazard index: 0.004056")
circle_18.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gaya">Gaya</a>')

var circle_19 = L.circle([23.699128, 85.991069], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3623, "stroke": true, "weight": 3}).addTo(map);
circle_19.bindTooltip("Bokaro<br>rank: 19<br>hazard index: 0.003623")
circle_19.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bokaro">Bokaro</a>')

var circle_20 = L.circle([26.460914, 80.321759], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3405, "stroke": true, "weight": 3}).addTo(map);
circle_20.bindTooltip("Kanpur<br>rank: 20<br>hazard index: 0.003405")
circle_20.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kanpur">Kanpur</a>')

var circle_21 = L.circle([26.298638, 87.953148], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3115, "stroke": true, "weight": 3}).addTo(map);
circle_21.bindTooltip("Kishanganj<br>rank: 21<br>hazard index: 0.003115")
circle_21.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kishanganj">Kishanganj</a>')

var circle_22 = L.circle([25.220812, 86.517204], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2244, "stroke": true, "weight": 3}).addTo(map);
circle_22.bindTooltip("Munger<br>rank: 22<br>hazard index: 0.002245")
circle_22.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Munger">Munger</a>')

var circle_23 = L.circle([25.133173, 86.525040], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2089, "stroke": true, "weight": 3}).addTo(map);
circle_23.bindTooltip("Kharagpur<br>rank: 23<br>hazard index: 0.002089")
circle_23.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kharagpur">Kharagpur</a>')

var circle_24 = L.circle([24.476642, 86.606732], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1894, "stroke": true, "weight": 3}).addTo(map);
circle_24.bindTooltip("Deoghar<br>rank: 24<br>hazard index: 0.001894")
circle_24.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Deoghar">Deoghar</a>')

var circle_25 = L.circle([25.438130, 81.833800], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1369, "stroke": true, "weight": 3}).addTo(map);
circle_25.bindTooltip("Allahabad<br>rank: 25<br>hazard index: 0.001369")
circle_25.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Allahabad">Allahabad</a>')

var circle_26 = L.circle([25.329791, 86.456777], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1182, "stroke": true, "weight": 3}).addTo(map);
circle_26.bindTooltip("Jamalpur<br>rank: 26<br>hazard index: 0.001183")
circle_26.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jamalpur">Jamalpur</a>')

var circle_27 = L.circle([27.876990, 78.137290], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1073, "stroke": true, "weight": 3}).addTo(map);
circle_27.bindTooltip("Aligarh<br>rank: 27<br>hazard index: 0.001074")
circle_27.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Aligarh">Aligarh</a>')

var circle_28 = L.circle([30.909016, 75.851601], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 928, "stroke": true, "weight": 3}).addTo(map);
circle_28.bindTooltip("Ludhiana<br>rank: 28<br>hazard index: 0.000929")
circle_28.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ludhiana">Ludhiana</a>')

var circle_29 = L.circle([25.152471, 85.006878], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 896, "stroke": true, "weight": 3}).addTo(map);
circle_29.bindTooltip("Jehanabad<br>rank: 29<br>hazard index: 0.000897")
circle_29.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jehanabad">Jehanabad</a>')

var circle_30 = L.circle([23.250000, 87.750000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 894, "stroke": true, "weight": 3}).addTo(map);
circle_30.bindTooltip("Barddhaman<br>rank: 30<br>hazard index: 0.000895")
circle_30.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barddhaman">Barddhaman</a>')

var circle_31 = L.circle([23.795281, 86.430964], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 872, "stroke": true, "weight": 3}).addTo(map);
circle_31.bindTooltip("Dhanbad<br>rank: 31<br>hazard index: 0.000873")
circle_31.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dhanbad">Dhanbad</a>')

var circle_32 = L.circle([25.720581, 85.255560], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 772, "stroke": true, "weight": 3}).addTo(map);
circle_32.bindTooltip("Hajipur<br>rank: 32<br>hazard index: 0.000773")
circle_32.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hajipur">Hajipur</a>')

var circle_33 = L.circle([22.890183, 88.426939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 652, "stroke": true, "weight": 3}).addTo(map);
circle_33.bindTooltip("Naihati<br>rank: 33<br>hazard index: 0.000653")
circle_33.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Naihati">Naihati</a>')

var circle_34 = L.circle([31.634308, 74.873679], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 651, "stroke": true, "weight": 3}).addTo(map);
circle_34.bindTooltip("Amritsar<br>rank: 34<br>hazard index: 0.000652")
circle_34.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Amritsar">Amritsar</a>')

var circle_35 = L.circle([25.623400, 85.041700], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 608, "stroke": true, "weight": 3}).addTo(map);
circle_35.bindTooltip("Dinapur Nizamat<br>rank: 35<br>hazard index: 0.000609")
circle_35.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dinapur_Nizamat">Dinapur Nizamat</a>')

var circle_36 = L.circle([26.838100, 80.934600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 596, "stroke": true, "weight": 3}).addTo(map);
circle_36.bindTooltip("Lucknow<br>rank: 36<br>hazard index: 0.000597")
circle_36.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Lucknow">Lucknow</a>')

var circle_37 = L.circle([28.863842, 78.805778], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 589, "stroke": true, "weight": 3}).addTo(map);
circle_37.bindTooltip("Moradabad<br>rank: 37<br>hazard index: 0.000589")
circle_37.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Moradabad">Moradabad</a>')

var circle_38 = L.circle([26.148658, 85.340013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 588, "stroke": true, "weight": 3}).addTo(map);
circle_38.bindTooltip("Muzaffarpur<br>rank: 38<br>hazard index: 0.000588")
circle_38.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Muzaffarpur">Muzaffarpur</a>')

var circle_39 = L.circle([23.687130, 86.974659], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 567, "stroke": true, "weight": 3}).addTo(map);
circle_39.bindTooltip("Asansol<br>rank: 39<br>hazard index: 0.000567")
circle_39.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Asansol">Asansol</a>')

var circle_40 = L.circle([28.457876, 79.405571], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 565, "stroke": true, "weight": 3}).addTo(map);
circle_40.bindTooltip("Bareilly<br>rank: 40<br>hazard index: 0.000565")
circle_40.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bareilly">Bareilly</a>')

var circle_41 = L.circle([26.671329, 83.364583], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 520, "stroke": true, "weight": 3}).addTo(map);
circle_41.bindTooltip("Gorakhpur<br>rank: 41<br>hazard index: 0.000520")
circle_41.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gorakhpur">Gorakhpur</a>')

var circle_42 = L.circle([26.180598, 91.753943], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 508, "stroke": true, "weight": 3}).addTo(map);
circle_42.bindTooltip("Guwahati<br>rank: 42<br>hazard index: 0.000508")
circle_42.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guwahati">Guwahati</a>')

var circle_43 = L.circle([31.292011, 75.568058], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 496, "stroke": true, "weight": 3}).addTo(map);
circle_43.bindTooltip("Jalandhar<br>rank: 43<br>hazard index: 0.000496")
circle_43.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalandhar">Jalandhar</a>')

var circle_44 = L.circle([25.623457, 84.596839], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 464, "stroke": true, "weight": 3}).addTo(map);
circle_44.bindTooltip("Arrah<br>rank: 44<br>hazard index: 0.000464")
circle_44.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Arrah">Arrah</a>')

var circle_45 = L.circle([22.591260, 88.390964], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 386, "stroke": true, "weight": 3}).addTo(map);
circle_45.bindTooltip("Bidhan Nagar<br>rank: 45<br>hazard index: 0.000387")
circle_45.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bidhan_Nagar">Bidhan Nagar</a>')

var circle_46 = L.circle([19.075990, 72.877393], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 375, "stroke": true, "weight": 3}).addTo(map);
circle_46.bindTooltip("Mumbai<br>rank: 46<br>hazard index: 0.000375")
circle_46.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mumbai">Mumbai</a>')

var circle_47 = L.circle([29.988077, 77.508130], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 373, "stroke": true, "weight": 3}).addTo(map);
circle_47.bindTooltip("Saharanpur<br>rank: 47<br>hazard index: 0.000373")
circle_47.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Saharanpur">Saharanpur</a>')

var circle_48 = L.circle([25.773344, 84.784977], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 316, "stroke": true, "weight": 3}).addTo(map);
circle_48.bindTooltip("Chapra<br>rank: 48<br>hazard index: 0.000317")
circle_48.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chapra">Chapra</a>')

var circle_49 = L.circle([24.935635, 82.647701], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 286, "stroke": true, "weight": 3}).addTo(map);
circle_49.bindTooltip("Mirzapur<br>rank: 49<br>hazard index: 0.000286")
circle_49.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mirzapur">Mirzapur</a>')

var circle_50 = L.circle([22.801519, 86.202958], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 281, "stroke": true, "weight": 3}).addTo(map);
circle_50.bindTooltip("Jamshedpur<br>rank: 50<br>hazard index: 0.000282")
circle_50.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jamshedpur">Jamshedpur</a>')

var circle_51 = L.circle([25.205305, 85.514612], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 246, "stroke": true, "weight": 3}).addTo(map);
circle_51.bindTooltip("Biharsharif<br>rank: 51<br>hazard index: 0.000246")
circle_51.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Biharsharif">Biharsharif</a>')

var circle_52 = L.circle([28.753900, 77.399900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 232, "stroke": true, "weight": 3}).addTo(map);
circle_52.bindTooltip("Khora<br>rank: 52<br>hazard index: 0.000232")
circle_52.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Khora">Khora</a>')

var circle_53 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 223, "stroke": true, "weight": 3}).addTo(map);
circle_53.bindTooltip("Dehri<br>rank: 53<br>hazard index: 0.000224")
circle_53.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dehri">Dehri</a>')

var circle_54 = L.circle([23.535048, 87.338043], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 213, "stroke": true, "weight": 3}).addTo(map);
circle_54.bindTooltip("Durgapur<br>rank: 54<br>hazard index: 0.000214")
circle_54.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Durgapur">Durgapur</a>')

var circle_55 = L.circle([28.428262, 77.002700], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 210, "stroke": true, "weight": 3}).addTo(map);
circle_55.bindTooltip("Gurgaon<br>rank: 55<br>hazard index: 0.000210")
circle_55.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gurgaon">Gurgaon</a>')

var circle_56 = L.circle([22.707369, 88.374437], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 200, "stroke": true, "weight": 3}).addTo(map);
circle_56.bindTooltip("Baranagar<br>rank: 56<br>hazard index: 0.000200")
circle_56.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baranagar">Baranagar</a>')

var circle_57 = L.circle([22.472223, 88.093845], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 193, "stroke": true, "weight": 3}).addTo(map);
circle_57.bindTooltip("Uluberia<br>rank: 57<br>hazard index: 0.000193")
circle_57.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Uluberia">Uluberia</a>')

var circle_58 = L.circle([28.402979, 77.310384], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 193, "stroke": true, "weight": 3}).addTo(map);
circle_58.bindTooltip("Faridabad<br>rank: 58<br>hazard index: 0.000193")
circle_58.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Faridabad">Faridabad</a>')

var circle_59 = L.circle([25.531031, 78.652689], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 173, "stroke": true, "weight": 3}).addTo(map);
circle_59.bindTooltip("Jhansi<br>rank: 59<br>hazard index: 0.000173")
circle_59.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jhansi">Jhansi</a>')

var circle_60 = L.circle([22.214285, 84.872437], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 156, "stroke": true, "weight": 3}).addTo(map);
circle_60.bindTooltip("Raurkela<br>rank: 60<br>hazard index: 0.000157")
circle_60.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raurkela">Raurkela</a>')

var circle_61 = L.circle([25.335649, 83.007629], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 156, "stroke": true, "weight": 3}).addTo(map);
circle_61.bindTooltip("Varanasi<br>rank: 61<br>hazard index: 0.000157")
circle_61.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Varanasi">Varanasi</a>')

var circle_62 = L.circle([28.901090, 76.580194], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 153, "stroke": true, "weight": 3}).addTo(map);
circle_62.bindTooltip("Rohtak<br>rank: 62<br>hazard index: 0.000153")
circle_62.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rohtak">Rohtak</a>')

var circle_63 = L.circle([28.794068, 79.185930], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 135, "stroke": true, "weight": 3}).addTo(map);
circle_63.bindTooltip("Rampur<br>rank: 63<br>hazard index: 0.000135")
circle_63.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rampur">Rampur</a>')

var circle_64 = L.circle([25.280733, 83.125128], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 134, "stroke": true, "weight": 3}).addTo(map);
circle_64.bindTooltip("Mughal Sarai<br>rank: 64<br>hazard index: 0.000135")
circle_64.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mughal_Sarai">Mughal Sarai</a>')

var circle_65 = L.circle([12.979120, 77.591300], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 134, "stroke": true, "weight": 3}).addTo(map);
circle_65.bindTooltip("Bangalore<br>rank: 65<br>hazard index: 0.000134")
circle_65.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bangalore">Bangalore</a>')

var circle_66 = L.circle([29.000653, 77.768229], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 129, "stroke": true, "weight": 3}).addTo(map);
circle_66.bindTooltip("Meerut<br>rank: 66<br>hazard index: 0.000130")
circle_66.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Meerut">Meerut</a>')

var circle_67 = L.circle([25.572433, 83.609605], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 127, "stroke": true, "weight": 3}).addTo(map);
circle_67.bindTooltip("Medinipur<br>rank: 67<br>hazard index: 0.000127")
circle_67.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Medinipur">Medinipur</a>')

var circle_68 = L.circle([26.669512, 84.957411], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 125, "stroke": true, "weight": 3}).addTo(map);
circle_68.bindTooltip("Motihari<br>rank: 68<br>hazard index: 0.000125")
circle_68.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Motihari">Motihari</a>')

var circle_69 = L.circle([17.388786, 78.461065], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 117, "stroke": true, "weight": 3}).addTo(map);
circle_69.bindTooltip("Hyderabad<br>rank: 69<br>hazard index: 0.000117")
circle_69.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hyderabad">Hyderabad</a>')

var circle_70 = L.circle([22.695034, 88.377060], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 115, "stroke": true, "weight": 3}).addTo(map);
circle_70.bindTooltip("Panihati<br>rank: 70<br>hazard index: 0.000116")
circle_70.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Panihati">Panihati</a>')

var circle_71 = L.circle([27.504639, 80.829466], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 99, "stroke": true, "weight": 3}).addTo(map);
circle_71.bindTooltip("Sitapur<br>rank: 71<br>hazard index: 0.000100")
circle_71.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sitapur">Sitapur</a>')

var circle_72 = L.circle([26.131004, 84.391257], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 99, "stroke": true, "weight": 3}).addTo(map);
circle_72.bindTooltip("Siwan<br>rank: 72<br>hazard index: 0.000100")
circle_72.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Siwan">Siwan</a>')

var circle_73 = L.circle([23.021624, 72.579707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 96, "stroke": true, "weight": 3}).addTo(map);
circle_73.bindTooltip("Ahmedabad<br>rank: 73<br>hazard index: 0.000097")
circle_73.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmedabad">Ahmedabad</a>')

var circle_74 = L.circle([26.423847, 83.762732], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 96, "stroke": true, "weight": 3}).addTo(map);
circle_74.bindTooltip("Deoria<br>rank: 74<br>hazard index: 0.000096")
circle_74.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Deoria">Deoria</a>')

var circle_75 = L.circle([27.175255, 78.009816], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 94, "stroke": true, "weight": 3}).addTo(map);
circle_75.bindTooltip("Agra<br>rank: 75<br>hazard index: 0.000094")
circle_75.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Agra">Agra</a>')

var circle_76 = L.circle([22.670728, 88.376342], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 94, "stroke": true, "weight": 3}).addTo(map);
circle_76.bindTooltip("Kamarhati<br>rank: 76<br>hazard index: 0.000094")
circle_76.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kamarhati">Kamarhati</a>')

var circle_77 = L.circle([26.915458, 75.818982], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 91, "stroke": true, "weight": 3}).addTo(map);
circle_77.bindTooltip("Jaipur<br>rank: 77<br>hazard index: 0.000091")
circle_77.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jaipur">Jaipur</a>')

var circle_78 = L.circle([25.562071, 84.015672], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 90, "stroke": true, "weight": 3}).addTo(map);
circle_78.bindTooltip("Buxar<br>rank: 78<br>hazard index: 0.000091")
circle_78.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Buxar">Buxar</a>')

var circle_79 = L.circle([23.388901, 88.372439], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 86, "stroke": true, "weight": 3}).addTo(map);
circle_79.bindTooltip("Nabadwip<br>rank: 79<br>hazard index: 0.000087")
circle_79.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nabadwip">Nabadwip</a>')

var circle_80 = L.circle([22.646958, 88.343612], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 86, "stroke": true, "weight": 3}).addTo(map);
circle_80.bindTooltip("Bally<br>rank: 80<br>hazard index: 0.000086")
circle_80.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bally">Bally</a>')

var circle_81 = L.circle([29.003314, 77.016732], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 85, "stroke": true, "weight": 3}).addTo(map);
circle_81.bindTooltip("Sonipat<br>rank: 81<br>hazard index: 0.000085")
circle_81.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sonipat">Sonipat</a>')

var circle_82 = L.circle([28.733400, 77.298600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 84, "stroke": true, "weight": 3}).addTo(map);
circle_82.bindTooltip("Loni<br>rank: 82<br>hazard index: 0.000085")
circle_82.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Loni">Loni</a>')

var circle_83 = L.circle([20.266777, 85.843559], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 84, "stroke": true, "weight": 3}).addTo(map);
circle_83.bindTooltip("Bhubaneswar<br>rank: 83<br>hazard index: 0.000085")
circle_83.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhubaneswar">Bhubaneswar</a>')

var circle_84 = L.circle([26.724789, 82.793269], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 83, "stroke": true, "weight": 3}).addTo(map);
circle_84.bindTooltip("Basti<br>rank: 84<br>hazard index: 0.000084")
circle_84.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Basti">Basti</a>')

var circle_85 = L.circle([27.109667, 81.918329], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 83, "stroke": true, "weight": 3}).addTo(map);
circle_85.bindTooltip("Gonda<br>rank: 85<br>hazard index: 0.000083")
circle_85.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gonda">Gonda</a>')

var circle_86 = L.circle([13.083694, 80.270186], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 81, "stroke": true, "weight": 3}).addTo(map);
circle_86.bindTooltip("Chennai<br>rank: 86<br>hazard index: 0.000082")
circle_86.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chennai">Chennai</a>')

var circle_87 = L.circle([24.379576, 88.585573], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 81, "stroke": true, "weight": 3}).addTo(map);
circle_87.bindTooltip("Baharampur<br>rank: 87<br>hazard index: 0.000081")
circle_87.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baharampur">Baharampur</a>')

var circle_88 = L.circle([18.521428, 73.854454], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 79, "stroke": true, "weight": 3}).addTo(map);
circle_88.bindTooltip("Pune<br>rank: 88<br>hazard index: 0.000080")
circle_88.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pune">Pune</a>')

var circle_89 = L.circle([30.733442, 76.779714], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 79, "stroke": true, "weight": 3}).addTo(map);
circle_89.bindTooltip("Chandigarh<br>rank: 89<br>hazard index: 0.000079")
circle_89.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chandigarh">Chandigarh</a>')

var circle_90 = L.circle([22.508621, 88.253218], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 76, "stroke": true, "weight": 3}).addTo(map);
circle_90.bindTooltip("Maheshtala<br>rank: 90<br>hazard index: 0.000077")
circle_90.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Maheshtala">Maheshtala</a>')

var circle_91 = L.circle([27.484460, 94.901945], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 76, "stroke": true, "weight": 3}).addTo(map);
circle_91.bindTooltip("Dibrugarh<br>rank: 91<br>hazard index: 0.000076")
circle_91.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dibrugarh">Dibrugarh</a>')

var circle_92 = L.circle([21.735348, 81.944459], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 72, "stroke": true, "weight": 3}).addTo(map);
circle_92.bindTooltip("Bhatpara<br>rank: 92<br>hazard index: 0.000072")
circle_92.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhatpara">Bhatpara</a>')

var circle_93 = L.circle([27.437194, 79.489129], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 70, "stroke": true, "weight": 3}).addTo(map);
circle_93.bindTooltip("Farrukhabad<br>rank: 93<br>hazard index: 0.000070")
circle_93.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Farrukhabad">Farrukhabad</a>')

var circle_94 = L.circle([22.870214, 88.419608], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 69, "stroke": true, "weight": 3}).addTo(map);
circle_94.bindTooltip("Barrackpur<br>rank: 94<br>hazard index: 0.000069")
circle_94.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barrackpur">Barrackpur</a>')

var circle_95 = L.circle([21.170200, 72.831100], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 69, "stroke": true, "weight": 3}).addTo(map);
circle_95.bindTooltip("Surat<br>rank: 95<br>hazard index: 0.000069")
circle_95.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Surat">Surat</a>')

var circle_96 = L.circle([28.660965, 76.834676], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 67, "stroke": true, "weight": 3}).addTo(map);
circle_96.bindTooltip("Bahadurgarh<br>rank: 96<br>hazard index: 0.000067")
circle_96.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bahadurgarh">Bahadurgarh</a>')

var circle_97 = L.circle([23.405848, 88.495894], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 66, "stroke": true, "weight": 3}).addTo(map);
circle_97.bindTooltip("Krishnanagar<br>rank: 97<br>hazard index: 0.000066")
circle_97.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Krishnanagar">Krishnanagar</a>')

var circle_98 = L.circle([29.391275, 76.977168], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 62, "stroke": true, "weight": 3}).addTo(map);
circle_98.bindTooltip("Panipat<br>rank: 98<br>hazard index: 0.000062")
circle_98.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Panipat">Panipat</a>')

var circle_99 = L.circle([27.177366, 78.389912], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 60, "stroke": true, "weight": 3}).addTo(map);
circle_99.bindTooltip("Firozabad<br>rank: 99<br>hazard index: 0.000060")
circle_99.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Firozabad">Firozabad</a>')

var circle_100 = L.circle([30.384367, 76.770421], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 60, "stroke": true, "weight": 3}).addTo(map);
circle_100.bindTooltip("Ambala<br>rank: 100<br>hazard index: 0.000060")
circle_100.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ambala">Ambala</a>')
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
<td>Saharsa</td>
</tr>

<tr>
<td>2</td>
<td>Katihar</td>
</tr>

<tr>
<td>3</td>
<td>Darbhanga</td>
</tr>

<tr>
<td>4</td>
<td>Patna</td>
</tr>

<tr>
<td>5</td>
<td>Siliguri</td>
</tr>

<tr>
<td>6</td>
<td>Delhi</td>
</tr>

<tr>
<td>7</td>
<td>Kolkata</td>
</tr>

<tr>
<td>8</td>
<td>Bhagalpur</td>
</tr>

<tr>
<td>9</td>
<td>Ranchi</td>
</tr>

<tr>
<td>10</td>
<td>Darjeeling</td>
</tr>

</table>
</div>
</div>


<p align="center"> The above map shows the top 100 at most risk cities when the outbreak location is Purnia. You can hover over any city to see the corresponding rank and the hazard index. You may also click on any city to see the situation when that city is the outbreak location. Finally, you can also see the list of top 10 cities at risk on side.  Click <a href="https://buda-magenta.github.io/hazard_map/">here</a> to go back to the home page.
</p>