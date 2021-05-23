---
layout: page
title: "Outbreak location: Aizawl"
---
<div style="width: 100%; overflow: auto;">
<div style="width: 75%; float: left;">
<div id="mapid">
<script src="https://buda-magenta.github.io/hazard_map/load_map.js"></script>

<script>
var marker_outbreak = L.marker([23.743524, 92.738291],{"autoPan": true}).addTo(map); marker_outbreak.bindTooltip("Aizawl").openTooltip();

var circle_1 = L.circle([24.800609, 93.937000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 175888, "stroke": true, "weight": 3}).addTo(map);
circle_1.bindTooltip("Imphal<br>rank: 1<br>hazard index: 0.175889")
circle_1.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Imphal">Imphal</a>')

var circle_2 = L.circle([23.831238, 91.282382], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 78363, "stroke": true, "weight": 3}).addTo(map);
circle_2.bindTooltip("Agartala<br>rank: 2<br>hazard index: 0.078364")
circle_2.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Agartala">Agartala</a>')

var circle_3 = L.circle([23.749721, 91.876635], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 68385, "stroke": true, "weight": 3}).addTo(map);
circle_3.bindTooltip("Ganganagar<br>rank: 3<br>hazard index: 0.068386")
circle_3.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ganganagar">Ganganagar</a>')

var circle_4 = L.circle([22.541418, 88.357691], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 15139, "stroke": true, "weight": 3}).addTo(map);
circle_4.bindTooltip("Kolkata<br>rank: 4<br>hazard index: 0.015139")
circle_4.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolkata">Kolkata</a>')

var circle_5 = L.circle([24.817861, 92.756221], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 12922, "stroke": true, "weight": 3}).addTo(map);
circle_5.bindTooltip("Silchar<br>rank: 5<br>hazard index: 0.012923")
circle_5.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Silchar">Silchar</a>')

var circle_6 = L.circle([26.180598, 91.753943], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 12487, "stroke": true, "weight": 3}).addTo(map);
circle_6.bindTooltip("Guwahati<br>rank: 6<br>hazard index: 0.012487")
circle_6.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guwahati">Guwahati</a>')

var circle_7 = L.circle([30.179115, 75.047102], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7653, "stroke": true, "weight": 3}).addTo(map);
circle_7.bindTooltip("Bathinda<br>rank: 7<br>hazard index: 0.007654")
circle_7.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bathinda">Bathinda</a>')

var circle_8 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6284, "stroke": true, "weight": 3}).addTo(map);
circle_8.bindTooltip("Delhi<br>rank: 8<br>hazard index: 0.006285")
circle_8.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Delhi">Delhi</a>')

var circle_9 = L.circle([30.145054, 74.195660], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3889, "stroke": true, "weight": 3}).addTo(map);
circle_9.bindTooltip("Abohar<br>rank: 9<br>hazard index: 0.003889")
circle_9.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Abohar">Abohar</a>')

var circle_10 = L.circle([25.913591, 93.728371], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2109, "stroke": true, "weight": 3}).addTo(map);
circle_10.bindTooltip("Dimapur<br>rank: 10<br>hazard index: 0.002110")
circle_10.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dimapur">Dimapur</a>')

var circle_11 = L.circle([30.209087, 76.339872], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1837, "stroke": true, "weight": 3}).addTo(map);
circle_11.bindTooltip("Patiala<br>rank: 11<br>hazard index: 0.001838")
circle_11.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Patiala">Patiala</a>')

var circle_12 = L.circle([27.484460, 94.901945], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 777, "stroke": true, "weight": 3}).addTo(map);
circle_12.bindTooltip("Dibrugarh<br>rank: 12<br>hazard index: 0.000778")
circle_12.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dibrugarh">Dibrugarh</a>')

var circle_13 = L.circle([12.979120, 77.591300], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 767, "stroke": true, "weight": 3}).addTo(map);
circle_13.bindTooltip("Bangalore<br>rank: 13<br>hazard index: 0.000768")
circle_13.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bangalore">Bangalore</a>')

var circle_14 = L.circle([26.505476, 93.977739], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 693, "stroke": true, "weight": 3}).addTo(map);
circle_14.bindTooltip("Chandan Nagar<br>rank: 14<br>hazard index: 0.000694")
circle_14.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chandan_Nagar">Chandan Nagar</a>')

