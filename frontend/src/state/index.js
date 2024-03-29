import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
    mode: "light"
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout:(state)=>{
            state.user = null;
            state.token = null;
        },
        setMode:(state)=>{
            state.mode = state.mode==='dark' ? 'light' :'dark'
        }
    }
})

export const {setLogin, setLogout, setMode} = authSlice.actions
export default authSlice.reducer