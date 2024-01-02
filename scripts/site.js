// JQUERY FUNCTIONS ///////////////////////////////////////////////////////
// Parallax
var scene = document.getElementById('background');
var parallaxInstance = new Parallax(scene, {
selector: '.parallax'
});

$('.product-showcase .button').on('click', function() {
  $.smoothScroll({
    offset: -160,
    scrollTarget: '#product-showcase'
  });
  return false;
});

$('.archive-group-name-link').on('click', function() {
  $.smoothScroll({
    offset: -460,
    scrollTarget: '#product-showcase'
  });
  return false;
});

// Homepage Key Controls
$('.dot-banner').on('click', function() {
  window.scroll({
    top: 0, 
    behavior: 'smooth'
  });
});

$('.dot-about').on('click', function() {
  window.scroll({
    top: 500, 
    behavior: 'smooth'
  });
});

$('.dot-why').on('click', function() {
  window.scroll({
    top: 2000, 
    behavior: 'smooth'
  });
});

$('.dot-cta').on('click', function() {
  window.scroll({
    top: 3500, 
    behavior: 'smooth'
  });
});

$('.dot-footer').on('click', function() {
  window.scroll({
    top: 6500, 
    behavior: 'smooth'
  });
});

function addDownload() {
  document.querySelectorAll('.collection-layout-product #Downloads a.sqs-block-button-element--large').forEach(function(e) { e.setAttribute('download', ''); });
}

// Document Ready Function
$(document).ready(function () {
  
  // Fix AYO Exclusives Title
  var text = $('.Ayo h2').text();
  text = text.replace('Series', '');
  $('.Ayo h2').text(text);
  
  $('.Ayo h2').addClass('show');
  
  
  // Mobile Nav
  $('#header div.menu').click(function(){ $('#header').addClass('show-mobilenav');});
  $('.mobile-nav div.close').click(function(){ $('#header').removeClass('show-mobilenav');});
    
  // Products Page Functions
  $('.collection-layout-series .header .primary-nav .Products a').addClass('active');
  $('.collection-layout-product .header .primary-nav .Products a').addClass('active');
  $('.product-showcase .button').click(function(){ $('.product-showcase').toggleClass('open');});
  $('.switch .series').click(function(){ $('.product-showcase').removeClass('search');});
  $('.switch .search').click(function(){ $('.product-showcase').addClass('search');});   
  $('.collection-layout-product .section-title').click(function(){ $(this).parent().toggleClass('open');});
  $('.collection-layout-product .product-title').click(function(){ $(this).parent().toggleClass('open');});
  
  $('.collection-layout-product #Downloads').addClass('open'); 
  
  $('.sqs-gallery-thumbnails img:first-child').click(function(){ $('.sqs-gallery-thumbnails').removeClass('last');});
  $('.sqs-gallery-thumbnails img:last-child').click(function(){ $('.sqs-gallery-thumbnails').addClass('last');});
  $('.sqs-block-gallery .previous').click(function(){ $('.sqs-gallery-thumbnails').removeClass('last');});
  $('.sqs-block-gallery .next').click(function(){ $('.sqs-gallery-thumbnails').addClass('last');});
  
  //Automatic Downloads for download Links
  addDownload();
  
  
  //Fix Windows Display Issues
  if ($.client.os == "Windows"){$('body').addClass('windows-fix');}
  

});

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