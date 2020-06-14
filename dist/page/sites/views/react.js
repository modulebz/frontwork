function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from "react";
import Sites from "../Sites";
import { G } from "../../../config/global";
import { Link, Route, Routes } from "react-router-dom";
import { EAppPages } from "../../../enum/EAppPages";
import RYandexTurbo from "../../yandex_turbo/views/react";
export default class RSites extends Sites {
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
    }, "\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0441\u0430\u0439\u0442\u043E\u0432", /*#__PURE__*/React.createElement(Link, {
      to: G.makeAppUrl(EAppPages[EAppPages.sites] + '/yandex_turbo/1/')
    }, "\u042F\u043D\u0434\u0435\u043A\u0441 \u0442\u0443\u0440\u0431\u043E"), /*#__PURE__*/React.createElement(Link, {
      to: G.makeAppUrl(EAppPages[EAppPages.sites] + '/html/1/')
    }, "HTML \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
      path: '/html/:id',
      element: /*#__PURE__*/React.createElement("div", null, "\u042F html \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430")
    }), /*#__PURE__*/React.createElement(Route, {
      path: '/yandex_turbo/:id',
      element: /*#__PURE__*/React.createElement(RYandexTurbo, null)
    })));
  }

}