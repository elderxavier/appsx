<?php
// Appsx Theme: Enqueue Google Fonts e JetBrains Mono
add_action('wp_enqueue_scripts', function() {
  wp_enqueue_style('appsx-fonts', 'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap', false);
  wp_enqueue_style('appsx-style', get_stylesheet_uri());
});
