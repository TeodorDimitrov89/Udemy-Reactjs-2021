import styles from './User.module.css';
const User = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className={styles.user} onClick={deleteHandler}>
      {props.children}
    </div>
  );
};

export default User;
