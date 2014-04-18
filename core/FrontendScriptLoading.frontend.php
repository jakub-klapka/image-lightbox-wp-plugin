<?php


namespace Lumi_IFB\Frontend;


class FrontendScriptLoading {

	private $script_loaded = false;

	public function __construct()
	{
		add_action( 'wp', array( $this, 'check_for_fancybox' ) );
		if( apply_filters( 'lumi-image-fancybox/enable_gallery', true ) ) {
			add_action( 'wp', array( $this, 'check_for_gallery' ) );
		}
	}

	private function load_frontend_script()
	{
		if( $this->script_loaded === false ) {
			$jquery_handle = apply_filters( 'lumi-image-fancybox/jquery_library', 'jquery' );
			wp_enqueue_script( 'lumi-fancybox', plugins_url( 'js/lumi-fancybox.js', dirname( __FILE__ ) ), array($jquery_handle), LUMI_IFB_CSS_JS_VER, true );

			wp_enqueue_style('lumi-fancybox', plugins_url( 'css/lumi-fancybox.css', dirname( __FILE__ ) ), array(), LUMI_IFB_CSS_JS_VER );

			$fancybox_additional_config = apply_filters( 'lumi-image-fancybox/fancybox_js_config', false );
			if( is_array( $fancybox_additional_config ) ) {
				wp_localize_script( 'lumi-fancybox', 'LumiFancyboxConfig', $fancybox_additional_config );
			}

			$this->script_loaded = true;
		}
	}

	public function check_for_fancybox($wp)
	{
		global $post;
		if( strpos( $post->post_content, 'lumi-fancybox' ) !== false ) {
			$this->load_frontend_script();
		}
	}

	public function check_for_gallery()
	{
		global $post;
		if( strpos( $post->post_content, '[gallery' ) !== false ) {
			$this->load_frontend_script();
			lumi_ifb_ondemand( 'GalleryShortcodeModification' );
		}
	}

} 