import React from 'react'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
  const store=useSelector(store=> store)
  console.log(store)
  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer