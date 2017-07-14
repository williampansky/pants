jQuery(function($) {

  // # vars
  // ## vars => els
  let body          =   document.body;
  let accord        =   $(".wep-accordion-fullscreen li");
  let title         =   $(".wep-accordion-fullscreen-title");
  let content       =   $(".wep-accordion-fullscreen-content").children();

  // ## vars => state
  let active        =   'wep-active';

  // ## vars => transitions
  let slideLeftIn   =   'transition.slideLeftIn';
  let slideRightIn  =   'transition.slideRightIn';
  let slideUpBigIn  =   'transition.slideUpBigIn';
  let slideUpIn     =   'transition.slideUpIn';
  let slideUpOut    =   'transition.slideUpOut';
  let slideDownIn   =   'transition.slideDownIn';
  let slideDownOut  =   'transition.slideDownOut';
  let fadeIn        =   'fadeIn';
  let fadeOut       =   'fadeOut';

  // set click to touchstart or jQuery 'click'
  // http://codepen.io/virgilpana/pen/NPzodr
  if ('ontouchstart' in window) {
    var click = 'touchstart';
  } else {
    var click = 'click';
  }

  // title.on(click, ()=> {
  //   if ( accord.hasClass(active) ) {
  //     content.velocity( slideUpIn, {
  //       stagger: 200,
  //       drag: true
  //       // opacity: 1
  //     });
  //   } else {
  //     content.velocity('reverse');
  //   }
  // })

  // https://codepen.io/MightyShaban/pen/LqrCK
  // jQuery(function($) {
    title.click(function(j) {
      var self = $(this);
      var dropDown = self.closest('li').find('.wep-accordion-fullscreen-content');

      if ( self.parent().hasClass(active) ) {
        self.parent().removeClass(active);
      } else {
        self.closest(accord).find('.wep-active').removeClass(active);
        self.parent().addClass(active);
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
    });
  // });

});
