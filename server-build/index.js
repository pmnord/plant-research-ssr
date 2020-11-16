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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_App_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/App.js */ \"./src/App.js\");\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst PORT = process.env.PORT || 3000;\napp.get(\"/\", (req, res) => {\n  const reactApp = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n    location: req.url,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_App_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(\"./build/index.html\");\n  fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFile(indexFile, \"utf8\", (err, data) => {\n    if (err) {\n      console.error(\"Error at readFile: \", err);\n      return res.status(500).send(\"Something went wrong\");\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${reactApp}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"./build\"));\napp.listen(PORT, () => {\n  console.log(`Server listening on port ${PORT}`);\n  console.log(\"-------------------------------------------------------\\n| View your SSR React app at \", \"\\x1b[36m\", `http://localhost:${PORT}`, \"\\x1b[0m\", \"|\\n-------------------------------------------------------\");\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer/Footer */ \"./src/components/Footer/Footer.js\");\n/* harmony import */ var _pages_PlantSearchPage_PlantSearchPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/PlantSearchPage/PlantSearchPage */ \"./src/pages/PlantSearchPage/PlantSearchPage.js\");\n/* harmony import */ var _pages_PlantDetailsPage_PlantDetailsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/PlantDetailsPage/PlantDetailsPage */ \"./src/pages/PlantDetailsPage/PlantDetailsPage.js\");\n/* harmony import */ var _pages_CollectionPage_CollectionPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/CollectionPage/CollectionPage */ \"./src/pages/CollectionPage/CollectionPage.js\");\n/* harmony import */ var _pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/LoginPage/LoginPage */ \"./src/pages/LoginPage/LoginPage.js\");\n/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/HomePage/HomePage */ \"./src/pages/HomePage/HomePage.js\");\n/* harmony import */ var _components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ErrorBoundary/ErrorBoundary */ \"./src/components/ErrorBoundary/ErrorBoundary.js\");\n/* harmony import */ var _routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/PrivateRoute */ \"./src/routes/PrivateRoute.js\");\n/* harmony import */ var _routes_PublicOnlyRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/PublicOnlyRoute */ \"./src/routes/PublicOnlyRoute.js\");\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/tokenService */ \"./src/services/tokenService.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"updateLoggedIn\", username => {\n      this.setState({\n        loggedIn: _services_tokenService__WEBPACK_IMPORTED_MODULE_12__[\"default\"].hasToken(),\n        username\n      });\n    });\n\n    this.state = {\n      loggedIn: _services_tokenService__WEBPACK_IMPORTED_MODULE_12__[\"default\"].hasToken(),\n      username: null\n    };\n  } // Keeps the Header component in sync with whether the user is logged in or not for conditional rendering purposes\n\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"app\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      username: this.state.username,\n      handleLogout: this.updateLoggedIn\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n      className: \"main\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_PublicOnlyRoute__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      exact: true,\n      path: '/',\n      component: router => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        updateLoggedIn: this.updateLoggedIn,\n        router: router\n      })\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_PublicOnlyRoute__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      exact: true,\n      path: '/login',\n      component: router => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        updateLoggedIn: this.updateLoggedIn,\n        router: router\n      })\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      path: '/collection',\n      component: router => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_CollectionPage_CollectionPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        router: router\n      })\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      exact: true,\n      path: '/plant',\n      component: _pages_PlantSearchPage_PlantSearchPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      path: '/plant/:plant_id',\n      component: router => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_PlantDetailsPage_PlantDetailsPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        router: router\n      })\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/ErrorBoundary/ErrorBoundary.css":
/*!********************************************************!*\
  !*** ./src/components/ErrorBoundary/ErrorBoundary.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f1130068a1125bfe198b9e0691fe9115.css\");\n\n//# sourceURL=webpack:///./src/components/ErrorBoundary/ErrorBoundary.css?");

/***/ }),

/***/ "./src/components/ErrorBoundary/ErrorBoundary.js":
/*!*******************************************************!*\
  !*** ./src/components/ErrorBoundary/ErrorBoundary.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ErrorBoundary_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorBoundary.css */ \"./src/components/ErrorBoundary/ErrorBoundary.css\");\n\n\n/* Any class component with a componentDidCatch() lifecycle method\r\n   or static getDerivedStateFromError() can act as an error boundary. */\n\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      hasError: false\n    };\n  }\n\n  static getDerivedStateFromError(error) {\n    return {\n      hasError: true\n    };\n  }\n\n  render() {\n    const koalaPuns = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"(not exactly a \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, \"koalaty\"), \" user experience, sorry!)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"(hopefully this doesn't reflect poorly on my \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, \"koalafications\"), \"...)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"(looks like I need to have a chat with \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, \"koalaty\"), \" assurance)\")];\n\n    const getKoalaPun = () => {\n      return koalaPuns[Math.floor(Math.random() * koalaPuns.length)];\n    };\n\n    if (this.state.hasError) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"error-boundary\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Whoops! Something went wrong.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"koala\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"koala__ear koala__ear--1\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"koala__ear koala__ear--2\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"koala__eye koala__eye--1\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"koala__eye koala__eye--2\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"koala__nose\"\n      })), getKoalaPun());\n    }\n\n    return this.props.children || null;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorBoundary);\n\n//# sourceURL=webpack:///./src/components/ErrorBoundary/ErrorBoundary.js?");

/***/ }),

