import {
  INITIATE_CARDS,
  ADD_CARD,
  UPDATE_CARD,
  REMOVE_CARD,
  REMOVE_CARDS,
} from "../actions/actionTypes.js";

const initialState = [];

const cards = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_CARDS: {
      return [...action.payload.cards];
    }
    case ADD_CARD: {
      const { id, header, text } = { ...action.payload };
      return [...state, { id, header, text }];
    }
    case UPDATE_CARD: {
      const { id, header, text } = { ...action.payload };

      return state.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            ...{ header, text },
          };
        }
        return card;
      });
    }
    case REMOVE_CARD: {
      return state.filter((card) => card.id !== action.payload.id);
    }
    case REMOVE_CARDS: {
      return state.filter((card) => !action.payload.delCards.includes(card.id));
    }
    default: {
      return state;
    }
  }
};

export default cards;
