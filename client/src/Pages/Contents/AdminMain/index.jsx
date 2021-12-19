import React, { useState } from 'react'
import {
    Link,
    useLocation,
    Outlet,
    useRoutes,
    matchRoutes,
    useResolvedLocation,
    useParams,
    Navigate
} from "react-router-dom";
import { DashbaordSidebar, DashboardHeader, DashboardFooter } from '../../../Components'
const AdminMain = () => {

    return (
        <>
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
                        {/* <DashboardFooter /> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminMain
