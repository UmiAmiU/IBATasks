import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { initiateCards } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";

const url =
  "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json";

const Loader = (props) => {
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

  return <div>{props.children}</div>;
};

export default Loader;
