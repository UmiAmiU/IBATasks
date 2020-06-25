import React from "react";
import Card from "../Card";
import withLoadingDelay from "./withLoadingDelay.jsx";
import "./CardList.css";

const CardWithLoad = withLoadingDelay(Card);

const CardList = (props) => {
  return (
    <div className="cardWrapper">
      {props.cardsData.map((card) => (
        <CardWithLoad
          key={card.id}
          header={card.header}
          text={card.text}
          onCardChange={props.changeCard(card.id)}
          onChecking={props.setRemove(card.id)}
          isReadMode={props.isReadMode}
        />
      ))}
    </div>
  );
};

export default CardList;
