module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		concat: {
			options: {
				separator: ';'
			},
			lumi_fancybox: {
				src: 'src/js/*.js',
				dest: 'js/lumi-fancybox.js'
			}
		},
		closureCompiler: {
			options: {
				compilerFile: 'c:\\Program Files (x86)\\Google Closure compiler\\compiler.jar'
			},
			lumi_fancybox: {
				src: 'js/lumi-fancybox.js',
				dest: 'js/lumi-fancybox.js'
			}
		},
		cssmin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: '*.css',
					dest: 'css'
				}]
			}
		},
		imagemin: {
			dist: {
				files: [{
					expand:true,
					cwd: 'src/images',
					src: '**/*.{jpg,jpeg,png,gif}',
					dest: 'images'
				}]
			}
		},
		compress: {
			build_plugin: {
				options: {
					archive: 'lumi-image-fancybox.zip'
				},
				files: [{
					expand: true,
					cwd: '../',
					dot: true,
					src: [
						'lumi-image-fancybox/**',
						'!lumi-image-fancybox/.git/**',
						'!lumi-image-fancybox/node_modules/**',
						'!lumi-image-fancybox/.gitignore',
						'!lumi-image-fancybox/Gruntfile.js',
						'!lumi-image-fancybox/package.json',
						'!lumi-image-fancybox/README.md',
						'!lumi-image-fancybox/lumi-image-fancybox.zip',
					]

				}]
			}
		}

	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-closure-tools');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-compress');

	//helpers
	grunt.registerTask('lumi_fancybox', ['concat:lumi_fancybox','closureCompiler:lumi_fancybox']);

	// Default task(s).
	grunt.registerTask('default', ['lumi_fancybox', 'cssmin', 'imagemin']);
	grunt.registerTask('build_plugin', ['compress:build_plugin']);

};