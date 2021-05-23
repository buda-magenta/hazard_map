---
layout: page
title: "Outbreak location: Bangalore"
---
<div style="width: 100%; overflow: auto;">
<div style="width: 75%; float: left;">
<div id="mapid">
<script src="https://buda-magenta.github.io/hazard_map/load_map.js"></script>

<script>
var marker_outbreak = L.marker([12.979120, 77.591300],{"autoPan": true}).addTo(map); marker_outbreak.bindTooltip("Bangalore").openTooltip();

var circle_1 = L.circle([12.305183, 76.655361], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 47008, "stroke": true, "weight": 3}).addTo(map);
circle_1.bindTooltip("Mysore<br>rank: 1<br>hazard index: 0.047008")
circle_1.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mysore">Mysore</a>')

var circle_2 = L.circle([13.340077, 77.100621], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 25553, "stroke": true, "weight": 3}).addTo(map);
circle_2.bindTooltip("Tumkur<br>rank: 2<br>hazard index: 0.025554")
circle_2.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tumkur">Tumkur</a>')

var circle_3 = L.circle([13.083694, 80.270186], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 20978, "stroke": true, "weight": 3}).addTo(map);
circle_3.bindTooltip("Chennai<br>rank: 3<br>hazard index: 0.020979")
circle_3.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chennai">Chennai</a>')

var circle_4 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 20429, "stroke": true, "weight": 3}).addTo(map);
circle_4.bindTooltip("Delhi<br>rank: 4<br>hazard index: 0.020430")
circle_4.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Delhi">Delhi</a>')

var circle_5 = L.circle([19.075990, 72.877393], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 16919, "stroke": true, "weight": 3}).addTo(map);
circle_5.bindTooltip("Mumbai<br>rank: 5<br>hazard index: 0.016919")
circle_5.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mumbai">Mumbai</a>')

var circle_6 = L.circle([11.664300, 78.146000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 15769, "stroke": true, "weight": 3}).addTo(map);
circle_6.bindTooltip("Salem<br>rank: 6<br>hazard index: 0.015770")
circle_6.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Salem">Salem</a>')

var circle_7 = L.circle([17.388786, 78.461065], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 14932, "stroke": true, "weight": 3}).addTo(map);
circle_7.bindTooltip("Hyderabad<br>rank: 7<br>hazard index: 0.014932")
circle_7.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hyderabad">Hyderabad</a>')

var circle_8 = L.circle([12.955100, 78.269900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 12706, "stroke": true, "weight": 3}).addTo(map);
circle_8.bindTooltip("Robertson Pet<br>rank: 8<br>hazard index: 0.012707")
circle_8.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Robertson_Pet">Robertson Pet</a>')

var circle_9 = L.circle([22.541418, 88.357691], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10137, "stroke": true, "weight": 3}).addTo(map);
circle_9.bindTooltip("Kolkata<br>rank: 9<br>hazard index: 0.010137")
circle_9.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolkata">Kolkata</a>')

var circle_10 = L.circle([12.732884, 77.830948], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8532, "stroke": true, "weight": 3}).addTo(map);
circle_10.bindTooltip("Hosur<br>rank: 10<br>hazard index: 0.008532")
circle_10.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hosur">Hosur</a>')

var circle_11 = L.circle([18.521428, 73.854454], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7918, "stroke": true, "weight": 3}).addTo(map);
circle_11.bindTooltip("Pune<br>rank: 11<br>hazard index: 0.007919")
circle_11.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pune">Pune</a>')

var circle_12 = L.circle([12.523889, 76.896196], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6992, "stroke": true, "weight": 3}).addTo(map);
circle_12.bindTooltip("Mandya<br>rank: 12<br>hazard index: 0.006992")
circle_12.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mandya">Mandya</a>')

var circle_13 = L.circle([13.137000, 78.133961], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6553, "stroke": true, "weight": 3}).addTo(map);
circle_13.bindTooltip("Kolar<br>rank: 13<br>hazard index: 0.006553")
circle_13.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolar">Kolar</a>')

var circle_14 = L.circle([12.869810, 74.843008], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6455, "stroke": true, "weight": 3}).addTo(map);
circle_14.bindTooltip("Mangalore<br>rank: 14<br>hazard index: 0.006455")
circle_14.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mangalore">Mangalore</a>')

