import React from 'react'
import Logo from "../img/CommunityAssistsLogo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt="" />
        </div>
        <div className='links'>
          
          {/* TODO: implement listing all facilites */}
          <Link className='link' to="/">
            <h6>Home</h6>
          </Link>
          <Link className='link' to="/">
            <h6>Facility List</h6>
          </Link>
          <span>Logout</span>
        </div>
      </div>

    </div>
  )
}

export default Navbar