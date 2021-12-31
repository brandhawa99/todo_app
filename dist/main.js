/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-background-color: hsl(234, 56%, 55%);\n  --main-folder-colors: hsl(235, 18%, 37%);\n  --main-folder-colors-hover: hsl(235, 20%, 21%);\n  --main-button-color: hsl(235, 56%, 70%);\n  --main-button-color-hover: hsl(235, 54%, 63%);\n  --main-text-color: white;\n  --header-size: 2rem;\n  --screen-bg-color: hsl(235, 63%, 82%);\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  background-color: var(--main-background-color);\n  height: 100%;\n}\n.header {\n  display: flex;\n  padding-left: 1.5rem;\n  align-items: center;\n  font-size: var(--header-size);\n  color: var(--main-text-color);\n  border-bottom: 2px solid black;\n  height: 3.5rem;\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 8rem;\n  padding: 0.5rem;\n}\n.due {\n  color: var(--main-text-color);\n  align-items: center;\n  display: flex;\n  padding-bottom: 1rem;\n  flex-direction: column;\n  gap: 0.25rem;\n  border-bottom: 2px solid black;\n  padding-top: 1rem;\n}\n.due button {\n  border: none;\n  border-radius: 0.25rem;\n  width: 100%;\n  background-color: var(--main-button-color);\n}\n\n.due button:hover {\n  background-color: var(--main-button-color-hover);\n}\n.main_screen {\n  width: 100%;\n  display: flex;\n  flex-grow: 1;\n  background-color: var(--main-button-color-hover);\n  margin-right: 1rem;\n  padding: 2rem;\n  margin-top: 1.5rem;\n  border-radius: 0.5rem;\n  height: 70vh;\n  color: var(--main-text-color);\n  justify-content: center;\n}\n.meat {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.make_folder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.25rem;\n  margin-top: 3rem;\n}\n.make_folder label {\n  font-size: 2rem;\n}\n.make_folder button {\n  align-items: flex-end;\n  margin-top: 1rem;\n  border-radius: 0.25rem;\n  border-style: none;\n  padding: 0.25rem 2rem 0.25rem 2rem;\n}\n.make_folder button:hover {\n  background-color: orange;\n}\n.make_folder input {\n  width: 70%;\n  padding-left: 1rem;\n  height: 1.25rem;\n}\n\n.main_frame {\n  width: 100%;\n  height: 100%;\n}\n.folder {\n  cursor: pointer;\n  display: inline-block;\n  width: 8rem;\n  padding-left: 0.25rem;\n  background-color: var(--main-folder-colors);\n  font-size: 1.25rem;\n  color: var(--main-text-color);\n  text-align: center;\n  border-radius: 0.5rem;\n  margin-top: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.folder:hover {\n  background-color: var(--main-folder-colors-hover);\n}\n\n.todo_screen_container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background-color: var(--screen-bg-color);\n  height: 100%;\n}\n.todo_header {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n}\n.todo_container {\n  box-sizing: border-box;\n  padding: 0.75rem;\n  width: 80%;\n  border: 2px black solid;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n}\n.todo {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.todo input {\n  background-color: var(--screen-bg-color);\n  border: none;\n  border-bottom: 0.5px black solid;\n}\n.todo :nth-child(2) {\n  width: 100%;\n}\n.todo_done {\n  text-decoration: line-through;\n}\n#container {\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,2CAA2C;EAC3C,wCAAwC;EACxC,8CAA8C;EAC9C,uCAAuC;EACvC,6CAA6C;EAC7C,wBAAwB;EACxB,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,8CAA8C;EAC9C,YAAY;AACd;AACA;EACE,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,6BAA6B;EAC7B,6BAA6B;EAC7B,8BAA8B;EAC9B,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,eAAe;AACjB;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,oBAAoB;EACpB,sBAAsB;EACtB,YAAY;EACZ,8BAA8B;EAC9B,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,0CAA0C;AAC5C;;AAEA;EACE,gDAAgD;AAClD;AACA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,gDAAgD;EAChD,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,6BAA6B;EAC7B,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,kCAAkC;AACpC;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,WAAW;EACX,qBAAqB;EACrB,2CAA2C;EAC3C,kBAAkB;EAClB,6BAA6B;EAC7B,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;EACvB,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,wCAAwC;EACxC,YAAY;AACd;AACA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;EACV,uBAAuB;EACvB,qBAAqB;EACrB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,wCAAwC;EACxC,YAAY;EACZ,gCAAgC;AAClC;AACA;EACE,WAAW;AACb;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,YAAY;AACd","sourcesContent":[":root {\n  --main-background-color: hsl(234, 56%, 55%);\n  --main-folder-colors: hsl(235, 18%, 37%);\n  --main-folder-colors-hover: hsl(235, 20%, 21%);\n  --main-button-color: hsl(235, 56%, 70%);\n  --main-button-color-hover: hsl(235, 54%, 63%);\n  --main-text-color: white;\n  --header-size: 2rem;\n  --screen-bg-color: hsl(235, 63%, 82%);\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  background-color: var(--main-background-color);\n  height: 100%;\n}\n.header {\n  display: flex;\n  padding-left: 1.5rem;\n  align-items: center;\n  font-size: var(--header-size);\n  color: var(--main-text-color);\n  border-bottom: 2px solid black;\n  height: 3.5rem;\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 8rem;\n  padding: 0.5rem;\n}\n.due {\n  color: var(--main-text-color);\n  align-items: center;\n  display: flex;\n  padding-bottom: 1rem;\n  flex-direction: column;\n  gap: 0.25rem;\n  border-bottom: 2px solid black;\n  padding-top: 1rem;\n}\n.due button {\n  border: none;\n  border-radius: 0.25rem;\n  width: 100%;\n  background-color: var(--main-button-color);\n}\n\n.due button:hover {\n  background-color: var(--main-button-color-hover);\n}\n.main_screen {\n  width: 100%;\n  display: flex;\n  flex-grow: 1;\n  background-color: var(--main-button-color-hover);\n  margin-right: 1rem;\n  padding: 2rem;\n  margin-top: 1.5rem;\n  border-radius: 0.5rem;\n  height: 70vh;\n  color: var(--main-text-color);\n  justify-content: center;\n}\n.meat {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.make_folder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.25rem;\n  margin-top: 3rem;\n}\n.make_folder label {\n  font-size: 2rem;\n}\n.make_folder button {\n  align-items: flex-end;\n  margin-top: 1rem;\n  border-radius: 0.25rem;\n  border-style: none;\n  padding: 0.25rem 2rem 0.25rem 2rem;\n}\n.make_folder button:hover {\n  background-color: orange;\n}\n.make_folder input {\n  width: 70%;\n  padding-left: 1rem;\n  height: 1.25rem;\n}\n\n.main_frame {\n  width: 100%;\n  height: 100%;\n}\n.folder {\n  cursor: pointer;\n  display: inline-block;\n  width: 8rem;\n  padding-left: 0.25rem;\n  background-color: var(--main-folder-colors);\n  font-size: 1.25rem;\n  color: var(--main-text-color);\n  text-align: center;\n  border-radius: 0.5rem;\n  margin-top: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.folder:hover {\n  background-color: var(--main-folder-colors-hover);\n}\n\n.todo_screen_container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background-color: var(--screen-bg-color);\n  height: 100%;\n}\n.todo_header {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n}\n.todo_container {\n  box-sizing: border-box;\n  padding: 0.75rem;\n  width: 80%;\n  border: 2px black solid;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n}\n.todo {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.todo input {\n  background-color: var(--screen-bg-color);\n  border: none;\n  border-bottom: 0.5px black solid;\n}\n.todo :nth-child(2) {\n  width: 100%;\n}\n.todo_done {\n  text-decoration: line-through;\n}\n#container {\n  height: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/exports/addProject_screen.js":
/*!******************************************!*\
  !*** ./src/exports/addProject_screen.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add_project_screen": () => (/* binding */ add_project_screen)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ "./src/exports/sidebar.js");