var circle_15 = L.circle([13.007082, 76.099270], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5862, "stroke": true, "weight": 3}).addTo(map);
circle_15.bindTooltip("Hassan<br>rank: 15<br>hazard index: 0.005863")
circle_15.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hassan">Hassan</a>')

var circle_16 = L.circle([14.466127, 75.920636], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5861, "stroke": true, "weight": 3}).addTo(map);
circle_16.bindTooltip("Davanagere<br>rank: 16<br>hazard index: 0.005862")
circle_16.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Davanagere">Davanagere</a>')

var circle_17 = L.circle([11.001812, 76.962843], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5517, "stroke": true, "weight": 3}).addTo(map);
circle_17.bindTooltip("Coimbatore<br>rank: 17<br>hazard index: 0.005518")
circle_17.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Coimbatore">Coimbatore</a>')

var circle_18 = L.circle([13.932609, 75.574978], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5393, "stroke": true, "weight": 3}).addTo(map);
circle_18.bindTooltip("Shimoga<br>rank: 18<br>hazard index: 0.005393")
circle_18.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Shimoga">Shimoga</a>')

var circle_19 = L.circle([23.021624, 72.579707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5319, "stroke": true, "weight": 3}).addTo(map);
circle_19.bindTooltip("Ahmedabad<br>rank: 19<br>hazard index: 0.005320")
circle_19.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmedabad">Ahmedabad</a>')

var circle_20 = L.circle([9.931308, 76.267414], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4685, "stroke": true, "weight": 3}).addTo(map);
circle_20.bindTooltip("Kochi<br>rank: 20<br>hazard index: 0.004685")
circle_20.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kochi">Kochi</a>')

var circle_21 = L.circle([15.351838, 75.137985], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4582, "stroke": true, "weight": 3}).addTo(map);
circle_21.bindTooltip("Hubli<br>rank: 21<br>hazard index: 0.004582")
circle_21.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hubli">Hubli</a>')

var circle_22 = L.circle([16.508759, 80.618510], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4488, "stroke": true, "weight": 3}).addTo(map);
circle_22.bindTooltip("Vijayawada<br>rank: 22<br>hazard index: 0.004489")
circle_22.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vijayawada">Vijayawada</a>')

var circle_23 = L.circle([17.723128, 83.301284], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4446, "stroke": true, "weight": 3}).addTo(map);
circle_23.bindTooltip("Visakhapatnam<br>rank: 23<br>hazard index: 0.004447")
circle_23.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Visakhapatnam">Visakhapatnam</a>')

var circle_24 = L.circle([14.654623, 77.556260], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4344, "stroke": true, "weight": 3}).addTo(map);
circle_24.bindTooltip("Anantapur<br>rank: 24<br>hazard index: 0.004344")
circle_24.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Anantapur">Anantapur</a>')

var circle_25 = L.circle([15.398403, 73.812918], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4057, "stroke": true, "weight": 3}).addTo(map);
circle_25.bindTooltip("Vasco Da Gama<br>rank: 25<br>hazard index: 0.004057")
circle_25.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vasco_Da_Gama">Vasco Da Gama</a>')

var circle_26 = L.circle([20.266777, 85.843559], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3992, "stroke": true, "weight": 3}).addTo(map);
circle_26.bindTooltip("Bhubaneswar<br>rank: 26<br>hazard index: 0.003992")
circle_26.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhubaneswar">Bhubaneswar</a>')

var circle_27 = L.circle([8.576971, 77.050125], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3327, "stroke": true, "weight": 3}).addTo(map);
circle_27.bindTooltip("Thiruvananthapuram<br>rank: 27<br>hazard index: 0.003328")
circle_27.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thiruvananthapuram">Thiruvananthapuram</a>')

var circle_28 = L.circle([13.826383, 77.493772], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2938, "stroke": true, "weight": 3}).addTo(map);
circle_28.bindTooltip("Hindupur<br>rank: 28<br>hazard index: 0.002938")
circle_28.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hindupur">Hindupur</a>')

