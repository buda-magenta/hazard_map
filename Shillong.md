---
layout: page
title: "Outbreak location: Shillong"
---
<div style="width: 100%; overflow: auto;">
<div style="width: 75%; float: left;">
<div id="mapid">
<script src="https://buda-magenta.github.io/hazard_map/load_map.js"></script>

<script>
var marker_outbreak = L.marker([25.576045, 91.882528],{"autoPan": true}).addTo(map); marker_outbreak.bindTooltip("Shillong").openTooltip();

var circle_1 = L.circle([26.180598, 91.753943], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 299038, "stroke": true, "weight": 3}).addTo(map);
circle_1.bindTooltip("Guwahati<br>rank: 1<br>hazard index: 0.299039")
circle_1.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guwahati">Guwahati</a>')

var circle_2 = L.circle([24.817861, 92.756221], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 26762, "stroke": true, "weight": 3}).addTo(map);
circle_2.bindTooltip("Silchar<br>rank: 2<br>hazard index: 0.026763")
circle_2.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Silchar">Silchar</a>')

var circle_3 = L.circle([25.913591, 93.728371], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 23836, "stroke": true, "weight": 3}).addTo(map);
circle_3.bindTooltip("Dimapur<br>rank: 3<br>hazard index: 0.023836")
circle_3.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dimapur">Dimapur</a>')

var circle_4 = L.circle([27.484460, 94.901945], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 18622, "stroke": true, "weight": 3}).addTo(map);
circle_4.bindTooltip("Dibrugarh<br>rank: 4<br>hazard index: 0.018622")
circle_4.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dibrugarh">Dibrugarh</a>')

var circle_5 = L.circle([26.304149, 92.716060], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 13649, "stroke": true, "weight": 3}).addTo(map);
circle_5.bindTooltip("Nagaon<br>rank: 5<br>hazard index: 0.013650")
circle_5.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagaon">Nagaon</a>')

var circle_6 = L.circle([26.616957, 92.765007], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 11929, "stroke": true, "weight": 3}).addTo(map);
circle_6.bindTooltip("Tezpur<br>rank: 6<br>hazard index: 0.011929")
circle_6.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tezpur">Tezpur</a>')

var circle_7 = L.circle([22.541418, 88.357691], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 11602, "stroke": true, "weight": 3}).addTo(map);
circle_7.bindTooltip("Kolkata<br>rank: 7<br>hazard index: 0.011602")
circle_7.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolkata">Kolkata</a>')

var circle_8 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8843, "stroke": true, "weight": 3}).addTo(map);
circle_8.bindTooltip("Delhi<br>rank: 8<br>hazard index: 0.008844")
circle_8.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Delhi">Delhi</a>')

var circle_9 = L.circle([12.979120, 77.591300], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4222, "stroke": true, "weight": 3}).addTo(map);
circle_9.bindTooltip("Bangalore<br>rank: 9<br>hazard index: 0.004223")
circle_9.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bangalore">Bangalore</a>')

var circle_10 = L.circle([23.831238, 91.282382], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3843, "stroke": true, "weight": 3}).addTo(map);
circle_10.bindTooltip("Agartala<br>rank: 10<br>hazard index: 0.003844")
circle_10.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Agartala">Agartala</a>')

var circle_11 = L.circle([24.800609, 93.937000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2711, "stroke": true, "weight": 3}).addTo(map);
circle_11.bindTooltip("Imphal<br>rank: 11<br>hazard index: 0.002712")
circle_11.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Imphal">Imphal</a>')

var circle_12 = L.circle([19.075990, 72.877393], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2536, "stroke": true, "weight": 3}).addTo(map);
circle_12.bindTooltip("Mumbai<br>rank: 12<br>hazard index: 0.002536")
circle_12.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mumbai">Mumbai</a>')

var circle_13 = L.circle([13.083694, 80.270186], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1770, "stroke": true, "weight": 3}).addTo(map);
circle_13.bindTooltip("Chennai<br>rank: 13<br>hazard index: 0.001770")
circle_13.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chennai">Chennai</a>')

var circle_14 = L.circle([26.698885, 88.320030], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1470, "stroke": true, "weight": 3}).addTo(map);
circle_14.bindTooltip("Bagdogra<br>rank: 14<br>hazard index: 0.001470")
circle_14.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bagdogra">Bagdogra</a>')

