var slideIndex = 1;
shwSlides(slideIndex);

// function plusSlide(n) {
//   shwSlides(slideIndex += n);
// }

function crntSlide(n) {
  shwSlides(slideIndex = n);
}

function shwSlides(n) {
  var i;
  var slides = document.getElementsByClassName("metric");
  var metrics = document.getElementsByClassName("metricbtn");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < metrics.length; i++) {
      metrics[i].className = metrics[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  metrics[slideIndex-1].className += " active";
}

