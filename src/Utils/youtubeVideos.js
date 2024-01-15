import { createSlice } from '@reduxjs/toolkit'


const youtubeVideos = createSlice({
    name:"Youtube Videos",
    initialState:{
        videos:null,
    },
    reducers:{
        videos:(state,action)=>{
            state.videos=action.payload;
        },
    }
})
export const {videos}=youtubeVideos.actions

export default youtubeVideos.reducer