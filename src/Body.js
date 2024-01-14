import React from 'react'
import SideBar from './Header/SideBar'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className='flex gap-20'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Body