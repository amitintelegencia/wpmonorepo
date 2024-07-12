<?php
/**
 * Plugin Name:       Cpt Content Group
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cpt-content-group
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_related_posts_block_init() {
	register_block_type( __DIR__ . '/build' );

}
add_action( 'init', 'create_block_related_posts_block_init' );


function enable_related_posts_custom_enqueue_assets() {
   
    // Check if not in admin area and enqueue script

        wp_enqueue_script('handlebars', get_template_directory_uri() . '/gus-components/related-posts/handlebars.js', array('jquery'), '1.1.0', true);
   
}

add_action( 'enqueue_block_assets', 'enable_related_posts_custom_enqueue_assets' );
