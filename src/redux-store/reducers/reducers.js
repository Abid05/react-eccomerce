const initialState = [];
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CAT":
      return { ...state, cat: action.payload.cat, img: action.payload.img};
      case "REMOVE_CAT": 
      return {...state, cat: null
      }
    default:
      return state;
  }
};

export default myReducer;
