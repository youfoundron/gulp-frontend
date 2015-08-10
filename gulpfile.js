require('coffee-script/register');

// set a global for the project root
global.__base = __dirname;
global.__gulp = global.__base + "/gulp"

var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require(global.__gulp + "/config/config");

// Specify where your coffeescript Gulp config is
var gulpfile = path.join(global.__gulp, "tasks", "index.coffee");
gutil.log('Using file', gutil.colors.magenta(gulpfile));

// Execute CoffeeScript config
require(gulpfile)(gulp, gutil, config);
