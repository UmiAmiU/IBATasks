import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/actions";

const Header = (props) => {
  const cards = useSelector((state) => state.cards);
  const { username, admin, logged } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="flex">
        <div className="textBlock">Header</div>
        <Link to="/" className="butLink">
          Main Page
        </Link>
        {admin && (
          <Link to="/settings" className="butLink">
            Settings
          </Link>
        )}
      </div>
      <div className="flex">
        {logged ? (
          <React.Fragment>
            <div>Приветствую {username}</div>
            <input
              type="button"
              onClick={() => dispatch(logOut())}
              value="Log Out"
              className="butLink"
            />
          </React.Fragment>
        ) : (
          <Link to="/auth" className="butLink">
            Sing In
          </Link>
        )}
        <div className="textBlock">
          Количество карточек: {"  "}
          <span className="badge">{cards.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
