// window.$ = window.jQuery = require('jquery');
// var velocity = require("js/velocity.min.js");

$(document).ready(function() {

  // set vars for this function
  let sidebar      = $("#navSidebar");
  let sidebarList1 = $("#one li");
  let sidebarList2 = $("#two li");
  let body         = $("body");
  let menu         = $("#menu");
  let main         = $("#mainContent");
  let dark         = $("#navFade");
  let bounceIn     = "transition.bounceIn";
  let bounceDownIn = "transition.bounceDownIn";
  let slideLeftIn  = "transition.slideLeftIn";
  let slideRightIn = "transition.slideRightIn";
  let slideUpIn    = "transition.slideUpIn";
  let slideDownIn  = "transition.slideDownIn";
  let fadeIn       = "transition.fadeIn";
  let fadeOut      = "transition.fadeOut";

  body.velocity( fadeIn, function() {

    menu.fadeIn();

    // // Masonry
    // // fork: https://github.com/desandro/masonry
    // $('.grid').masonry({
    //   // gutter: 1,
    //   itemSelector: '.grid-item',
    //   columnWidth: 1
    // });

    // Slideout.js
    var slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 70
    });

    // slideout.disableTouch();

    // fade on slide
    // BUG: fade doesnt occur during "finger" slide
    function close(eve) {
      eve.preventDefault();
      slideout.close();
    }

    // btn
    document.querySelector('.toggle-button').addEventListener('click', function() {
      slideout.toggle();
    });

    slideout
    .on('beforeopen', function() {
      this.panel.classList.add('panel-open');
    })
    .on('open', function() {
      this.panel.addEventListener('click', close);
    })
    .on('beforeclose', function() {
      this.panel.classList.remove('panel-open');
      this.panel.removeEventListener('click', close);
    });

    // 100vh - http://stackoverflow.com/a/42965111
    // var viewportHeight = $('body').outerHeight();
    // $('body').css({ height: viewportHeight });
    //
    // var viewportHeight = $('.panel').outerHeight();
    // $('.panel').css({ height: viewportHeight });

  });
});
