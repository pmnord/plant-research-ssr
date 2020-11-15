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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer/Footer */ \"./src/components/Footer/Footer.js\");\n/* harmony import */ var _pages_PlantSearchPage_PlantSearchPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/PlantSearchPage/PlantSearchPage */ \"./src/pages/PlantSearchPage/PlantSearchPage.js\");\n/* harmony import */ var _pages_PlantDetailsPage_PlantDetailsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/PlantDetailsPage/PlantDetailsPage */ \"./src/pages/PlantDetailsPage/PlantDetailsPage.js\");\n/* harmony import */ var _pages_GardenPage_GardenPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/GardenPage/GardenPage */ \"./src/pages/GardenPage/GardenPage.js\");\n/* harmony import */ var _pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/LoginPage/LoginPage */ \"./src/pages/LoginPage/LoginPage.js\");\n/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/HomePage/HomePage */ \"./src/pages/HomePage/HomePage.js\");\n/* harmony import */ var _components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ErrorBoundary/ErrorBoundary */ \"./src/components/ErrorBoundary/ErrorBoundary.js\");\n/* harmony import */ var _routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/PrivateRoute */ \"./src/routes/PrivateRoute.js\");\n/* harmony import */ var _routes_PublicOnlyRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/PublicOnlyRoute */ \"./src/routes/PublicOnlyRoute.js\");\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/tokenService */ \"./src/services/tokenService.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"updateLoggedIn\", username => {\n      this.setState({\n        loggedIn: _services_tokenService__WEBPACK_IMPORTED_MODULE_12__[\"default\"].hasToken(),\n        username\n      });\n    });\n\n    this.state = {\n      loggedIn: _services_tokenService__WEBPACK_IMPORTED_MODULE_12__[\"default\"].hasToken(),\n      username: null\n    };\n  } // Keeps the Header component in sync with whether the user is logged in or not for conditional rendering purposes\n\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"app\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      username: this.state.username,\n      handleLogout: this.updateLoggedIn\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n      className: \"main\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_PublicOnlyRoute__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      exact: true,\n      path: '/',\n      component: router => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        updateLoggedIn: this.updateLoggedIn,\n        router: router\n      })\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_PublicOnlyRoute__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      exact: true,\n      path: '/login',\n      component: router => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        updateLoggedIn: this.updateLoggedIn,\n        router: router\n      })\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      path: '/garden',\n      component: router => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_GardenPage_GardenPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        router: router\n      })\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      exact: true,\n      path: '/plant',\n      component: _pages_PlantSearchPage_PlantSearchPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      path: '/plant/:plant_id',\n      component: router => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_PlantDetailsPage_PlantDetailsPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        router: router\n      })\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f29d8a4632470335a4d0a5fe517526ca.css\");\n\n//# sourceURL=webpack:///./src/components/Footer/Footer.css?");

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.css */ \"./src/components/Footer/Footer.css\");\n\n\n\nconst Footer = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    className: \"footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Images generously provided by\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    rel: \"noopener noreferrer\",\n    target: \"_blank\",\n    href: \"https://commons.wikimedia.org/wiki/Main_Page\"\n  }, \"Wikimedia Commons\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Plant data provided by\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://trefle.io/\",\n    rel: \"noopener noreferrer\",\n    target: \"_blank\"\n  }, \"Trefle.io\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"footer__source\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    \"aria-label\": \"Source code on GitHub\",\n    rel: \"noopener noreferrer\",\n    target: \"_blank\",\n    href: \"https://github.com/pmnord\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    height: \"22\",\n    className: \"footer__source-svg octicon octicon-octoface\",\n    viewBox: \"0 -1 16 16\",\n    version: \"1.1\",\n    width: \"22\",\n    \"aria-hidden\": \"true\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    fillRule: \"evenodd\",\n    d: \"M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z\"\n  })), \"Source Code\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Footer/Footer.js?");

/***/ }),

