+++
draft = false
date = "2017-03-25"
weight = 1
keywords = [ "goodwill", "dallas", "lunch", "fundraising" ]

avatar = "/img/projects/good-lunch/good-face-block.jpg"
tag = "GoHugo.io single-page site"
client = "Goodwill Industries of Dallas, Inc."
clientdescription = "For over 90 years Goodwill Dallas has been committed to providing job training and employment to persons with disabilities and disadvantages to help transform their lives through the power of jobs."
image = "/projects/thelunch.info/demo/images/Goodwill-worn-out-hands-from-working-hard.jpg"
caption = "Goodwill works, so people can."
category = "Case study"
title = "Deploying a standalone landing page site for Goodwill Dallas' annual fundraising event, THE LUNCH, with GoHugo.io"
name = "thelunch.info"

summary = "The Lunch, Goodwill Industries of Dallas' annual fundraising event, found wonderful success for its first two years – securing over $1.5m each year to, “... expand and enhance job training services.” For 2017, I suggested a revamp ..."

+++

<!-- ### Introduction -->

<div class="wep-sticky-header" style="z-index: 980;" uk-sticky="bottom: #objective">
  <h3 class="wep-container uk-container">Introduction</h3>
</div>

<p class="uk-text-lead">The Lunch, Goodwill Industries of Dallas' annual fundraising event, found wonderful success for its first two years – securing over $1.5m each year to, <em>“... expand and enhance job training services.”</em></p>

<div class="uk-text-center uk-padding-large"><img class="uk-border-circle" src="/img/projects/good-lunch/good-face-block.jpg" width="100px" alt="Goodwill face" style="width:200px;"></div>

For 2017, I suggested a revamp of how to present the event and guest speaker information to visitors and donors that would match the high level of importance that Goodwill Dallas places on the event. Prior year information was housed in a subpage of goodwilldallas.org — but this year I wanted to do better.

