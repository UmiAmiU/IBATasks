import React from "react";
import "./Main.css";
import CardList from "../CardList";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addCard, removeCards } from "../../redux/actions";
import TextField from "../TextField";

const Main = (props) => {
  const [isAddMode, setAddMode] = React.useState(false);
  const [isDisabled, setDisabled] = React.useState(false);
  const dispatch = useDispatch();

  const cardsToRemove = [];

  const setRemove = (id) => () => {
    const index = cardsToRemove.indexOf(id);
    if (index === -1) {
      cardsToRemove.push(id);
    } else {
      cardsToRemove.splice(index, 1);
    }
  };

  const [values, setValues] = React.useState({
    header: "",
    text: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <div>
        <input
          type="button"
          value={isAddMode ? "Добавить" : "Добавить новый элемент"}
          onClick={() => {
            if (isAddMode) {
              dispatch(addCard(uuidv4(), values.header, values.text));
              setValues({
                header: "",
                text: "",
              });
              setAddMode(false);
            } else {
              setAddMode(true);
            }
          }}
          disabled={isDisabled}
          style={{ margin: "1rem" }}
        />
        {isAddMode && (
          <input
            type="button"
            value="Отмена"
            onClick={() => {
              setValues({
                header: "",
                text: "",
              });
              setAddMode(false);
            }}
          />
        )}
        <input
          type="button"
          value="Удалить выделенные элементы"
          onClick={() => {
            dispatch(removeCards(cardsToRemove));
            cardsToRemove.splice(0, cardsToRemove.length);
          }}
          style={{ margin: "1rem" }}
        />
      </div>
      {isAddMode && (
        <div>
          <TextField
            onChange={handleChange("header")}
            required
            setDisabled={setDisabled}
          >
            Header:
          </TextField>
          <textarea
            style={{ margin: "5px", resize: "none", width: "90%" }}
            rows="10"
            onChange={handleChange("text")}
          ></textarea>
        </div>
      )}
      <CardList setRemove={setRemove} />
    </div>
  );
};

export default Main;
