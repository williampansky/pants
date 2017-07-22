// // ========================================================
// // # AUTO LIGHTBOX
// // brettterpstra.com/2010/05/26/auto-lightboxing-image-links
// // ========================================================
// jQuery(function($) {
//
//   // vars
//   if ('ontouchstart' in window) {
//     var click = 'touchstart';
//   } else {
//     var click = 'click';
//   }
//
//   var img = 'img';
//
//   // click
// 	$('figure').on(click, function() {
//     var self = $(this);
//
//     if ( !self.hasClass('wep-open') ) {
//       self.addClass('wep-open');
//       self.find(img).velocity({
//         translateX: '-24%',
//         width: '100vw'
//         // maxHeight: '90vh'
//       })
//     } else {
//       self.removeClass('wep-open');
//       self.find(img).velocity({
//         translateX: 0,
//         width: '100%'
//       })
//     }
//   })
//
// });

// reverse animation class after click and timeout
jQuery(function($) {

  // vars
  if ('ontouchstart' in window) {
    var click = 'touchstart';
  } else {
    var click = 'click';
  }

  $('figure .caption').on(click, function() {
    if($('.wep-modal-full').hasClass('uk-open') === true) {
      setTimeout(function() {
        $(this).find('.uk-background-contain')
          .removeClass('uk-animation-scale-up')
          .addClass('uk-animation-scale-down');
      }, 600)
    } else {
      setTimeout(function() {
        $(this).find('.uk-background-contain')
          .removeClass('uk-animation-scale-down')
          .addClass('uk-animation-scale-up');
      }, 600);
    }
  });
});
