import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { initiateCards } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";

const url =
  "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json";

const Header = (props) => {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        dispatch(
          initiateCards(
            data.splice(0, 15).map((elem) => ({
              id: uuidv4(),
              header: elem.Name,
              text: elem.About,
            }))
          )
        );
      })
      .catch((err) => console.error(err));
  }, []);
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
