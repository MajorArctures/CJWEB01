/*JAVA DO CAROUSEL*/
let indexCarousel = 0;

showSlides(indexCarousel, 0);

function plusSlides(n) {  showSlides(indexCarousel += n);}

function currentSlide(n) {  showSlides(indexCarousel = n);}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("imgCarousel");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        indexCarousel = 1
    }
  
    if (n < 1) {
        indexCarousel = slides.length
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";   
    }
  
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");  
    }
  
    slides[indexCarousel-1].style.display = "block";  
    dots[indexCarousel-1].className += " active";
}
