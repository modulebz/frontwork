import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RFrontWork from "./front_work/views/react";
const APP = /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(RFrontWork, {
  app_url: "/npm/frontwork/examples/"
}));
ReactDOM.render(APP, document.getElementById('app'));