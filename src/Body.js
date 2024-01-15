import React from 'react'
import SideBar from './Header/SideBar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ToggleSideBar from './Header/ToggleSideBar'
const Body = () => {
  const toogleValue=useSelector(store=> store.SideBarToogle.toogleValue)
  return (
    <div className='flex gap-20'>
      {
       !toogleValue? <SideBar />:<ToggleSideBar/>

      }
        <Outlet />
    </div>
  )
}

export default Body