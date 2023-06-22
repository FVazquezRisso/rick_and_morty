import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case FILTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters].filter((character) => {
          return character.gender === payload;
        }),
      };

    case ORDER:
      return {
        ...state,
        myFavorites: [...state.allCharacters].sort((a, b) => {
          return payload === "A" ? a.id - b.id : b.id - a.id;
        }),
      };

    default:
      return state;
  }
};

export default rootReducer;
