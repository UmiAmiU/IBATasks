import React from "react";
import "./Header.css";
import CardContext from "../context/card-context";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { cards } = React.useContext(CardContext);
  return (
    <header className="header">
      <div className="flex">
        <div className="textBlock">Header</div>
        <Link to="/" className="butLink">
          Main Page
        </Link>
      </div>
      <div className="flex">
        <Link to="/auth" className="butLink">
          Sing In
        </Link>
        <div className="textBlock">
          Количество карточек: {"  "}
          <span className="badge">{cards.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
