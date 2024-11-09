import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const themesValue ={
    winter:'winter',
    dracula:'dracula'
}

const getUser = () => {
    return JSON.parse(localStorage.getItem('user')) || null;
}


// trouble here
const getThemeLocal = ()=>{
    const theme = localStorage.getItem('theme') || themesValue.winter;
    document.documentElement.setAttribute('data-theme', theme)
    return theme
}
// trouble here

const initialState = {
    user : getUser(),
    theme:getThemeLocal()

}
const userSlice = createSlice({
    name:'user',
    initialState,

    reducers:{
        loginUser:(state, action)=>{
            const user = {...action.payload.user, token:action.payload.jwt};
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user) )
        },
        logoutUser:(state, action)=>{
            state.user = null
            localStorage.removeItem('user')
            toast.success('User logout successfully')
           

        },
        toggleTheme:(state)=>{
            const {winter, dracula} = themesValue;
            state.theme  = state.theme === dracula ? winter : dracula;

            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme);


        }

    }
})

export const {loginUser, logoutUser, toggleTheme} = userSlice.actions;
export default userSlice.reducer; 