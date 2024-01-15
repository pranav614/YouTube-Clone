import { createSlice } from '@reduxjs/toolkit'


const SideBarBoolean = createSlice({
    name:"SideBarstr",
    initialState:{
        toogleValue:false,
    },
    reducers:{
        myToogle:(state)=>{
            state.toogleValue=!state.toogleValue;
        },
    }
})
export const {myToogle}=SideBarBoolean.actions

export default SideBarBoolean.reducer