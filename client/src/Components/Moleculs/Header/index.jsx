import React from 'react'
import { Link } from 'react-router-dom'
import { DropdownNav } from '../../../Components'
import { useMediaQuery } from 'react-responsive'
import { deviceSize } from "../../../Utils/responsive";
import styles from './burger-menu'
import { slide as Menu } from 'react-burger-menu'
const Header = () => {
    const Menus = [
        { uri: '/', title: 'Data' },
        { uri: '/', title: 'Data' }
    ]
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    const isDesktop = useMediaQuery({ maxWidth: deviceSize.desktop });
    const isLaptop = useMediaQuery({ maxWidth: deviceSize.laptop });
    const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });

    const Nav = (
        <>
            <ul id="mainmenu">

                <li>
                    <Link to="/explore">
                        Explore
                        <span />
                    </Link>
                </li>
                <li>
                    <Link to="/commisions">
                        Commisions
                        <span />
                    </Link>
                </li>
                <li>
                    <Link to="/creator">
                        Creator
                        <span />
                    </Link>
                </li>
                {isMobile && (
                    <>
                        <li>
                            <Link to="/">
                                Features
                                <span />
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="bg-slate-400 p-2 text-white rounded-md text-sm font-bold hover:shadow  hover:shadow-gray-400 w-full flex flex-row item-center text-center">
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="btn-main mt-2 w-full flex flex-row item-center text-center">
                                Login
                            </Link>
                        </li>
                    </>
                )}
                {!isMobile && (

                    <DropdownNav uri='/' title="Features" menus={Menus} />
                )}
            </ul>
        </>
    )

    return (
        <header className="transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col xl:de-flex-col sm:de-flex-col">
                                <div className="de-flex-col lg:flex lg:flex-row lg:items-center justify-center">
                                    {/* logo begin */}
                                    <div id="logo" className={isMobile ? "flex flex-row justify-center items-center w-24 h-20 ml-36" : "flex flex-row justify-center items-center w-24 h-24"}>
                                        <Link to="/login">
                                            <img alt src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo-500x281.png" />
                                        </Link>
                                    </div>
                                    {/* logo close */}
                                    {/* mainmenu begin */}
                                    {isMobile && (
                                        <Menu right styles={styles}>
                                            {Nav}
                                        </Menu>
                                    )}
                                    {!isMobile && Nav}

                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid md:mr-52">
                                {!isMobile && (
                                    <>
                                        <div className="menu_side_area">
                                            <Link to="/login" className="btn-main">
                                                <i className="icon_wallet_alt" />
                                                <span>Login</span>
                                            </Link>
                                        </div>
                                        <div className="menu_side_area">
                                            <Link to="/register" className="bg-slate-400 p-2 text-white rounded-md text-sm font-bold hover:shadow  hover:shadow-gray-400">
                                                <span>Register</span>
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="de-flex-col header-col-mid">


                            </div>
                            <div className="de-flex-col header-col-mid">


                            </div>
                            <div className="de-flex-col header-col-mid">


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