var circle_15 = L.circle([17.388786, 78.461065], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 967, "stroke": true, "weight": 3}).addTo(map);
circle_15.bindTooltip("Hyderabad<br>rank: 15<br>hazard index: 0.000967")
circle_15.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hyderabad">Hyderabad</a>')

var circle_16 = L.circle([26.915458, 75.818982], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 940, "stroke": true, "weight": 3}).addTo(map);
circle_16.bindTooltip("Jaipur<br>rank: 16<br>hazard index: 0.000941")
circle_16.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jaipur">Jaipur</a>')

var circle_17 = L.circle([26.716413, 88.430992], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 729, "stroke": true, "weight": 3}).addTo(map);
circle_17.bindTooltip("Siliguri<br>rank: 17<br>hazard index: 0.000729")
circle_17.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Siliguri">Siliguri</a>')

var circle_18 = L.circle([25.609324, 85.123525], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 547, "stroke": true, "weight": 3}).addTo(map);
circle_18.bindTooltip("Patna<br>rank: 18<br>hazard index: 0.000547")
circle_18.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Patna">Patna</a>')

var circle_19 = L.circle([26.838100, 80.934600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 501, "stroke": true, "weight": 3}).addTo(map);
circle_19.bindTooltip("Lucknow<br>rank: 19<br>hazard index: 0.000502")
circle_19.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Lucknow">Lucknow</a>')

var circle_20 = L.circle([23.743524, 92.738291], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 482, "stroke": true, "weight": 3}).addTo(map);
circle_20.bindTooltip("Aizawl<br>rank: 20<br>hazard index: 0.000483")
circle_20.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Aizawl">Aizawl</a>')

var circle_21 = L.circle([26.460914, 80.321759], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 405, "stroke": true, "weight": 3}).addTo(map);
circle_21.bindTooltip("Kanpur<br>rank: 21<br>hazard index: 0.000405")
circle_21.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kanpur">Kanpur</a>')

var circle_22 = L.circle([26.505476, 93.977739], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 394, "stroke": true, "weight": 3}).addTo(map);
circle_22.bindTooltip("Chandan Nagar<br>rank: 22<br>hazard index: 0.000394")
circle_22.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chandan_Nagar">Chandan Nagar</a>')

var circle_23 = L.circle([17.723128, 83.301284], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 393, "stroke": true, "weight": 3}).addTo(map);
circle_23.bindTooltip("Visakhapatnam<br>rank: 23<br>hazard index: 0.000393")
circle_23.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Visakhapatnam">Visakhapatnam</a>')

var circle_24 = L.circle([26.757792, 94.207965], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 363, "stroke": true, "weight": 3}).addTo(map);
circle_24.bindTooltip("Jorhat<br>rank: 24<br>hazard index: 0.000363")
circle_24.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jorhat">Jorhat</a>')

var circle_25 = L.circle([22.591260, 88.390964], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 339, "stroke": true, "weight": 3}).addTo(map);
circle_25.bindTooltip("Bidhan Nagar<br>rank: 25<br>hazard index: 0.000340")
circle_25.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bidhan_Nagar">Bidhan Nagar</a>')

var circle_26 = L.circle([20.266777, 85.843559], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 309, "stroke": true, "weight": 3}).addTo(map);
circle_26.bindTooltip("Bhubaneswar<br>rank: 26<br>hazard index: 0.000309")
circle_26.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhubaneswar">Bhubaneswar</a>')

var circle_27 = L.circle([16.508759, 80.618510], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 236, "stroke": true, "weight": 3}).addTo(map);
circle_27.bindTooltip("Vijayawada<br>rank: 27<br>hazard index: 0.000237")
circle_27.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vijayawada">Vijayawada</a>')

var circle_28 = L.circle([23.250000, 87.750000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 233, "stroke": true, "weight": 3}).addTo(map);
circle_28.bindTooltip("Barddhaman<br>rank: 28<br>hazard index: 0.000234")
circle_28.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barddhaman">Barddhaman</a>')

