// $(document).ready( sidebarBlink );
//
// function sidebarBlink() {
//   $( '.tm-sidebar-left' ).css( 'opacity', 0.75 );
//   $( '.tm-sidebar-left' ).css( 'opacity', 0.15 );
// }


// remove mobile toggle button on homepage
// $( () => {
//   if ( $( 'section' ).hasClass( 'pansky-home' ) ) {
//     $( '.uk-navbar-toggle' ).remove();
//   } else {
//     null
//   }
// });

// load .pansky-project-vendor-logo imgs velocity style!
$('.pansky-project-vendor-logo').velocity( 'transition.fadeIn', {
  stagger: 300,
  drag: true,
});




// ==============================================================
//
// # ALLOW KEYBOARD TO ACTIVE DESKTOP OFFCANVAS SIDEBAR
// https://stackoverflow.com/a/30390887
//
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
  deepFocus($('#offcanvas-desktop'));
});




// ==============================================================
//
// # pansky-project-readmore VELOCITY ANIMATIONS
//
// ==============================================================
$(function() {
  var readMore = $('.pansky-project-readmore');
  var moreWrapper = $('.uk-accordion-content');
  var moreContent = $('.uk-accordion-content > div, .uk-accordion-content > p');

  readMore.on('click', function() {
    if ( $('readMore').parent().hasClass( 'uk-open' ) == false ) {
      moreWrapper.velocity( 'transition.fadeIn' )
      moreContent.velocity( 'transition.slideDownIn', {
        stagger: 100,
        drag: true,
        display: "flex"
      });
    } else {
      moreWrapper.css( 'opacity', 0 );
      moreContent.css( 'opacity', 0 );
    }
  });
});



// // #mobileNav controls
// // $('.uk-navbar-toggle').on('click', function() {
// //   if ($('#offcanvas').hasClass('uk-open') == true) {
// //     $('body').addClass('noscroll');
// //   } else {
// //     $('body').removeClass('noscroll');
// //   };
// // });
//
//
//
//
// // ==============================================================
// //
// // # VUE JSON GET
// //
// // ==============================================================
// const resume = '/data/resume.json';
// // var contact = new Vue({
// //   el: '#dataList',
// //   delimiters: ['[[', ']]'],
// //   data: {
// //     list: null
// //   },
// //   methods: {
// //     getResume: function() {
// //       this.$http.get(resume).then(function(response) {
// //         this.list = response.data;
// //       }, function(error) {
// //         console.log(error.statusText);
// //       });
// //     }
// //   },
// //   mounted: function() {
// //     this.getResume();
// //   }
// // });
//
// var data = {
//   list: null
// };
//
// Vue.config.delimiters = ['[[', ']]'];
//
// Vue.http.get(resume).then(function(response) {
//   data.list = response.data;
// }, function(error) {
//   console.log(error.statusText);
// });
//
// new Vue ({
//   el: '#dataList',
//   data: data
// });
//
// // var link = 'https://jsonplaceholder.typicode.com/users';
// // new Vue ({
// //   el: '#app',
// //   data: {
// //     list: null
// //   },
// //   methods:{
// //     getUsers: function(){
// //       this.$http.get(link).then(function(response){
// //         this.list = response.data;
// //       }, function(error){
// //         console.log(error.statusText);
// //       });
// //     }
// //   },
// //   mounted: function () {
// //     this.getUsers();
// //   }
// // });
