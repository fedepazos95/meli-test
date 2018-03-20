import { FETCH_ITEMS } from '../actions/types';

const itemsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.payload || false;
    default:
      return state;
  }
};

export default itemsReducer;
