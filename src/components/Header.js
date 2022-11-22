import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
        <h1>My Bio</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/details">Details</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    </div>
)

export default Header