import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";


const initialState = {
    cartItems:[],
    NumItemsInCart: 0,
    cartTotal:0,
    shipping:1000,
    tax:0,
    orderTotal:0
};

const getCartFromLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem('cart'))  || initialState;
}

const cartSlice = createSlice({
    name:'cart',
   initialState:getCartFromLocalStorage(),

    reducers:{
        // Add Item
        addItem:(state, action)=>{
         const {product} = action.payload;
         const item = state.cartItems.find((item)=>item.cartID === product.cartID);

         if(item){
            item.amount += product.amount;
         }else{
             console.log(state.cartItems);
            state.cartItems.push(product)
         }
         state.NumItemsInCart += product.amount;
         state.cartTotal += product.amount * product.price;

         state.tax = 0.1 * state.cartTotal
         state.orderTotal = state.shipping + state.tax + state.cartTotal;
         localStorage.setItem('cart', JSON.stringify(state))
         toast.success('Item ADDED TO CART')

        },
  
    // Clear Items
    clearCart:(state)=>{
        localStorage.setItem('cart', JSON.stringify(initialState))
        return initialState
    },

    // remove Items
    removeItem:(state, action)=>{
        const {cartID} = action.payload
        const product = state.cartItems.find((item)=>item.cartID === cartID);

        state.cartItems = state.cartItems.filter((item)=>item.cartID !== cartID)
        state.NumItemsInCart -= product.amount;
        state.cartTotal -= product.price * product.amount;
        state.tax = 0.1 * state.cartTotal
        state.orderTotal = state.shipping + state.tax + state.cartTotal;
        localStorage.setItem('cart', JSON.stringify(state))
        toast.success('Item Removed')
        
    },
    // edit item
    editItem:(state, action)=>{
        const {cartID, amount} = action.payload;
        const item = state.cartItems.find((item)=>item.cartID ===  cartID);
        state.NumItemsInCart += amount - item.amount;
        state.cartTotal += item.price * (amount -item.amount);
        item.amount = amount;
        state.tax = 0.1 * state.cartTotal
        state.orderTotal = state.shipping + state.tax + state.cartTotal;
        localStorage.setItem('cart', JSON.stringify(state))
        toast.success('Cart updated')


    },

    calculateTotals: (state)=>{
        //  state.tax = 0.1 * state.cartTotal
        //  state.orderTotal = state.shipping + state.tax + state.cartTotal;
        //  localStorage.setItem('cart', JSON.stringify(state))

    }
}  })


export const {addItem, clearCart, removeItem, editItem} = cartSlice.actions;
export default cartSlice.reducer;

