import * as React from "react";
import { useState, useEffect } from "react";
import Prism from "prismjs";
import 'prismjs/components/prism-pug';
import 'prismjs/components/prism-stylus';
import 'prismjs/components/prism-json';

const CodeEditor = (props) => {
    let text = null
    const [content, setContent] = useState(props.content);

    const handleKeyDown = (evt) => {
        let value = content;
        let selStartPos = evt.currentTarget.selectionStart;

        //console.log(evt.currentTarget);

        // handle 4-space indent on
        console.log(evt.key)
        if (evt.key === "Tab") {
            value =
                value.substring(0, selStartPos) +
                "    " +
                value.substring(selStartPos, value.length);
            evt.preventDefault();

            setContent(value);
            text.value = value
            text.setSelectionRange(selStartPos+4,selStartPos + 4)

            //evt.currentTarget.selectionStart = selStartPos + 3;
            //evt.currentTarget.selectionEnd   = selStartPos + 4;
            //evt.currentTarget.setSelectionRange(selStartPos + 3,selStartPos + 4)
        } else {
            selStartPos = null;
        }
    };

    useEffect(() => {
        Prism.highlightAll();
    }, [props.language, content]);

    return (
        <div className="code-edit-container">
      <textarea
          className="code-input"
          defaultValue={content}
          onChange={(evt) => setContent(evt.target.value)}
          onKeyDown={handleKeyDown}
          ref={i=>text = i}
      />
    <pre className="code-output">
        <code className={"language-"+props.language}>{content}</code>
      </pre>
        </div>
    );
};

export default CodeEditor;
