// ==============================================================
// # VUE CODEPEN LIST
// vue template via: https://stackoverflow.com/a/41532716
// ==============================================================
if (window.jQuery) {
  var Velocity = $.Velocity;
} else { var Velocity = Velocity; }

// ## VUE CODEPEN LIST => Register component
Vue.component('toggle-codepen', {
  template: '#code-pen',
  props: ['pen'],
  data() {
    return {
      active: false
    }
  }
})

// -----------------------------------------
// ## VUE CODEPEN LIST => Get pens via api
// api: http://cpv2api.com/
new Vue({
  el: '#codepensList', // target: #codepens
  delimiters: ['[[', ']]'], // change mustache for Hugo
  data: {
    codePens: [],
  },
  created() {
    $.getJSON('https://cpv2api.com/pens/public/williampansky') // get data
      .then(response => {
        console.log(response.data); // log data in console
        this.codePens = response.data; // set data to pens: []
    })
    .catch(error => {
      console.log(error);
    })
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '100%', padding: '10px', fontSize: ".675rem" },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  }
});
