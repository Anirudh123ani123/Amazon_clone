import {createSlice} from '@reduxjs/toolkit';

 const bucketSlice=createSlice({
    name:"sliceOne",
    initialState:[0],
   // initialState:["","","","","",1,2,3,true,false],
    reducers:{
       totalItems:(state,action)=>{
         console.log(state.length);
       } 
    }
});

export default bucketSlice.reducer;
const totalItems=bucketSlice.actions.totalItems;
export {totalItems};