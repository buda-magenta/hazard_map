---
layout: page
title: "Outbreak location: Kolkata"
---
<div style="width: 100%; overflow: auto;">
<div style="width: 75%; float: left;">
<div id="mapid">
<script src="https://buda-magenta.github.io/hazard_map/load_map.js"></script>

<script>
var marker_outbreak = L.marker([22.541418, 88.357691],{"autoPan": true}).addTo(map); marker_outbreak.bindTooltip("Kolkata").openTooltip();

var circle_1 = L.circle([22.591260, 88.390964], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 29274, "stroke": true, "weight": 3}).addTo(map);
circle_1.bindTooltip("Bidhan Nagar<br>rank: 1<br>hazard index: 0.029275")
circle_1.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bidhan_Nagar">Bidhan Nagar</a>')

var circle_2 = L.circle([23.250000, 87.750000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 20166, "stroke": true, "weight": 3}).addTo(map);
circle_2.bindTooltip("Barddhaman<br>rank: 2<br>hazard index: 0.020166")
circle_2.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barddhaman">Barddhaman</a>')

var circle_3 = L.circle([22.472223, 88.093845], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 14640, "stroke": true, "weight": 3}).addTo(map);
circle_3.bindTooltip("Uluberia<br>rank: 3<br>hazard index: 0.014640")
circle_3.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Uluberia">Uluberia</a>')

var circle_4 = L.circle([26.716413, 88.430992], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 14502, "stroke": true, "weight": 3}).addTo(map);
circle_4.bindTooltip("Siliguri<br>rank: 4<br>hazard index: 0.014502")
circle_4.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Siliguri">Siliguri</a>')

var circle_5 = L.circle([28.651718, 77.221939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 14430, "stroke": true, "weight": 3}).addTo(map);
circle_5.bindTooltip("Delhi<br>rank: 5<br>hazard index: 0.014431")
circle_5.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Delhi">Delhi</a>')

var circle_6 = L.circle([22.890183, 88.426939], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 11425, "stroke": true, "weight": 3}).addTo(map);
circle_6.bindTooltip("Naihati<br>rank: 6<br>hazard index: 0.011426")
circle_6.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Naihati">Naihati</a>')

var circle_7 = L.circle([19.075990, 72.877393], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10939, "stroke": true, "weight": 3}).addTo(map);
circle_7.bindTooltip("Mumbai<br>rank: 7<br>hazard index: 0.010940")
circle_7.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Mumbai">Mumbai</a>')

var circle_8 = L.circle([23.535048, 87.338043], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10264, "stroke": true, "weight": 3}).addTo(map);
circle_8.bindTooltip("Durgapur<br>rank: 8<br>hazard index: 0.010264")
circle_8.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Durgapur">Durgapur</a>')

var circle_9 = L.circle([23.687130, 86.974659], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9450, "stroke": true, "weight": 3}).addTo(map);
circle_9.bindTooltip("Asansol<br>rank: 9<br>hazard index: 0.009451")
circle_9.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Asansol">Asansol</a>')

var circle_10 = L.circle([22.695034, 88.377060], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8758, "stroke": true, "weight": 3}).addTo(map);
circle_10.bindTooltip("Panihati<br>rank: 10<br>hazard index: 0.008759")
circle_10.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Panihati">Panihati</a>')

var circle_11 = L.circle([24.965712, 88.127778], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7157, "stroke": true, "weight": 3}).addTo(map);
circle_11.bindTooltip("English Bazar<br>rank: 11<br>hazard index: 0.007157")
circle_11.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/English_Bazar">English Bazar</a>')

var circle_12 = L.circle([25.133173, 86.525040], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7128, "stroke": true, "weight": 3}).addTo(map);
circle_12.bindTooltip("Kharagpur<br>rank: 12<br>hazard index: 0.007128")
circle_12.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kharagpur">Kharagpur</a>')

var circle_13 = L.circle([22.670728, 88.376342], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7123, "stroke": true, "weight": 3}).addTo(map);
circle_13.bindTooltip("Kamarhati<br>rank: 13<br>hazard index: 0.007123")
circle_13.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kamarhati">Kamarhati</a>')

