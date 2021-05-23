---
layout: page
title: "Outbreak location: Purulia"
---
<div style="width: 100%; overflow: auto;">
<div style="width: 75%; float: left;">
<div id="mapid">
<script src="https://buda-magenta.github.io/hazard_map/load_map.js"></script>

<script>
var marker_outbreak = L.marker([23.332200, 86.361600],{"autoPan": true}).addTo(map); marker_outbreak.bindTooltip("Purulia").openTooltip();

var circle_1 = L.circle([22.541418, 88.357691], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 118789, "stroke": true, "weight": 3}).addTo(map);
circle_1.bindTooltip("Kolkata<br>rank: 1<br>hazard index: 0.118790")
circle_1.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolkata">Kolkata</a>')

var circle_2 = L.circle([23.687130, 86.974659], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 76930, "stroke": true, "weight": 3}).addTo(map);
circle_2.bindTooltip("Asansol<br>rank: 2<br>hazard index: 0.076930")
circle_2.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Asansol">Asansol</a>')

var circle_3 = L.circle([22.801519, 86.202958], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36046, "stroke": true, "weight": 3}).addTo(map);
circle_3.bindTooltip("Jamshedpur<br>rank: 3<br>hazard index: 0.036046")
circle_3.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jamshedpur">Jamshedpur</a>')

var circle_4 = L.circle([25.133173, 86.525040], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 22040, "stroke": true, "weight": 3}).addTo(map);
circle_4.bindTooltip("Kharagpur<br>rank: 4<br>hazard index: 0.022041")
circle_4.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kharagpur">Kharagpur</a>')

var circle_5 = L.circle([23.699128, 85.991069], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 20023, "stroke": true, "weight": 3}).addTo(map);
circle_5.bindTooltip("Bokaro<br>rank: 5<br>hazard index: 0.020023")
circle_5.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bokaro">Bokaro</a>')

var circle_6 = L.circle([25.572433, 83.609605], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 17357, "stroke": true, "weight": 3}).addTo(map);
circle_6.bindTooltip("Medinipur<br>rank: 6<br>hazard index: 0.017358")
circle_6.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Medinipur">Medinipur</a>')

var circle_7 = L.circle([23.131954, 87.207397], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 14166, "stroke": true, "weight": 3}).addTo(map);
circle_7.bindTooltip("Bankura<br>rank: 7<br>hazard index: 0.014167")
circle_7.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bankura">Bankura</a>')

var circle_8 = L.circle([23.370035, 85.325013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 13622, "stroke": true, "weight": 3}).addTo(map);
circle_8.bindTooltip("Ranchi<br>rank: 8<br>hazard index: 0.013622")
circle_8.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ranchi">Ranchi</a>')

var circle_9 = L.circle([23.535048, 87.338043], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4921, "stroke": true, "weight": 3}).addTo(map);
circle_9.bindTooltip("Durgapur<br>rank: 9<br>hazard index: 0.004921")
circle_9.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Durgapur">Durgapur</a>')

var circle_10 = L.circle([22.591260, 88.390964], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3477, "stroke": true, "weight": 3}).addTo(map);
circle_10.bindTooltip("Bidhan Nagar<br>rank: 10<br>hazard index: 0.003478")
circle_10.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bidhan_Nagar">Bidhan Nagar</a>')

var circle_11 = L.circle([23.795281, 86.430964], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3372, "stroke": true, "weight": 3}).addTo(map);
circle_11.bindTooltip("Dhanbad<br>rank: 11<br>hazard index: 0.003372")
circle_11.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dhanbad">Dhanbad</a>')

var circle_12 = L.circle([25.609324, 85.123525], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2672, "stroke": true, "weight": 3}).addTo(map);
circle_12.bindTooltip("Patna<br>rank: 12<br>hazard index: 0.002673")
circle_12.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Patna">Patna</a>')

var circle_13 = L.circle([23.250000, 87.750000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2412, "stroke": true, "weight": 3}).addTo(map);
circle_13.bindTooltip("Barddhaman<br>rank: 13<br>hazard index: 0.002412")
circle_13.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barddhaman">Barddhaman</a>')

