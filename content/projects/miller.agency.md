---
draft: false
featured: false
keywords: ["wordpress", "dallas", "ad agency"]
Lastmod: 2017-07-15
publishdate: 2017-02-01
weight: 0
client: {
    avatar: "/projects/miller.agency/demo/apple-touch-icon.png",
    caption: "Wordpress CMS platform built with Elementor Pro for Dallas full-service ad agency",
    name: "Miller Ad Agency",
    description: "For more than 30 years, Miller Ad Agency has earned a reputation as experts in advertising. From boosting your bottom line to growing your market share, Miller Ad Agency brings results.",
    location: "Dallas, TX",
    url: "https://www.milleradagency.com/"
}
project: {
    category: "Case study",
    employer: "Miller Ad Agency",
    image: "/projects/miller.agency/demo/wp-content/uploads/newsletter-2017-01-hero.jpg",
    name: "miller.agency",
    summary: "Over the course of my third year at Miller Ad Agency, I became increasingly infatuated with front-end web development ...",
    tag: "Wordpress",
    thumbnail: "/projects/miller.agency/_thumb.jpg",
    title: "Wordpress CMS platform built with Elementor Pro for Dallas full-service ad agency",
    url: "https://github.com/milleradagency/millerAgency"
}
hero: "/projects/miller.agency/demo/wp-content/uploads/maa-services-web.jpg"
---

## Introduction

Over the course of my third year at Miller Ad Agency I became increasingly infatuated with front-end web development.

I learned as much as I could, I dreamt about UI and UX before falling asleep, I carved out a *(basically)* web-only position for myself; if it were possible to eat web dev – I'd have probably done that too.

