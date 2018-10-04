"use strict";

exports.__esModule = true;
exports.default = void 0;

var _default = (opts = {}) => {
  let props = '';

  if (opts.expandProps && opts.ref) {
    props = '{svgRef, ...props}';
  } else if (opts.expandProps) {
    props = 'props';
  } else if (opts.ref) {
    props = '{svgRef}';
  }

  return (code, state) => {
    let result = `import React from 'react'\n\n`;
    result += `const ${state.componentName} = (${props}) => ${code}\n\n`;

    if (state.webpack && state.webpack.previousExport) {
      result += `export default ${state.webpack.previousExport}\n`;
      result += `export { ${state.componentName} as ReactComponent }`;
    } else {
      result += `export default ${state.componentName}`;
    }

    return result;
  };
};

exports.default = _default;