var circle_14 = L.circle([12.979120, 77.591300], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7093, "stroke": true, "weight": 3}).addTo(map);
circle_14.bindTooltip("Bangalore<br>rank: 14<br>hazard index: 0.007093")
circle_14.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bangalore">Bangalore</a>')

var circle_15 = L.circle([26.180598, 91.753943], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7020, "stroke": true, "weight": 3}).addTo(map);
circle_15.bindTooltip("Guwahati<br>rank: 15<br>hazard index: 0.007021")
circle_15.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Guwahati">Guwahati</a>')

var circle_16 = L.circle([22.646958, 88.343612], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6524, "stroke": true, "weight": 3}).addTo(map);
circle_16.bindTooltip("Bally<br>rank: 16<br>hazard index: 0.006524")
circle_16.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bally">Bally</a>')

var circle_17 = L.circle([20.266777, 85.843559], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6422, "stroke": true, "weight": 3}).addTo(map);
circle_17.bindTooltip("Bhubaneswar<br>rank: 17<br>hazard index: 0.006423")
circle_17.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhubaneswar">Bhubaneswar</a>')

var circle_18 = L.circle([25.609324, 85.123525], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5999, "stroke": true, "weight": 3}).addTo(map);
circle_18.bindTooltip("Patna<br>rank: 18<br>hazard index: 0.005999")
circle_18.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Patna">Patna</a>')

var circle_19 = L.circle([22.508621, 88.253218], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5820, "stroke": true, "weight": 3}).addTo(map);
circle_19.bindTooltip("Maheshtala<br>rank: 19<br>hazard index: 0.005821")
circle_19.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Maheshtala">Maheshtala</a>')

var circle_20 = L.circle([21.735348, 81.944459], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5481, "stroke": true, "weight": 3}).addTo(map);
circle_20.bindTooltip("Bhatpara<br>rank: 20<br>hazard index: 0.005482")
circle_20.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhatpara">Bhatpara</a>')

var circle_21 = L.circle([22.870214, 88.419608], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5262, "stroke": true, "weight": 3}).addTo(map);
circle_21.bindTooltip("Barrackpur<br>rank: 21<br>hazard index: 0.005263")
circle_21.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barrackpur">Barrackpur</a>')

var circle_22 = L.circle([13.083694, 80.270186], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5148, "stroke": true, "weight": 3}).addTo(map);
circle_22.bindTooltip("Chennai<br>rank: 22<br>hazard index: 0.005149")
circle_22.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chennai">Chennai</a>')

var circle_23 = L.circle([23.405848, 88.495894], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5035, "stroke": true, "weight": 3}).addTo(map);
circle_23.bindTooltip("Krishnanagar<br>rank: 23<br>hazard index: 0.005035")
circle_23.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Krishnanagar">Krishnanagar</a>')

var circle_24 = L.circle([17.388786, 78.461065], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4960, "stroke": true, "weight": 3}).addTo(map);
circle_24.bindTooltip("Hyderabad<br>rank: 24<br>hazard index: 0.004960")
circle_24.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hyderabad">Hyderabad</a>')

var circle_25 = L.circle([24.379576, 88.585573], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4759, "stroke": true, "weight": 3}).addTo(map);
circle_25.bindTooltip("Baharampur<br>rank: 25<br>hazard index: 0.004760")
circle_25.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baharampur">Baharampur</a>')

var circle_26 = L.circle([22.801519, 86.202958], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3962, "stroke": true, "weight": 3}).addTo(map);
circle_26.bindTooltip("Jamshedpur<br>rank: 26<br>hazard index: 0.003963")
circle_26.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jamshedpur">Jamshedpur</a>')

var circle_27 = L.circle([22.754995, 88.341667], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3932, "stroke": true, "weight": 3}).addTo(map);
circle_27.bindTooltip("Serampore<br>rank: 27<br>hazard index: 0.003932")
circle_27.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Serampore">Serampore</a>')

var circle_28 = L.circle([22.949011, 88.435910], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3887, "stroke": true, "weight": 3}).addTo(map);
circle_28.bindTooltip("Kanchrapara<br>rank: 28<br>hazard index: 0.003887")
circle_28.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kanchrapara">Kanchrapara</a>')

var circle_29 = L.circle([22.717624, 88.488953], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3789, "stroke": true, "weight": 3}).addTo(map);
circle_29.bindTooltip("Barasat<br>rank: 29<br>hazard index: 0.003790")
circle_29.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Barasat">Barasat</a>')

