import {
  INITIATE_CARDS,
  ADD_CARD,
  UPDATE_CARD,
  REMOVE_CARD,
  REMOVE_CARDS,
  INITIATE_USER,
  LOGIN,
  LOGOUT,
} from "./actionTypes";

export const initiateCards = (cards) => ({
  payload: {
    cards,
  },
  type: INITIATE_CARDS,
});

export const addCard = (id, header, text) => ({
  payload: {
    id,
    header,
    text,
  },
  type: ADD_CARD,
});

export const updateCard = (id, header, text) => ({
  payload: {
    id,
    header,
    text,
  },
  type: UPDATE_CARD,
});

export const removeCard = (id) => ({
  payload: {
    id,
  },
  type: REMOVE_CARD,
});

export const removeCards = (delCards) => ({
  payload: {
    delCards,
  },
  type: REMOVE_CARDS,
});

export const initiateUser = () => ({
  type: INITIATE_USER,
});

export const logIn = (username, password) => ({
  payload: {
    username,
    password,
  },
  type: LOGIN,
});

export const logOut = () => ({
  type: LOGOUT,
});
