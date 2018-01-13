import React from 'react';
import ListItem from '../ListItem';

export default ({
  items,
}) =>
  items.map((item, i) => <ListItem key={i}>{item}</ListItem>);
