import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import HOME from "../App";
import DETAILS from "../components/CardInfo";

const ROUTES = () => {
    return (
        <BrowserRouter>
            <Route component={HOME} path="../App" exact />
            <Route component={DETAILS} path="../components/CardInfo" />
        </BrowserRouter>
    )
}

export default ROUTES;