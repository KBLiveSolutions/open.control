jQuery( document ).ready( function( $ ) {

	$( '.assistant-dashboard-panel a.install-plugin' ).click( function( event ) {
		event.preventDefault();
		var button = $( this );
		var action = '';

		if ( button.data( 'plugin' ) === 'german-market' ) {
			action = 'ajaxgmarket';
		}
		if ( button.data( 'plugin' ) === 'classic-editor' ) {
			action = 'ajaxceditor';
		}

		button.addClass( 'updating-message' );

		$.ajax( {
			type: 'POST',
			dataType: 'json',
			url: ajax_dashboard_object.ajaxurl,
			data: 'action=' + action,

			success: function( response ) {
				if ( response.success ) {
					button.removeClass( 'updating-message button-primary' ).addClass( 'button-disabled updated-message installed' );
					button.find( '.setup' ).addClass( 'hidden' );
					button.find( '.installed' ).removeClass( 'hidden' );
					window.location = response.data.referer;

				} else {
					button.removeClass( 'updating-message button-primary' ).addClass( 'button-disabled updated-message failed' );
					button.find( '.setup' ).addClass( 'hidden' );
					button.find( '.failed' ).removeClass( 'hidden' );
				}
			}
		} );
	} );

} );