// ======================================================================================
// Disable Hover
// thecssninja.com/javascript/pointer-events-60fps
// ======================================================================================

var body = document.body,
	timer;

window.addEventListener('scroll', function() {
	clearTimeout(timer);

	if(!body.classList.contains('disable-hover')) {
		body.classList.add('disable-hover');
	}

	timer = setTimeout(function() {
		body.classList.remove('disable-hover');
	},500);
}, false);


// ======================================================================================
// Lemanz Simple Link
// http://codepen.io/grayghostvisuals/pen/b4ae7ce2aa8433862651107120bce644
// ======================================================================================

// @example
// <a href="#section1" class="lemanz-sl">Home</a>
// $('.lemanz-sl').on('click', lemanzSimpleLink);
// $('.lemanz-sl').on('touchstart', lemanzSimpleLink);

function lemanzSimpleLink(event) {

	$("html, body").animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 600);

	event.preventDefault();
}


// ======================================================================================
// SVG Magic
// ======================================================================================

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


// ======================================================================================
// Placeholder Polyfill
// github.com/mathiasbynens/jquery-placeholder
// ======================================================================================

$('input, textarea').placeholder();


// ======================================================================================
// Matchmedia Polyfill
// github.com/paulirish/matchMedia.js
// ======================================================================================

// Width Detection
if (matchMedia('only screen and (max-width: 480px)').matches) {}

// Orientation Detection
if (matchMedia('all and (orientation:landscape)').matches) {}