/***/ "./src/components/Footer/Footer.css":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"aaae5f87e8f8f364dcfe744fe7249e10.css\");\n\n//# sourceURL=webpack:///./src/components/Footer/Footer.css?");

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.css */ \"./src/components/Footer/Footer.css\");\n\n\n\nconst Footer = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    className: \"footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Images generously provided by\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    rel: \"noopener noreferrer\",\n    target: \"_blank\",\n    href: \"https://commons.wikimedia.org/wiki/Main_Page\"\n  }, \"Wikimedia Commons\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Plant data provided by\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://trefle.io/\",\n    rel: \"noopener noreferrer\",\n    target: \"_blank\"\n  }, \"Trefle.io\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__source\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"source__a\",\n    href: \"https://github.com/pmnord/plant-management-react-capstone-client\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"source__p\"\n  }, \"View Source on \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    viewBox: \"0 0 1000 410\",\n    className: \"source__svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    fill: \"#000000\",\n    d: \"M 162.04866,312.61839 C 114.72712,307.1224 88.775546,281.49326 80.153378,231.74064 78.083243,219.79532 77.810223,183.41458 79.691759,170.22875 86.832462,120.1866 109.01093,92.964154 149.87496,84.084044 c 11.69303,-2.541 44.9388,-2.50377 59.5,0.0666 11.46369,2.02361 23.93027,5.87496 27.32455,8.44148 l 2.32455,1.75767 -4.20025,17.939466 c -2.31013,9.8667 -4.76288,18.54259 -5.45055,19.27975 -1.04084,1.11575 -2.9883,0.89222 -11.6243,-1.33424 -12.67337,-3.26733 -36.83024,-4.53929 -48.57268,-2.55756 -20.42326,3.44677 -33.64252,16.45239 -39.34544,38.70956 -4.4911,17.52776 -4.47565,47.16982 0.0338,64.80155 3.65145,14.27705 11.76157,26.36749 21.53498,32.10404 7.53782,4.42434 15.45903,5.73464 31.56256,5.22094 8.02296,-0.25593 15.11046,-0.78871 15.75,-1.18397 0.82654,-0.51084 1.16278,-7.06316 1.16278,-22.65963 v -21.94098 h -14.96482 c -13.77182,0 -15.04734,-0.1542 -16,-1.93426 -0.60042,-1.12189 -1.03518,-9.28164 -1.03518,-19.42857 0,-14.57059 0.26262,-17.75694 1.57143,-19.06574 1.37116,-1.37116 6.22243,-1.57143 38.06574,-1.57143 23.24411,0 37.1966,0.37585 38.42857,1.03518 1.8773,1.0047 1.93426,2.6986 1.93426,57.52203 v 56.48684 l -4.70711,2.98516 c -18.14309,11.50601 -51.8307,17.26204 -81.11919,13.86043 z m 519.8263,0.46067 c -13.83186,-1.85553 -23.70341,-6.00109 -30.5186,-12.81628 -5.37862,-5.37862 -8.04422,-10.50475 -10.54301,-20.27492 -1.80401,-7.05361 -1.93839,-11.4428 -1.93839,-63.31208 0,-49.89876 0.16559,-55.79659 1.58179,-56.34004 2.28282,-0.876 42.69398,-0.71898 44.09376,0.17133 0.86819,0.5522 1.26038,13.94786 1.5,51.23468 0.30935,48.13756 0.41752,50.67253 2.32445,54.4738 1.1,2.19275 3.575,5.04619 5.5,6.341 3.18967,2.14545 4.34232,2.32117 13,1.98182 8.11997,-0.31827 10.48054,-0.83229 16.25,-3.53845 l 6.75,-3.16609 v -52.85254 c 0,-39.7742 0.29694,-53.14948 1.2,-54.05254 1.69877,-1.69877 42.90123,-1.69877 44.6,0 1.73649,1.73649 1.73649,145.86351 0,147.6 -0.81679,0.81679 -5.58413,1.2 -14.92857,1.2 -15.42876,0 -16.87143,-0.56192 -16.87143,-6.57143 0,-1.88571 -0.25157,-3.42857 -0.55904,-3.42857 -0.30748,0 -4.24498,1.77625 -8.75,3.94723 -12.95914,6.24502 -24.24966,9.09501 -37.69096,9.51407 -6.325,0.19719 -13.075,0.14724 -15,-0.11099 z m 192.5,0.0425 c -14.15652,-2.08192 -28.74737,-7.29313 -36.08044,-12.88633 -3.54982,-2.70758 -4.40393,-2.06716 -4.43487,3.32535 -0.0311,5.4246 -0.66084,5.64243 -17.30654,5.98657 -13.21833,0.27328 -15.63075,0.0862 -17.03836,-1.32143 -1.49926,-1.49929 -1.63979,-10.79766 -1.63979,-108.49697 0,-95.80952 0.16246,-107.019606 1.57143,-108.428566 1.32633,-1.32634 4.76788,-1.57143 22.06574,-1.57143 12.2149,0 21.27573,0.4182 22.42857,1.03518 1.85806,0.9944 1.93426,2.47176 1.93426,37.499996 0,20.05565 0.16901,36.46482 0.37557,36.46482 0.20656,0 2.96793,-1.14647 6.13638,-2.5477 13.93903,-6.1645 35.69221,-8.34774 49.02795,-4.92064 31.11955,7.99729 44.73929,40.53762 39.36238,94.04466 -3.55075,35.33443 -15.53191,53.92318 -38.63548,59.94291 -5.92723,1.54436 -22.43244,2.65803 -27.7668,1.87354 z m 8.53811,-40.64281 c 3.5363,-1.78325 5.02688,-3.39094 7.18546,-7.75 3.51703,-7.10231 5.1986,-20.62804 4.47565,-36 -0.85844,-18.25298 -4.73363,-27.84538 -13.03343,-32.26209 -7.44903,-3.96397 -22.93176,-2.62949 -33.91579,2.92325 l -2.75,1.3902 v 33.85118 33.85117 l 4.94528,2.1274 c 7.08304,3.04705 11.47726,3.90452 20.59283,4.01844 6.48184,0.081 8.90198,-0.33518 12.5,-2.14955 z m -489.63631,38.76427 c -7.83285,-1.70412 -15.42939,-5.57674 -20.9854,-10.69809 -5.26263,-4.85093 -7.71414,-8.64091 -10.65025,-16.46509 -2.08568,-5.55792 -2.22251,-7.83021 -2.73092,-45.35109 l -0.53523,-39.5 -12,-0.5 -12,-0.5 -0.27772,-14.92228 c -0.15954,-8.57232 0.12953,-15.32953 0.6793,-15.8793 0.52637,-0.52637 6.05134,-2.15182 12.27772,-3.61213 l 11.3207,-2.6551 0.27048,-21.41924 c 0.19705,-15.60436 0.60427,-21.63127 1.5,-22.20028 1.43805,-0.91351 40.81378,-1.1003 43.14773,-0.20468 1.37246,0.52666 1.58179,3.36866 1.58179,21.47582 v 20.86883 l 16.75,0.27418 16.75,0.27418 v 19 19 l -16.5,0.5 -16.5,0.5 v 32.67837 c 0,37.14542 -0.22225,36.09097 8.55854,40.60479 3.80795,1.9575 5.81774,2.26109 14.09033,2.12848 5.30688,-0.0851 10.14438,0.15157 10.75,0.52586 1.70465,1.05353 1.49781,31.9884 -0.22344,33.4169 -4.51595,3.74791 -32.66978,5.40198 -45.27363,2.65987 z m 68.3482,-2.59437 c -1.64956,-0.96078 -1.75,-7.21306 -1.75,-108.93441 0,-105.669056 0.0403,-107.936666 1.93426,-108.950306 2.57685,-1.37909 40.55463,-1.37909 43.13148,0 1.86281,0.99695 1.93426,2.51142 1.93426,40.999996 v 39.96482 h 32 32 v -39.96482 c 0,-38.488576 0.0715,-40.003046 1.93426,-40.999996 2.45275,-1.31267 41.99833,-1.36324 44.06574,-0.0563 1.31823,0.83331 1.5,14.044416 1.5,109.021166 0,94.97675 -0.18177,108.18785 -1.5,109.02116 -2.06741,1.3069 -41.61299,1.25633 -44.06574,-0.0563 -1.86974,-1.0007 -1.93426,-2.5851 -1.93426,-47.50004 V 214.7288 h -32 -32 v 46.46482 c 0,44.91494 -0.0645,46.49934 -1.93426,47.5 -2.55103,1.36527 -40.96298,1.32544 -43.31574,-0.0449 z m -189.55,-1.1199 c -1.73639,-1.73639 -1.73639,-144.86361 0,-146.6 0.85982,-0.85982 7.36996,-1.2 22.96482,-1.2 20.49478,0 21.82522,0.11287 22.8,1.93426 0.68555,1.28096 1.03518,25.79002 1.03518,72.56574 0,46.77572 -0.34963,71.28478 -1.03518,72.56574 -0.97478,1.82139 -2.30522,1.93426 -22.8,1.93426 -15.59486,0 -22.105,-0.34018 -22.96482,-1.2 z m 15.79353,-160.73434 c -10.54946,-3.209 -17.72931,-12.06024 -18.7294,-23.0894 -2.29065,-25.261726 28.76161,-38.522696 45.54859,-19.45168 4.48287,5.0928 6.18728,10.01644 6.18728,17.87356 0,10.21118 -4.83257,17.86298 -14.25531,22.57158 -6.20523,3.10079 -12.96414,3.85627 -18.75116,2.09594 z\"\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Footer/Footer.js?");