/***/ "./src/components/Header/Header.css":
/*!******************************************!*\
  !*** ./src/components/Header/Header.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e70b622503a825267a78c7e1a54bd980.css\");\n\n//# sourceURL=webpack:///./src/components/Header/Header.css?");

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tokenService */ \"./src/services/tokenService.js\");\n/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.css */ \"./src/components/Header/Header.css\");\n\n\n\n\n\nconst Header = props => {\n  const handleLogoutclick = () => {\n    _services_tokenService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearToken();\n    props.handleLogout();\n  };\n\n  const renderLoginButton = () => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/login\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\"\n    }, \"Log In\")));\n  };\n\n  const renderLogoutButton = () => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\",\n      onClick: handleLogoutclick\n    }, \"Log Out\")));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"header__nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Fancy Plants\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header__right\"\n  }, props.username && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Welcome, \", props.username, \"!\"), _services_tokenService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasToken() ? renderLogoutButton() : renderLoginButton())));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Header/Header.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_apiService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/apiService.js */ \"./src/services/apiService.js\");\n/* harmony import */ var _services_tokenService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tokenService.js */ \"./src/services/tokenService.js\");\n/* harmony import */ var _LoginForm_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginForm.css */ \"./src/components/LoginForm/LoginForm.css\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // Handles log in functionality\n\nclass LoginForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleLoginSubmit\", e => {\n      e.preventDefault();\n      this.setState({\n        error: null,\n        submitting: true\n      });\n      const username = e.target.username.value;\n      const password = e.target.password.value;\n      e.target.username.value = \"\";\n      e.target.password.value = \"\";\n      _services_apiService_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].logInUser(username, password).then(res => {\n        _services_tokenService_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setToken(res.authToken); // The server provides a JWT auth token\n\n        this.props.updateLoggedIn(username);\n        this.props.router.history.push(`/garden`);\n      }).catch(err => {\n        this.setState({\n          error: err.error || \"Unable to log in at this time\",\n          submitting: false\n        });\n      });\n    });\n\n    this.state = {\n      submitting: false,\n      error: null\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      className: \"login\",\n      onSubmit: this.handleLoginSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Log In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"username\"\n    }, \"Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"basic-input\",\n      type: \"text\",\n      name: \"username\",\n      required: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"password\"\n    }, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"basic-input\",\n      type: \"password\",\n      name: \"password\",\n      required: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\",\n      disabled: this.state.submitting\n    }, this.state.submitting ? \"Loading...\" : \"Submit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"error\"\n    }, this.state.error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      style: {\n        fontSize: \"0.8rem\",\n        color: \" hsla(0, 0%, 40%)\",\n        textAlign: \"center\"\n      }\n    }, \"* To demo the app, use the credentials: demo/password\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\n//# sourceURL=webpack:///./src/components/LoginForm/LoginForm.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlantCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tokenService */ \"./src/services/tokenService.js\");\n/* harmony import */ var _PlantCard_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlantCard.css */ \"./src/components/PlantCard/PlantCard.css\");\n\n\n\n // Represents a Plant in the User's garden and provides interactions\n\nfunction PlantCard(props) {\n  function handleDelete(plant_id) {\n    return fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/garden/${plant_id}`, {\n      method: \"DELETE\",\n      headers: {\n        \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY,\n        Authorization: `Bearer ${_services_tokenService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getToken()}`\n      }\n    }).then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : props.deletePlant(plant_id)).catch(err => console.log(err));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"plant-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"plant-card__header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"plant-card__title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, props.plant.scientific_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: props.plant.image,\n    alt: `${props.plant.scientific_name}`\n  }), props.plant.common_name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"'\", props.plant.common_name, \"'\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: `plant-card__note__${props.idx}`,\n    className: \"hidden\"\n  }, \"Plant Notes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    id: `plant-card__note__${props.idx}`,\n    name: `plant-card__note__${props.idx}`,\n    placeholder: \"Leave notes here\",\n    value: props.plant.note // Updates on Blur, which will fire if a user clicks out or refreshes or navigates away\n    ,\n    onBlur: e => props.updateDbNote(e, props.plant.instance_id),\n    onChange: e => props.updateNote(e, props.idx)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"PlantCard__buttons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn\",\n    onClick: () => props.push(`/plant/${props.plant.trefle_id}`)\n  }, \"Details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn plant-card__btn--delete\",\n    onClick: () => handleDelete(props.plant.instance_id)\n  }, \"Delete\")));\n}\n\n//# sourceURL=webpack:///./src/components/PlantCard/PlantCard.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlantSearchListItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tokenService */ \"./src/services/tokenService.js\");\n/* harmony import */ var _PlantSearchListItem_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlantSearchListItem.css */ \"./src/components/PlantSearchListItem/PlantSearchListItem.css\");\n\n\n\n\n // List Item representing a search result when a user searches for plants in the Trefle database\n\nfunction PlantSearchListItem(props) {\n  function handleAddPlant() {\n    return fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].API_ENDPOINT}/garden`, {\n      method: \"POST\",\n      headers: {\n        \"content-type\": \"application/json\",\n        \"api-key\": _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].API_KEY,\n        Authorization: `Bearer ${_services_tokenService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getToken()}`\n      },\n      body: JSON.stringify({\n        trefle_id: props.trefle_id,\n        scientific_name: props.scientific_name,\n        common_name: props.common_name,\n        image: props.image_url,\n        family: props.family,\n        family_common_name: props.family_common_name,\n        genus: props.genus\n      })\n    }).then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : props.push(\"/garden\")).catch(res => console.log(res.error));\n  }\n\n  function capitalize(str) {\n    return str.split(\" \").map(word => word[0].toUpperCase() + word.slice(1)).join(\" \");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"plant-search__list-item PlantSearchListItem\"\n  }, props.image_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"PlantSearchListItem__img\",\n    src: props.image_url,\n    alt: props.scientific_name\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Image not available\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"plant-search__plant-names\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, props.scientific_name)), props.common_name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"'\", capitalize(props.common_name), \"'\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.family), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.family_common_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"plant-search__list-item__buttons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: `/plant/${props.trefle_id}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn\"\n  }, \"See Details\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn\",\n    onClick: handleAddPlant\n  }, \"Add to Garden\")));\n}\n\n//# sourceURL=webpack:///./src/components/PlantSearchListItem/PlantSearchListItem.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RegistrationForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _RegistrationForm_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrationForm.css */ \"./src/components/RegistrationForm/RegistrationForm.css\");\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tokenService */ \"./src/services/tokenService.js\");\n/* harmony import */ var _Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tooltip/Tooltip */ \"./src/components/Tooltip/Tooltip.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n // Handles new user registration\n\nclass RegistrationForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleFormSubmit\", e => {\n      e.preventDefault();\n      this.setState({\n        error: null,\n        submitting: true\n      });\n\n      if (this.state.password !== this.state.passwordConfirmation) {\n        this.setState({\n          error: \"Passwords do not match\",\n          submitting: false\n        });\n        return;\n      }\n\n      const {\n        username,\n        password\n      } = e.target;\n      const newUser = {\n        username: username.value,\n        password: password.value,\n        email: \"\"\n      };\n      fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/user`, {\n        method: \"POST\",\n        headers: {\n          \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY,\n          \"content-type\": \"application/json\"\n        },\n        body: JSON.stringify(newUser)\n      }).then(res => {\n        if (!res.ok) {\n          return res.json().then(err => Promise.reject(err));\n        }\n\n        return res.json();\n      }).then(resJson => {\n        username.value = \"\";\n        password.value = \"\";\n        return this.onRegistrationSuccess(newUser);\n      }).catch(err => {\n        console.log(err);\n        this.setState({\n          error: err.error || \"Unable to register at this time\",\n          submitting: false\n        });\n      });\n    });\n\n    _defineProperty(this, \"onRegistrationSuccess\", newUser => {\n      const credentials = {\n        username: newUser.username,\n        password: newUser.password\n      };\n      fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/auth/login`, {\n        method: \"POST\",\n        headers: {\n          \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY,\n          \"content-type\": \"application/json\"\n        },\n        body: JSON.stringify(credentials)\n      }).then(res => {\n        if (!res.ok) return res.json().then(err => Promise.reject(err));\n        return res.json();\n      }).then(res => {\n        _services_tokenService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setToken(res.authToken);\n        this.props.updateLoggedIn();\n        this.props.router.history.push(`/garden`);\n      }).catch(err => {\n        this.setState({\n          error: err.error || \"Unable to register at this time\",\n          submitting: false\n        });\n      });\n    });\n\n    _defineProperty(this, \"updateFormValue\", (input, value) => {\n      this.setState({\n        [input]: value\n      });\n    });\n\n    this.state = {\n      username: \"\",\n      password: \"\",\n      passwordConfirmation: \"\",\n      submitting: false,\n      error: null\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      className: \"registration__form\",\n      onSubmit: this.handleFormSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Create an Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"username\"\n    }, \"Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"basic-input\",\n      type: \"text\",\n      name: \"username\",\n      required: true,\n      value: this.state.username,\n      onChange: e => this.updateFormValue(e.target.name, e.target.value)\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"password\"\n    }, \"Password\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      content: \"Passwords are stored encrypted and never visible to FancyPlants\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      role: \"img\",\n      \"aria-label\": \"password tooltip\"\n    }, \"\\uD83D\\uDCAC\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"basic-input\",\n      type: \"password\",\n      name: \"password\",\n      minLength: \"6\",\n      required: true,\n      value: this.state.password,\n      onChange: e => this.updateFormValue(e.target.name, e.target.value)\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"password-confirmation\"\n    }, \"Confirm Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"basic-input\",\n      type: \"password\",\n      name: \"password-confirmation\",\n      minLength: \"6\",\n      required: true,\n      value: this.state.passwordConfirmation,\n      onChange: e => this.updateFormValue(\"passwordConfirmation\", e.target.value)\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\",\n      disabled: this.state.submitting\n    }, this.state.submitting ? \"Loading...\" : \"Register\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"error\"\n    }, this.state.error));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/RegistrationForm.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TabBar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabBar.css */ \"./src/components/TabBar/TabBar.css\");\n\n\n\n\nconst TabBar = ({\n  children,\n  location\n}) => {\n  const path = location.pathname;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tab-bar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/garden\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"tab-bar__tab tab-bar__tab--first\",\n    disabled: path === '/garden'\n  }, \"Collection\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/plant\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"tab-bar__tab\",\n    disabled: path === '/plant'\n  }, \"Plant Search\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tab-bar__filler\"\n  }), children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(TabBar));\n\n//# sourceURL=webpack:///./src/components/TabBar/TabBar.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n  API_ENDPOINT: \"http://localhost:8000/api\",\n  API_KEY: process.env.REACT_APP_FANCYPLANTS_API_KEY,\n  TREFLE_API_KEY: process.env.TREFLE_API_KEY,\n  TOKEN_KEY: `Authorization`\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/pages/GardenPage/GardenPage.css":
/*!*********************************************!*\
  !*** ./src/pages/GardenPage/GardenPage.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c61150e6b312f3b205344916b5ff0902.css\");\n\n//# sourceURL=webpack:///./src/pages/GardenPage/GardenPage.css?");

/***/ }),

