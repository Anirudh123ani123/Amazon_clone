import bucketReducer from './bucketSlice';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
const store=configureStore({
    reducer:{
        bucket:bucketReducer,  
        cart:cartReducer
    }
});

export default store;
