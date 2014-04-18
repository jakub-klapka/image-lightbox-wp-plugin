<?php
/**
 * Plugin Name: Lumiart's Image to Lightbox (Fancybox) solution
 * Description: Developers-friendly solution for user-friendly image to lightbox functionality in editor. Support both inserting images and galleries as well.
 * Version: 0.9
 * Author: Jakub Klapka
 * Author URI: http://www.lumiart.cz
 * License: GPL2
 */
/*  Copyright 2014  Jakub Klapka  (email : klapka@lumiart.cz)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

define( 'LUMI_IFB_CORE_PATH', plugin_dir_path(__FILE__) . 'core/' );
define( 'LUMI_IFB_CSS_JS_VER', 1 );
define( 'LUMI_IFB_TEXTDOMAIN', 'lumi-image-fancybox' );


/**
 * Var containing references to all theme objects
 * @var array $lumi_ifb array with all classes used in template, by namespace
 *      $lumi['Glob'|'Admin'|'Frontend'][class_name]
 */
$lumi_ifb = array();
global $lumi_ifb;


/**
 * Global config
 */
$lumi_ifb['Config'] = array(
);


/**
 * Classes autoloading
 * Will load files in core directory absed on their suffix
 *      .glob.php will be loaded everytime
 *      .admin.php will be loaded in admin (is_admin())
 *      .frontend.php will be loaded when not in admin (even logged in)
 */
$core['Glob'] = glob( LUMI_IFB_CORE_PATH . '*.glob.php' );
if( is_admin() ) {
	$core['Admin'] = glob( LUMI_IFB_CORE_PATH . '*.admin.php' );
} else {
	$core['Frontend'] = glob( LUMI_IFB_CORE_PATH . '*.frontend.php' );
}
foreach( $core as $scope => $files ) {
	if( $files !== false ) {
		foreach( $files as $file ) {
			include_once $file;
			$class_name = basename( $file, '.' . strtolower($scope) . '.php' );
			$class_path = '\\Lumi_IFB\\' . $scope . '\\' . $class_name;
			$lumi_ifb[$scope][$class_name] = new $class_path;
		}
	}
}

/**
 * OnDemand classes loading
 * Those files contain functions used in templates - which are loaded on demand to save mem
 * Will return reference to class, which can contain your functions. It will load the class, if it's not loaded yet.
 * @var string $name
 * @return \Lumi_IFB\OnDemand\GalleryShortcodeModification
 */
function lumi_ifb_ondemand($name) {
	if( empty( $name ) ) {
		return false;
	}

	if( isset( $lumi_ifb['OnDemand'][$name] ) ) {
		return $lumi_ifb['OnDemand'][$name]; //If template functions are already loaded
	}

	include_once LUMI_IFB_CORE_PATH . $name . '.ondemand.php';
	$class_name = '\\Lumi_IFB\\OnDemand\\' . $name;
	$lumi_ifb['OnDemand'][$name] = new $class_name;
	return $lumi_ifb['OnDemand'][$name];
}