var circle_15 = L.circle([30.370469, 75.504017], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 528, "stroke": true, "weight": 3}).addTo(map);
circle_15.bindTooltip("Barnala<br>rank: 15<br>hazard index: 0.000528")
circle_15.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barnala">Barnala</a>')

var circle_16 = L.circle([13.083694, 80.270186], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 506, "stroke": true, "weight": 3}).addTo(map);
circle_16.bindTooltip("Chennai<br>rank: 16<br>hazard index: 0.000506")
circle_16.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chennai">Chennai</a>')

var circle_17 = L.circle([30.384367, 76.770421], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 472, "stroke": true, "weight": 3}).addTo(map);
circle_17.bindTooltip("Ambala<br>rank: 17<br>hazard index: 0.000473")
circle_17.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ambala">Ambala</a>')

var circle_18 = L.circle([30.283140, 74.522997], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 467, "stroke": true, "weight": 3}).addTo(map);
circle_18.bindTooltip("Muktsar<br>rank: 18<br>hazard index: 0.000468")
circle_18.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Muktsar">Muktsar</a>')

var circle_19 = L.circle([22.591260, 88.390964], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 443, "stroke": true, "weight": 3}).addTo(map);
circle_19.bindTooltip("Bidhan Nagar<br>rank: 19<br>hazard index: 0.000443")
circle_19.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bidhan_Nagar">Bidhan Nagar</a>')

var circle_20 = L.circle([30.885100, 74.660141], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 387, "stroke": true, "weight": 3}).addTo(map);
circle_20.bindTooltip("Firozpur<br>rank: 20<br>hazard index: 0.000388")
circle_20.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Firozpur">Firozpur</a>')

var circle_21 = L.circle([17.388786, 78.461065], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 381, "stroke": true, "weight": 3}).addTo(map);
circle_21.bindTooltip("Hyderabad<br>rank: 21<br>hazard index: 0.000382")
circle_21.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hyderabad">Hyderabad</a>')

var circle_22 = L.circle([26.716413, 88.430992], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 348, "stroke": true, "weight": 3}).addTo(map);
circle_22.bindTooltip("Siliguri<br>rank: 22<br>hazard index: 0.000348")
circle_22.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Siliguri">Siliguri</a>')

var circle_23 = L.circle([29.367200, 74.298364], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 322, "stroke": true, "weight": 3}).addTo(map);
circle_23.bindTooltip("Hanumangarh<br>rank: 23<br>hazard index: 0.000322")
circle_23.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hanumangarh">Hanumangarh</a>')

var circle_24 = L.circle([23.250000, 87.750000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 305, "stroke": true, "weight": 3}).addTo(map);
circle_24.bindTooltip("Barddhaman<br>rank: 24<br>hazard index: 0.000305")
circle_24.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barddhaman">Barddhaman</a>')

var circle_25 = L.circle([25.576045, 91.882528], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 246, "stroke": true, "weight": 3}).addTo(map);
circle_25.bindTooltip("Shillong<br>rank: 25<br>hazard index: 0.000247")
circle_25.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Shillong">Shillong</a>')

var circle_26 = L.circle([26.460914, 80.321759], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 229, "stroke": true, "weight": 3}).addTo(map);
circle_26.bindTooltip("Kanpur<br>rank: 26<br>hazard index: 0.000229")
circle_26.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kanpur">Kanpur</a>')

var circle_27 = L.circle([22.472223, 88.093845], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 221, "stroke": true, "weight": 3}).addTo(map);
circle_27.bindTooltip("Uluberia<br>rank: 27<br>hazard index: 0.000222")
circle_27.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Uluberia">Uluberia</a>')

var circle_28 = L.circle([19.075990, 72.877393], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 201, "stroke": true, "weight": 3}).addTo(map);
circle_28.bindTooltip("Mumbai<br>rank: 28<br>hazard index: 0.000202")
circle_28.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mumbai">Mumbai</a>')

var circle_29 = L.circle([23.332200, 86.361600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 174, "stroke": true, "weight": 3}).addTo(map);
circle_29.bindTooltip("Purulia<br>rank: 29<br>hazard index: 0.000175")
circle_29.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Purulia">Purulia</a>')

