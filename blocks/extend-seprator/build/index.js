/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockist/extend-seprator","version":"0.1.0","title":"Extend Seprator","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"extend-seprator","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 			// no module.id needed
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);








/**
 * Add the attribute to the block.
 * This is the attribute that will be saved to the database.
 *
 * @param {object} settings block settings
 * @param {string} name block name
 * @returns {object} modified settings
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#blocks-registerblocktype
 */
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)("blocks.registerBlockType", "intele/extended-separator", function (settings, name) {
  if (name !== "core/separator") {
    return settings;
  }
  return {
    ...settings,
    supports: {
      ...settings.supports,
      spacing: {
        margin: ["top", "bottom", "right", "left"]
      },
      style: {
        type: "object",
        default: {
          width: {
            type: "number",
            default: 100
          },
          opacity: {
            type: 'number',
            default: 100 // Default opacity value
          }
        }
      }
    },
    attributes: {
      ...settings.attributes,
      opacity: {
        type: 'number',
        default: 100 // Default opacity value
      },
      width: {
        type: "number",
        default: 100
      },
      margin: {
        type: "string",
        default: "auto"
      },
      height: {
        type: "number",
        default: 1
      }
    }
  };
});

/**
 * Edit component for the block.
 *
 * @param {object} props block props
 * @returns {JSX}
 */
function Edit(props) {
  var opacity = props.attributes.opacity || 1;
  var {
    opacity
  } = props.attributes;
  const alignment = [{
    "label": "Start",
    "value": "0 0 0 0"
  }, {
    "label": "Center",
    "value": "auto"
  }, {
    "label": "End",
    "value": "0 0 0 auto"
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Separator Opacity Control")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    value: opacity,
    min: 0,
    max: 1,
    step: 0.01,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Opacity", _block_json__WEBPACK_IMPORTED_MODULE_4__.textdomain),
    onChange: newValue => {
      props.setAttributes({
        opacity: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    value: props.attributes.width,
    min: 1,
    max: 100,
    step: 1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Custom Width", _block_json__WEBPACK_IMPORTED_MODULE_4__.textdomain),
    onChange: newValue => {
      props.setAttributes({
        width: parseInt(newValue)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    value: props.attributes.height,
    min: 0,
    max: 10,
    step: 1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Custom Height", _block_json__WEBPACK_IMPORTED_MODULE_4__.textdomain),
    onChange: newValue => {
      props.setAttributes({
        height: parseInt(newValue)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mb-3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Alignment")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group mb-4"
  }, alignment.map(item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: item.label,
    onClick: () => props.setAttributes({
      margin: item.value
    }),
    className: `btn btn-sm text-black btn-outline-primary ${props.attributes.margin === item.value ? "btn-primary" : ""}`
  }, item.label))))));
}

/**
 * Add the edit component to the block.
 * This is the component that will be rendered in the editor.
 * It will be rendered after the original block edit component.
 *
 * @param {function} BlockEdit Original component
 * @returns {function} Wrapped component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)("editor.BlockEdit", "intele/extended-separator", (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (props.name !== "core/separator") {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const css = `
				.separator-extend .wp-block-separator  {
					width: 100% !important;
					opacity:1 !important;
				}
			`;
    const separatorStyle = {
      "opacity": props.attributes.opacity,
      "width": props.attributes.width + "%",
      "margin": props.attributes.margin,
      "height": props.attributes.height + "rem"
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "separator-extend alignfull",
      style: separatorStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Edit, {
      ...props
    }));
  };
}));
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.getSaveContent.extraProps', "intele/extended-separator", function (extraProps, blockType, attributes) {
  const {
    opacity,
    width,
    margin
  } = attributes;
  if (blockType.name === 'core/separator') {}
  return extraProps;
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map