My awesome art director and good friend, [Sasha Gelemanovic](https://www.linkedin.com/in/sasha-gelemanovic-a31b9460/), knew he needed a way to keep me interested in the day-to-day workload. He devised a proposal for a new agency website to freshen-up the face of the company and, **in all honesty**, keep me around. Not that I'd leave anytime soon, but we could both feel it coming.

> This case study contains a crap-ton of code examples. :stuck_out_tongue_winking_eye:

## Objective

To construct a brand new website for my then-employer, Miller Ad Agency, that implemented all that I had learned over the last year in the dev space.

## Project details

- **Client:** Miller Ad Agency
- **Project:** Wordpress CMS platform built with Elementor Pro for Dallas full-service ad agency.
- **Site name:** millerAgency
- **Site URL:** miller.agency
- **Repo URL:** https://github.com/milleradagency/millerAgency
- **Standards:** HTML5, CSS3, JavaScript, Wordpress CMS

### Libraries &amp; third-party plugins
|Package|Description|
|:---|:---|
|Elementor Page Builder|Elementor offers developers the freedom to customize and extend it and can become a useful plugin for developers that don't want to be chained to a theme.|
|Google Analytics|Google Analytics lets you measure your advertising ROI as well as track your Flash, video, and social networking sites and applications.|
|Google Fonts|Google Fonts ... is an interactive directory of free hosted application programming interfaces for web fonts.
|jQuery|Cross-platform JavaScript library designed to simplify the client-side scripting of HTML.|
|Modernizr|Modernizr tells you what HTML, CSS and JavaScript features the user’s browser has to offer.|
|SCSS|Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.|
|UIkit|A lightweight and modular front-end framework for developing fast and powerful web interfaces.|
|Wordpress|Trusted by the Best. 28% of the web uses WordPress, from hobby blogs to the biggest news sites online. Discover more sites built with WordPress.|
|CodePen|Detect Internet Explorer (IE) up to version 11 and Edge (12+)|
|CodePen|Material Design Box Shadows|
|CodePen|Sticky Slider Navigation|
|CodePen|Tinted Hero|

## Development

### Research

I had *"built"* Wordpress sites in the past, but this time I **really needed to build it**. I dug in and learned all that I could about PHP and Wordpress-specific syntax in order to develop a site that was optimized, dynamic, and performant. We're talkin' conditional style and script enqueuing, dynamically-updated author profiles, custom post taxonomies – *all that jazz.* We'll dig into the code here in a bit.

I also needed the site to be easily updatedable and maintanable by those who don't know how to code. Therefore, I researched the top hotness page-builder plugins and decided [Elementor](https://elementor.com/) would be my best bet. I also chose the HTML5 [Boilerplate](http://github.com/zencoder/html5-boilerplate-for-wordpress) as my starting point.

> Elementor offers developers the freedom to customize and extend it and can become a useful plugin for developers that don't want to be chained to a theme.

![Elementor](/projects/miller.agency/elementor-trio.jpg)

After trying various frameworks, like [Materialize](http://materializecss.com/) and Bootstrap v4, I decided UIkit was my go-to for this project. I freakin' love [UIkit](https://getuikit.com/) – it offers lots of creative freedom and a solid foundation to build off of.

![UIkit](/images/vendors/uikit.jpg)

> A lightweight and modular front-end framework for developing fast and powerful web interfaces. —[[UIkit](https://getuikit.com/)]

### Styleguide

#### Colors

##### Primary
- #0e75dd
- #328ae2
- #62a5e9
- #0c63bc
- #094c90

Note that these palettes were made using the SCSS color mixing function; for example:

```scss
$color-primary:               #0e75dd; // original: 0053a
$color-primary-light:         mix(white, $color-primary, 15%);
$color-primary-lightest:      mix(white, $color-primary, 35%);
$color-primary-dark:          mix(black, $color-primary, 15%);
$color-primary-darkest:       mix(black, $color-primary, 35%);
```

##### Accent
- #f49200
- #f6a226
- #f8b859
- #cf7c00
- #9f5f00

##### Grayscale
- #222
- #666
- #959595
- #e5e5e5
- #fdfdfd

### Construction

I said we'd look at some code later; well, later is now.

#### style.css
_Wordpress' required style.css file._

```css
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
```

I'm excited by all that I've learned from this project — Wordpress is surprisingly interesting once you dig into the nuts and bolts. For example, the `funtions.php` and the ability to dynamically enqueue scripts or stylesheets through if/else conditionals.

#### funtions.php

```php
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
```

The HTML5 Boilerplate was quite bare (as expected) so I needed to punch in some of the dynamic Wordpressy things I wanted to achieve, like:

#### Featured image support

```php
// ------------------------------
// Featured Image
function mytheme_post_thumbnails() {
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'mytheme_post_thumbnails' );
```

#### Navigation menu functionality

```php
// ------------------------------
// Nav Menus
function nav_menu() {
	register_nav_menu( 'main', 'Main Menu' );
	register_nav_menu( 'mobile', 'Mobile Menu' );
}
add_action( 'after_setup_theme', 'nav_menu' );
```

#### Custom post taxonomy and type

```php
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
```

### Components

This next section showcases the overal aesthetic and most of the key site components. Lot's of screenshots and examples incoming.

#### Metro card

Using Elementor's *flip box* snippet, I designed a metro-esque component we could reuse throughout the site on top-level pages.

Here is an example of said element:

{{< project-good-maa-metroCard >}}

##### Homepage
![Homepage](/projects/miller.agency/site-homepage.jpg)

##### About page
![About page](/projects/miller.agency/site-aboutpage.jpg)

##### Team page
![Team page](/projects/miller.agency/site-teampage.jpg)

#### Header, nav, footer, &amp; mobile menu

![miller.agency topnav](/projects/miller.agency/site-topNav.jpg)

![miller.agency footer](/projects/miller.agency/site-footer.jpg)

![Mobile bar &amp; nav menu](/projects/miller.agency/maaMobile.gif)

#### Team members &amp; profile pages

![Dynamically-updated author profiles](/projects/miller.agency/site-teamSingle.jpg)

##### author.php
{{< gist williampansky 12b69c2c48fa808026dbeb25bbd2316d "author.php" >}}

#### Single-item landing pages
![Pandora landing page](/projects/miller.agency/site-pandora.jpg)

## Demo

To view the miller.agency demo, [click here](/projects/miller.agency/demo).
