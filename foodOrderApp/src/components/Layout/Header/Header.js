import mealsImage from '../../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton label='Your Cart' onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='meals' />
      </div>
    </>
  );
};

export default Header;