var circle_30 = L.circle([22.890183, 88.426939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 172, "stroke": true, "weight": 3}).addTo(map);
circle_30.bindTooltip("Naihati<br>rank: 30<br>hazard index: 0.000173")
circle_30.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Naihati">Naihati</a>')

var circle_31 = L.circle([26.304149, 92.716060], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 160, "stroke": true, "weight": 3}).addTo(map);
circle_31.bindTooltip("Nagaon<br>rank: 31<br>hazard index: 0.000160")
circle_31.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagaon">Nagaon</a>')

var circle_32 = L.circle([23.535048, 87.338043], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 155, "stroke": true, "weight": 3}).addTo(map);
circle_32.bindTooltip("Durgapur<br>rank: 32<br>hazard index: 0.000155")
circle_32.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Durgapur">Durgapur</a>')

var circle_33 = L.circle([23.687130, 86.974659], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 143, "stroke": true, "weight": 3}).addTo(map);
circle_33.bindTooltip("Asansol<br>rank: 33<br>hazard index: 0.000143")
circle_33.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Asansol">Asansol</a>')

var circle_34 = L.circle([25.609324, 85.123525], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 139, "stroke": true, "weight": 3}).addTo(map);
circle_34.bindTooltip("Patna<br>rank: 34<br>hazard index: 0.000140")
circle_34.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Patna">Patna</a>')

var circle_35 = L.circle([22.695034, 88.377060], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 132, "stroke": true, "weight": 3}).addTo(map);
circle_35.bindTooltip("Panihati<br>rank: 35<br>hazard index: 0.000133")
circle_35.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Panihati">Panihati</a>')

var circle_36 = L.circle([24.965712, 88.127778], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 108, "stroke": true, "weight": 3}).addTo(map);
circle_36.bindTooltip("English Bazar<br>rank: 36<br>hazard index: 0.000108")
circle_36.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/English_Bazar">English Bazar</a>')

var circle_37 = L.circle([25.133173, 86.525040], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 107, "stroke": true, "weight": 3}).addTo(map);
circle_37.bindTooltip("Kharagpur<br>rank: 37<br>hazard index: 0.000108")
circle_37.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kharagpur">Kharagpur</a>')

var circle_38 = L.circle([22.670728, 88.376342], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 107, "stroke": true, "weight": 3}).addTo(map);
circle_38.bindTooltip("Kamarhati<br>rank: 38<br>hazard index: 0.000108")
circle_38.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kamarhati">Kamarhati</a>')

var circle_39 = L.circle([22.646958, 88.343612], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 98, "stroke": true, "weight": 3}).addTo(map);
circle_39.bindTooltip("Bally<br>rank: 39<br>hazard index: 0.000099")
circle_39.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bally">Bally</a>')

var circle_40 = L.circle([20.266777, 85.843559], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 97, "stroke": true, "weight": 3}).addTo(map);
circle_40.bindTooltip("Bhubaneswar<br>rank: 40<br>hazard index: 0.000097")
circle_40.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhubaneswar">Bhubaneswar</a>')

var circle_41 = L.circle([17.723128, 83.301284], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 92, "stroke": true, "weight": 3}).addTo(map);
circle_41.bindTooltip("Visakhapatnam<br>rank: 41<br>hazard index: 0.000093")
circle_41.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Visakhapatnam">Visakhapatnam</a>')

var circle_42 = L.circle([28.428262, 77.002700], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 88, "stroke": true, "weight": 3}).addTo(map);
circle_42.bindTooltip("Gurgaon<br>rank: 42<br>hazard index: 0.000089")
circle_42.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gurgaon">Gurgaon</a>')

var circle_43 = L.circle([22.508621, 88.253218], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 88, "stroke": true, "weight": 3}).addTo(map);
circle_43.bindTooltip("Maheshtala<br>rank: 43<br>hazard index: 0.000088")
circle_43.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Maheshtala">Maheshtala</a>')

var circle_44 = L.circle([29.301826, 76.338471], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 88, "stroke": true, "weight": 3}).addTo(map);
circle_44.bindTooltip("Jind<br>rank: 44<br>hazard index: 0.000088")
circle_44.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jind">Jind</a>')

