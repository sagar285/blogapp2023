import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
const Layout = ({authenticate}) => {
  return (
    <div>
        <Navbar authenticate={authenticate}/>
        <Outlet/>
    </div>
  )
}

export default Layout