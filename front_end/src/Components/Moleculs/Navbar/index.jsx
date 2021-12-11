import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import tw, { css } from "twin.macro";
// icons 
import { IconContext } from 'react-icons'
import { BiDonateHeart } from "react-icons/bi"
import { FaPaintBrush, FaSearch } from 'react-icons/fa'
import { BsCamera2 } from 'react-icons/bs'
import { useEffect } from 'react';

const NavbarContainer = styled.div`
    ${tw`
        bg-gray-50
        flex
        h-20
        shadow-xl 
        sticky
        top-0
        z-50
        bg-blend-saturation
        bg-opacity-80
        items-center
        justify-between
    `}
`;

const ImageNav = tw.div`
    
    flex
    relative
    flex-row 
    w-full
    h-full
    lg:w-auto
    lg:h-auto
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
    const [isOpen, setOpenDown] = useState(false)
    const [menu_list, setDownMenu] = useState()

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
                <button className="hover:bg-blue-700 hover:text-white  text-gray-700 font-semibold py-2 px-4  items-center rounded-none bg-none" onClick={() => MenuShow({ title: title })} onMouseOut={() => setOpenDown(false)}>
                    <span>{title} 🠋</span>
                </button>

                <ul className={isOpen === true && menu_list === 'Browse Product' ? "opacity-100 dropdown-content absolute text-gray-700 pt-1 mx-5" : "dropdown-content absolute hidden text-gray-700 pt-1"}>
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
            <button className="hover:bg-blue-700 hover:text-white  text-gray-700 font-semibold py-2 px-4  items-center rounded-none bg-none" onClick={() => MenuShow({ title: title })} onMouseOut={() => setOpenDown(false)}>
                <span>{title} 🠋</span>
            </button>

            <ul className={isOpen === true && menu_list === 'Features' ? "opacity-100 dropdown-content absolute text-gray-700 pt-1 mx-5" : "dropdown-content absolute hidden text-gray-700 pt-1"}>
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



    return (
        <NavbarContainer>
            <NavbarList>
                <ImageNav>
                    <img src="#" alt="logo" className="w-20 h-20" />
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
            {/* Right Mennu */}
            <RightMenu>
                <button className="rounded-md bg-gray-200 hover:bg-gray-400 px-2 py-2 flex item-center justify-center">
                    <Link className="cursor-pointer font-bold flex px-4" to="/login-user">
                        <p className="text-gray-600 hover:text-white">Sign In</p>
                    </Link>
                </button>
                <button className="mx-3 rounded-md bg-blue-300 hover:bg-blue-600 px-2 py-2 flex item-center justify-center">
                    <Link className="cursor-pointer font-bold flex px-4" to="">
                        <p className="text-gray-600 hover:text-white">Become Creator</p>
                    </Link>
                </button>
            </RightMenu>
        </NavbarContainer>
    )
}

export default Navbar
