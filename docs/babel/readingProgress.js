$(function() {

  // vars
  // https://codepen.io/hackthevoid/pen/AIoba
  var docHeight, final, lastScroll, windowHeight;
  docHeight     = void 0;
  final         = void 0;
  lastScroll    = void 0;
  windowHeight  = void 0;
  lastScroll    = void 0;
  docHeight     = void 0;
  windowHeight  = void 0;
  final         = void 0;

  $(window).scroll(function() {

    // additional vars
    lastScroll = window.scrollY;
    windowHeight = $(window).height();
    docHeight = $(document).height();
    final = ((lastScroll + (windowHeight * Math.pow((lastScroll + windowHeight) / docHeight, 10))) / docHeight) * 100;

    $("#readingProgress").css({
      width: final + "%"
    });

  });
});
