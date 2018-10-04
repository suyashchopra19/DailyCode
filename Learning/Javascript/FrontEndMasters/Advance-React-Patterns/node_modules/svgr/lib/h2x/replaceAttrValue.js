"use strict";

exports.__esModule = true;
exports.default = void 0;

const replaceAttrValue = (color, newColor) => () => ({
  visitor: {
    JSXAttribute: {
      enter(path) {
        if (path.node.value === color) {
          path.node.value = newColor;
        }
      }

    }
  }
});

var _default = replaceAttrValue;
exports.default = _default;