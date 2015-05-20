$.fn.fsVid = function(options) {

  // Generate poster image using Popcorn.js
  // Store generated poster image as a variable
  var pop = Popcorn('video'), poster;

  poster = pop.currentTime(1).capture();

  //console.log(poster);

  // Set defaults
  var settings = $.extend({
    autoplay: true,
    loop: true,
    muted: true,
    poster: poster
  }, options);

  // Apply attributes to selected element
  this.attr({
    autoplay: settings.autoplay,
    loop: settings.loop,
    muted: settings.muted,
    poster: pop.settings
  })
  .addClass('fsVid');

  return this;
};