import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";





const initialState = {
    user : {username:'arnold best'},
    theme:'dracula'
}
const themesValue ={

    winter:'winter',
    dracula:'dracula'
}
const userSlice = createSlice({
    name:'user',
    initialState,

    reducers:{
        loginUser:(state, action)=>{


        },
        logoutUser:(state, action)=>{
            state.user = null
            localStorage.removeItem('user')
            toast.success('User logout successfully')

        },
        toggleTheme:(state)=>{
            const {winter, dracula} = themesValue;
            state.theme  = state.theme === dracula ? winter : dracula

            document.documentElement.setAttribute('data-theme', state.theme)
            localStorage.setItem('theme', state.theme)


        }

    }
})



export const {loginUser, logoutUser, toggleTheme} = userSlice.actions;
export default userSlice.reducer;