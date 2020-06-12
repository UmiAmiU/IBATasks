import React from "react";
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

  const butBlock = props.isChange ? (
    <React.Fragment>
      <MdDone
        onClick={() => {
          props.applyChanges();
          props.setChange(false);
        }}
      />
      <MdClose
        onClick={() => {
          props.denyChanges();
          props.setChange(false);
        }}
      />
    </React.Fragment>
  ) : (
    <React.Fragment>
      {!props.isReadMode && (
        <MdModeEdit
          onClick={() => {
            props.setChecked(false);
            props.setChange(true);
          }}
        />
      )}
      <input
        type="checkbox"
        onChange={() => props.setChecked(!props.isChecked)}
      />
    </React.Fragment>
  );
  if (props.isReadMode && props.isChange) {
    props.denyChanges();
    props.setChange(false);
  }

  return (
    <div style={styles.flex}>
      {props.isChange ? (
        <input
          type="text"
          value={props.header}
          onChange={props.handleChange}
          style={{ margin: "5px" }}
        />
      ) : (
        <div style={styles.header}>{props.header}</div>
      )}
      <div style={{ ...styles.flex, padding: "0px" }}>{butBlock}</div>
    </div>
  );
};

export default CardHeader;