/***/ }),

/***/ "./src/components/Header/Header.css":
/*!******************************************!*\
  !*** ./src/components/Header/Header.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"edb48d21b9005349aeadfc3c834cb429.css\");\n\n//# sourceURL=webpack:///./src/components/Header/Header.css?");

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tokenService */ \"./src/services/tokenService.js\");\n/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.css */ \"./src/components/Header/Header.css\");\n\n\n\n\n\nconst Header = props => {\n  const handleLogoutclick = () => {\n    _services_tokenService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearToken();\n    props.handleLogout();\n  };\n\n  const renderLoginButton = () => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/login\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\"\n    }, \"Log In\")));\n  };\n\n  const renderLogoutButton = () => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\",\n      onClick: handleLogoutclick\n    }, \"Log Out\")));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"header__nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Plant Researcher\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header__right\"\n  }, props.username && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Welcome, \", props.username, \"!\"), _services_tokenService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasToken() ? renderLogoutButton() : renderLoginButton())));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Header/Header.js?");

/***/ }),

/***/ "./src/components/LoginForm/LoginForm.css":
/*!************************************************!*\
  !*** ./src/components/LoginForm/LoginForm.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2d6d68097853c5607cfbe4e246751655.css\");\n\n//# sourceURL=webpack:///./src/components/LoginForm/LoginForm.css?");

/***/ }),

/***/ "./src/components/LoginForm/LoginForm.js":
/*!***********************************************!*\
  !*** ./src/components/LoginForm/LoginForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_apiService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/apiService.js */ \"./src/services/apiService.js\");\n/* harmony import */ var _services_tokenService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tokenService.js */ \"./src/services/tokenService.js\");\n/* harmony import */ var _LoginForm_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginForm.css */ \"./src/components/LoginForm/LoginForm.css\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // Handles log in functionality\n\nclass LoginForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleLoginSubmit\", e => {\n      e.preventDefault();\n      this.setState({\n        error: null,\n        submitting: true\n      });\n      const username = e.target.username.value;\n      const password = e.target.password.value;\n      e.target.username.value = \"\";\n      e.target.password.value = \"\";\n      _services_apiService_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].logInUser(username, password).then(res => {\n        _services_tokenService_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setToken(res.authToken); // The server provides a JWT auth token\n\n        this.props.updateLoggedIn(username);\n        this.props.router.history.push(`/collection`);\n      }).catch(err => {\n        this.setState({\n          error: err.error || \"Unable to log in at this time\",\n          submitting: false\n        });\n      });\n    });\n\n    this.state = {\n      submitting: false,\n      error: null\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      className: \"login\",\n      onSubmit: this.handleLoginSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Log In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"username\"\n    }, \"Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"basic-input\",\n      type: \"text\",\n      name: \"username\",\n      required: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"password\"\n    }, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"basic-input\",\n      type: \"password\",\n      name: \"password\",\n      required: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\",\n      disabled: this.state.submitting\n    }, this.state.submitting ? \"Loading...\" : \"Submit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"error\"\n    }, this.state.error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      style: {\n        fontSize: \"0.8rem\",\n        color: \" hsla(0, 0%, 40%)\",\n        textAlign: \"center\"\n      }\n    }, \"* To demo the app, use the credentials: demo/password\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\n//# sourceURL=webpack:///./src/components/LoginForm/LoginForm.js?");

/***/ }),

/***/ "./src/components/ModalImage/ModalImage.css":
/*!**************************************************!*\
  !*** ./src/components/ModalImage/ModalImage.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1aad8153a3a7cd09ea32c4dbfc815f0f.css\");\n\n//# sourceURL=webpack:///./src/components/ModalImage/ModalImage.css?");

/***/ }),

/***/ "./src/components/ModalImage/ModalImage.js":
/*!*************************************************!*\
  !*** ./src/components/ModalImage/ModalImage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ModalImage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalImage.css */ \"./src/components/ModalImage/ModalImage.css\");\n\n\n\nconst ModalImage = ({\n  src,\n  alt,\n  exitModal\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"ModalImage\",\n    onClick: exitModal\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"ModalImage__img\",\n    src: src,\n    alt: alt\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalImage);\n\n//# sourceURL=webpack:///./src/components/ModalImage/ModalImage.js?");

/***/ }),

/***/ "./src/components/PlantCard/PlantCard.css":
/*!************************************************!*\
  !*** ./src/components/PlantCard/PlantCard.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6b7242758ee4898cf0f061f4c5ebec89.css\");\n\n//# sourceURL=webpack:///./src/components/PlantCard/PlantCard.css?");

/***/ }),