//This screen pops up when you click on the + under add project 
const add_project_screen  = (()=>{

    const container = document.createElement('div');
    const title = document.createElement('h3');
    const label = document.createElement('label');
    const input =  document.createElement('input');
    const button = document.createElement('button');

    container.classList.add('make_folder');

    button.textContent = "create project"
    title.textContent = "Project"
    label.textContent = "Project"

    //button add event listen 
    button.addEventListener('click',() =>{
        if(check_exsits(input.value)){
            console.log("IT EXISTS")
            return 
        }
        _sidebar_js__WEBPACK_IMPORTED_MODULE_1__.sidebar.mkFolder(input.value);
        input.value = ""; 

    })

    // container.appendChild(title);
    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(button);

    const check_exsits = (project) =>{
        let keys = Object.keys(localStorage)
        for(let i = 0; i<keys.length; i++){
            if(keys[i] == project ){
                return true; 
            }
        }

    }



    return container
})()


/***/ }),

/***/ "./src/exports/container.js":
/*!**********************************!*\
  !*** ./src/exports/container.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": () => (/* binding */ container)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ "./src/exports/sidebar.js");
/* harmony import */ var _main_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main_frame.js */ "./src/exports/main_frame.js");





//Contains the side bar the the elements that pop up when a button on the side is pressed 
const container = (function() {
    
    // this is the main contianer of everything under the header
    const main_container = document.createElement('div');
    main_container.appendChild(_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.sidebar.sidebar_container);
    main_container.appendChild(_main_frame_js__WEBPACK_IMPORTED_MODULE_2__.main_frame.getFrame());

    //add css to elements  
    main_container.classList.add('meat');

    return main_container

})()



/***/ }),

/***/ "./src/exports/header.js":
/*!*******************************!*\
  !*** ./src/exports/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");


//create header for todo app 
function header(){
    const container = document.createElement('header')
    const title = document.createElement('div');
    title.textContent = "Todo List"

    title.classList.add("header");
    container.appendChild(title);

    return container;
}



/***/ }),

/***/ "./src/exports/main_frame.js":
/*!***********************************!*\
  !*** ./src/exports/main_frame.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main_frame": () => (/* binding */ main_frame)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _todo_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_screen.js */ "./src/exports/todo_screen.js");
