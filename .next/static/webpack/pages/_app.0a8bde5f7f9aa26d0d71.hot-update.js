webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/store/index.js":
/*!******************************!*\
  !*** ./redux/store/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./redux/reducers/index.js\");\n\n\n //importamos el rootReducer que combina todos los reducers\n\n //Definimos un state inicial vacio\n\nvar initialState = {}; //Definimos que thunk va a ser el middleware a utilizar\n\nvar middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]; //Creamos el store, combinando todos los elementos anteriores\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middleware)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc3RvcmUvaW5kZXguanM/YjhiZCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0NBR0E7O0NBR0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHLEVBQXJCLEMsQ0FDQTs7QUFDQSxJQUFNQyxVQUFVLEdBQUcsQ0FBQ0MsbURBQUQsQ0FBbkIsQyxDQUVBOztBQUNBLElBQU1DLEtBQUssR0FBR0MseURBQVcsQ0FDdkJDLGlEQUR1QixFQUV2QkwsWUFGdUIsRUFHdkJNLG9GQUFtQixDQUFDQyxxREFBZSxNQUFmLFNBQW1CTixVQUFuQixDQUFELENBSEksQ0FBekI7QUFNZUUsb0VBQWYiLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5cbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG4vL2ltcG9ydGFtb3MgZWwgcm9vdFJlZHVjZXIgcXVlIGNvbWJpbmEgdG9kb3MgbG9zIHJlZHVjZXJzXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XG5cbi8vRGVmaW5pbW9zIHVuIHN0YXRlIGluaWNpYWwgdmFjaW9cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuLy9EZWZpbmltb3MgcXVlIHRodW5rIHZhIGEgc2VyIGVsIG1pZGRsZXdhcmUgYSB1dGlsaXphclxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XG5cbi8vQ3JlYW1vcyBlbCBzdG9yZSwgY29tYmluYW5kbyB0b2RvcyBsb3MgZWxlbWVudG9zIGFudGVyaW9yZXNcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJvb3RSZWR1Y2VyLFxuICBpbml0aWFsU3RhdGUsXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store/index.js\n");

/***/ })

})