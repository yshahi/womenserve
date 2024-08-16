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


// Trigger CSS Animations when elements are scrolled into view

// This JS uses the Intersection Observer API to determine if objects are within the viewport
// It addes an 'in-view' class to elements when they come into view (and removes the class when not on screen)
// Use to add @keyframe or transition animations to elements so they animate once they are on screen

//TO USE
// Simply add the .animate class to those HTML elements that you wish to animate. For example, <h1 class="animate">
// Once in the viewport, the JS will add the 'in-view' class to those elements. For example, <h1 class="animate in-view">
// Define your CSS to enable animations once that element is in view. For example, h1.in-view { }

//Check if the document is loaded (so that this script can be placed in the <head>)

