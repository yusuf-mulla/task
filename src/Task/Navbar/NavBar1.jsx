import React from 'react'
import './NavBar1.css'
import { Link } from 'react-router-dom'

export const NavBar1=()=>{
    return(
        <div className='navbar'>
            <div className='logo-container'>
            <h1>A<sub>2</sub>Z Cart</h1>
            </div >
            <div className="nav-container">
            <ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about"> About</Link> </li>
                <li><Link to="/blog"> Blog</Link> </li>
                <li><Link to="/contactUS"> ContactUS</Link> </li>
            </ul>
            </div>

        </div>
    )
}