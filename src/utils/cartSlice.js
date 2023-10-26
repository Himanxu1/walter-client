import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
     addToCart:(state,action)=>{
            state.items.push(action.payload)
    },
    clearCart:(state,action)=>{
        state.items = []
    },
    removeFromCart:(state,action)=>{
        state.items = state.items.filter((item) => item.id !== action.payload)
    }
}
})


export const {addToCart,removeFromCart,clearCart} = cartSlice.actions

export default cartSlice.reducer
