import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header></Header>
      <Card
        header="Great News"
        text="Импликация, следовательно, контролирует бабувизм, открывая новые горизонты."
      />
    </div>
  );
}

export default App;