var circle_30 = L.circle([26.838100, 80.934600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3776, "stroke": true, "weight": 3}).addTo(map);
circle_30.bindTooltip("Lucknow<br>rank: 30<br>hazard index: 0.003776")
circle_30.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Lucknow">Lucknow</a>')

var circle_31 = L.circle([22.794910, 88.331772], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3162, "stroke": true, "weight": 3}).addTo(map);
circle_31.bindTooltip("Baidyabati<br>rank: 31<br>hazard index: 0.003163")
circle_31.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baidyabati">Baidyabati</a>')

var circle_32 = L.circle([22.920982, 88.437022], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3014, "stroke": true, "weight": 3}).addTo(map);
circle_32.bindTooltip("Halisahar<br>rank: 32<br>hazard index: 0.003014")
circle_32.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Halisahar">Halisahar</a>')

var circle_33 = L.circle([25.572433, 83.609605], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2918, "stroke": true, "weight": 3}).addTo(map);
circle_33.bindTooltip("Medinipur<br>rank: 33<br>hazard index: 0.002919")
circle_33.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Medinipur">Medinipur</a>')

var circle_34 = L.circle([23.795281, 86.430964], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2893, "stroke": true, "weight": 3}).addTo(map);
circle_34.bindTooltip("Dhanbad<br>rank: 34<br>hazard index: 0.002893")
circle_34.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dhanbad">Dhanbad</a>')

var circle_35 = L.circle([23.831238, 91.282382], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2878, "stroke": true, "weight": 3}).addTo(map);
circle_35.bindTooltip("Agartala<br>rank: 35<br>hazard index: 0.002878")
circle_35.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Agartala">Agartala</a>')

var circle_36 = L.circle([23.370035, 85.325013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2709, "stroke": true, "weight": 3}).addTo(map);
circle_36.bindTooltip("Ranchi<br>rank: 36<br>hazard index: 0.002709")
circle_36.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ranchi">Ranchi</a>')

var circle_37 = L.circle([23.388901, 88.372439], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2703, "stroke": true, "weight": 3}).addTo(map);
circle_37.bindTooltip("Nabadwip<br>rank: 37<br>hazard index: 0.002704")
circle_37.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nabadwip">Nabadwip</a>')

var circle_38 = L.circle([25.286698, 87.132254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2655, "stroke": true, "weight": 3}).addTo(map);
circle_38.bindTooltip("Bhagalpur<br>rank: 38<br>hazard index: 0.002656")
circle_38.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhagalpur">Bhagalpur</a>')

var circle_39 = L.circle([17.723128, 83.301284], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2625, "stroke": true, "weight": 3}).addTo(map);
circle_39.bindTooltip("Visakhapatnam<br>rank: 39<br>hazard index: 0.002625")
circle_39.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Visakhapatnam">Visakhapatnam</a>')

var circle_40 = L.circle([22.694792, 88.453018], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2625, "stroke": true, "weight": 3}).addTo(map);
circle_40.bindTooltip("Madhyamgram<br>rank: 40<br>hazard index: 0.002625")
circle_40.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Madhyamgram">Madhyamgram</a>')

var circle_41 = L.circle([20.468600, 85.879200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2551, "stroke": true, "weight": 3}).addTo(map);
circle_41.bindTooltip("Cuttack<br>rank: 41<br>hazard index: 0.002552")
circle_41.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Cuttack">Cuttack</a>')

var circle_42 = L.circle([22.667046, 88.341146], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2550, "stroke": true, "weight": 3}).addTo(map);
circle_42.bindTooltip("Uttarpara<br>rank: 42<br>hazard index: 0.002551")
circle_42.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Uttarpara">Uttarpara</a>')

var circle_43 = L.circle([26.698885, 88.320030], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2310, "stroke": true, "weight": 3}).addTo(map);
circle_43.bindTooltip("Bagdogra<br>rank: 43<br>hazard index: 0.002311")
circle_43.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bagdogra">Bagdogra</a>')

var circle_44 = L.circle([21.149813, 79.082056], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2300, "stroke": true, "weight": 3}).addTo(map);
circle_44.bindTooltip("Nagpur<br>rank: 44<br>hazard index: 0.002301")
circle_44.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nagpur">Nagpur</a>')

