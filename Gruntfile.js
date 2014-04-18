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

	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-closure-tools');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	//helpers
	grunt.registerTask('lumi_fancybox', ['concat:lumi_fancybox','closureCompiler:lumi_fancybox']);

	// Default task(s).
	grunt.registerTask('default', ['lumi_fancybox', 'cssmin', 'imagemin']);

};