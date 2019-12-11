import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Todos, Counter, TodoHooks } from ".";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/counter" component={Counter} />
      <Route path="/todos" component={Todos} />
      <Route exact path="/" component={TodoHooks} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
