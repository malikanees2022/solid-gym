import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../../data'
// import Logos from '../../images/logo.png'
import { FaBars } from "react-icons/fa";
import {MdOutlineClose} from "react-icons/md"
import './navbar.css'
import Logo from './Logo';

const Navbar = () => {
  const [navOpen,setNavOpen]=useState(false)
  return (
    <nav>
      <div className="container nav_container">
        <Link >

        {/* insted of logo image  i use logo componet of solid gym  */}
        {/* className='logo' */}
        {/* <img src={Logos} alt="nav logo" /> */}
        <Logo/>
        </Link>

        <ul className={`nav_links ${navOpen ? 'show_nav': 'hide_nav'}`}>
            {
                links.map(({name, path}, index)=>{
                    return (
                        <li key={index}>
                            <NavLink to={path} className={({isActive})=>isActive ? 'active-nav'   : ''}  onClick={()=>setNavOpen(prev => !prev)}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
        <button className="nav_toggle-btn" onClick={()=>setNavOpen(prev => !prev)}>
            {
              navOpen ? <MdOutlineClose/> : <FaBars/>
            }
        </button>

      </div>

    </nav>
  )
}

export default Navbar
