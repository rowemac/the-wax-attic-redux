import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <NavLink className="header-nav-link" to="/"><h1 className="header">the wax attic.</h1></NavLink>
    )
}


export default Header