import React from 'react';
import useInput from '../hooks/use-input';

const isEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.trim().includes('@');
const BasicForm = () => {
  const {
    enteredValue: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    changeValueInputHandler: changeFirstNameInputHandler,
    blurValueInputHandler: blurFirstNameInputHandler,
    reset: resetFirstNameInput,
  } = useInput(isEmpty);

  const {
    enteredValue: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    changeValueInputHandler: changeLastNameInputHandler,
    blurValueInputHandler: blurLastNameInputHandler,
    reset: resetLastNameInput,
  } = useInput(isEmpty);

  const {
    enteredValue: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    changeValueInputHandler: changeEmailInputHandler,
    blurValueInputHandler: blurEmailInputHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const firstNameInputClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameInputClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onChange={changeFirstNameInputHandler}
            onBlur={blurFirstNameInputHandler}
          />
          {firstNameHasError && (
            <p className='error-text'>First Name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            value={enteredLastName}
            onChange={changeLastNameInputHandler}
            onBlur={blurLastNameInputHandler}
          />
          {lastNameHasError && (
            <p className='error-text'>Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          value={enteredEmail}
          onChange={changeEmailInputHandler}
          onBlur={blurEmailInputHandler}
        />

        {emailHasError && <p className='error-text'>The Email is not valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
