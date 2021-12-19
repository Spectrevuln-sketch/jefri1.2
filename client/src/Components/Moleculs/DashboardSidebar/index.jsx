import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
// icon
import { GiReceiveMoney } from 'react-icons/gi'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { RiPagesFill } from 'react-icons/ri'
import { BsListCheck } from 'react-icons/bs'

import { DashboardMenu } from '../../../Components'
import IsLoginContext from '../../../Context/isLoginContext'

const DashbaordSidebar = () => {
    const { islogin } = useContext(IsLoginContext)
    const navigation = useNavigate()
    /* ----------------------------- AXIOS INSTANCE ----------------------------- */
    var api = axios.create({
        baseURL: process.env.REACT_APP_USER_API,
        withCredentials: true,
    })
    /* ----------------------------- End AXIOS INSTANCE ----------------------------- */

    const LogoutUser = async () => {
        await api.get('/logout')
            .then(res => {
                if (res.status === 200) {
                    Swal.fire(
                        'Logout User',
                        `${res.data.message}`,
                        'success'
                    )
                    navigation(`/`)
                }
            }).catch(err => {
                if (err.response !== undefined) {
                    Swal.fire(
                        'Error',
                        `${err.response.data.message}`,
                        'error'
                    )
                }
            })
    }


    return (
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
            <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                <button className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button" onclick="toggleNavbar('example-collapse-sidebar')">
                    <i className="fas fa-bars" />
                </button>
                <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0" href="../../index.html">
                    Logo Place Here
                </a>
                <ul className="md:hidden items-center flex flex-wrap list-none">
                    {/* Mobile View */}
                    <li className="inline-block relative">
                        <a className="text-blueGray-500 block py-1 px-3" href="#pablo" onclick="openDropdown(event,'notification-dropdown')">
                            <i className="fas fa-bell" />
                        </a>
                        <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="notification-dropdown">
                            <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
                            <div className="h-0 my-2 border border-solid border-blueGray-100" />
                            <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
                        </div>
                    </li>
                    <li className="inline-block relative">
                        <a className="text-blueGray-500 block" href="#pablo" onclick="openDropdown(event,'user-responsive-dropdown')"><div className="items-center flex">
                            <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"><img alt="..." className="w-full rounded-full align-middle border-none shadow-lg" src="../../assets/img/team-1-800x800.jpg" /></span></div></a>
                        <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="user-responsive-dropdown">
                            <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
                            <div className="h-0 my-2 border border-solid border-blueGray-100" />
                            <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
                        </div>
                    </li>


                </ul>

                <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden" id="example-collapse-sidebar">
                    <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                        <div className="flex flex-wrap">
                            <div className="w-6/12">
                                <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0" href="../../index.html">
                                    Notus JS
                                </a>
                            </div>
                            <div className="w-6/12 flex justify-end">
                                <button type="button" className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" onclick="toggleNavbar('example-collapse-sidebar')">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* End Mobile View */}
                    <form className="mt-6 mb-4 md:hidden">
                        <div className="mb-3 pt-0">
                            <input type="text" placeholder="Search" className="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal" />
                        </div>
                    </form>
                    {/* Sidebar */}
                    {/* Divider */}
                    <hr className="my-4 md:min-w-full" />
                    {/* Heading */}
                    <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                        Admin Layout Pages
                    </h6>
                    {/* Navigation */}
                    <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                        {/* Menu Sidebar */}
                        <DashboardMenu uri="onboard" title="Onboard" icon={<MdOutlineLeaderboard />} />
                        <DashboardMenu uri="tip" title="Tip" icon={<GiReceiveMoney />} />
                        <DashboardMenu uri="komisi" title="Komisi" icon={<BsListCheck />} />
                        <DashboardMenu uri="atur-halaman" title="Atur Halaman" icon={<RiPagesFill />} />
                        <DashboardMenu uri="publication" title="Publication" icon={<RiPagesFill />} />
                        {/*  Menu Sidebar */}
                        <button className="bg-red-600 text-white py-2" onClick={LogoutUser}>Logout</button>
                    </ul>
                    {/* Divider */}

                </div>
            </div>
        </nav>
    )
}

export default DashbaordSidebar
