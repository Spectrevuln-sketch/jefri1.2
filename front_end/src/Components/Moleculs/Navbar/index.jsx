import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components";
import tw, { css } from "twin.macro";
// icons 
import { IconContext } from 'react-icons'
import { BiDonateHeart } from "react-icons/bi"
import { FaPaintBrush, FaSearch } from 'react-icons/fa'
import { BsCamera2 } from 'react-icons/bs'
import { CurrencyDollarIcon, AdjustmentsIcon } from '@heroicons/react/solid'
import { useEffect } from 'react';
import IsloginContext from '../../../Context/IsloginContext'

import { slide as Menu } from 'react-burger-menu'
import './burger-menu.css'


const NavbarContainer = styled.div`
    ${tw`
        bg-gray-50
        flex
        h-20
        shadow-xl 
        sticky
        top-0
        z-50
        backdrop-blur-sm
        items-center
        justify-between
        bg-opacity-80
    `}
`;

const ImageNav = tw.div`
    
    flex
    relative
    flex-row
    w-24
    h-24
    lg:w-auto
    lg:h-auto
    justify-center
    items-center  
`;

const NavbarList = tw.ul`
    flex
    flex-row
    list-none
    px-5
    items-center
    justify-between
`;

const NavLink = tw.li`
    hover:bg-blue-700
    hover:text-white
    hover:rounded-3xl
    text-gray-500
    px-2.5
    py-2.5
    items-center
    justify-center
`;

const TextMenu = tw.p`
    font-size['8px']
    font-bold
    text-gray-400
    bg-gray-200
    pl-8
    py-3
    rounded-t-md  
`;

const DropDownLi = tw.li`
 rounded-t
 bg-gray-200 
 hover:bg-gray-400 
 py-2 
 w-96
 pl-24
 block 
 flex-nowrap

`;


const RightMenu = tw.div`
    flex
    flex-row
    justify-between
    items-center
`;



