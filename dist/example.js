function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RFrontWork from "./front_work/views/react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-pug';
import 'prismjs/components/prism-stylus';
import 'prismjs/components/prism-json';

const pug = require('pug'); //console.log('hello',pug.render("p Hello world!\n  s stroke"))
//const stylus = require('stylus');
//import CodeEditor from "./editor";


let users = 'sex';
let text = null;
let text2 = null;
let text3 = null;
let result = null;

class APP extends React.Component {
  constructor(...args) {
    var _this;

    super(...args);
    _this = this;

    _defineProperty(this, "state", {
      code: "#offers\n" + "  .offer_list\n" + "    each val in data.offers\n" + "      .offer= val.name",
      style: "bsbb()\n" + "  box-sizing border-box\n" + "html,body\n" + "  padding 0\n" + "  margin 0\n" + ".offer_list\n" + "  display flex\n" + "  justify-content space-between\n" + ".offer\n" + "  width 20%\n" + "  background red\n" + "  border 1px solid blue\n" + "  bsbb()\n" + "  ",
      data: '{"data":{"offers":[\n' + '   {"name":"s1"}\n' + '  ,{"name":"s2"}\n' + '  ,{"name":"s4"}\n' + '  ,{"name":"s5"}\n' + ']}}'
    });

    _defineProperty(this, "result", null);

    _defineProperty(this, "click", function () {
      if (_this.result != null) {
        try {
          let x = pug.compile(_this.state.code);
          let data = {};

          try {
            data = JSON.parse(_this.state.data);
          } catch (e) {
            data = {};
          }

          let html = x(data);
          let t = _this;
          stylus.render(_this.state.style, function (err, css) {
            console.log(html, css, data);
            t.result.srcdoc = '<html><body>' + html + '<style>' + css + '</style><script>console.log("sex")</script></body></html>';
          });
        } catch (e) {
          _this.result.srcdoc = 'error in pug ' + e;
        }
      }
    });
  }

  componentDidMount() {
    this.click();
  }

  render() {
    var _this2 = this;

    return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Editor, {
      value: this.state.code,
      onValueChange: function (code) {
        return _this2.setState({
          code
        });
      },
      highlight: function (code) {
        _this2.click();

        return highlight(code, languages.pug);
      },
      padding: 10 // style={{ fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 12, }}

    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Editor, {
      value: this.state.style,
      onValueChange: function (style) {
        return _this2.setState({
          style
        });
      },
      highlight: function (stylus) {
        _this2.click();

        return highlight(stylus, languages.stylus);
      },
      padding: 10 // style={{ fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 12, }}

    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Editor, {
      value: this.state.data,
      onValueChange: function (data) {
        return _this2.setState({
          data
        });
      },
      highlight: function (data) {
        _this2.click();

        return highlight(data, languages.json);
      },
      padding: 10 // style={{ fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 12, }}

    })))), /*#__PURE__*/React.createElement("iframe", {
      ref: function (i) {
        return _this2.result = i;
      },
      srcDoc: "<html><body><p>The <b>content</b> <p>you see here will never be affected by the CSS of its parent container. It supposed to be rendered in black on a white background.</body></html>"
    }), /*#__PURE__*/React.createElement(RFrontWork, {
      app_url: "/npm/frontwork/examples/"
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(APP, null), document.getElementById('app'));