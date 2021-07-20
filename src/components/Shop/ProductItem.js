import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description, image } = props.product;

  const dispatch = useDispatch();
  const state = localStorage.getItem('state');
  let isLoggedIn = false;
  if(state){
    isLoggedIn = true;
  }
  const addToCartHandler = (event) => {
    dispatch(cartActions.addItemToCart(props.product));
  };

  return (
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <img class="m-5" src={image} alt="..." />
          <div class="card-text">{description}</div>
          <div className={classes.price}>${price.toFixed(2)}</div>
          {isLoggedIn && (
            <button class="btn btn-primary m-3" onClick={addToCartHandler}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
