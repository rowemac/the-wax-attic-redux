import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
    return (<>
        <img className="logo" src="/wax_logo.png" alt="the wax attic." />
        <NavLink to="/albums">Library</NavLink>
    </>)
}
export default Home