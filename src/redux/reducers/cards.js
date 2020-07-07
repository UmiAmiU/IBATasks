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
      return [...action.cards];
    }
    case ADD_CARD: {
      const { id, header, text } = { ...action };
      return [...state, { id, header, text }];
    }
    case UPDATE_CARD: {
      const { id, header, text } = { ...action };

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
      return state.filter((card) => card.id !== action.id);
    }
    case REMOVE_CARDS: {
      return state.filter((card) => !action.delCards.includes(card.id));
    }
    default: {
      return state;
    }
  }
};

export default cards;
