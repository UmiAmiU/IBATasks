import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const CardContext = React.createContext({
  cards: [],
  add: () => {},
  update: () => {},
  remove: () => {},
});

const url =
  "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json";

export const CardContextProvider = (props) => {
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setCards(
          data.splice(0, 15).map((elem) => ({
            id: uuidv4(),
            header: elem.Name,
            text: elem.About,
          }))
        );
      })
      .catch((err) => console.error(err));
  }, []);

  const add = (card) => setCards([...cards, card]);
  const update = (id) => (newData) =>
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          card.header = newData.header;
          card.text = newData.text;
        }
        return card;
      })
    );
  const remove = (delList) =>
    setCards(cards.filter((card) => !delList.includes(card.id)));

  return (
    <CardContext.Provider value={{ cards, add, update, remove }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContext;
