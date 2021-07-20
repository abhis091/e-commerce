import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartVisible : true
}

const uiSlice = createSlice({
    name:'ui',
    initialState: initialState,
    reducers : {
        toggle(state){
            state.cartVisible = !state.cartVisible;
        }
    }
});

export const uiActions = uiSlice.actions ;

const uiReducer = uiSlice.reducer;
export default uiReducer;