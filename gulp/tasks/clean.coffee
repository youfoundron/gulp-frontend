module.exports = (gulp, gutil, config) ->
	#general build - always
	gulp.task 'clean', () ->
		clean 			= require "gulp-clean"
		handleErrors 	= require "#{global.__gulp}/util/handleErrors"

		paths			= config.get 'paths'


		gulp.src paths.dist.root
		.pipe clean()
		.on 'error', handleErrors
