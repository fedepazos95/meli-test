import axios from "axios";
import { FETCH_ITEMS, FETCH_ITEM } from "./types";

export const fetchItems = query => async dispatch => {
  const res = await axios.get(`/api/items?q=${query}`);
  dispatch({ type: FETCH_ITEMS, payload: res.data });
};

export const fetchItem = id => async dispatch => {
  const res = await axios.get(`/api/items/${id}`);
  dispatch({ type: FETCH_ITEM, payload: res.data });
}