var circle_45 = L.circle([25.286698, 87.132254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 87, "stroke": true, "weight": 3}).addTo(map);
circle_45.bindTooltip("Bhagalpur<br>rank: 45<br>hazard index: 0.000088")
circle_45.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhagalpur">Bhagalpur</a>')

var circle_46 = L.circle([21.735348, 81.944459], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 82, "stroke": true, "weight": 3}).addTo(map);
circle_46.bindTooltip("Bhatpara<br>rank: 46<br>hazard index: 0.000083")
circle_46.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhatpara">Bhatpara</a>')

var circle_47 = L.circle([26.838100, 80.934600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 82, "stroke": true, "weight": 3}).addTo(map);
circle_47.bindTooltip("Lucknow<br>rank: 47<br>hazard index: 0.000082")
circle_47.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Lucknow">Lucknow</a>')

var circle_48 = L.circle([28.402979, 77.310384], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 81, "stroke": true, "weight": 3}).addTo(map);
circle_48.bindTooltip("Faridabad<br>rank: 48<br>hazard index: 0.000082")
circle_48.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Faridabad">Faridabad</a>')

var circle_49 = L.circle([22.870214, 88.419608], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 79, "stroke": true, "weight": 3}).addTo(map);
circle_49.bindTooltip("Barrackpur<br>rank: 49<br>hazard index: 0.000080")
circle_49.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barrackpur">Barrackpur</a>')

var circle_50 = L.circle([23.405848, 88.495894], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 76, "stroke": true, "weight": 3}).addTo(map);
circle_50.bindTooltip("Krishnanagar<br>rank: 50<br>hazard index: 0.000076")
circle_50.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Krishnanagar">Krishnanagar</a>')

var circle_51 = L.circle([26.616957, 92.765007], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 73, "stroke": true, "weight": 3}).addTo(map);
circle_51.bindTooltip("Tezpur<br>rank: 51<br>hazard index: 0.000074")
circle_51.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tezpur">Tezpur</a>')

var circle_52 = L.circle([24.379576, 88.585573], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 72, "stroke": true, "weight": 3}).addTo(map);
circle_52.bindTooltip("Baharampur<br>rank: 52<br>hazard index: 0.000072")
circle_52.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baharampur">Baharampur</a>')

var circle_53 = L.circle([25.560900, 87.647654], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 68, "stroke": true, "weight": 3}).addTo(map);
circle_53.bindTooltip("Katihar<br>rank: 53<br>hazard index: 0.000069")
circle_53.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Katihar">Katihar</a>')

var circle_54 = L.circle([25.531031, 78.652689], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 67, "stroke": true, "weight": 3}).addTo(map);
circle_54.bindTooltip("Jhansi<br>rank: 54<br>hazard index: 0.000067")
circle_54.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jhansi">Jhansi</a>')

var circle_55 = L.circle([28.901090, 76.580194], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 64, "stroke": true, "weight": 3}).addTo(map);
circle_55.bindTooltip("Rohtak<br>rank: 55<br>hazard index: 0.000065")
circle_55.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rohtak">Rohtak</a>')

var circle_56 = L.circle([29.168807, 75.746110], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 62, "stroke": true, "weight": 3}).addTo(map);
circle_56.bindTooltip("Hisar<br>rank: 56<br>hazard index: 0.000063")
circle_56.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hisar">Hisar</a>')

var circle_57 = L.circle([26.698885, 88.320030], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 61, "stroke": true, "weight": 3}).addTo(map);
circle_57.bindTooltip("Bagdogra<br>rank: 57<br>hazard index: 0.000061")
circle_57.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bagdogra">Bagdogra</a>')

var circle_58 = L.circle([22.801519, 86.202958], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 59, "stroke": true, "weight": 3}).addTo(map);
circle_58.bindTooltip("Jamshedpur<br>rank: 58<br>hazard index: 0.000060")
circle_58.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jamshedpur">Jamshedpur</a>')

var circle_59 = L.circle([22.754995, 88.341667], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 59, "stroke": true, "weight": 3}).addTo(map);
circle_59.bindTooltip("Serampore<br>rank: 59<br>hazard index: 0.000060")
circle_59.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Serampore">Serampore</a>')

