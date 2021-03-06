/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__ (/*! ./utils.js */ \"./lib/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(optionsHash) {\n  const defaultHash = {};\n  defaultHash.color = 'red';\n  defaultHash.radius = 30;\n  defaultHash.vel = Util.randomVec(50);\n  defaultHash.pos = optionsHash.pos;\n\n  MovingObject.call(this, defaultHash);\n}\n\nconst a = new Asteroid({pos: [300,300]});\n\n// document.addEventListener(\"DOMContentLoaded\", function(){\n//   const canvasEl = document.getElementById(\"canvas\");\n//   canvasEl.width = 750;\n//   canvasEl.height = 750;\n//   const ctx1 = canvasEl.getContext(\"2d\");\n//   setInterval(function () {\n//     a.move();\n//     a.draw(ctx1);\n//   }, 1000);\n// });\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"hello\");\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n\n\n\nwindow.MovingObject = MovingObject;\nwindow.Util = Util;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\n\nfunction Game() {\n  const DIM_X = 400;\n  const DIM_Y = 400;\n  const NUM_ASTEROIDS = 10;\n  this.asteroids = [];\n  for (let i = 0; i < NUM_ASTEROIDS; i++) {\n    this.addAsteroids();\n  }\n}\n\nGame.prototype.addAsteroids = function(){\n  let a = new Asteroid(this.randomPos());\n  this.asteroids.push(a);\n  \n};\n\nGame.prototype.randomPos = function(){\n  let x = Math.random() * 400;\n  let y = Math.random() * 400;\n\n  return {pos: [x,y]};  \n};\n\nGame.prototype.draw = function(ctx) {\n  console.log('in function');\n  ctx.clearRect(0,0,1000,1000);\n  this.asteroids.forEach(asteroid => asteroid.draw(ctx));\n};\n\nGame.prototype.moveObjects = function() {\n  this.asteroids.forEach(asteroid => asteroid.move());\n};\n\nlet game = new Game();\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n  const canvasEl = document.getElementById(\"canvas\");\n  canvasEl.width = 750;\n  canvasEl.height = 750;\n  const ctx = canvasEl.getContext(\"2d\");\n  game.draw(ctx);\n  setInterval(function () {\n      game.moveObjects();\n      game.draw(ctx);\n    }, 1000);\n});\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(optionsHash) {\n  this.pos = optionsHash.pos;\n  this.vel = optionsHash.vel;\n  this.radius = optionsHash.radius;\n  this.color = optionsHash.color;\n}\n\nMovingObject.prototype.draw = function(ctx){\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);\n  ctx.strokeStyle = this.color;\n  ctx.lineWidth = 3;\n  ctx.stroke();  \n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  return this.pos;\n};\n\n\nconst mo = new MovingObject({ pos: [200, 200], vel: [100, 100], radius: 10, color: 'green' });\n\n// document.addEventListener(\"DOMContentLoaded\", function(){\n//   const canvasEl = document.getElementById(\"canvas\");\n//   canvasEl.width = 750;\n//   canvasEl.height = 750;\n//   const ctx = canvasEl.getContext(\"2d\");\n//   setInterval(function () {\n//     mo.move();\n//     mo.draw(ctx);\n//   }, 1000);\n// });\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Function.prototype.inherits = function(Parent) {\n// \n// }\n\nconst Util = {\n  inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n// Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ })

/******/ });