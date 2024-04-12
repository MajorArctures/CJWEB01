let carrosseljs = 1;
showSlides(carrosseljs);

// Next/previous controls
function plusSlides(n) {
  showSlides(carrosseljs += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(carrosseljs = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carrossel");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {carrosseljs = 1}
  if (n < 1) {carrosseljs = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[carrosseljs-1].style.display = "block";
  dots[carrosseljs-1].className += " active";
}