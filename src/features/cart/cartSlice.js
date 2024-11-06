import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";


const initialState = {
    cartItems:[],
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
         const {product} = action.payload;
         const item = state.cartItems.find((item)=>item.cartID === product.cartID);

         if(item){
            item.amount += product.amount;
         }else{
            state.cartItems.push(product)
         }
         state.NumItemsInCart += product.amount;
         state.cartTotal += product.amount * product.price;
         state.tax = 0.1 * state.cartTotal
         state.orderTotal = state.shipping + state.tax + state.cartTotal;

         localStorage.setItem('cart', JSON.stringify(state))
         toast.success('Item ADDED TO CART')

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