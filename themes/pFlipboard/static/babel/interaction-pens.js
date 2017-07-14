$ = window.jQuery;

// ==============================================================
// VUE CODEPEN LIST => click interaction
// ==============================================================
$(function() {

  // vars
  if ('ontouchstart' in window) {
    var click = 'touchstart';
  } else {
    var click = 'click';
  }
  let pen =     $('.wep-pen');
  let more =    $('.wep-pen-more');
  let details = $('.wep-pen-details');
  let open =    'wep-open';
  let block =   'wep-display-block';
  let flex =    'wep-display-flex';

  // onClick => show more
  pen.on(click, function() {
    if ( !$(this).hasClass('wep-open') ) {
      $(this).addClass(open);
      more.addClass(block);
    } else {
      $(this).removeClass(open);
      more.removeClass(block);
    }
  });

});
