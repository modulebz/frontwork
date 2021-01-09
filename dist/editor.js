import * as React from "react";
import { useState, useEffect } from "react";
import Prism from "prismjs";
import 'prismjs/components/prism-pug';
import 'prismjs/components/prism-stylus';
import 'prismjs/components/prism-json';

const CodeEditor = function (props) {
  let text = null;
  const [content, setContent] = useState(props.content);

  const handleKeyDown = function (evt) {
    let value = content;
    let selStartPos = evt.currentTarget.selectionStart; //console.log(evt.currentTarget);
    // handle 4-space indent on

    console.log(evt.key);

    if (evt.key === "Tab") {
      value = value.substring(0, selStartPos) + "    " + value.substring(selStartPos, value.length);
      evt.preventDefault();
      setContent(value);
      text.value = value;
      text.setSelectionRange(selStartPos + 4, selStartPos + 4); //evt.currentTarget.selectionStart = selStartPos + 3;
      //evt.currentTarget.selectionEnd   = selStartPos + 4;
      //evt.currentTarget.setSelectionRange(selStartPos + 3,selStartPos + 4)
    } else {
      selStartPos = null;
    }
  };

  useEffect(function () {
    Prism.highlightAll();
  }, [props.language, content]);
  return /*#__PURE__*/React.createElement("div", {
    className: "code-edit-container"
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "code-input",
    defaultValue: content,
    onChange: function (evt) {
      return setContent(evt.target.value);
    },
    onKeyDown: handleKeyDown,
    ref: function (i) {
      return text = i;
    }
  }), /*#__PURE__*/React.createElement("pre", {
    className: "code-output"
  }, /*#__PURE__*/React.createElement("code", {
    className: "language-" + props.language
  }, content)));
};

export default CodeEditor;