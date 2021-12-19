import React from 'react'
import { Link } from 'react-router-dom'
const DropdownNav = ({ title, uri, menus }) => {
    return (
        <li>
            <Link to={uri}>
                {title}
                <span></span>
            </Link>
            <ul>
                {menus && (
                    menus.map(menu => {
                        return (

                            <li>
                                <Link to={`${menu.uri}`}>{menu.title}</Link>
                            </li>
                        )
                    })
                )}

            </ul>
        </li>
    )
}

export default DropdownNav
