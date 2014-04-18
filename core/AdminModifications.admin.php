<?php


namespace Lumi_IFB\Admin;


class AdminModifications {

	private $default_value;
	private $full_image_size;

	public function __construct()
	{
		$this->default_value = apply_filters( 'lumi-image-fancybox/upload_checkbox_default', true );
		$this->full_image_size = apply_filters( 'lumi-image-fancybox/full_image_size', 'full' );


		add_filter( 'attachment_fields_to_edit', array( $this, 'add_fields_to_attachment' ), 10 ,2 );
		add_filter( 'image_send_to_editor', array( $this, 'catch_sending_to_editor' ), 10, 8);
		add_filter( 'attachment_fields_to_save', array( $this, 'save_field' ), 10, 2 );
	}


	public function add_fields_to_attachment($form_fields, $post)
	{
		//do this only in Media uploader -> via ajax
		if( !defined( 'DOING_AJAX' ) || !DOING_AJAX ) {
			return $form_fields;
		}

		$checked_in_db = get_post_meta($post->ID, 'lumi-fancybox', true);
		if( $checked_in_db === '' ) { //was not set before
			$checked = ( $this->default_value ) ? ' checked="checked"' : '';
		} else {
			$checked = ( $checked_in_db === '1' ) ? ' checked="checked"' : '';
		}

		/*
		__('Lightbox');
		*/

		$form_fields['lumi-fancybox'] = array(
			"label" => apply_filters( 'lumi-image-fancybox/upload_dialog_lightbox_title', __('Lightbox', LUMI_IFB_TEXTDOMAIN) ),
			"input" => "html", // this is default if "input" is omitted
			"html" => '<input type="checkbox"' . $checked . ' name="lumi-fancybox" />',
			'helps' => apply_filters( 'lumi-image-fancybox/upload_dialog_help_message', __( 'If checked, click on image will open it in overlay window.<br>Dont\'t forget to set size and aligment below.', LUMI_IFB_TEXTDOMAIN ) )
			//Při zaškrtnutí bude fotka zvětšena do vyskakovacího okna po kliknutí.<br>Nezapomeňte níže zvolit velikost a zarovnání
		);
		return $form_fields;
	}

	public function save_field($post, $attachment)
	{
		if( isset( $_REQUEST['lumi-fancybox'] ) ) {
			update_post_meta($post['ID'], 'lumi-fancybox', 1);
		} else {
			update_post_meta($post['ID'], 'lumi-fancybox', 0);
		}
		return $post;
	}

	public function catch_sending_to_editor($html, $id, $caption, $title, $align, $url, $size, $alt)
	{
		$use_fancybox_in_db = get_post_meta($id, 'lumi-fancybox', true);
		if( $use_fancybox_in_db === '1' || ( $use_fancybox_in_db === '' && $this->default_value === true ) ) {

			$attachment_meta = wp_get_attachment_image_src( $id, $this->full_image_size );

			if( !empty( $url ) ) {
				//change URL to full image
				$html = preg_replace( '/(?<=\<a\shref=[\"\'])(.+?)(?=[\"\'])/', $attachment_meta[0], $html );

				//add data
				$html = preg_replace( '/((?:.+)?\<a\shref=[\"\'].+?[\"\'])(.+)?/', '$1 data-lumi-fancybox="true"$2', $html );

				return $html;
			} else {
				//URL was not set, we have to create anchor and save some regexps
				$html = sprintf( '<a href="%s" data-lumi-fancybox="true">%s</a>',
					$attachment_meta[0], $html );

				return $html;
			}
		}
		return $html;
	}

} 