var circle_45 = L.circle([22.741920, 88.379201], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2270, "stroke": true, "weight": 3}).addTo(map);
circle_45.bindTooltip("Titagarh<br>rank: 45<br>hazard index: 0.002271")
circle_45.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Titagarh">Titagarh</a>')

var circle_46 = L.circle([23.021624, 72.579707], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2249, "stroke": true, "weight": 3}).addTo(map);
circle_46.bindTooltip("Ahmedabad<br>rank: 46<br>hazard index: 0.002249")
circle_46.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ahmedabad">Ahmedabad</a>')

var circle_47 = L.circle([25.680654, 88.124646], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2244, "stroke": true, "weight": 3}).addTo(map);
circle_47.bindTooltip("Raiganj<br>rank: 47<br>hazard index: 0.002245")
circle_47.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raiganj">Raiganj</a>')

var circle_48 = L.circle([23.131954, 87.207397], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2240, "stroke": true, "weight": 3}).addTo(map);
circle_48.bindTooltip("Bankura<br>rank: 48<br>hazard index: 0.002240")
circle_48.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bankura">Bankura</a>')

var circle_49 = L.circle([22.715699, 88.381582], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2223, "stroke": true, "weight": 3}).addTo(map);
circle_49.bindTooltip("Khardaha<br>rank: 49<br>hazard index: 0.002223")
circle_49.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Khardaha">Khardaha</a>')

var circle_50 = L.circle([26.505476, 93.977739], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2151, "stroke": true, "weight": 3}).addTo(map);
circle_50.bindTooltip("Chandan Nagar<br>rank: 50<br>hazard index: 0.002152")
circle_50.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Chandan_Nagar">Chandan Nagar</a>')

var circle_51 = L.circle([18.521428, 73.854454], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2018, "stroke": true, "weight": 3}).addTo(map);
circle_51.bindTooltip("Pune<br>rank: 51<br>hazard index: 0.002019")
circle_51.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Pune">Pune</a>')

var circle_52 = L.circle([22.726141, 88.343487], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1953, "stroke": true, "weight": 3}).addTo(map);
circle_52.bindTooltip("Rishra<br>rank: 52<br>hazard index: 0.001953")
circle_52.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rishra">Rishra</a>')

var circle_53 = L.circle([22.974972, 88.434592], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1919, "stroke": true, "weight": 3}).addTo(map);
circle_53.bindTooltip("Kalyani<br>rank: 53<br>hazard index: 0.001920")
circle_53.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kalyani">Kalyani</a>')

var circle_54 = L.circle([25.335649, 83.007629], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1913, "stroke": true, "weight": 3}).addTo(map);
circle_54.bindTooltip("Varanasi<br>rank: 54<br>hazard index: 0.001913")
circle_54.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Varanasi">Varanasi</a>')

var circle_55 = L.circle([22.901200, 88.389900], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1892, "stroke": true, "weight": 3}).addTo(map);
circle_55.bindTooltip("Hugli-Chinsurah<br>rank: 55<br>hazard index: 0.001893")
circle_55.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hugli-Chinsurah">Hugli-Chinsurah</a>')

var circle_56 = L.circle([26.915458, 75.818982], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1851, "stroke": true, "weight": 3}).addTo(map);
circle_56.bindTooltip("Jaipur<br>rank: 56<br>hazard index: 0.001852")
circle_56.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jaipur">Jaipur</a>')

var circle_57 = L.circle([26.460914, 80.321759], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1837, "stroke": true, "weight": 3}).addTo(map);
circle_57.bindTooltip("Kanpur<br>rank: 57<br>hazard index: 0.001838")
circle_57.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kanpur">Kanpur</a>')

var circle_58 = L.circle([22.707369, 88.374437], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1702, "stroke": true, "weight": 3}).addTo(map);
circle_58.bindTooltip("Baranagar<br>rank: 58<br>hazard index: 0.001702")
circle_58.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baranagar">Baranagar</a>')

var circle_59 = L.circle([11.664535, 92.739045], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1690, "stroke": true, "weight": 3}).addTo(map);
circle_59.bindTooltip("Port Blair<br>rank: 59<br>hazard index: 0.001690")
circle_59.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Port_Blair">Port Blair</a>')

