import React from 'react'
import { Link } from 'react-router-dom'
import { DropdownNav } from '../../../Components'
const Header = () => {
    const Menus = [
        { uri: '/', title: 'Data' },
        { uri: '/', title: 'Data' }
    ]


    return (
        <header className="transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col lg:flex lg:flex-row lg:items-center justify-center">
                                    {/* logo begin */}
                                    <div id="logo">
                                        <a href="dark-index.html">
                                            <img alt src="assets/images/logo-light.png" />
                                        </a>
                                    </div>
                                    {/* logo close */}
                                    {/* mainmenu begin */}
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
                                        <DropdownNav uri='/' title="Features" menus={Menus} />

                                    </ul>
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">

                                <div className="menu_side_area">
                                    <Link to="/login" className="btn-main">
                                        <i className="icon_wallet_alt" />
                                        <span>Login</span>
                                    </Link>
                                    <span id="menu-btn" />
                                </div>
                                <div className="menu_side_area">
                                    <Link to="/register" className="bg-slate-400 p-2 text-white rounded-md text-sm font-bold hover:shadow  hover:shadow-gray-400">
                                        <span>Register</span>
                                    </Link>
                                    <span id="menu-btn" />
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">

                                <div className="menu_side_area">
                                    <a href="dark-wallet.html" className="btn-main">
                                        <i className="icon_wallet_alt" />
                                        <span>Connect Wallet</span>
                                    </a>
                                    <span id="menu-btn" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
