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

	/* WEBPACK VAR INJECTION */(function($, THREE) {var GAME, degToRad, effects, points, preloader;
	
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
	    x: 150,
	    y: 20,
	    z: 150
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
	
	GAME.flamingo = GAME.Model({
	  geometry: {
	    path: 'assets/models/morph/flamingo.js',
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
	
	GAME.spotlight_cool = GAME.SpotLight({
	  light: {
	    color: 0x003366,
	    intensity: 1.5,
	    distance: 1000
	  },
	  pos: points(160, 200, 160),
	  target: points(0, 0, 0)
	});
	
	GAME.spotlight_warm = GAME.SpotLight({
	  light: {
	    color: 0x8b0000,
	    intensity: 1,
	    distance: 1000
	  },
	  pos: points(100, 120, 160),
	  target: points(0, 0, 0)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzM4MTNmMzg0ZmFjMmFiZGYzMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvbWFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiVEhSRUVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7O0FBQUEsRUFBQyxDQUFDLEVBQUUsQ0FBQzs7QUFDTDtHQUFBLGdCQUFnQixTQUFDLEtBQUQ7S0FDZixFQUFFLElBQUYsQ0FBSSxDQUFDLFFBQUwsRUFBZSxDQUFDLFdBQWhCLENBQTRCLEtBQTVCO0tBQ0EsRUFBRSxJQUFGLENBQUksQ0FBQyxRQUFMLENBQWMsS0FBZDtBQUNBLFlBQU8sRUFBRSxJQUFGO0dBSFEsQ0FBaEI7RUFBQTs7QUFJQSxVQUFTLFNBQUMsQ0FBRCxFQUFNLENBQU4sRUFBVyxDQUFYOztLQUFDLElBQUU7OztLQUFHLElBQUU7OztLQUFHLElBQUU7O1VBQU07S0FBQyxHQUFHLENBQUo7S0FBTyxHQUFHLENBQVY7S0FBYSxHQUFHLENBQWhCOztBQUFuQjs7QUFDVCxZQUFXLFNBQUMsR0FBRDtVQUFTLElBQUksQ0FBQyxFQUFMLEdBQVUsR0FBVixHQUFnQjtBQUF6Qjs7QUFJWCxhQUFZOztBQUlaLFFBQVcsT0FBRyxDQUFDLElBQUosQ0FDVjtHQUFBLFlBQVksUUFBWjtHQUNBLFlBQVksSUFEWjtHQUdBLFFBQ0M7S0FBQSxLQUFLLEtBQUw7S0FDQSxHQUFHLEdBREg7S0FFQSxHQUFHLEVBRkg7S0FHQSxHQUFHLEdBSEg7SUFKRDtHQVVBLE9BQU8sS0FWUDtFQURVOztBQWtCWCxLQUFJLENBQUMsTUFBTCxHQUFjLElBQUksQ0FBQyxNQUFMLENBQ2I7R0FBQSxNQUFNLGtDQUFOO0dBQ0EsV0FBVyxNQURYO0dBRUEsU0FBUyxLQUZUO0dBR0EsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBSHJCO0dBSUEsS0FDQztLQUFBLEdBQUcsQ0FBSDtLQUNBLEdBQUcsU0FBUyxDQUFDLEdBQVYsQ0FESDtLQUVBLEdBQUcsQ0FGSDtJQUxEO0dBUUEsS0FBSztLQUFFLEdBQUcsQ0FBQyxHQUFOO0lBUkw7RUFEYTs7QUFpQ2QsS0FBSSxDQUFDLFFBQUwsR0FBZ0IsSUFBSSxDQUFDLEtBQUwsQ0FDZjtHQUFBLFVBQ0M7S0FBQSxNQUFNLGlDQUFOO0tBQ0EsTUFBTSxFQUROO0tBRUEsU0FBUyxLQUZUO0lBREQ7R0FJQSxVQUNDO0tBQUEsTUFBTSxPQUFOO0tBQ0EsY0FBYyxLQUFLLENBQUMsWUFEcEI7S0FFQSxTQUFTLEtBQUssQ0FBQyxhQUZmO0lBTEQ7R0FRQSxLQUFLLE9BQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBUkw7R0FTQSxLQUFLLE9BQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBVEw7RUFEZTs7QUFvQmhCLEtBQUksQ0FBQyxlQUFMLEdBQXVCLElBQUksQ0FBQyxTQUFMLENBQ3RCO0dBQUEsT0FDQztLQUFBLE9BQU8sUUFBUDtLQUNBLFdBQVcsQ0FEWDtLQUVBLFVBQVUsSUFGVjtJQUREO0dBSUEsS0FBSyxPQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLEdBQWpCLENBSkw7R0FLQSxRQUFRLE9BQU8sQ0FBUCxFQUFVLEVBQVYsRUFBYyxDQUFkLENBTFI7RUFEc0I7O0FBT3ZCLEtBQUksQ0FBQyxjQUFMLEdBQXNCLElBQUksQ0FBQyxTQUFMLENBQ3JCO0dBQUEsT0FDQztLQUFBLE9BQU8sUUFBUDtLQUNBLFdBQVcsR0FEWDtLQUVBLFVBQVUsSUFGVjtJQUREO0dBSUEsS0FBSyxPQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLEdBQWpCLENBSkw7R0FLQSxRQUFRLE9BQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBTFI7RUFEcUI7O0FBT3RCLEtBQUksQ0FBQyxjQUFMLEdBQXNCLElBQUksQ0FBQyxTQUFMLENBQ3JCO0dBQUEsT0FDQztLQUFBLE9BQU8sUUFBUDtLQUNBLFdBQVcsQ0FEWDtLQUVBLFVBQVUsSUFGVjtJQUREO0dBSUEsS0FBSyxPQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLEdBQWpCLENBSkw7R0FLQSxRQUFRLE9BQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBTFI7RUFEcUI7O0FBbUR0QixXQUFVLElBQUksQ0FBQyxNQUFMOztBQUVWLFFBQU8sQ0FBQyxHQUFSLENBQWEsY0FBYixFQUE2QixFQUE3Qjs7QUFJQSxLQUFJLENBQUMsYUFBTDs7QUFJQSxLQUFJLENBQUMsS0FBTDs7QUFDQSxVQUFTLENBQUMsS0FBVjs7Ozs7Ozs7QUNuS0Esd0I7Ozs7OztBQ0FBLHlCIiwiZmlsZSI6Il9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvamF2YXNjcmlwdHMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjMzgxM2YzODRmYWMyYWJkZjMxN1xuICoqLyIsIiMjIEhFTFBFUiBNRVRIT0RTXG4jIyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4kLmZuLmV4dGVuZFxuYWRkQ2xhc3NVbmlxdWU6IChrbGFzcykgLT5cblx0JChAKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzIGtsYXNzXG5cdCQoQCkuYWRkQ2xhc3Mga2xhc3Ncblx0cmV0dXJuICQoQClcbnBvaW50cyA9ICh4PTAsIHk9MCwgej0wKSAtPiB7eDogeCwgeTogeSwgejogen1cbmRlZ1RvUmFkID0gKGRlZykgLT4gTWF0aC5QSSAvIDE4MCAqIGRlZ1xuXG4jIyBQUkVMT0FERVJcbiMjICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbnByZWxvYWRlciA9IFByZWxvYWRlcigpXG5cbiMjIElOSVRJQUxJWkUgU0NFTkVcbiMjICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbkdBTUUgPSBuZXcgV0hTLmluaXRcblx0YmFja2dyb3VuZDogMHgwMDAwMDBcblx0YXV0b3Jlc2l6ZTogdHJ1ZVxuXHQjIGdyYXZpdHk6IHBvaW50cyAwLCAtMTAwLCAwXG5cdGNhbWVyYTpcblx0XHRmYXI6IDEwMDAwXG5cdFx0eDogMTUwXG5cdFx0eTogMjBcblx0XHR6OiAxNTBcblx0IyByV2lkdGg6IDEgLyAxLjVcblx0IyBySGVpZ2h0OiAxIC8gMS41XG5cdHN0YXRzOiBcImZwc1wiICMgZnBzLCBtcywgbWJcblx0IyBwYXRoX3dvcmtlcjogJy4vbGlicy9waHlzaWpzX3dvcmtlci5qcydcblx0IyBwYXRoX2FtbW86ICcuL2FtbW8uanMnXG5cblxuIyMgU0tZQk9YXG4jIyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5HQU1FLnNreWJveCA9IEdBTUUuU2t5Ym94XG5cdHBhdGg6ICcuL2ltYWdlcy90ZXh0dXJlcy9za3lib3gvc2t5Ym94LSdcblx0aW1nU3VmZml4OiAnLmpwZydcblx0c2t5VHlwZTogJ2JveCcgIyBib3gsIHNwaGVyZVxuXHRyYWRpdXM6IEdBTUUuX2NhbWVyYS5mYXJcblx0cm90OlxuXHRcdHg6IDBcblx0XHR5OiBkZWdUb1JhZCAtMTY1XG5cdFx0ejogMFxuXHRwb3M6IHsgeTogLTIwMCB9XG5cblxuIyMgVEVSUkFJTlxuIyMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuIyB0ZXJyYWluTWFwID0gbmV3IEltYWdlKClcbiMgdGVycmFpbk1hcC5zcmMgPSAnLi9hc3NldHMvdGVycmFpbi9kZWZhdWx0X3RlcnJhaW4ucG5nJ1xuIyB0ZXJyYWluTWFwID0gcmVxdWlyZSgnLi9hc3NldHMvdGVycmFpbi9leHBvcnRfZGVmYXVsdF90ZXJyYWluLmpzJykoKVxuIyBjb25zb2xlLmxvZyB0ZXJyYWluTWFwXG4jIEdBTUUuZ3JvdW5kID0gR0FNRS5UZXJyYWluXG4jIFx0Z2VvbWV0cnk6XG4jIFx0XHRtYXA6IHRlcnJhaW5NYXBcbiMgXHRcdGRlcHRoOiAxMDBcbiMgXHRcdHdpZHRoOiAyNTZcbiMgXHRcdGhlaWdodDogMjU2XG4jIFx0bWF0ZXJpYWw6XG4jIFx0XHRjb2xvcjogMHhmZjAwMDBcbiMgXHRcdHNpZGU6IFRIUkVFLkRvdWJsZVNpZGVcbiMgXHRcdGtpbmQ6IFwiYmFzaWNcIlxuIyBcdHBvczogcG9pbnRzIDAsIDAsIDBcblxuXG4jIyBNT0RFTFNcbiMjICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbkdBTUUuZmxhbWluZ28gPSBHQU1FLk1vZGVsXG5cdGdlb21ldHJ5OlxuXHRcdHBhdGg6ICdhc3NldHMvbW9kZWxzL21vcnBoL2ZsYW1pbmdvLmpzJ1xuXHRcdG1hc3M6IDMwXG5cdFx0b25seXZpczogZmFsc2Vcblx0bWF0ZXJpYWw6XG5cdFx0a2luZDogXCJwaG9uZ1wiXG5cdFx0dmVydGV4Q29sb3JzOiBUSFJFRS5WZXJ0ZXhDb2xvcnNcblx0XHRzaGFkaW5nOiBUSFJFRS5TbW9vdGhTSGFkaW5nXG5cdHBvczogcG9pbnRzIDAsIDAsIDBcblx0cm90OiBwb2ludHMgMCwgMCwgMFxuXG5cbiMjIEZPR1xuIyMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuIyBodHRwczovL2dpdGh1Yi5jb20vV2hpdGVzdG9ybUpTL3doaXRlc3Rvcm0uanMvaXNzdWVzLzVcblxuXG4jIyBMSUdIVElOR1xuIyMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuR0FNRS5zcG90bGlnaHRfd2hpdGUgPSBHQU1FLlNwb3RMaWdodFxuXHRsaWdodDpcblx0XHRjb2xvcjogMHhmZmZmZmZcblx0XHRpbnRlbnNpdHk6IDJcblx0XHRkaXN0YW5jZTogMTAwMFxuXHRwb3M6IHBvaW50cyAxNjAsIDEyMCwgMTYwXG5cdHRhcmdldDogcG9pbnRzIDAsIDEwLCAwXG5HQU1FLnNwb3RsaWdodF9jb29sID0gR0FNRS5TcG90TGlnaHRcblx0bGlnaHQ6XG5cdFx0Y29sb3I6IDB4MDAzMzY2XG5cdFx0aW50ZW5zaXR5OiAxLjVcblx0XHRkaXN0YW5jZTogMTAwMFxuXHRwb3M6IHBvaW50cyAxNjAsIDIwMCwgMTYwXG5cdHRhcmdldDogcG9pbnRzIDAsIDAsIDBcbkdBTUUuc3BvdGxpZ2h0X3dhcm0gPSBHQU1FLlNwb3RMaWdodFxuXHRsaWdodDpcblx0XHRjb2xvcjogMHg4YjAwMDBcblx0XHRpbnRlbnNpdHk6IDFcblx0XHRkaXN0YW5jZTogMTAwMFxuXHRwb3M6IHBvaW50cyAxMDAsIDEyMCwgMTYwXG5cdHRhcmdldDogcG9pbnRzIDAsIDAsIDBcblxuXG4jIyBTVU5TRVQgTElHSFRJTkdcbiMjICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgaHR0cHM6Ly9naXRodWIuY29tL1doaXRlc3Rvcm1KUy93aGl0ZXN0b3JtLmpzL2lzc3Vlcy81NFxuIyBHQU1FLmFtYmllbnRfbGlnaHQgPSBHQU1FLkFtYmllbnRMaWdodFxuIyBcdGxpZ2h0OlxuIyBcdFx0Y29sb3I6IDB4MDgwODA4XG4jICMgR0FNRS5ibHVlX2xpZ2h0ID0gR0FNRS5EaXJlY3Rpb25hbExpZ2h0XG4jIFx0bGlnaHQ6XG4jIFx0XHRjb2xvcjogMHgwMDMzNjYgIyBtaWRuaWdodGJsdWVcbiMgXHRcdGludGVuc2l0eTogMVxuIyBcdHBvczogcG9pbnRzIDUsIDEsIDBcbiMgR0FNRS5yZWRfbGlnaHQgPSBHQU1FLkRpcmVjdGlvbmFsTGlnaHRcbiMgXHRsaWdodDpcbiMgXHRcdGNvbG9yOiAweDhiMDAwMCAjIGRhcmtyZWRcbiMgXHRcdGludGVuc2l0eTogMS41XG5cblxuIyMgMy1QT0lOVCBMSUdIVElOR1xuIyMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuIyBodHRwczovL2dpdGh1Yi5jb20vV2hpdGVzdG9ybUpTL3doaXRlc3Rvcm0uanMvaXNzdWVzLzU0XG4jIEdBTUUuYW1iaWVudF9saWdodCA9IEdBTUUuQW1iaWVudExpZ2h0XG4jIFx0bGlnaHQ6XG4jIFx0XHRjb2xvcjogMHgxMDEwMTBcbiMgR0FNRS5iYWNrX2xpZ2h0ID0gR0FNRS5EaXJlY3Rpb25hbExpZ2h0XG4jIFx0bGlnaHQ6XG4jIFx0XHRjb2xvcjogMHhmZmZmZmZcbiMgXHRcdGludGVuc2l0eTogMC4yMjVcbiMgXHRwb3M6IHBvaW50cyAyLjYsIDEsIDNcbiMgR0FNRS5rZXlfbGlnaHQgPSBHQU1FLkRpcmVjdGlvbmFsTGlnaHRcbiMgXHRsaWdodDpcbiMgXHRcdGNvbG9yOiAweGZmZmZmZlxuIyBcdFx0aW50ZW5zaXR5OiAwLjM3NVxuIyBcdHBvczogcG9pbnRzIC0yLCAtMSwgMFxuIyBHQU1FLmZpbGxfbGlnaHQgPSBHQU1FLkRpcmVjdGlvbmFsTGlnaHRcbiMgXHRsaWdodDpcbiMgXHRcdGNvbG9yOiAweGZmZmZmZlxuIyBcdFx0aW50ZW5zaXR5OiAwLjc1XG4jIFx0cG9zOiBwb2ludHMgLTMsIC0zLCAyXG5cblxuIyMgUE9TVCBFRkZFQ1RTXG4jIyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5lZmZlY3RzID0gR0FNRS5XYWduZXIoKVxuIyBlZmZlY3RzLmFkZCggXCJab29tQmx1clBhc3NcIiwge30gKVxuZWZmZWN0cy5hZGQoIFwiVmlnbmV0dGVQYXNzXCIsIHt9IClcblxuIyMgQ09OVFJPTFNcbiMjICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbkdBTUUuT3JiaXRDb250cm9scygpXG4jIEdBTUUuRlBTQ29udHJvbHMoKVxuXG5cbkdBTUUuc3RhcnQoKVxucHJlbG9hZGVyLmNoZWNrKClcblxuI3JlYWR5XG4jICQoZG9jdW1lbnQpLnJlYWR5IC0+XG4jIFx0Y29uc29sZS5sb2cgXCJXb3JsZCBvJyBIZWxsXCJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvbWFpbi5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFRIUkVFO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJUSFJFRVwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpRdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==