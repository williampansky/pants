// ==============================================================
// # ALLOW KEYBOARD TO ACTIVE DESKTOP OFFCANVAS SIDEBAR
// https://stackoverflow.com/a/30390887
// ==============================================================
var deepFocus = function(element, cls) {
  cls = cls || 'deep-focus';

  element
    .on('focusin', function() {
      element.addClass(cls);
    })
    .on('focusout', function() {
      var value = !!element.find(':focus').length;
      element.toggleClass(cls, value);
    });
};

$(document).ready(function() {
  deepFocus($('#offcanvas'));
});
