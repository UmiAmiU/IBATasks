export const initiateCards = (cards) => ({
  cards,
  type: "INITIATE_CARDS",
});

export const addCard = (id, header, text) => ({
  id,
  header,
  text,
  type: "ADD_CARD",
});

export const updateCard = (id, header, text) => ({
  id,
  header,
  text,
  type: "UPDATE_CARD",
});

export const removeCard = (id) => ({
  id,
  type: "REMOVE_CARD",
});

export const removeCards = (delCards) => ({
  delCards,
  type: "REMOVE_CARDS",
});

export const initiateUser = () => ({
  type: "INITIATE_USER",
});

export const logIn = (username, password) => ({
  username,
  password,
  type: "LOGIN",
});

export const logOut = () => ({
  type: "LOGOUT",
});
