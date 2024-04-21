let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("gallery-item");
  const dots = document.getElementsByClassName("dot");
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }    
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
}
