import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({authenticate}) => {
  const auth =sessionStorage.getItem("token");
  return (
    <div>
        <nav className='navbar'>
            <ul className='ul-text'>
               <Link to={"/"}> <li>Blog-App</li></Link>
               {
                auth && authenticate ? (
                  <div>
                  <Link to={"/register"}> <li>Createpost</li></Link>
                  <Link to={"/login"}><li>Logout</li></Link>
                  </div>

                ):  <div>
                <Link to={"/register"}> <li>Registration</li></Link>
                <Link to={"/login"}><li>Login</li></Link>
                </div>
               }
              
            </ul>
        </nav>
    </div>
  )
}

export default Navbar