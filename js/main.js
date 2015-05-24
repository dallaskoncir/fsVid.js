$(function() {
  // Use fsVid plugin
  $('video').fsVid();

  // Scroll down when arrows are clicked
  $('.arrows a').on('click', function(e) {
    e.preventDefault();
    var winH = $(window).height() + 50;
    $('body,html').animate({ scrollTop: winH }, 'fast');
  });
});