var circle_29 = L.circle([17.849907, 75.276320], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2830, "stroke": true, "weight": 3}).addTo(map);
circle_29.bindTooltip("Solapur<br>rank: 29<br>hazard index: 0.002830")
circle_29.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Solapur">Solapur</a>')

var circle_30 = L.circle([21.149813, 79.082056], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2656, "stroke": true, "weight": 3}).addTo(map);
circle_30.bindTooltip("Nagpur<br>rank: 30<br>hazard index: 0.002657")
circle_30.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagpur">Nagpur</a>')

var circle_31 = L.circle([14.226644, 76.400512], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2652, "stroke": true, "weight": 3}).addTo(map);
circle_31.bindTooltip("Chitradurga<br>rank: 31<br>hazard index: 0.002652")
circle_31.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chitradurga">Chitradurga</a>')

var circle_32 = L.circle([14.422347, 77.720069], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2587, "stroke": true, "weight": 3}).addTo(map);
circle_32.bindTooltip("Dharmavaram<br>rank: 32<br>hazard index: 0.002588")
circle_32.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dharmavaram">Dharmavaram</a>')

var circle_33 = L.circle([9.926115, 78.114098], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2576, "stroke": true, "weight": 3}).addTo(map);
circle_33.bindTooltip("Madurai<br>rank: 33<br>hazard index: 0.002576")
circle_33.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Madurai">Madurai</a>')

var circle_34 = L.circle([20.166670, 79.172114], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2522, "stroke": true, "weight": 3}).addTo(map);
circle_34.bindTooltip("Bhadravati<br>rank: 34<br>hazard index: 0.002522")
circle_34.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhadravati">Bhadravati</a>')

var circle_35 = L.circle([11.369204, 77.676627], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2483, "stroke": true, "weight": 3}).addTo(map);
circle_35.bindTooltip("Erode<br>rank: 35<br>hazard index: 0.002484")
circle_35.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Erode">Erode</a>')

var circle_36 = L.circle([17.166667, 77.083333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2416, "stroke": true, "weight": 3}).addTo(map);
circle_36.bindTooltip("Gulbarga<br>rank: 36<br>hazard index: 0.002417")
circle_36.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gulbarga">Gulbarga</a>')

var circle_37 = L.circle([26.838100, 80.934600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2407, "stroke": true, "weight": 3}).addTo(map);
circle_37.bindTooltip("Lucknow<br>rank: 37<br>hazard index: 0.002407")
circle_37.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Lucknow">Lucknow</a>')

var circle_38 = L.circle([26.915458, 75.818982], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2331, "stroke": true, "weight": 3}).addTo(map);
circle_38.bindTooltip("Jaipur<br>rank: 38<br>hazard index: 0.002331")
circle_38.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jaipur">Jaipur</a>')

var circle_39 = L.circle([13.160105, 79.155551], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2222, "stroke": true, "weight": 3}).addTo(map);
circle_39.bindTooltip("Chittoor<br>rank: 39<br>hazard index: 0.002222")
circle_39.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chittoor">Chittoor</a>')

var circle_40 = L.circle([26.180598, 91.753943], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2125, "stroke": true, "weight": 3}).addTo(map);
circle_40.bindTooltip("Guwahati<br>rank: 40<br>hazard index: 0.002126")
circle_40.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guwahati">Guwahati</a>')

var circle_41 = L.circle([25.609324, 85.123525], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2120, "stroke": true, "weight": 3}).addTo(map);
circle_41.bindTooltip("Patna<br>rank: 41<br>hazard index: 0.002120")
circle_41.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Patna">Patna</a>')

var circle_42 = L.circle([12.794811, 79.000641], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2044, "stroke": true, "weight": 3}).addTo(map);
circle_42.bindTooltip("Vellore<br>rank: 42<br>hazard index: 0.002044")
circle_42.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vellore">Vellore</a>')

var circle_43 = L.circle([13.573260, 78.479146], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1863, "stroke": true, "weight": 3}).addTo(map);
circle_43.bindTooltip("Madanapalle<br>rank: 43<br>hazard index: 0.001863")
circle_43.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Madanapalle">Madanapalle</a>')

var circle_44 = L.circle([12.792907, 78.699917], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1711, "stroke": true, "weight": 3}).addTo(map);
circle_44.bindTooltip("Ambur<br>rank: 44<br>hazard index: 0.001711")
circle_44.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ambur">Ambur</a>')

