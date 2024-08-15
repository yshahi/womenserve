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


/* animation 
$(document).ready(function() {
  $('.image-card').each(function(index) {
      $(this).delay(index * 10).animate({
          top: '0',
          opacity: 1
      }, 400, 'linear'); // 4000ms duration for a slow, smooth animation
  });
});*/


/* Hamburger menu */

/*function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const body = document.body;
    
  navMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
};*/

/* New code hamburger code
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
}); */

/* Why Women Page */
document.addEventListener("DOMContentLoaded", function(event) {
  var addClass = document.querySelector('#page-66813991d3276b1e70d1a98d .sqs-row:last-child');
  addClass.classList.add("image_grid");
});