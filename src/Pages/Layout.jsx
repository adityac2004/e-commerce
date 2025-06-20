import React , {useState }from 'react'
import "./Layout.css"
import a from '../Assets/logostanley.png'
import { NavLink,Outlet } from 'react-router-dom'
import { RiLoginBoxLine } from "react-icons/ri";
import { IoNotificationsCircleSharp } from "react-icons/io5";

import { FaBars } from 'react-icons/fa';



function Layout() {

   const[isOpen , setISopen] = useState(false)
   const toggle = ()=>{
    setISopen(!isOpen)
   }
  return (
   <>
    <aside>
      <nav>
       
        <div id ='ham' onClick={toggle}>  <FaBars /></div>
         <div id="logo"><img src={a} alt="a" /></div>
       

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
            <NavLink to="/products" activeClassName="active">Collection</NavLink>
            <NavLink to="/cart" activeClassName="active">MyCart</NavLink>
            
            <NavLink to="/account" activeClassName="active">Account</NavLink>
          </div>
       <div id="subbar">
         <div id='l'><RiLoginBoxLine /> sign in </div>
        <div id='k'><IoNotificationsCircleSharp /> </div>
       </div>
    </nav>
    
      <section>
        
        <Outlet/>
      </section>
    </aside>
   </>
  )
}

export default Layout