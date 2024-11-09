import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";





const initialState = {
    user : {username:'arnold best'},
    theme:'dracula'
}

const userSlice = createSlice({
    name:'user',
    initialState,

    reducers:{
        loginUser:(state, action)=>{

        },
        logoutUser:(state, action)=>{

        },
        toggleTheme:(state)=>{


        }

    }
})



export const {loginUser, logoutUser, toggleTheme} = cartSlice.actions;
export default userSlice.reducer;