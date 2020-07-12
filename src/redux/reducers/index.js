import { combineReducers } from "redux";
import cards from "./cards.js";
import user from "./user.js";

const reducers = combineReducers({ cards, user });

export default reducers;