var circle_45 = L.circle([13.631637, 79.423171], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1709, "stroke": true, "weight": 3}).addTo(map);
circle_45.bindTooltip("Tirupati<br>rank: 45<br>hazard index: 0.001710")
circle_45.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tirupati">Tirupati</a>')

var circle_46 = L.circle([22.720362, 75.868200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1699, "stroke": true, "weight": 3}).addTo(map);
circle_46.bindTooltip("Indore<br>rank: 46<br>hazard index: 0.001699")
circle_46.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Indore">Indore</a>')

var circle_47 = L.circle([25.531031, 78.652689], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1632, "stroke": true, "weight": 3}).addTo(map);
circle_47.bindTooltip("Jhansi<br>rank: 47<br>hazard index: 0.001632")
circle_47.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jhansi">Jhansi</a>')

var circle_48 = L.circle([23.370035, 85.325013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1592, "stroke": true, "weight": 3}).addTo(map);
circle_48.bindTooltip("Ranchi<br>rank: 48<br>hazard index: 0.001593")
circle_48.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ranchi">Ranchi</a>')

var circle_49 = L.circle([11.101781, 77.345192], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1582, "stroke": true, "weight": 3}).addTo(map);
circle_49.bindTooltip("Tiruppur<br>rank: 49<br>hazard index: 0.001583")
circle_49.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tiruppur">Tiruppur</a>')

var circle_50 = L.circle([12.227213, 79.070156], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1421, "stroke": true, "weight": 3}).addTo(map);
circle_50.bindTooltip("Tiruvannamalai<br>rank: 50<br>hazard index: 0.001421")
circle_50.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tiruvannamalai">Tiruvannamalai</a>')

var circle_51 = L.circle([15.143395, 76.919388], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1377, "stroke": true, "weight": 3}).addTo(map);
circle_51.bindTooltip("Bellary<br>rank: 51<br>hazard index: 0.001377")
circle_51.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bellary">Bellary</a>')

var circle_52 = L.circle([15.857267, 74.506934], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1330, "stroke": true, "weight": 3}).addTo(map);
circle_52.bindTooltip("Belgaum<br>rank: 52<br>hazard index: 0.001331")
circle_52.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Belgaum">Belgaum</a>')

var circle_53 = L.circle([14.625888, 75.635724], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1193, "stroke": true, "weight": 3}).addTo(map);
circle_53.bindTooltip("Ranibennur<br>rank: 53<br>hazard index: 0.001194")
circle_53.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ranibennur">Ranibennur</a>')

var circle_54 = L.circle([21.170200, 72.831100], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1140, "stroke": true, "weight": 3}).addTo(map);
circle_54.bindTooltip("Surat<br>rank: 54<br>hazard index: 0.001140")
circle_54.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Surat">Surat</a>')

var circle_55 = L.circle([16.083333, 77.166667], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1073, "stroke": true, "weight": 3}).addTo(map);
circle_55.bindTooltip("Raichur<br>rank: 55<br>hazard index: 0.001074")
circle_55.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raichur">Raichur</a>')

var circle_56 = L.circle([17.005045, 81.780473], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 996, "stroke": true, "weight": 3}).addTo(map);
circle_56.bindTooltip("Rajahmundry<br>rank: 56<br>hazard index: 0.000997")
circle_56.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rajahmundry">Rajahmundry</a>')

var circle_57 = L.circle([30.733442, 76.779714], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 964, "stroke": true, "weight": 3}).addTo(map);
circle_57.bindTooltip("Chandigarh<br>rank: 57<br>hazard index: 0.000965")
circle_57.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chandigarh">Chandigarh</a>')

var circle_58 = L.circle([19.194329, 72.970178], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 946, "stroke": true, "weight": 3}).addTo(map);
circle_58.bindTooltip("Thane<br>rank: 58<br>hazard index: 0.000946")
circle_58.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thane">Thane</a>')

var circle_59 = L.circle([18.793568, 80.815939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 945, "stroke": true, "weight": 3}).addTo(map);
circle_59.bindTooltip("Bijapur<br>rank: 59<br>hazard index: 0.000945")
circle_59.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bijapur">Bijapur</a>')

