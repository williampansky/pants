// Masonry
// fork: https://github.com/desandro/masonry
$('.grid').masonry({
  // gutter: 1,
  itemSelector: '.grid-item',
  columnWidth: 1
});

// Slideout.js
var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

// fade on slide
// BUG: fade doesnt occur during "finger" slide
function close(eve) {
  eve.preventDefault();
  slideout.close();
}

slideout
  .on('beforeopen', function() {
    this.panel.classList.add('panel-open');
  })
  .on('open', function() {
    this.panel.addEventListener('click', close);
  })
  .on('beforeclose', function() {
    this.panel.classList.remove('panel-open');
    this.panel.removeEventListener('click', close);
  });
