import axios from 'axios';
import { FETCH_ITEMS } from './types';

export const fetchItems = query => async dispatch => {
  const res = await axios.get(`/api/items?q=${query}`);
  dispatch({ type: FETCH_ITEMS, payload: res.data });
};

export const testApi = () => async dispatch => {
  const res = await axios.get(`/api/hello`);
  console.log(res.data);
};
