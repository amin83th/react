import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from './PageElement/Header/Header';
import Home from "./pages/Home";
import Add from "./pages/Add";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Add">
          <Add />
        </Route>
        <Route path="/Favorite">
          <Favorite />
        </Route>
      </Switch>
      </div>
  );
}
export default App;