/***/ "./src/pages/GardenPage/GardenPage.js":
/*!********************************************!*\
  !*** ./src/pages/GardenPage/GardenPage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/apiService */ \"./src/services/apiService.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GardenPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GardenPage.css */ \"./src/pages/GardenPage/GardenPage.css\");\n/* harmony import */ var _components_PlantCard_PlantCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PlantCard/PlantCard */ \"./src/components/PlantCard/PlantCard.js\");\n/* harmony import */ var _components_TabBar_TabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TabBar/TabBar */ \"./src/components/TabBar/TabBar.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n // The Garden page renders a grid of a user's plants and provides ways to interact with those plants\n// It represents the current state of a user's plant collection in the database\n\nclass Garden extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"componentDidMount\", () => {\n      this._isMounted = true;\n      this._isMounted && _services_apiService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getUserPlants().then(plants => this._isMounted && this.setState({\n        plants: plants,\n        plantsCache: plants\n      })).catch(err => this._isMounted && this.setState({\n        error: err\n      }));\n    });\n\n    _defineProperty(this, \"componentWillUnmount\", () => {\n      this._isMounted = false;\n    });\n\n    _defineProperty(this, \"updateNote\", (e, idx) => {\n      const newValue = e.target.value;\n      const newState = {\n        plants: [...this.state.plants]\n      };\n      newState.plants[idx].note = newValue;\n      this.setState(newState);\n    });\n\n    _defineProperty(this, \"updateDbNote\", (e, instance_id) => {\n      const updateValues = {\n        note: e.target.value\n      };\n      _services_apiService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updatePlantInstance(instance_id, updateValues);\n    });\n\n    _defineProperty(this, \"updateWatered\", idx => {\n      const newState = {\n        plants: [...this.state.plants]\n      };\n      newState.plants[idx].watered_date = moment__WEBPACK_IMPORTED_MODULE_2___default()().format(\"MMMM Do h:mm a\");\n      const newWateredDate = newState.plants[idx].watered_date;\n      const plantInstanceId = newState.plants[idx].instance_id;\n      const updateValues = {\n        watered_date: newWateredDate\n      };\n      this.setState(newState);\n      /* It might be better to update the component state only once the API call goes through,\r\n          but it would also create lag time between when the user clicks the button and when the value\r\n          updates */\n\n      _services_apiService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updatePlantInstance(plantInstanceId, updateValues);\n    });\n\n    _defineProperty(this, \"addPlant\", newPlant => {\n      const newPlants = [...this.state.plants];\n      newPlants.push(newPlant);\n      const newState = {\n        plants: newPlants\n      };\n      this.setState(newState);\n    });\n\n    _defineProperty(this, \"deletePlant\", instanceId => {\n      const plants = this.state.plants.filter(plant => plant.instance_id !== instanceId);\n      this.setState({\n        plants\n      });\n    });\n\n    _defineProperty(this, \"filterPlants\", e => {\n      const query = e.target.value.toLowerCase();\n      const filteredPlants = this.state.plantsCache.filter(plant => plant.scientific_name.toLowerCase().includes(query) ? true : plant.common_name ? plant.common_name.toLowerCase().includes(query) : false);\n      this.setState({\n        plants: filteredPlants\n      });\n    });\n\n    this.state = {\n      error: null,\n      plants: [],\n      plantsCache: []\n    };\n    this._isMounted = false;\n  } // Retrieve a user's plants and set them in the component state\n\n\n  render() {\n    const {\n      plants = []\n    } = this.state;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"garden\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TabBar_TabBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"garden-filter\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"garden-filter__input\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Filter:\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"garden-filter__input\",\n      name: \"garden-filter__input\",\n      className: \"garden-filter__input\",\n      type: \"text\",\n      onChange: this.filterPlants\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"plant-grid\"\n    }, plants.map((plant, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PlantCard_PlantCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: idx,\n      plant: plant,\n      updateNote: this.updateNote,\n      updateDbNote: this.updateDbNote,\n      updateWatered: this.updateWatered,\n      deletePlant: instanceId => this.deletePlant(instanceId),\n      idx: idx,\n      push: path => this.props.router.history.push(path)\n    }))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Garden);\n\n//# sourceURL=webpack:///./src/pages/GardenPage/GardenPage.js?");

