import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import { authActions } from "../store/auth-slice";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const state = localStorage.getItem('state');

  console.log("MAIN NAVIGATION");

  if(state){
    isLoggedIn = true;
  }else{
    isLoggedIn = false;
  }

  const logoutHandler = () => {
    dispatch(authActions.logout());
    history.push('/');
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>AMKART</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <Fragment>
              <li>
                <Link to="/cart">
                  <CartButton />
                </Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
