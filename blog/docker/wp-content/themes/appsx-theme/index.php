<?php get_header(); ?>
<main id="main" class="site-main">
  <?php
  if ( have_posts() ) :
    while ( have_posts() ) : the_post();
      echo '<article class="post">';
      the_title('<h1>', '</h1>');
      the_content();
      echo '</article>';
    endwhile;
  else :
    echo '<p>Nenhum post encontrado.</p>';
  endif;
  ?>
</main>
<?php get_footer(); ?>
