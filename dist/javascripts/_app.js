/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/javascripts/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, THREE) {var GAME, degToRad, effects, points, preloader, terrainMap;
	
	$.fn.extend;
	
	({
	  addClassUnique: function(klass) {
	    $(this).siblings().removeClass(klass);
	    $(this).addClass(klass);
	    return $(this);
	  }
	});
	
	points = function(x, y, z) {
	  if (x == null) {
	    x = 0;
	  }
	  if (y == null) {
	    y = 0;
	  }
	  if (z == null) {
	    z = 0;
	  }
	  return {
	    x: x,
	    y: y,
	    z: z
	  };
	};
	
	degToRad = function(deg) {
	  return Math.PI / 180 * deg;
	};
	
	preloader = Preloader();
	
	GAME = new WHS.init({
	  background: 0x000000,
	  autoresize: true,
	  camera: {
	    far: 10000,
	    x: 300,
	    y: 20,
	    z: 300
	  },
	  stats: "fps"
	});
	
	GAME.skybox = GAME.Skybox({
	  path: './images/textures/skybox/skybox-',
	  imgSuffix: '.jpg',
	  skyType: 'box',
	  radius: GAME._camera.far,
	  rot: {
	    x: 0,
	    y: degToRad(-165),
	    z: 0
	  },
	  pos: {
	    y: -200
	  }
	});
	
	terrainMap = new Image();
	
	terrainMap.src = './assets/terrain/default_terrain.png';
	
	GAME.ground = GAME.Terrain({
	  geometry: {
	    map: terrainMap,
	    depth: 100,
	    width: 256,
	    height: 256
	  },
	  material: {
	    color: 0xff0000,
	    side: THREE.DoubleSide,
	    kind: "basic"
	  },
	  pos: points(0, -50, 0)
	});
	
	GAME.horse = GAME.Model({
	  geometry: {
	    path: 'assets/models/morph/horse.js',
	    mass: 30,
	    onlyvis: false
	  },
	  material: {
	    kind: "phong",
	    vertexColors: THREE.VertexColors,
	    shading: THREE.SmoothSHading
	  },
	  pos: points(0, 0, 0),
	  rot: points(0, 0, 0)
	});
	
	GAME.spotlight_white = GAME.SpotLight({
	  light: {
	    color: 0xffffff,
	    intensity: 2,
	    distance: 1000
	  },
	  pos: points(160, 120, 160),
	  target: points(0, 10, 0)
	});
	
	GAME.ambient_light = GAME.AmbientLight({
	  light: {
	    color: 0x080808
	  }
	});
	
	GAME.blue_light = GAME.DirectionalLight({
	  light: {
	    color: 0x003366,
	    intensity: 1
	  },
	  pos: points(5, 1, 0)
	});
	
	GAME.red_light = GAME.DirectionalLight({
	  light: {
	    color: 0x8b0000,
	    intensity: 1.5
	  }
	});
	
	GAME.ambient_light = GAME.AmbientLight({
	  light: {
	    color: 0x101010
	  }
	});
	
	GAME.back_light = GAME.DirectionalLight({
	  light: {
	    color: 0xffffff,
	    intensity: 0.225
	  },
	  pos: points(2.6, 1, 3)
	});
	
	GAME.key_light = GAME.DirectionalLight({
	  light: {
	    color: 0xffffff,
	    intensity: 0.375
	  },
	  pos: points(-2, -1, 0)
	});
	
	GAME.fill_light = GAME.DirectionalLight({
	  light: {
	    color: 0xffffff,
	    intensity: 0.75
	  },
	  pos: points(-3, -3, 2)
	});
	
	effects = GAME.Wagner();
	
	effects.add("VignettePass", {});
	
	GAME.OrbitControls();
	
	GAME.start();
	
	preloader.check();
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = THREE;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjU4NjZlOTEwOWZkM2ZlNTM5OTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvbWFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiVEhSRUVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7O0FBQUEsRUFBQyxDQUFDLEVBQUUsQ0FBQzs7QUFDTDtHQUFBLGdCQUFnQixTQUFDLEtBQUQ7S0FDZixFQUFFLElBQUYsQ0FBSSxDQUFDLFFBQUwsRUFBZSxDQUFDLFdBQWhCLENBQTRCLEtBQTVCO0tBQ0EsRUFBRSxJQUFGLENBQUksQ0FBQyxRQUFMLENBQWMsS0FBZDtBQUNBLFlBQU8sRUFBRSxJQUFGO0dBSFEsQ0FBaEI7RUFBQTs7QUFJQSxVQUFTLFNBQUMsQ0FBRCxFQUFNLENBQU4sRUFBVyxDQUFYOztLQUFDLElBQUU7OztLQUFHLElBQUU7OztLQUFHLElBQUU7O1VBQU07S0FBQyxHQUFHLENBQUo7S0FBTyxHQUFHLENBQVY7S0FBYSxHQUFHLENBQWhCOztBQUFuQjs7QUFDVCxZQUFXLFNBQUMsR0FBRDtVQUFTLElBQUksQ0FBQyxFQUFMLEdBQVUsR0FBVixHQUFnQjtBQUF6Qjs7QUFJWCxhQUFZOztBQUlaLFFBQVcsT0FBRyxDQUFDLElBQUosQ0FDVjtHQUFBLFlBQVksUUFBWjtHQUNBLFlBQVksSUFEWjtHQUdBLFFBQ0M7S0FBQSxLQUFLLEtBQUw7S0FDQSxHQUFHLEdBREg7S0FFQSxHQUFHLEVBRkg7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TCxHQUFrQixJQUFJLENBQUMsZ0JBQUwsQ0FDakI7R0FBQSxPQUNDO0tBQUEsT0FBTyxRQUFQO0tBQ0EsV0FBVyxJQURYO0lBREQ7R0FHQSxLQUFLLE9BQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBQyxDQUFaLEVBQWUsQ0FBZixDQUhMO0VBRGlCOztBQVNsQixXQUFVLElBQUksQ0FBQyxNQUFMOztBQUVWLFFBQU8sQ0FBQyxHQUFSLENBQWEsY0FBYixFQUE2QixFQUE3Qjs7QUFJQSxLQUFJLENBQUMsYUFBTDs7QUFJQSxLQUFJLENBQUMsS0FBTDs7QUFDQSxVQUFTLENBQUMsS0FBVjs7Ozs7Ozs7QUNqSkEsd0I7Ozs7OztBQ0FBLHlCIiwiZmlsZSI6Il9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvamF2YXNjcmlwdHMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmNTg2NmU5MTA5ZmQzZmU1Mzk5MVxuICoqLyIsIiMjIEhFTFBFUiBNRVRIT0RTXG4jIyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4kLmZuLmV4dGVuZFxuYWRkQ2xhc3NVbmlxdWU6IChrbGFzcykgLT5cblx0JChAKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzIGtsYXNzXG5cdCQoQCkuYWRkQ2xhc3Mga2xhc3Ncblx0cmV0dXJuICQoQClcbnBvaW50cyA9ICh4PTAsIHk9MCwgej0wKSAtPiB7eDogeCwgeTogeSwgejogen1cbmRlZ1RvUmFkID0gKGRlZykgLT4gTWF0aC5QSSAvIDE4MCAqIGRlZ1xuXG4jIyBQUkVMT0FERVJcbiMjICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbnByZWxvYWRlciA9IFByZWxvYWRlcigpXG5cbiMjIElOSVRJQUxJWkUgU0NFTkVcbiMjICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbkdBTUUgPSBuZXcgV0hTLmluaXRcblx0YmFja2dyb3VuZDogMHgwMDAwMDBcblx0YXV0b3Jlc2l6ZTogdHJ1ZVxuXHQjIGdyYXZpdHk6IHBvaW50cyAwLCAtMTAwLCAwXG5cdGNhbWVyYTpcblx0XHRmYXI6IDEwMDAwXG5cdFx0eDogMzAwXG5cdFx0eTogMjBcblx0XHR6OiAzMDBcblx0IyByV2lkdGg6IDEgLyAxLjVcblx0IyBySGVpZ2h0OiAxIC8gMS41XG5cdHN0YXRzOiBcImZwc1wiICMgZnBzLCBtcywgbWJcblx0IyBwYXRoX3dvcmtlcjogJy4vbGlicy9waHlzaWpzX3dvcmtlci5qcydcblx0IyBwYXRoX2FtbW86ICcuL2FtbW8uanMnXG5cblxuIyMgU0tZQk9YXG4jIyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5HQU1FLnNreWJveCA9IEdBTUUuU2t5Ym94XG5cdHBhdGg6ICcuL2ltYWdlcy90ZXh0dXJlcy9za3lib3gvc2t5Ym94LSdcblx0aW1nU3VmZml4OiAnLmpwZydcblx0c2t5VHlwZTogJ2JveCcgIyBib3gsIHNwaGVyZVxuXHRyYWRpdXM6IEdBTUUuX2NhbWVyYS5mYXJcblx0cm90OlxuXHRcdHg6IDBcblx0XHR5OiBkZWdUb1JhZCAtMTY1XG5cdFx0ejogMFxuXHRwb3M6IHsgeTogLTIwMCB9XG5cblxuIyMgVEVSUkFJTlxuIyMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xudGVycmFpbk1hcCA9IG5ldyBJbWFnZSgpXG50ZXJyYWluTWFwLnNyYyA9ICcuL2Fzc2V0cy90ZXJyYWluL2RlZmF1bHRfdGVycmFpbi5wbmcnXG5HQU1FLmdyb3VuZCA9IEdBTUUuVGVycmFpblxuXHRnZW9tZXRyeTpcblx0XHRtYXA6IHRlcnJhaW5NYXBcblx0XHRkZXB0aDogMTAwXG5cdFx0d2lkdGg6IDI1NlxuXHRcdGhlaWdodDogMjU2XG5cdG1hdGVyaWFsOlxuXHRcdGNvbG9yOiAweGZmMDAwMFxuXHRcdHNpZGU6IFRIUkVFLkRvdWJsZVNpZGVcblx0XHRraW5kOiBcImJhc2ljXCJcblx0cG9zOiBwb2ludHMgMCwgLTUwLCAwXG5cblxuIyMgTU9ERUxTXG4jIyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5HQU1FLmhvcnNlID0gR0FNRS5Nb2RlbFxuXHRnZW9tZXRyeTpcblx0XHRwYXRoOiAnYXNzZXRzL21vZGVscy9tb3JwaC9ob3JzZS5qcydcblx0XHRtYXNzOiAzMFxuXHRcdG9ubHl2aXM6IGZhbHNlXG5cdG1hdGVyaWFsOlxuXHRcdGtpbmQ6IFwicGhvbmdcIlxuXHRcdHZlcnRleENvbG9yczogVEhSRUUuVmVydGV4Q29sb3JzXG5cdFx0c2hhZGluZzogVEhSRUUuU21vb3RoU0hhZGluZ1xuXHRwb3M6IHBvaW50cyAwLCAwLCAwXG5cdHJvdDogcG9pbnRzIDAsIDAsIDBcblxuXG4jIyBGT0dcbiMjICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgaHR0cHM6Ly9naXRodWIuY29tL1doaXRlc3Rvcm1KUy93aGl0ZXN0b3JtLmpzL2lzc3Vlcy81XG5cblxuIyMgTElHSFRJTkdcbiMjICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbkdBTUUuc3BvdGxpZ2h0X3doaXRlID0gR0FNRS5TcG90TGlnaHRcblx0bGlnaHQ6XG5cdFx0Y29sb3I6IDB4ZmZmZmZmXG5cdFx0aW50ZW5zaXR5OiAyXG5cdFx0ZGlzdGFuY2U6IDEwMDBcblx0cG9zOiBwb2ludHMgMTYwLCAxMjAsIDE2MFxuXHR0YXJnZXQ6IHBvaW50cyAwLCAxMCwgMFxuXG5cbiMjIFNVTlNFVCBMSUdIVElOR1xuIyMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuR0FNRS5hbWJpZW50X2xpZ2h0ID0gR0FNRS5BbWJpZW50TGlnaHRcblx0bGlnaHQ6XG5cdFx0Y29sb3I6IDB4MDgwODA4XG5HQU1FLmJsdWVfbGlnaHQgPSBHQU1FLkRpcmVjdGlvbmFsTGlnaHRcblx0bGlnaHQ6XG5cdFx0Y29sb3I6IDB4MDAzMzY2ICMgbWlkbmlnaHRibHVlXG5cdFx0aW50ZW5zaXR5OiAxXG5cdHBvczogcG9pbnRzIDUsIDEsIDBcbkdBTUUucmVkX2xpZ2h0ID0gR0FNRS5EaXJlY3Rpb25hbExpZ2h0XG5cdGxpZ2h0OlxuXHRcdGNvbG9yOiAweDhiMDAwMCAjIGRhcmtyZWRcblx0XHRpbnRlbnNpdHk6IDEuNVxuXG5cbiMjIDMtUE9JTlQgTElHSFRJTkdcbiMjICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbkdBTUUuYW1iaWVudF9saWdodCA9IEdBTUUuQW1iaWVudExpZ2h0XG5cdGxpZ2h0OlxuXHRcdGNvbG9yOiAweDEwMTAxMFxuR0FNRS5iYWNrX2xpZ2h0ID0gR0FNRS5EaXJlY3Rpb25hbExpZ2h0XG5cdGxpZ2h0OlxuXHRcdGNvbG9yOiAweGZmZmZmZlxuXHRcdGludGVuc2l0eTogMC4yMjVcblx0cG9zOiBwb2ludHMgMi42LCAxLCAzXG5HQU1FLmtleV9saWdodCA9IEdBTUUuRGlyZWN0aW9uYWxMaWdodFxuXHRsaWdodDpcblx0XHRjb2xvcjogMHhmZmZmZmZcblx0XHRpbnRlbnNpdHk6IDAuMzc1XG5cdHBvczogcG9pbnRzIC0yLCAtMSwgMFxuR0FNRS5maWxsX2xpZ2h0ID0gR0FNRS5EaXJlY3Rpb25hbExpZ2h0XG5cdGxpZ2h0OlxuXHRcdGNvbG9yOiAweGZmZmZmZlxuXHRcdGludGVuc2l0eTogMC43NVxuXHRwb3M6IHBvaW50cyAtMywgLTMsIDJcblxuXG4jIyBQT1NUIEVGRkVDVFNcbiMjICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmVmZmVjdHMgPSBHQU1FLldhZ25lcigpXG4jIGVmZmVjdHMuYWRkKCBcIlpvb21CbHVyUGFzc1wiLCB7fSApXG5lZmZlY3RzLmFkZCggXCJWaWduZXR0ZVBhc3NcIiwge30gKVxuXG4jIyBDT05UUk9MU1xuIyMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuR0FNRS5PcmJpdENvbnRyb2xzKClcbiMgR0FNRS5GUFNDb250cm9scygpXG5cblxuR0FNRS5zdGFydCgpXG5wcmVsb2FkZXIuY2hlY2soKVxuXG4jcmVhZHlcbiMgJChkb2N1bWVudCkucmVhZHkgLT5cbiMgXHRjb25zb2xlLmxvZyBcIldvcmxkIG8nIEhlbGxcIlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9tYWluLmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gVEhSRUU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlRIUkVFXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwialF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9