webpack 	= require "webpack"
_path 		= require 'path'
_ 			= require 'lodash'

#export a config
module.exports = (config) ->
	paths = config.get "paths"
	js_config = config.get "js"

	#some manipulation methods
	injectShimsAndAliases = (config, shims) ->
		_.each shims, (shim, alias) ->
			if _.isObject shim
				#
				if shim.path?
					injectAlias(config, alias, shim.path)
				if shim.export? or shim.exports?
					file = _path.basename shim.path
					injectShim(config, file, shim.export)
			else
				#must be a packageName: expose
				injectShim(config, alias, shim)


	injectAlias = (config, alias, path) ->
		config.resolve.alias[alias] = path
	injectShim = (config, file, exp) ->
		#test for file
		test = new RegExp file.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
		#loader to use
		loader =
			test: test
			loader: "exports?#{exp}"
		#add loader
		config.module.loaders.push loader


	#inject variables
	injectVars = (config, vars) ->
		config.plugins.push new webpack.DefinePlugin(vars)

	#inject a globally usable lib
	exposeGlobals = (config, libs) ->
		config.plugins.push new webpack.ProvidePlugin(libs)

	#inject externals
	injectExternals = (config, externals) ->
		config.externals.push externals

	#enable debugging tools
	enableDebugging = (config) ->
		config.devtool = "#inline-source-map"
		#config.debug = true

	#insert the script entry
	insertEntry = (config, entry) ->
		config.entry = entry

	#insert the output
	insertOutput = (config, filename, isProduction) ->
		config.output =
			filename: if isProduction then filename.replace(/(\.\w{2,4})$/i, ".min$1") else filename
			chunkFilename: "[id].bundle.js"
			path: "#{paths.dist.js}/"
			publicPath: "/javascripts/"

	(entry, isProduction=false) ->
		config =
			bail: true
			resolve:
				#ensure we always start from root
				root: [paths.root, "#{paths.bower}", "#{paths.src.root}"]
				#paths to look for files in
				moduleDirectories: ['node_modules', "bower_components"]
				#package descriptors
				packageMains: ["webpack", "browser", "web", "main"]
				#extensions
				extensions: ["", ".js", ".coffee",".cjsx",".jsx",".json",".json5",".ls",".html",".jade",".css",".sass",".scss",".styl",".png"]
				#aliases for libs
				alias: {}

			#allow these to be required, but not bundled.
			externals: []


			#auto watch for these files and use the loader for it.
			#there's more loaders that can be used.
			#docs at http://webpack.github.io/docs/list-of-loaders.html
			module:
				noParse: /^\..+$/
				loaders: [
					{ test: /\.coffee$/, loader: "coffee" }			#coffeescript thingy.coffee
					# { test: /\.cjsx$/, loader: "coffee-jsx-loader" } #react-coffee
					# { test: /\.jsx$/, loader: "jsx-loader" }		#jsx thingy.jsx
					{ test: /\.json$/, loader: "json" }				#json thingy.json
					# { test: /\.json5$/, loader: "json5" }			#json5 thingy.json5
					# { test: /\.ls$/, loaders: "livescript" } 		#livescript thingy.ls
					# { test: /\.worker\.js$/, loaders: "worker" } 	#webworker thingy.worker.js
					{ test: /\.html$/, loader: "html" }				#html thingy.html
					# { test: /\.jade$/, loader: "jade" }				#jade thingy.jade
					{ test: /\.css$/, loaders: ["raw", "css"] }	#css thingy.css
					{ test: /\.[sass|scss]$/, loaders: "sass" }		#sass thingy.sass
					# { test: /\.styl$/, loaders: "stylus" }			#stylus thingy.styl
					{
						test: /\.png$/,
						loader: "url-loader"
						query: { mimetype: "image/png" }
					}												#include pngs as base64 url
				]


			#default plugins
			plugins: [
				new webpack.ResolverPlugin([
					new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
				], ["normal", "loader"])
				new webpack.optimize.OccurenceOrderPlugin(true)
				new webpack.optimize.DedupePlugin()
			]


		#extend the aliases from js.coffee, and provide shims
		if js_config.shims?
			injectShimsAndAliases(config, js_config.shims)

		#extend the aliases from js.coffee, and provide shims
		if js_config.aliases?
			_.each js_config.aliases, (path, alias) ->
				injectAlias(config, alias, path)

		#injects a module and make it availible to all
		if js_config.exposeGlobals?
			exposeGlobals(config, js_config.exposeGlobals)

		#injects plain vars
		if entry.vars?
			entry.vars['_env_'] = if isProduction then 'production' else 'development'
			injectVars(config, entry.vars)

		#injects a module and make it availible to all
		if entry.externals?
			injectExternals(config, entry.externals)

		#enable dev debugging
		if not isProduction
			enableDebugging(config)
		enableDebugging(config)

		#insert the entry
		insertEntry(config, entry.src)
		#insert the output
		insertOutput(config, entry.dest, isProduction)

		#export the config
		config