var circle_60 = L.circle([22.949011, 88.435910], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 58, "stroke": true, "weight": 3}).addTo(map);
circle_60.bindTooltip("Kanchrapara<br>rank: 60<br>hazard index: 0.000059")
circle_60.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kanchrapara">Kanchrapara</a>')

var circle_61 = L.circle([30.909016, 75.851601], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 58, "stroke": true, "weight": 3}).addTo(map);
circle_61.bindTooltip("Ludhiana<br>rank: 61<br>hazard index: 0.000058")
circle_61.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ludhiana">Ludhiana</a>')

var circle_62 = L.circle([22.717624, 88.488953], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 57, "stroke": true, "weight": 3}).addTo(map);
circle_62.bindTooltip("Barasat<br>rank: 62<br>hazard index: 0.000057")
circle_62.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barasat">Barasat</a>')

var circle_63 = L.circle([28.863842, 78.805778], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 56, "stroke": true, "weight": 3}).addTo(map);
circle_63.bindTooltip("Moradabad<br>rank: 63<br>hazard index: 0.000057")
circle_63.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Moradabad">Moradabad</a>')

var circle_64 = L.circle([29.000653, 77.768229], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 54, "stroke": true, "weight": 3}).addTo(map);
circle_64.bindTooltip("Meerut<br>rank: 64<br>hazard index: 0.000055")
circle_64.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Meerut">Meerut</a>')

var circle_65 = L.circle([26.296772, 73.035143], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 52, "stroke": true, "weight": 3}).addTo(map);
circle_65.bindTooltip("Jodhpur<br>rank: 65<br>hazard index: 0.000053")
circle_65.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jodhpur">Jodhpur</a>')

var circle_66 = L.circle([16.508759, 80.618510], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 51, "stroke": true, "weight": 3}).addTo(map);
circle_66.bindTooltip("Vijayawada<br>rank: 66<br>hazard index: 0.000051")
circle_66.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vijayawada">Vijayawada</a>')

var circle_67 = L.circle([22.794910, 88.331772], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 47, "stroke": true, "weight": 3}).addTo(map);
circle_67.bindTooltip("Baidyabati<br>rank: 67<br>hazard index: 0.000048")
circle_67.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baidyabati">Baidyabati</a>')

var circle_68 = L.circle([25.220812, 86.517204], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 47, "stroke": true, "weight": 3}).addTo(map);
circle_68.bindTooltip("Munger<br>rank: 68<br>hazard index: 0.000047")
circle_68.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Munger">Munger</a>')

var circle_69 = L.circle([28.015929, 73.317137], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 46, "stroke": true, "weight": 3}).addTo(map);
circle_69.bindTooltip("Bikaner<br>rank: 69<br>hazard index: 0.000047")
circle_69.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bikaner">Bikaner</a>')

var circle_70 = L.circle([22.901200, 88.389900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 46, "stroke": true, "weight": 3}).addTo(map);
circle_70.bindTooltip("Hugli-Chinsurah<br>rank: 70<br>hazard index: 0.000047")
circle_70.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hugli-Chinsurah">Hugli-Chinsurah</a>')

var circle_71 = L.circle([22.920982, 88.437022], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 45, "stroke": true, "weight": 3}).addTo(map);
circle_71.bindTooltip("Halisahar<br>rank: 71<br>hazard index: 0.000046")
circle_71.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Halisahar">Halisahar</a>')

var circle_72 = L.circle([24.476642, 86.606732], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 44, "stroke": true, "weight": 3}).addTo(map);
circle_72.bindTooltip("Deoghar<br>rank: 72<br>hazard index: 0.000045")
circle_72.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Deoghar">Deoghar</a>')

var circle_73 = L.circle([25.572433, 83.609605], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 44, "stroke": true, "weight": 3}).addTo(map);
circle_73.bindTooltip("Medinipur<br>rank: 73<br>hazard index: 0.000044")
circle_73.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Medinipur">Medinipur</a>')

var circle_74 = L.circle([23.795281, 86.430964], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43, "stroke": true, "weight": 3}).addTo(map);
circle_74.bindTooltip("Dhanbad<br>rank: 74<br>hazard index: 0.000044")
circle_74.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dhanbad">Dhanbad</a>')

