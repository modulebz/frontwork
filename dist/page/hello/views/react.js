function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from "react";
import Hello from "../Hello";
export default class RHello extends Hello {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "wrap", void 0);
  }

  render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      ref: function (i) {
        return _this.wrap = i;
      }
    }, "\u041F\u0440\u0438\u0432\u0435\u0442. \u041F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u044D\u0442\u043E\u0433\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430 \u043C\u043E\u0436\u043D\u043E \u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C");
  }

}