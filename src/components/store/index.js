import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import cartReducer from './cart-slice';
import uiReducer from './ui-slice';

const store = configureStore({
    reducer : {
        ui : uiReducer,
        cart: cartReducer,
        auth: authReducer
    }
});

export default store;