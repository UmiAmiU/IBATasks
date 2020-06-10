import React from "react";
import { MdModeEdit, MdDone, MdClose } from "react-icons/md";

const Card = (props) => {
  const [isChecked, setChecked] = React.useState(false);
  const [isChange, setChange] = React.useState(false);
  const [values, setValues] = React.useState({
    header: props.header,
    text: props.text,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const styles = {
    header: {
      margin: "5px",
      fontWeight: "bold",
      color: "red",
    },
    text: {
      margin: "5px",
      fontSize: "small",
    },
    block: {
      display: "inline-block",
      width: "30%",
      border: "1px solid black",
    },
    flex: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0px 10px",
    },
    textChecked: "blue",
    textDefault: "black",
  };

  const butBlock = isChange ? (
    <React.Fragment>
      <MdDone
        onClick={() => {
          props.onCardChange(values);
          setChange(false);
        }}
      />
      <MdClose
        onClick={() => {
          setValues({ header: props.header, text: props.text });
          setChange(false);
        }}
      />
    </React.Fragment>
  ) : (
    <React.Fragment>
      {!props.isReadMode && (
        <MdModeEdit
          onClick={() => {
            setChecked(false);
            setChange(true);
          }}
        />
      )}
      <input type="checkbox" onChange={() => setChecked(!isChecked)} />
    </React.Fragment>
  );
  if (props.isReadMode && isChange) {
    setValues({ header: props.header, text: props.text });
    setChange(false);
  }

  return (
    <div style={styles.block}>
      <div style={styles.flex}>
        {isChange ? (
          <input
            type="text"
            value={values.header}
            onChange={handleChange("header")}
            style={{ margin: "5px" }}
          />
        ) : (
          <div style={styles.header}>{props.header}</div>
        )}
        <div style={{ ...styles.flex, padding: "0px" }}>{butBlock}</div>
      </div>
      <hr />
      {isChange ? (
        <textarea
          style={{ ...styles.text, resize: "none", width: "90%" }}
          rows="10"
          onChange={handleChange("text")}
          value={values.text}
        ></textarea>
      ) : (
        <div
          style={{
            ...styles.text,
            color: isChecked ? styles.textChecked : styles.textDefault,
          }}
        >
          {props.text}
        </div>
      )}
    </div>
  );
};

export default Card;
