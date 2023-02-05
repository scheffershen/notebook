Wordpress urls
==============

## wp-admin urls

- Dashboard
    + Home: https://wordpress.local/wp-admin/index.php
    + Updates: https://wordpress.local/wp-admin/update-core.php
- Posts
    + Posts: https://wordpress.local/wp-admin/edit.php
        * Edit: https://wordpress.local/wp-admin/post.php?post=1&action=edit
        * New: https://wordpress.local/wp-admin/post-new.php
    + Category: https://wordpress.local/wp-admin/edit-tags.php?taxonomy=category
        * New: https://wordpress.local/wp-admin/edit-tags.php?taxonomy=category
        * Edit Category: https://wordpress.local/wp-admin/term.php?taxonomy=category&tag_ID=1&post_type=post&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dcategory
    + Tags: https://wordpress.local/wp-admin/edit-tags.php?taxonomy=category
        * Edit: https://wordpress.local/wp-admin/term.php?taxonomy=post_tag&tag_ID=3&post_type=post&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dpost_tag
- Media:
    + Library: https://wordpress.local/wp-admin/upload.php
    + new: https://wordpress.local/wp-admin/media-new.php
- Page:
    + https://wordpress.local/wp-admin/edit.php?post_type=page
    + new: https://wordpress.local/wp-admin/post-new.php?post_type=page
    + edit: https://wordpress.local/wp-admin/post.php?post=3&action=edit
- Comments
    + All: https://wordpress.local/wp-admin/edit-comments.php   
    + Edit: https://wordpress.local/wp-admin/comment.php?action=editcomment&c=1
- Appearance:
    + Themes: https://wordpress.local/wp-admin/themes.php
    + Editor: https://wordpress.local/wp-admin/site-editor.php?postType=wp_template&postId=twentytwentytwo%2F%2Fhome
- Plugins
    + https://wordpress.local/wp-admin/plugins.php
    + install: https://wordpress.local/wp-admin/plugin-install.php
- Users:
    + https://wordpress.local/wp-admin/users.php
    + New: https://wordpress.local/wp-admin/user-new.php
    + Edit=Profile: https://wordpress.local/wp-admin/profile.php?wp_http_referer=%2Fwp-admin%2Fusers.php
- Tools: 
    + https://wordpress.local/wp-admin/tools.php
    + Import: https://wordpress.local/wp-admin/import.php
        * Wordpress: Import posts, pages, comments, custom fields, categories, and tags from a WordPress export file.
    + Export: https://wordpress.local/wp-admin/export.php
    + Site Health: https://wordpress.local/wp-admin/site-health.php
    + Export Personal Data: https://wordpress.local/wp-admin/export-personal-data.php
    + Erase Personal Data: https://wordpress.local/wp-admin/erase-personal-data.php
    + Theme File Editor: https://wordpress.local/wp-admin/theme-editor.php
        * style.css
        * theme functions: functions.php
        * /parts
        * /templates
        * /styles
        * theme.json
        * /assets
        * /inc
        * index.php
        * readme.txt
    + Plugin Files: https://wordpress.local/wp-admin/plugin-editor.php
        * *.php
        * /views
        * wrapper.php
        * /inc
    + Settings
        * General: https://wordpress.local/wp-admin/options-general.php
        * Writing: https://wordpress.local/wp-admin/options-writing.php
        * Reading: https://wordpress.local/wp-admin/options-reading.php
        * Discussion: https://wordpress.local/wp-admin/options-discussion.php
        * Media: https://wordpress.local/wp-admin/options-media.php
        * Permalinks: https://wordpress.local/wp-admin/options-permalink.php
        * Privacy: https://wordpress.local/wp-admin/options-privacy.php

## variables

- post (int)
- post_type
    + page
    + post
- taxonomy
    + category
    + post_tag
- tag_ID (int)
- wp_http_referer
- action
    + edit
- postId
    + twentytwentytwo
- postType
    + wp_template
    

## répertoires (SSN v4 2022)

