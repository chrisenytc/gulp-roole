var through = require("through2");
var gutil = require("gulp-util");
var rooleC = require('roole');

module.exports = function (options) {
	"use strict";

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
	function roole(file, enc, next) {

		var self = this;

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return next();
		}

		if (file.isStream()) {

			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream

			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("gulp-roole", "Stream content is not supported"));
			return next();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {

			// manipulate buffer in some way
			// http://nodejs.org/api/buffer.html

			//get file contents
			var str = file.contents.toString();
			//get roole options
			options = options || {};
			//compile roole in css
			rooleC.compile(str, options, function (err, css) {
				
				if (err) {
					self.emit('error', new gutil.PluginError('gulp-roole', err));
				} else {
					file.contents = new Buffer(css);
					file.path = gutil.replaceExtension(file.path, '.css');
					self.push(file);
					return next();
				}

			});

		}

	}

	return through.obj(roole);
};