// keep things outside the global scope plz
// http://toddmotto.com/avoiding-anonymous-javascript-functions
// http://toddmotto.com/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states
(function (window, document, undefined) {

	'use strict';

	// Data Attribute Toggle State
	// https://github.com/eligrey/classList.js
	/*
	 * <nav class="nav">
	 *  <a href="#" class="nav__toggle">Menu</a>
	 *  <ul data-state="closed">
	 *      <li>Item 1</li>
	 *      <li>Item 2</li>
	 *      <li>Item 3</li>
	 *      <li>Item 4</li>
	 *  </ul>
	 * </nav>
	 */
	var toggleTrigger = document.querySelector('.nav__toggle');

	function toggleState(elem, one, two) {
		var elem = document.querySelector(elem);
		elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
	}

	toggleTrigger.onclick = function (e) {
		toggleState('.nav ul', 'closed', 'open');
		e.preventDefault();
	};

	function toggleEvent(event) {
		this.classList.toggle('active');
		event.preventDefault();
	}

	document.querySelector('html').addEventListener('click', toggleEvent, false);

})(window, document);