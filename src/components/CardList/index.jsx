import React from "react";
import Card from "../Card";
import withLoadingDelay from "./withLoadingDelay.jsx";
import "./CardList.css";
import CardContext from "../context/card-context";

const CardWithLoad = withLoadingDelay(Card);

const CardList = (props) => {
  const { cards, update } = React.useContext(CardContext);
  return (
    <div className="cardWrapper">
      {cards.map((card) => (
        <CardWithLoad
          key={card.id}
          header={card.header}
          text={card.text}
          onCardChange={update(card.id)}
          onChecking={props.setRemove(card.id)}
          isReadMode={props.isReadMode}
        />
      ))}
    </div>
  );
};

export default CardList;
