import * as React from "react";
import Accordion from "../Accordion";

export default class RAccordion extends Accordion {
    wrap : HTMLDivElement;
    render(){
        return(
            <div ref={(i)=>this.wrap = i} >{this.props.children}</div>
        )
    }
}
