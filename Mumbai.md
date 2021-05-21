---
layout: page
title: "Outbreak location: Mumbai"
---
<div id="mapid">
<script src="https://buda-magenta.github.io/hazard_map/load_map.js"></script>
><script>
var marker_outbreak = L.marker([19.075990, 72.877393],{"autoPan": true}).addTo(map); marker_outbreak.bindTooltip("Mumbai").openTooltip();

var circle_1 = L.circle([19.194329, 72.970178], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 223684, "stroke": true, "weight": 2}).addTo(map);
circle_1.bindTooltip("Thane<br>rank: 1<br>hazard index: 0.055921")

var circle_2 = L.circle([18.521428, 73.854454], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 166884, "stroke": true, "weight": 2}).addTo(map);
circle_2.bindTooltip("Pune<br>rank: 2<br>hazard index: 0.041721")

var circle_3 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 98806, "stroke": true, "weight": 2}).addTo(map);
circle_3.bindTooltip("Delhi<br>rank: 3<br>hazard index: 0.024702")

var circle_4 = L.circle([21.170200, 72.831100], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 68683, "stroke": true, "weight": 2}).addTo(map);
circle_4.bindTooltip("Surat<br>rank: 4<br>hazard index: 0.017171")

var circle_5 = L.circle([23.021624, 72.579707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 67703, "stroke": true, "weight": 2}).addTo(map);
circle_5.bindTooltip("Ahmedabad<br>rank: 5<br>hazard index: 0.016926")

var circle_6 = L.circle([18.627929, 73.800983], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 56090, "stroke": true, "weight": 2}).addTo(map);
circle_6.bindTooltip("Pimpri Chinchwad<br>rank: 6<br>hazard index: 0.014023")

var circle_7 = L.circle([20.011247, 73.790236], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 55005, "stroke": true, "weight": 2}).addTo(map);
circle_7.bindTooltip("Nashik<br>rank: 7<br>hazard index: 0.013751")

var circle_8 = L.circle([19.439885, 72.880383], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 48121, "stroke": true, "weight": 2}).addTo(map);
circle_8.bindTooltip("Vasai<br>rank: 8<br>hazard index: 0.012030")

var circle_9 = L.circle([15.398403, 73.812918], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 46004, "stroke": true, "weight": 2}).addTo(map);
circle_9.bindTooltip("Vasco Da Gama<br>rank: 9<br>hazard index: 0.011501")

var circle_10 = L.circle([12.979120, 77.591300], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 44964, "stroke": true, "weight": 2}).addTo(map);
circle_10.bindTooltip("Bangalore<br>rank: 10<br>hazard index: 0.011241")

var circle_11 = L.circle([17.388786, 78.461065], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 39372, "stroke": true, "weight": 2}).addTo(map);
circle_11.bindTooltip("Hyderabad<br>rank: 11<br>hazard index: 0.009843")

var circle_12 = L.circle([22.541418, 88.357691], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 29557, "stroke": true, "weight": 2}).addTo(map);
circle_12.bindTooltip("Kolkata<br>rank: 12<br>hazard index: 0.007389")

var circle_13 = L.circle([13.083694, 80.270186], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 28896, "stroke": true, "weight": 2}).addTo(map);
circle_13.bindTooltip("Chennai<br>rank: 13<br>hazard index: 0.007224")

var circle_14 = L.circle([22.297314, 73.194257], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 26209, "stroke": true, "weight": 2}).addTo(map);
circle_14.bindTooltip("Vadodara<br>rank: 14<br>hazard index: 0.006552")

var circle_15 = L.circle([19.261944, 73.194760], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 25255, "stroke": true, "weight": 2}).addTo(map);
circle_15.bindTooltip("Ulhas Nagar<br>rank: 15<br>hazard index: 0.006314")

var circle_16 = L.circle([20.432402, 73.141172], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 25033, "stroke": true, "weight": 2}).addTo(map);
circle_16.bindTooltip("Valsad<br>rank: 16<br>hazard index: 0.006258")

var circle_17 = L.circle([19.295200, 72.854400], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 24225, "stroke": true, "weight": 2}).addTo(map);
circle_17.bindTooltip("Mira-Bhayandar<br>rank: 17<br>hazard index: 0.006056")

var circle_18 = L.circle([21.149813, 79.082056], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 22083, "stroke": true, "weight": 2}).addTo(map);
circle_18.bindTooltip("Nagpur<br>rank: 18<br>hazard index: 0.005521")

var circle_19 = L.circle([17.636129, 74.298278], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 20810, "stroke": true, "weight": 2}).addTo(map);
circle_19.bindTooltip("Satara<br>rank: 19<br>hazard index: 0.005203")

