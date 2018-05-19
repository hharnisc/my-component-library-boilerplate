import React from 'react';
import ListItem from '../ListItem';

export default ({
  items,
}) =>
  <ul
    style={{
      padding: 0,
      margin: 0,
    }}
  >
    {items.map((item, i) => <ListItem key={i}>{item}</ListItem>)}
  </ul>;
