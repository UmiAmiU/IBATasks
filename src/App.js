import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Auth from "./components/Auth";
import BigCard from "./components/BigCard";
import NotFound from "./components/NotFound";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Loader>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/card/:id" component={BigCard} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Loader>
  );
}

export default App;
