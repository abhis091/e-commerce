import classes from './CartItem.module.css';
import { cartActions } from '../store/cart-slice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { id, title, quantity, totalPrice, price } = props.item;

  const dispatch = useDispatch();

  const quantityDecrementHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const quantityIncrementHandler = () => {
    dispatch(cartActions.addItemToCart(props.item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h5>{title}</h5>
        <div>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button class="m-1 btn btn-danger" onClick={quantityDecrementHandler}>-</button>
          <button class="m-1 btn btn-success" onClick={quantityIncrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
