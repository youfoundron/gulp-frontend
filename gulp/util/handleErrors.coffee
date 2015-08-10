# notify 		= require "gulp-notify"
gutil 		= require "gulp-util"


module.exports = ->
	args = Array::slice.call(arguments)

	# Send error to notification center with gulp-notify
	# notify.onError(
	# 	title: "Compile Error"
	# 	message: "<%= error.message %>"
	# 	sound: 'Basso'
	# ).apply this, args

	err = new gutil.PluginError('test', 'something broke', {showStack: true})
	console.log arguments[0]
	console.error "[gulp]".red, "Error:".red, arguments[0]

	# Keep gulp from hanging on this task
	@emit "end"
	return