var circle_14 = L.circle([22.472223, 88.093845], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2406, "stroke": true, "weight": 3}).addTo(map);
circle_14.bindTooltip("Uluberia<br>rank: 14<br>hazard index: 0.002407")
circle_14.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Uluberia">Uluberia</a>')

var circle_15 = L.circle([20.266777, 85.843559], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2248, "stroke": true, "weight": 3}).addTo(map);
circle_15.bindTooltip("Bhubaneswar<br>rank: 15<br>hazard index: 0.002248")
circle_15.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhubaneswar">Bhubaneswar</a>')

var circle_16 = L.circle([22.782355, 86.159003], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2115, "stroke": true, "weight": 3}).addTo(map);
circle_16.bindTooltip("Adityapur<br>rank: 16<br>hazard index: 0.002116")
circle_16.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Adityapur">Adityapur</a>')

var circle_17 = L.circle([22.508621, 88.253218], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1803, "stroke": true, "weight": 3}).addTo(map);
circle_17.bindTooltip("Maheshtala<br>rank: 17<br>hazard index: 0.001803")
circle_17.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Maheshtala">Maheshtala</a>')

var circle_18 = L.circle([17.723128, 83.301284], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1786, "stroke": true, "weight": 3}).addTo(map);
circle_18.bindTooltip("Visakhapatnam<br>rank: 18<br>hazard index: 0.001787")
circle_18.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Visakhapatnam">Visakhapatnam</a>')

var circle_19 = L.circle([26.716413, 88.430992], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1722, "stroke": true, "weight": 3}).addTo(map);
circle_19.bindTooltip("Siliguri<br>rank: 19<br>hazard index: 0.001723")
circle_19.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Siliguri">Siliguri</a>')

var circle_20 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1714, "stroke": true, "weight": 3}).addTo(map);
circle_20.bindTooltip("Delhi<br>rank: 20<br>hazard index: 0.001714")
circle_20.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Delhi">Delhi</a>')

var circle_21 = L.circle([20.468600, 85.879200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1626, "stroke": true, "weight": 3}).addTo(map);
circle_21.bindTooltip("Cuttack<br>rank: 21<br>hazard index: 0.001626")
circle_21.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Cuttack">Cuttack</a>')

var circle_22 = L.circle([23.831238, 91.282382], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1603, "stroke": true, "weight": 3}).addTo(map);
circle_22.bindTooltip("Agartala<br>rank: 22<br>hazard index: 0.001603")
circle_22.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Agartala">Agartala</a>')

var circle_23 = L.circle([25.680654, 88.124646], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1591, "stroke": true, "weight": 3}).addTo(map);
circle_23.bindTooltip("Raiganj<br>rank: 23<br>hazard index: 0.001592")
circle_23.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raiganj">Raiganj</a>')

var circle_24 = L.circle([22.695034, 88.377060], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1538, "stroke": true, "weight": 3}).addTo(map);
circle_24.bindTooltip("Panihati<br>rank: 24<br>hazard index: 0.001539")
circle_24.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Panihati">Panihati</a>')

var circle_25 = L.circle([24.476642, 86.606732], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1427, "stroke": true, "weight": 3}).addTo(map);
circle_25.bindTooltip("Deoghar<br>rank: 25<br>hazard index: 0.001427")
circle_25.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Deoghar">Deoghar</a>')

var circle_26 = L.circle([22.890183, 88.426939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1357, "stroke": true, "weight": 3}).addTo(map);
circle_26.bindTooltip("Naihati<br>rank: 26<br>hazard index: 0.001357")
circle_26.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Naihati">Naihati</a>')

var circle_27 = L.circle([22.670728, 88.376342], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1350, "stroke": true, "weight": 3}).addTo(map);
circle_27.bindTooltip("Kamarhati<br>rank: 27<br>hazard index: 0.001350")
circle_27.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kamarhati">Kamarhati</a>')

var circle_28 = L.circle([19.075990, 72.877393], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1299, "stroke": true, "weight": 3}).addTo(map);
circle_28.bindTooltip("Mumbai<br>rank: 28<br>hazard index: 0.001300")
circle_28.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mumbai">Mumbai</a>')

var circle_29 = L.circle([22.646958, 88.343612], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1171, "stroke": true, "weight": 3}).addTo(map);
circle_29.bindTooltip("Bally<br>rank: 29<br>hazard index: 0.001171")
circle_29.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bally">Bally</a>')