var circle_60 = L.circle([16.291519, 80.454159], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 935, "stroke": true, "weight": 3}).addTo(map);
circle_60.bindTooltip("Guntur<br>rank: 60<br>hazard index: 0.000936")
circle_60.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guntur">Guntur</a>')

var circle_61 = L.circle([15.119651, 77.455290], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 930, "stroke": true, "weight": 3}).addTo(map);
circle_61.bindTooltip("Guntakal<br>rank: 61<br>hazard index: 0.000930")
circle_61.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guntakal">Guntakal</a>')

var circle_62 = L.circle([10.804973, 78.687030], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 917, "stroke": true, "weight": 3}).addTo(map);
circle_62.bindTooltip("Tiruchirappalli<br>rank: 62<br>hazard index: 0.000918")
circle_62.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tiruchirappalli">Tiruchirappalli</a>')

var circle_63 = L.circle([26.698885, 88.320030], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 884, "stroke": true, "weight": 3}).addTo(map);
circle_63.bindTooltip("Bagdogra<br>rank: 63<br>hazard index: 0.000884")
circle_63.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bagdogra">Bagdogra</a>')

var circle_64 = L.circle([15.266493, 76.387230], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 862, "stroke": true, "weight": 3}).addTo(map);
circle_64.bindTooltip("Hospet<br>rank: 64<br>hazard index: 0.000862")
circle_64.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hospet">Hospet</a>')

var circle_65 = L.circle([11.258608, 75.778874], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 745, "stroke": true, "weight": 3}).addTo(map);
circle_65.bindTooltip("Kozhikode<br>rank: 65<br>hazard index: 0.000745")
circle_65.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kozhikode">Kozhikode</a>')

var circle_66 = L.circle([25.335649, 83.007629], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 744, "stroke": true, "weight": 3}).addTo(map);
circle_66.bindTooltip("Varanasi<br>rank: 66<br>hazard index: 0.000744")
circle_66.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Varanasi">Varanasi</a>')

var circle_67 = L.circle([14.449372, 79.987376], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 613, "stroke": true, "weight": 3}).addTo(map);
circle_67.bindTooltip("Nellore<br>rank: 67<br>hazard index: 0.000614")
circle_67.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nellore">Nellore</a>')

var circle_68 = L.circle([8.701220, 77.579269], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 612, "stroke": true, "weight": 3}).addTo(map);
circle_68.bindTooltip("Tirunelveli<br>rank: 68<br>hazard index: 0.000613")
circle_68.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Tirunelveli">Tirunelveli</a>')

var circle_69 = L.circle([15.426365, 75.630079], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 603, "stroke": true, "weight": 3}).addTo(map);
circle_69.bindTooltip("Gadag<br>rank: 69<br>hazard index: 0.000603")
circle_69.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gadag">Gadag</a>')

var circle_70 = L.circle([10.525626, 76.213254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 602, "stroke": true, "weight": 3}).addTo(map);
circle_70.bindTooltip("Thrissur<br>rank: 70<br>hazard index: 0.000602")
circle_70.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thrissur">Thrissur</a>')

var circle_71 = L.circle([17.910400, 77.519900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 596, "stroke": true, "weight": 3}).addTo(map);
circle_71.bindTooltip("Bidar<br>rank: 71<br>hazard index: 0.000596")
circle_71.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bidar">Bidar</a>')

var circle_72 = L.circle([23.258486, 77.401989], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 583, "stroke": true, "weight": 3}).addTo(map);
circle_72.bindTooltip("Bhopal<br>rank: 72<br>hazard index: 0.000583")
circle_72.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhopal">Bhopal</a>')

var circle_73 = L.circle([13.318014, 75.773874], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 583, "stroke": true, "weight": 3}).addTo(map);
circle_73.bindTooltip("Chikmagalur<br>rank: 73<br>hazard index: 0.000583")
circle_73.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chikmagalur">Chikmagalur</a>')

var circle_74 = L.circle([10.915649, 79.806949], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 487, "stroke": true, "weight": 3}).addTo(map);
circle_74.bindTooltip("Pondicherry<br>rank: 74<br>hazard index: 0.000487")
circle_74.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pondicherry">Pondicherry</a>')

