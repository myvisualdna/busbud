webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/reducerAction.js":
/*!*****************************************!*\
  !*** ./redux/reducers/reducerAction.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_andresnieves_Documents_React_busbud_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_andresnieves_Documents_React_busbud_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n//We define the reducer \nvar initialState = {\n  mainInformation: {},\n  allDepartures: []\n}; //Creamos el reducer, recibe el state inicial y una action\n\nvar firstFetch = function firstFetch() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"FETCH_ACTION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainInformation: action.payload\n      });\n\n    case \"FETCH_DEPARTURES\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        allDepartures: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firstFetch);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvcmVkdWNlckFjdGlvbi5qcz8yNDg5Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5JbmZvcm1hdGlvbiIsImFsbERlcGFydHVyZXMiLCJmaXJzdEZldGNoIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsaUJBQWUsRUFBRSxFQURFO0FBRW5CQyxlQUFhLEVBQUU7QUFGSSxDQUFyQixDLENBS0E7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCSixZQUF5QjtBQUFBLE1BQVhLLE1BQVc7O0FBQ25ELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssY0FBTDtBQUNFLDZDQUFZRixLQUFaO0FBQW1CSCx1QkFBZSxFQUFFSSxNQUFNLENBQUNFO0FBQTNDOztBQUNGLFNBQUssa0JBQUw7QUFDRSw2Q0FBWUgsS0FBWjtBQUFtQkYscUJBQWEsRUFBRUcsTUFBTSxDQUFDRTtBQUF6Qzs7QUFDRjtBQUNFLGFBQU9ILEtBQVA7QUFOSjtBQVFELENBVEQ7O0FBV2VELHlFQUFmIiwiZmlsZSI6Ii4vcmVkdXgvcmVkdWNlcnMvcmVkdWNlckFjdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vV2UgZGVmaW5lIHRoZSByZWR1Y2VyIFxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluSW5mb3JtYXRpb246IHt9LFxuICBhbGxEZXBhcnR1cmVzOiBbXSxcbn07XG5cbi8vQ3JlYW1vcyBlbCByZWR1Y2VyLCByZWNpYmUgZWwgc3RhdGUgaW5pY2lhbCB5IHVuYSBhY3Rpb25cbmNvbnN0IGZpcnN0RmV0Y2ggPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkZFVENIX0FDVElPTlwiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1haW5JbmZvcm1hdGlvbjogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlIFwiRkVUQ0hfREVQQVJUVVJFU1wiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFsbERlcGFydHVyZXM6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmlyc3RGZXRjaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/reducerAction.js\n");

/***/ })

})