/***/ }),

/***/ "./src/pages/HomePage/HomePage.css":
/*!*****************************************!*\
  !*** ./src/pages/HomePage/HomePage.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ef117eb590a64ba7e7bf54c7df394cef.css\");\n\n//# sourceURL=webpack:///./src/pages/HomePage/HomePage.css?");

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomeRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HomePage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.css */ \"./src/pages/HomePage/HomePage.css\");\n/* harmony import */ var _components_RegistrationForm_RegistrationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/RegistrationForm/RegistrationForm */ \"./src/components/RegistrationForm/RegistrationForm.js\");\n/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LoginForm/LoginForm */ \"./src/components/LoginForm/LoginForm.js\");\n\n\n\n // Homepage consisting of the pitch, the Registration component and Login component\n\nfunction HomeRoute(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"HomeRoute\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"HomeRoute__pitch\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Build a collection of plants, explore a plant database, get in-depth information, and share your personal garden with other horticulture enthusiasts.\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Take a break for a while and just focus on the things you love, plants!\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"HomeRoute__authentication\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RegistrationForm_RegistrationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    updateLoggedIn: props.updateLoggedIn,\n    router: props.router\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    updateLoggedIn: props.updateLoggedIn,\n    router: props.router\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/HomePage/HomePage.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlantDetails; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tokenService */ \"./src/services/tokenService.js\");\n/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xss */ \"xss\");\n/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _PlantDetailsPage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlantDetailsPage.css */ \"./src/pages/PlantDetailsPage/PlantDetailsPage.css\");\n/* harmony import */ var _components_TabBar_TabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TabBar/TabBar */ \"./src/components/TabBar/TabBar.js\");\n/* harmony import */ var _components_ModalImage_ModalImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ModalImage/ModalImage */ \"./src/components/ModalImage/ModalImage.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n/* Provides images and data about a specific plant from the Trefle API.\r\n\r\nAs the Trefle API is being updated with new data still, it's better to fetch on every load than\r\nto cache the data on our own server. */\n\nclass PlantDetails extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"componentDidMount\", () => {\n      const trefle_id = this.props.router.match.params.plant_id;\n      fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/plant/${trefle_id}`, {\n        headers: {\n          \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY\n        }\n      }).then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()).then(data => {\n        const details = {\n          scientific_name: data.scientific_name,\n          common_name: data.common_name.charAt(0).toUpperCase() + data.common_name.slice(1),\n          plant_class: data.class ? data.class.name : null,\n          plant_order: data.order ? data.order.name : null,\n          family: data.family ? data.family.name : null,\n          family_common_name: data.family_common_name,\n          genus: data.genus.name,\n          duration: data.duration,\n          shade_tolerance: data.main_species.growth.shade_tolerance,\n          drought_tolerance: data.main_species.growth.drought_tolerance,\n          flower_color: data.main_species.flower.color\n        };\n        this.setState({\n          details,\n          images: [data.image_url],\n          plant: data,\n          complete_data: data.main_species.complete_data,\n          loading: false\n        });\n      }).catch(res => this.setState({\n        error: res.error\n      }));\n    });\n\n    _defineProperty(this, \"handleAddPlant\", () => {\n      // Add a plant to the user's garden\n      const {\n        scientific_name,\n        common_name,\n        plant_class,\n        plant_order,\n        family,\n        family_common_name,\n        genus,\n        duration,\n        shade_tolerance,\n        drought_tolerance,\n        flower_color\n      } = this.state.details; // Destructure the variables the server needs off of state\n\n      const plantToAdd = {\n        trefle_id: this.props.router.match.params.plant_id,\n        image: this.state.images[0].url,\n        scientific_name,\n        common_name,\n        plant_class,\n        plant_order,\n        family,\n        family_common_name,\n        genus,\n        duration,\n        shade_tolerance,\n        drought_tolerance,\n        flower_color\n      };\n      return fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_ENDPOINT}/garden`, {\n        method: \"POST\",\n        headers: {\n          \"content-type\": \"application/json\",\n          \"api-key\": _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].API_KEY,\n          Authorization: `Bearer ${_services_tokenService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getToken()}`\n        },\n        body: JSON.stringify(plantToAdd)\n      }).then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : this.props.router.history.push(\"/garden\")).catch(res => console.log(res.error));\n    });\n\n    _defineProperty(this, \"toggleRawData\", () => {\n      return this.setState({\n        raw_data: !this.state.raw_data\n      });\n    });\n\n    this.state = {\n      error: null,\n      details: {},\n      images: [],\n      plant: {},\n      raw_data: false,\n      loading: true,\n      modal_src: null,\n      modal_alt: null\n    };\n  }\n\n  labelize(str) {\n    // Uppercase the first char of every word\n    return str.split(\"_\").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(\" \");\n  }\n\n  recurseDataIntoLists(data) {\n    // For displaying raw data, recursively create <ul> and <li> elements\n    let listItems = \"\";\n\n    for (let el in data) {\n      if (typeof data[el] === \"object\") {\n        listItems += `<li>${el}: ${this.recurseDataIntoLists(data[el])}</li>`;\n      } else {\n        listItems += `<li>${el}: ${data[el]}</li>`;\n      }\n    }\n\n    return `<ul>${listItems}</ul>`;\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"plant-details\"\n    }, this.state.modal_src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ModalImage_ModalImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      src: this.state.modal_src,\n      alt: this.state.alt,\n      exitModal: () => {\n        this.setState({\n          modal_src: null,\n          modal_alt: null\n        });\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TabBar_TabBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), !this.state.error && this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n      className: \"plant-details__loading\"\n    }, \"Fetching your plant...\"), this.state.complete_data === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"The data for this plant is tagged \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"'incomplete'\"), \" in the Trefle.io database and may have limited information.\") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"plant-details__innerdiv\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"plant-details__images\"\n    }, this.state.images && this.state.images.map((image, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      key: idx,\n      className: \"plant-details__img\",\n      src: image,\n      alt: `${this.state.details.scientific_name}`,\n      onClick: () => {\n        this.setState({\n          modal_src: image,\n          modal_alt: this.state.details.scientific_name\n        });\n      }\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"plant-details__details\"\n    }, Object.entries(this.state.details).map((detail, idx) => detail[1] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"detail\",\n      key: idx\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"detail__label\"\n    }, this.labelize(detail[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"detail__content\"\n    }, detail[1])) : null),  false ? /*#__PURE__*/undefined : null, !this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\",\n      onClick: this.handleAddPlant\n    }, \"Add to Garden\"))), !this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn plant-details__raw-data-button\",\n      onClick: this.toggleRawData\n    }, \"View Raw Data\"), this.state.raw_data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"plant-details__raw-data\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      download: `${this.state.plant.scientific_name.toLowerCase().replace(\" \", \"_\")}.json`,\n      href: `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.state.plant))}`\n    }, \"Download as JSON\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: xss__WEBPACK_IMPORTED_MODULE_3___default()(this.recurseDataIntoLists(this.state.plant))\n      }\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/pages/PlantDetailsPage/PlantDetailsPage.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlantSearchRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/apiService */ \"./src/services/apiService.js\");\n/* harmony import */ var _PlantSearchPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlantSearchPage.css */ \"./src/pages/PlantSearchPage/PlantSearchPage.css\");\n/* harmony import */ var _components_PlantSearchListItem_PlantSearchListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PlantSearchListItem/PlantSearchListItem */ \"./src/components/PlantSearchListItem/PlantSearchListItem.js\");\n/* harmony import */ var _components_TabBar_TabBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TabBar/TabBar */ \"./src/components/TabBar/TabBar.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n // Provides a search form to look up plants in the Trefle API database.\n// Searches based on both scientific_name and common_name\n\nclass PlantSearchRoute extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleSearchSubmit\", e => {\n      e.preventDefault();\n      this.setState({\n        error: null,\n        loading: true,\n        searchResults: []\n      });\n      const query = e.target.plant_search.value;\n      _services_apiService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTreflePlants(query).then(results => {\n        this.setState({\n          searchResults: results,\n          loading: false\n        });\n      }).catch(res => {\n        this.setState({\n          error: res.error,\n          loading: false\n        });\n      });\n    });\n\n    this.state = {\n      error: null,\n      loading: false,\n      searchResults: []\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"plant-search\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TabBar_TabBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n      className: \"hidden\"\n    }, \"Plant Explorer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n      className: \"plant-search__disclaimer\"\n    }, \"Search every plant in the world (almost)!\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      className: \"plant-search__form\",\n      onSubmit: this.handleSearchSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"plant_search_input\",\n      className: \"plant-search__label\"\n    }, \"Plant Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"plant-search__input\",\n      name: \"plant_search\",\n      id: \"plant_search_input\",\n      type: \"text\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn\"\n    }, \"Search\")), this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Loading results...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"error\"\n    }, this.state.error ? this.state.error : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"plant-search__search-results\"\n    }, this.state.searchResults.map(plant => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PlantSearchListItem_PlantSearchListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        key: plant.id,\n        trefle_id: plant.id,\n        scientific_name: plant.scientific_name,\n        common_name: plant.common_name,\n        family: plant.family,\n        family_common_name: plant.family_common_name,\n        genus: plant.genus,\n        image_url: plant.image_url,\n        push: path => this.props.history.push(path)\n      });\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/pages/PlantSearchPage/PlantSearchPage.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PublicOnlyRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_tokenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tokenService */ \"./src/services/tokenService.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction PublicOnlyRoute({\n  component,\n  ...props\n}) {\n  const Component = component;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, props, {\n    render: componentProps => _services_tokenService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasToken() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n      to: '/garden'\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, componentProps)\n  }));\n}\n;\n\n//# sourceURL=webpack:///./src/routes/PublicOnlyRoute.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nlet TokenService;\n\nif (typeof window === 'undefined') {\n  TokenService = {\n    setToken: () => {},\n    getToken: () => {},\n    clearToken: () => {},\n    hasToken: () => {\n      return false;\n    }\n  };\n} else {\n  TokenService = {\n    setToken: token => {\n      return window.localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TOKEN_KEY, token);\n    },\n    getToken: () => {\n      return window.localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TOKEN_KEY);\n    },\n    clearToken: () => {\n      return window.localStorage.removeItem(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TOKEN_KEY);\n    },\n    hasToken: () => {\n      return !!TokenService.getToken();\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenService);\n\n//# sourceURL=webpack:///./src/services/tokenService.js?");

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