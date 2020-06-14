import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom';
import RFrontWork from "./front_work/views/react";

const APP =
    <BrowserRouter>
        <RFrontWork
            app_url={"/npm/frontwork/examples/"}
        />
    </BrowserRouter>

ReactDOM.render(APP , document.getElementById('app') );

