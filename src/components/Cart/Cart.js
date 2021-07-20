import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  let items = useSelector((state) => state.cart.items);
  let totalPrice = useSelector(state => state.cart.totalPrice);
  let totalQuantity = useSelector(state => state.cart.totalQuantity);

  let cart = JSON.parse(localStorage.getItem('cart')); 
  if(cart){
    items = cart.items;
    totalPrice = cart.totalPrice;
    totalQuantity = cart.totalQuantity;
  }

  return (
    <Card className={classes.cart}>
      {!(totalQuantity > 0) && <h2 class="text-center">Your cart is empty</h2>}
      {totalQuantity > 0 && (
        <Fragment>
          <h2 class="text-center">Your Shopping Cart</h2>
          <ul>
            {items.map((item) => {
              return (
                item.quantity > 0 && <CartItem key={item.id} item={item} />
              );
            })}
          </ul>
          <footer>
            <h3 class="text-center">Grand Total: ${totalPrice.toFixed(2)}</h3>
          </footer>
        </Fragment>
      )}
    </Card>
  );
};

export default Cart;
