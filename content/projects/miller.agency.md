+++
draft = false
publishdate = "2017-02-01"
Lastmod = "2017-07-15"
keywords = [ "wordpress", "dallas", "ad agency" ]

avatar = "/projects/miller.agency/demo/apple-touch-icon.png"
tag = "Wordpress"
client = "Miller Ad Agency"
clientdescription = "For more than 30 years, Miller Ad Agency has earned a reputation as experts in advertising. From boosting your bottom line to growing your market share, Miller Ad Agency brings results."
image = "/projects/miller.agency/demo/wp-content/uploads/newsletter-2017-01-hero.jpg"
hero = "/projects/miller.agency/demo/wp-content/uploads/maa-services-web.jpg"
caption = ""
category = "Case study"
title = "Wordpress CMS platform built with Elementor Pro for Dallas full-service ad agency"
name = "miller.agency"

description = "Wordpress CMS platform built with Elementor Pro for Dallas full-service ad agency"

summary = "Over the course of my third year at Miller Ad Agency, I became increasingly infatuated with front-end web development ..."
+++

### Introduction

<p class="uk-text-lead">Over the course of my third year at Miller Ad Agency I became increasingly infatuated with front-end web development.</p>

I learned as much as I could, I dreamt about UI and UX before falling asleep, I carved out a *(basically)* web-only position for myself; if it were possible to eat web dev – I'd have probably done that too.

