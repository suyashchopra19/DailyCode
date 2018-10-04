"use strict";

exports.__esModule = true;
exports.default = void 0;

var _prettier = _interopRequireDefault(require("prettier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (code, opts) => _prettier.default.format(code, opts);

exports.default = _default;