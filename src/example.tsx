import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom';
import RFrontWork from "./front_work/views/react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-pug';
import 'prismjs/components/prism-stylus';
import 'prismjs/components/prism-json';

const pug = require('pug');
//console.log('hello',pug.render("p Hello world!\n  s stroke"))
//const stylus = require('stylus');

//import CodeEditor from "./editor";

let users = 'sex'
let text =null
let text2 =null
let text3 =null
let result =null




class APP extends React.Component {
    state = {
        code:"#offers\n" +
            "  .offer_list\n" +
            "    each val in data.offers\n" +
            "      .offer= val.name",
        style:"bsbb()\n" +
            "  box-sizing border-box\n" +
            "html,body\n" +
            "  padding 0\n" +
            "  margin 0\n" +
            ".offer_list\n" +
            "  display flex\n" +
            "  justify-content space-between\n" +
            ".offer\n" +
            "  width 20%\n" +
            "  background red\n" +
            "  border 1px solid blue\n" +
            "  bsbb()\n" +
            "  ",
        data:'{"data":{"offers":[\n' +
            '   {"name":"s1"}\n' +
            '  ,{"name":"s2"}\n' +
            '  ,{"name":"s4"}\n' +
            '  ,{"name":"s5"}\n' +
            ']}}',
    };
    result = null
    componentDidMount() {
        this.click()
    }

    click = ()=>{
        if(this.result!=null) {
            try {
                let x = pug.compile(this.state.code)
                let data = {}
                try {
                    data = JSON.parse(this.state.data)
                } catch (e) {
                    data = {};
                }
                let html = x(data)
                let t = this;
                stylus.render(this.state.style, function (err, css) {
                    console.log(html, css, data )
                    t.result.srcdoc = '<html><body>' + html + '<style>' + css + '</style><script>console.log("sex")</script></body></html>'
                })
            } catch (e){
                this.result.srcdoc = 'error in pug '+e
            }
        }
    }
    render()
    {
        return (<BrowserRouter>
                <table>
                    <tr>
                        <td>
                            <Editor
                                value={this.state.code}
                                onValueChange={code => this.setState({ code })}
                                highlight={code => {
                                    this.click();
                                    return highlight(code, languages.pug)
                                }}
                                padding={10}
                                // style={{ fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 12, }}
                            />
                        </td>
                        <td>
                            <Editor
                                value={this.state.style}
                                onValueChange={style => this.setState({ style})}
                                highlight={stylus => {
                                    this.click();
                                    return highlight(stylus, languages.stylus)
                                }}
                                padding={10}
                                // style={{ fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 12, }}
                            />
                        </td>
                        <td>
                            <Editor
                                value={this.state.data}
                                onValueChange={data => this.setState({ data })}
                                highlight={data => {
                                    this.click();
                                    return highlight(data, languages.json)
                                }}
                                padding={10}
                                // style={{ fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 12, }}
                            />
                        </td>
                    </tr>
                </table>


                {/*
        <CodeEditor language={"pug"}/>
        <CodeEditor language={"stylus"}/>
        <CodeEditor language={"json"}/>
        */}

                <iframe ref={i => this.result = i}
                        srcDoc="<html><body><p>The <b>content</b> <p>you see here will never be affected by the CSS of its parent container. It supposed to be rendered in black on a white background.</body></html>"></iframe>

                <RFrontWork
                    app_url={"/npm/frontwork/examples/"}
                />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<APP/> , document.getElementById('app') );

