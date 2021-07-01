import React, { useState, useEffect } from 'react';
import useCounter from '../hooks/use-couter';
import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
