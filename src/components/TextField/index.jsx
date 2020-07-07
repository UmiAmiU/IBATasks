import React from "react";
import "./TextField.css";

const required = (value) => {
  if (value === "") {
    return "Is required";
  }
  return false;
};
const email = (value) => {
  const regex = /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/gi;

  if (!regex.test(value)) {
    return "Incorrect email";
  }
  return false;
};
const password = (value) => {
  const anyLetter = /[a-z]/gi;
  const anyNumber = /[0-9]/gi;

  if (!anyLetter.test(value)) {
    return "At least one letter";
  }
  if (!anyNumber.test(value)) {
    return "At least one number";
  }
  if (value.length < 8) {
    return "Less then eight symbols";
  }
  return false;
};

const TextField = (props) => {
  const [error, setError] = React.useState("");
  const [value, setValue] = React.useState(props.value || "");

  React.useEffect(() => {
    if (props.required) {
      props.setDisabled(Boolean(error) || !Boolean(value));
    } else {
      props.setDisabled(Boolean(error));
    }
    return () => {
      props.setDisabled(false);
    };
  });

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (props.required) {
      if (required(newValue)) {
        setError(required(newValue));
        props.onChange(event);
        return;
      }
    }
    if (props.email) {
      if (email(newValue)) {
        setError(email(newValue));
        props.onChange(event);
        return;
      }
    }
    if (props.password) {
      if (password(newValue)) {
        setError(password(newValue));
        props.onChange(event);
        return;
      }
    }
    props.onChange(event);
    props.setDisabled(false);
    setError("");
  };

  return (
    <div>
      <div>{props.children}</div>
      <input className="textField" onChange={handleChange} value={value} />
      {error && <div>{error}</div>}
    </div>
  );
};

export default TextField;
