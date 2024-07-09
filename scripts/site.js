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

/*function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const body = document.body;
    
  navMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
};*/

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.overlay');
  const body = document.body;

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();  // Prevent the click event from bubbling up to the document
    menuBtn.classList.toggle('open');
    nav.classList.toggle('open');
    overlay.classList.toggle('open');
    body.classList.toggle('no-scroll');
  });

  overlay.addEventListener('click', () => {
    closeMenu();
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  function closeMenu() {
    menuBtn.classList.remove('open');
    nav.classList.remove('open');
    overlay.classList.remove('open');
    body.classList.remove('no-scroll');
  }
});