var circle_29 = L.circle([23.749721, 91.876635], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 233, "stroke": true, "weight": 3}).addTo(map);
circle_29.bindTooltip("Ganganagar<br>rank: 29<br>hazard index: 0.000233")
circle_29.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ganganagar">Ganganagar</a>')

var circle_30 = L.circle([24.965712, 88.127778], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 214, "stroke": true, "weight": 3}).addTo(map);
circle_30.bindTooltip("English Bazar<br>rank: 30<br>hazard index: 0.000215")
circle_30.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/English_Bazar">English Bazar</a>')

var circle_31 = L.circle([25.438130, 81.833800], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 204, "stroke": true, "weight": 3}).addTo(map);
circle_31.bindTooltip("Allahabad<br>rank: 31<br>hazard index: 0.000204")
circle_31.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Allahabad">Allahabad</a>')

var circle_32 = L.circle([12.305183, 76.655361], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 198, "stroke": true, "weight": 3}).addTo(map);
circle_32.bindTooltip("Mysore<br>rank: 32<br>hazard index: 0.000198")
circle_32.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mysore">Mysore</a>')

var circle_33 = L.circle([18.521428, 73.854454], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 179, "stroke": true, "weight": 3}).addTo(map);
circle_33.bindTooltip("Pune<br>rank: 33<br>hazard index: 0.000180")
circle_33.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pune">Pune</a>')

var circle_34 = L.circle([22.472223, 88.093845], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 169, "stroke": true, "weight": 3}).addTo(map);
circle_34.bindTooltip("Uluberia<br>rank: 34<br>hazard index: 0.000170")
circle_34.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Uluberia">Uluberia</a>')

var circle_35 = L.circle([19.194329, 72.970178], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 156, "stroke": true, "weight": 3}).addTo(map);
circle_35.bindTooltip("Thane<br>rank: 35<br>hazard index: 0.000157")
circle_35.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thane">Thane</a>')

var circle_36 = L.circle([9.931308, 76.267414], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 148, "stroke": true, "weight": 3}).addTo(map);
circle_36.bindTooltip("Kochi<br>rank: 36<br>hazard index: 0.000149")
circle_36.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kochi">Kochi</a>')

var circle_37 = L.circle([27.175255, 78.009816], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 136, "stroke": true, "weight": 3}).addTo(map);
circle_37.bindTooltip("Agra<br>rank: 37<br>hazard index: 0.000137")
circle_37.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Agra">Agra</a>')

var circle_38 = L.circle([20.468600, 85.879200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 136, "stroke": true, "weight": 3}).addTo(map);
circle_38.bindTooltip("Cuttack<br>rank: 38<br>hazard index: 0.000136")
circle_38.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Cuttack">Cuttack</a>')

var circle_39 = L.circle([22.890183, 88.426939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 132, "stroke": true, "weight": 3}).addTo(map);
circle_39.bindTooltip("Naihati<br>rank: 39<br>hazard index: 0.000133")
circle_39.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Naihati">Naihati</a>')

var circle_40 = L.circle([23.021624, 72.579707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 131, "stroke": true, "weight": 3}).addTo(map);
circle_40.bindTooltip("Ahmedabad<br>rank: 40<br>hazard index: 0.000132")
circle_40.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmedabad">Ahmedabad</a>')

var circle_41 = L.circle([26.298638, 87.953148], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 131, "stroke": true, "weight": 3}).addTo(map);
circle_41.bindTooltip("Kishanganj<br>rank: 41<br>hazard index: 0.000131")
circle_41.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kishanganj">Kishanganj</a>')

var circle_42 = L.circle([20.011247, 73.790236], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 128, "stroke": true, "weight": 3}).addTo(map);
circle_42.bindTooltip("Nashik<br>rank: 42<br>hazard index: 0.000128")
circle_42.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nashik">Nashik</a>')

var circle_43 = L.circle([30.909016, 75.851601], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 125, "stroke": true, "weight": 3}).addTo(map);
circle_43.bindTooltip("Ludhiana<br>rank: 43<br>hazard index: 0.000126")
circle_43.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ludhiana">Ludhiana</a>')

var circle_44 = L.circle([28.428262, 77.002700], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 125, "stroke": true, "weight": 3}).addTo(map);
circle_44.bindTooltip("Gurgaon<br>rank: 44<br>hazard index: 0.000125")
circle_44.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gurgaon">Gurgaon</a>')

