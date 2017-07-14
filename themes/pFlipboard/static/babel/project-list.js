jQuery(function($) {

  // # vars
  // ## vars => els
  let body          =   document.body;
  let project       =   $('.wep-project');
  let bg            =   $('.wep-project-bg');
  let details       =   $('.wep-project-details');
  let img           =   $('.wep-project-details-image');
  let open          =   $('.wep-project-open');
  let close         =   $('.wep-project-close');

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

  open.on(click, function(event) {
    let self = $(this);

    // bring in the global close button
    close.velocity(slideDownIn)

    // some browsers scroll to top automatically, so lets
    // put a stop to that behavior
    document.scrollTop = 0;

    // select the object that was clicked on
    self.parent()
      .addClass(active)
      .find(bg)
        .velocity({
          height: '100%',
          duration: 1000
        })
      .find(details)
        .velocity(fadeIn, {
          display: 'flex'
        })
      .delay(300)
        .find('.wep-project-details-title, .wep-project-details-text, .wep-project-details-button')
          .velocity( slideUpIn, {
            stagger: 300,
            drag: true
            // duration: 1000
          });

      // stop link from loading and resetting page
      // return false;

    setTimeout(function() {
      self.parent().find(img)
        .velocity( fadeIn, {
          display: 'block'
        })
    }, 600 );

    // stop body scrolling by adding overflow:hidden class
    setTimeout(function() {
      body.classList.add('noscroll');
    }, 300);

      // remove the selected class from it's brothers and sisters
      // .siblings().removeClass('wep-active')

    // stop default link behavior
    return false;

    // remove the .one to allow for other clicks
    // self.off(event);
    // event.stopPropagation();
    // event.stopImmediatePropagation()

  });

  close.on(click, function(closeMenu) {
    let self = $(this);

    self.velocity(fadeOut, {
      display: 'none'
    })

    $('.wep-project-details, .wep-project-details-title, .wep-project-details-text, .wep-project-details-button, .wep-project-details-image')
      .velocity( fadeOut )

    bg.velocity({
        height: 0,
        duration: 300
      })

    setTimeout(function() {
      project
        .removeClass('wep-active')
        .bind(event);
    }, 400 )

    setTimeout(function() {
      body.classList.remove('noscroll')
    });
  });

  // stop page from jumping to top on link click
  open.on(click, function(e) {
  	e.preventDefault();
  });

});


// var body = document.body,
//     overlay = document.querySelector('.overlay'),
//     overlayBtts = document.querySelectorAll('a[class$="wep-project-open"]');
//
//   [].forEach.call(overlayBtts, function(btt) {
//     btt.addEventListener('click', function() {
//
//        // Detect the button class name
//        var overlayOpen = this.className === 'wep-project-open';
//
//        // Toggle the aria-hidden state on the overlay and the
//        // no-scroll class on the body
//        overlay.setAttribute('aria-hidden', !overlayOpen);
//        body.classList.toggle('noscroll', overlayOpen);
//
//        // On some mobile browser when the overlay was previously
//        // opened and scrolled, if you open it again it doesn't
//        // reset its scrollTop property
//        overlay.scrollTop = 0;
//
//     }, false);
//
// });
