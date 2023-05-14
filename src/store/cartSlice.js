import {createSlice} from '@reduxjs/toolkit';

let initialState={
    cartItems:[],
    totalItemsInBucket:0,
    cartTotalQuantity:0,
    cartTotalAmount:0
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            // state.cartItems.push(action.payload);
            console.log("action.payload:",action.payload);
            state.cartItems.map(
                (ob)=>{
                    console.log("id:"+ob.id+" title:"+ob.title+" price:"+ob.price+" rating:"+ob.rating);
                }
            );
            // console.log("total:",initialState.totalItemsInBucket);
            return  {...state,cartItems:[...state.cartItems,action.payload],totalItemsInBucket:state.cartItems.length+1}
        }
    }
});

export const {addToCart}=cartSlice.actions;
// const {totalItemsInBucket}=cartSlice;
export default cartSlice.reducer;