var circle_30 = L.circle([22.214285, 84.872437], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1171, "stroke": true, "weight": 3}).addTo(map);
circle_30.bindTooltip("Raurkela<br>rank: 30<br>hazard index: 0.001171")
circle_30.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raurkela">Raurkela</a>')

var circle_31 = L.circle([26.083143, 86.032571], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1139, "stroke": true, "weight": 3}).addTo(map);
circle_31.bindTooltip("Darbhanga<br>rank: 31<br>hazard index: 0.001140")
circle_31.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Darbhanga">Darbhanga</a>')

var circle_32 = L.circle([22.717624, 88.488953], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1137, "stroke": true, "weight": 3}).addTo(map);
circle_32.bindTooltip("Barasat<br>rank: 32<br>hazard index: 0.001137")
circle_32.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barasat">Barasat</a>')

var circle_33 = L.circle([16.508759, 80.618510], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1082, "stroke": true, "weight": 3}).addTo(map);
circle_33.bindTooltip("Vijayawada<br>rank: 33<br>hazard index: 0.001082")
circle_33.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vijayawada">Vijayawada</a>')

var circle_34 = L.circle([22.707369, 88.374437], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 996, "stroke": true, "weight": 3}).addTo(map);
circle_34.bindTooltip("Baranagar<br>rank: 34<br>hazard index: 0.000997")
circle_34.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baranagar">Baranagar</a>')

var circle_35 = L.circle([22.028124, 88.063265], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 874, "stroke": true, "weight": 3}).addTo(map);
circle_35.bindTooltip("Haldia<br>rank: 35<br>hazard index: 0.000874")
circle_35.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Haldia">Haldia</a>')

var circle_36 = L.circle([24.965712, 88.127778], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 850, "stroke": true, "weight": 3}).addTo(map);
circle_36.bindTooltip("English Bazar<br>rank: 36<br>hazard index: 0.000850")
circle_36.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/English_Bazar">English Bazar</a>')

var circle_37 = L.circle([12.979120, 77.591300], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 842, "stroke": true, "weight": 3}).addTo(map);
circle_37.bindTooltip("Bangalore<br>rank: 37<br>hazard index: 0.000843")
circle_37.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bangalore">Bangalore</a>')

var circle_38 = L.circle([26.180598, 91.753943], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 834, "stroke": true, "weight": 3}).addTo(map);
circle_38.bindTooltip("Guwahati<br>rank: 38<br>hazard index: 0.000834")
circle_38.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guwahati">Guwahati</a>')

var circle_39 = L.circle([22.694792, 88.453018], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 798, "stroke": true, "weight": 3}).addTo(map);
circle_39.bindTooltip("Madhyamgram<br>rank: 39<br>hazard index: 0.000798")
circle_39.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Madhyamgram">Madhyamgram</a>')

var circle_40 = L.circle([24.379576, 88.585573], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 783, "stroke": true, "weight": 3}).addTo(map);
circle_40.bindTooltip("Baharampur<br>rank: 40<br>hazard index: 0.000784")
circle_40.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baharampur">Baharampur</a>')

var circle_41 = L.circle([22.754995, 88.341667], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 735, "stroke": true, "weight": 3}).addTo(map);
circle_41.bindTooltip("Serampore<br>rank: 41<br>hazard index: 0.000736")
circle_41.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Serampore">Serampore</a>')

var circle_42 = L.circle([26.148658, 85.340013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 715, "stroke": true, "weight": 3}).addTo(map);
circle_42.bindTooltip("Muzaffarpur<br>rank: 42<br>hazard index: 0.000716")
circle_42.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Muzaffarpur">Muzaffarpur</a>')

var circle_43 = L.circle([22.901200, 88.389900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 710, "stroke": true, "weight": 3}).addTo(map);
circle_43.bindTooltip("Hugli-Chinsurah<br>rank: 43<br>hazard index: 0.000711")
circle_43.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hugli-Chinsurah">Hugli-Chinsurah</a>')

var circle_44 = L.circle([22.667046, 88.341146], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 651, "stroke": true, "weight": 3}).addTo(map);
circle_44.bindTooltip("Uttarpara<br>rank: 44<br>hazard index: 0.000651")
circle_44.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Uttarpara">Uttarpara</a>')

