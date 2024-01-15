import React, { useEffect } from 'react'
import VideoContainer from './VideoContainer'
import { useDispatch, useSelector } from 'react-redux'
import { videos } from './Utils/youtubeVideos'

const MainContainer = () => {

  const dispatch=useDispatch()
  useEffect(()=>{
    fetched()
  })
  const fetched=async()=>{
    const fetchedData= await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyD9t0YDdDC6HD9l-gK65CaUAV8ayPwaBII ")
    const data=await fetchedData.json();
    dispatch(videos(data.items))
    console.log(data)
  }
  return (
    <div className='text-white'>
        <VideoContainer />
    </div>
  )
}

export default MainContainer