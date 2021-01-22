const intialState = { cat: [] };
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_CAT": {
      return {
        ...state,
        cat: [...state.cat, action.payload],
      };
    }
    case "REMOVE_CAT": {
      return {
        ...state,
        cat: [...state.cat.filter((item) => item.id !== action.payload.id)],
      };
    }
    default:
      return state;
  }
};
export default reducer;
