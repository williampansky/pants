jQuery(()=> {

  // =============================================
  // # VARS
  // =============================================

  /**
    We're setting variables for the progress
    time to increment; thus we can easily edit
    transition timings to fine-tune the experience.
  **/
  let progValue   = 65; // #loader interval
  let progTime    = 50; // timeOut to fadeOut #loader
  let fadeTime    = progTime + 150; // timeOut to fade #fader & bar
  let fadeDisplay = fadeTime + 1500; // timeOut to .remove() $els




  // =============================================
  // # PROGRESS BAR
  // =============================================

  /**
    Creating our progressBar function so that we can
    fake the load via the setTimeout feature based on
    the 'progTime' variable we set above. Once the
    time for progTime is hit, our #loader overlay
    will fadeOut over a duration of 1.5s.
  **/

  var progressBar = ()=> {

    /**
      Setting the psuedo load experience via a timing
      interval that increments in blocks of 20 using
      UIkit's <progress> code: getuikit.com/docs/progress
    **/
    var animate = setInterval(function () {
      window.progressbar && (progressbar.value += progValue);
      if (!window.progressbar || progressbar.value >= progressbar.max) {
        clearInterval(animate);
      }
    }, 1000);

    /**
      This is where we're setting our timeout for
      #loader fade over 1.5s after var progTime is hit
    **/
    setTimeout(()=> {
      $('#loader').velocity('fadeOut', {
        duration: 1500
      });
    }, progTime);
  }




  // =============================================
  // # ON READY(s)
  // =============================================

  // Call our progressBar function.
  $(document).ready(progressBar);

  /**
    Calling our additional setTimeouts that are set to
    our fadeTime and fadeDisplay variables. Using the
    simple 'fadeOut' above caused a jump when #loader
    transitioned from being visible to display:none;
    therefore, we added the supplementary #fader div
    to compensate.
  **/

  $(document).ready(()=> {

    /**
      #fader slides from opacity: 1, to opacity: 0
      over the course of our fadeTime variable.
    **/
    setTimeout(()=> {
      $("#wep-bar").removeClass('scrolling');
      $('#fader').css('opacity', 0);
      $('body').removeClass('noscroll');
    }, fadeTime);

    /**
      Then, #fader is set to display:none
      after our fadeDisplay variable.
    **/
    setTimeout(()=> {
      $('#loader').remove()
      $('#fader').css('display', 'none');
      $('#fader').remove();
    }, fadeDisplay);
  });


});