/* harmony import */ var _addProject_screen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject_screen.js */ "./src/exports/addProject_screen.js");




// this is where all the projects and their todos are going to be seen with this you can set and get the current screen you are seeing 
const main_frame = (() =>{
    const frame = document.createElement('div');
    frame.appendChild(_addProject_screen_js__WEBPACK_IMPORTED_MODULE_2__.add_project_screen)
    frame.classList.add('main_frame')
    

    const setFrame = (screen) =>{
        frame.innerHTML = ""; 
        frame.appendChild(screen);
    }
    const getFrame =() =>{
        return frame;
    }
    

    return {
        setFrame,
        getFrame
    }

})()






/***/ }),

/***/ "./src/exports/renderPage.js":
/*!***********************************!*\
  !*** ./src/exports/renderPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render_page": () => (/* binding */ render_page)
/* harmony export */ });

const render_page = (items) => {

    const renderTodos = (items) => {
        // console.log(items.todos);
        let arr = items.todos;

        for(let i = 0 ; i < arr.length; i++ ){

            const todo  = document.createElement('div');
            const checkbox_input = document.createElement('input');
            const todo_input = document.createElement('input');

            checkbox_input.type = "checkbox";
            todo_input.type = "textbox"

            todo_input.value = arr[i];

            todo.appendChild(checkbox_input);
            todo.appendChild(todo_input);

            todo.classList.add('todo');
                    // add event listen to the text input 
            todo_input.addEventListener('keyup',(e)=>{
            if(e.key == "Enter" && todo_input.value != ""){
                mktodos();
                let obj = JSON.parse(localStorage.getItem(obj.title));
                console.log(obj); 
                obj.todos.push()
                localStorage.setItem(items.title,JSON.stringify(obj))
            }
        })



            //checkbox input 
        todo_container.appendChild(todo);

        }


            const todo  = document.createElement('div');
            const checkbox_input = document.createElement('input');
            const todo_input = document.createElement('input');

            checkbox_input.type = "checkbox";
            todo_input.type = "textbox"

            todo.appendChild(checkbox_input);
            todo.appendChild(todo_input);

            todo.classList.add('todo');
                    // add event listen to the text input 
            todo_input.addEventListener('keyup',(e)=>{
            if(e.key == "Enter" && todo_input.value != ""){
                renderTodos(items);


                let obj = JSON.parse(localStorage.getItem(items.title));
                
                console.log(obj); 
                obj.todos.push(todo_input.value)
                localStorage.setItem(items.title,JSON.stringify(obj))
            }
        })
        


            //checkbox input 
        todo_container.appendChild(todo);



    }

    // create containers 
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const top_container = document.createElement('div');
    const todo_container = document.createElement('div');
    renderTodos(items);


    // add data to elements 
    title.textContent = items.title

    //add css
    container.classList.add('todo_screen_container')
    top_container.classList.add('todo_header');
    todo_container.classList.add('todo_container');

    
    top_container.appendChild(title);
    container.appendChild(top_container);
    container.appendChild(todo_container)



    return container;


}



/***/ }),

/***/ "./src/exports/sidebar.js":
/*!********************************!*\
  !*** ./src/exports/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebar": () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _main_frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_frame.js */ "./src/exports/main_frame.js");
/* harmony import */ var _addProject_screen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject_screen.js */ "./src/exports/addProject_screen.js");
/* harmony import */ var _todo_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_screen */ "./src/exports/todo_screen.js");
/* harmony import */ var _renderPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderPage.js */ "./src/exports/renderPage.js");






//sidebar used to access projects and has a add project button that will set the screen to add project and then append the project to the projet holder 
const sidebar = (function () {


    //holds all the elemnts that are going to be in the sidebar
    const sidebar_container = document.createElement('div');
    const projects_contianer = document.createElement('div');

    //Add Projets Section
    const add_project_container = document.createElement('div');
    const create_project_button = document.createElement('button')

        // add text to container and button 
    add_project_container.textContent = "Add Project";
    create_project_button.innerHTML = "&#x2b"
        //add button to add_project_container
    add_project_container.appendChild(create_project_button)

    //Folder for projets sections 

    //add css 
    sidebar_container.classList.add('sidebar');
    add_project_container.classList.add('due');

    create_project_button.addEventListener('click',() =>{
        _main_frame_js__WEBPACK_IMPORTED_MODULE_1__.main_frame.setFrame(_addProject_screen_js__WEBPACK_IMPORTED_MODULE_2__.add_project_screen)
    })


    //function to add project folders to the sidebar
    const mkFolder = (title) =>{
        if(title == ""){
            return; 
        } 
        localStorage.setItem(title,JSON.stringify({title: title,todos:[]}))
        renderProjects();

    }
    const renderProjects = () =>{
        let keys = Object.keys(localStorage)
        projects_contianer.innerHTML = ""; 
        for(let i = 0; i<keys.length; i++){
            const folder = document.createElement('div');
            folder.textContent = keys[i];
            folder.dataset.projectName = keys[i]; 
            folder.classList.add('folder');
            folder.addEventListener('click',(e)=>{
                let key = JSON.parse(localStorage.getItem(folder.dataset.projectName))
                console.log(key);
                _main_frame_js__WEBPACK_IMPORTED_MODULE_1__.main_frame.setFrame((0,_renderPage_js__WEBPACK_IMPORTED_MODULE_4__.render_page)(key))

            })
            projects_contianer.appendChild(folder);

        }
    }

    window.addEventListener('load',() =>{
        renderProjects()
    })


    //add stuff to sidebar container
    sidebar_container.appendChild(add_project_container);
    sidebar_container.appendChild(projects_contianer);




    return {
        sidebar_container,
        mkFolder,
    }
    

})()



