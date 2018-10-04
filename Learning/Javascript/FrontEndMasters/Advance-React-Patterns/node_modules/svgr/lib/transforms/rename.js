"use strict";

exports.__esModule = true;
exports.pascalCase = void 0;

var _lodash = require("lodash");

const pascalCase = str => (0, _lodash.upperFirst)((0, _lodash.camelCase)(str));

exports.pascalCase = pascalCase;