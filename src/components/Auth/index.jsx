import React from "react";
import TextField from "../TextField";
import "./Auth.css";
import { logIn } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Auth = (props) => {
  const [values, setValues] = React.useState({
    login: "",
    pass: "",
  });
  const [isDisabledLogin, setDisabledLogin] = React.useState(false);
  const [isDisabledPass, setDisabledPass] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="authForm">
      <TextField
        onChange={handleChange("login")}
        required
        email
        setDisabled={setDisabledLogin}
      >
        Login:{" "}
      </TextField>
      <TextField
        onChange={handleChange("pass")}
        required
        password
        setDisabled={setDisabledPass}
      >
        Password:{" "}
      </TextField>
      <input
        type="button"
        className="buton"
        value="Sing in"
        onClick={() => {
          dispatch(logIn(values.login, values.pass));
          history.push("/");
        }}
        disabled={isDisabledLogin || isDisabledPass}
      />
    </div>
  );
};

export default Auth;
