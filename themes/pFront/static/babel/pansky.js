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
