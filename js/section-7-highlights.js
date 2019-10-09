console.log("hi");

var $window = $(window);
var $elem = $(".slideshow-container");
var slideIndex = 1;
var animation;
var slides = document.getElementsByClassName("mySlides");
var titles = document.getElementsByClassName("ini-title");
var contents = document.getElementsByClassName("ini-content");
var minis = document.getElementsByClassName("mini");
var statements = document.getElementsByClassName("statement-content");
var people = document.getElementsByClassName("people");
showSlide(slideIndex);

// Arrow Control
function moveSlides(n) {
  showSlide(slideIndex += n);
}

function stopPlay() {
  clearInterval(animation);
}

function showSlide(n) {
  var i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  showPhoto(slideIndex);
}

function showPhoto(n) {
  stopPlay();
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      titles[i].style.display = "none";
      contents[i].style.display = "none";
      minis[i].classList.remove('mini_active');
      statements[i].style.display = "none";
      people[i].style.display = "none";
  }
  slides[n-1].style.display = "block";
  titles[n-1].style.display = "inline-block";
  contents[n-1].style.display = "inline-block";
  minis[n-1].classList.add('mini_active');
  statements[n-1].style.display = "inline-block";
  people[n-1].style.display = "inline-block";
}
