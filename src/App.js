import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import "./App.css";
import CardList from "./components/CardList";
import { v4 as uuidv4 } from "uuid";

const ReadCheckbox = styled.input`
  margin-left: 1rem;
  margin-top: 1rem;
`;

function App() {
  const [isReadMode, setReadMode] = React.useState(false);
  const [isAddMode, setAddMode] = React.useState(false);
  const [cardsData, setCardsData] = React.useState([
    {
      id: "4b6088bc-8362-47ab-ba2e-9bc17412b2ce",
      header: "Great News",
      text:
        "Импликация, следовательно, контролирует бабувизм, открывая новые горизонты.",
    },
    {
      id: "60053808-a270-49a3-bbdd-e2730188b111",
      header: "Hello",
      text:
        "Интеллект естественно понимает под собой интеллигибельный закон внешнего мира.",
    },
    {
      id: "275ee7c4-bada-4ef1-96ed-55c48a28cefd",
      header: "My little friend",
      text:
        "Отсюда естественно следует, что автоматизация дискредитирует предмет деятельности.",
    },
    {
      id: "1f67ef92-f746-4bbd-8bca-9b49f7ef132e",
      header: "Parapapa",
      text: "Сомнение рефлектирует естественный закон исключённого третьего.",
    },
    {
      id: "130ff43d-4b67-4293-b7f9-ec6379435678",
      header: "Cool headar",
      text:
        "Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс.",
    },
    {
      id: "ff75c686-adce-4c51-a9fc-13d8d53c4a19",
      header: "False confidence",
      text: " Смысл жизни, следовательно, творит данный закон внешнего мира.",
    },
    {
      id: "f53c31d3-de8e-4d16-8667-11607f9e9c3f",
      header: "Lol",
      text:
        "Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибель.",
    },
    {
      id: "92241b65-ed03-4cdc-aeec-741c42917d22",
      header: "Wgite lor",
      text: "Дискретность амбивалентно транспонирует гравитационный парадокс.",
    },
  ]);
  const cardsToRemove = [];
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

  const setRemove = (id) => () => {
    const index = cardsToRemove.indexOf(id);
    if (index === -1) {
      cardsToRemove.push(id);
    } else {
      cardsToRemove.splice(index, 1);
    }
  };

  const [values, setValues] = React.useState({
    header: "",
    text: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
          value={isAddMode ? "Добавить" : "Добавить новый элемент"}
          onClick={() => {
            if (isAddMode) {
              cardsData.push({
                id: uuidv4(),
                header: values.header,
                text: values.text,
              });
              setValues({
                header: "",
                text: "",
              });
              setAddMode(false);
            } else {
              setAddMode(true);
            }
          }}
          style={{ margin: "1rem" }}
        />
        {isAddMode && (
          <input
            type="button"
            value="Отмена"
            onClick={() => {
              setValues({
                header: "",
                text: "",
              });
              setAddMode(false);
            }}
          />
        )}
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
      {isAddMode && (
        <div>
          <input
            type="text"
            onChange={handleChange("header")}
            style={{ margin: "5px" }}
          />
          <textarea
            style={{ margin: "5px", resize: "none", width: "90%" }}
            rows="10"
            onChange={handleChange("text")}
          ></textarea>
        </div>
      )}
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
