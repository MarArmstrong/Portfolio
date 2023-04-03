(function() {

	var bodyEl = document.body;
	var	content = document.querySelector( '.content-wrap' );
	var	openbtn = document.getElementById( 'open-button' );
	var	isOpen = false;


	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( openbtn = false ) {
			openbtn.addEventListener( 'click', toggleMenu );
		}
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}


	
	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}
	function init() {
		initEvents();
	}
	init();

})();