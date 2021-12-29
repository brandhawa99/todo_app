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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-background-color: hsl(234, 56%, 55%);\n  --main-folder-colors: hsl(235, 18%, 37%);\n  --main-folder-colors-hover: hsl(235, 20%, 21%);\n  --main-button-color: hsl(235, 56%, 70%);\n  --main-button-color-hover: hsl(235, 54%, 63%);\n  --main-text-color: white;\n  --header-size: 2rem;\n  --screen-bg-color: hsl(235, 63%, 82%);\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  background-color: var(--main-background-color);\n  height: 100%;\n}\n.header {\n  display: flex;\n  padding-left: 1.5rem;\n  align-items: center;\n  font-size: var(--header-size);\n  color: var(--main-text-color);\n  border-bottom: 2px solid black;\n  height: 3.5rem;\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 8rem;\n  padding: 0.5rem;\n}\n.due {\n  color: var(--main-text-color);\n  align-items: center;\n  display: flex;\n  padding-bottom: 1rem;\n  flex-direction: column;\n  gap: 0.25rem;\n  border-bottom: 2px solid black;\n  padding-top: 1rem;\n}\n.due button {\n  border: none;\n  border-radius: 0.25rem;\n  width: 100%;\n  background-color: var(--main-button-color);\n}\n\n.due button:hover {\n  background-color: var(--main-button-color-hover);\n}\n.main_screen {\n  width: 100%;\n  display: flex;\n  flex-grow: 1;\n  background-color: var(--main-button-color-hover);\n  margin-right: 1rem;\n  padding: 2rem;\n  margin-top: 1.5rem;\n  border-radius: 0.5rem;\n  height: 70vh;\n  color: var(--main-text-color);\n  justify-content: center;\n}\n.meat {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.make_folder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.25rem;\n  margin-top: 3rem;\n}\n.make_folder label {\n  font-size: 2rem;\n}\n.make_folder button {\n  align-items: flex-end;\n  margin-top: 1rem;\n  border-radius: 0.25rem;\n  border-style: none;\n  padding: 0.25rem 2rem 0.25rem 2rem;\n}\n.make_folder button:hover {\n  background-color: orange;\n}\n.make_folder input {\n  width: 70%;\n  padding-left: 1rem;\n  height: 1.25rem;\n}\n\n.main_frame {\n  width: 100%;\n  height: 100%;\n}\n.folder {\n  cursor: pointer;\n  display: inline-block;\n  width: 8rem;\n  padding-left: 0.25rem;\n  background-color: var(--main-folder-colors);\n  font-size: 1.25rem;\n  color: var(--main-text-color);\n  text-align: center;\n  border-radius: 0.5rem;\n  margin-top: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.folder:hover {\n  background-color: var(--main-folder-colors-hover);\n}\n\n.todo_screen_container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background-color: var(--screen-bg-color);\n  height: 100%;\n}\n.todo_header {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n}\n.todo_container {\n  box-sizing: border-box;\n  padding: 0.75rem;\n  width: 80%;\n  border: 2px black solid;\n  border-radius: 0.5rem;\n  display: flex;\n}\n.todo {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.todo input {\n  background-color: var(--screen-bg-color);\n  border: none;\n  border-bottom: 0.5px black solid;\n}\n.todo_done {\n  inputtext-decoration: line-through;\n}\n#container {\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,2CAA2C;EAC3C,wCAAwC;EACxC,8CAA8C;EAC9C,uCAAuC;EACvC,6CAA6C;EAC7C,wBAAwB;EACxB,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,8CAA8C;EAC9C,YAAY;AACd;AACA;EACE,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,6BAA6B;EAC7B,6BAA6B;EAC7B,8BAA8B;EAC9B,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,eAAe;AACjB;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,oBAAoB;EACpB,sBAAsB;EACtB,YAAY;EACZ,8BAA8B;EAC9B,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,0CAA0C;AAC5C;;AAEA;EACE,gDAAgD;AAClD;AACA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,gDAAgD;EAChD,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,6BAA6B;EAC7B,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,kCAAkC;AACpC;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,WAAW;EACX,qBAAqB;EACrB,2CAA2C;EAC3C,kBAAkB;EAClB,6BAA6B;EAC7B,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;EACvB,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,wCAAwC;EACxC,YAAY;AACd;AACA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;EACV,uBAAuB;EACvB,qBAAqB;EACrB,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,wCAAwC;EACxC,YAAY;EACZ,gCAAgC;AAClC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,YAAY;AACd","sourcesContent":[":root {\n  --main-background-color: hsl(234, 56%, 55%);\n  --main-folder-colors: hsl(235, 18%, 37%);\n  --main-folder-colors-hover: hsl(235, 20%, 21%);\n  --main-button-color: hsl(235, 56%, 70%);\n  --main-button-color-hover: hsl(235, 54%, 63%);\n  --main-text-color: white;\n  --header-size: 2rem;\n  --screen-bg-color: hsl(235, 63%, 82%);\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  background-color: var(--main-background-color);\n  height: 100%;\n}\n.header {\n  display: flex;\n  padding-left: 1.5rem;\n  align-items: center;\n  font-size: var(--header-size);\n  color: var(--main-text-color);\n  border-bottom: 2px solid black;\n  height: 3.5rem;\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 8rem;\n  padding: 0.5rem;\n}\n.due {\n  color: var(--main-text-color);\n  align-items: center;\n  display: flex;\n  padding-bottom: 1rem;\n  flex-direction: column;\n  gap: 0.25rem;\n  border-bottom: 2px solid black;\n  padding-top: 1rem;\n}\n.due button {\n  border: none;\n  border-radius: 0.25rem;\n  width: 100%;\n  background-color: var(--main-button-color);\n}\n\n.due button:hover {\n  background-color: var(--main-button-color-hover);\n}\n.main_screen {\n  width: 100%;\n  display: flex;\n  flex-grow: 1;\n  background-color: var(--main-button-color-hover);\n  margin-right: 1rem;\n  padding: 2rem;\n  margin-top: 1.5rem;\n  border-radius: 0.5rem;\n  height: 70vh;\n  color: var(--main-text-color);\n  justify-content: center;\n}\n.meat {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.make_folder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.25rem;\n  margin-top: 3rem;\n}\n.make_folder label {\n  font-size: 2rem;\n}\n.make_folder button {\n  align-items: flex-end;\n  margin-top: 1rem;\n  border-radius: 0.25rem;\n  border-style: none;\n  padding: 0.25rem 2rem 0.25rem 2rem;\n}\n.make_folder button:hover {\n  background-color: orange;\n}\n.make_folder input {\n  width: 70%;\n  padding-left: 1rem;\n  height: 1.25rem;\n}\n\n.main_frame {\n  width: 100%;\n  height: 100%;\n}\n.folder {\n  cursor: pointer;\n  display: inline-block;\n  width: 8rem;\n  padding-left: 0.25rem;\n  background-color: var(--main-folder-colors);\n  font-size: 1.25rem;\n  color: var(--main-text-color);\n  text-align: center;\n  border-radius: 0.5rem;\n  margin-top: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.folder:hover {\n  background-color: var(--main-folder-colors-hover);\n}\n\n.todo_screen_container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background-color: var(--screen-bg-color);\n  height: 100%;\n}\n.todo_header {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n}\n.todo_container {\n  box-sizing: border-box;\n  padding: 0.75rem;\n  width: 80%;\n  border: 2px black solid;\n  border-radius: 0.5rem;\n  display: flex;\n}\n.todo {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.todo input {\n  background-color: var(--screen-bg-color);\n  border: none;\n  border-bottom: 0.5px black solid;\n}\n.todo_done {\n  inputtext-decoration: line-through;\n}\n#container {\n  height: 100%;\n}\n"],"sourceRoot":""}]);
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
        _sidebar_js__WEBPACK_IMPORTED_MODULE_1__.sidebar.mkFolder(input.value);
        input.value = ""; 

    })

    // container.appendChild(title);
    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(button);



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



