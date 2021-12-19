import React from 'react'
import { IconContext } from 'react-icons'
import { NavLink } from 'react-router-dom'
const MenuNav = ({ label, icon, uri }) => {
    return (
        <>
            <li className="nav-item">
                <NavLink to={uri} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    <IconContext.Provider>
                        <span>
                            {icon}
                        </span>
                    </IconContext.Provider>
                    <p>
                        {label}
                        <i className="right fas fa-angle-left" />
                    </p>
                </NavLink>
            </li>
        </>
    )
}

export default MenuNav
