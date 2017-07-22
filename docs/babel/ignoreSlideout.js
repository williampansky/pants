// ========================================================
// # IGNORE SLIDEOUT
// Automatically adds 'data-slideout-ignore' to <pre> and .gist
// to allow for horizontal scrolling on those elements
// ========================================================

$(document).ready(function() {

  var ignore = 'data-slideout-ignore';

  $('.gist-file').each(function() {
    $(this).wrap('<div data-slideout-ignore></div>')
  })

  $('pre').each(function() {
    $(this).wrap('<div data-slideout-ignore></div>')
  })

});
