import React from "react";
import styled from "styled-components";
import "./Main.css";
import CardList from "../CardList";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { initiateCards, addCard, removeCards } from "../../redux/actions";
import TextField from "../TextField";
import axios from "axios";

const ReadCheckbox = styled.input`
  margin-left: 1rem;
  margin-top: 1rem;
`;

const url =
  "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json";

const Main = (props) => {
  const [isReadMode, setReadMode] = React.useState(false);
  const [isAddMode, setAddMode] = React.useState(false);
  const [isDisabled, setDisabled] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        dispatch(
          initiateCards(
            data.splice(0, 15).map((elem) => ({
              id: uuidv4(),
              header: elem.Name,
              text: elem.About,
            }))
          )
        );
      })
      .catch((err) => console.error(err));
  }, []);

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
      <CardList isReadMode={isReadMode} setRemove={setRemove} />
    </div>
  );
};

export default Main;
