import React from "react";
import "./Auth.css";

const Auth = (props) => {
  return (
    <div className="authForm">
      <label htmlFor="login">Login:</label>
      <input name="login" type="text" className="authInput" />
      <label htmlFor="pass">Password:</label>
      <input name="pass" type="text" className="authInput" />
      <button className="buton">Sing in</button>
    </div>
  );
};

export default Auth;
