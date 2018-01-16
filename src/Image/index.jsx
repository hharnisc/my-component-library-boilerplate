import React from 'react';

export default ({
  src,
  height,
  width,
}) =>
  <img
    src={src}
    style={{
      height,
      width,
    }}
  />;
