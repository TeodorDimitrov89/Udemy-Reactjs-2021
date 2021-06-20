import styles from './ErrorModal.module.css';
import Button from '../Button/Button';
const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onCloseErrorModal}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid Input</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorText}</p>
          <footer className={styles.actions}>
            <Button onClick={props.onCloseErrorModal}>Okay</Button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