var circle_45 = L.circle([23.535048, 87.338043], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 119, "stroke": true, "weight": 3}).addTo(map);
circle_45.bindTooltip("Durgapur<br>rank: 45<br>hazard index: 0.000119")
circle_45.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Durgapur">Durgapur</a>')

var circle_46 = L.circle([28.402979, 77.310384], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 114, "stroke": true, "weight": 3}).addTo(map);
circle_46.bindTooltip("Faridabad<br>rank: 46<br>hazard index: 0.000115")
circle_46.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Faridabad">Faridabad</a>')

var circle_47 = L.circle([23.687130, 86.974659], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 109, "stroke": true, "weight": 3}).addTo(map);
circle_47.bindTooltip("Asansol<br>rank: 47<br>hazard index: 0.000110")
circle_47.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Asansol">Asansol</a>')

var circle_48 = L.circle([13.340077, 77.100621], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 107, "stroke": true, "weight": 3}).addTo(map);
circle_48.bindTooltip("Tumkur<br>rank: 48<br>hazard index: 0.000108")
circle_48.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tumkur">Tumkur</a>')

var circle_49 = L.circle([22.695034, 88.377060], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 101, "stroke": true, "weight": 3}).addTo(map);
circle_49.bindTooltip("Panihati<br>rank: 49<br>hazard index: 0.000102")
circle_49.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Panihati">Panihati</a>')

var circle_50 = L.circle([31.634308, 74.873679], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3}).addTo(map);
circle_50.bindTooltip("Amritsar<br>rank: 50<br>hazard index: 0.000100")
circle_50.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Amritsar">Amritsar</a>')

var circle_51 = L.circle([25.560900, 87.647654], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 98, "stroke": true, "weight": 3}).addTo(map);
circle_51.bindTooltip("Katihar<br>rank: 51<br>hazard index: 0.000099")
circle_51.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Katihar">Katihar</a>')

var circle_52 = L.circle([25.335649, 83.007629], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 97, "stroke": true, "weight": 3}).addTo(map);
circle_52.bindTooltip("Varanasi<br>rank: 52<br>hazard index: 0.000097")
circle_52.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Varanasi">Varanasi</a>')

var circle_53 = L.circle([25.531031, 78.652689], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 94, "stroke": true, "weight": 3}).addTo(map);
circle_53.bindTooltip("Jhansi<br>rank: 53<br>hazard index: 0.000094")
circle_53.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jhansi">Jhansi</a>')

var circle_54 = L.circle([28.901090, 76.580194], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 90, "stroke": true, "weight": 3}).addTo(map);
circle_54.bindTooltip("Rohtak<br>rank: 54<br>hazard index: 0.000091")
circle_54.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rohtak">Rohtak</a>')

var circle_55 = L.circle([23.160894, 79.949770], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 90, "stroke": true, "weight": 3}).addTo(map);
circle_55.bindTooltip("Jabalpur<br>rank: 55<br>hazard index: 0.000091")
circle_55.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jabalpur">Jabalpur</a>')

var circle_56 = L.circle([28.457876, 79.405571], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 84, "stroke": true, "weight": 3}).addTo(map);
circle_56.bindTooltip("Bareilly<br>rank: 56<br>hazard index: 0.000084")
circle_56.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bareilly">Bareilly</a>')

var circle_57 = L.circle([28.863842, 78.805778], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 83, "stroke": true, "weight": 3}).addTo(map);
circle_57.bindTooltip("Moradabad<br>rank: 57<br>hazard index: 0.000083")
circle_57.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Moradabad">Moradabad</a>')

var circle_58 = L.circle([25.133173, 86.525040], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 82, "stroke": true, "weight": 3}).addTo(map);
circle_58.bindTooltip("Kharagpur<br>rank: 58<br>hazard index: 0.000083")
circle_58.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kharagpur">Kharagpur</a>')

var circle_59 = L.circle([22.670728, 88.376342], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 82, "stroke": true, "weight": 3}).addTo(map);
circle_59.bindTooltip("Kamarhati<br>rank: 59<br>hazard index: 0.000083")
circle_59.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kamarhati">Kamarhati</a>')

