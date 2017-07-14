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
