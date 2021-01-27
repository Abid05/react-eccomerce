import {addType} from '../actions/types';
import {removeType} from '../actions/types';
import {addCat} from './cat.utils';
const intialState = { cat: [] };
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case addType: { 
      return { 
        ...state, 
        cat: addCat(state.cat, action.payload)
      } 
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