var circle_60 = L.circle([23.332200, 86.361600], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1628, "stroke": true, "weight": 3}).addTo(map);
circle_60.bindTooltip("Purulia<br>rank: 60<br>hazard index: 0.001628")
circle_60.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Purulia">Purulia</a>')

var circle_61 = L.circle([26.626484, 88.734077], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1504, "stroke": true, "weight": 3}).addTo(map);
circle_61.bindTooltip("Jalpaiguri<br>rank: 61<br>hazard index: 0.001504")
circle_61.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jalpaiguri">Jalpaiguri</a>')

var circle_62 = L.circle([22.840800, 88.653500], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1446, "stroke": true, "weight": 3}).addTo(map);
circle_62.bindTooltip("Habra<br>rank: 62<br>hazard index: 0.001446")
circle_62.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Habra">Habra</a>')

var circle_63 = L.circle([16.508759, 80.618510], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1269, "stroke": true, "weight": 3}).addTo(map);
circle_63.bindTooltip("Vijayawada<br>rank: 63<br>hazard index: 0.001270")
circle_63.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Vijayawada">Vijayawada</a>')

var circle_64 = L.circle([26.298638, 87.953148], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1267, "stroke": true, "weight": 3}).addTo(map);
circle_64.bindTooltip("Kishanganj<br>rank: 64<br>hazard index: 0.001268")
circle_64.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kishanganj">Kishanganj</a>')

var circle_65 = L.circle([22.661196, 88.866022], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1235, "stroke": true, "weight": 3}).addTo(map);
circle_65.bindTooltip("Basirhat<br>rank: 65<br>hazard index: 0.001236")
circle_65.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Basirhat">Basirhat</a>')

var circle_66 = L.circle([22.028124, 88.063265], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1150, "stroke": true, "weight": 3}).addTo(map);
circle_66.bindTooltip("Haldia<br>rank: 66<br>hazard index: 0.001150")
circle_66.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Haldia">Haldia</a>')

var circle_67 = L.circle([23.259346, 88.437212], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1081, "stroke": true, "weight": 3}).addTo(map);
circle_67.bindTooltip("Santipur<br>rank: 67<br>hazard index: 0.001082")
circle_67.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Santipur">Santipur</a>')

var circle_68 = L.circle([21.237947, 81.633683], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1042, "stroke": true, "weight": 3}).addTo(map);
circle_68.bindTooltip("Raipur<br>rank: 68<br>hazard index: 0.001042")
circle_68.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raipur">Raipur</a>')

var circle_69 = L.circle([24.796436, 85.007956], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 1018, "stroke": true, "weight": 3}).addTo(map);
circle_69.bindTooltip("Gaya<br>rank: 69<br>hazard index: 0.001019")
circle_69.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gaya">Gaya</a>')

var circle_70 = L.circle([19.807608, 85.825254], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 952, "stroke": true, "weight": 3}).addTo(map);
circle_70.bindTooltip("Puri<br>rank: 70<br>hazard index: 0.000952")
circle_70.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Puri">Puri</a>')

var circle_71 = L.circle([26.083143, 86.032571], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 944, "stroke": true, "weight": 3}).addTo(map);
circle_71.bindTooltip("Darbhanga<br>rank: 71<br>hazard index: 0.000945")
circle_71.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Darbhanga">Darbhanga</a>')

var circle_72 = L.circle([21.170200, 72.831100], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 932, "stroke": true, "weight": 3}).addTo(map);
circle_72.bindTooltip("Surat<br>rank: 72<br>hazard index: 0.000933")
circle_72.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Surat">Surat</a>')

var circle_73 = L.circle([22.965365, 88.403973], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 904, "stroke": true, "weight": 3}).addTo(map);
circle_73.bindTooltip("Bansberia<br>rank: 73<br>hazard index: 0.000904")
circle_73.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bansberia">Bansberia</a>')

var circle_74 = L.circle([21.500000, 86.750000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 898, "stroke": true, "weight": 3}).addTo(map);
circle_74.bindTooltip("Baleshwar<br>rank: 74<br>hazard index: 0.000899")
circle_74.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baleshwar">Baleshwar</a>')

