import * as React from "react";
import Hello from "../Hello";

export default class RHello extends Hello {
    wrap : HTMLDivElement;
    render(){
        return(
            <div ref={(i)=>this.wrap = i} >Привет. При помощи этого инструмента можно верстать</div>
        )
    }
}
