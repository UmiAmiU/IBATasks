import React from "react";
import Card from "../Card";
import withLoadingDelay from "./withLoadingDelay.jsx";
import "./CardList.css";
import { useSelector } from "react-redux";

const CardWithLoad = withLoadingDelay(Card);

const CardList = (props) => {
  const cards = useSelector((state) => state.cards);
  return (
    <div className="cardWrapper">
      {cards.map((card) => (
        <CardWithLoad
          key={card.id}
          id={card.id}
          header={card.header}
          text={card.text}
          onChecking={props.setRemove(card.id)}
          isReadMode={props.isReadMode}
        />
      ))}
    </div>
  );
};

export default CardList;
