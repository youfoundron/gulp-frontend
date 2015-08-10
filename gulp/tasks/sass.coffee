module.exports = (gulp, gutil, config) ->
	# Copy all static images
	gulp.task "sass", (cb) ->
		changed 	= require "gulp-changed"
		sass 		= require 'gulp-sass'
		sourcemaps 	= require 'gulp-sourcemaps'
		minifyCSS 	= require 'gulp-cssmin'
		rename 		= require 'gulp-rename'
		gulpif 		= require "gulp-if"
		handleErrors 	= require "#{global.__gulp}/util/handleErrors"

		paths		= config.get 'paths'
		sass_config = config.get 'sass'
		isProduction = config.get('production') ? false


		src = sass_config.src
		dest = sass_config.dest

		settings =
			indentedSyntax: true
			errLogToConsole: true
			outputStyle: 'nested'
			includePaths: sass_config.includes

		gulp.src( src )
		.pipe( changed(dest) )
		.pipe( sass(settings) )
		.pipe( gulpif(isProduction, minifyCSS()) )
		.pipe( gulpif(isProduction, rename({suffix: '.min'})) )
		.pipe( sourcemaps.write(dest) )
		.pipe( gulp.dest(dest) )
		.on( 'error', handleErrors )
