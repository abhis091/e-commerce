import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    totalQuantity : 0,
    totalPrice:0
};

const cartSlice = createSlice({
    name:'cart',
    initialState : initialState,
    reducers : {
        addItemToCart(state, {type, payload}){
            let cart = JSON.parse(localStorage.getItem('cart'));
            if(cart){
                state.items = cart.items;
                state.totalQuantity = cart.totalQuantity;
                state.totalPrice = cart.totalPrice;
            }
            state.totalQuantity++;
            const newItem = payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
            }else{
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    title:newItem.title 
                });
            }
            state.totalPrice +=newItem.price;
            localStorage.setItem('cart',JSON.stringify(state));
            console.log(localStorage);
        },

        removeItemFromCart(state, {type, payload}){
            let cart = JSON.parse(localStorage.getItem('cart'));
            if(cart){
                state.items = cart.items;
                state.totalQuantity = cart.totalQuantity;
                state.totalPrice = cart.totalPrice;
            }
            
            state.totalQuantity--;
            const itemId = payload;
            const existingItem = state.items.find(item => item.id === itemId);
            state.totalPrice -= existingItem.price;
            if(existingItem.quantity > 0){
                existingItem.quantity --;
                existingItem.totalPrice -= existingItem.price; 
            }else{
                state.items = state.items.filter(item => item.id !== itemId);
            }
            
            if(state.totalQuantity===0){
                localStorage.removeItem('cart');
            }else{
                localStorage.setItem('cart',JSON.stringify(state));
            }
            // console.log(localStorage);
            
        }
    }
});

export const cartActions = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;