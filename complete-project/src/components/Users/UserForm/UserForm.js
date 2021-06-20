import { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './UserForm.module.css';
const UserForm = (props) => {
  const [userData, setUserData] = useState({ username: '', age: '' });

  const userInputHandler = (event) => {
    const inputName = event.target.name;
    setUserData((prevState) => {
      return {
        ...prevState,
        [inputName]: event.target.value,
        id: Math.random().toString(),
      };
    });
  };

  const validateUserData = () => {
    let isUserDataValid = true;
    let errorMessage = '';
    if (
      userData.username.trim().length === 0 ||
      userData.age.trim().length === 0
    ) {
      errorMessage = 'Please enter a valid name and age (non-empty values)';
      isUserDataValid = false;
    } else if (+userData.age < 1) {
      errorMessage = 'Please enter a valid age > 0';
      isUserDataValid = false;
    }
    return {
      isUserDataValid,
      errorMessage,
    };
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validateUserData().isUserDataValid) {
      props.onToggleErrorModal(validateUserData().errorMessage);
      return;
    }

    props.onAddUser(userData);
    setUserData({
      username: '',
      age: '',
    });
  };

  return (
    <div className={styles.userForm}>
      UserName: {userData.username}
      UserAge: {userData.age}
      <form onSubmit={submitHandler}>
        <div className={styles['user-form-element']}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            value={userData.username}
            name='username'
            id='username'
            onChange={userInputHandler}
          />
        </div>
        <div className={styles['user-form-element']}>
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='number'
            value={userData.age}
            name='age'
            step='1'
            id='age'
            onChange={userInputHandler}
          />
        </div>
        <Button type='submit'> Add user</Button>
      </form>
    </div>
  );
};

export default UserForm;
