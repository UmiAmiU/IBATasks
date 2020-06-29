import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import PropTypes from "prop-types";

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
  const denyChanges = () => {
    setValues({ header: props.header, text: props.text });
    setChange(false);
  };

  const styles = {
    block: {
      display: "inline-block",
      width: "30%",
      border: "1px solid black",
    },
  };

  return (
    <div style={styles.block}>
      <CardHeader
        header={values.header}
        isReadMode={props.isReadMode}
        isChecked={isChecked}
        isChange={isChange}
        setChecked={(bool) => {
          setChecked(bool);
          props.onChecking();
        }}
        setChange={(bool) => setChange(bool)}
        handleChange={handleChange("header")}
        applyChanges={() => props.onCardChange(values)}
        denyChanges={denyChanges}
      />
      <hr />
      <CardBody
        text={values.text}
        isChecked={isChecked}
        isChange={isChange}
        handleChange={handleChange("text")}
      />
    </div>
  );
};

Card.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onCardChange: PropTypes.func.isRequired,
  onChecking: PropTypes.func.isRequired,
  isReadMode: PropTypes.bool.isRequired,
};

export default Card;