var circle_75 = L.circle([25.560900, 87.647654], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 871, "stroke": true, "weight": 3}).addTo(map);
circle_75.bindTooltip("Katihar<br>rank: 75<br>hazard index: 0.000872")
circle_75.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Katihar">Katihar</a>')

var circle_76 = L.circle([24.800609, 93.937000], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 863, "stroke": true, "weight": 3}).addTo(map);
circle_76.bindTooltip("Imphal<br>rank: 76<br>hazard index: 0.000864")
circle_76.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Imphal">Imphal</a>')

var circle_77 = L.circle([21.934900, 86.732400], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 841, "stroke": true, "weight": 3}).addTo(map);
circle_77.bindTooltip("Baripada<br>rank: 77<br>hazard index: 0.000841")
circle_77.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Baripada">Baripada</a>')

var circle_78 = L.circle([28.457876, 79.405571], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 835, "stroke": true, "weight": 3}).addTo(map);
circle_78.bindTooltip("Bareilly<br>rank: 78<br>hazard index: 0.000835")
circle_78.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bareilly">Bareilly</a>')

var circle_79 = L.circle([25.438130, 81.833800], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 817, "stroke": true, "weight": 3}).addTo(map);
circle_79.bindTooltip("Allahabad<br>rank: 79<br>hazard index: 0.000817")
circle_79.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Allahabad">Allahabad</a>')

var circle_80 = L.circle([21.063329, 86.505373], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 811, "stroke": true, "weight": 3}).addTo(map);
circle_80.bindTooltip("Bhadrak<br>rank: 80<br>hazard index: 0.000812")
circle_80.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhadrak">Bhadrak</a>')

var circle_81 = L.circle([23.056882, 88.781851], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 800, "stroke": true, "weight": 3}).addTo(map);
circle_81.bindTooltip("Bongaon<br>rank: 81<br>hazard index: 0.000800")
circle_81.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bongaon">Bongaon</a>')

var circle_82 = L.circle([26.148658, 85.340013], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 761, "stroke": true, "weight": 3}).addTo(map);
circle_82.bindTooltip("Muzaffarpur<br>rank: 82<br>hazard index: 0.000761")
circle_82.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Muzaffarpur">Muzaffarpur</a>')

var circle_83 = L.circle([19.194329, 72.970178], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 726, "stroke": true, "weight": 3}).addTo(map);
circle_83.bindTooltip("Thane<br>rank: 83<br>hazard index: 0.000726")
circle_83.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Thane">Thane</a>')

var circle_84 = L.circle([23.160894, 79.949770], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 707, "stroke": true, "weight": 3}).addTo(map);
circle_84.bindTooltip("Jabalpur<br>rank: 84<br>hazard index: 0.000707")
circle_84.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jabalpur">Jabalpur</a>')

var circle_85 = L.circle([24.817861, 92.756221], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 687, "stroke": true, "weight": 3}).addTo(map);
circle_85.bindTooltip("Silchar<br>rank: 85<br>hazard index: 0.000687")
circle_85.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Silchar">Silchar</a>')

var circle_86 = L.circle([25.720581, 85.255560], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 661, "stroke": true, "weight": 3}).addTo(map);
circle_86.bindTooltip("Hajipur<br>rank: 86<br>hazard index: 0.000661")
circle_86.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Hajipur">Hajipur</a>')

var circle_87 = L.circle([22.214285, 84.872437], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 645, "stroke": true, "weight": 3}).addTo(map);
circle_87.bindTooltip("Raurkela<br>rank: 87<br>hazard index: 0.000646")
circle_87.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Raurkela">Raurkela</a>')

var circle_88 = L.circle([30.909016, 75.851601], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 631, "stroke": true, "weight": 3}).addTo(map);
circle_88.bindTooltip("Ludhiana<br>rank: 88<br>hazard index: 0.000631")
circle_88.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Ludhiana">Ludhiana</a>')

var circle_89 = L.circle([27.484460, 94.901945], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 627, "stroke": true, "weight": 3}).addTo(map);
circle_89.bindTooltip("Dibrugarh<br>rank: 89<br>hazard index: 0.000627")
circle_89.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dibrugarh">Dibrugarh</a>')

var circle_90 = L.circle([25.263487, 88.789003], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 614, "stroke": true, "weight": 3}).addTo(map);
circle_90.bindTooltip("Balurghat<br>rank: 90<br>hazard index: 0.000614")
circle_90.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Balurghat">Balurghat</a>')

