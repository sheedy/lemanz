// Implementation
// SVGMagic will now check every image on your page 
// and changes it to a PNG version if the browser 
// doesn't support SVG.
$('img').svgmagic();

// SVGMagic also supports backgroundimages. You need 
// to parse the div containing the backgroundimage 
// including the backgroundimage option.
$('.bgimage').svgmagic({
    backgroundimage: true
});

// You can parse an options object into SVGMagic. 
// Currently it supports the following options:
$('img').svgmagic({
    preloader: {url-to-preloader/false}, // Preloader before the image gets replaced, default: false
    testmode: {false/true}, // SVGMagic works in every browser if set to true, default: false
    secure: {false/true}, // Images are sent via https:// if set to true, default: false
    backgroundimage: {false/true}, // Check given div for backgroundimages, default: false
    callback: {false/function}, // Function to run after images are changed, default: false
    dumpcache: {false/true} // Force to remove the cache and create a new .PNg, default: false
});