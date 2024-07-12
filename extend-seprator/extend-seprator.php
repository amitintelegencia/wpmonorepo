<?php
/**
 * Plugin Name:       Extend Seprator
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       extend-seprator
 *
 * @package Blockist
 */
namespace example_query_loop_button;

use WP_HTML_Tag_Processor;

/**
 * Enqueue specific modifications for the block editor.
 *
 * @return void
 */


function separator_editor_modifications() {
	$asset_file = include get_template_directory() . '/gus-components/extend-seprator/build/index.asset.php';
	wp_enqueue_script( 'separator_opacity_change', get_template_directory_uri() . '/gus-components/extend-seprator/build/index.js', $asset_file['dependencies'], $asset_file['version'], true );
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\separator_editor_modifications' );





/**
 * Filter button blocks for possible link attributes
 *
 * @param string $block_content The block content about to be rendered.
 * @param array  $block        The full block, including name and attributes.
 * @return string
 */




function filter_button_block_render_block( $block_content, $block ) {

	$opacity = $block['attrs']['opacity'] ? $block['attrs']['opacity'] : 1;
	$margin = $block['attrs']['margin'] ? $block['attrs']['margin'] : "auto";
	$width = $block['attrs']['width'] ? $block['attrs']['width'] : "100";
	$height = $block['attrs']['height'] ? $block['attrs']['height'] : "0";
	$styles = 'opacity: '.$opacity.' ; margin:'.$margin.' !important; 	width:'.$width.'%; height:'.$height.'rem';

	$extraStyle = ';width:100% !important; opacity:1;';

	// Pattern to match the opening <hr> tag and its style attribute
	$pattern = '/(<hr[^>]*style="([^"]*)"[^>]*>)/';
	$isStylePattern = '/<hr[^>]*\sstyle\s*=\s*["\']([^"\']*)["\']/i';


	// Perform the replacement

	if (preg_match($isStylePattern, $block_content, $matches)) {
		$newHtml = preg_replace_callback($pattern, function($matches) use ($extraStyle) {
			$existingStyle = $matches[2]; // Contents of the existing style attribute
			$styleToAdd = trim($existingStyle . ' ' . $extraStyle); // Combine existing and extra styles
			return str_replace($existingStyle, $styleToAdd, $matches[1]); // Replace existing style with combined styles
		}, $block_content);
	
	} else {
		$newHtml = preg_replace('/<hr([^>]*)>/', '<hr$1 style="' . $extraStyle . '">', $block_content);
	}


	

	return '<div style="'.$styles.'">' . $newHtml. '</div>';
}
add_filter( 'render_block_core/separator', __NAMESPACE__ . '\filter_button_block_render_block', 10, 2 );	