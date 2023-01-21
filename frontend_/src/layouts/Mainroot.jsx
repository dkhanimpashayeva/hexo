import React from 'react'
import Header from './Header/Header'
import {Outlet} from "react-router-dom"
import Footer from './Footer/Footer'
const Mainroot = () => {
  return (
    <div>
<Header/>
<Outlet/>
<Footer/>

    </div>
  )
}

export default Mainroot