/***/ }),

/***/ "./src/exports/todo_screen.js":
/*!************************************!*\
  !*** ./src/exports/todo_screen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo_screen": () => (/* binding */ todo_screen)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");



//This screen pops up when you click on a project on the side bar or when you create a new project 
//Display all todos 
// Add new todo 
//remove done todo 
//mark to-dos as complete 
const todo_screen = ((id) =>{

    const data = id ; 
    
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const top_container = document.createElement('div');
    const todo_container = document.createElement('div');

    const mktodos = () =>{


        //main container
        const todo = document.createElement('div')
        // create inputs 
        const checkbox_input = document.createElement('input');
        const todo_input = document.createElement('input');
        // create types of input 
        checkbox_input.type = "checkbox";
        todo_input.type = "textbox";
        // add todo to the container 
        todo.appendChild(checkbox_input);
        todo.appendChild(todo_input);
        //add css
        todo.classList.add('todo');
        // add event listen to the text input 
        todo_input.addEventListener('keyup',(e)=>{
            if(e.key == "Enter" && todo_input.value != ""){
                mktodos();
                let obj = JSON.parse(localStorage.getItem(id));
                console.log(obj); 
                obj.todos.push("hello")
                localStorage.setItem('Default',JSON.stringify(obj))
            }
        })

            //checkbox input 
        todo_container.appendChild(todo);
    }
    const add_to_localstorage = (container, todo) =>{


    }

    
    //
    mktodos();
     
    title.textContent = "hello"


    top_container.appendChild(title);

    container.appendChild(top_container)
    container.appendChild(todo_container)

    //add css
    container.classList.add('todo_screen_container')
    top_container.classList.add('todo_header');
    todo_container.classList.add('todo_container');


    return {
        container,
        mktodos
    }
})();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _exports_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exports/header.js */ "./src/exports/header.js");
/* harmony import */ var _exports_container_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exports/container.js */ "./src/exports/container.js");




