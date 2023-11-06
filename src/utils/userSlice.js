import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        items:null
    },
    reducers:{
     addUser:(state,action)=>{
            state.items = action.payload
    }, 
    removeUser:(state,action)=>{
        state.items = null;
    }
}
})


export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer
