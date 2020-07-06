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

  const butBlock = props.isChange ? (
    <React.Fragment>
      {!isDisabled && (
        <MdDone
          onClick={() => {
            props.applyChanges();
            props.setChange(false);
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
      {!props.isReadMode && (
        <MdModeEdit
          onClick={() => {
            props.onSetChecked(false);
            props.onSetChange(true);
          }}
        />
      )}
      <input
        type="checkbox"
        onChange={() => props.onSetChecked(!props.isChecked)}
      />
    </React.Fragment>
  );
  if (props.isReadMode && props.isChange) {
    props.onDenyChanges();
    props.onSetChange(false);
  }

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