/***/ "./src/components/PlantCard/PlantCard.js":
/*!***********************************************!*\
  !*** ./src/components/PlantCard/PlantCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlantCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tokenService */ \"./src/services/tokenService.js\");\n/* harmony import */ var _PlantCard_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlantCard.css */ \"./src/components/PlantCard/PlantCard.css\");\n\n\n\n // Represents a Plant in the User's collection and provides interactions\n\nfunction PlantCard(props) {\n  function handleDelete(plant_id) {\n    return fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/garden/${plant_id}`, {\n      method: \"DELETE\",\n      headers: {\n        \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY,\n        Authorization: `Bearer ${_services_tokenService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getToken()}`\n      }\n    }).then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : props.deletePlant(plant_id)).catch(err => console.log(err));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"plant-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"plant-card__header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"plant-card__title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, props.plant.scientific_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: props.plant.image,\n    alt: `${props.plant.scientific_name}`\n  }), props.plant.common_name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"'\", props.plant.common_name, \"'\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: `plant-card__note__${props.idx}`,\n    className: \"hidden\"\n  }, \"Plant Notes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    id: `plant-card__note__${props.idx}`,\n    name: `plant-card__note__${props.idx}`,\n    placeholder: \"Leave notes here\",\n    value: props.plant.note // Updates on Blur, which will fire if a user clicks out or refreshes or navigates away\n    ,\n    onBlur: e => props.updateDbNote(e, props.plant.instance_id),\n    onChange: e => props.updateNote(e, props.idx)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"PlantCard__buttons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn\",\n    onClick: () => props.push(`/plant/${props.plant.trefle_id}`)\n  }, \"Details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn plant-card__btn--delete\",\n    onClick: () => handleDelete(props.plant.instance_id)\n  }, \"Delete\")));\n}\n\n//# sourceURL=webpack:///./src/components/PlantCard/PlantCard.js?");

/***/ }),

/***/ "./src/components/PlantSearchListItem/PlantSearchListItem.css":
/*!********************************************************************!*\
  !*** ./src/components/PlantSearchListItem/PlantSearchListItem.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"602a2475690f7d367dd260b02bd45a57.css\");\n\n//# sourceURL=webpack:///./src/components/PlantSearchListItem/PlantSearchListItem.css?");

/***/ }),

/***/ "./src/components/PlantSearchListItem/PlantSearchListItem.js":
/*!*******************************************************************!*\
  !*** ./src/components/PlantSearchListItem/PlantSearchListItem.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlantSearchListItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tokenService */ \"./src/services/tokenService.js\");\n/* harmony import */ var _PlantSearchListItem_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlantSearchListItem.css */ \"./src/components/PlantSearchListItem/PlantSearchListItem.css\");\n\n\n\n\n // List Item representing a search result when a user searches for plants in the Trefle database\n\nfunction PlantSearchListItem(props) {\n  function handleAddPlant() {\n    return fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].API_ENDPOINT}/garden`, {\n      method: \"POST\",\n      headers: {\n        \"content-type\": \"application/json\",\n        \"api-key\": _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].API_KEY,\n        Authorization: `Bearer ${_services_tokenService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getToken()}`\n      },\n      body: JSON.stringify({\n        trefle_id: props.trefle_id,\n        scientific_name: props.scientific_name,\n        common_name: props.common_name,\n        image: props.image_url,\n        family: props.family,\n        family_common_name: props.family_common_name,\n        genus: props.genus\n      })\n    }).then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : props.push(\"/collection\")).catch(res => console.log(res.error));\n  }\n\n  function capitalize(str) {\n    return str.split(\" \").map(word => word[0].toUpperCase() + word.slice(1)).join(\" \");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"plant-search__list-item PlantSearchListItem\"\n  }, props.image_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"PlantSearchListItem__img\",\n    src: props.image_url,\n    alt: props.scientific_name\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Image not available\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"plant-search__plant-names\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, props.scientific_name)), props.common_name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"'\", capitalize(props.common_name), \"'\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.family), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.family_common_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"plant-search__list-item__buttons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: `/plant/${props.trefle_id}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn\"\n  }, \"See Details\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn\",\n    onClick: handleAddPlant\n  }, \"Add to Collection\")));\n}\n\n//# sourceURL=webpack:///./src/components/PlantSearchListItem/PlantSearchListItem.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/RegistrationForm.css":
/*!**************************************************************!*\
  !*** ./src/components/RegistrationForm/RegistrationForm.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2262982e909422d08a54cd94675ed9c2.css\");\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/RegistrationForm.css?");

/***/ }),

/***/ "./src/components/RegistrationForm/RegistrationForm.js":
/*!*************************************************************!*\
  !*** ./src/components/RegistrationForm/RegistrationForm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RegistrationForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _RegistrationForm_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrationForm.css */ \"./src/components/RegistrationForm/RegistrationForm.css\");\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tokenService */ \"./src/services/tokenService.js\");\n/* harmony import */ var _Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tooltip/Tooltip */ \"./src/components/Tooltip/Tooltip.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n // Handles new user registration\n\nclass RegistrationForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleFormSubmit\", e => {\n      e.preventDefault();\n      this.setState({\n        error: null,\n        submitting: true\n      });\n\n      if (this.state.password !== this.state.passwordConfirmation) {\n        this.setState({\n          error: \"Passwords do not match\",\n          submitting: false\n        });\n        return;\n      }\n\n      const {\n        username,\n        password\n      } = e.target;\n      const newUser = {\n        username: username.value,\n        password: password.value,\n        email: \"\"\n      };\n      fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/user`, {\n        method: \"POST\",\n        headers: {\n          \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY,\n          \"content-type\": \"application/json\"\n        },\n        body: JSON.stringify(newUser)\n      }).then(res => {\n        if (!res.ok) {\n          return res.json().then(err => Promise.reject(err));\n        }\n\n        return res.json();\n      }).then(resJson => {\n        username.value = \"\";\n        password.value = \"\";\n        return this.onRegistrationSuccess(newUser);\n      }).catch(err => {\n        console.log(err);\n        this.setState({\n          error: err.error || \"Unable to register at this time\",\n          submitting: false\n        });\n      });\n    });\n\n    _defineProperty(this, \"onRegistrationSuccess\", newUser => {\n      const credentials = {\n        username: newUser.username,\n        password: newUser.password\n      };\n      fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/auth/login`, {\n        method: \"POST\",\n        headers: {\n          \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY,\n          \"content-type\": \"application/json\"\n        },\n        body: JSON.stringify(credentials)\n      }).then(res => {\n        if (!res.ok) return res.json().then(err => Promise.reject(err));\n        return res.json();\n      }).then(res => {\n        _services_tokenService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setToken(res.authToken);\n        this.props.updateLoggedIn();\n        this.props.router.history.push(`/collection`);\n      }).catch(err => {\n        this.setState({\n          error: err.error || \"Unable to register at this time\",\n          submitting: false\n        });\n      });\n    });\n\n    _defineProperty(this, \"updateFormValue\", (input, value) => {\n      this.setState({\n        [input]: value\n      });\n    });\n\n    this.state = {\n      username: \"\",\n      password: \"\",\n      passwordConfirmation: \"\",\n      submitting: false,\n      error: null\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      className: \"registration__form\",\n      onSubmit: this.handleFormSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Create an Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"username\"\n    }, \"Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"basic-input\",\n      type: \"text\",\n      name: \"username\",\n      required: true,\n      value: this.state.username,\n      onChange: e => this.updateFormValue(e.target.name, e.target.value)\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"password\"\n    }, \"Password\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      content: \"Passwords are stored encrypted and never visible to FancyPlants\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      role: \"img\",\n      \"aria-label\": \"password tooltip\"\n    }, \"\\uD83D\\uDCAC\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"basic-input\",\n      type: \"password\",\n      name: \"password\",\n      minLength: \"6\",\n      required: true,\n      value: this.state.password,\n      onChange: e => this.updateFormValue(e.target.name, e.target.value)\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"password-confirmation\"\n    }, \"Confirm Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"basic-input\",\n      type: \"password\",\n      name: \"password-confirmation\",\n      minLength: \"6\",\n      required: true,\n      value: this.state.passwordConfirmation,\n      onChange: e => this.updateFormValue(\"passwordConfirmation\", e.target.value)\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\",\n      disabled: this.state.submitting\n    }, this.state.submitting ? \"Loading...\" : \"Register\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"error\"\n    }, this.state.error));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/RegistrationForm.js?");