var circle_20 = L.circle([19.362531, 73.078475], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 19361, "stroke": true, "weight": 2}).addTo(map);
circle_20.bindTooltip("Bhiwandi<br>rank: 20<br>hazard index: 0.004840")

var circle_21 = L.circle([12.869810, 74.843008], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 19208, "stroke": true, "weight": 2}).addTo(map);
circle_21.bindTooltip("Mangalore<br>rank: 21<br>hazard index: 0.004802")

var circle_22 = L.circle([25.531031, 78.652689], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 17151, "stroke": true, "weight": 2}).addTo(map);
circle_22.bindTooltip("Jhansi<br>rank: 22<br>hazard index: 0.004288")

var circle_23 = L.circle([19.143607, 73.295535], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 14678, "stroke": true, "weight": 2}).addTo(map);
circle_23.bindTooltip("Ambarnath<br>rank: 23<br>hazard index: 0.003670")

var circle_24 = L.circle([26.838100, 80.934600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 14417, "stroke": true, "weight": 2}).addTo(map);
circle_24.bindTooltip("Lucknow<br>rank: 24<br>hazard index: 0.003604")

var circle_25 = L.circle([26.915458, 75.818982], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 13158, "stroke": true, "weight": 2}).addTo(map);
circle_25.bindTooltip("Jaipur<br>rank: 25<br>hazard index: 0.003290")

var circle_26 = L.circle([9.931308, 76.267414], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 11987, "stroke": true, "weight": 2}).addTo(map);
circle_26.bindTooltip("Kochi<br>rank: 26<br>hazard index: 0.002997")

var circle_27 = L.circle([8.576971, 77.050125], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 11113, "stroke": true, "weight": 2}).addTo(map);
circle_27.bindTooltip("Thiruvananthapuram<br>rank: 27<br>hazard index: 0.002778")

var circle_28 = L.circle([25.438130, 81.833800], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10077, "stroke": true, "weight": 2}).addTo(map);
circle_28.bindTooltip("Allahabad<br>rank: 28<br>hazard index: 0.002519")

var circle_29 = L.circle([23.258486, 77.401989], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9660, "stroke": true, "weight": 2}).addTo(map);
circle_29.bindTooltip("Bhopal<br>rank: 29<br>hazard index: 0.002415")

var circle_30 = L.circle([11.258608, 75.778874], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9550, "stroke": true, "weight": 2}).addTo(map);
circle_30.bindTooltip("Kozhikode<br>rank: 30<br>hazard index: 0.002388")

var circle_31 = L.circle([23.160894, 79.949770], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9470, "stroke": true, "weight": 2}).addTo(map);
circle_31.bindTooltip("Jabalpur<br>rank: 31<br>hazard index: 0.002368")

var circle_32 = L.circle([25.335649, 83.007629], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9406, "stroke": true, "weight": 2}).addTo(map);
circle_32.bindTooltip("Varanasi<br>rank: 32<br>hazard index: 0.002352")

var circle_33 = L.circle([22.720362, 75.868200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8263, "stroke": true, "weight": 2}).addTo(map);
circle_33.bindTooltip("Indore<br>rank: 33<br>hazard index: 0.002066")

var circle_34 = L.circle([26.460914, 80.321759], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7836, "stroke": true, "weight": 2}).addTo(map);
circle_34.bindTooltip("Kanpur<br>rank: 34<br>hazard index: 0.001959")

var circle_35 = L.circle([25.609324, 85.123525], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7550, "stroke": true, "weight": 2}).addTo(map);
circle_35.bindTooltip("Patna<br>rank: 35<br>hazard index: 0.001888")

var circle_36 = L.circle([17.849907, 75.276320], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6997, "stroke": true, "weight": 2}).addTo(map);
circle_36.bindTooltip("Solapur<br>rank: 36<br>hazard index: 0.001749")

var circle_37 = L.circle([21.237947, 81.633683], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6915, "stroke": true, "weight": 2}).addTo(map);
circle_37.bindTooltip("Raipur<br>rank: 37<br>hazard index: 0.001729")

var circle_38 = L.circle([20.843512, 75.525927], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6894, "stroke": true, "weight": 2}).addTo(map);
circle_38.bindTooltip("Jalgaon<br>rank: 38<br>hazard index: 0.001724")

var circle_39 = L.circle([11.001812, 76.962842], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6725, "stroke": true, "weight": 2}).addTo(map);
circle_39.bindTooltip("Coimbatore<br>rank: 39<br>hazard index: 0.001681")