var circle_60 = L.circle([26.671329, 83.364583], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 78, "stroke": true, "weight": 3}).addTo(map);
circle_60.bindTooltip("Gorakhpur<br>rank: 60<br>hazard index: 0.000078")
circle_60.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gorakhpur">Gorakhpur</a>')

var circle_61 = L.circle([15.398403, 73.812918], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 77, "stroke": true, "weight": 3}).addTo(map);
circle_61.bindTooltip("Vasco Da Gama<br>rank: 61<br>hazard index: 0.000078")
circle_61.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vasco_Da_Gama">Vasco Da Gama</a>')

var circle_62 = L.circle([29.000653, 77.768229], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 77, "stroke": true, "weight": 3}).addTo(map);
circle_62.bindTooltip("Meerut<br>rank: 62<br>hazard index: 0.000077")
circle_62.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Meerut">Meerut</a>')

var circle_63 = L.circle([17.005045, 81.780473], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 76, "stroke": true, "weight": 3}).addTo(map);
circle_63.bindTooltip("Rajahmundry<br>rank: 63<br>hazard index: 0.000077")
circle_63.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rajahmundry">Rajahmundry</a>')

var circle_64 = L.circle([22.646958, 88.343612], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 75, "stroke": true, "weight": 3}).addTo(map);
circle_64.bindTooltip("Bally<br>rank: 64<br>hazard index: 0.000076")
circle_64.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bally">Bally</a>')

var circle_65 = L.circle([26.626484, 88.734077], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 75, "stroke": true, "weight": 3}).addTo(map);
circle_65.bindTooltip("Jalpaiguri<br>rank: 65<br>hazard index: 0.000076")
circle_65.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalpaiguri">Jalpaiguri</a>')

var circle_66 = L.circle([26.296772, 73.035143], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 70, "stroke": true, "weight": 3}).addTo(map);
circle_66.bindTooltip("Jodhpur<br>rank: 66<br>hazard index: 0.000070")
circle_66.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jodhpur">Jodhpur</a>')

var circle_67 = L.circle([22.508621, 88.253218], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 67, "stroke": true, "weight": 3}).addTo(map);
circle_67.bindTooltip("Maheshtala<br>rank: 67<br>hazard index: 0.000068")
circle_67.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Maheshtala">Maheshtala</a>')

var circle_68 = L.circle([31.292011, 75.568058], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 67, "stroke": true, "weight": 3}).addTo(map);
circle_68.bindTooltip("Jalandhar<br>rank: 68<br>hazard index: 0.000067")
circle_68.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalandhar">Jalandhar</a>')

var circle_69 = L.circle([11.664300, 78.146000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 66, "stroke": true, "weight": 3}).addTo(map);
circle_69.bindTooltip("Salem<br>rank: 69<br>hazard index: 0.000067")
circle_69.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Salem">Salem</a>')

var circle_70 = L.circle([11.001812, 76.962843], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 65, "stroke": true, "weight": 3}).addTo(map);
circle_70.bindTooltip("Coimbatore<br>rank: 70<br>hazard index: 0.000065")
circle_70.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Coimbatore">Coimbatore</a>')

var circle_71 = L.circle([21.735348, 81.944459], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 63, "stroke": true, "weight": 3}).addTo(map);
circle_71.bindTooltip("Bhatpara<br>rank: 71<br>hazard index: 0.000064")
circle_71.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhatpara">Bhatpara</a>')

var circle_72 = L.circle([29.988077, 77.508130], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 61, "stroke": true, "weight": 3}).addTo(map);
circle_72.bindTooltip("Saharanpur<br>rank: 72<br>hazard index: 0.000061")
circle_72.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Saharanpur">Saharanpur</a>')

var circle_73 = L.circle([22.870214, 88.419608], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 61, "stroke": true, "weight": 3}).addTo(map);
circle_73.bindTooltip("Barrackpur<br>rank: 73<br>hazard index: 0.000061")
circle_73.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barrackpur">Barrackpur</a>')

var circle_74 = L.circle([23.405848, 88.495894], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 58, "stroke": true, "weight": 3}).addTo(map);
circle_74.bindTooltip("Krishnanagar<br>rank: 74<br>hazard index: 0.000058")
circle_74.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Krishnanagar">Krishnanagar</a>')

