---
layout: page
title: How our model works
---

<!-- Slideshow container -->
<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides">
    <div class="numbertext">1 / 5</div>
    <img src="https://buda-magenta.github.io/hazard_map/1.jpg" style="width:100%">
    <div class="text">People are susceptible to getting infected. Infected people recover after some characteristic time.</div>
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 5</div>
    <img src="https://buda-magenta.github.io/hazard_map/2.jpg" style="width:100%">
    <div class="text">The infection spreads within a city from person to person through physical proximity. Infected people get recovered after some characteristic time.</div>
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 5</div>
    <img src="https://buda-magenta.github.io/hazard_map/3.jpg" style="width:100%">
    <div class="text">The infection also spreads from city to city because people travel using air, road, or rail as mode of transport. The blue and yellow coloured arrows denote the traffic between various cities.</div>
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 5</div>
    <img src="https://buda-magenta.github.io/hazard_map/4.jpg" style="width:100%">
    <div class="text">The Data for the three modes of transport - air, rail, and road was collected/estimated through various methods.</div>
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 5</div>
    <img src="https://buda-magenta.github.io/hazard_map/5.jpg" style="width:100%">
    <div class="text">The shorter it takes to cross the threshold of active cases, more is the associated risk. Higher the risk, lower the hazard rank, and bigger the red circle radius indicating higher hazard value.</div>
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>
  <span class="dot" onclick="currentSlide(5)"></span>
</div>

<head>
  <style>

* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 800px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: black;
  font-size: 25px;
  padding: 8px 12px;
  position: relative;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: black;
  font-size: 20px;
  padding: 8px 12px;
  position: relative;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 25px;
  width: 25px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1s;
  animation-name: fade;
  animation-duration: 1s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

</style>
</head>

<script>
  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
</script>
