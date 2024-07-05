// JQUERY FUNCTIONS ///////////////////////////////////////////////////////

// Document Ready Function
//$(document).ready(function () {
  
//});

// SQSP FUNCTIONS //
// Load all images via Squarespace's Responsive ImageLoader
function loadAllImages() {
  var images = document.querySelectorAll('img[data-src]' );
  for (var i = 0; i < images.length; i++) {
    ImageLoader.load(images[i], {load: true});
  }
}

// The event subscription that loads images when the page is ready
document.addEventListener('DOMContentLoaded', loadAllImages);


/* Hamburger menu */

function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const body = document.body;
    
  navMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
}