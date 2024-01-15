import { configureStore } from "@reduxjs/toolkit";
import SideBarBoolean from "./SideBarBoolean";
import youtubeVideos from "./youtubeVideos";


const MyStore=configureStore({
    name:"Store",
    reducer:{
        SideBarToogle:SideBarBoolean,
        youtubeVideos1:youtubeVideos,
    }

})
export default MyStore