var circle_75 = L.circle([30.733442, 76.779714], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 43, "stroke": true, "weight": 3}).addTo(map);
circle_75.bindTooltip("Chandigarh<br>rank: 75<br>hazard index: 0.000044")
circle_75.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chandigarh">Chandigarh</a>')

var circle_76 = L.circle([29.988077, 77.508130], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 42, "stroke": true, "weight": 3}).addTo(map);
circle_76.bindTooltip("Saharanpur<br>rank: 76<br>hazard index: 0.000042")
circle_76.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Saharanpur">Saharanpur</a>')

var circle_77 = L.circle([23.370035, 85.325013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 41, "stroke": true, "weight": 3}).addTo(map);
circle_77.bindTooltip("Ranchi<br>rank: 77<br>hazard index: 0.000041")
circle_77.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ranchi">Ranchi</a>')

var circle_78 = L.circle([23.388901, 88.372439], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 40, "stroke": true, "weight": 3}).addTo(map);
circle_78.bindTooltip("Nabadwip<br>rank: 78<br>hazard index: 0.000041")
circle_78.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nabadwip">Nabadwip</a>')

var circle_79 = L.circle([23.021624, 72.579707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 40, "stroke": true, "weight": 3}).addTo(map);
circle_79.bindTooltip("Ahmedabad<br>rank: 79<br>hazard index: 0.000041")
circle_79.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmedabad">Ahmedabad</a>')

var circle_80 = L.circle([26.298638, 87.953148], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 40, "stroke": true, "weight": 3}).addTo(map);
circle_80.bindTooltip("Kishanganj<br>rank: 80<br>hazard index: 0.000041")
circle_80.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kishanganj">Kishanganj</a>')

var circle_81 = L.circle([27.175255, 78.009816], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 39, "stroke": true, "weight": 3}).addTo(map);
circle_81.bindTooltip("Agra<br>rank: 81<br>hazard index: 0.000040")
circle_81.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Agra">Agra</a>')

var circle_82 = L.circle([22.694792, 88.453018], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 39, "stroke": true, "weight": 3}).addTo(map);
circle_82.bindTooltip("Madhyamgram<br>rank: 82<br>hazard index: 0.000040")
circle_82.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Madhyamgram">Madhyamgram</a>')

var circle_83 = L.circle([31.292011, 75.568058], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 39, "stroke": true, "weight": 3}).addTo(map);
circle_83.bindTooltip("Jalandhar<br>rank: 83<br>hazard index: 0.000039")
circle_83.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalandhar">Jalandhar</a>')

var circle_84 = L.circle([29.583333, 75.083333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 39, "stroke": true, "weight": 3}).addTo(map);
circle_84.bindTooltip("Sirsa<br>rank: 84<br>hazard index: 0.000039")
circle_84.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sirsa">Sirsa</a>')

var circle_85 = L.circle([26.915458, 75.818982], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 39, "stroke": true, "weight": 3}).addTo(map);
circle_85.bindTooltip("Jaipur<br>rank: 85<br>hazard index: 0.000039")
circle_85.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jaipur">Jaipur</a>')

var circle_86 = L.circle([20.468600, 85.879200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 38, "stroke": true, "weight": 3}).addTo(map);
circle_86.bindTooltip("Cuttack<br>rank: 86<br>hazard index: 0.000039")
circle_86.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Cuttack">Cuttack</a>')

var circle_87 = L.circle([22.667046, 88.341146], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 38, "stroke": true, "weight": 3}).addTo(map);
circle_87.bindTooltip("Uttarpara<br>rank: 87<br>hazard index: 0.000039")
circle_87.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Uttarpara">Uttarpara</a>')

