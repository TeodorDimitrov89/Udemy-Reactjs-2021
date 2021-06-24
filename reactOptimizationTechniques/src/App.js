import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log('APP RUNNING');
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevState) => {
      setShowParagraph(!prevState);
    });
  }, []);
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>show paragraph</Button>
    </div>
  );
}

export default App;
