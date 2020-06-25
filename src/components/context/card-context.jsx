import React from "react";

const CardContext = React.createContext({
  cards: [],
  add: (card) => {
    return this.cards.push(card);
  },
  remove: (id) => {
    this.cards = this.cards.filter((card) => card.id !== id);
  },
});

export default CardContext;