var circle_75 = L.circle([24.379576, 88.585573], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 55, "stroke": true, "weight": 3}).addTo(map);
circle_75.bindTooltip("Baharampur<br>rank: 75<br>hazard index: 0.000055")
circle_75.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baharampur">Baharampur</a>')

var circle_76 = L.circle([25.286698, 87.132254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 53, "stroke": true, "weight": 3}).addTo(map);
circle_76.bindTooltip("Bhagalpur<br>rank: 76<br>hazard index: 0.000054")
circle_76.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhagalpur">Bhagalpur</a>')

var circle_77 = L.circle([12.955100, 78.269900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 53, "stroke": true, "weight": 3}).addTo(map);
circle_77.bindTooltip("Robertson Pet<br>rank: 77<br>hazard index: 0.000054")
circle_77.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Robertson_Pet">Robertson Pet</a>')

var circle_78 = L.circle([27.876990, 78.137290], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 51, "stroke": true, "weight": 3}).addTo(map);
circle_78.bindTooltip("Aligarh<br>rank: 78<br>hazard index: 0.000051")
circle_78.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Aligarh">Aligarh</a>')

var circle_79 = L.circle([29.003314, 77.016732], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 50, "stroke": true, "weight": 3}).addTo(map);
circle_79.bindTooltip("Sonipat<br>rank: 79<br>hazard index: 0.000051")
circle_79.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sonipat">Sonipat</a>')

var circle_80 = L.circle([28.733400, 77.298600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 50, "stroke": true, "weight": 3}).addTo(map);
circle_80.bindTooltip("Loni<br>rank: 80<br>hazard index: 0.000050")
circle_80.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Loni">Loni</a>')

var circle_81 = L.circle([18.112082, 83.405220], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 50, "stroke": true, "weight": 3}).addTo(map);
circle_81.bindTooltip("Vizianagaram<br>rank: 81<br>hazard index: 0.000050")
circle_81.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vizianagaram">Vizianagaram</a>')

var circle_82 = L.circle([30.733442, 76.779714], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 47, "stroke": true, "weight": 3}).addTo(map);
circle_82.bindTooltip("Chandigarh<br>rank: 82<br>hazard index: 0.000047")
circle_82.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chandigarh">Chandigarh</a>')

var circle_83 = L.circle([8.576971, 77.050125], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 46, "stroke": true, "weight": 3}).addTo(map);
circle_83.bindTooltip("Thiruvananthapuram<br>rank: 83<br>hazard index: 0.000046")
circle_83.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thiruvananthapuram">Thiruvananthapuram</a>')

var circle_84 = L.circle([25.512719, 86.090571], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 45, "stroke": true, "weight": 3}).addTo(map);
circle_84.bindTooltip("Begusarai<br>rank: 84<br>hazard index: 0.000046")
circle_84.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Begusarai">Begusarai</a>')

var circle_85 = L.circle([22.801519, 86.202958], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 45, "stroke": true, "weight": 3}).addTo(map);
circle_85.bindTooltip("Jamshedpur<br>rank: 85<br>hazard index: 0.000046")
circle_85.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jamshedpur">Jamshedpur</a>')

var circle_86 = L.circle([22.754995, 88.341667], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 45, "stroke": true, "weight": 3}).addTo(map);
circle_86.bindTooltip("Serampore<br>rank: 86<br>hazard index: 0.000046")
circle_86.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Serampore">Serampore</a>')

var circle_87 = L.circle([22.949011, 88.435910], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 45, "stroke": true, "weight": 3}).addTo(map);
circle_87.bindTooltip("Kanchrapara<br>rank: 87<br>hazard index: 0.000045")
circle_87.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kanchrapara">Kanchrapara</a>')

var circle_88 = L.circle([10.804973, 78.687030], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43, "stroke": true, "weight": 3}).addTo(map);
circle_88.bindTooltip("Tiruchirappalli<br>rank: 88<br>hazard index: 0.000044")
circle_88.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tiruchirappalli">Tiruchirappalli</a>')

