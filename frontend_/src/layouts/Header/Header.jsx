import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.scss"
const Header = () => {
  return (
<nav>
<div className="container">
    <div className="d-flex align-items-center justify-content-between">
        <div className="logo">
            <h3>HEXO</h3>
        </div>
        <div className="nav-links">
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/projects'>PROJECTS</NavLink>
            <NavLink to='/services'>SERVICES</NavLink>
            <NavLink to='/blog'>BLOG</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>

        </div>
        <div className="dashboard">
          <Link to='/addtestimonials' style={{backgroundColor:"red",color:"white",padding:"10px 15px",borderRadius:"5px", textDecoration:"none"}}>AddTestimonials</Link>
        </div>
    </div>
</div>


</nav>
  )
}

export default Header