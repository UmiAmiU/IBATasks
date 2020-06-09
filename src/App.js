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
    {
      id: 4656,
      header: "Hello",
      text:
        "Интеллект естественно понимает под собой интеллигибельный закон внешнего мира.",
    },
    {
      id: 3442,
      header: "My little friend",
      text:
        "Отсюда естественно следует, что автоматизация дискредитирует предмет деятельности.",
    },
    {
      id: 6891,
      header: "Parapapa",
      text: "Сомнение рефлектирует естественный закон исключённого третьего.",
    },
    {
      id: 1743,
      header: "Cool headar",
      text:
        "Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс.",
    },
    {
      id: 5124,
      header: "False confidence",
      text: " Смысл жизни, следовательно, творит данный закон внешнего мира.",
    },
    {
      id: 2733,
      header: "Lol",
      text:
        "Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибель.",
    },
    {
      id: 5473,
      header: "Wgite lor",
      text: "Дискретность амбивалентно транспонирует гравитационный парадокс.",
    },
  ]);
  const [isReadMode, setReadMode] = React.useState(false);
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
      <div>
        <label>"Режим чтения"</label>
        <input type="checkbox" onChange={() => setReadMode(!isReadMode)} />
      </div>
      <div style={{ padding: "10px" }}>
        {cardsData.map((card) => (
          <Card
            key={card.id}
            header={card.header}
            text={card.text}
            onCardChange={changeCard(card.id)}
            isReadMode={isReadMode}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
