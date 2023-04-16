import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/Cart";
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id,name } = props;
  const handleAddToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        title,
        price,
        id,
        description,
        name
      })
    );
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
