import React from "react";

const Card = (props) => {
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
      width: "30%",
      border: "1px solid black",
    },
  };
  return (
    <div style={styles.block}>
      <div style={styles.header}>{props.header}</div>
      <hr />
      <div style={styles.text}>{props.text}</div>
    </div>
  );
};

export default Card;
