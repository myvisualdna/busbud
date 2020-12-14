module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/rQ7":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2S/i":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "6rvL":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "K50N":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bigSquare": "mainStyles_bigSquare__2SSWc",
	"rowOrder": "mainStyles_rowOrder__1Ag3B",
	"rowStyle": "mainStyles_rowStyle__2zAJU",
	"datePick": "mainStyles_datePick__3M2cw",
	"dateBorder": "mainStyles_dateBorder__30dZw",
	"labelStyle": "mainStyles_labelStyle__37YoV",
	"inputStyle": "mainStyles_inputStyle__-jMcO",
	"btnContainer": "mainStyles_btnContainer__36jcu",
	"btn": "mainStyles_btn__2SMcd",
	"bigTable": "mainStyles_bigTable__23gd-",
	"rowHeader": "mainStyles_rowHeader__1t4Up",
	"columnHeader": "mainStyles_columnHeader__1u7HL",
	"heroStyle": "mainStyles_heroStyle__2US7v",
	"imgStyle": "mainStyles_imgStyle__cA_l_",
	"overlay": "mainStyles_overlay__1mTFP",
	"containerStyle": "mainStyles_containerStyle__kQwpO"
};


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__("lFrT");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);

// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__("2S/i");
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);

// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__("vVTy");

// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__("6rvL");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);

// CONCATENATED MODULE: ./components/navigation.js








function Navigation() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Navbar_default.a, {
      bg: "light",
      variant: "light",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Navbar_default.a.Brand, {
        href: "#home",
        children: "Busbud"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Nav_default.a, {
        className: "mr-auto",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Nav_default.a.Link, {
          href: "#home",
          children: "Home"
        })
      })]
    })
  });
}

/* harmony default export */ var navigation = (Navigation);
// CONCATENATED MODULE: ./components/container.js






const Container = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: props.children
    })]
  });
};

/* harmony default export */ var container = (Container);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-bootstrap/Table"
var Table_ = __webpack_require__("/rQ7");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);

// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__("vDuQ");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__("flur");

// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__("tfHl");
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./redux/actions/fetchAction.js
//We import axios for the data fetch
 //Token provided by Busbud

const token = "PARTNER_BaASYYHxTxuOINEOMWq5GA"; //Defining Redux Action

function FetchAction(date) {
  const request = external_axios_default.a.get(`https://napi.busbud.com/x-departures/f2m673/f25dvk/${date}`, {
    headers: {
      Accept: "application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/",
      "X-Busbud-Token": `${token}`
    }
  });
  const requestTwo = external_axios_default.a.get(`https://napi.busbud.com/x-departures/f2m673/f25dvk/${date}/poll`, {
    headers: {
      Accept: "application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/",
      "X-Busbud-Token": `${token}`
    }
  });
  return dispatch => {
    request.then(({
      data
    }) => {
      dispatch({
        type: "FETCH_ACTION",
        payload: data
      }); //////

      requestTwo.then(({
        data
      }) => {
        dispatch({
          type: "FETCH_DEPARTURES",
          payload: data
        });
      }).catch(error => {
        console.err(error);
      });
    });
  };
}
// EXTERNAL MODULE: external "react-moment"
var external_react_moment_ = __webpack_require__("siz1");
var external_react_moment_default = /*#__PURE__*/__webpack_require__.n(external_react_moment_);

// EXTERNAL MODULE: external "moment-timezone"
var external_moment_timezone_ = __webpack_require__("TXK0");

// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// EXTERNAL MODULE: ./styles/mainStyles.module.scss
var mainStyles_module = __webpack_require__("K50N");
var mainStyles_module_default = /*#__PURE__*/__webpack_require__.n(mainStyles_module);

// CONCATENATED MODULE: ./components/table.js
















function ResultTable() {
  //1. We call "useDispatch" (React hook) to trigger our request petition
  const dispatch = Object(external_react_redux_["useDispatch"])(); //2. We define a function that combines dispatch function + redux action

  const getFirstFetch = date => dispatch(FetchAction(date)); //Selectors


  const oneFetch = Object(external_react_redux_["useSelector"])(state => state.firstFetch.mainInformation);
  const departuresFetch = Object(external_react_redux_["useSelector"])(state => state.firstFetch.allDepartures.departures); //DatePicker

  const {
    0: startDate,
    1: setStartDate
  } = Object(external_react_["useState"])(new Date());

  function formatDate(date) {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  } //Setting up Search Action


  const onFormSubmit = (date, e) => {
    setStartDate(date);
    getFirstFetch(formatDate(date));
  }; //Setting up useEffect Hook for the first render


  Object(external_react_["useEffect"])((startDate, e) => {
    let today = formatDate(new Date());
    getFirstFetch(today);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container_default.a, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: mainStyles_module_default.a.bigSquare,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Form_default.a, {
        onSubmit: onFormSubmit,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Form_default.a.Group, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Form_default.a.Row, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Col_default.a, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Form_default.a.Label, {
                className: mainStyles_module_default.a.labelStyle,
                children: "Select Origin"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Form_default.a.Control, {
                className: mainStyles_module_default.a.inputStyle,
                as: "select",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  children: "Quebec City, QC, Canada"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  children: "Montreal, QC, Canada"
                })]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Col_default.a, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Form_default.a.Label, {
                className: mainStyles_module_default.a.labelStyle,
                children: "Select Destination"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Form_default.a.Control, {
                className: mainStyles_module_default.a.inputStyle,
                as: "select",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  children: "Montreal, QC, Canada"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  children: "Quebec City, QC, Canada"
                })]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Col_default.a, {
              className: mainStyles_module_default.a.datePick,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Form_default.a.Label, {
                className: mainStyles_module_default.a.labelStyle,
                children: "Select Date"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_datepicker_default.a, {
                className: mainStyles_module_default.a.dateBorder,
                selected: startDate,
                onChange: onFormSubmit,
                name: "date",
                dateFormat: "yyyy/MM/dd"
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Table_default.a, {
      className: mainStyles_module_default.a.bigTable,
      responsive: true,
      bordered: true,
      hover: true,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("thead", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            children: "Departure Time"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            children: "Arrival Time"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            children: "Price"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            children: "Origin"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            children: "Destination"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
        children: departuresFetch === null || departuresFetch === void 0 ? void 0 : departuresFetch.map((depart, i) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_moment_default.a, {
              format: "MMMM Do YYYY, h:mm:ss a",
              date: depart.departure_time
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_moment_default.a, {
              format: "MMMM Do YYYY, h:mm:ss a",
              date: depart.arrival_time
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
            children: [depart.prices.total, " ", depart.prices.currency]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: oneFetch.cities[0].short_name
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: oneFetch.cities[1].short_name
          })]
        }, i))
      })]
    })]
  });
}

/* harmony default export */ var table = (ResultTable);
// CONCATENATED MODULE: ./components/hero.js








function Hero() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: mainStyles_module_default.a.heroStyle,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: mainStyles_module_default.a.overlay,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: mainStyles_module_default.a.containerStyle,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "OSHEAGA"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Festival Musique et Arts"
        })]
      })
    })
  });
}

/* harmony default export */ var hero = (Hero);
// CONCATENATED MODULE: ./pages/index.js







function Index() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Busbud Challenge - Home"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(container, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(hero, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(table, {})]
    })]
  });
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "TXK0":
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "flur":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "lFrT":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "siz1":
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),

/***/ "tfHl":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "vDuQ":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "vVTy":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });