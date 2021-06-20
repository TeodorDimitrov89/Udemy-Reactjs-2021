import React from 'react';
import './Card.css';
const Card = (props) => {
  return (
    <div onClick={props.onClick} className={`card ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
