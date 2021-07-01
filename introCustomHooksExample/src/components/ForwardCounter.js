import React from 'react';

import Card from './Card';
import useCounter from '../hooks/use-couter';
const ForwardCounter = () => {
  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
