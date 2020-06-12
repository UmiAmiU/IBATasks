import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import "./App.css";
import CardList from "./components/CardList";

const ReadCheckbox = styled.input`
  margin-left: 1rem;
  margin-top: 1rem;
`;

function App() {
  const [isReadMode, setReadMode] = React.useState(false);
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
  const cardsToRemove = [];
  const changeCard = (id) => (newData) => {
    const card = cardsData.find((it) => it.id === id);
    card.header = newData.header;
    card.text = newData.text;
  };

  const setRemove = (id) => () => {
    const index = cardsToRemove.indexOf(id);
    if (index === -1) {
      cardsToRemove.push(id);
    } else {
      cardsToRemove.splice(index, 1);
    }
  };

  return (
    <div>
      <Header></Header>
      <div>
        <ReadCheckbox
          type="checkbox"
          onChange={() => setReadMode(!isReadMode)}
        />
        <label>"Режим чтения"</label>
        <input
          type="button"
          value="Удалить выделенные элементы"
          onClick={() => {
            setCardsData(
              cardsData.filter((card) => !cardsToRemove.includes(card.id))
            );
            cardsToRemove.splice(0, cardsToRemove.length);
          }}
          style={{ margin: "1rem" }}
        />
      </div>
      <CardList
        isReadMode={isReadMode}
        cardsData={cardsData}
        changeCard={changeCard}
        setRemove={setRemove}
      />
    </div>
  );
}

export default App;