- wp-admin
- wp-includes
- wp-content
    + plugins
        * 404 to 301 - Redirect, Log and Notify 404 Errors (Automatically redirect all 404 errors to any page using 301 redirect for SEO. You can redirect and log every 404 errors. No more 404 errors in Webmaster tool.)
        * Advanced Custom Fields (Customize WordPress with powerful, professional and intuitive fields.)
        * Advanced Excerpt (Control the appearance of WordPress post excerpts)
        * AMP (An easier path to great Page Experience for everyone. Powered by AMP. Uninstall Note: To control whether all data from this plugin is deleted at uninstallation, first activate the plugin, go to the Other section on the Settings screen, and set the “Delete plugin data at uninstall” toggle.)
        * Archived Post Status (Allows posts and pages to be archived so you can unpublish content without having to trash it.)
        * BDD médicament (Plugin de recherche BDD de donnée du médicament Claude Bernard)
        * Classic Editor (Enables the WordPress classic editor and the old-style Edit Post screen with TinyMCE, Meta Boxes, etc. Supports the older plugins that extend this screen.)
        * Contact Form 7 (Just another contact form plugin. Simple but flexible.)
        * EWWW Image Optimizer (Smaller Images, Faster Sites, Happier Visitors. Comprehensive image optimization that doesn't require a degree in rocket science.)
        * Health Check & Troubleshooting (Checks the health of your WordPress install.)
        * Imagify (Dramatically reduce image file sizes without losing quality, make your website load faster, boost your SEO and save money on your bandwidth using Imagify, the new most advanced image optimization tool.)
        * Jetpack (Security, performance, and marketing tools made by WordPress experts. Jetpack keeps your site protected so you can focus on more important things.)
        * Name Directory (A Name Directory, i.e. for animal names or to create a glossary. Visitors can add, search or just browse all names.)
        * Super RSS Reader (Display any RSS feed(s) in widget with news ticker effect in multiple tabs, thumbnails, customizable color themes and more.)
        * W3 Total Cache (The highest rated and most complete WordPress performance plugin. Dramatically improve the speed and user experience of your site. Add browser, page, object and database caching as well as minify and content delivery network (CDN) to WordPress.)
        * WP Crontrol (WP Crontrol enables you to view and control what's happening in the WP-Cron system.)
        * WP Import Export Lite (The Advanced and powerful solution for importing and exporting data to WordPress. Import and Export to Posts, Pages, and Custom Post Types. Ability to update existing data, and much more.)
        * WP RSS Aggregator (Imports and aggregates multiple RSS Feeds.)
        * WP RSS Aggregator - Templates (Adds premium templates to WP RSS Aggregator.)
        * Yoast SEO (The first true all-in-one SEO solution for WordPress, including on-page content analysis, XML sitemaps and much more.)
    + themes
    + uploads
    + cache
    + ewww (empty)
    + languages (seo, rss, import, cache, google, contact-for, amp, akismet 404)
    + mu-plugins (Plugin Name: Health Check Troubleshooting Mode)
        * les Must-Use Plugins, un plugin à utiliser avant tous les autres
    + upgrades (empty)
    + uploads-webpc
    + w3tc-config
    + advaced-cache.php (W3 Total Cache advanced cache module)
    + .gitignore
        cache
        languages
        upgrade
        uploads*
        plugins/*
        debug.log

## data tables (SSN v4 2022)

Mysql – 1067 – Valeur par défaut invalide pour ‘post_date’
Celle-ci est liée à la version de MySQL et aux modes activés,
plus particulièrement les modes:

    NO_ZERO_IN_DATE
    NO_ZERO_DATE

SET SESSION sql_mode = '';

## debug

```
// Active le mode WP_DEBUG
define( 'WP_DEBUG', true );
 
// Active l’enregistrement dans le fichier /wp-content/debug.log
define( 'WP_DEBUG_LOG', true );
 
// Désactive l’affichage des erreurs et des avertissements
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );
 
// Utiliser les versions en développement des fichiers JS et CSS de base (seulement nécessaire si vous modifiez ces fichiers de base)
define( 'SCRIPT_DEBUG', true );
```