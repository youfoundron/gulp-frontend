module.exports = (gulp, gutil, config) ->
	# Default Gulp task
	gulp.task 'default', [ 'build', 'watch', 'serve' ]
