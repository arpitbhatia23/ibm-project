import { combineReducers, createSlice } from "@reduxjs/toolkit";

export const weatherdata=createSlice({
    name :"data",
    initialState:{
        data:null
    },
    reducers:{
        setdata(state,action){
            state.data=action.payload
        }
    }
})
export const theme=createSlice({

    name:"theme",
    initialState:{
        theme:"dark"
    },
    reducers:{
        settheme(state,action){
            state.theme=action.payload
        }
    }
})

export const {setdata}=weatherdata.actions
export const  {settheme}=theme.actions
 const rootReducer=combineReducers({
    data:weatherdata.reducer,
    theme:theme.reducer
})
export default rootReducer