<?php
/**
 * Plugin Name: Accordion
 * Plugin URI:
 * Description:
 * Version:     1.0.0
 * Author:      Fabian Kägy
 * Author URI:  https://fabian-kaegy.de
 * Text Domain: blockkit
 * Domain Path: /languages
 *
 * @package BlockKit
 */

namespace BlockKit\Accordion;

add_action( 'init', __NAMESPACE__ . '\register_block_assets' );

/**
 * Register Block Assets
 */
function register_block_assets() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	$index_js          = 'build/index.js';
	$script_asset      = require $script_asset_path;
	wp_register_script(
		'blockkit-accordion-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version'],
		false
	);
	wp_set_script_translations( 'blockkit-accordion-block-editor', 'blockkit' );

	$editor_css = 'editor.css';
	wp_register_style(
		'blockkit-accordion-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		[],
		$script_asset['version']
	);

	$style_css = 'style.css';
	wp_register_style(
		'blockkit-accordion-block',
		plugins_url( $style_css, __FILE__ ),
		[],
		$script_asset['version']
	);

	register_block_type(
		'blockkit/accordion',
		[
			'editor_script' => 'blockkit-accordion-block-editor',
			'editor_style'  => 'blockkit-accordion-block-editor',
			'style'         => 'blockkit-accordion-block',
		]
	);

}
