const initialState = [];
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HELLO_REACT":
      return { ...state, cat: action.payload.cat, img: action.payload.img };
    default:
      return state;
  }
};

export default myReducer;
