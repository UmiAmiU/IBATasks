import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [cardsData, setCardsData] = React.useState([
    {
      id: 2314,
      header: "Great News",
      text:
        "Импликация, следовательно, контролирует бабувизм, открывая новые горизонты.",
    },
  ]);
  const changeCard = (id) => (newData) => {
    const cards = cardsData.map((card) => {
      if (card.id === id) {
        card.header = newData.header;
        card.text = newData.text;
      }
      return card;
    });
    setCardsData(cards);
  };

  return (
    <div>
      <Header></Header>
      <div style={{ paddingTop: "10px", paddingLeft: "10px" }}>
        <Card
          header={cardsData[0].header}
          text={cardsData[0].text}
          onCardChange={changeCard(cardsData[0].id)}
        />
      </div>
    </div>
  );
}

export default App;