var circle_45 = L.circle([21.735348, 81.944459], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 651, "stroke": true, "weight": 3}).addTo(map);
circle_45.bindTooltip("Bhatpara<br>rank: 45<br>hazard index: 0.000651")
circle_45.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhatpara">Bhatpara</a>')

var circle_46 = L.circle([22.870214, 88.419608], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 625, "stroke": true, "weight": 3}).addTo(map);
circle_46.bindTooltip("Barrackpur<br>rank: 46<br>hazard index: 0.000625")
circle_46.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barrackpur">Barrackpur</a>')

var circle_47 = L.circle([13.083694, 80.270186], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 611, "stroke": true, "weight": 3}).addTo(map);
circle_47.bindTooltip("Chennai<br>rank: 47<br>hazard index: 0.000612")
circle_47.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chennai">Chennai</a>')

var circle_48 = L.circle([23.405848, 88.495894], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 610, "stroke": true, "weight": 3}).addTo(map);
circle_48.bindTooltip("Krishnanagar<br>rank: 48<br>hazard index: 0.000611")
circle_48.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Krishnanagar">Krishnanagar</a>')

var circle_49 = L.circle([23.259346, 88.437212], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 608, "stroke": true, "weight": 3}).addTo(map);
circle_49.bindTooltip("Santipur<br>rank: 49<br>hazard index: 0.000609")
circle_49.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Santipur">Santipur</a>')

var circle_50 = L.circle([22.840800, 88.653500], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 600, "stroke": true, "weight": 3}).addTo(map);
circle_50.bindTooltip("Habra<br>rank: 50<br>hazard index: 0.000600")
circle_50.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Habra">Habra</a>')

var circle_51 = L.circle([17.388786, 78.461065], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 589, "stroke": true, "weight": 3}).addTo(map);
circle_51.bindTooltip("Hyderabad<br>rank: 51<br>hazard index: 0.000589")
circle_51.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hyderabad">Hyderabad</a>')

var circle_52 = L.circle([25.286698, 87.132254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 580, "stroke": true, "weight": 3}).addTo(map);
circle_52.bindTooltip("Bhagalpur<br>rank: 52<br>hazard index: 0.000580")
circle_52.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhagalpur">Bhagalpur</a>')

var circle_53 = L.circle([23.730215, 86.839671], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 529, "stroke": true, "weight": 3}).addTo(map);
circle_53.bindTooltip("Kulti<br>rank: 53<br>hazard index: 0.000530")
circle_53.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kulti">Kulti</a>')

var circle_54 = L.circle([21.237947, 81.633683], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 528, "stroke": true, "weight": 3}).addTo(map);
circle_54.bindTooltip("Raipur<br>rank: 54<br>hazard index: 0.000529")
circle_54.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raipur">Raipur</a>')

var circle_55 = L.circle([14.449372, 79.987376], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 521, "stroke": true, "weight": 3}).addTo(map);
circle_55.bindTooltip("Nellore<br>rank: 55<br>hazard index: 0.000522")
circle_55.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nellore">Nellore</a>')

var circle_56 = L.circle([22.661196, 88.866022], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 510, "stroke": true, "weight": 3}).addTo(map);
circle_56.bindTooltip("Basirhat<br>rank: 56<br>hazard index: 0.000510")
circle_56.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Basirhat">Basirhat</a>')

var circle_57 = L.circle([22.920982, 88.437022], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 509, "stroke": true, "weight": 3}).addTo(map);
circle_57.bindTooltip("Halisahar<br>rank: 57<br>hazard index: 0.000509")
circle_57.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Halisahar">Halisahar</a>')

var circle_58 = L.circle([23.388901, 88.372439], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 503, "stroke": true, "weight": 3}).addTo(map);
circle_58.bindTooltip("Nabadwip<br>rank: 58<br>hazard index: 0.000504")
circle_58.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nabadwip">Nabadwip</a>')

var circle_59 = L.circle([22.726141, 88.343487], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 499, "stroke": true, "weight": 3}).addTo(map);
circle_59.bindTooltip("Rishra<br>rank: 59<br>hazard index: 0.000500")
circle_59.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rishra">Rishra</a>')

