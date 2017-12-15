import React from "react";
import { Switch, Route } from "react-router-dom";

import Shelves from "./components/Shelves";
import Bins from "./components/Bins";
import Detail from "./components/Detail";
import Create from "./components/Create";

export default (
    <Switch>
        <Route component={Shelves} exact path="/" />
        <Route component={Bins} path="/bins/:id" />
        <Route component={Detail} path="/detail/:id" />
        <Route component={Create} path="/create/:id" />
    </Switch>
);
