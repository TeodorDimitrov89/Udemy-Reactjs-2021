import { useState } from 'react';

const useInput = (validity) => {
  const [enteredValue, setEnteredvalue] = useState('');
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const valueIsValid = validity(enteredValue);

  const hasError = !valueIsValid && enteredValueTouched;

  const changeValueInputHandler = (event) => {
    setEnteredvalue(event.target.value);
  };

  const blurValueInputHandler = () => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredvalue('');
    setEnteredValueTouched(false);
  };

  return {
    enteredValue,
    isValid: valueIsValid,
    hasError,
    changeValueInputHandler,
    blurValueInputHandler,
    reset,
  };
};

export default useInput;
