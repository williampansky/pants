// =============================================
// # BAR
// =============================================
// https://stackoverflow.com/a/17137098
$(window).scroll(
  { previousTop: 0 },
  function() {
    var currentTop = $(window).scrollTop();

    if (currentTop < this.previousTop) {
      $("#wep-bar").removeClass('scrolling');
    } else {
      $("#wep-bar").addClass('scrolling');
    }

  this.previousTop = currentTop;
});

// Run if iOS ver = 9.x.x
// http://stackoverflow.com/a/13280432
if(/(iPhone|iPad|iPod)\sOS/.test(navigator.userAgent)) {
  $("#wep-bar").addClass('ios');
  $("#menu").find('img').css('max-width', '60px');
};

// v2
// https://stackoverflow.com/a/13195073/8296677
// $(window).scroll(function() {
//   if ($(window).scrollTop() > 100) {
//     // > 100px from top - show div
//     $("#wep-bar").removeClass('scrolling');
//   } else {
//     // <= 100px from top - hide div
//     $("#wep-bar").addClass('scrolling');
//   }
// });
