import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({  
    name:"wish",
    initialState:{
        items:[]
    },
    reducers:{
        addToWish:(state,action)=>{
            state.items.push(action.payload)
        },
        clearWish:(state)=>{
            state.items = []
        },
        removeFromWish:(state,action)=>{
            state.items = state.items.filter((item)=> item.id !== action.payload )
        }
    }
})


export const {addToWish,removeFromWish,clearWish} = wishlistSlice.actions

export default wishlistSlice.reducer
