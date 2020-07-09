import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Auth from "./components/Auth";
import BigCard from "./components/BigCard";
import NotFound from "./components/NotFound";
import Loader from "./components/Loader";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const isAdmin = useSelector((state) => state.user.admin);
  return (
    <Loader>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/card/:id" component={BigCard} />
          {isAdmin && <Route path="/settings" component={Settings} />}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Loader>
  );
}

export default App;
