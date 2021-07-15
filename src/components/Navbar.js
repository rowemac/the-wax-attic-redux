import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/"></NavLink>
            <NavLink to="/albums/new">Add Album</NavLink>
        </div>
    )
}

export default Navbar