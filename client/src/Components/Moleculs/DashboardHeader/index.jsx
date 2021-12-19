import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


const DashboardHeader = () => {
    const [user, setUser] = useState([])

    /* ----------------------------- AXIOS INSTANCE ----------------------------- */
    var api = axios.create({
        baseURL: process.env.REACT_APP_USER_API,
        withCredentials: true,
    })
    /* ----------------------------- End AXIOS INSTANCE ----------------------------- */
    useEffect(() => {
        GetUser()
    }, [])
    const GetUser = async () => {
        await api.get('/current-user-login')
            .then(res => {
                if (res.status === 200) {
                    setUser(res.data)
                }
            }).catch(err => {
                if (err.response !== undefined) {
                    console.log(err)
                }
            })
    }
    return (
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
            <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <NavLink to="/" className="text-white text-sm uppercase hidden lg:inline-block font-semibold">Home</NavLink>
                <NavLink to="/explore" className="text-white text-sm uppercase hidden lg:inline-block font-semibold">Explore</NavLink>
                <NavLink to="/commisions" className="text-white text-sm uppercase hidden lg:inline-block font-semibold">Commision</NavLink>
                <NavLink to="/creator" className="text-white text-sm uppercase hidden lg:inline-block font-semibold">Creator</NavLink>
                <NavLink to="/dashboard/onboard" className="text-white text-sm uppercase hidden lg:inline-block font-semibold">Dashboard</NavLink>

                <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                    {/* Profile */}
                    <NavLink to="/profile" className="text-blueGray-500 block" onclick="openDropdown(event,'user-dropdown')">
                        <div className="items-center flex">
                            <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                                <img alt="..." className="w-full rounded-full align-middle border-none shadow-lg" src="../../assets/img/team-1-800x800.jpg" /></span>
                        </div>
                    </NavLink>
                    {/* End Profile */}
                    <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="user-dropdown">
                        <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
                        <div className="h-0 my-2 border border-solid border-blueGray-100" />
                        <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated NavLink</a>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default DashboardHeader