var circle_40 = L.circle([19.250000, 74.750000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6596, "stroke": true, "weight": 2}).addTo(map);
circle_40.bindTooltip("Ahmadnagar<br>rank: 40<br>hazard index: 0.001649")

var circle_41 = L.circle([22.305199, 70.802834], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5759, "stroke": true, "weight": 2}).addTo(map);
circle_41.bindTooltip("Rajkot<br>rank: 41<br>hazard index: 0.001440")

var circle_42 = L.circle([24.578721, 73.686257], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5626, "stroke": true, "weight": 2}).addTo(map);
circle_42.bindTooltip("Udaipur<br>rank: 42<br>hazard index: 0.001407")

var circle_43 = L.circle([25.895924, 82.437716], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5275, "stroke": true, "weight": 2}).addTo(map);
circle_43.bindTooltip("Badlapur<br>rank: 43<br>hazard index: 0.001319")

var circle_44 = L.circle([20.266777, 85.843559], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4901, "stroke": true, "weight": 2}).addTo(map);
circle_44.bindTooltip("Bhubaneswar<br>rank: 44<br>hazard index: 0.001225")

var circle_45 = L.circle([30.733442, 76.779714], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4730, "stroke": true, "weight": 2}).addTo(map);
circle_45.bindTooltip("Chandigarh<br>rank: 45<br>hazard index: 0.001183")

var circle_46 = L.circle([10.525626, 76.213254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4679, "stroke": true, "weight": 2}).addTo(map);
circle_46.bindTooltip("Thrissur<br>rank: 46<br>hazard index: 0.001170")

var circle_47 = L.circle([20.993276, 75.839983], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4416, "stroke": true, "weight": 2}).addTo(map);
circle_47.bindTooltip("Bhusawal<br>rank: 47<br>hazard index: 0.001104")

var circle_48 = L.circle([19.877263, 75.339024], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3910, "stroke": true, "weight": 2}).addTo(map);
circle_48.bindTooltip("Aurangabad<br>rank: 48<br>hazard index: 0.000978")

var circle_49 = L.circle([8.887951, 76.595501], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3733, "stroke": true, "weight": 2}).addTo(map);
circle_49.bindTooltip("Kollam<br>rank: 49<br>hazard index: 0.000933")

var circle_50 = L.circle([17.723128, 83.301284], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3491, "stroke": true, "weight": 2}).addTo(map);
circle_50.bindTooltip("Visakhapatnam<br>rank: 50<br>hazard index: 0.000873")

var circle_51 = L.circle([31.634308, 74.873679], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3426, "stroke": true, "weight": 2}).addTo(map);
circle_51.bindTooltip("Amritsar<br>rank: 51<br>hazard index: 0.000857")

var circle_52 = L.circle([25.196826, 76.000893], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3199, "stroke": true, "weight": 2}).addTo(map);
circle_52.bindTooltip("Kota<br>rank: 52<br>hazard index: 0.000800")

var circle_53 = L.circle([26.296772, 73.035143], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3091, "stroke": true, "weight": 2}).addTo(map);
circle_53.bindTooltip("Jodhpur<br>rank: 53<br>hazard index: 0.000773")

var circle_54 = L.circle([13.341917, 74.747323], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3072, "stroke": true, "weight": 2}).addTo(map);
circle_54.bindTooltip("Udupi<br>rank: 54<br>hazard index: 0.000768")

var circle_55 = L.circle([26.180598, 91.753943], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2838, "stroke": true, "weight": 2}).addTo(map);
circle_55.bindTooltip("Guwahati<br>rank: 55<br>hazard index: 0.000710")

var circle_56 = L.circle([19.169335, 77.311013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2779, "stroke": true, "weight": 2}).addTo(map);
circle_56.bindTooltip("Nanded Waghala<br>rank: 56<br>hazard index: 0.000695")

var circle_57 = L.circle([24.500000, 81.000000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2479, "stroke": true, "weight": 2}).addTo(map);
circle_57.bindTooltip("Satna<br>rank: 57<br>hazard index: 0.000620")

var circle_58 = L.circle([26.671329, 83.364583], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2187, "stroke": true, "weight": 2}).addTo(map);
circle_58.bindTooltip("Gorakhpur<br>rank: 58<br>hazard index: 0.000547")

var circle_59 = L.circle([15.351838, 75.137985], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2172, "stroke": true, "weight": 2}).addTo(map);
circle_59.bindTooltip("Hubli<br>rank: 59<br>hazard index: 0.000543")

