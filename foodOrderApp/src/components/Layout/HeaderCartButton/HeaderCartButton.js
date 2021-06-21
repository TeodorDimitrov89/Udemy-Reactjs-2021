import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon/CartIcon';
const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <i className={classes.icon}>
        <CartIcon />
      </i>
      <span>{props.label}</span>
      <span className={classes.badge}>{props.count}</span>
    </button>
  );
};

export default HeaderCartButton;
