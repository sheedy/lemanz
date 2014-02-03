// Also see http://youmightnotneedjquery.com for some helpful bits and bobs.

// JS Patterns
// ===========================================
// http://toddmotto.com/avoiding-anonymous-javascript-functions
// http://benalman.com/news/2010/11/immediately-invoked-function-expression
// http://toddmotto.com/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states

// IIFE
// keep things outside the global scope plz
(function (window, document, undefined) {
	'use strict';
})(window, document);


// Function Declaration
function foo(){ /* code */ }


// Object Function Method
// http://base.webknit.co.uk
var Base = Base || {};

Base.functionName = function() {
	var self = $(this),
		variable = $('element');

	function init() {
		variable.click(functionOne);
		functionTwo();
	}

	function functionOne() { /*code*/ }

	function functionTwo() {
		window.hide();
	}

	init();
};

// On Doc Ready
$(function() {
	new Base.functionName();
});


// SVG Magic
// ===========================================

// SVGMagic also supports backgroundimages. You need 
// to parse the div containing the backgroundimage 
// including the backgroundimage option.
$('.svg-bg').svgmagic({
	backgroundimage: true
});

// Implementation
// SVGMagic will now check every image on your page 
// and changes it to a PNG version if the browser 
// doesn't support SVG.
//
$('img[src*=".svgz"]').svgmagic();

// You can parse an options object into SVGMagic. 
// Currently it supports the following options:
$('img[src*=".svgz"]').svgmagic({
	preloader: false, // url-to-preloader/false || Preloader before the image gets replaced, default: false
	testmode: true, // SVGMagic works in every browser if set to true, default: false
	secure: false, // Images are sent via https:// if set to true, default: false
	backgroundimage: true, // Check given div for backgroundimages, default: false
	callback: false, // Function to run after images are changed, default: false
	dumpcache: true // Force to remove the cache and create a new .PNg, default: false
});