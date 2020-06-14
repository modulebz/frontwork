import * as React from "react";
import Content from "../Content";
import {Link, Route, Routes} from "react-router-dom"
import {G} from "../../../config/global";
import RSites from "../../../page/sites/views/react";
import {EAppPages} from "../../../enum/EAppPages";
import RHello from "../../../page/hello/views/react";

export default class RContent extends Content {
    wrap : HTMLDivElement;
    render(){
        console.log(G.makeAppUrl('sites'))
        return(
            <div ref={(i)=>this.wrap = i} >{this.props.children}
                <Routes>
                    <Route path={G.makeAppUrl()} element={<RHello />}/>
                    <Route path={G.makeAppUrl(EAppPages[EAppPages.sites]+"/*")} element={<RSites />}/>
                </Routes>
            </div>
        )
    }
}
