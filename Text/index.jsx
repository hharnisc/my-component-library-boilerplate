import React from 'react';

export default ({
  children,
  size=1,
}) =>
  <span
    style={{
      fontSize: `${size}rem`,
    }}
  >
    {children}
  </span>;