My awesome art director and good friend, [Sasha Gelemanovic](https://www.linkedin.com/in/sasha-gelemanovic-a31b9460/), knew he needed a way to keep me interested in the day-to-day workload. He devised a proposal for a new agency website to freshen-up the face of the company and, **in all honesty**, keep me around. Not that I'd leave anytime soon, but we could both feel it coming.

<div id="#notification" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
  <div>
    <div class="uk-card uk-card-primary uk-card-body uk-text-center">
      <h3 class="uk-card-title uk-margin-remove"><span uk-icon="icon: code; ratio: 3;"></span></h3>
      <h5 class="uk-margin-remove">
        This case study contains a crap-ton of code examples. :stuck_out_tongue_winking_eye:
      </h5>
    </div>
  </div>
</div>

### Objective

To construct a brand new website for my then-employer, Miller Ad Agency, that implemented all that I had learned over the last year in the dev space.

### Project details

<dl class="uk-description-list">
<dt>Client</dt>
  <dd>Miller Ad Agency</dd>
<dt>Project</dt>
  <dd>Wordpress CMS platform built with Elementor Pro for Dallas full-service ad agency.</dd>
<dt>Site name</dt>
  <dd>millerAgency</dd>
<dt>Site URL</dt>
  <dd>miller.agency</dd>
<dt>Repo URL</dt>
  <dd>https://github.com/milleradagency/millerAgency</dd>
<dt>Standards</dt>
  <dd>HTML5</dd>
  <dd>CSS3</dd>
  <dd>JavaScript</dd>
  <dd>Wordpress CMS</dd>
<dt>Libraries &amp; third-party plugins</dt>
<ul class="uk-margin-remove-top" uk-accordion="multiple: true; duration: 400; transition: ease-in-out">
  <li>
    <div class="uk-accordion-title uk-text-small">Click to expand</div>
    <div class="uk-accordion-content">
      <dl class="uk-description-list">
        <dt>Elementor Page Builder</dt>
          <dd>
            Elementor offers developers the freedom to customize and extend it and can become a useful plugin for developers that don't want to be chained to a theme.
          </dd>
        <dt>Google Analytics</dt>
          <dd>
            Google Analytics lets you measure your advertising ROI as well as track your Flash, video, and social networking sites and applications.<sup>5</sup>
          </dd>
        <dt>Google Fonts</dt>
          <dd>
            Google Fonts ... is an interactive directory of free hosted application programming interfaces for web fonts.<sup>6</sup>
          </dd>
        <dt>jQuery</dt>
          <dd>
            Cross-platform JavaScript library designed to simplify the client-side scripting of HTML.
          </dd>
        <dt>Modernizr</dt>
          <dd>
            Modernizr tells you what HTML, CSS and JavaScript features the user’s browser has to offer.
          </dd>
        <dt>SCSS</dt>
          <dd>
            Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
          </dd>
        <dt>UIkit</dt>
          <dd>
            A lightweight and modular front-end framework for developing fast and powerful web interfaces.
          </dd>
        <dt>Wordpress</dt>
          <dd>
            Trusted by the Best. 28% of the web uses WordPress, from hobby blogs to the biggest news sites online. Discover more sites built with WordPress.
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

I had *"built"* Wordpress sites in the past, but this time I **really needed to build it**. I dug in and learned all that I could about PHP and Wordpress-specific syntax in order to develop a site that was optimized, dynamic, and performant. We're talkin' conditional style and script enqueuing, dynamically-updated author profiles, custom post taxonomies – *all that jazz.* We'll dig into the code here in a bit.

I also needed the site to be easily updatedable and maintanable by those who don't know how to code. Therefore, I researched the top hotness page-builder plugins and decided [Elementor](https://elementor.com/) would be my best bet. I also chose the HTML5 [Boilerplate](http://github.com/zencoder/html5-boilerplate-for-wordpress) as my starting point.

> Elementor offers developers the freedom to customize and extend it and can become a useful plugin for developers that don't want to be chained to a theme.

![Elementor](/img/projects/maa-website/elementor-trio.jpg)

After trying various frameworks, like [Materialize](http://materializecss.com/) and Bootstrap v4, I decided UIkit was my go-to for this project. I freakin' love [UIkit](https://getuikit.com/) – it offers lots of creative freedom and a solid foundation to build off of.

<div class="uk-text-center"><img src="//localhost:1313/img/vendors/uikit.svg" alt="UIkit"></div>

> A lightweight and modular front-end framework for developing fast and powerful web interfaces. —[[UIkit](https://getuikit.com/)]

#### ii. Development – Styleguide

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="top: 50; animation: uk-animation-slide-top; bottom: #ii-development-construction;">
  Colors
</h6>

###### Colors — Primary
<ul id="styleguideColors1" class="styleguide-colors uk-child-width-1-2@s uk-grid-collapse" uk-grid>
  <li id="colorsPrimary" class="uk-card uk-card-body uk-card-primary">#0e75dd</li>
  <ul class="uk-child-width-1-2 uk-grid-collapse" uk-grid>
    <li id="colorsPrimaryLight1" class="uk-card uk-card-body uk-card-primary">#328ae2</li>
    <li id="colorsPrimaryLight2" class="uk-card uk-card-body uk-card-primary">#62a5e9</li>
    <li id="colorsPrimaryDark1" class="uk-card uk-card-body uk-card-primary">#0c63bc</li>
    <li id="colorsPrimaryDark2" class="uk-card uk-card-body uk-card-primary">#094c90</li>
  </ul>
</ul>

Note that these palettes were made using the SCSS color mixing function; for example:

```
{{< highlight scss >}}
  $color-primary:               #0e75dd; // original: 0053a
  $color-primary-light:         mix(white, $color-primary, 15%);
  $color-primary-lightest:      mix(white, $color-primary, 35%);
  $color-primary-dark:          mix(black, $color-primary, 15%);
  $color-primary-darkest:       mix(black, $color-primary, 35%);
{{< /highlight >}}
```

###### Colors — Accent
<ul id="styleguideColors2" class="styleguide-colors uk-child-width-1-2@s uk-grid-collapse" uk-grid>
  <li id="colorsAccent" class="uk-card uk-card-body uk-card-primary">#f49200</li>
  <ul class="uk-child-width-1-2 uk-grid-collapse" uk-grid>
    <li id="colorsAccentLight1" class="uk-card uk-card-body uk-card-primary">#f6a226</li>
    <li id="colorsAccentLight2" class="uk-card uk-card-body uk-card-primary">#f8b859</li>
    <li id="colorsAccentDark1" class="uk-card uk-card-body uk-card-primary">#cf7c00</li>
    <li id="colorsAccentDark2" class="uk-card uk-card-body uk-card-primary">#9f5f00</li>
  </ul>
</ul>

###### Colors — Grayscale
<ul id="styleguideColors3" class="styleguide-colors uk-child-width-1-2@s uk-grid-collapse" uk-grid>
  <li id="colorsBlack" class="uk-card uk-card-body uk-card-primary">#222</li>
  <ul class="uk-child-width-1-2 uk-grid-collapse" uk-grid>
    <li id="colorsGray1" class="uk-card uk-card-body uk-card-primary">#666</li>
    <li id="colorsGray2" class="uk-card uk-card-body uk-card-primary">#959595</li>
    <li id="colorsWhite1" class="uk-card uk-card-body uk-card-primary">#e5e5e5</li>
    <li id="colorsWhite2" class="uk-card uk-card-body uk-card-primary">#fdfdfd</li>
  </ul>
</ul>

#### ii. Development – Construction

I said we'd look at some code later; well, later is now.

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="top: 50; animation: uk-animation-slide-top; bottom: #style-css-end;">
  style.css
</h6>

```
{{< highlight css >}}
// ==============================================================
// Wordpress' required style.css
// ==============================================================

/*
  Theme Name: millerAgency
  Theme URI: https://github.com/milleradagency/millerAgency
  Description: Based on the HTML5 Boilerplate for Wordpress theme.
  Version: 1.0
  Author: William Pansky
  Author URL: http://williampansky.com/
  Original Author: Steve Heffernan
  Original Author URL: http://steveheffernan.com/
  Tags: agency, elementor, builder, miller ad agency
  License: GNU General Public License v2.0
  License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/
{{< /highlight >}}
```

<div id="style-css-end"></div>

I'm excited by all that I've learned from this project — Wordpress is surprisingly interesting once you dig into the nuts and bolts. For example, the `funtions.php` and the ability to dynamically enqueue scripts or stylesheets through if/else conditionals.

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="top: 50; animation: uk-animation-slide-top; bottom: #functions-php-end;">funtions.php</h6>

```
{{< highlight php >}}
// ==============================================================
// functions.php
// ==============================================================

// ------------------------------
// load scripts
// wordpress enqueue  => developer.wordpress.org/reference/functions/wp_enqueue_script
// wordpress register => developer.wordpress.org/reference/functions/wp_register_script
// blog about topic   => premium.wpmudev.org/blog/adding-scripts-and-styles-wordpress-enqueueing
// enqueue via CDN    => stackoverflow.com/a/40403412
function millerAgency_assets() {

  // jQuery 3.2.1 CDN
  wp_deregister_script( 'jquery' ); // removes old jquery before loading new jquery

  // Velocity.js
  wp_register_script( 'velocity', 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js', null, null, true );
  wp_enqueue_script( 'velocity' );

  // VelocityUI.js
  wp_register_script( 'velocity_ui', 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.ui.min.js', null, null, true );
  wp_enqueue_script( 'velocity_ui' );

  // Adds UIkit dependancy DOM items before loading UIkit next
  wp_register_script( 'uikit_toggle', get_template_directory_uri() . '/assets/js/uikit-toggle.js', null, null, true );
  wp_enqueue_script( 'uikit_toggle' );

  // UIkit
  wp_register_script( 'uikit', get_template_directory_uri() . '/assets/js/uikit.min.js', null, null, true );
  wp_enqueue_script( 'uikit' );

  // UIkit Icons
  wp_register_script( 'uikit_icons', get_template_directory_uri() . '/assets/js/uikit-icons.min.js', null, null, true );
  wp_enqueue_script( 'uikit_icons' );

  // Highlight.js
  wp_register_script( 'highlightjs', get_template_directory_uri() . '/assets/js/highlight.pack.js#asyncload', null, null, true );
  wp_enqueue_script( 'highlightjs' );

  // Numerator
  wp_deregister_script( 'jquery-numerator' ); // De-register original inclusion to properly enqueue
  wp_register_script( 'jquery-numerator', get_site_url() . '/wp-content/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min.js', null, null, true );
  wp_enqueue_script( 'jquery-numerator' );

  // Waypoints
  wp_deregister_script( 'waypoints' ); // De-register original inclusion to properly enqueue
  wp_register_script( 'waypoints', get_site_url() . '/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js', null, null, true );
  wp_enqueue_script( 'waypoints' );

  // Elementor Frontend
  wp_deregister_script( 'elementor-frontend' ); // De-register original inclusion to properly enqueue
  wp_register_script( 'elementor-frontend', get_site_url() . '/wp-content/plugins/elementor/assets/js/frontend.min.js#asyncload', null, null, true );
  wp_enqueue_script( 'elementor-frontend' );

  // millerAgency.js
  wp_register_script( 'millerjs', get_template_directory_uri() . '/assets/js/millerAgency.js#asyncload', null, null, true );
  wp_enqueue_script( 'millerjs' );

}
add_action( 'wp_enqueue_scripts', 'millerAgency_assets' );
{{< /highlight >}}
```

<div id="functions-php-end"></div>

The HTML5 Boilerplate was quite bare (as expected) so I needed to punch in some of the dynamic Wordpressy things I wanted to achieve, like:

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #featured-image-support-end;">Featured image support</h6>

```
{{< highlight php >}}
// ------------------------------
// Featured Image
function mytheme_post_thumbnails() {
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'mytheme_post_thumbnails' );
{{< /highlight >}}
```

<div id="featured-image-support-end"></div>

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #navigation-menu-functionality-end;">Navigation menu functionality</h6>

```
{{< highlight php >}}
// ------------------------------
// Nav Menus
function nav_menu() {
	register_nav_menu( 'main', 'Main Menu' );
	register_nav_menu( 'mobile', 'Mobile Menu' );
}
add_action( 'after_setup_theme', 'nav_menu' );
{{< /highlight >}}
```

<div id="navigation-menu-functionality-end"></div>

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="top: 50; animation: uk-animation-slide-top; bottom: #custom-post-taxonomy-and-type-end;">Custom post taxonomy and type</h6>

```
{{< highlight php >}}
// ------------------------------
// custom post taxonomy — seperates portfolio categories from blog categories
// codex.wordpress.org/Function_Reference/register_taxonomy#Example
function create_portfolio_taxonomy() {
	// Add new taxonomy, make it hierarchical (like categories)
	$labels = array(
		'name'              => _x( 'Work Categories', 'Taxonomy General Name' ),
		'singular_name'     => _x( 'Work Category', 'Taxonomy Singular Name' ),
		'search_items'      => __( 'Search Work Categories' ),
		'all_items'         => __( 'All Work Categories' ),
		'parent_item'       => __( 'Parent Work Category' ),
		'parent_item_colon' => __( 'Parent Work Category:' ),
		'edit_item'         => __( 'Edit Work Category' ),
		'update_item'       => __( 'Update Work Category' ),
		'add_new_item'      => __( 'Add New Work Category' ),
		'new_item_name'     => __( 'New Work Name' ),
		'menu_name'         => __( 'Work Categories' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
        'show_in_menu'      => true,
		'show_admin_column' => true,
        'show_in_admin_bar' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'work' ),
	);

  register_taxonomy( 'work_categories', array( 'portfolio' ), $args );
}

// Hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_portfolio_taxonomy', 0 );

// ------------------------------
// custom post type — portfolio/work
// wpbeginner.com/wp-tutorials/how-to-create-custom-post-types-in-wordpress/
function custom_post_type() {
  // Set UI labels for Custom Post Type
	$labels = array(
		'name'                => _x( 'Portfolio', 'Post Type General Name' ),
		'singular_name'       => _x( 'Portfolio', 'Post Type Singular Name' ),
		'menu_name'           => __( 'Portfolio' ),
		// 'parent_item_colon'   => __( 'Parent Movie' ),
		'all_items'           => __( 'All' ),
		'view_item'           => __( 'View Portfolio' ),
		'add_new_item'        => __( 'Add New Portfolio' ),
		'add_new'             => __( 'Add New' ),
		'edit_item'           => __( 'Edit Portfolio' ),
		'update_item'         => __( 'Update Portfolio' ),
		'search_items'        => __( 'Search Portfolio' ),
		'not_found'           => __( 'Not Found' ),
		'not_found_in_trash'  => __( 'Not found in Trash' ),
	);

  // Set other options for Custom Post Type
	$args = array(
		'label'               => __( 'portfolio' ),
		'description'         => __( 'Our work portfolio' ),
		'labels'              => $labels,
		// Features this CPT supports in Post Editor
		'supports'            => array( 'title', 'editor', 'thumbnail', 'revisions', 'work_catrgories' ),
		// You can associate this CPT with a taxonomy or custom taxonomy.
		'taxonomies'          => array( 'work_catrgories' ),
		// A hierarchical CPT is like Pages and can have Parent and child items.
        // A non-hierarchical CPT is like Posts.
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		// 'menu_position'       => 5,
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		//'capability_type'     => 'page',
	);

	// Registering your Custom Post Type
	register_post_type( 'portfolio', $args );
}

// Hook into the 'init' action so that the function
// containing our post type registration is not
// unnecessarily executed.
add_action( 'init', 'custom_post_type', 1 );
{{< /highlight >}}
```

<div id="custom-post-taxonomy-and-type-end"></div>

#### ii. Development – Components

This next section showcases the overal aesthetic and most of the key site components. Lot's of screenshots and examples incoming.

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #metro-card-end;">Metro card</h6>

Using Elementor's *card hover* snippet, I designed a metro-esque component we could reuse throughout the site on top-level pages.

Here is an example of said element:
{{< project-good-maa-metroCard >}}

<!-- HOMEPAGE -->
{{< figureModal src="/img/projects/maa-website/site-homepage.jpg" title="Homepage" class="modal caption wep-box-shadow-bottom" link="siteHomepage" >}}

<!-- ABOUT PAGE -->
{{< figureModal src="/img/projects/maa-website/site-aboutpage.jpg" title="About page" class="modal caption wep-box-shadow-bottom" link="siteAbout" >}}

<!-- TEAM PAGE -->
{{< figureModal src="/img/projects/maa-website/site-teampage.jpg" title="Team page" class="modal caption wep-box-shadow-bottom" link="siteTeam" >}}

<div id="metro-card-end"></div>

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #header-nav-footer-mobilemenu-end;">Header, nav, footer, &amp; mobile menu</h6>

{{< centerImage src="/img/projects/maa-website/site-topNav.jpg" title="Desktop navbar" class="caption wep-box-shadow-bottom" >}}

<div id="header-nav-footer-mobilemenu-end"></div>

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #bloglist-and-singleposts-end;">Blog list and single posts</h6>



<div id="bloglist-and-singleposts-end"></div>

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #careerspage-end;">Careers page</h6>



<div id="careerspage-end"></div>

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #ticketreporting-and-issuesupport-end;">Ticket reporting &amp; issue support</h6>



<div id="ticketreporting-and-issuesupport-end"></div>

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #teammembers-and-profilepages-end;">Team members &amp; profile pages</h6>



<div id="teammembers-and-profilepages-end"></div>

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #services-end;">Services</h6>



<div id="services-end"></div>

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #newsletters-end;">Newsletter portal &amp; landing pages</h6>



<div id="newsletters-end"></div>

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #singleLanding-end;">Single-item landing pages</h6>



<div id="singleLanding-end"></div>

<h6 class="uk-background-default" style="z-index: 5;" uk-sticky="bottom: #quizes-end;">Quizes &mp; leads</h6>



<div id="quizes-end"></div>