var circle_89 = L.circle([22.717624, 88.488953], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43, "stroke": true, "weight": 3}).addTo(map);
circle_89.bindTooltip("Barasat<br>rank: 89<br>hazard index: 0.000044")
circle_89.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barasat">Barasat</a>')

var circle_90 = L.circle([21.170200, 72.831100], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43, "stroke": true, "weight": 3}).addTo(map);
circle_90.bindTooltip("Surat<br>rank: 90<br>hazard index: 0.000044")
circle_90.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Surat">Surat</a>')

var circle_91 = L.circle([26.469100, 74.639000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43, "stroke": true, "weight": 3}).addTo(map);
circle_91.bindTooltip("Ajmer<br>rank: 91<br>hazard index: 0.000043")
circle_91.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ajmer">Ajmer</a>')

var circle_92 = L.circle([28.660965, 76.834676], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 40, "stroke": true, "weight": 3}).addTo(map);
circle_92.bindTooltip("Bahadurgarh<br>rank: 92<br>hazard index: 0.000040")
circle_92.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bahadurgarh">Bahadurgarh</a>')

var circle_93 = L.circle([25.196826, 76.000893], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 38, "stroke": true, "weight": 3}).addTo(map);
circle_93.bindTooltip("Kota<br>rank: 93<br>hazard index: 0.000039")
circle_93.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kota">Kota</a>')

var circle_94 = L.circle([13.631637, 79.423171], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 37, "stroke": true, "weight": 3}).addTo(map);
circle_94.bindTooltip("Tirupati<br>rank: 94<br>hazard index: 0.000038")
circle_94.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tirupati">Tirupati</a>')

var circle_95 = L.circle([29.391275, 76.977168], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 37, "stroke": true, "weight": 3}).addTo(map);
circle_95.bindTooltip("Panipat<br>rank: 95<br>hazard index: 0.000037")
circle_95.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Panipat">Panipat</a>')

var circle_96 = L.circle([32.718561, 74.858092], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_96.bindTooltip("Jammu<br>rank: 96<br>hazard index: 0.000037")
circle_96.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jammu">Jammu</a>')

var circle_97 = L.circle([22.794910, 88.331772], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_97.bindTooltip("Baidyabati<br>rank: 97<br>hazard index: 0.000037")
circle_97.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baidyabati">Baidyabati</a>')

var circle_98 = L.circle([12.732884, 77.830948], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_98.bindTooltip("Hosur<br>rank: 98<br>hazard index: 0.000036")
circle_98.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hosur">Hosur</a>')

var circle_99 = L.circle([19.807608, 85.825254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 35, "stroke": true, "weight": 3}).addTo(map);
circle_99.bindTooltip("Puri<br>rank: 99<br>hazard index: 0.000036")
circle_99.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Puri">Puri</a>')

var circle_100 = L.circle([18.627929, 73.800983], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 35, "stroke": true, "weight": 3}).addTo(map);
circle_100.bindTooltip("Pimpri Chinchwad<br>rank: 100<br>hazard index: 0.000036")
circle_100.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pimpri_Chinchwad">Pimpri Chinchwad</a>')
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
<td>Guwahati</td>
</tr>

<tr>
<td>2</td>
<td>Silchar</td>
</tr>

<tr>
<td>3</td>
<td>Dimapur</td>
</tr>

<tr>
<td>4</td>
<td>Dibrugarh</td>
</tr>

<tr>
<td>5</td>
<td>Nagaon</td>
</tr>

<tr>
<td>6</td>
<td>Tezpur</td>
</tr>

<tr>
<td>7</td>
<td>Kolkata</td>
</tr>

<tr>
<td>8</td>
<td>Delhi</td>
</tr>

<tr>
<td>9</td>
<td>Bangalore</td>
</tr>

<tr>
<td>10</td>
<td>Agartala</td>
</tr>

</table>
</div>
</div>


<p align="center">This hazard map shows top-100 cities that are at most risk if an infectious disease breaks out at Shillong. The size of red circle indicates the relative magnitude of risk. Bigger the circle, more the risk. The table on the side highlights the list of top-10 cities that are at most risk. Smaller the rank, more the risk. Thus, rank 3 is more at risk compared to rank 4, and so on.You can also click on any city to make that city an outbreak location. You will get a new hazard map with the chosen city/town as outbreak location.
</p>