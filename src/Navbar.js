import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex bd-highlight">
            <div>
                <ul>
                    <li className="navbar-brand"> <Link className="nav-link" to="/">Home</Link> </li>
                    <li className="navbar-brand"> <NavLink className="nav-link" to="/lt">Data Table</NavLink> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar