<?php
/**
 * APPSX child theme — enfileira o style do pai (Twenty Twenty-Four)
 * + Google Fonts (Syne, DM Sans, JetBrains Mono) + style.css próprio.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'twentytwentyfour-style',
        get_template_directory_uri() . '/style.css',
        [],
        wp_get_theme( 'twentytwentyfour' )->get( 'Version' )
    );

    wp_enqueue_style(
        'appsx-google-fonts',
        'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&family=Syne:wght@400;500;700;800&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'appsx-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        [ 'twentytwentyfour-style', 'appsx-google-fonts' ],
        wp_get_theme()->get( 'Version' )
    );
} );

add_action( 'wp_head', function () {
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
}, 1 );
