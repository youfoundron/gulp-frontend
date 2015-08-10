module.exports = (config) ->
	paths = config.get "paths"
	src: [
		"#{paths.src.sass}/screen.sass"
	]
	dest: "#{paths.dist.css}"
	includes: [
		"#{paths.bower}/bourbon/app/assets/stylesheets/"
		"#{paths.bower}/neat/app/assets/stylesheets/"
		"#{paths.src.sass}/"
	]
