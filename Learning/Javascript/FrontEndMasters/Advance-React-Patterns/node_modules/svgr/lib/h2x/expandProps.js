"use strict";

exports.__esModule = true;
exports.default = void 0;

var _h2xPluginJsx = require("h2x-plugin-jsx");

const expandProps = () => ({
  visitor: {
    JSXElement: {
      enter(path) {
        if (path.node.name === 'svg' && !path.node.attributes.some(attr => attr && attr.name === 'props')) {
          const props = new _h2xPluginJsx.JSXAttribute();
          props.name = 'props';
          props.spread = true;
          path.node.attributes.push(props);
          path.replace(path.node);
        }
      }

    }
  }
});

var _default = expandProps;
exports.default = _default;