import React from 'react';

const ItemList = ({ items }) => {
    return (
      <ul>
        {items.map((item, fruit) => (
          <li key={fruit}>{item}</li>
        ))}
      </ul>
    );
  };
  
  export default ItemList;