var circle_60 = L.circle([22.949011, 88.435910], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 490, "stroke": true, "weight": 3}).addTo(map);
circle_60.bindTooltip("Kanchrapara<br>rank: 60<br>hazard index: 0.000490")
circle_60.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kanchrapara">Kanchrapara</a>')

var circle_61 = L.circle([26.838100, 80.934600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 448, "stroke": true, "weight": 3}).addTo(map);
circle_61.bindTooltip("Lucknow<br>rank: 61<br>hazard index: 0.000449")
circle_61.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Lucknow">Lucknow</a>')

var circle_62 = L.circle([22.794910, 88.331772], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 430, "stroke": true, "weight": 3}).addTo(map);
circle_62.bindTooltip("Baidyabati<br>rank: 62<br>hazard index: 0.000431")
circle_62.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baidyabati">Baidyabati</a>')

var circle_63 = L.circle([22.741920, 88.379201], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 421, "stroke": true, "weight": 3}).addTo(map);
circle_63.bindTooltip("Titagarh<br>rank: 63<br>hazard index: 0.000421")
circle_63.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Titagarh">Titagarh</a>')

var circle_64 = L.circle([23.056882, 88.781851], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 408, "stroke": true, "weight": 3}).addTo(map);
circle_64.bindTooltip("Bongaon<br>rank: 64<br>hazard index: 0.000408")
circle_64.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bongaon">Bongaon</a>')

var circle_65 = L.circle([22.715699, 88.381582], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 395, "stroke": true, "weight": 3}).addTo(map);
circle_65.bindTooltip("Khardaha<br>rank: 65<br>hazard index: 0.000395")
circle_65.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Khardaha">Khardaha</a>')

var circle_66 = L.circle([22.965365, 88.403973], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 372, "stroke": true, "weight": 3}).addTo(map);
circle_66.bindTooltip("Bansberia<br>rank: 66<br>hazard index: 0.000373")
circle_66.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bansberia">Bansberia</a>')

var circle_67 = L.circle([22.974972, 88.434592], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 361, "stroke": true, "weight": 3}).addTo(map);
circle_67.bindTooltip("Kalyani<br>rank: 67<br>hazard index: 0.000361")
circle_67.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kalyani">Kalyani</a>')

var circle_68 = L.circle([17.005045, 81.780473], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 355, "stroke": true, "weight": 3}).addTo(map);
circle_68.bindTooltip("Rajahmundry<br>rank: 68<br>hazard index: 0.000355")
circle_68.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rajahmundry">Rajahmundry</a>')

var circle_69 = L.circle([21.149813, 79.082056], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 336, "stroke": true, "weight": 3}).addTo(map);
circle_69.bindTooltip("Nagpur<br>rank: 69<br>hazard index: 0.000337")
circle_69.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagpur">Nagpur</a>')

var circle_70 = L.circle([19.807608, 85.825254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 333, "stroke": true, "weight": 3}).addTo(map);
circle_70.bindTooltip("Puri<br>rank: 70<br>hazard index: 0.000333")
circle_70.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Puri">Puri</a>')

var circle_71 = L.circle([21.500000, 86.750000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 317, "stroke": true, "weight": 3}).addTo(map);
circle_71.bindTooltip("Baleshwar<br>rank: 71<br>hazard index: 0.000317")
circle_71.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baleshwar">Baleshwar</a>')

var circle_72 = L.circle([25.773344, 84.784977], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 293, "stroke": true, "weight": 3}).addTo(map);
circle_72.bindTooltip("Chapra<br>rank: 72<br>hazard index: 0.000294")
circle_72.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chapra">Chapra</a>')

var circle_73 = L.circle([26.698885, 88.320030], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 274, "stroke": true, "weight": 3}).addTo(map);
circle_73.bindTooltip("Bagdogra<br>rank: 73<br>hazard index: 0.000274")
circle_73.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bagdogra">Bagdogra</a>')

var circle_74 = L.circle([23.021624, 72.579707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 267, "stroke": true, "weight": 3}).addTo(map);
circle_74.bindTooltip("Ahmedabad<br>rank: 74<br>hazard index: 0.000267")
circle_74.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmedabad">Ahmedabad</a>')

