import React from 'react';

export default ({
  children,
  href,
  unstyled,
}) => {
  let style = {};
  if (unstyled) {
    style = {
      textDecoration: 'none',
      outline: 'none',
      color: 'inherit',
    };
  }
  return (
    <a
      href={href}
      style={style}
    >
      {children}
    </a>
  );
};
