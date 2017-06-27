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
  deepFocus($('#offcanvas'));
});




// ==============================================================
//
// # VUE CODEPEN LIST
//
// ==============================================================
Vue.config.delimiters = ['[[', ']]'];
$( ()=> {

  new Vue({
    el: '#codepens',
    delimiters: ['[[', ']]'],
    data: {
      list: [
        {
          title: 'CUTX — megamenu.js',
          description: 'Megamenu concept for Credit Union of Texas.',
          link: 'https://codepen.io/williampansky/pen/QvEjaL'
        },
        {
          title: 'CUTX - Better Banking Popin',
          description: 'Popin info/cta for new banking information for Credit Union of Texas.',
          link: 'https://codepen.io/williampansky/pen/JNoKqd'
        },
        {
          title: 'CUTX - Locations List',
          description: 'Development pen for Credit Union of Texas location listing; using: github.com/desandro/masonry.',
          link: 'https://codepen.io/williampansky/pen/evvwbR'
        },
        {
          title: 'Velocity.js - Mobile Sidebar Menu',
          description: 'Tinkering with Velocity.js library.',
          link: 'https://codepen.io/williampansky/pen/ryXRda'
        },
        {
          title: 'Velocity.js — Intro Animations',
          description: 'Learning the Velocity.js animation styles.',
          link: 'https://codepen.io/williampansky/pen/yMmxgO'
        },
        {
          title: 'UIKit - Project List',
          description: 'Experimenting with new ways to display projects on the next iteration of my personal portfolio site; trying to go beyond the ol\' \"image-with-hover-effect\" now that I\'m transitioning from design to development.',
          link: 'https://codepen.io/williampansky/pen/YZgXyr'
        },
        {
          title: 'MAA - Newsletter Fixed Bottom',
          description: 'Interactive fixed-footer newsletter signup form via MailChimp for Miller Ad Agency.',
          link: 'https://codepen.io/williampansky/pen/MpvQQX'
        }
      ]
    }
  })

});



// ==============================================================
//
// # pansky-project-readmore VELOCITY ANIMATIONS
//
// ==============================================================
$(function() {
  var readMore = $('.pansky-project-readmore');
  var moreWrapper = $('.uk-accordion-content');
  var moreContent = $('.uk-accordion-content > div');

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
