import React from 'react'
import { IconContext } from 'react-icons'
import { NavLink } from 'react-router-dom'

const DashboardMenu = ({ title, active, icon, uri }) => {
    return (
        <>
            <li>
                <NavLink to={uri} className={({ isActive }) => isActive === true ? "text-sm uppercase py-3 font-bold  text-blue-500 hover:text-blue-600 flex flex-row" : "text-sm uppercase py-3 font-bold  text-gray-500 hover:text-gray-600 flex flex-row"}>
                    <IconContext.Provider value={{ size: "25px", className: "mr-3 item-center" }}>
                        <span>
                            {icon}
                        </span>
                    </IconContext.Provider>
                    <span className='flex items-center'>{title}</span>
                </NavLink>
            </li>
        </>
    )
}

export default DashboardMenu
