import React from "react";

const CardBody = (props) => {
  const styles = {
    text: {
      margin: "5px",
      fontSize: "small",
    },
    textChecked: "blue",
    textDefault: "black",
  };
  return (
    <div>
      {props.isChange ? (
        <textarea
          style={{ ...styles.text, resize: "none", width: "90%" }}
          rows="10"
          onChange={props.handleChange}
          value={props.text}
        ></textarea>
      ) : (
        <div
          style={{
            ...styles.text,
            color: props.isChecked ? styles.textChecked : styles.textDefault,
          }}
        >
          {props.text}
        </div>
      )}
    </div>
  );
};

export default CardBody;
