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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _test = __webpack_require__(/*! ./test */ \"./src/test.js\");\n\nvar _test2 = _interopRequireDefault(_test);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _test2.default)();\n(0, _test.nonDefault)();\n\nvar keyMap = new Map([[0, function () {\n  return console.log('A');\n}], [1, function () {\n  return console.log('B');\n}], [2, function () {\n  return console.log('X');\n}], [3, function () {\n  return console.log('Y');\n}], [4, function () {\n  return console.log('left bumper');\n}], [5, function () {\n  return console.log('right bumper');\n}], [6, function () {\n  return console.log('left trigger');\n}], [7, function () {\n  return console.log('right bumper');\n}], [8, function () {\n  return console.log('back');\n}], [9, function () {\n  return console.log('start');\n}], [10, function () {\n  return console.log('left stick down');\n}], [11, function () {\n  return console.log('right stick down');\n}], [12, function () {\n  return console.log('d-pad up');\n}], [13, function () {\n  return console.log('d-pad down');\n}], [14, function () {\n  return console.log('d-pad left');\n}], [15, function () {\n  return console.log('d-pad right');\n}]]);\n\n// const triggerAction = (actor, actionFn) =>\n\nvar keyPressHandler = function keyPressHandler(pressed, keyMap) {\n  pressed.forEach(function (button) {\n    return keyMap.get(button)();\n  });\n};\n\nwindow.addEventListener(\"gamepadconnected\", function () {\n  gameLoop();\n});\n\nfunction gameLoop() {\n  var _navigator$getGamepad = navigator.getGamepads(),\n      gp = _navigator$getGamepad[0];\n\n  var pressed = gp.buttons.reduce(function (pressed, button, i) {\n    return button.pressed && !pressed.includes(gp.buttons[button]) ? pressed.concat(i) : pressed;\n  }, []);\n  // const pressed = gp.buttons.reduce((pressed, button, i) => {\n  //   return button.pressed ? pressed.concat({['index']: i }) : pressed\n  // }, [])\n\n  if (pressed.length) {\n    keyPressHandler(pressed, keyMap);\n  }\n\n  window.requestAnimationFrame(gameLoop);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZiwgeyBub25EZWZhdWx0IH0gZnJvbSAnLi90ZXN0J1xuXG5kZWYoKVxubm9uRGVmYXVsdCgpXG5cbmNvbnN0IGtleU1hcCA9IG5ldyBNYXAoW1xuICBbMCwgKCkgPT4gY29uc29sZS5sb2coJ0EnKV0sXG4gIFsxLCAoKSA9PiBjb25zb2xlLmxvZygnQicpXSxcbiAgWzIsICgpID0+IGNvbnNvbGUubG9nKCdYJyldLFxuICBbMywgKCkgPT4gY29uc29sZS5sb2coJ1knKV0sXG4gIFs0LCAoKSA9PiBjb25zb2xlLmxvZygnbGVmdCBidW1wZXInKV0sXG4gIFs1LCAoKSA9PiBjb25zb2xlLmxvZygncmlnaHQgYnVtcGVyJyldLFxuICBbNiwgKCkgPT4gY29uc29sZS5sb2coJ2xlZnQgdHJpZ2dlcicpXSxcbiAgWzcsICgpID0+IGNvbnNvbGUubG9nKCdyaWdodCBidW1wZXInKV0sXG4gIFs4LCAoKSA9PiBjb25zb2xlLmxvZygnYmFjaycpXSxcbiAgWzksICgpID0+IGNvbnNvbGUubG9nKCdzdGFydCcpXSxcbiAgWzEwLCAoKSA9PiBjb25zb2xlLmxvZygnbGVmdCBzdGljayBkb3duJyldLFxuICBbMTEsICgpID0+IGNvbnNvbGUubG9nKCdyaWdodCBzdGljayBkb3duJyldLFxuICBbMTIsICgpID0+IGNvbnNvbGUubG9nKCdkLXBhZCB1cCcpXSxcbiAgWzEzLCAoKSA9PiBjb25zb2xlLmxvZygnZC1wYWQgZG93bicpXSxcbiAgWzE0LCAoKSA9PiBjb25zb2xlLmxvZygnZC1wYWQgbGVmdCcpXSxcbiAgWzE1LCAoKSA9PiBjb25zb2xlLmxvZygnZC1wYWQgcmlnaHQnKV0sXG5dKVxuXG4vLyBjb25zdCB0cmlnZ2VyQWN0aW9uID0gKGFjdG9yLCBhY3Rpb25GbikgPT5cblxuY29uc3Qga2V5UHJlc3NIYW5kbGVyID0gKHByZXNzZWQsIGtleU1hcCkgPT4ge1xuICBwcmVzc2VkLmZvckVhY2goYnV0dG9uID0+IGtleU1hcC5nZXQoYnV0dG9uKSgpKVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImdhbWVwYWRjb25uZWN0ZWRcIiwgZnVuY3Rpb24oKSB7XG4gIGdhbWVMb29wKClcbn0pXG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBjb25zdCB7IDA6IGdwIH0gPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKVxuXG4gIGNvbnN0IHByZXNzZWQgPSBncC5idXR0b25zLnJlZHVjZSgocHJlc3NlZCwgYnV0dG9uLCBpKSA9PiB7XG4gICAgcmV0dXJuIGJ1dHRvbi5wcmVzc2VkICYmICFwcmVzc2VkLmluY2x1ZGVzKGdwLmJ1dHRvbnNbYnV0dG9uXSkgPyBwcmVzc2VkLmNvbmNhdChpKSA6IHByZXNzZWRcbiAgfSwgW10pXG4gIC8vIGNvbnN0IHByZXNzZWQgPSBncC5idXR0b25zLnJlZHVjZSgocHJlc3NlZCwgYnV0dG9uLCBpKSA9PiB7XG4gIC8vICAgcmV0dXJuIGJ1dHRvbi5wcmVzc2VkID8gcHJlc3NlZC5jb25jYXQoe1snaW5kZXgnXTogaSB9KSA6IHByZXNzZWRcbiAgLy8gfSwgW10pXG5cbiAgaWYgKHByZXNzZWQubGVuZ3RoKSB7XG4gICAga2V5UHJlc3NIYW5kbGVyKHByZXNzZWQsIGtleU1hcClcbiAgfVxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  return console.log('export default works');\n};\n\nvar nonDefault = function nonDefault() {\n  return console.log('named export works');\n};\n\nexports.nonDefault = nonDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGVzdC5qcz85YmQ2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IGNvbnNvbGUubG9nKCdleHBvcnQgZGVmYXVsdCB3b3JrcycpXG5cbmNvbnN0IG5vbkRlZmF1bHQgPSAoKSA9PiBjb25zb2xlLmxvZygnbmFtZWQgZXhwb3J0IHdvcmtzJylcblxuZXhwb3J0IHtcbiAgbm9uRGVmYXVsdFxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/test.js\n");

/***/ })

/******/ });