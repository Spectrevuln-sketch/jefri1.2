import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    ButtonGroup
} from 'reactstrap';
import { stack as Menu } from 'react-burger-menu'
import Sidebar from '../Sidebar/Sidebar';
import '../Navbar/Navbar.css'
import Marketplace from '../../pages/Marketplace/Marketplace';

const NavBar = () => {
    var [isLoggedIn, setIsLoggedIn] = useState(false)
    var [username, setUsername] = useState("")

    const getUserName = (e) => {
        axios.get(
            "api", {
            params: {
                username: username
            }
        }
        ).then(res => {

        })
    }

    const showSettings = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Navbar color="light" expand="md" sticky="top" className="d-flex flex-row">
                <NavbarBrand href="/">LOGO</NavbarBrand>
                <Nav className="justify-content-between align-items-center">
                    <UncontrolledDropdown >
                        <DropdownToggle className="nav-text" nav caret>
                            Browse Product
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Product
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="container">
                                <NavLink href="/publication">
                                    <h6>Publication</h6>
                                    <span>
                                        <p>
                                            Browse creative content made by our creators
                                        </p>
                                    </span>
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem className="container">
                                <NavLink href="/commission">
                                    <h6>Commission</h6>
                                    <span>
                                        <p>
                                            Need creative work ? Find what you want here !
                                        </p>
                                    </span>
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown >
                        <DropdownToggle className="nav-text" nav caret>
                            Feature
                        </DropdownToggle>
                        <DropdownMenu className="feature" right>
                            <DropdownItem>
                                Main Feature
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="container">
                                <NavLink href="/donation-feature">
                                    <span>
                                        <img className="feature-img" src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/20/000000/external-donation-medical-itim2101-lineal-color-itim2101-1.png" />
                                        <h6>Donation</h6>
                                    </span>
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem className="container">
                                <NavLink href="/commission-feature">
                                    <span>
                                        <img className="feature-img" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/20/000000/external-commission-stock-market-wanicon-lineal-color-wanicon.png" />
                                        <h6>Commission</h6>
                                    </span>
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem className="container">
                                <NavLink href="/publication-feature">
                                    <span>
                                        <img className="feature-img" src="https://img.icons8.com/cotton/20/000000/publication--v1.png" />
                                        <h6>Publication</h6>
                                    </span>
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink className="nav-text" href="/creator">Creator</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">
                            <img className="search-icon" src="https://img.icons8.com/ios-filled/25/000000/search--v4.png" />
                        </NavLink >
                    </NavItem>
                    <NavItem>
                        <NavLink href="/marketplace">
                            <h5>Marketplace</h5>
                        </NavLink>
                    </NavItem>
                    <NavItem className="d-flex justify-content-end align-items-center">
                        <ButtonGroup id="button" size="sm">
                            <Button outline color="secondary">
                                <NavLink href="/login">Log In</NavLink>
                            </Button>
                            <Button outline color="danger">
                                <NavLink href="/register">Be a Creator</NavLink>
                            </Button>
                        </ButtonGroup>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar