import React from "react";
import ReactDom from "react-dom";
import Router from './router'
import './default.css'

import {StateProvider} from "./components/stateManagement/store"

ReactDom.render(
    <StateProvider>
        <Router />
    </StateProvider>,
    document.getElementById('root')
);