/***/ }),

/***/ "./src/components/TabBar/TabBar.css":
/*!******************************************!*\
  !*** ./src/components/TabBar/TabBar.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2fd92d313c336036469c731cdb7741ee.css\");\n\n//# sourceURL=webpack:///./src/components/TabBar/TabBar.css?");

/***/ }),

/***/ "./src/components/TabBar/TabBar.js":
/*!*****************************************!*\
  !*** ./src/components/TabBar/TabBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TabBar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabBar.css */ \"./src/components/TabBar/TabBar.css\");\n\n\n\n\nconst TabBar = ({\n  children,\n  location\n}) => {\n  const path = location.pathname;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tab-bar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/collection\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"tab-bar__tab tab-bar__tab--first\",\n    disabled: path === '/collection'\n  }, \"Collection\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/plant\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"tab-bar__tab\",\n    disabled: path === '/plant'\n  }, \"Plant Search\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tab-bar__filler\"\n  }), children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(TabBar));\n\n//# sourceURL=webpack:///./src/components/TabBar/TabBar.js?");

/***/ }),

/***/ "./src/components/Tooltip/Tooltip.css":
/*!********************************************!*\
  !*** ./src/components/Tooltip/Tooltip.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"565b0eb0894766699217ad32443c5e8b.css\");\n\n//# sourceURL=webpack:///./src/components/Tooltip/Tooltip.css?");

/***/ }),

/***/ "./src/components/Tooltip/Tooltip.js":
/*!*******************************************!*\
  !*** ./src/components/Tooltip/Tooltip.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Tooltip_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.css */ \"./src/components/Tooltip/Tooltip.css\");\n\n\n\nconst Tooltip = ({\n  children,\n  content\n}) => {\n  const [showTooltip, setShowTooltip] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onMouseEnter: () => setShowTooltip(true),\n    onMouseLeave: () => setShowTooltip(false),\n    className: \"tooltip\"\n  }, children, showTooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tooltip__box\"\n  }, content));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tooltip);\n\n//# sourceURL=webpack:///./src/components/Tooltip/Tooltip.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n  API_ENDPOINT: process.env.REACT_APP_ENVIRONMENT === \"development\" ? \"http://localhost:8000/api\" : process.env.REACT_APP_API_ENDPOINT,\n  API_KEY: process.env.REACT_APP_API_KEY,\n  TREFLE_API_KEY: process.env.TREFLE_API_KEY,\n  TOKEN_KEY: \"Authorization\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/pages/CollectionPage/CollectionPage.css":
/*!*****************************************************!*\
  !*** ./src/pages/CollectionPage/CollectionPage.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d1a03334e3d634d36678bb0269ceadbe.css\");\n\n//# sourceURL=webpack:///./src/pages/CollectionPage/CollectionPage.css?");

/***/ }),