var circle_91 = L.circle([28.863842, 78.805778], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 595, "stroke": true, "weight": 3}).addTo(map);
circle_91.bindTooltip("Moradabad<br>rank: 91<br>hazard index: 0.000595")
circle_91.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Moradabad">Moradabad</a>')

var circle_92 = L.circle([26.671329, 83.364583], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 577, "stroke": true, "weight": 3}).addTo(map);
circle_92.bindTooltip("Gorakhpur<br>rank: 92<br>hazard index: 0.000577")
circle_92.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Gorakhpur">Gorakhpur</a>')

var circle_93 = L.circle([25.913591, 93.728371], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 559, "stroke": true, "weight": 3}).addTo(map);
circle_93.bindTooltip("Dimapur<br>rank: 93<br>hazard index: 0.000560")
circle_93.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Dimapur">Dimapur</a>')

var circle_94 = L.circle([20.011247, 73.790236], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 549, "stroke": true, "weight": 3}).addTo(map);
circle_94.bindTooltip("Nashik<br>rank: 94<br>hazard index: 0.000550")
circle_94.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Nashik">Nashik</a>')

var circle_95 = L.circle([22.910184, 69.899418], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 510, "stroke": true, "weight": 3}).addTo(map);
circle_95.bindTooltip("Bhadreshwar<br>rank: 95<br>hazard index: 0.000511")
circle_95.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Bhadreshwar">Bhadreshwar</a>')

var circle_96 = L.circle([27.175255, 78.009816], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 449, "stroke": true, "weight": 3}).addTo(map);
circle_96.bindTooltip("Agra<br>rank: 96<br>hazard index: 0.000450")
circle_96.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Agra">Agra</a>')

var circle_97 = L.circle([25.329791, 86.456777], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 444, "stroke": true, "weight": 3}).addTo(map);
circle_97.bindTooltip("Jamalpur<br>rank: 97<br>hazard index: 0.000444")
circle_97.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Jamalpur">Jamalpur</a>')

var circle_98 = L.circle([23.730215, 86.839671], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 423, "stroke": true, "weight": 3}).addTo(map);
circle_98.bindTooltip("Kulti<br>rank: 98<br>hazard index: 0.000423")
circle_98.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Kulti">Kulti</a>')

var circle_99 = L.circle([17.005045, 81.780473], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 362, "stroke": true, "weight": 3}).addTo(map);
circle_99.bindTooltip("Rajahmundry<br>rank: 99<br>hazard index: 0.000362")
circle_99.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Rajahmundry">Rajahmundry</a>')

var circle_100 = L.circle([22.720362, 75.868200], {"pane": "markerPane", "color": "red", "fill": true, "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 357, "stroke": true, "weight": 3}).addTo(map);
circle_100.bindTooltip("Indore<br>rank: 100<br>hazard index: 0.000358")
circle_100.bindPopup('<a href="https://buda-magenta.github.io/hazard_map/Indore">Indore</a>')
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
<td>Bidhan Nagar</td>
</tr>

<tr>
<td>2</td>
<td>Barddhaman</td>
</tr>

<tr>
<td>3</td>
<td>Uluberia</td>
</tr>

<tr>
<td>4</td>
<td>Siliguri</td>
</tr>

<tr>
<td>5</td>
<td>Delhi</td>
</tr>

<tr>
<td>6</td>
<td>Naihati</td>
</tr>

<tr>
<td>7</td>
<td>Mumbai</td>
</tr>

<tr>
<td>8</td>
<td>Durgapur</td>
</tr>

<tr>
<td>9</td>
<td>Asansol</td>
</tr>

<tr>
<td>10</td>
<td>Panihati</td>
</tr>

</table>
</div>
</div>


<p align="center">This hazard map shows top-100 cities that are at most risk if an infectious disease breaks out at Kolkata. The size of red circle indicates the relative magnitude of risk. Bigger the circle, more the risk. The table on the side highlights the list of top-10 cities that are at most risk. Smaller the rank, more the risk. Thus, rank 3 is more at risk compared to rank 4, and so on.You can also click on any city to make that city an outbreak location. You will get a new hazard map with the chosen city/town as outbreak location.
</p>