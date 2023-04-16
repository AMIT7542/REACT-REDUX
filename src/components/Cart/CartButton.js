import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartCount=useSelector(state=>state.cart.totalQuantity)
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default CartButton;