/***/ "./src/pages/CollectionPage/CollectionPage.js":
/*!****************************************************!*\
  !*** ./src/pages/CollectionPage/CollectionPage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/apiService */ \"./src/services/apiService.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CollectionPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CollectionPage.css */ \"./src/pages/CollectionPage/CollectionPage.css\");\n/* harmony import */ var _components_PlantCard_PlantCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PlantCard/PlantCard */ \"./src/components/PlantCard/PlantCard.js\");\n/* harmony import */ var _components_TabBar_TabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TabBar/TabBar */ \"./src/components/TabBar/TabBar.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n // The Collection page renders a grid of a user's plants and provides ways to interact with those plants\n// It represents the current state of a user's plant collection in the database\n\nclass Collection extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"componentDidMount\", () => {\n      this._isMounted = true;\n      this._isMounted && _services_apiService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getUserPlants().then(plants => this._isMounted && this.setState({\n        plants: plants,\n        plantsCache: plants\n      })).catch(err => this._isMounted && this.setState({\n        error: err\n      }));\n    });\n\n    _defineProperty(this, \"componentWillUnmount\", () => {\n      this._isMounted = false;\n    });\n\n    _defineProperty(this, \"updateNote\", (e, idx) => {\n      const newValue = e.target.value;\n      const newState = {\n        plants: [...this.state.plants]\n      };\n      newState.plants[idx].note = newValue;\n      this.setState(newState);\n    });\n\n    _defineProperty(this, \"updateDbNote\", (e, instance_id) => {\n      const updateValues = {\n        note: e.target.value\n      };\n      _services_apiService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updatePlantInstance(instance_id, updateValues);\n    });\n\n    _defineProperty(this, \"updateWatered\", idx => {\n      const newState = {\n        plants: [...this.state.plants]\n      };\n      newState.plants[idx].watered_date = moment__WEBPACK_IMPORTED_MODULE_2___default()().format(\"MMMM Do h:mm a\");\n      const newWateredDate = newState.plants[idx].watered_date;\n      const plantInstanceId = newState.plants[idx].instance_id;\n      const updateValues = {\n        watered_date: newWateredDate\n      };\n      this.setState(newState);\n      /* It might be better to update the component state only once the API call goes through,\r\n          but it would also create lag time between when the user clicks the button and when the value\r\n          updates */\n\n      _services_apiService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updatePlantInstance(plantInstanceId, updateValues);\n    });\n\n    _defineProperty(this, \"addPlant\", newPlant => {\n      const newPlants = [...this.state.plants];\n      newPlants.push(newPlant);\n      const newState = {\n        plants: newPlants\n      };\n      this.setState(newState);\n    });\n\n    _defineProperty(this, \"deletePlant\", instanceId => {\n      const plants = this.state.plants.filter(plant => plant.instance_id !== instanceId);\n      this.setState({\n        plants\n      });\n    });\n\n    _defineProperty(this, \"filterPlants\", e => {\n      const query = e.target.value.toLowerCase();\n      const filteredPlants = this.state.plantsCache.filter(plant => plant.scientific_name.toLowerCase().includes(query) ? true : plant.common_name ? plant.common_name.toLowerCase().includes(query) : false);\n      this.setState({\n        plants: filteredPlants\n      });\n    });\n\n    this.state = {\n      error: null,\n      plants: [],\n      plantsCache: []\n    };\n    this._isMounted = false;\n  } // Retrieve a user's plants and set them in the component state\n\n\n  render() {\n    const {\n      plants = []\n    } = this.state;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"garden\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TabBar_TabBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"garden-filter\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"garden-filter__input\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Filter:\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"garden-filter__input\",\n      name: \"garden-filter__input\",\n      className: \"garden-filter__input\",\n      type: \"text\",\n      onChange: this.filterPlants\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"plant-grid\"\n    }, plants.map((plant, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PlantCard_PlantCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: idx,\n      plant: plant,\n      updateNote: this.updateNote,\n      updateDbNote: this.updateDbNote,\n      updateWatered: this.updateWatered,\n      deletePlant: instanceId => this.deletePlant(instanceId),\n      idx: idx,\n      push: path => this.props.router.history.push(path)\n    }))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Collection);\n\n//# sourceURL=webpack:///./src/pages/CollectionPage/CollectionPage.js?");

/***/ }),

/***/ "./src/pages/HomePage/HomePage.css":
/*!*****************************************!*\
  !*** ./src/pages/HomePage/HomePage.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a98eefdee52f91b7c5ee3dd3b26e69e3.css\");\n\n//# sourceURL=webpack:///./src/pages/HomePage/HomePage.css?");

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomeRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_apiService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/apiService.js */ \"./src/services/apiService.js\");\n/* harmony import */ var _services_tokenService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tokenService.js */ \"./src/services/tokenService.js\");\n/* harmony import */ var _HomePage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage.css */ \"./src/pages/HomePage/HomePage.css\");\n/* harmony import */ var _components_RegistrationForm_RegistrationForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/RegistrationForm/RegistrationForm */ \"./src/components/RegistrationForm/RegistrationForm.js\");\n/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LoginForm/LoginForm */ \"./src/components/LoginForm/LoginForm.js\");\n\n\n\n\n\n // Homepage consisting of the pitch, the Registration component and Login component\n\nfunction HomeRoute(props) {\n  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const logInAsDemo = () => {\n    _services_apiService_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].logInUser('demo', 'password').then(res => {\n      _services_tokenService_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setToken(res.authToken); // The server provides a JWT auth token\n\n      props.updateLoggedIn('demo');\n      props.router.history.push(`/collection`);\n    }).catch(err => {\n      err.error ? setError(err.error) : setError('Unable to log in at this time');\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"HomeRoute\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"HomeRoute__pitch\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Plant Researcher exposes data from the Trefle.io database, one of the world's largest botanical databases.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Explore plant species, curate a personal collection, and annotate your collection. Plant Researcher empowers you to quickly gather a collection of data on the species that interest you.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn\",\n    onClick: logInAsDemo\n  }, \"Click Here to access the demo account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"error\"\n  }, error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"HomeRoute__authentication\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RegistrationForm_RegistrationForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    updateLoggedIn: props.updateLoggedIn,\n    router: props.router\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    updateLoggedIn: props.updateLoggedIn,\n    router: props.router\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/HomePage/HomePage.js?");

/***/ }),

/***/ "./src/pages/LoginPage/LoginPage.css":
/*!*******************************************!*\
  !*** ./src/pages/LoginPage/LoginPage.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4c10e422768f8c497edd52eb650d1e7a.css\");\n\n//# sourceURL=webpack:///./src/pages/LoginPage/LoginPage.css?");

/***/ }),

/***/ "./src/pages/LoginPage/LoginPage.js":
/*!******************************************!*\
  !*** ./src/pages/LoginPage/LoginPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoginRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LoginPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginPage.css */ \"./src/pages/LoginPage/LoginPage.css\");\n/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LoginForm/LoginForm */ \"./src/components/LoginForm/LoginForm.js\");\n\n\n // Simple page consisting of the Login component\n// Mainly used to redirect users to when they do not have a valid token\n\nfunction LoginRoute(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"LoginRoute\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    updateLoggedIn: props.updateLoggedIn,\n    router: props.router\n  }));\n}\n\n//# sourceURL=webpack:///./src/pages/LoginPage/LoginPage.js?");

/***/ }),

/***/ "./src/pages/PlantDetailsPage/PlantDetailsPage.css":
/*!*********************************************************!*\
  !*** ./src/pages/PlantDetailsPage/PlantDetailsPage.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e9f1cc9b6bc5f07529d2897c5f0d8bf9.css\");\n\n//# sourceURL=webpack:///./src/pages/PlantDetailsPage/PlantDetailsPage.css?");

/***/ }),

