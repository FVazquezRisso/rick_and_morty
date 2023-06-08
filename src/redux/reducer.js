import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== Number(action.payload)
        ),
      };

    case FILTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters].filter((character) => {
          return character.gender === action.payload;
        }),
      };

    case ORDER:
      return {
        ...state,
        myFavorites: [...state.allCharacters].sort((a, b) => {
          return action.payload === "A" ? a.id - b.id : b.id - a.id;
        }),
      };

    default:
      return state;
  }
};

export default rootReducer;
