import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map(( item, list) => (
        <li key={list}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;