var circle_75 = L.circle([26.505476, 93.977739], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 255, "stroke": true, "weight": 3}).addTo(map);
circle_75.bindTooltip("Chandan Nagar<br>rank: 75<br>hazard index: 0.000256")
circle_75.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chandan_Nagar">Chandan Nagar</a>')

var circle_76 = L.circle([24.796436, 85.007956], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 253, "stroke": true, "weight": 3}).addTo(map);
circle_76.bindTooltip("Gaya<br>rank: 76<br>hazard index: 0.000253")
circle_76.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gaya">Gaya</a>')

var circle_77 = L.circle([18.521428, 73.854454], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 239, "stroke": true, "weight": 3}).addTo(map);
circle_77.bindTooltip("Pune<br>rank: 77<br>hazard index: 0.000240")
circle_77.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pune">Pune</a>')

var circle_78 = L.circle([22.383333, 82.133333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 239, "stroke": true, "weight": 3}).addTo(map);
circle_78.bindTooltip("Bilaspur<br>rank: 78<br>hazard index: 0.000239")
circle_78.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bilaspur">Bilaspur</a>')

var circle_79 = L.circle([18.112082, 83.405220], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 232, "stroke": true, "weight": 3}).addTo(map);
circle_79.bindTooltip("Vizianagaram<br>rank: 79<br>hazard index: 0.000233")
circle_79.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vizianagaram">Vizianagaram</a>')

var circle_80 = L.circle([25.335649, 83.007629], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 227, "stroke": true, "weight": 3}).addTo(map);
circle_80.bindTooltip("Varanasi<br>rank: 80<br>hazard index: 0.000227")
circle_80.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Varanasi">Varanasi</a>')

var circle_81 = L.circle([16.676135, 81.170868], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 221, "stroke": true, "weight": 3}).addTo(map);
circle_81.bindTooltip("Eluru<br>rank: 81<br>hazard index: 0.000221")
circle_81.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Eluru">Eluru</a>')

var circle_82 = L.circle([26.915458, 75.818982], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 219, "stroke": true, "weight": 3}).addTo(map);
circle_82.bindTooltip("Jaipur<br>rank: 82<br>hazard index: 0.000220")
circle_82.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jaipur">Jaipur</a>')

var circle_83 = L.circle([26.460914, 80.321759], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 218, "stroke": true, "weight": 3}).addTo(map);
circle_83.bindTooltip("Kanpur<br>rank: 83<br>hazard index: 0.000218")
circle_83.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kanpur">Kanpur</a>')

var circle_84 = L.circle([25.720581, 85.255560], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 214, "stroke": true, "weight": 3}).addTo(map);
circle_84.bindTooltip("Hajipur<br>rank: 84<br>hazard index: 0.000214")
circle_84.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hajipur">Hajipur</a>')

var circle_85 = L.circle([15.507555, 80.060800], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 209, "stroke": true, "weight": 3}).addTo(map);
circle_85.bindTooltip("Ongole<br>rank: 85<br>hazard index: 0.000209")
circle_85.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ongole">Ongole</a>')

var circle_86 = L.circle([11.664535, 92.739045], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 200, "stroke": true, "weight": 3}).addTo(map);
circle_86.bindTooltip("Port Blair<br>rank: 86<br>hazard index: 0.000201")
circle_86.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Port_Blair">Port Blair</a>')

var circle_87 = L.circle([12.794811, 79.000641], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 188, "stroke": true, "weight": 3}).addTo(map);
circle_87.bindTooltip("Vellore<br>rank: 87<br>hazard index: 0.000189")
circle_87.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vellore">Vellore</a>')

var circle_88 = L.circle([21.063329, 86.505373], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 188, "stroke": true, "weight": 3}).addTo(map);
circle_88.bindTooltip("Bhadrak<br>rank: 88<br>hazard index: 0.000188")
circle_88.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhadrak">Bhadrak</a>')

var circle_89 = L.circle([26.626484, 88.734077], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 178, "stroke": true, "weight": 3}).addTo(map);
circle_89.bindTooltip("Jalpaiguri<br>rank: 89<br>hazard index: 0.000179")
circle_89.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalpaiguri">Jalpaiguri</a>')

