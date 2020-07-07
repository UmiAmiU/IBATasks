import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCard } from "../../redux/actions";
import TextField from "../TextField";
import "./BigCard.css";

const BigCard = (props) => {
  const { id } = useParams();
  const card =
    useSelector((state) => state.cards.find((card) => card.id === id)) || {};
  const [isEditMode, setEditMode] = React.useState(false);
  const [isDisabled, setDisabled] = React.useState(false);
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    header: card.header,
    text: card.text,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="cardBlock">
      <div className="cardHeader">{card.header}</div>
      <div className="cardBody">{card.text}</div>
      <input
        type="button"
        value={isEditMode ? "Принять изменения" : "Изменить карточку"}
        onClick={() => {
          if (isEditMode) {
            dispatch(updateCard(id, values.header, values.text));
            setValues({
              header: card.header,
              text: card.text,
            });
            setEditMode(false);
          } else {
            setEditMode(true);
          }
        }}
        disabled={isDisabled}
        style={{ margin: "1rem" }}
      />
      {isEditMode && (
        <input
          type="button"
          value="Отмена"
          onClick={() => {
            setValues({
              header: card.header,
              text: card.text,
            });
            setEditMode(false);
          }}
        />
      )}
      {isEditMode && (
        <div>
          <TextField
            onChange={handleChange("header")}
            required
            value={values.header}
            setDisabled={setDisabled}
          >
            Header:
          </TextField>
          <textarea
            style={{ margin: "5px", resize: "none", width: "90%" }}
            rows="10"
            value={values.text}
            onChange={handleChange("text")}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default BigCard;
