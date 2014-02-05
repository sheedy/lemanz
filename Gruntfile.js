// Grunt: The JavaScript Task Runner
module.exports = function(grunt) {

	// Grunt Loaded Tasks
	// http://chrisawren.com/posts/Advanced-Grunt-tooling
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Grunt Config
	grunt.initConfig({

		// == JSON Grunt Package
		pkg: grunt.file.readJSON('package.json'),

		// == Global Project Config
		project: {
			devDir: 'src',
			buildDir: 'dist',
			development: '<%= project.devDir %>',
			production: '<%= project.buildDir %>'
		},

		// == Grunt Meta Banner
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>' + ' <%= pkg.homepage %> ' +
			'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
			' Licensed <%= pkg.licenses %> */\n'
		},

		// == Grunt Dev Update
		// https://npmjs.org/package/grunt-dev-update
		// http://pgilad.github.io/grunt-dev-update
		devUpdate: {
			main: {
				options: {
					// Report updated dependencies? 'false' | 'true'
					reportUpdated: false,
					// 'force'|'report'|'prompt'
					updateType   : "force"
				}
			}
		},

		// == Watch Task
		// List watch tasks: 'grunt -v'
		watch: {
			html: {
				files: [
					'**/*.html',
					'**/*.php',
					'img/**/*.{png,jpg,jpeg,gif,webp,svg}'
				]
			},

			sass: {
				files: ['scss/**/*.scss'],
				tasks: ['compass:dist']
			},

			css: {
				files: ['css/**/*.css']
			},

			js: {
				files: ['js/**/*.js']
			},

			livereload: {
				files: [
					'**/*.html',
					'**/*.php',
					'css/**/*.css',
					'js/**/*.js',
					'img/**/*.{png,jpg,jpeg,gif,webp,svg}'
				],

				options: { livereload: true }
			}
		},

		// == Compass Config
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},

		// == Grunt Imagemin
		// http://integralist.co.uk/Grunt-Boilerplate.html
		imagemin: {
			png: {
				options: {
					optimizationLevel: 7
				},

				files: [
					{
						expand: true,
						cwd: 'img',
						src: ['**/*.png'],
						dest: 'img',
						ext: '.png'
					}
				]
			},

			jpg: {
				options: {
					progressive: true
				},

				files: [
					{
						expand: true,
						cwd: 'img',
						src: ['**/*.jpg'],
						dest: 'img',
						ext: '.jpg'
					}
				]
			}
		},

		// == qunit Tests
		qunit: {
			// grunt qunit will test all .html & .php file extensions
			all: ['**/*.html', '**/*.php']
		},

		// == JSHint
		jshint: {
			files: ['js/**/*.js'],

			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			},

			uses_defaults: ['js/**/*.js']
		},

		// == Concatenation
		concat: {
			options: {
				stripBanners: false,
				banner: '<%= meta.banner %>',
				separator: ';'
			},

			// Allows for multiple files
			basic_and_extras: {
				files: {
					// Destiniation 'string' : Source [array]
					'js/minified/main.min.js' : [
						'js/plugins.js',
						'js/script.js'
					]
				}
			}
		},

		// == Uglify/Minification
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},

			my_target: {
				files: {
					// Destiniation 'string' : Source [array]
					'js/minified/main.min.js' : ['js/minified/main.min.js']
				}
			}
		},

		// == Grunt Contrib Clean
		clean: ['dist'],

		// == Grunt Contrib Copy
		copy: {
			html: { // in preparation for usemin
				files: [
					{
						// Destiniation 'string' : Source [array]
						'<%= project.buildDir %>/index.html': ['index.html']
					}
				]
			}
		},

		// Replace object
		// http://robandlauren.com/2013/08/14/busting-cache-with-grunt
		replace: {
			build_replace: {
				options: {
					variables: {
						// Development Hash Value
						// 'hash': '0000000000', // Development
						
						// Generate a truly random number by concatenating the current date with a random number
						// The variable name corresponds with the same in our HTML file.
						'hash': '<%= ((new Date()).valueOf().toString()) + (Math.floor((Math.random()*1000000)+1).toString()) %>' // Production
					}
				},

				// Source and destination files
				files: [
					{
						// Destiniation 'string' : Source [array]
						'<%= project.buildDir %>/index.html': ['<%= project.buildDir %>/index.html']
					}
				]
			}
		},

		// == Grunt htmlmin
		// https://github.com/gruntjs/grunt-contrib-htmlmin
		htmlmin: {
			dist: {
				options: {
					removeComments: false,
					collapseWhitespace: false
				},

				files: {
					// Destiniation 'string' : Source [array]
					'<%= project.buildDir %>/index.html': ['<%= project.buildDir %>/index.html']
				}
			}
		},

		// == Grunt UseminPrepare
		useminPrepare: {
			files: {
				// Destiniation 'string' : Source [array]
				'<%= project.buildDir %>/index.html': ['<%= project.buildDir %>/index.html']
			}
		},

		// == Grunt Usemin
		// https://github.com/yeoman/grunt-usemin
		usemin: {
			html: ['<%= project.buildDir %>/index.html', '<%= project.buildDir %>/index.html'],
			options: {
				assetsDirs: ['js']
			}
		},

		// == Asset Cache Bust
		// https://github.com/gillesruppert/grunt-asset-cachebuster
		// gived your assets a version flag ?v=1385933480172
		asset_cachebuster: {
			options: {
				buster: Date.now(),
				ignore: [
					// Ignore cache busting CDN URIs
					'js/vendor/modernizr-2.6.2.min.js',
					'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
					'/js/vendor/jquery-1.10.2.min.js',
				]
			},

			build: {
				files: [
					{
						src: ['index.html'],
						dest: '<%= project.buildDir %>/index.html'
					}
				]
			}
		},

		// == Grunt Rev
		// https://github.com/cbas/grunt-rev
		rev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 8
			},

			assets: {
				files: [
					{
						src: [
							'css/main.css',
							'js/plugins.js',
							'js/script.js'
						]
					}
				]
			}
		}
	});


	// Development Tasks
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('hint', ['jshint']);
	grunt.registerTask('test', ['qunit']);

	// Build Tasks
	grunt.registerTask('imgmin', ['imagemin']);

	grunt.registerTask('build', [
		'copy',
		'concat',
		'uglify',
		'useminPrepare',
		'usemin',
		'replace'
	]);

	grunt.registerTask('cachebust', ['asset_cachebuster']);
	grunt.registerTask('filerev', ['rev']);

	// Maintenance
	grunt.registerTask('update', ['devUpdate']);
};