import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Auth from "./components/Auth";
import NotFound from "./components/NotFound";
import { CardContextProvider } from "./components/context/card-context.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <CardContextProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/auth" exact component={Auth} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </CardContextProvider>
    </div>
  );
}

export default App;