(() =>{
    
    const main_container = document.querySelector("#container");
    main_container.appendChild((0,_exports_header_js__WEBPACK_IMPORTED_MODULE_1__.header)());
    main_container.appendChild(_exports_container_js__WEBPACK_IMPORTED_MODULE_2__.container);

})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNvQjtBQUNTOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMERBQU07QUFDckMsK0JBQStCLDREQUFTOztBQUV4QyxDQUFDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL3N0eWxlcy5jc3M/YThkMCIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2V4cG9ydHMvYWRkUHJvamVjdF9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvZXhwb3J0cy9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvZXhwb3J0cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvZXhwb3J0cy9tYWluX2ZyYW1lLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2V4cG9ydHMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9leHBvcnRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvZXhwb3J0cy90b2RvX3NjcmVlbi5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1tYWluLWJhY2tncm91bmQtY29sb3I6IGhzbCgyMzQsIDU2JSwgNTUlKTtcXG4gIC0tbWFpbi1mb2xkZXItY29sb3JzOiBoc2woMjM1LCAxOCUsIDM3JSk7XFxuICAtLW1haW4tZm9sZGVyLWNvbG9ycy1ob3ZlcjogaHNsKDIzNSwgMjAlLCAyMSUpO1xcbiAgLS1tYWluLWJ1dHRvbi1jb2xvcjogaHNsKDIzNSwgNTYlLCA3MCUpO1xcbiAgLS1tYWluLWJ1dHRvbi1jb2xvci1ob3ZlcjogaHNsKDIzNSwgNTQlLCA2MyUpO1xcbiAgLS1tYWluLXRleHQtY29sb3I6IHdoaXRlO1xcbiAgLS1oZWFkZXItc2l6ZTogMnJlbTtcXG4gIC0tc2NyZWVuLWJnLWNvbG9yOiBoc2woMjM1LCA2MyUsIDgyJSk7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXItc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uZHVlIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMjVyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuLmR1ZSBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1idXR0b24tY29sb3IpO1xcbn1cXG5cXG4uZHVlIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJ1dHRvbi1jb2xvci1ob3Zlcik7XFxufVxcbi5tYWluX3NjcmVlbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJ1dHRvbi1jb2xvci1ob3Zlcik7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1lYXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubWFrZV9mb2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAwLjI1cmVtO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuLm1ha2VfZm9sZGVyIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm1ha2VfZm9sZGVyIGJ1dHRvbiB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMnJlbSAwLjI1cmVtIDJyZW07XFxufVxcbi5tYWtlX2ZvbGRlciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG4ubWFrZV9mb2xkZXIgaW5wdXQge1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG59XFxuXFxuLm1haW5fZnJhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5mb2xkZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDhyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZvbGRlci1jb2xvcnMpO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uZm9sZGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9sZGVyLWNvbG9ycy1ob3Zlcik7XFxufVxcblxcbi50b2RvX3NjcmVlbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4tYmctY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udG9kb19oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9kb19jb250YWluZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRvZG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLnRvZG8gaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuLWJnLWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IGJsYWNrIHNvbGlkO1xcbn1cXG4udG9kbyA6bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udG9kb19kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQ0FBMkM7RUFDM0Msd0NBQXdDO0VBQ3hDLDhDQUE4QztFQUM5Qyx1Q0FBdUM7RUFDdkMsNkNBQTZDO0VBQzdDLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDOztBQUVBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsOENBQThDO0VBQzlDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM0LCA1NiUsIDU1JSk7XFxuICAtLW1haW4tZm9sZGVyLWNvbG9yczogaHNsKDIzNSwgMTglLCAzNyUpO1xcbiAgLS1tYWluLWZvbGRlci1jb2xvcnMtaG92ZXI6IGhzbCgyMzUsIDIwJSwgMjElKTtcXG4gIC0tbWFpbi1idXR0b24tY29sb3I6IGhzbCgyMzUsIDU2JSwgNzAlKTtcXG4gIC0tbWFpbi1idXR0b24tY29sb3ItaG92ZXI6IGhzbCgyMzUsIDU0JSwgNjMlKTtcXG4gIC0tbWFpbi10ZXh0LWNvbG9yOiB3aGl0ZTtcXG4gIC0taGVhZGVyLXNpemU6IDJyZW07XFxuICAtLXNjcmVlbi1iZy1jb2xvcjogaHNsKDIzNSwgNjMlLCA4MiUpO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLXNpemUpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogOHJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmR1ZSB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcbi5kdWUgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYnV0dG9uLWNvbG9yKTtcXG59XFxuXFxuLmR1ZSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1idXR0b24tY29sb3ItaG92ZXIpO1xcbn1cXG4ubWFpbl9zY3JlZW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1idXR0b24tY29sb3ItaG92ZXIpO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogNzB2aDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZWF0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLm1ha2VfZm9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMC4yNXJlbTtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxufVxcbi5tYWtlX2ZvbGRlciBsYWJlbCB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5tYWtlX2ZvbGRlciBidXR0b24ge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDJyZW0gMC4yNXJlbSAycmVtO1xcbn1cXG4ubWFrZV9mb2xkZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuLm1ha2VfZm9sZGVyIGlucHV0IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxufVxcblxcbi5tYWluX2ZyYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZm9sZGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1mb2xkZXItY29sb3JzKTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmZvbGRlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZvbGRlci1jb2xvcnMtaG92ZXIpO1xcbn1cXG5cXG4udG9kb19zY3JlZW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuLWJnLWNvbG9yKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnRvZG9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvZG9fY29udGFpbmVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50b2RvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi50b2RvIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbi1iZy1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBibGFjayBzb2xpZDtcXG59XFxuLnRvZG8gOm50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRvZG9fZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vc3R5bGVzLmNzcydcbmltcG9ydCB7c2lkZWJhcn0gZnJvbSAnLi9zaWRlYmFyLmpzJ1xuXG5cbi8vVGhpcyBzY3JlZW4gcG9wcyB1cCB3aGVuIHlvdSBjbGljayBvbiB0aGUgKyB1bmRlciBhZGQgcHJvamVjdCBcbmNvbnN0IGFkZF9wcm9qZWN0X3NjcmVlbiAgPSAoKCk9PntcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgaW5wdXQgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWtlX2ZvbGRlcicpO1xuXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJjcmVhdGUgcHJvamVjdFwiXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIlxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCJcblxuICAgIC8vYnV0dG9uIGFkZCBldmVudCBsaXN0ZW4gXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PntcbiAgICAgICAgaWYoY2hlY2tfZXhzaXRzKGlucHV0LnZhbHVlKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklUIEVYSVNUU1wiKVxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIHNpZGViYXIubWtGb2xkZXIoaW5wdXQudmFsdWUpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7IFxuXG4gICAgfSlcblxuICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgY29uc3QgY2hlY2tfZXhzaXRzID0gKHByb2plY3QpID0+e1xuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSlcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxrZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKGtleXNbaV0gPT0gcHJvamVjdCApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIHJldHVybiBjb250YWluZXJcbn0pKClcbmV4cG9ydHtcbiAgICBhZGRfcHJvamVjdF9zY3JlZW5cbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy5jc3MnXG5pbXBvcnQge3NpZGViYXJ9IGZyb20gJy4vc2lkZWJhci5qcydcbmltcG9ydCB7bWFpbl9mcmFtZX0gZnJvbSAnLi9tYWluX2ZyYW1lLmpzJztcblxuXG4vL0NvbnRhaW5zIHRoZSBzaWRlIGJhciB0aGUgdGhlIGVsZW1lbnRzIHRoYXQgcG9wIHVwIHdoZW4gYSBidXR0b24gb24gdGhlIHNpZGUgaXMgcHJlc3NlZCBcbmNvbnN0IGNvbnRhaW5lciA9IChmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvLyB0aGlzIGlzIHRoZSBtYWluIGNvbnRpYW5lciBvZiBldmVyeXRoaW5nIHVuZGVyIHRoZSBoZWFkZXJcbiAgICBjb25zdCBtYWluX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIuc2lkZWJhcl9jb250YWluZXIpO1xuICAgIG1haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5fZnJhbWUuZ2V0RnJhbWUoKSk7XG5cbiAgICAvL2FkZCBjc3MgdG8gZWxlbWVudHMgIFxuICAgIG1haW5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lYXQnKTtcblxuICAgIHJldHVybiBtYWluX2NvbnRhaW5lclxuXG59KSgpXG5cbmV4cG9ydHtcbiAgICBjb250YWluZXJcbn0iLCJpbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XG5cbi8vY3JlYXRlIGhlYWRlciBmb3IgdG9kbyBhcHAgXG5mdW5jdGlvbiBoZWFkZXIoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZG8gTGlzdFwiXG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnR7XG4gICAgaGVhZGVyXG59IiwiaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgdG9kb19zY3JlZW4gfSBmcm9tICcuL3RvZG9fc2NyZWVuLmpzJztcbmltcG9ydHthZGRfcHJvamVjdF9zY3JlZW59IGZyb20nLi9hZGRQcm9qZWN0X3NjcmVlbi5qcydcblxuLy8gdGhpcyBpcyB3aGVyZSBhbGwgdGhlIHByb2plY3RzIGFuZCB0aGVpciB0b2RvcyBhcmUgZ29pbmcgdG8gYmUgc2VlbiB3aXRoIHRoaXMgeW91IGNhbiBzZXQgYW5kIGdldCB0aGUgY3VycmVudCBzY3JlZW4geW91IGFyZSBzZWVpbmcgXG5jb25zdCBtYWluX2ZyYW1lID0gKCgpID0+e1xuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQoYWRkX3Byb2plY3Rfc2NyZWVuKVxuICAgIGZyYW1lLmNsYXNzTGlzdC5hZGQoJ21haW5fZnJhbWUnKVxuICAgIFxuXG4gICAgY29uc3Qgc2V0RnJhbWUgPSAoc2NyZWVuKSA9PntcbiAgICAgICAgZnJhbWUuaW5uZXJIVE1MID0gXCJcIjsgXG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHNjcmVlbik7XG4gICAgfVxuICAgIGNvbnN0IGdldEZyYW1lID0oKSA9PntcbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldEZyYW1lLFxuICAgICAgICBnZXRGcmFtZVxuICAgIH1cblxufSkoKVxuXG5leHBvcnR7XG4gICAgbWFpbl9mcmFtZVxufVxuXG5cbiIsIlxuY29uc3QgcmVuZGVyX3BhZ2UgPSAoaXRlbXMpID0+IHtcblxuICAgIGNvbnN0IHJlbmRlclRvZG9zID0gKGl0ZW1zKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1zLnRvZG9zKTtcbiAgICAgICAgbGV0IGFyciA9IGl0ZW1zLnRvZG9zO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgYXJyLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG8gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveF9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0b2RvX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgY2hlY2tib3hfaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICAgIHRvZG9faW5wdXQudHlwZSA9IFwidGV4dGJveFwiXG5cbiAgICAgICAgICAgIHRvZG9faW5wdXQudmFsdWUgPSBhcnJbaV07XG5cbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoY2hlY2tib3hfaW5wdXQpO1xuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvX2lucHV0KTtcblxuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBldmVudCBsaXN0ZW4gdG8gdGhlIHRleHQgaW5wdXQgXG4gICAgICAgICAgICB0b2RvX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywoZSk9PntcbiAgICAgICAgICAgIGlmKGUua2V5ID09IFwiRW50ZXJcIiAmJiB0b2RvX2lucHV0LnZhbHVlICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIG1rdG9kb3MoKTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvYmoudGl0bGUpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmopOyBcbiAgICAgICAgICAgICAgICBvYmoudG9kb3MucHVzaCgpXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbXMudGl0bGUsSlNPTi5zdHJpbmdpZnkob2JqKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG5cbiAgICAgICAgICAgIC8vY2hlY2tib3ggaW5wdXQgXG4gICAgICAgIHRvZG9fY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgICAgICBjb25zdCB0b2RvICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tib3hfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdG9kb19pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgIGNoZWNrYm94X2lucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICB0b2RvX2lucHV0LnR5cGUgPSBcInRleHRib3hcIlxuXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGNoZWNrYm94X2lucHV0KTtcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb19pbnB1dCk7XG5cbiAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuIHRvIHRoZSB0ZXh0IGlucHV0IFxuICAgICAgICAgICAgdG9kb19pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsKGUpPT57XG4gICAgICAgICAgICBpZihlLmtleSA9PSBcIkVudGVyXCIgJiYgdG9kb19pbnB1dC52YWx1ZSAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICByZW5kZXJUb2RvcyhpdGVtcyk7XG5cblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1zLnRpdGxlKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqKTsgXG4gICAgICAgICAgICAgICAgb2JqLnRvZG9zLnB1c2godG9kb19pbnB1dC52YWx1ZSlcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtcy50aXRsZSxKU09OLnN0cmluZ2lmeShvYmopKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcblxuXG4gICAgICAgICAgICAvL2NoZWNrYm94IGlucHV0IFxuICAgICAgICB0b2RvX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKTtcblxuXG5cbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgY29udGFpbmVycyBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgdG9wX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVuZGVyVG9kb3MoaXRlbXMpO1xuXG5cbiAgICAvLyBhZGQgZGF0YSB0byBlbGVtZW50cyBcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW1zLnRpdGxlXG5cbiAgICAvL2FkZCBjc3NcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb19zY3JlZW5fY29udGFpbmVyJylcbiAgICB0b3BfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9faGVhZGVyJyk7XG4gICAgdG9kb19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb19jb250YWluZXInKTtcblxuICAgIFxuICAgIHRvcF9jb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BfY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb19jb250YWluZXIpXG5cblxuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcblxuXG59XG5cbmV4cG9ydCB7XG4gICAgcmVuZGVyX3BhZ2UsXG59IiwiaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgbWFpbl9mcmFtZSB9IGZyb20gJy4vbWFpbl9mcmFtZS5qcyc7XG5pbXBvcnQgeyBhZGRfcHJvamVjdF9zY3JlZW4gfSBmcm9tICcuL2FkZFByb2plY3Rfc2NyZWVuLmpzJztcbmltcG9ydCB7IHRvZG9fc2NyZWVuIH0gZnJvbSAnLi90b2RvX3NjcmVlbic7XG5pbXBvcnQgeyByZW5kZXJfcGFnZSB9IGZyb20gJy4vcmVuZGVyUGFnZS5qcyc7XG5cbi8vc2lkZWJhciB1c2VkIHRvIGFjY2VzcyBwcm9qZWN0cyBhbmQgaGFzIGEgYWRkIHByb2plY3QgYnV0dG9uIHRoYXQgd2lsbCBzZXQgdGhlIHNjcmVlbiB0byBhZGQgcHJvamVjdCBhbmQgdGhlbiBhcHBlbmQgdGhlIHByb2plY3QgdG8gdGhlIHByb2pldCBob2xkZXIgXG5jb25zdCBzaWRlYmFyID0gKGZ1bmN0aW9uICgpIHtcblxuXG4gICAgLy9ob2xkcyBhbGwgdGhlIGVsZW1udHMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgaW4gdGhlIHNpZGViYXJcbiAgICBjb25zdCBzaWRlYmFyX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RzX2NvbnRpYW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy9BZGQgUHJvamV0cyBTZWN0aW9uXG4gICAgY29uc3QgYWRkX3Byb2plY3RfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY3JlYXRlX3Byb2plY3RfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgICAgICAvLyBhZGQgdGV4dCB0byBjb250YWluZXIgYW5kIGJ1dHRvbiBcbiAgICBhZGRfcHJvamVjdF9jb250YWluZXIudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgY3JlYXRlX3Byb2plY3RfYnV0dG9uLmlubmVySFRNTCA9IFwiJiN4MmJcIlxuICAgICAgICAvL2FkZCBidXR0b24gdG8gYWRkX3Byb2plY3RfY29udGFpbmVyXG4gICAgYWRkX3Byb2plY3RfY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZV9wcm9qZWN0X2J1dHRvbilcblxuICAgIC8vRm9sZGVyIGZvciBwcm9qZXRzIHNlY3Rpb25zIFxuXG4gICAgLy9hZGQgY3NzIFxuICAgIHNpZGViYXJfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBhZGRfcHJvamVjdF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHVlJyk7XG5cbiAgICBjcmVhdGVfcHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+e1xuICAgICAgICBtYWluX2ZyYW1lLnNldEZyYW1lKGFkZF9wcm9qZWN0X3NjcmVlbilcbiAgICB9KVxuXG5cbiAgICAvL2Z1bmN0aW9uIHRvIGFkZCBwcm9qZWN0IGZvbGRlcnMgdG8gdGhlIHNpZGViYXJcbiAgICBjb25zdCBta0ZvbGRlciA9ICh0aXRsZSkgPT57XG4gICAgICAgIGlmKHRpdGxlID09IFwiXCIpe1xuICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgfSBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGl0bGUsSlNPTi5zdHJpbmdpZnkoe3RpdGxlOiB0aXRsZSx0b2RvczpbXX0pKVxuICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuXG4gICAgfVxuICAgIGNvbnN0IHJlbmRlclByb2plY3RzID0gKCkgPT57XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKVxuICAgICAgICBwcm9qZWN0c19jb250aWFuZXIuaW5uZXJIVE1MID0gXCJcIjsgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8a2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvbGRlci50ZXh0Q29udGVudCA9IGtleXNbaV07XG4gICAgICAgICAgICBmb2xkZXIuZGF0YXNldC5wcm9qZWN0TmFtZSA9IGtleXNbaV07IFxuICAgICAgICAgICAgZm9sZGVyLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcicpO1xuICAgICAgICAgICAgZm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShmb2xkZXIuZGF0YXNldC5wcm9qZWN0TmFtZSkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAgICAgICAgICAgICBtYWluX2ZyYW1lLnNldEZyYW1lKHJlbmRlcl9wYWdlKGtleSkpXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwcm9qZWN0c19jb250aWFuZXIuYXBwZW5kQ2hpbGQoZm9sZGVyKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCgpID0+e1xuICAgICAgICByZW5kZXJQcm9qZWN0cygpXG4gICAgfSlcblxuXG4gICAgLy9hZGQgc3R1ZmYgdG8gc2lkZWJhciBjb250YWluZXJcbiAgICBzaWRlYmFyX2NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRfcHJvamVjdF9jb250YWluZXIpO1xuICAgIHNpZGViYXJfY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzX2NvbnRpYW5lcik7XG5cblxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaWRlYmFyX2NvbnRhaW5lcixcbiAgICAgICAgbWtGb2xkZXIsXG4gICAgfVxuICAgIFxuXG59KSgpXG5cbmV4cG9ydHtcbiAgICBzaWRlYmFyXG59IiwiaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xuXG5cbi8vVGhpcyBzY3JlZW4gcG9wcyB1cCB3aGVuIHlvdSBjbGljayBvbiBhIHByb2plY3Qgb24gdGhlIHNpZGUgYmFyIG9yIHdoZW4geW91IGNyZWF0ZSBhIG5ldyBwcm9qZWN0IFxuLy9EaXNwbGF5IGFsbCB0b2RvcyBcbi8vIEFkZCBuZXcgdG9kbyBcbi8vcmVtb3ZlIGRvbmUgdG9kbyBcbi8vbWFyayB0by1kb3MgYXMgY29tcGxldGUgXG5jb25zdCB0b2RvX3NjcmVlbiA9ICgoaWQpID0+e1xuXG4gICAgY29uc3QgZGF0YSA9IGlkIDsgXG4gICAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHRvcF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbWt0b2RvcyA9ICgpID0+e1xuXG5cbiAgICAgICAgLy9tYWluIGNvbnRhaW5lclxuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgLy8gY3JlYXRlIGlucHV0cyBcbiAgICAgICAgY29uc3QgY2hlY2tib3hfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0b2RvX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgLy8gY3JlYXRlIHR5cGVzIG9mIGlucHV0IFxuICAgICAgICBjaGVja2JveF9pbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICB0b2RvX2lucHV0LnR5cGUgPSBcInRleHRib3hcIjtcbiAgICAgICAgLy8gYWRkIHRvZG8gdG8gdGhlIGNvbnRhaW5lciBcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZChjaGVja2JveF9pbnB1dCk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb19pbnB1dCk7XG4gICAgICAgIC8vYWRkIGNzc1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbiB0byB0aGUgdGV4dCBpbnB1dCBcbiAgICAgICAgdG9kb19pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsKGUpPT57XG4gICAgICAgICAgICBpZihlLmtleSA9PSBcIkVudGVyXCIgJiYgdG9kb19pbnB1dC52YWx1ZSAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICBta3RvZG9zKCk7XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmopOyBcbiAgICAgICAgICAgICAgICBvYmoudG9kb3MucHVzaChcImhlbGxvXCIpXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RlZmF1bHQnLEpTT04uc3RyaW5naWZ5KG9iaikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vY2hlY2tib3ggaW5wdXQgXG4gICAgICAgIHRvZG9fY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xuICAgIH1cbiAgICBjb25zdCBhZGRfdG9fbG9jYWxzdG9yYWdlID0gKGNvbnRhaW5lciwgdG9kbykgPT57XG5cblxuICAgIH1cblxuICAgIFxuICAgIC8vXG4gICAgbWt0b2RvcygpO1xuICAgICBcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiaGVsbG9cIlxuXG5cbiAgICB0b3BfY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BfY29udGFpbmVyKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvX2NvbnRhaW5lcilcblxuICAgIC8vYWRkIGNzc1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvX3NjcmVlbl9jb250YWluZXInKVxuICAgIHRvcF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb19oZWFkZXInKTtcbiAgICB0b2RvX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvX2NvbnRhaW5lcicpO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG1rdG9kb3NcbiAgICB9XG59KSgpO1xuXG5leHBvcnR7XG4gICAgdG9kb19zY3JlZW5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7aGVhZGVyfSBmcm9tICcuL2V4cG9ydHMvaGVhZGVyLmpzJ1xuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIi4vZXhwb3J0cy9jb250YWluZXIuanNcIjtcblxuKCgpID0+e1xuICAgIFxuICAgIGNvbnN0IG1haW5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG4gICAgbWFpbl9jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIG1haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=