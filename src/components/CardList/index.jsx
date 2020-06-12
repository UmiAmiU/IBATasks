import React from "react";
import Card from "../Card";
import "./CardList.css";

const CardList = (props) => {
  return (
    <div className="cardWrapper">
      {props.cardsData.map((card) => (
        <Card
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
