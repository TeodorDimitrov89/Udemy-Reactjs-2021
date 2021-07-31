import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        value: action.value,
      };
    case 'BLUR':
      return {
        ...state,
        isTouched: true,
      };
    case 'RESET':
      return {
        ...state,
        value: '',
        isTouched: false,
      };
    default:
      return initialInputState;
  }
};

const useInput = (validity) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validity(inputState.value);

  const hasError = !valueIsValid && inputState.isTouched;

  const changeValueInputHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const blurValueInputHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    enteredValue: inputState.value,
    isValid: valueIsValid,
    hasError,
    changeValueInputHandler,
    blurValueInputHandler,
    reset,
  };
};

export default useInput;
