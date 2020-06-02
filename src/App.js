import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header></Header>
      <div style={{ paddingTop: "10px", paddingLeft: "10px" }}>
        <Card
          header="Great News"
          text="Импликация, следовательно, контролирует бабувизм, открывая новые горизонты."
        />
      </div>
    </div>
  );
}

export default App;
