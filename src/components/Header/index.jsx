import React from "react";
import "./Header.css";
import CardContext from "../context/card-context";

const Header = (props) => {
  const { cards } = React.useContext(CardContext);
  return (
    <header className="header">
      <div className="textBlock">Header</div>
      <div className="textBlock">
        Количество карточек: {"  "}
        <span className="badge">{cards.length}</span>
      </div>
    </header>
  );
};

export default Header;