var circle_90 = L.circle([26.298638, 87.953148], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 150, "stroke": true, "weight": 3}).addTo(map);
circle_90.bindTooltip("Kishanganj<br>rank: 90<br>hazard index: 0.000151")
circle_90.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kishanganj">Kishanganj</a>')

var circle_91 = L.circle([12.227213, 79.070156], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 147, "stroke": true, "weight": 3}).addTo(map);
circle_91.bindTooltip("Tiruvannamalai<br>rank: 91<br>hazard index: 0.000147")
circle_91.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tiruvannamalai">Tiruvannamalai</a>')

var circle_92 = L.circle([21.199035, 81.397955], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 140, "stroke": true, "weight": 3}).addTo(map);
circle_92.bindTooltip("Durg<br>rank: 92<br>hazard index: 0.000141")
circle_92.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Durg">Durg</a>')

var circle_93 = L.circle([25.623400, 85.041700], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 127, "stroke": true, "weight": 3}).addTo(map);
circle_93.bindTooltip("Dinapur Nizamat<br>rank: 93<br>hazard index: 0.000127")
circle_93.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dinapur_Nizamat">Dinapur Nizamat</a>')

var circle_94 = L.circle([25.560900, 87.647654], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 126, "stroke": true, "weight": 3}).addTo(map);
circle_94.bindTooltip("Katihar<br>rank: 94<br>hazard index: 0.000127")
circle_94.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Katihar">Katihar</a>')

var circle_95 = L.circle([21.400000, 83.883333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 122, "stroke": true, "weight": 3}).addTo(map);
circle_95.bindTooltip("Sambalpur<br>rank: 95<br>hazard index: 0.000122")
circle_95.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sambalpur">Sambalpur</a>')

var circle_96 = L.circle([25.438130, 81.833800], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 121, "stroke": true, "weight": 3}).addTo(map);
circle_96.bindTooltip("Allahabad<br>rank: 96<br>hazard index: 0.000122")
circle_96.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Allahabad">Allahabad</a>')

var circle_97 = L.circle([21.934900, 86.732400], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 120, "stroke": true, "weight": 3}).addTo(map);
circle_97.bindTooltip("Baripada<br>rank: 97<br>hazard index: 0.000120")
circle_97.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baripada">Baripada</a>')

var circle_98 = L.circle([21.170200, 72.831100], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 110, "stroke": true, "weight": 3}).addTo(map);
circle_98.bindTooltip("Surat<br>rank: 98<br>hazard index: 0.000111")
circle_98.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Surat">Surat</a>')

var circle_99 = L.circle([24.800609, 93.937000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 102, "stroke": true, "weight": 3}).addTo(map);
circle_99.bindTooltip("Imphal<br>rank: 99<br>hazard index: 0.000103")
circle_99.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Imphal">Imphal</a>')

var circle_100 = L.circle([22.500000, 83.500000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 99, "stroke": true, "weight": 3}).addTo(map);
circle_100.bindTooltip("Raigarh<br>rank: 100<br>hazard index: 0.000099")
circle_100.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raigarh">Raigarh</a>')
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
<td>Kolkata</td>
</tr>

<tr>
<td>2</td>
<td>Asansol</td>
</tr>

<tr>
<td>3</td>
<td>Jamshedpur</td>
</tr>

<tr>
<td>4</td>
<td>Kharagpur</td>
</tr>

<tr>
<td>5</td>
<td>Bokaro</td>
</tr>

<tr>
<td>6</td>
<td>Medinipur</td>
</tr>

<tr>
<td>7</td>
<td>Bankura</td>
</tr>

<tr>
<td>8</td>
<td>Ranchi</td>
</tr>

<tr>
<td>9</td>
<td>Durgapur</td>
</tr>

<tr>
<td>10</td>
<td>Bidhan Nagar</td>
</tr>

</table>
</div>
</div>


<p align="center">This hazard map shows top-100 cities that are at most risk if an infectious disease breaks out at Purulia. The size of red circle indicates the relative magnitude of risk. Bigger the circle, more the risk. The table on the side highlights the list of top-10 cities that are at most risk. Smaller the rank, more the risk. Thus, rank 3 is more at risk compared to rank 4, and so on.You can also click on any city to make that city an outbreak location. You will get a new hazard map with the chosen city/town as outbreak location.
</p>