var circle_75 = L.circle([19.807608, 85.825254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 459, "stroke": true, "weight": 3}).addTo(map);
circle_75.bindTooltip("Puri<br>rank: 75<br>hazard index: 0.000460")
circle_75.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Puri">Puri</a>')

var circle_76 = L.circle([21.237947, 81.633683], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 440, "stroke": true, "weight": 3}).addTo(map);
circle_76.bindTooltip("Raipur<br>rank: 76<br>hazard index: 0.000441")
circle_76.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raipur">Raipur</a>')

var circle_77 = L.circle([8.887951, 76.595501], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 439, "stroke": true, "weight": 3}).addTo(map);
circle_77.bindTooltip("Kollam<br>rank: 77<br>hazard index: 0.000440")
circle_77.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kollam">Kollam</a>')

var circle_78 = L.circle([31.634308, 74.873679], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 438, "stroke": true, "weight": 3}).addTo(map);
circle_78.bindTooltip("Amritsar<br>rank: 78<br>hazard index: 0.000439")
circle_78.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Amritsar">Amritsar</a>')

var circle_79 = L.circle([30.325565, 78.043681], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 429, "stroke": true, "weight": 3}).addTo(map);
circle_79.bindTooltip("Dehradun<br>rank: 79<br>hazard index: 0.000429")
circle_79.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dehradun">Dehradun</a>')

var circle_80 = L.circle([19.169335, 77.311013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 425, "stroke": true, "weight": 3}).addTo(map);
circle_80.bindTooltip("Nanded Waghala<br>rank: 80<br>hazard index: 0.000425")
circle_80.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nanded_Waghala">Nanded Waghala</a>')

var circle_81 = L.circle([16.850253, 74.594888], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 417, "stroke": true, "weight": 3}).addTo(map);
circle_81.bindTooltip("Sangli<br>rank: 81<br>hazard index: 0.000417")
circle_81.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Sangli">Sangli</a>')

var circle_82 = L.circle([10.330330, 78.067398], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 414, "stroke": true, "weight": 3}).addTo(map);
circle_82.bindTooltip("Dindigul<br>rank: 82<br>hazard index: 0.000415")
circle_82.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dindigul">Dindigul</a>')

var circle_83 = L.circle([22.297314, 73.194257], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 408, "stroke": true, "weight": 3}).addTo(map);
circle_83.bindTooltip("Vadodara<br>rank: 83<br>hazard index: 0.000408")
circle_83.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vadodara">Vadodara</a>')

var circle_84 = L.circle([15.631900, 77.275900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 397, "stroke": true, "weight": 3}).addTo(map);
circle_84.bindTooltip("Adoni<br>rank: 84<br>hazard index: 0.000397")
circle_84.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Adoni">Adoni</a>')

var circle_85 = L.circle([26.460914, 80.321759], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 389, "stroke": true, "weight": 3}).addTo(map);
circle_85.bindTooltip("Kanpur<br>rank: 85<br>hazard index: 0.000389")
circle_85.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kanpur">Kanpur</a>')

var circle_86 = L.circle([20.843512, 75.525927], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 369, "stroke": true, "weight": 3}).addTo(map);
circle_86.bindTooltip("Jalgaon<br>rank: 86<br>hazard index: 0.000369")
circle_86.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalgaon">Jalgaon</a>')

var circle_87 = L.circle([20.468600, 85.879200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 356, "stroke": true, "weight": 3}).addTo(map);
circle_87.bindTooltip("Cuttack<br>rank: 87<br>hazard index: 0.000356")
circle_87.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Cuttack">Cuttack</a>')

var circle_88 = L.circle([10.787898, 76.474087], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 346, "stroke": true, "weight": 3}).addTo(map);
circle_88.bindTooltip("Palakkad<br>rank: 88<br>hazard index: 0.000347")
circle_88.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Palakkad">Palakkad</a>')

var circle_89 = L.circle([18.112082, 83.405220], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 341, "stroke": true, "weight": 3}).addTo(map);
circle_89.bindTooltip("Vizianagaram<br>rank: 89<br>hazard index: 0.000341")
circle_89.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vizianagaram">Vizianagaram</a>')