var circle_60 = L.circle([9.926115, 78.114098], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2147, "stroke": true, "weight": 2}).addTo(map);
circle_60.bindTooltip("Madurai<br>rank: 60<br>hazard index: 0.000537")

var circle_61 = L.circle([12.305183, 76.655361], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2113, "stroke": true, "weight": 2}).addTo(map);
circle_61.bindTooltip("Mysore<br>rank: 61<br>hazard index: 0.000528")

var circle_62 = L.circle([16.850253, 74.594888], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2035, "stroke": true, "weight": 2}).addTo(map);
circle_62.bindTooltip("Sangli<br>rank: 62<br>hazard index: 0.000509")

var circle_63 = L.circle([20.325704, 78.116914], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2008, "stroke": true, "weight": 2}).addTo(map);
circle_63.bindTooltip("Yavatmal<br>rank: 63<br>hazard index: 0.000502")

var circle_64 = L.circle([26.698885, 88.320030], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1886, "stroke": true, "weight": 2}).addTo(map);
circle_64.bindTooltip("Bagdogra<br>rank: 64<br>hazard index: 0.000472")

var circle_65 = L.circle([23.247245, 69.668339], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1885, "stroke": true, "weight": 2}).addTo(map);
circle_65.bindTooltip("Bhuj<br>rank: 65<br>hazard index: 0.000471")

var circle_66 = L.circle([23.370035, 85.325013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1825, "stroke": true, "weight": 2}).addTo(map);
circle_66.bindTooltip("Ranchi<br>rank: 66<br>hazard index: 0.000456")

var circle_67 = L.circle([20.952407, 72.932383], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1775, "stroke": true, "weight": 2}).addTo(map);
circle_67.bindTooltip("Navsari<br>rank: 67<br>hazard index: 0.000444")

var circle_68 = L.circle([21.977864, 76.568828], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1745, "stroke": true, "weight": 2}).addTo(map);
circle_68.bindTooltip("Khandwa<br>rank: 68<br>hazard index: 0.000436")

var circle_69 = L.circle([22.473242, 70.055210], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1675, "stroke": true, "weight": 2}).addTo(map);
circle_69.bindTooltip("Jamnagar<br>rank: 69<br>hazard index: 0.000419")

var circle_70 = L.circle([20.761862, 77.192172], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1656, "stroke": true, "weight": 2}).addTo(map);
circle_70.bindTooltip("Akola<br>rank: 70<br>hazard index: 0.000414")

var circle_71 = L.circle([30.325565, 78.043681], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1648, "stroke": true, "weight": 2}).addTo(map);
circle_71.bindTooltip("Dehradun<br>rank: 71<br>hazard index: 0.000412")

var circle_72 = L.circle([27.175255, 78.009816], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1630, "stroke": true, "weight": 2}).addTo(map);
circle_72.bindTooltip("Agra<br>rank: 72<br>hazard index: 0.000408")

var circle_73 = L.circle([28.402979, 77.310384], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1629, "stroke": true, "weight": 2}).addTo(map);
circle_73.bindTooltip("Faridabad<br>rank: 73<br>hazard index: 0.000407")

var circle_74 = L.circle([21.750000, 73.000000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1572, "stroke": true, "weight": 2}).addTo(map);
circle_74.bindTooltip("Bharuch<br>rank: 74<br>hazard index: 0.000393")

var circle_75 = L.circle([22.801519, 86.202958], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1493, "stroke": true, "weight": 2}).addTo(map);
circle_75.bindTooltip("Jamshedpur<br>rank: 75<br>hazard index: 0.000373")

var circle_76 = L.circle([22.689507, 72.871520], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1477, "stroke": true, "weight": 2}).addTo(map);
circle_76.bindTooltip("Nadiad<br>rank: 76<br>hazard index: 0.000369")

var circle_77 = L.circle([34.074744, 74.820444], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1431, "stroke": true, "weight": 2}).addTo(map);
circle_77.bindTooltip("Srinagar<br>rank: 77<br>hazard index: 0.000358")

var circle_78 = L.circle([22.558499, 72.962563], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1396, "stroke": true, "weight": 2}).addTo(map);
circle_78.bindTooltip("Anand<br>rank: 78<br>hazard index: 0.000349")

var circle_79 = L.circle([28.428262, 77.002700], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1396, "stroke": true, "weight": 2}).addTo(map);
circle_79.bindTooltip("Gurgaon<br>rank: 79<br>hazard index: 0.000349")

var circle_80 = L.circle([16.508759, 80.618510], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1388, "stroke": true, "weight": 2}).addTo(map);
circle_80.bindTooltip("Vijayawada<br>rank: 80<br>hazard index: 0.000347")

