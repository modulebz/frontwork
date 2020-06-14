import * as React from "react";
import FrontWork from "../FrontWork";
import RHeader from "../../blocks/header/views/react";
import RContent from "../../blocks/content/views/react";
import {G} from "../../config/global";

export default class RFrontWork extends FrontWork {
    wrap : HTMLDivElement;
    constructor(props) {
        super(props);
        G.app = this;
    }

    render(){
        return(
            <div ref={(i)=>this.wrap = i} >
                <RHeader/>
                <RContent/>
            </div>
        )
    }
}
