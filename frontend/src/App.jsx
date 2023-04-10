import React, { useState } from 'react'
import "./App.css"
import {Routes,Route} from "react-router-dom"
import Register from './pages/Register'
import Layout from './component/Layout'
import Login from './pages/Login'
import { Outlet,Navigate } from 'react-router-dom'
import Home from './pages/Home'


const Privateroute =({authenticate})=>{
  const auth =sessionStorage.getItem("token")
  return (
    <>
    {
      authenticate || auth ? <Outlet/> :
      <Navigate replace to ={"/login"}/>

    }
    
    </>
  )
}



const App = () => {
  const [authenticate, setauthenticate] = useState(false)
  return (
    <div>
      <Routes>
        <Route  element={  <Layout authenticate={authenticate} />}>
        <Route path='/register' element={  <Register/>}/>
        <Route path='/login' element={  <Login setauthenticate={setauthenticate}/>}/>
        <Route path='/' element={<Home/>}/>
        </Route>
        <Route path='/' element={<Privateroute authenticate={authenticate}/>}>
         <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    
    </div>
  )
}

export default App