var circle_88 = L.circle([27.876990, 78.137290], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_88.bindTooltip("Aligarh<br>rank: 88<br>hazard index: 0.000036")
circle_88.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Aligarh">Aligarh</a>')

var circle_89 = L.circle([26.626484, 88.734077], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_89.bindTooltip("Jalpaiguri<br>rank: 89<br>hazard index: 0.000036")
circle_89.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalpaiguri">Jalpaiguri</a>')

var circle_90 = L.circle([29.003314, 77.016732], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_90.bindTooltip("Sonipat<br>rank: 90<br>hazard index: 0.000036")
circle_90.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sonipat">Sonipat</a>')

var circle_91 = L.circle([12.305183, 76.655361], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 36, "stroke": true, "weight": 3}).addTo(map);
circle_91.bindTooltip("Mysore<br>rank: 91<br>hazard index: 0.000036")
circle_91.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mysore">Mysore</a>')

var circle_92 = L.circle([28.733400, 77.298600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 35, "stroke": true, "weight": 3}).addTo(map);
circle_92.bindTooltip("Loni<br>rank: 92<br>hazard index: 0.000036")
circle_92.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Loni">Loni</a>')

var circle_93 = L.circle([31.634308, 74.873679], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 35, "stroke": true, "weight": 3}).addTo(map);
circle_93.bindTooltip("Amritsar<br>rank: 93<br>hazard index: 0.000036")
circle_93.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Amritsar">Amritsar</a>')

var circle_94 = L.circle([22.974972, 88.434592], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 35, "stroke": true, "weight": 3}).addTo(map);
circle_94.bindTooltip("Kalyani<br>rank: 94<br>hazard index: 0.000035")
circle_94.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kalyani">Kalyani</a>')

var circle_95 = L.circle([21.149813, 79.082056], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 34, "stroke": true, "weight": 3}).addTo(map);
circle_95.bindTooltip("Nagpur<br>rank: 95<br>hazard index: 0.000035")
circle_95.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagpur">Nagpur</a>')

var circle_96 = L.circle([22.741920, 88.379201], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 34, "stroke": true, "weight": 3}).addTo(map);
circle_96.bindTooltip("Titagarh<br>rank: 96<br>hazard index: 0.000034")
circle_96.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Titagarh">Titagarh</a>')

var circle_97 = L.circle([25.680654, 88.124646], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 33, "stroke": true, "weight": 3}).addTo(map);
circle_97.bindTooltip("Raiganj<br>rank: 97<br>hazard index: 0.000034")
circle_97.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raiganj">Raiganj</a>')

var circle_98 = L.circle([23.131954, 87.207397], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 33, "stroke": true, "weight": 3}).addTo(map);
circle_98.bindTooltip("Bankura<br>rank: 98<br>hazard index: 0.000034")
circle_98.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bankura">Bankura</a>')

var circle_99 = L.circle([18.521428, 73.854454], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 33, "stroke": true, "weight": 3}).addTo(map);
circle_99.bindTooltip("Pune<br>rank: 99<br>hazard index: 0.000034")
circle_99.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pune">Pune</a>')

var circle_100 = L.circle([22.715699, 88.381582], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 33, "stroke": true, "weight": 3}).addTo(map);
circle_100.bindTooltip("Khardaha<br>rank: 100<br>hazard index: 0.000034")
circle_100.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Khardaha">Khardaha</a>')
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
<td><a href="https://buda-magenta.github.io/hazard_map/Imphal">Imphal</a></td>
</tr>

<tr>
<td>2</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Agartala">Agartala</a></td>
</tr>

<tr>
<td>3</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Ganganagar">Ganganagar</a></td>
</tr>

<tr>
<td>4</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Kolkata">Kolkata</a></td>
</tr>

<tr>
<td>5</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Silchar">Silchar</a></td>
</tr>

<tr>
<td>6</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Guwahati">Guwahati</a></td>
</tr>

<tr>
<td>7</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Bathinda">Bathinda</a></td>
</tr>

<tr>
<td>8</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Delhi">Delhi</a></td>
</tr>

<tr>
<td>9</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Abohar">Abohar</a></td>
</tr>

<tr>
<td>10</td>
<td><a href="https://buda-magenta.github.io/hazard_map/Dimapur">Dimapur</a></td>
</tr>

</table>
</div>
</div>


<p align="left">This hazard map shows top-100 cities that are at most risk if an infectious disease breaks out at Aizawl. The size of red circle indicates the relative magnitude of risk. Bigger the circle, more the risk. The table on the side highlights the list of top-10 cities that are at most risk. Smaller the rank, more the risk. Thus, rank 3 is more at risk compared to rank 4, and so on.You can also click on any city to make that city an outbreak location. You will get a new hazard map with the chosen city/town as outbreak location.
</p>