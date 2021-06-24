import React from 'react';

const Button = (props) => {
  return (
    <button type={props.type}>
      <span>+</span>Add
    </button>
  );
};

export default Button;