/***/ "./src/pages/PlantDetailsPage/PlantDetailsPage.js":
/*!********************************************************!*\
  !*** ./src/pages/PlantDetailsPage/PlantDetailsPage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlantDetails; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _services_tokenService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tokenService.js */ \"./src/services/tokenService.js\");\n/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xss */ \"xss\");\n/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _PlantDetailsPage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlantDetailsPage.css */ \"./src/pages/PlantDetailsPage/PlantDetailsPage.css\");\n/* harmony import */ var _components_TabBar_TabBar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TabBar/TabBar.js */ \"./src/components/TabBar/TabBar.js\");\n/* harmony import */ var _components_ModalImage_ModalImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ModalImage/ModalImage.js */ \"./src/components/ModalImage/ModalImage.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n/* Provides images and data about a specific plant from the Trefle API.\r\n\r\nAs the Trefle API is being updated with new data still, it's better to fetch on every load than\r\nto cache the data on our own server. */\n\nclass PlantDetails extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"componentDidMount\", () => {\n      const trefle_id = this.props.router.match.params.plant_id;\n      fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/plant/${trefle_id}`, {\n        headers: {\n          \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY\n        }\n      }).then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()).then(data => {\n        const details = {\n          scientific_name: data.scientific_name,\n          common_name: data.common_name.charAt(0).toUpperCase() + data.common_name.slice(1),\n          plant_class: data.class ? data.class.name : null,\n          plant_order: data.order ? data.order.name : null,\n          family: data.family ? data.family.name : null,\n          family_common_name: data.family_common_name,\n          genus: data.genus.name,\n          duration: data.duration,\n          shade_tolerance: data.main_species.growth.shade_tolerance,\n          drought_tolerance: data.main_species.growth.drought_tolerance,\n          flower_color: data.main_species.flower.color\n        };\n        this.setState({\n          details,\n          images: [data.image_url],\n          plant: data,\n          complete_data: data.main_species.complete_data,\n          loading: false,\n          main_species: data.main_species,\n          main_species_images: data.main_species.images\n        });\n      }).catch(res => this.setState({\n        error: res.error\n      }));\n    });\n\n    _defineProperty(this, \"handleAddPlant\", () => {\n      // Add a plant to the user's collection\n      const {\n        scientific_name,\n        common_name,\n        plant_class,\n        plant_order,\n        family,\n        family_common_name,\n        genus,\n        duration,\n        shade_tolerance,\n        drought_tolerance,\n        flower_color\n      } = this.state.details; // Destructure the variables the server needs off of state\n\n      const plantToAdd = {\n        trefle_id: this.props.router.match.params.plant_id,\n        image: this.state.images[0].url,\n        scientific_name,\n        common_name,\n        plant_class,\n        plant_order,\n        family,\n        family_common_name,\n        genus,\n        duration,\n        shade_tolerance,\n        drought_tolerance,\n        flower_color\n      };\n      return fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/garden`, {\n        method: \"POST\",\n        headers: {\n          \"content-type\": \"application/json\",\n          \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY,\n          Authorization: `Bearer ${_services_tokenService_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getToken()}`\n        },\n        body: JSON.stringify(plantToAdd)\n      }).then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : this.props.router.history.push(\"/collection\")).catch(res => console.log(res.error));\n    });\n\n    _defineProperty(this, \"toggleRawData\", () => {\n      return this.setState({\n        raw_data: !this.state.raw_data\n      });\n    });\n\n    this.state = {\n      error: null,\n      details: {},\n      images: [],\n      plant: {},\n      raw_data: false,\n      loading: true,\n      modal_src: null,\n      modal_alt: null,\n      main_species: {},\n      main_species_images: {}\n    };\n  }\n\n  labelize(str) {\n    // Uppercase the first char of every word\n    return str.split(\"_\").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(\" \");\n  }\n\n  recurseDataIntoLists(data) {\n    // For displaying raw data, recursively create <ul> and <li> elements\n    let listItems = \"\";\n\n    for (let el in data) {\n      if (typeof data[el] === \"object\") {\n        listItems += `<li>${el}: ${this.recurseDataIntoLists(data[el])}</li>`;\n      } else {\n        listItems += `<li>${el}: ${data[el]}</li>`;\n      }\n    }\n\n    return `<ul>${listItems}</ul>`;\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"plant-details\"\n    }, this.state.modal_src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ModalImage_ModalImage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      src: this.state.modal_src,\n      alt: this.state.alt,\n      exitModal: () => {\n        this.setState({\n          modal_src: null,\n          modal_alt: null\n        });\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TabBar_TabBar_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), !this.state.error && this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n      className: \"plant-details__loading\"\n    }, \"Fetching your plant...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"plant-details__innerdiv\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"plant-details__images\"\n    }, Object.entries(this.state.main_species_images).map(imageEntry => {\n      if (imageEntry[1].length > 0) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, this.labelize(imageEntry[0])), imageEntry[1] && imageEntry[1].map((image, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          key: idx,\n          className: \"plant-details__img\",\n          src: image.image_url,\n          alt: `${this.state.details.scientific_name}`,\n          title: image.copyright,\n          onClick: () => {\n            this.setState({\n              modal_src: image.image_url,\n              modal_alt: this.state.details.scientific_name\n            });\n          }\n        })));\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"plant-details__details\"\n    }, !this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\",\n      onClick: this.handleAddPlant\n    }, \"Add to My Collection\"), Object.entries(this.state.main_species).map((detail, idx) => {\n      const dontDisplay = [\"id\", \"slug\", \"status\", \"rank\", \"genus_id\", \"image_url\", \"year\", \"bibliography\", \"author\"];\n      if (dontDisplay.includes(detail[0])) return null;\n\n      if (detail[1] && typeof detail[1] !== \"object\") {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"detail\",\n          key: idx\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          className: \"detail__label\"\n        }, this.labelize(detail[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          className: \"detail__content\"\n        }, detail[1]));\n      } else {\n        return null;\n      }\n    }))), !this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn plant-details__raw-data-button\",\n      onClick: this.toggleRawData\n    }, \"View Raw Data\"), this.state.raw_data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"plant-details__raw-data\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      download: `${this.state.plant.scientific_name.toLowerCase().replace(\" \", \"_\")}.json`,\n      href: `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.state.plant))}`\n    }, \"Download as JSON\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: xss__WEBPACK_IMPORTED_MODULE_3___default()(this.recurseDataIntoLists(this.state.plant))\n      }\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/pages/PlantDetailsPage/PlantDetailsPage.js?");

/***/ }),

/***/ "./src/pages/PlantSearchPage/PlantSearchPage.css":
/*!*******************************************************!*\
  !*** ./src/pages/PlantSearchPage/PlantSearchPage.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f43fc7721f215c05c56b31046a45c454.css\");\n\n//# sourceURL=webpack:///./src/pages/PlantSearchPage/PlantSearchPage.css?");

/***/ }),

