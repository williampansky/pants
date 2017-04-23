// window.$ = window.jQuery = require('jquery');
// var velocity = require("js/velocity.min.js");

$(document).ready(function() {

  // set vars for this function
  let topN         = $("#topNav");
  let btmN         = $("#bottomNav");
  let sidebar      = $("#navSidebar");
  let sidebarList1 = $("#navPortfolio .row");
  let sidebarList2 = $("#navAbout .row");
  let body         = $("body");
  let menu         = $("#menu");
  let copy         = $("#copyright");
  let toggle       = $("#navToggle");
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

    topN.velocity( slideDownIn, 600, {
      display: "flex" });
    btmN.velocity( slideUpIn, 400 );

    // animate sidebar slidein on click
    toggle.on("click", function() {
      sidebar.velocity({
        translateX: "256px"
    }, 600, [ 30, 15 ])
    // SPRING PHYSICS
    // Pass a two-item array in the form of [ tension, friction ].
    // A higher tension (default: 500) increases total speed and bounciness.
    // A lower friction (default: 20) increases ending vibration speed.

    // animate nav entry
    sidebarList1.velocity( slideLeftIn, {
      stagger: 0,
      drag: true,
      display: "flex" })
    sidebarList2.velocity( slideLeftIn, {
      stagger: 0,
      drag: true })
    copy.velocity( slideLeftIn, {
      stagger: 0,
      drag: true })
    $("#breadcrumbs").velocity( slideLeftIn, {
      stagger: 0,
      drag: true })
    $("#navHeader .row").velocity( slideDownIn, {
      display: "flex" });

    // fade and blur background
    dark.velocity( fadeIn, 300 );

    body.addClass( "noscroll" );
    }); // end open sidebar

    // sidebar close on content click
    $("#navFade").on("click", function() {
      sidebar.velocity( "reverse" )
      dark.velocity( fadeOut, 300 )
      main.velocity( "reverse" );
      body.removeClass( "noscroll" );
    }); // end close sidebar

    // // Masonry
    // // fork: https://github.com/desandro/masonry
    // $('.grid').masonry({
    //   // gutter: 1,
    //   itemSelector: '.grid-item',
    //   columnWidth: 1
    // });

    // Slideout.js
    // var slideout = new Slideout({
    //   'panel': document.getElementById('panel'),
    //   'menu': document.getElementById('menu'),
    //   'padding': 256,
    //   'tolerance': 70
    // });

    // slideout.disableTouch();

    // fade on slide
    // BUG: fade doesnt occur during "finger" slide
    // function close(eve) {
    //   eve.preventDefault();
    //   slideout.close();
    // }

    // btn
    // document.querySelector('.toggle-button').addEventListener('click', function() {
    //   slideout.toggle();
    // });

    // slideout
    // .on('beforeopen', function() {
    //   this.panel.classList.add('panel-open');
    // })
    // .on('open', function() {
    //   this.panel.addEventListener('click', close);
    // })
    // .on('beforeclose', function() {
    //   this.panel.classList.remove('panel-open');
    //   this.panel.removeEventListener('click', close);
    // });

    // 100vh - http://stackoverflow.com/a/42965111
    // var viewportHeight = $('body').outerHeight();
    // $('body').css({ height: viewportHeight });
    //
    // var viewportHeight = $('.panel').outerHeight();
    // $('.panel').css({ height: viewportHeight });

  }); // end body
}); // end document.ready
