import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkNav = ({ label, children, uri, ...rest }) => {
    return (
        <NavLink {...rest} to={uri} className={({ isActive }) => isActive ? "group border-l-4 border-r-0 border-t-0 border-b-0 rounded border-solid px-3 py-2 flex items-center text-sm font-medium no-underline bg-red-50 border-blue-400 text-blue-500 hover:bg-red-50 hover:text-blue-700" : "group border-l-4 border-r-0 border-t-0 border-b-0 rounded border-solid px-3 py-2 flex items-center text-sm font-medium no-underline border-white text-gray-900 hover:bg-gray-50 hover:text-gray-900"}>
            {children}
            <span _ngcontent-woq-c116 className="truncate">{label}</span>
        </NavLink>
    )
}

export default LinkNav