/***/ "./src/pages/PlantSearchPage/PlantSearchPage.js":
/*!******************************************************!*\
  !*** ./src/pages/PlantSearchPage/PlantSearchPage.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlantSearchRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/apiService */ \"./src/services/apiService.js\");\n/* harmony import */ var _PlantSearchPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlantSearchPage.css */ \"./src/pages/PlantSearchPage/PlantSearchPage.css\");\n/* harmony import */ var _components_PlantSearchListItem_PlantSearchListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PlantSearchListItem/PlantSearchListItem */ \"./src/components/PlantSearchListItem/PlantSearchListItem.js\");\n/* harmony import */ var _components_TabBar_TabBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TabBar/TabBar */ \"./src/components/TabBar/TabBar.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n // Provides a search form to look up plants in the Trefle API database.\n// Searches based on both scientific_name and common_name\n\nclass PlantSearchRoute extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleSearchSubmit\", e => {\n      e.preventDefault();\n      this.setState({\n        error: null,\n        loading: true,\n        searchResults: []\n      });\n      const query = e.target.plant_search.value;\n      _services_apiService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTreflePlants(query).then(results => {\n        this.setState({\n          searchResults: results,\n          loading: false\n        });\n      }).catch(res => {\n        this.setState({\n          error: res.error,\n          loading: false\n        });\n      });\n    });\n\n    this.state = {\n      error: null,\n      loading: false,\n      searchResults: []\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"plant-search\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TabBar_TabBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n      className: \"hidden\"\n    }, \"Plant Explorer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n      className: \"plant-search__disclaimer\"\n    }, \"Search the Trefle.io botanical database\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      className: \"plant-search__form\",\n      onSubmit: this.handleSearchSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"plant_search_input\",\n      className: \"plant-search__label\"\n    }, \"Plant Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"plant-search__input\",\n      name: \"plant_search\",\n      id: \"plant_search_input\",\n      type: \"text\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\"\n    }, \"Search\")), this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Loading results...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"error\"\n    }, this.state.error ? this.state.error : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"plant-search__search-results\"\n    }, this.state.searchResults.map(plant => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PlantSearchListItem_PlantSearchListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        key: plant.id,\n        trefle_id: plant.id,\n        scientific_name: plant.scientific_name,\n        common_name: plant.common_name,\n        family: plant.family,\n        family_common_name: plant.family_common_name,\n        genus: plant.genus,\n        image_url: plant.image_url,\n        push: path => this.props.history.push(path)\n      });\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/pages/PlantSearchPage/PlantSearchPage.js?");

/***/ }),

/***/ "./src/routes/PrivateRoute.js":
/*!************************************!*\
  !*** ./src/routes/PrivateRoute.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PrivateRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tokenService */ \"./src/services/tokenService.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction PrivateRoute({\n  component,\n  ...props\n}) {\n  const Component = component;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, props, {\n    render: componentProps => _services_tokenService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasToken() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, componentProps) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n      to: {\n        pathname: '/login',\n        state: {\n          from: componentProps.location\n        }\n      }\n    })\n  }));\n}\n\n//# sourceURL=webpack:///./src/routes/PrivateRoute.js?");

/***/ }),

/***/ "./src/routes/PublicOnlyRoute.js":
/*!***************************************!*\
  !*** ./src/routes/PublicOnlyRoute.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PublicOnlyRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tokenService */ \"./src/services/tokenService.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction PublicOnlyRoute({\n  component,\n  ...props\n}) {\n  const Component = component;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, props, {\n    render: componentProps => _services_tokenService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasToken() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n      to: '/collection'\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, componentProps)\n  }));\n}\n;\n\n//# sourceURL=webpack:///./src/routes/PublicOnlyRoute.js?");

/***/ }),

/***/ "./src/services/apiService.js":
/*!************************************!*\
  !*** ./src/services/apiService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tokenService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenService */ \"./src/services/tokenService.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\nconst ApiService = {\n  logInUser(username, password) {\n    return fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/auth/login`, {\n      method: \"POST\",\n      headers: {\n        \"content-type\": \"application/json\",\n        \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY\n      },\n      body: JSON.stringify({\n        username,\n        password\n      })\n    }).then(res => {\n      if (!res.ok) {\n        return res.json().then(err => Promise.reject(err));\n      } else {\n        return res.json();\n      }\n    });\n  },\n\n  getUserPlants() {\n    return fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/garden/`, {\n      headers: {\n        \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY,\n        Authorization: `Bearer ${_tokenService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToken()}`\n      }\n    }).then(res => {\n      if (!res.ok) {\n        return res.json.then(err => Promise.reject(err));\n      } // Review\n\n\n      return res.json();\n    }).then(data => data);\n  },\n\n  addUserPlant(plant) {},\n\n  updatePlantInstance(userPlantId, updateValues) {\n    return fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/garden/${userPlantId}`, {\n      method: \"PATCH\",\n      headers: {\n        \"content-type\": \"application/json\",\n        \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY,\n        Authorization: `Bearer ${_tokenService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToken()}`\n      },\n      body: JSON.stringify(updateValues)\n    }).then(res => {\n      if (!res.ok) {\n        return res.json.then(err => Promise.reject(err));\n      }\n\n      return;\n    }).catch(res => console.log(res.error));\n  },\n\n  getTreflePlants(query) {\n    return fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/plant?q=${query}`, {\n      headers: {\n        \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY\n      }\n    }).then(res => {\n      if (!res.ok) {\n        return res.json.then(error => {\n          console.log(error);\n          Promise.reject(error);\n        });\n      } else {\n        return res.json();\n      }\n    });\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApiService);\n\n//# sourceURL=webpack:///./src/services/apiService.js?");

/***/ }),

/***/ "./src/services/tokenService.js":
/*!**************************************!*\
  !*** ./src/services/tokenService.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nlet TokenService;\n\nif (typeof window === 'undefined') {\n  // Enables SSR code to run without `window` in its environment\n  TokenService = {\n    setToken: () => {},\n    getToken: () => {},\n    clearToken: () => {},\n    hasToken: () => {\n      return false;\n    }\n  };\n} else {\n  TokenService = {\n    setToken: token => {\n      return window.localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TOKEN_KEY, token);\n    },\n    getToken: () => {\n      return window.localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TOKEN_KEY);\n    },\n    clearToken: () => {\n      return window.localStorage.removeItem(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TOKEN_KEY);\n    },\n    hasToken: () => {\n      return !!TokenService.getToken();\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenService);\n\n//# sourceURL=webpack:///./src/services/tokenService.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "xss":
/*!**********************!*\
  !*** external "xss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xss\");\n\n//# sourceURL=webpack:///external_%22xss%22?");

/***/ })

/******/ });