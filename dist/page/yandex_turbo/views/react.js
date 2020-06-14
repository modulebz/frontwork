function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from "react";
import YandexTurbo from "../YandexTurbo";
import RAccordion from "../accordion/views/react";
export default class RYandexTurbo extends YandexTurbo {
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
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "\u0422\u0443\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0431\u043B\u043E\u043A\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "\u0422\u0443\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432", /*#__PURE__*/React.createElement(RAccordion, {
      position: 5
    }))));
  }

}