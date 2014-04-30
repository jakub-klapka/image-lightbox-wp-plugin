=== Plugin Name ===
Contributors: lapak
Tags: image gallery lightbox fancybox developers
Requires at least: 3.5
Tested up to: 3.9
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

This plugin offers another way, how to insert images, which opens in lightbox. It's focused primarily on theme developers and speed.

== Description ==

This plugin offers another way, how to insert images into your posts, which opens in lightbox.
It's focused primarily on theme developers (thus tons of configuration via filters) and speed.

What does it do?
---

![Lightbox checkbox preview](https://raw.githubusercontent.com/jakub-klapka/image-lightbox-wp-plugin/master/src/lumi-image-fancybox_screen1.png)

 - New `Lightbox` checkbox in Add Media dialog to insert image opened in lightbox.
 - Supports also WP-generated galleries (`[gallery]`)
 - Based on great [Fancybox](http://fancyapps.com/fancybox/) library by Jānis Skarnelis, which is licensed under (CC BY-NC 3.0)[http://creativecommons.org/licenses/by-nc/3.0/]
 - Frontend files are loaded only, when they are necessary (no more thousand-script headers on frontend)
 - Also various PHP files are loaded only when they are needed (to save server memory)
 - Plugin is very simple but still highly configurable via filters (no settings in DB - perfect for theme devs)


Notes
---

 - Plugin won't affect existing single images in pages and posts, but It will affect all galleries if you leave plugins gallery feature enabled!
 - If your theme or another plugin completely rewrite `[gallery]` output via `post_gallery` filter, this plugin won't work for galleries. Using `use_default_gallery_style` and `gallery_style` filters to change styles should be safe though.
 - All source codes including Grunt tasks are on [Github](https://github.com/jakub-klapka/image-lightbox-wp-plugin)

== Installation ==

1. Unzip archive contents into your wp-content/plugins
1. Activate plugin

 - Or use WP plugin manager to install it


== Screenshots ==

Will be added soon.

== Changelog ==

= 1.0 =
* Initial version


== Developers ==

Plugin developement continues on [Github](https://github.com/jakub-klapka/image-lightbox-wp-plugin), feel free to contribute there.

Plugin is ment to be configured primarily via filters:

###lumi-image-fancybox/enable_gallery

*Default: true*

Enabling lightbox effect on `[gallery]` shortcode. This setting is site-wide and can't be changed for specific galleries.

---

###lumi-image-fancybox/upload_checkbox_default

*Default: true*

Controls, if the "lightbox" checkbox in Add Media will be checked by default.

----

###lumi-image-fancybox/full_image_size

*Default: full*

This WP-image-size will be used as lightbox target for images. By default, it will target full sized images - so I recommend using [Imsanity](http://wordpress.org/plugins/imsanity/). Or just change filter to __large__.

---

###lumi-image-fancybox/upload_dialog_lightbox_title

*Default: __('Lightbox')*

Text as title in front of checkbox in Add Media dialog. I recommend wrapping text in i18n function, to keep it translatable. For example:

    add_filter( 'lumi-image-fancybox/upload_dialog_lightbox_title', function() {
        return __( 'My customized title', 'My textdomain' );
    } );

---

###lumi-image-fancybox/upload_dialog_help_message

*Default: __( 'If checked, click on image will open it in overlay window. Don't forget to set size and alignment below.' )*

Same as above for helper text below checkbox.

---

###lumi-image-fancybox/jquery_library

*Default: jquery*

Lightbox effect is depending on jQuery library. But if you have jquery included in some other script (maybe you Grunting frontend scripts?), you can pass your script handle into this filter and plugin will assume, that jquery is loaded with specified script and won't initiate loading of separate jquery library.

---

###lumi-image-fancybox/fancybox_js_config

*Default: false*

If you want to modify Lightbox behavior on frontend, you can pass array of parameter to this filter. You can find all available parameters on [Fancybox site](http://fancyapps.com/fancybox/#docs). For example:

    add_filter( 'lumi-image-fancybox/fancybox_js_config', function() {
        return array(
            'padding'   => array( 20, 10, 20, 20 ),
            'fitToView' => false
        );
    } );

