import React from "react";
import styled from "styled-components";
import "./Main.css";
import CardList from "../CardList";
import { v4 as uuidv4 } from "uuid";
import CardContext from "../context/card-context";

const ReadCheckbox = styled.input`
  margin-left: 1rem;
  margin-top: 1rem;
`;

const Main = (props) => {
  const { add, remove } = React.useContext(CardContext);
  const [isReadMode, setReadMode] = React.useState(false);
  const [isAddMode, setAddMode] = React.useState(false);

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
        <ReadCheckbox
          type="checkbox"
          onChange={() => setReadMode(!isReadMode)}
        />
        <label>"Режим чтения"</label>
        <input
          type="button"
          value={isAddMode ? "Добавить" : "Добавить новый элемент"}
          onClick={() => {
            if (isAddMode) {
              add({
                id: uuidv4(),
                header: values.header,
                text: values.text,
              });
              setValues({
                header: "",
                text: "",
              });
              setAddMode(false);
            } else {
              setAddMode(true);
            }
          }}
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
            remove(cardsToRemove);
            cardsToRemove.splice(0, cardsToRemove.length);
          }}
          style={{ margin: "1rem" }}
        />
      </div>
      {isAddMode && (
        <div>
          <input
            type="text"
            onChange={handleChange("header")}
            style={{ margin: "5px" }}
          />
          <textarea
            style={{ margin: "5px", resize: "none", width: "90%" }}
            rows="10"
            onChange={handleChange("text")}
          ></textarea>
        </div>
      )}
      <CardList isReadMode={isReadMode} setRemove={setRemove} />
    </div>
  );
};

export default Main;
