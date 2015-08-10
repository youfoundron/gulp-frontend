module.exports = (gulp, gutil, config) ->

	gulp.task "webpack", ->

		When			= require 'when'
		async			= require 'async'
		_ 				= require 'lodash'
		webpack 		= require "webpack"
		gulpif 			= require "gulp-if"
		gulpwebpack 	= require "gulp-webpack"
		concat 			= require "gulp-concat"
		plumber 		= require "gulp-plumber"
		changed 		= require "gulp-changed"
		rename 			= require "gulp-rename"
		uglify			= require "gulp-uglify"
		streamify 		= require "gulp-streamify"
		bundleLogger 	= require "#{global.__gulp}/util/bundleLogger"
		handleErrors 	= require "#{global.__gulp}/util/handleErrors"

		# configs
		paths				= config.get 'paths'
		js_config			= config.get 'js'
		webpack_config		= config.get 'webpack'


		isProduction = config.get('production') ? false

		When.promise (resolve, reject) ->
			#each bundle
			async.eachSeries js_config.bundles, ((bundle, next) ->

				#turn js bundle into a full config
				entry_config = webpack_config(bundle, isProduction)

				#entry file
				gulp.src entry_config.entry
				#only changed
				.pipe changed(entry_config.output.filename)
				#catch errors
				.pipe plumber()

				#if not, run a full webpack on it
				.pipe gulpwebpack(entry_config, webpack, (err, stats) ->
					#build stats
					if stats?
						gutil.log "[webpack]", stats.toString({colors: true})
				)

				.on 'error', handleErrors
				#optionally minify
				.pipe gulpif(isProduction, streamify(
					uglify(
						mangle:
							except: ['require', 'export', '$super']
					)
				))
				#write file
				.pipe gulp.dest("#{paths.dist.js}/")
				.on 'end', () -> next()


			), (err) ->
				console.log "DONE WEBPACKING"
				return reject(err) if err?
				return resolve()
