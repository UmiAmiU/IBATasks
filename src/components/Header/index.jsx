import React from "react";
import "./Header.css";
import CardContext from "../context/card-context";

const Header = (props) => {
  return (
    <header className="header">
      <div className="textBlock">Header</div>
      <CardContext.Consumer>
        {(value) => (
          <div className="textBlock">
            Количество карточек: {"  "}
            <span className="badge">{value.cards.length}</span>
          </div>
        )}
      </CardContext.Consumer>
    </header>
  );
};

export default Header;
