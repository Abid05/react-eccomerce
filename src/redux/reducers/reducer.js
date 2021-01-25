import {addType} from '../actions/types';
import {removeType} from '../actions/types';
const intialState = { cat: [] };
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case addType: { 
      let quantity = 1;
      return {
        ...state,
         cat: [...state.cat, state.cat.name === action.payload.name ? quantity + 1 :  action.payload], quantity,
      };
    }
    case removeType: {
      return { 
        ...state,
        cat: [...state.cat.filter((cat, index) =>{
          return index !== action.payload
        })]
      };
    }
    default:
      return state;
  }
};
export default reducer;
