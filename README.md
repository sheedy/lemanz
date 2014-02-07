# Lemanz

A starting point for all my personal/work-related Sass projects. Feel free to pull from anything you like in this repo or not. Additionally includes special JavaScript starting points/libraries like the jQuery plugin SVGMagic, HammerJS, RespondJS and MatchMedia Polyfill.

#### **Browser Support**
I aim to support the following browsers and their associated versions throughout all my projects.

![ie](https://raw2.github.com/alrra/browser-logos/master/internet-explorer-tile/internet-explorer-tile_32x32.png) 8+ ![opera](https://raw2.github.com/alrra/browser-logos/master/opera/opera_32x32.png) 17+ ![safari](https://raw2.github.com/alrra/browser-logos/master/safari/safari_32x32.png) 6+ ![chrome](https://raw2.github.com/alrra/browser-logos/master/chrome/chrome_32x32.png) 32+ ![https://raw2.github.com/alrra/browser-logos/master/firefox/firefox_32x32.png](https://raw2.github.com/alrra/browser-logos/master/firefox/firefox_32x32.png) 26+ ![ios](https://raw2.github.com/alrra/browser-logos/master/safari-ios/safari-ios_32x32.png) 6+


### **Project Stack**

- Node v0.10.24 <img src="https://www.codersgrid.com/wp-content/uploads/2013/05/nodejs-image-processing.png" width="40" height="auto" alt="">
- NPM v1.3.21 <img src="https://npmjs.org/static/npm.png" width="30" height="auto" alt="node package manager">
- Grunt-CLI v0.1.9 <img src="http://gruntjs.com/img/grunt-logo.png" width="15" height="auto" alt="">
- Grunt v0.4.2 <img src="http://gruntjs.com/img/grunt-logo.png" width="15" height="auto" alt="">
- Bower 1.2.8 <img src="https://github-camo.global.ssl.fastly.net/8a2024183152023c85dc7124365c1afb721450a4/687474703a2f2f626f7765722e696f2f696d672f626f7765722d6c6f676f2e706e67" width="15" height="auto" alt="">
- Ruby 2.0.0p247 <img src="https://www.ruby-lang.org/images/header-ruby-logo.png" width="15" height="auto" alt="">
- Sass 3.2.12 (Media Mark) <img src="http://sass-lang.com/assets/img/logo-235e394c.png" width="20" height="auto" alt="syntactically awesome stylesheets">
- Compass 0.12.2 (Alnilam) <img src="http://www.phase2technology.com/wp-content/uploads/2014/01/compass-logo-cropped-300x64.png" width="70" height="auto" alt="">
- jQuery 1.10.2 <img src="http://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/220px-JQuery_logo.svg.png" width="40" height="auto" alt="javascript query">
- Modernizr 2.6.2 <img src="http://modernizr.com/i/img/logo-x12.png" width="20" height="auto" alt="">

### Installation

**Project Dependencies**

##### Bundler

Depending on your tastes you have a few options to manage gemset dependencies. The cool kids like [RVM](https://rvm.io) and the others
like [rbenv](https://github.com/sstephenson/rbenv). It's a pick your poison kind of deal. The reality is that [RVM](https://rvm.io) 
is much easier and cleaner to manage/isolate gemsets. Totally up to you though.

Gem dependencies are installed using [Bundler](http://bundler.io). Bundler maintains a consistent environment for ruby applications. It tracks an application's code and 
the rubygems it needs to run, so that an application will always have the exact gems (and versions) that it needs.

If you don't have Bundler installed you can install it like so:

```bash
$ gem install bundler
```

Once Bundler is installed run the following command:

```bash
$ bundle install
```

- Compass Gem
- Sass Gem
- Sass Globbing Gem

You can always check if the correct Gems are installed by running the bash command ``gem list`` which will list all your gem dependencies installed.

##### Bower

#### <img src="https://github-camo.global.ssl.fastly.net/8a2024183152023c85dc7124365c1afb721450a4/687474703a2f2f626f7765722e696f2f696d672f626f7765722d6c6f676f2e706e67" width="50" height="auto" alt="Bower">
[bower](http://bower.io) is a package manager for the front-end to help alleviate the pain of retrieving and updating our project dependencies manually (like jQuery or Normalize for example). To install bower dependencies that are controlled through the ``bower.json`` file you must execute the following command…

```bash
bower install
```
- normalize.scss
- typeplate.scss
- jquery.placeholder.js

##### Grunt

#### <img src="http://gruntjs.com/img/grunt-logo.png" width="50" height="auto" alt="Grunt">

**Install Grunt Package Dependencies**

```bash
npm install
```
- devUpdate
- watch
- compass
- sass
- imagemin
- qunit
- jshint
- concat
- uglify
- clean
- copy
- replace
- htmlmin
- useminPrepare
- usemin
- asset_cachebuster
- rev
- matchdep

### **Notes**

<img src="http://httpd.apache.org/images/httpd_logo_wide_new.png" width="300" height="auto" alt="apache">

- Apache config follows the HTML5 Boilerplate, but adds the ability to serve ``.svgz`` along with supporting cache busting using the method ``main.123456.css``. Also strips ``.php`` files from their file extension.