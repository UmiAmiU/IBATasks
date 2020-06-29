import React from "react";

const CardContext = React.createContext({
  cards: [],
  add: () => {},
  update: () => {},
  remove: () => {},
});

export default CardContext;
