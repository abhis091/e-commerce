import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false,
    userData:{}
};

const authSlice = createSlice({
    name:'auth',
    initialState: initialState,
    reducers:{
        login(state, {type, payload}){
            state.isLoggedIn = true;
            state.userData = payload.foundUser[0];
            localStorage.setItem('state',JSON.stringify(state));
        },
        logout(state, {type, payload}){
            state.isLoggedIn = false;
            state.userData = {};
            localStorage.removeItem('state');
            console.log("LOGOUT");
        }
    }
});


export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
