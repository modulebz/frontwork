import * as React from "react";
import Block from "../Block";

export default class RBlock extends Block {
    wrap : HTMLDivElement;
    render(){
        return(
            <div ref={(i)=>this.wrap = i} >{this.props.children}</div>
        )
    }
}