// this is where all the projects and their todos are going to be seen with this you can set and get the current screen you are seeing 
const main_frame = (() =>{
    const frame = document.createElement('div');
    frame.appendChild(_todo_screen_js__WEBPACK_IMPORTED_MODULE_1__.todo_screen)
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
/* harmony import */ var _container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.js */ "./src/exports/container.js");
/* harmony import */ var _main_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main_frame.js */ "./src/exports/main_frame.js");
/* harmony import */ var _addProject_screen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProject_screen.js */ "./src/exports/addProject_screen.js");






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
        _main_frame_js__WEBPACK_IMPORTED_MODULE_2__.main_frame.setFrame(_addProject_screen_js__WEBPACK_IMPORTED_MODULE_3__.add_project_screen)
    })


    //function to add project folders to the sidebar
    const mkFolder = (title) =>{

        const folder = document.createElement('div');
        folder.dataset.projectName = title
        folder.textContent = title; 
        folder.classList.add('folder');

         projects_contianer.appendChild(folder);

    }
    mkFolder("Default")

    //add stuff to sidebar container
    sidebar_container.appendChild(add_project_container);
    sidebar_container.appendChild(projects_contianer);




    return {
        sidebar_container,
        mkFolder
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
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/exports/container.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");




//This screen pops up when you click on a project on the side bar or when you create a new project 
//Display all todos 
// Add new todo 
//remove done todo 
//mark to-dos as complete 
const todo_screen = (() =>{
    
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const top_container = document.createElement('div');
    const todo_container = document.createElement('div');
    
    const todo = document.createElement('div');
    const checkbox_input = document.createElement('input');
    const todo_input = document.createElement('input');

    //checkbox input 
    checkbox_input.type = "checkbox";
    todo_input.type = "textbox";


    //ad stuff to do container 
    todo.appendChild(checkbox_input);
    todo.appendChild(todo_input);

    
    //
    todo_container.appendChild(todo);
     

    title.textContent = "Default"


    top_container.appendChild(title);

    container.appendChild(top_container)
    container.appendChild(todo_container)

    //add css
    container.classList.add('todo_screen_container')
    top_container.classList.add('todo_header');
    todo_container.classList.add('todo_container');
    todo.classList.add('todo');


    return container

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGdEQUFnRCw2Q0FBNkMsbURBQW1ELDRDQUE0QyxrREFBa0QsNkJBQTZCLHdCQUF3QiwwQ0FBMEMsR0FBRyxpQkFBaUIsY0FBYyxlQUFlLG1EQUFtRCxpQkFBaUIsR0FBRyxXQUFXLGtCQUFrQix5QkFBeUIsd0JBQXdCLGtDQUFrQyxrQ0FBa0MsbUNBQW1DLG1CQUFtQixHQUFHLFlBQVksa0JBQWtCLDJCQUEyQixnQkFBZ0Isb0JBQW9CLEdBQUcsUUFBUSxrQ0FBa0Msd0JBQXdCLGtCQUFrQix5QkFBeUIsMkJBQTJCLGlCQUFpQixtQ0FBbUMsc0JBQXNCLEdBQUcsZUFBZSxpQkFBaUIsMkJBQTJCLGdCQUFnQiwrQ0FBK0MsR0FBRyx1QkFBdUIscURBQXFELEdBQUcsZ0JBQWdCLGdCQUFnQixrQkFBa0IsaUJBQWlCLHFEQUFxRCx1QkFBdUIsa0JBQWtCLHVCQUF1QiwwQkFBMEIsaUJBQWlCLGtDQUFrQyw0QkFBNEIsR0FBRyxTQUFTLGtCQUFrQixnQkFBZ0IsaUJBQWlCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdDQUFnQyxpQkFBaUIscUJBQXFCLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLHVCQUF1QiwwQkFBMEIscUJBQXFCLDJCQUEyQix1QkFBdUIsdUNBQXVDLEdBQUcsNkJBQTZCLDZCQUE2QixHQUFHLHNCQUFzQixlQUFlLHVCQUF1QixvQkFBb0IsR0FBRyxpQkFBaUIsZ0JBQWdCLGlCQUFpQixHQUFHLFdBQVcsb0JBQW9CLDBCQUEwQixnQkFBZ0IsMEJBQTBCLGdEQUFnRCx1QkFBdUIsa0NBQWtDLHVCQUF1QiwwQkFBMEIsdUJBQXVCLHlCQUF5Qiw0QkFBNEIscUJBQXFCLDRCQUE0QixHQUFHLGlCQUFpQixzREFBc0QsR0FBRyw0QkFBNEIsa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0JBQWdCLDZDQUE2QyxpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLGdCQUFnQixrQ0FBa0Msd0JBQXdCLEdBQUcsbUJBQW1CLDJCQUEyQixxQkFBcUIsZUFBZSw0QkFBNEIsMEJBQTBCLGtCQUFrQixHQUFHLFNBQVMsa0JBQWtCLHdCQUF3QixjQUFjLEdBQUcsZUFBZSw2Q0FBNkMsaUJBQWlCLHFDQUFxQyxHQUFHLGNBQWMsdUNBQXVDLEdBQUcsY0FBYyxpQkFBaUIsR0FBRyxTQUFTLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxnQ0FBZ0MsZ0RBQWdELDZDQUE2QyxtREFBbUQsNENBQTRDLGtEQUFrRCw2QkFBNkIsd0JBQXdCLDBDQUEwQyxHQUFHLGlCQUFpQixjQUFjLGVBQWUsbURBQW1ELGlCQUFpQixHQUFHLFdBQVcsa0JBQWtCLHlCQUF5Qix3QkFBd0Isa0NBQWtDLGtDQUFrQyxtQ0FBbUMsbUJBQW1CLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLGdCQUFnQixvQkFBb0IsR0FBRyxRQUFRLGtDQUFrQyx3QkFBd0Isa0JBQWtCLHlCQUF5QiwyQkFBMkIsaUJBQWlCLG1DQUFtQyxzQkFBc0IsR0FBRyxlQUFlLGlCQUFpQiwyQkFBMkIsZ0JBQWdCLCtDQUErQyxHQUFHLHVCQUF1QixxREFBcUQsR0FBRyxnQkFBZ0IsZ0JBQWdCLGtCQUFrQixpQkFBaUIscURBQXFELHVCQUF1QixrQkFBa0IsdUJBQXVCLDBCQUEwQixpQkFBaUIsa0NBQWtDLDRCQUE0QixHQUFHLFNBQVMsa0JBQWtCLGdCQUFnQixpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0NBQWdDLGlCQUFpQixxQkFBcUIsR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsdUJBQXVCLDBCQUEwQixxQkFBcUIsMkJBQTJCLHVCQUF1Qix1Q0FBdUMsR0FBRyw2QkFBNkIsNkJBQTZCLEdBQUcsc0JBQXNCLGVBQWUsdUJBQXVCLG9CQUFvQixHQUFHLGlCQUFpQixnQkFBZ0IsaUJBQWlCLEdBQUcsV0FBVyxvQkFBb0IsMEJBQTBCLGdCQUFnQiwwQkFBMEIsZ0RBQWdELHVCQUF1QixrQ0FBa0MsdUJBQXVCLDBCQUEwQix1QkFBdUIseUJBQXlCLDRCQUE0QixxQkFBcUIsNEJBQTRCLEdBQUcsaUJBQWlCLHNEQUFzRCxHQUFHLDRCQUE0QixrQkFBa0IsMkJBQTJCLHdCQUF3QixnQkFBZ0IsNkNBQTZDLGlCQUFpQixHQUFHLGdCQUFnQixrQkFBa0IsZ0JBQWdCLGtDQUFrQyx3QkFBd0IsR0FBRyxtQkFBbUIsMkJBQTJCLHFCQUFxQixlQUFlLDRCQUE0QiwwQkFBMEIsa0JBQWtCLEdBQUcsU0FBUyxrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxlQUFlLDZDQUE2QyxpQkFBaUIscUNBQXFDLEdBQUcsY0FBYyx1Q0FBdUMsR0FBRyxjQUFjLGlCQUFpQixHQUFHLHFCQUFxQjtBQUNsaVE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUErSTtBQUMvSTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLCtIQUFPOzs7O0FBSXlGO0FBQ2pILE9BQU8saUVBQWUsK0hBQU8sSUFBSSxzSUFBYyxHQUFHLHNJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzQjtBQUNjOzs7QUFHcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENxQjtBQUNjO0FBQ087OztBQUczQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtFQUF5QjtBQUN4RCwrQkFBK0IsK0RBQW1COztBQUVsRDtBQUNBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJzQjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pzQjtBQUN5Qjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdEQUFXO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnFCO0FBQ3FCO0FBQ0U7QUFDZTs7O0FBRzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsK0RBQW1CLENBQUMscUVBQWtCO0FBQzlDLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RHNDO0FBQ2pCOzs7QUFHdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLENBQUM7O0FBSUE7Ozs7Ozs7VUN2REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ29CO0FBQ1M7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwREFBTTtBQUNyQywrQkFBK0IsNERBQVM7O0FBRXhDLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvc3R5bGVzLmNzcz9hOGQwIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvZXhwb3J0cy9hZGRQcm9qZWN0X3NjcmVlbi5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9leHBvcnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9leHBvcnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9leHBvcnRzL21haW5fZnJhbWUuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvZXhwb3J0cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2V4cG9ydHMvdG9kb19zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM0LCA1NiUsIDU1JSk7XFxuICAtLW1haW4tZm9sZGVyLWNvbG9yczogaHNsKDIzNSwgMTglLCAzNyUpO1xcbiAgLS1tYWluLWZvbGRlci1jb2xvcnMtaG92ZXI6IGhzbCgyMzUsIDIwJSwgMjElKTtcXG4gIC0tbWFpbi1idXR0b24tY29sb3I6IGhzbCgyMzUsIDU2JSwgNzAlKTtcXG4gIC0tbWFpbi1idXR0b24tY29sb3ItaG92ZXI6IGhzbCgyMzUsIDU0JSwgNjMlKTtcXG4gIC0tbWFpbi10ZXh0LWNvbG9yOiB3aGl0ZTtcXG4gIC0taGVhZGVyLXNpemU6IDJyZW07XFxuICAtLXNjcmVlbi1iZy1jb2xvcjogaHNsKDIzNSwgNjMlLCA4MiUpO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLXNpemUpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogOHJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmR1ZSB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcbi5kdWUgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYnV0dG9uLWNvbG9yKTtcXG59XFxuXFxuLmR1ZSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1idXR0b24tY29sb3ItaG92ZXIpO1xcbn1cXG4ubWFpbl9zY3JlZW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1idXR0b24tY29sb3ItaG92ZXIpO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogNzB2aDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZWF0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLm1ha2VfZm9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMC4yNXJlbTtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxufVxcbi5tYWtlX2ZvbGRlciBsYWJlbCB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5tYWtlX2ZvbGRlciBidXR0b24ge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDJyZW0gMC4yNXJlbSAycmVtO1xcbn1cXG4ubWFrZV9mb2xkZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuLm1ha2VfZm9sZGVyIGlucHV0IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxufVxcblxcbi5tYWluX2ZyYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZm9sZGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1mb2xkZXItY29sb3JzKTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmZvbGRlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZvbGRlci1jb2xvcnMtaG92ZXIpO1xcbn1cXG5cXG4udG9kb19zY3JlZW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuLWJnLWNvbG9yKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnRvZG9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvZG9fY29udGFpbmVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbi50b2RvIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbi1iZy1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBibGFjayBzb2xpZDtcXG59XFxuLnRvZG9fZG9uZSB7XFxuICBpbnB1dHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQ0FBMkM7RUFDM0Msd0NBQXdDO0VBQ3hDLDhDQUE4QztFQUM5Qyx1Q0FBdUM7RUFDdkMsNkNBQTZDO0VBQzdDLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDOztBQUVBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsOENBQThDO0VBQzlDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1tYWluLWJhY2tncm91bmQtY29sb3I6IGhzbCgyMzQsIDU2JSwgNTUlKTtcXG4gIC0tbWFpbi1mb2xkZXItY29sb3JzOiBoc2woMjM1LCAxOCUsIDM3JSk7XFxuICAtLW1haW4tZm9sZGVyLWNvbG9ycy1ob3ZlcjogaHNsKDIzNSwgMjAlLCAyMSUpO1xcbiAgLS1tYWluLWJ1dHRvbi1jb2xvcjogaHNsKDIzNSwgNTYlLCA3MCUpO1xcbiAgLS1tYWluLWJ1dHRvbi1jb2xvci1ob3ZlcjogaHNsKDIzNSwgNTQlLCA2MyUpO1xcbiAgLS1tYWluLXRleHQtY29sb3I6IHdoaXRlO1xcbiAgLS1oZWFkZXItc2l6ZTogMnJlbTtcXG4gIC0tc2NyZWVuLWJnLWNvbG9yOiBoc2woMjM1LCA2MyUsIDgyJSk7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXItc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uZHVlIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMjVyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuLmR1ZSBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1idXR0b24tY29sb3IpO1xcbn1cXG5cXG4uZHVlIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJ1dHRvbi1jb2xvci1ob3Zlcik7XFxufVxcbi5tYWluX3NjcmVlbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJ1dHRvbi1jb2xvci1ob3Zlcik7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1lYXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubWFrZV9mb2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAwLjI1cmVtO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuLm1ha2VfZm9sZGVyIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm1ha2VfZm9sZGVyIGJ1dHRvbiB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMnJlbSAwLjI1cmVtIDJyZW07XFxufVxcbi5tYWtlX2ZvbGRlciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG4ubWFrZV9mb2xkZXIgaW5wdXQge1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG59XFxuXFxuLm1haW5fZnJhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5mb2xkZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDhyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZvbGRlci1jb2xvcnMpO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uZm9sZGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9sZGVyLWNvbG9ycy1ob3Zlcik7XFxufVxcblxcbi50b2RvX3NjcmVlbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4tYmctY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udG9kb19oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9kb19jb250YWluZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuLnRvZG8gaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuLWJnLWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IGJsYWNrIHNvbGlkO1xcbn1cXG4udG9kb19kb25lIHtcXG4gIGlucHV0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uL3N0eWxlcy5jc3MnXG5pbXBvcnQge3NpZGViYXJ9IGZyb20gJy4vc2lkZWJhci5qcydcblxuXG4vL1RoaXMgc2NyZWVuIHBvcHMgdXAgd2hlbiB5b3UgY2xpY2sgb24gdGhlICsgdW5kZXIgYWRkIHByb2plY3QgXG5jb25zdCBhZGRfcHJvamVjdF9zY3JlZW4gID0gKCgpPT57XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGlucHV0ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFrZV9mb2xkZXInKTtcblxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiY3JlYXRlIHByb2plY3RcIlxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiXG5cbiAgICAvL2J1dHRvbiBhZGQgZXZlbnQgbGlzdGVuIFxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XG4gICAgICAgIHNpZGViYXIubWtGb2xkZXIoaW5wdXQudmFsdWUpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7IFxuXG4gICAgfSlcblxuICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG5cblxuICAgIHJldHVybiBjb250YWluZXJcbn0pKClcbmV4cG9ydHtcbiAgICBhZGRfcHJvamVjdF9zY3JlZW5cbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy5jc3MnXG5pbXBvcnQge3NpZGViYXJ9IGZyb20gJy4vc2lkZWJhci5qcydcbmltcG9ydCB7bWFpbl9mcmFtZX0gZnJvbSAnLi9tYWluX2ZyYW1lLmpzJztcblxuXG4vL0NvbnRhaW5zIHRoZSBzaWRlIGJhciB0aGUgdGhlIGVsZW1lbnRzIHRoYXQgcG9wIHVwIHdoZW4gYSBidXR0b24gb24gdGhlIHNpZGUgaXMgcHJlc3NlZCBcbmNvbnN0IGNvbnRhaW5lciA9IChmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvLyB0aGlzIGlzIHRoZSBtYWluIGNvbnRpYW5lciBvZiBldmVyeXRoaW5nIHVuZGVyIHRoZSBoZWFkZXJcbiAgICBjb25zdCBtYWluX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIuc2lkZWJhcl9jb250YWluZXIpO1xuICAgIG1haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5fZnJhbWUuZ2V0RnJhbWUoKSk7XG5cbiAgICAvL2FkZCBjc3MgdG8gZWxlbWVudHMgIFxuICAgIG1haW5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lYXQnKTtcblxuICAgIHJldHVybiBtYWluX2NvbnRhaW5lclxuXG59KSgpXG5cbmV4cG9ydHtcbiAgICBjb250YWluZXJcbn0iLCJpbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XG5cbi8vY3JlYXRlIGhlYWRlciBmb3IgdG9kbyBhcHAgXG5mdW5jdGlvbiBoZWFkZXIoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZG8gTGlzdFwiXG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnR7XG4gICAgaGVhZGVyXG59IiwiaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgdG9kb19zY3JlZW4gfSBmcm9tICcuL3RvZG9fc2NyZWVuLmpzJztcblxuLy8gdGhpcyBpcyB3aGVyZSBhbGwgdGhlIHByb2plY3RzIGFuZCB0aGVpciB0b2RvcyBhcmUgZ29pbmcgdG8gYmUgc2VlbiB3aXRoIHRoaXMgeW91IGNhbiBzZXQgYW5kIGdldCB0aGUgY3VycmVudCBzY3JlZW4geW91IGFyZSBzZWVpbmcgXG5jb25zdCBtYWluX2ZyYW1lID0gKCgpID0+e1xuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQodG9kb19zY3JlZW4pXG4gICAgZnJhbWUuY2xhc3NMaXN0LmFkZCgnbWFpbl9mcmFtZScpXG4gICAgXG5cbiAgICBjb25zdCBzZXRGcmFtZSA9IChzY3JlZW4pID0+e1xuICAgICAgICBmcmFtZS5pbm5lckhUTUwgPSBcIlwiOyBcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoc2NyZWVuKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0RnJhbWUgPSgpID0+e1xuICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0RnJhbWUsXG4gICAgICAgIGdldEZyYW1lXG4gICAgfVxuXG59KSgpXG5cbmV4cG9ydHtcbiAgICBtYWluX2ZyYW1lXG59XG5cblxuIiwiaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSAnLi9jb250YWluZXIuanMnO1xuaW1wb3J0IHsgbWFpbl9mcmFtZSB9IGZyb20gJy4vbWFpbl9mcmFtZS5qcyc7XG5pbXBvcnQgeyBhZGRfcHJvamVjdF9zY3JlZW4gfSBmcm9tICcuL2FkZFByb2plY3Rfc2NyZWVuLmpzJztcblxuXG4vL3NpZGViYXIgdXNlZCB0byBhY2Nlc3MgcHJvamVjdHMgYW5kIGhhcyBhIGFkZCBwcm9qZWN0IGJ1dHRvbiB0aGF0IHdpbGwgc2V0IHRoZSBzY3JlZW4gdG8gYWRkIHByb2plY3QgYW5kIHRoZW4gYXBwZW5kIHRoZSBwcm9qZWN0IHRvIHRoZSBwcm9qZXQgaG9sZGVyIFxuY29uc3Qgc2lkZWJhciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAvL2hvbGRzIGFsbCB0aGUgZWxlbW50cyB0aGF0IGFyZSBnb2luZyB0byBiZSBpbiB0aGUgc2lkZWJhclxuICAgIGNvbnN0IHNpZGViYXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdHNfY29udGlhbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvL0FkZCBQcm9qZXRzIFNlY3Rpb25cbiAgICBjb25zdCBhZGRfcHJvamVjdF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjcmVhdGVfcHJvamVjdF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gICAgICAgIC8vIGFkZCB0ZXh0IHRvIGNvbnRhaW5lciBhbmQgYnV0dG9uIFxuICAgIGFkZF9wcm9qZWN0X2NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBjcmVhdGVfcHJvamVjdF9idXR0b24uaW5uZXJIVE1MID0gXCImI3gyYlwiXG4gICAgICAgIC8vYWRkIGJ1dHRvbiB0byBhZGRfcHJvamVjdF9jb250YWluZXJcbiAgICBhZGRfcHJvamVjdF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlX3Byb2plY3RfYnV0dG9uKVxuXG4gICAgLy9Gb2xkZXIgZm9yIHByb2pldHMgc2VjdGlvbnMgXG5cbiAgICAvL2FkZCBjc3MgXG4gICAgc2lkZWJhcl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgIGFkZF9wcm9qZWN0X2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkdWUnKTtcblxuICAgIGNyZWF0ZV9wcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XG4gICAgICAgIG1haW5fZnJhbWUuc2V0RnJhbWUoYWRkX3Byb2plY3Rfc2NyZWVuKVxuICAgIH0pXG5cblxuICAgIC8vZnVuY3Rpb24gdG8gYWRkIHByb2plY3QgZm9sZGVycyB0byB0aGUgc2lkZWJhclxuICAgIGNvbnN0IG1rRm9sZGVyID0gKHRpdGxlKSA9PntcblxuICAgICAgICBjb25zdCBmb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9sZGVyLmRhdGFzZXQucHJvamVjdE5hbWUgPSB0aXRsZVxuICAgICAgICBmb2xkZXIudGV4dENvbnRlbnQgPSB0aXRsZTsgXG4gICAgICAgIGZvbGRlci5jbGFzc0xpc3QuYWRkKCdmb2xkZXInKTtcblxuICAgICAgICAgcHJvamVjdHNfY29udGlhbmVyLmFwcGVuZENoaWxkKGZvbGRlcik7XG5cbiAgICB9XG4gICAgbWtGb2xkZXIoXCJEZWZhdWx0XCIpXG5cbiAgICAvL2FkZCBzdHVmZiB0byBzaWRlYmFyIGNvbnRhaW5lclxuICAgIHNpZGViYXJfY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZF9wcm9qZWN0X2NvbnRhaW5lcik7XG4gICAgc2lkZWJhcl9jb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNfY29udGlhbmVyKTtcblxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNpZGViYXJfY29udGFpbmVyLFxuICAgICAgICBta0ZvbGRlclxuICAgIH1cbiAgICBcblxufSkoKVxuXG5leHBvcnR7XG4gICAgc2lkZWJhclxufSIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gJy4vY29udGFpbmVyJ1xuaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xuXG5cbi8vVGhpcyBzY3JlZW4gcG9wcyB1cCB3aGVuIHlvdSBjbGljayBvbiBhIHByb2plY3Qgb24gdGhlIHNpZGUgYmFyIG9yIHdoZW4geW91IGNyZWF0ZSBhIG5ldyBwcm9qZWN0IFxuLy9EaXNwbGF5IGFsbCB0b2RvcyBcbi8vIEFkZCBuZXcgdG9kbyBcbi8vcmVtb3ZlIGRvbmUgdG9kbyBcbi8vbWFyayB0by1kb3MgYXMgY29tcGxldGUgXG5jb25zdCB0b2RvX3NjcmVlbiA9ICgoKSA9PntcbiAgICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgdG9wX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoZWNrYm94X2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0b2RvX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIC8vY2hlY2tib3ggaW5wdXQgXG4gICAgY2hlY2tib3hfaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICB0b2RvX2lucHV0LnR5cGUgPSBcInRleHRib3hcIjtcblxuXG4gICAgLy9hZCBzdHVmZiB0byBkbyBjb250YWluZXIgXG4gICAgdG9kby5hcHBlbmRDaGlsZChjaGVja2JveF9pbnB1dCk7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvX2lucHV0KTtcblxuICAgIFxuICAgIC8vXG4gICAgdG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG4gICAgIFxuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkRlZmF1bHRcIlxuXG5cbiAgICB0b3BfY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BfY29udGFpbmVyKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvX2NvbnRhaW5lcilcblxuICAgIC8vYWRkIGNzc1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvX3NjcmVlbl9jb250YWluZXInKVxuICAgIHRvcF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb19oZWFkZXInKTtcbiAgICB0b2RvX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvX2NvbnRhaW5lcicpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG5cbn0pKCk7XG5cbmV4cG9ydHtcbiAgICB0b2RvX3NjcmVlblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHtoZWFkZXJ9IGZyb20gJy4vZXhwb3J0cy9oZWFkZXIuanMnXG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi9leHBvcnRzL2NvbnRhaW5lci5qc1wiO1xuXG4oKCkgPT57XG4gICAgXG4gICAgY29uc3QgbWFpbl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcbiAgICBtYWluX2NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgbWFpbl9jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxufSkoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==