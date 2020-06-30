import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { CardContextProvider } from "./components/context/card-context.jsx";

function App() {
  return (
    <div>
      <CardContextProvider>
        <Header></Header>
        <Main></Main>
      </CardContextProvider>
    </div>
  );
}

export default App;
