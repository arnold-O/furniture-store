import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItem:[],
    NumItemsInCart: 0,
    cartTotal:0,
    shipping:1000,
    tax:0,
    orderTotal:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,

    reducers:{
        addItem:(state, action)=>{
            console.log(action.payload);

        }
    },
    clearCart:(state)=>{

    },
    removeItem:(state, action)=>{
        
    },
    editItem:(state, action)=>{

    }
})


export const {addItem, clearCart, removeItem, editItem} = cartSlice.actions;
export default cartSlice.reducer