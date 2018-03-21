import { FETCH_ITEMS, FETCH_ITEM } from '../actions/types';

const initialState = {
  author: null,
  categories: null,
  items: null,
  item: null,
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, ...action.payload };
    case FETCH_ITEM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default itemsReducer;