My proposal was accepted and with that I got to work planning out a standalone landing page: [thelunch.info](https://thelunch.info). The following is my written case study recounting the various aspects of the project from ideation to deployment, along with detailed analysis of the major development roadblocks that came about and my solutions.

### Objective

I wanted this site to be fast (like, *really* fast), compatible with IE10/11+, responsive with a mobile-first approach, and accessible with client editable content wrapped up in an SSL.

### Project details

<dl class="uk-description-list">
<dt>Client</dt>
  <dd>Goodwill Industries of Dallas, Inc.</dd>
<dt>Project</dt>
  <dd>Stand-alone site for Goodwill Dallas' annual fundraising event, THE LUNCH.</dd>
<dt>Site name</dt>
  <dd>THE LUNCH 2017</dd>
<dt>Site URL</dt>
  <dd>thelunch.info</dd>
<dt>Repo URL</dt>
  <dd>https://github.com/milleradagency/GOOD-Lunch</dd>
<dt>Standards</dt>
  <dd>HTML5</dd>
  <dd>CSS3</dd>
  <dd>JavaScript</dd>
<dt>Libraries &amp; third-party plugins</dt>
<ul class="uk-margin-remove-top" uk-accordion="multiple: true; duration: 400; transition: ease-in-out">
  <li>
    <div class="uk-accordion-title uk-text-small">Click to expand</div>
    <div class="uk-accordion-content">
      <dl class="uk-description-list">
        <dt>Animate.css</dt>
          <dd>
            A cross-browser library of CSS animations. As easy to use as an easy thing.<sup>1</sup>
          </dd>
        <dt>Cloudflare</dt>
          <dd>
            Cloudflare, Inc. is a U.S. company that provides a content delivery network, Internet security services and distributed domain name server services, sitting between the visitor and the Cloudflare user's hosting provider, acting as a reverse proxy for websites.<sup>2</sup>
          </dd>
        <dt>FontAwesome</dt>
          <dd>
            Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.<sup>3</sup>
          </dd>
        <dt>GitHub Pages</dt>
          <dd>
            Hosted directly from your GitHub repository. Just edit, push, and your changes are live.<sup>4</sup>
          </dd>
        <dt>Google Analytics</dt>
          <dd>
            Google Analytics lets you measure your advertising ROI as well as track your Flash, video, and social networking sites and applications.<sup>5</sup>
          </dd>
        <dt>Google Fonts</dt>
          <dd>
            Google Fonts ... is an interactive directory of free hosted application programming interfaces for web fonts.<sup>6</sup>
          </dd>
        <dt>Hugo</dt>
          <dd>
            Hugo is a static HTML and CSS website generator written in Go. It is optimized for speed, easy use and configurability. Hugo takes a directory with content and templates and renders them into a full HTML website.<sup>7</sup>
          </dd>
        <dt>jQuery</dt>
          <dd>
            Cross-platform JavaScript library designed to simplify the client-side scripting of HTML.<sup>8</sup>
          </dd>
        <dt>Modernizr</dt>
          <dd>
            Modernizr tells you what HTML, CSS and JavaScript features the user’s browser has to offer.<sup>9</sup>
          </dd>
        <dt>SCSS</dt>
          <dd>
            Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.<sup>10</sup>
          </dd>
        <dt>Twitter Bootstrap</dt>
          <dd>
            Bootstrap is the world’s most popular framework for building responsive, mobile-first sites and applications. Inside you’ll find high quality HTML, CSS, and JavaScript to make starting any project easier than ever.<sup>11</sup>
          </dd>
        <dt>CodePen</dt>
          <dd>Detect Internet Explorer (IE) up to version 11 and Edge (12+)<sup>12</sup></dd>
          <dd>Material Design Box Shadows<sup>13</sup></dd>
          <dd>Sticky Slider Navigation<sup>14</sup></dd>
          <dd>Tinted Hero<sup>15</sup></dd>
      </dl>
    </div>
  </li>
</ul>
</dl>

### Development

#### i. Development – Research

This project didn’t need a database, that was clear, so I opted for using a static-site generator. Going flat-file granted me the speed I desired and using an SSG, coupled with hosting via GitHub Pages, allowed me to quickly draft and deploy.

After some research on the top hotness platforms like [Jekyll](https://jekyllrb.com/), [Hugo](http://gohugo.io/), and whatnot – I decided to give [Webhook](http://www.webhook.com/) a try; the platform proclaims to be, “the easiest way to build a custom CMS for your next website–” which would provide the client with an easy way to push updates.

___I really love Webhook!___ It uses the SWIG templating language, has pretty good documentation, and was really easy to write in. Unfortunately, I encountered problems when trying to slap an [SSL](https://www.cloudflare.com/ssl/) certificate on the site that was (at that time) hosted on Webhook’s own system. It can be done, by hosting the architecture on your own servers, but I was on a deadline that the client just cut in half — I, therefore, had to find a different path.

Having previous experience with Hugo, it seemed the next best thing for this project. Hugo, *“a fast and modern static website generator,”* is a wonderful system that, while still technically in beta (v0.20.7 as of this writing), performs and delivers exceptionally well! It’s written in Go, or *Golang*, and while the docs seem disjointed at times – the community proves enthusiastic, robust, and knowledgeable. [Hugo](http://gohugo.io/), being completely static, lacked any sort of CMS or user-friendly front-end system, so I planned on implementing a third-party solution such as [Forestry](https://forestry.io/) or [Netlify](https://www.netlify.com/).

So now I had a plan: build with Hugo, write content in [Markdown](https://www.wikiwand.com/en/Markdown), and configure a simple CMS solution with Forestry.io.

#### ii. Development – Planning

I started with some wireframe sketches; the conceptual layout of the landing page took on various aspects of lessons I’ve learned and read about — captivating hero image with a simple intro and engaging CTA, elongated explanation with some statistics, easy navigation, etc.

<!-- WIREFRAMES -->
{{< figureModalCover src="/img/projects/good-lunch/good-lunch-wireframes-01.jpg" title="Always a good idea to sketch some simple wireframes when starting a new project" class="caption caption-uk-box-shadow-large" link="wireframe" >}}

At this point, the client sent over some print materials they whipped up in-house; the pieces included key information for the page, as well as a branded visual identity to go with it.

<!-- HERO SCREENSHOT -->
{{< figureModal src="/img/projects/good-lunch/good-lunch-hero-intro.jpg" title="Screenshot of THE LUNCH's hero and intro sections" class="caption caption-uk-box-shadow-large" link="hero" >}}

#### iii. Development – Construction – DOM

##### Sections & partials

The initial DOM structure is pretty simple: header, meta, styles, index sections, footer, and scripts; nothing too fancy! Hugo provides a nice templating syntax for creating a dynamic-development that compiles to a static index file. The `index.html` file for this landing page looks like:

```go
{{ partial "header.html" . }}
{{ partial "main.html" . }}
```

Hah! Simple, right? Okay, but we both know that’s not the whole site — let’s look through the rest of the `header.html` partial markup.

{{< gist williampansky 83c361c7b230e1b10ad922b6511ff1b7 "good-lunch-header.html" >}}

I won't bore you with the rest of the partials – but if you're crazy and want to look it over, click the accordion links below.

<ul class="uk-margin-remove-top" uk-accordion="multiple: false; duration: 400; transition: ease-in-out">

  <li>
    <div class="uk-accordion-title uk-text-small">
      {{ partial "meta.html" . }}
    </div>
    <div class="uk-accordion-content">
      {{< gist williampansky 83c361c7b230e1b10ad922b6511ff1b7 "meta.html" >}}
    </div>
  </li>

  <li>
    <div class="uk-accordion-title uk-text-small">
      {{ partial "chromeframe.html" . }}
    </div>
    <div class="uk-accordion-content">
<pre><code class="lang-html hljs">&lt;style&gt;
  .chromeframe {
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background: white;
    height: 100%;
    width: 100%;
    padding: 35px;
    opacity: .85;
    font-size: 1.5rem;
  }
&lt;/style&gt;</code></pre>
    </div>
  </li>

  <li>
    <div class="uk-accordion-title uk-text-small">
      {{ partial "nav.html" . }}
    </div>
    <div class="uk-accordion-content">
      {{< gist williampansky 83c361c7b230e1b10ad922b6511ff1b7 "nav.html" >}}
    </div>
  </li>

  <li>
    <div class="uk-accordion-title uk-text-small">
      {{ partial "socialShare.html" . }}
    </div>
    <div class="uk-accordion-content">
      {{< gist williampansky 83c361c7b230e1b10ad922b6511ff1b7 "socialshare.html" >}}
    </div>
  </li>

</ul>

And, if you're really up for some fun (you masochist) you can look over the full `index.html` file over on the [repository](https://github.com/milleradagency/GOOD-Lunch/blob/master/docs/index.html).

<!-- ##### Schema.org -->

#### iii. Development – Construction – SCSS

Even though many blogs say that CSS preprocessors are on their way out, due to CSS Grids rising up and coming to life, I still love SASS/SCSS.

I have a simple [repo](https://github.com/williampansky/pansky-sass) for my file structure which gives me an easy boilerplate when starting new projects via `bower install pansky-sass --save`.

The primary organization for my SCSS is as follows:

```scss
// PARTIALS
// Mixins, definitions (colors, font-families),
// functions, selectors, etc.
@import 'partials/!module';

// VENDORS
// 3rd-party vendor styles (normalize,
// bootstrap), etc.
@import 'vendors/!module';

// BASE
// Global styles such as non-vendor resets,
// typography, etc.
@import 'base/!module';

// COMPONENTS
// Resuable / independant module components
// (buttons, sliders, etc.)
@import 'components/!module';

// LAYOUT
// Styling for larger layout components;
// e.g. nav, header, footer, etc.
@import 'layout/!module';

// PAGES
// Page-specific styling, such as homepage, if necessary.
@import 'pages/!module';

// THEMES
// Styles for different themes; such as holidays, events, etc.
@import 'themes/!module';
```

##### Sponsorship cards

I wanted the elements that housed the details and benefits for sponsoring the event to look pretty slick, professional, and appealing. Using a 'pricing table' aesthetic, I designed some responsive cards from Bootstrap's base component.

<!-- SPONSORSHIP CARDS -->
{{< figureModal src="/img/projects/good-lunch/good-lunch-sponcards.jpg" title="Sponsorship cards for THE LUNCH" class="caption caption-uk-box-shadow-large" link="sponCards" >}}

Here's a working example of two of the cards in action:

{{< project-good-lunch-sponCards >}}

#### iii. Development – Construction – Javascript

I’m still learning my way through vanilla JS (*shoosh*, we all start somewhere), but this was a live client project and I used jQuery. I wrote small `.animate()` scripts for fading in elements and early-version mobile controls, while turning to StackOverflow, as we all do, for [resolutions](http://stackoverflow.com/a/18633915) on how to prevent automatic browser scroll on refresh, etc; all items are credited in the comments.

<ul class="uk-margin-remove-top" uk-accordion="multiple: true; duration: 400; transition: ease-in-out">
  <li>
    <div class="uk-accordion-title uk-text-small">
      lunch2017.js
    </div>
    <div class="uk-accordion-content">
<pre><code class="lang-js hljs">// Document [when website] loads
$(document).ready(function() {
  $("main").animate({
    opacity: 1,
  }, 500, function() {
    // Animation complete.
  });

  $("nav").animate({
    opacity: 1,
  }, 1000, function() {
    // Animation complete.
  });

  $("#bbox-root").delay(2000).fadeIn("slow");
});


// #mobileNav controls
$(function() {
  // open/close mobile nav
  $("#mobileNavBar").on("click", function() {
    if ($("#mobileNav").hasClass("showMeMore") == false) {
      $("#mobileNav").addClass('showMeMore');
      $("body").addClass('noscroll');
      $("#mobileNavBars i").toggleClass('fa-share-alt fa-times');
      $("#navFade").toggleClass('hidden visible');
    } else {
      $("#mobileNav").removeClass('showMeMore');
      $("body").removeClass('noscroll');
      $("#mobileNavBars i").toggleClass('fa-times fa-share-alt');
      $("#navFade").toggleClass('visible hidden');
    };
  });
});


// Prevent automatic browser scroll on refresh
// http://stackoverflow.com/a/18633915
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});


// Prevent a#SECTION from being added to URL on click
// http://stackoverflow.com/a/20215413
$('.mainShow').click(function(event){
  event.preventDefault();
});
$('.btn').click(function(event){
  event.preventDefault();
});


// Detect IE and change if needed
// https://codepen.io/gapcode/pen/vEJNZN
function detectIE() {
  var ua = window.navigator.userAgent;

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => change flex to block to avoid flex-wrap bug
    $(".card .card-block").css("display", "block");
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => change flex to block to avoid flex-wrap bug
    $(".card .card-block").css("display", "block");
  }
}


// Run if iOS ver = 9.x.x
// http://stackoverflow.com/a/13280432
if(/(iPhone|iPad|iPod)\sOS\s9/.test(navigator.userAgent)) {
    var btn = $("#heroButtons");
    var bar = $(".et-hero-tabs-container");
    btn.remove();
    bar.css("position", "fixed");
    bar.css("top", "0");
    bar.css("height", "50px");
    bar.css("border-bottom", "1px solid #595959");
};


// Detect Android and run
// https://davidwalsh.name/detect-android
// http://stackoverflow.com/a/18764086
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
var navi = $(".et-hero-tabs-container--top");
if(isAndroid) {
  // Do something!
  navi.css("-webkit-transform", "translateZ(0)");
  // window.location = 'http://android.davidwalsh.name';
}</code></pre>
    </div>
  </li>
</ul>

#### iii. Development – Construction – Compiler

To compile my individual partials into a production-ready minified file, I use Gulp. Since it’s a simple, yet expandable, toolkit – Gulp provides me the power of hassle-free CSS through the following plugins:

```js
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var nano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('default', function () {
  return gulp.src('themes/2017/static/css/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // using gulp-sass
    .pipe(postcss([ autoprefixer() ]))
    .pipe(nano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('themes/2017/static/css'));
});

gulp.task('watch', function() {
  gulp.watch('themes/2017/static/css/**/*.scss', ['default']);
});
```

#### iii. Development – Construction – Accessibility & Compatibility

Due to the nature of the event and it’s target market, I opted to make the base font size of the document 18px. I then expanded that when configuring the REM sizes for typographic elements; p (1rem), h1-h6, ul/ol, li, etc.

The site did encounter some hiccups when testing IE11, but that was expected. Additionally, I tested the page on iOS (current + back one version) using Xcode Simulator and live devices, Android (current version) using live devices, and several breakpoints using the Emmet Re:View [plugin](https://chrome.google.com/webstore/detail/emmet-review/epejoicbhllgiimigokgjdoijnpaphdp?hl=en) for Chrome *(pictured below)*.

<!-- EMMET RE:VIEW -->
{{< figureModal src="/img/projects/good-lunch/good-lunch-emmet.jpg" title="Emmet Re:View Chrome Plugin" class="caption caption-uk-box-shadow-large" link="emmet" >}}

#### iii. Development – Construction – Issues & Solutions

There's always issues, *always*. Tracked 'em on on the repo; the following is a view of the bigger ones:

<ul uk-accordion="multiple: false; duration: 400; transition: ease-in-out">
  <li>
    <div class="uk-accordion-title uk-text-small">
      <span uk-icon="icon: github"></span> <strong>#11:</strong> win7 ie10.0,11.0 - Header, sticky nav, &amp; sponOpps
    </div>
    <div class="uk-accordion-content">
      <p>
        The hero intro sections encountered bugs on Windows 7 IE10/11.
      </p>
      <img src="/img/projects/good-lunch/good-lunch-issues-11.jpg" alt="Screenshot of repo issues #11 for THE LUNCH 2017" class="uk-box-shadow-medium pansky-border-muted" />
      <p>
        The issue was resolved through the following tweaks:
      </p>
      <ul class="uk-list uk-list-divider uk-text-small">
        <li><span uk-icon="icon: check" class="pansky-icon-check"></span>
          Add [if ie11] hero row transform: scale(0.8);
        </li>
        <li><span uk-icon="icon: check" class="pansky-icon-check"></span>
          Add [if ie11] height: 100%; to nav.et-hero.tabs
        </li>
        <li><span uk-icon="icon: check" class="pansky-icon-check"></span>
          changed hero and sponOpps from to container style="width:100%";
        </li>
      </ul>
      <p class="uk-text-small uk-text-right">
        View issue on <a href="https://github.com/milleradagency/GOOD-Lunch/issues/11">GitHub</a>
      </p>
    </div>
  </li>
  <li>
    <div class="uk-accordion-title uk-text-small">
      <span uk-icon="icon: github"></span> <strong>#13:</strong> win10 edge13.0 - Hero copy &amp; sponOpps
    </div>
    <div class="uk-accordion-content">
      <p>
        The sponsor/donor tier-card sections encountered bugs on Windows 10 Edge v13.
      </p>
      <img src="/img/projects/good-lunch/good-lunch-issues-13.jpg" alt="Screenshot of repo issues #13 for THE LUNCH 2017" class="uk-box-shadow-medium pansky-border-muted" />
      <p>
        The issue was resolved through the following tweaks:
      </p>
      <ul class="uk-list uk-list-divider uk-text-small">
        <li><span uk-icon="icon: check" class="pansky-icon-check"></span>
          Added [if edge] hero row transform: scale(0.8);
        </li>
        <li><span uk-icon="icon: check" class="pansky-icon-check"></span>
          Added [if edge] hero row from height: 100%; to nav.et-hero.tabs
        </li>
      </ul>
      <p class="uk-article-meta uk-text-right">
        View issue on <a href="https://github.com/milleradagency/GOOD-Lunch/issues/13">GitHub</a>
      </p>
    </div>
  </li>
  <li>
    <div class="uk-accordion-title uk-text-small">
      <span uk-icon="icon: github"></span> <strong>#38:</strong> iOS - Hero buttons broken
    </div>
    <div class="uk-accordion-content">
      <p>
        "Get table" &amp; "learn more" buttons inactive; tested on iPhone 5, works on 6s. Oddly enough, the buttons work in Xcode Simulator. Coworker's have iPhone 6SE and iPhone 5 in the office - both running on 9.3.X- version of iOS; seems that is the culprit here.
      </p>
      <p>
        Downloaded iOS 9.3 for Xcode Simulator and found the issue to be the syntax <code>let self = this;</code> in StickyNav.js line 8. Apparently, <code>let</code> produces the error: <code>SyntaxError: Unexpected use of reserved word 'let' in strict mode</code> due to lack of support for <code>let</code>.
      </p>
      <p>
        As a quick-fix (deadline approaching <em>fast</em>), I've implemented this bit of <a href="http://stackoverflow.com/questions/13280343/how-can-i-detect-specific-ios-version-with-jquery">info</a> to detect if the version of iOS = 9.x.x and run the following conditionals if so:
      </p>
<pre><code class="lang-js hljs">// run if iOS ver = 9.x.x
if(/(iPhone|iPad|iPod)\sOS\s9/.test(navigator.userAgent)) {
  var btn = $("#heroButtons");
  var bar = $(".et-hero-tabs-container");
  btn.remove();
  bar.css("position", "fixed");
  bar.css("top", "0");
  bar.css("height", "50px");
  bar.css("border-bottom", "1px solid #595959");
};</code></pre>
      <p class="uk-text-meta uk-text-right">
        View issue on <a href="https://github.com/milleradagency/GOOD-Lunch/issues/38">GitHub</a>
      </p>
    </div>
  </li>
</ul>

### Deployment

Ahh, going live... such a terrifying and exhilarating time! The project hit v1.0.0 and the Deployment milestone was completed. Although, I guess I forgot to actually close the milestone – *hence the date of closure*.

<!-- SPONSORSHIP CARDS -->
{{< figureModal src="/img/projects/good-lunch/good-lunch-milestone-deployment.jpg" title="THE LUNCH deployment milestone on GitHub" class="caption caption-uk-box-shadow-large" link="milestone" >}}

### Post-release

As with any project, there were post-release updates. The site is at v1.1.7 as of this writing. Both further fixes/enchancements and client updates. To view the log, see the [README.md](https://github.com/milleradagency/GOOD-Lunch/blob/master/README.md) on the repo.

This may also be the time where you're wondering, "Wait, where's the CMS integration?" Well, unfortunately due to time constraints, said feature never made it into the project. I continued to provide updates per client requests and wrote an extensive how-to document on how to edit the repo directly (while not breaking the site.) — which actually worked out well; site's still runnin'!

Release v1.1.7 is, actually, just prior to the client's editing access. You know... *just in case*.

### Conclusion

This project was an absurd amount of fun crammed into a equally-speedy timeframe.

The first commits occurred on March 16th, while deployment was March 24th. May 16th was v1.1.7, and the client updates started June 13th.

That being said, I'm glad to have worked on it. Collaborating with Goodwill Dallas is always exciting and certainly feels like I have a sense of drive powering me when creating for them.

### Sources

<ul class="wep-sources" uk-accordion="multiple: false; duration: 400; transition: ease-in-out">
  <li>
    <div class="uk-accordion-title uk-text-small">
      Click to view the list of sources
    </div>
    <div class="uk-accordion-content">
      <ol class="uk-list uk-list-bullet uk-text-small">
        <li>
          <a href="https://github.com/daneden/animate.css">Animate.css</a>
        </li>
        <li>
          <a href="https://www.cloudflare.com/">Cloudflare</a>
        </li>
        <li>
          <a href="http://fontawesome.io">FontAwesome</a>
        </li>
        <li>
          <a href="https://pages.github.com/">GitHub Pages</a>
        </li>
        <li>
          <a href="https://analytics.google.com/analytics/web/">Google Analytics</a>
        </li>
        <li>
          <a href="https://fonts.google.com/">Google Fonts</a>
        </li>
        <li>
          <a href="https://gohugo.io">Hugo</a>
        </li>
        <li>
          <a href="https://jquery.com">jQuery</a>
        </li>
        <li>
          <a href="https://modernizr.com/">Modernizr</a>
        </li>
        <li>
          <a href="http://sass-lang.com/">SCSS</a>
        </li>
        <li>
          <a href="https://v4-alpha.getbootstrap.com/">Twitter Bootstrap</a>
        </li>
        <li>
          <a href="https://codepen.io/gapcode/pen/vEJNZN">CodePen</a> – Detect Internet Explorer (IE) up to version 11 and Edge (12+) by Mario
        </li>
        <li>
          <a href="https://codepen.io/sdthornton/pen/wBZdXq">CodePen</a> – Material Design Box Shadows by Samuel Thornton
        </li>
        <li>
          <a href="http://codepen.io/ettrics/pen/WRbGRN">CodePen</a> – Sticky Slider Navigation (Responsive) by Ettrics
        </li>
        <li>
          <a href="http://codepen.io/luishj/pen/Exfyh">CodePen</a> – Tinted Hero by Luis Herrero
        </li>
      </ol>
    </div>
  </li>
</ul>

### Demo

To view a demo of the site, click [here](/projects/thelunch.info/demo/).
