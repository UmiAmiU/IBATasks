import React from "react";

const CardContext = React.createContext({
  cards: [],
  add: () => {},
  update: () => {},
  remove: () => {},
});

export const CardContextProvider = (props) => {
  const [cards, setCards] = React.useState([
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

  const add = (card) => cards.push(card);
  const update = (id) => (newData) => {
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          card.header = newData.header;
          card.text = newData.text;
        }
        return card;
      })
    );
  };
  const remove = (delList) => {
    setCards(cards.filter((card) => !delList.includes(card.id)));
  };

  return (
    <CardContext.Provider value={{ cards, add, update, remove }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContext;
