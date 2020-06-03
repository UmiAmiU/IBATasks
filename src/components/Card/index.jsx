import React from "react";

const Card = (props) => {
  const [isChecked, setChecked] = React.useState(false);
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
    flex: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0px 10px",
    },
    textChecked: "blue",
    textDefault: "black",
  };
  return (
    <div style={styles.block}>
      <div style={styles.flex}>
        <div style={styles.header}>{props.header}</div>
        <input type="checkbox" onChange={() => setChecked(!isChecked)} />
      </div>
      <hr />
      <div
        style={{
          ...styles.text,
          color: isChecked ? styles.textChecked : styles.textDefault,
        }}
      >
        {props.text}
      </div>
    </div>
  );
};

export default Card;
