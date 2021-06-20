import User from '../User/User';
const UsersList = (props) => {
  return props.users.map((user) => {
    return (
      <User key={user.id} id={user.id} onDelete={props.onDeleteUser}>
        {user.username} ({user.age} years old)
      </User>
    );
  });
};

export default UsersList;
