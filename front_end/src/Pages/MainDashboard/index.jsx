import React from 'react'
import { Outlet } from 'react-router-dom';
import tw from "twin.macro";
import { Navbar, DashbaordSidebar, DashboardHeader } from '../../Components'
import DashboardFooter from '../../Components/Moleculs/DashboardFooter';
const MainDashboard = () => {
    return (
        <>
            <Navbar />
            <div>
                {/* sidear dashboard */}
                <DashbaordSidebar />
                <div className="relative md:ml-64 bg-blueGray-50">
                    {/* Header */}
                    <DashboardHeader />
                    {/* Header */}
                    <div className="relative bg-blue-400 md:pt-32 pb-32 pt-12"></div>
                    <div className="px-4 md:px-10 mx-auto w-full -m-24">

                        {/* Content */}
                        <Outlet />
                        {/* footer */}
                        <DashboardFooter />
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainDashboard
