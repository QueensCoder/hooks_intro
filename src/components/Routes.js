import React from "react";
import { Route, Switch } from "react-router-dom";
import { Todos } from ".";
const Routes = () => (
  <Switch>
    <Route path="/todos" component={Todos} />
  </Switch>
);

export default Routes;
