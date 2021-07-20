import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import UserProfile from "../components/Profile/UserProfile";
import CartPage from "../pages/CartPage";

export const Routes = () => {
  
  let isLoggedIn = false;

  if(localStorage.getItem("state")){
    isLoggedIn = JSON.parse(localStorage.getItem("state")).isLoggedIn;
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Route path="/profile">
        {isLoggedIn && <UserProfile />}
        {!isLoggedIn && <Redirect to="/auth" />}
      </Route>

      <Route path="/cart">
        <CartPage />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