var circle_81 = L.circle([19.290314, 76.602903], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1373, "stroke": true, "weight": 2}).addTo(map);
circle_81.bindTooltip("Parbhani<br>rank: 81<br>hazard index: 0.000343")

var circle_82 = L.circle([19.918233, 75.868625], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1285, "stroke": true, "weight": 2}).addTo(map);
circle_82.bindTooltip("Jalna<br>rank: 82<br>hazard index: 0.000321")

var circle_83 = L.circle([9.500665, 76.412414], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1265, "stroke": true, "weight": 2}).addTo(map);
circle_83.bindTooltip("Alappuzha<br>rank: 83<br>hazard index: 0.000316")

var circle_84 = L.circle([16.702841, 74.240533], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1246, "stroke": true, "weight": 2}).addTo(map);
circle_84.bindTooltip("Kolhapur<br>rank: 84<br>hazard index: 0.000312")

var circle_85 = L.circle([11.664300, 78.146000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1242, "stroke": true, "weight": 2}).addTo(map);
circle_85.bindTooltip("Salem<br>rank: 85<br>hazard index: 0.000311")

var circle_86 = L.circle([23.480592, 74.917790], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1220, "stroke": true, "weight": 2}).addTo(map);
circle_86.bindTooltip("Ratlam<br>rank: 86<br>hazard index: 0.000305")

var circle_87 = L.circle([32.718561, 74.858092], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1173, "stroke": true, "weight": 2}).addTo(map);
circle_87.bindTooltip("Jammu<br>rank: 87<br>hazard index: 0.000293")

var circle_88 = L.circle([13.340077, 77.100621], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1149, "stroke": true, "weight": 2}).addTo(map);
circle_88.bindTooltip("Tumkur<br>rank: 88<br>hazard index: 0.000287")

var circle_89 = L.circle([26.269721, 82.994425], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1148, "stroke": true, "weight": 2}).addTo(map);
circle_89.bindTooltip("Burhanpur<br>rank: 89<br>hazard index: 0.000287")

var circle_90 = L.circle([15.857267, 74.506934], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1046, "stroke": true, "weight": 2}).addTo(map);
circle_90.bindTooltip("Belgaum<br>rank: 90<br>hazard index: 0.000262")

var circle_91 = L.circle([23.666667, 72.500000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1031, "stroke": true, "weight": 2}).addTo(map);
circle_91.bindTooltip("Mahesana<br>rank: 91<br>hazard index: 0.000258")

var circle_92 = L.circle([28.901090, 76.580193], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1016, "stroke": true, "weight": 2}).addTo(map);
circle_92.bindTooltip("Rohtak<br>rank: 92<br>hazard index: 0.000254")

var circle_93 = L.circle([22.383333, 82.133333], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 898, "stroke": true, "weight": 2}).addTo(map);
circle_93.bindTooltip("Bilaspur<br>rank: 93<br>hazard index: 0.000225")

var circle_94 = L.circle([30.909016, 75.851601], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 892, "stroke": true, "weight": 2}).addTo(map);
circle_94.bindTooltip("Ludhiana<br>rank: 94<br>hazard index: 0.000223")

var circle_95 = L.circle([28.863842, 78.805778], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 890, "stroke": true, "weight": 2}).addTo(map);
circle_95.bindTooltip("Moradabad<br>rank: 95<br>hazard index: 0.000223")

var circle_96 = L.circle([22.591260, 88.390964], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 865, "stroke": true, "weight": 2}).addTo(map);
circle_96.bindTooltip("Bidhan Nagar<br>rank: 96<br>hazard index: 0.000216")

var circle_97 = L.circle([14.475294, 78.821686], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 860, "stroke": true, "weight": 2}).addTo(map);
circle_97.bindTooltip("Kadapa<br>rank: 97<br>hazard index: 0.000215")

var circle_98 = L.circle([29.000653, 77.768229], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 860, "stroke": true, "weight": 2}).addTo(map);
circle_98.bindTooltip("Meerut<br>rank: 98<br>hazard index: 0.000215")

var circle_99 = L.circle([17.980609, 79.598212], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 859, "stroke": true, "weight": 2}).addTo(map);
circle_99.bindTooltip("Warangal<br>rank: 99<br>hazard index: 0.000215")

var circle_100 = L.circle([8.188047, 77.429049], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 836, "stroke": true, "weight": 2}).addTo(map);
circle_100.bindTooltip("Nagercoil<br>rank: 100<br>hazard index: 0.000209")
</script>
</div>