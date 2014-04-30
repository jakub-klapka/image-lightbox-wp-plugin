<?php


namespace Lumi_IFB\Glob;


class I18n {

	public function __construct() {
		add_action( 'plugins_loaded', array( $this, 'load_textdomain' ) );
	}

	public function load_textdomain() {
		load_plugin_textdomain( LUMI_IFB_TEXTDOMAIN, false, basename( dirname( LUMI_IFB_CORE_PATH ) ) . '/lang/' );
	}

} 