var OAO = OAO || {};
OAO.q = OAO.q || {};

OAO.q.c = OAO.q.c || [];
OAO.q.c.push(['setMarket', ionos.market]);

OAO.q.pageintegration = OAO.q.pageintegration || [];

function create_help_center_link( article_id, behavior, selector, domain ) {
	if ( jQuery( selector ).length >= 1 ) {
		const anchorEl = jQuery( '<a>' );
		anchorEl.attr( 'href', domain + '?id=' + article_id );
		anchorEl.attr( 'class', 'help-center-article-element oao-pi-open-in-' + behavior + ' exos-icon exos-icon-help-18' );

		const parentEl = jQuery( selector );
		if ( parentEl.length ) {
			parentEl.after( anchorEl );
		}
	}
}