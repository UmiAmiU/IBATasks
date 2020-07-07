import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Auth from "./components/Auth";
import BigCard from "./components/BigCard";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/card/:id" component={BigCard} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
