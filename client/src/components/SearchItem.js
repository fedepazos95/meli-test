import React from 'react';

const SearchItem = props => {
  return (
    <li className="list-group-item">
      <img src={props.item.picture} className="search-img" />
      <label className="search-price">$ {props.item.price}</label>
      <label className="search-title">{props.item.title}</label>
    </li>
  );
};

export default SearchItem;
