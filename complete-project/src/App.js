import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Card from './components/UI/Card/Card';
import ErrorModal from './components/UI/ErrorModal/ErrorModal';
import UserForm from './components/Users/UserForm/UserForm';
import Home from './components/Home/Home';
import About from './components/About/About';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [toggleErrorModal, setToggleErrorModal] = useState(false);
  const addUserHandler = (user) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, user];
    });
  };

  const deleteUserHandler = (userId) => {
    setUsersList((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  const toggleErrorModalHandler = (message) => {
    setToggleErrorModal(true);
    setErrorMessage(message);
  };

  const closeErrorModalHandler = (event) => {
    setToggleErrorModal(false);
  };
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
        </Switch>
      </Router>
      <Card>
        <UserForm
          onToggleErrorModal={toggleErrorModalHandler}
          onAddUser={addUserHandler}
        />
      </Card>
      {usersList.length > 0 && (
        <Card>
          <UsersList onDeleteUser={deleteUserHandler} users={usersList} />
        </Card>
      )}
      {toggleErrorModal && (
        <ErrorModal
          errorText={errorMessage}
          onCloseErrorModal={closeErrorModalHandler}
        />
      )}
    </>
  );
}

export default App;
