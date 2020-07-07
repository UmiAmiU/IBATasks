import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCard } from "../../redux/actions";

const Card = (props) => {
  const [isChecked, setChecked] = React.useState(false);
  const [isChange, setChange] = React.useState(false);
  const [values, setValues] = React.useState({
    header: props.header,
    text: props.text,
  });
  const history = useHistory();
  const dispatch = useDispatch();

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
    <div
      style={styles.block}
      onDoubleClick={() => history.push(`/card/${props.id}`)}
    >
      <CardHeader
        header={values.header}
        isReadMode={props.isReadMode}
        isChecked={isChecked}
        isChange={isChange}
        onSetChecked={(bool) => {
          setChecked(bool);
          props.onChecking();
        }}
        onSetChange={(bool) => setChange(bool)}
        handleChange={handleChange("header")}
        onApplyChanges={() =>
          dispatch(updateCard(props.id, values.header, values.text))
        }
        onDenyChanges={denyChanges}
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