var circle_90 = L.circle([8.188047, 77.429049], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 338, "stroke": true, "weight": 3}).addTo(map);
circle_90.bindTooltip("Nagercoil<br>rank: 90<br>hazard index: 0.000338")
circle_90.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagercoil">Nagercoil</a>')

var circle_91 = L.circle([11.664535, 92.739045], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 330, "stroke": true, "weight": 3}).addTo(map);
circle_91.bindTooltip("Port Blair<br>rank: 91<br>hazard index: 0.000330")
circle_91.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Port_Blair">Port Blair</a>')

var circle_92 = L.circle([17.980609, 79.598212], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 326, "stroke": true, "weight": 3}).addTo(map);
circle_92.bindTooltip("Warangal<br>rank: 92<br>hazard index: 0.000326")
circle_92.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Warangal">Warangal</a>')

var circle_93 = L.circle([16.185317, 75.696792], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 324, "stroke": true, "weight": 3}).addTo(map);
circle_93.bindTooltip("Bagalkot<br>rank: 93<br>hazard index: 0.000325")
circle_93.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bagalkot">Bagalkot</a>')

var circle_94 = L.circle([16.702841, 74.240533], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 322, "stroke": true, "weight": 3}).addTo(map);
circle_94.bindTooltip("Kolhapur<br>rank: 94<br>hazard index: 0.000323")
circle_94.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kolhapur">Kolhapur</a>')

var circle_95 = L.circle([25.438130, 81.833800], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 314, "stroke": true, "weight": 3}).addTo(map);
circle_95.bindTooltip("Allahabad<br>rank: 95<br>hazard index: 0.000314")
circle_95.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Allahabad">Allahabad</a>')

var circle_96 = L.circle([18.627929, 73.800983], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 313, "stroke": true, "weight": 3}).addTo(map);
circle_96.bindTooltip("Pimpri Chinchwad<br>rank: 96<br>hazard index: 0.000313")
circle_96.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pimpri_Chinchwad">Pimpri Chinchwad</a>')

var circle_97 = L.circle([13.125476, 80.094090], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 299, "stroke": true, "weight": 3}).addTo(map);
circle_97.bindTooltip("Avadi<br>rank: 97<br>hazard index: 0.000300")
circle_97.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Avadi">Avadi</a>')

var circle_98 = L.circle([22.591260, 88.390964], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 296, "stroke": true, "weight": 3}).addTo(map);
circle_98.bindTooltip("Bidhan Nagar<br>rank: 98<br>hazard index: 0.000297")
circle_98.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bidhan_Nagar">Bidhan Nagar</a>')

var circle_99 = L.circle([9.500665, 76.412414], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 291, "stroke": true, "weight": 3}).addTo(map);
circle_99.bindTooltip("Alappuzha<br>rank: 99<br>hazard index: 0.000291")
circle_99.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Alappuzha">Alappuzha</a>')

var circle_100 = L.circle([28.428262, 77.002700], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 288, "stroke": true, "weight": 3}).addTo(map);
circle_100.bindTooltip("Gurgaon<br>rank: 100<br>hazard index: 0.000289")
circle_100.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gurgaon">Gurgaon</a>')
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
<td>Mysore</td>
</tr>

<tr>
<td>2</td>
<td>Tumkur</td>
</tr>

<tr>
<td>3</td>
<td>Chennai</td>
</tr>

<tr>
<td>4</td>
<td>Delhi</td>
</tr>

<tr>
<td>5</td>
<td>Mumbai</td>
</tr>

<tr>
<td>6</td>
<td>Salem</td>
</tr>

<tr>
<td>7</td>
<td>Hyderabad</td>
</tr>

<tr>
<td>8</td>
<td>Robertson Pet</td>
</tr>

<tr>
<td>9</td>
<td>Kolkata</td>
</tr>

<tr>
<td>10</td>
<td>Hosur</td>
</tr>

</table>
</div>
</div>


<p align="center"> The above map shows the top 100 at most risk cities when the outbreak location is Bangalore. You can hover over any city to see the corresponding rank and the hazard index. You may also click on any city to see the situation when that city is the outbreak location. Finally, you can also see the list of top 10 cities at risk on side.  Click <a href="https://buda-magenta.github.io/hazard_map/">here</a> to go back to the home page.
</p>