const Navbar = () => {
    let navigate = useNavigate();
    const { islogin, AuthLogin } = useContext(IsloginContext)
    const [isOpen, setOpenDown] = useState(false)
    const [menu_list, setDownMenu] = useState()

    const showSettings = (e) => {
        e.preventDefault();
    }
    useEffect(() => {

    }, [])

    const MenuShow = ({ title }) => {
        setOpenDown(!isOpen)
        setDownMenu(title)
        console.log(title)
    }

    const DropDownMenuBrowse = ({ title }) => {
        return (
            <div className="dropdown inline-block relative" >
                <button className="hover:bg-blue-700 hover:text-white  text-gray-700 font-semibold py-2 px-4  items-center rounded-none bg-none" onClick={() => MenuShow({ title: title })} onPointerLeaveCapture={() => setOpenDown(false)}>
                    <span>{title} 🠋</span>
                </button>

                <ul className={isOpen === true && menu_list === 'Browse Product' ? "opacity-100 dropdown-content absolute text-gray-700 pt-1 mx-5" : "dropdown-content absolute hidden text-gray-700 pt-1"} onMouse>
                    <TextMenu>Product</TextMenu>
                    <DropDownLi>
                        <Link className="cursor-pointer font-bold" style={{ fontSize: '15px' }} to="">Publication</Link>
                        <p style={{ fontSize: '12px' }} className="">Explore Show Case By Creator</p>
                    </DropDownLi>
                    <DropDownLi>
                        <Link className="cursor-pointer font-bold" style={{ fontSize: '15px' }} to="">Publication</Link>
                        <p style={{ fontSize: '12px' }} className="">Explore Show Case By Creator</p>
                    </DropDownLi>

                </ul>

            </div>
        )
    }


    const DropDownMenuFeatures = ({ title }) => (
        <div className="dropdown inline-block relative" >
            <button className="hover:bg-blue-700 hover:text-white  text-gray-700 font-semibold py-2 px-4  items-center rounded-none bg-none" onClick={() => MenuShow({ title: title })} >
                <span>{title} 🠋</span>
            </button>

            <ul className={isOpen === true && menu_list === 'Features' ? "opacity-100 dropdown-content absolute text-gray-700 pt-1 mx-5" : "dropdown-content absolute hidden text-gray-700 pt-1"} onMouseOut={() => setOpenDown(false)}>
                <TextMenu>Fitur Utama</TextMenu>

                <li className="w-96 bg-gray-200 hover:bg-gray-400 hover:text-white flex flex-row px-3 py-5 flex-nowrap justify-start items-center">
                    <Link className="cursor-pointer font-bold flex px-4" to="">
                        <IconContext.Provider value={{ color: "blue", className: "flex", size: "25px" }}>
                            <span>
                                <BiDonateHeart />
                            </span>
                        </IconContext.Provider>
                    </Link>
                    <p className="text-gray-600 flex font-semibold text-base"> Donation / Tip</p>
                </li>
                <li className="w-96 bg-gray-200 hover:bg-gray-400 hover:text-white flex flex-row px-3 py-5 flex-nowrap justify-start items-center">
                    <Link className="cursor-pointer font-bold flex px-4" to="">
                        <IconContext.Provider value={{ color: "blue", className: "flex", size: "25px" }}>
                            <span>
                                <BsCamera2 />
                            </span>
                        </IconContext.Provider>
                    </Link>
                    <p className="text-gray-600 flex font-semibold text-base"> Commisions</p>
                </li>
                <li className="w-96 bg-gray-200 hover:bg-gray-400 hover:text-white flex flex-row px-3 py-5 flex-nowrap justify-start items-center">
                    <Link className="cursor-pointer font-bold flex px-4" to="">
                        <IconContext.Provider value={{ color: "blue", className: "flex", size: "25px" }}>
                            <span>
                                <FaPaintBrush />
                            </span>
                        </IconContext.Provider>
                    </Link>
                    <p className="text-gray-600 flex font-semibold text-base"> Publication</p>
                </li>

            </ul>

        </div >
    )


    const BurgerMenu = () => {
        return (
            <Menu right className={'-mt-10'}>
                <div className='flex flex-col justify-around items-center'>
                    <div className="flex flex-col justify-center items-center">
                        <div className='flex flex-col justify-center items-center'>
                            <div className='bg-gradient-to-tr from-indigo-600 via-pink-400 to-green-500 h-32 w-32 rounded-full flex justify-center items-center'>
                                {/* Profile */}
                                <img src="https://images.unsplash.com/photo-1639410476622-1a91d655f052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="ring-gray-50 ring-4 w-28 h-28 rounded-full" alt='Image' />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='mt-2 justify-center items-center text-center'>
                                    <p className="text-gray-700 font-semibold text-sm w-full">Gerry Raditya Kusmana Yahya</p>
                                    <p className="text-gray-500 font-semibold text-xs w-full">Gerry@email.com</p>
                                    <div className='my-4 flex flex-col justify-center items-center'>
                                        {/* Menu Button */}
                                        <button className='bg-gray-500 bg-opacity-30 hover:bg-opacity-80 text-white justify-center items-center p-2 rounded-md'>My Profile</button>
                                        <button className='bg-blue-500 bg-opacity-30 hover:bg-opacity-80 text-white justify-center items-center mt-2 p-2 rounded-md' onClick={() => navigate(`/dashboard/onboard`)}>Change Profile</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col justify-between items-start text-sm'>
                            <Link id="belance" className="menu-item flex flex-row items-center my-2" to="/belance">
                                <CurrencyDollarIcon className='h-8 w-8 mr-2' />
                                <p>Balance</p>
                            </Link>
                            <Link id="setting-page" className="menu-item flex flex-row items-center my-2" to="/setting-page">
                                <AdjustmentsIcon className='h-8 w-8 mr-2' />
                                <p>Settings</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </Menu>
        )
    }

    const NavigateionData = () => {
        // sudah tidak di pakai
        return (
            <NavbarList>
                <ImageNav>
                    {/* Logo  */}

                    <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="logo" className="w-20 h-20" />
                </ImageNav>
                <NavLink>
                    <DropDownMenuBrowse title="Browse Product" />
                </NavLink>
                <NavLink>
                    <DropDownMenuFeatures title="Features" />
                </NavLink>

                <NavLink>
                    <Link to="/product-list">
                        Creator
                    </Link>
                </NavLink>

                {/* Search button */}
                <button className="">
                    <Link className="cursor-pointer font-bold flex px-4" to="">
                        <IconContext.Provider value={{ color: "black", className: "flex", size: "20px" }}>
                            <span>
                                <FaSearch />
                            </span>
                        </IconContext.Provider>
                    </Link>
                </button>
            </NavbarList>
        )
    }

    return (
        <NavbarContainer>
            <NavbarList>
                <ImageNav>
                    {/* Logo  */}
                    <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="logo" className="w-20 h-20" />
                </ImageNav>

                <NavLink>
                    <Link to="/landing">
                        Explore
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to="/commisions">
                        Commisions
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to="/creators">
                        Creator
                    </Link>
                </NavLink>
                <NavLink>
                    <DropDownMenuFeatures title="Features" />
                </NavLink>

            </NavbarList>
            {islogin === true && (
                <>




                    <BurgerMenu />


                </>
            )}
            {islogin === false && (
                <>



                    {/* Right Mennu */}
                    <RightMenu>
                        <button className="rounded-md bg-gray-200 hover:bg-gray-400 px-2 py-2 flex item-center justify-center">
                            <Link className="cursor-pointer font-bold flex px-4" to="/login-user">
                                <p className="text-gray-600 hover:text-white">Sign In</p>
                            </Link>
                        </button>
                        <button className="mx-3 rounded-md bg-blue-300 hover:bg-blue-600 px-2 py-2 flex item-center justify-center">
                            <Link className="cursor-pointer font-bold flex px-4" to="/register-user">
                                <p className="text-gray-600 hover:text-white">Become Creator</p>
                            </Link>
                        </button>


                    </RightMenu>
                </>
            )}
        </NavbarContainer>
    )
}

export default Navbar
