import React from "react";
import TextField from "../../TextField";
import { MdModeEdit, MdDone, MdClose } from "react-icons/md";

const CardHeader = (props) => {
  const styles = {
    header: {
      margin: "5px",
      fontWeight: "bold",
      color: "red",
    },
    flex: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0px 10px",
    },
  };
  const [isDisabled, setDisabled] = React.useState(false);
  const isReadMode = localStorage.getItem("read")
    ? JSON.parse(localStorage.getItem("read"))
    : false;

  const butBlock = props.isChange ? (
    <React.Fragment>
      {!isDisabled && (
        <MdDone
          onClick={() => {
            props.onApplyChanges();
            props.onSetChange(false);
          }}
        />
      )}
      <MdClose
        onClick={() => {
          props.onDenyChanges();
          props.onSetChange(false);
        }}
      />
    </React.Fragment>
  ) : (
    <React.Fragment>
      {!isReadMode && (
        <MdModeEdit
          onClick={() => {
            if (props.isChecked) {
              props.onSetChecked(false);
              props.onChecking();
            }
            props.onSetChange(true);
          }}
        />
      )}
      <input
        type="checkbox"
        onChange={() => {
          props.onSetChecked(!props.isChecked);
          props.onChecking();
        }}
      />
    </React.Fragment>
  );

  return (
    <div style={styles.flex}>
      {props.isChange ? (
        <TextField
          onChange={props.handleChange}
          required
          setDisabled={setDisabled}
          value={props.header}
        />
      ) : (
        <div style={styles.header}>{props.header}</div>
      )}
      <div style={{ ...styles.flex, padding: "0px" }}>{butBlock}</div>
    </div>
  );
};

export default CardHeader;
