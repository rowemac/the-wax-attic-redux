import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navlinks-list">
                {/* <li className="logo-navlink-li"><NavLink to="/"><img className="navlink-logo-img" src="/Logo.png" alt="logo"/></NavLink></li> */}
                <li className="navlink-li"><NavLink className="navlink-item" to="/albums">Library</NavLink></li>
                <li className="navlink-li"><NavLink className="navlink-item" to="/albums/new">Add Album</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar