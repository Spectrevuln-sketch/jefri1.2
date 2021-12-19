import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import '../Sidebar/Sidebar.css'

const Sidebar = () => {
    return (
        <Menu right >
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/salads">
                Salads
            </a>
            <a className="menu-item" href="/pizzas">
                Pizzas
            </a>
            <a className="menu-item" href="/desserts">
                Desserts
            </a>
        </Menu>
    );
}

export default Sidebar