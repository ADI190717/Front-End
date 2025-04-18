// Slider functionality
let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("slides");
  if (slides.length === 0) return;
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slides[slideIndex - 1].style.opacity = "1";
}
// Attach plusSlides and currentSlide to window to make them accessible globally
  window.plusSlides = plusSlides;
  window.currentSlide = currentSlide;

// blur Navbar
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

AOS.init({
  duration: 1000,
  once: true,
});


// SEARCH BUTTON
document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.getElementById('search-btn');
  const searchBar = document.getElementById('search-bar');
  const navLinks = document.getElementById('nav-links');

  searchButton.addEventListener('click', () => {
    if (searchBar.style.width === '50%') {
      searchBar.style.width = '0';
      navLinks.style.display = 'none'; // Show links again
    } else {
      searchBar.style.width = '50%'; //Expand Search Bar
      navLinks.style.display = 'flex'; // Hide links
    }
  });
});

