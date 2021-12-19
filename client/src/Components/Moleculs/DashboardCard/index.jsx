import React from 'react'

const DashboardCard = ({ children, ...rest }) => {
    return (

        <div {...rest}>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                {children}
            </div>
        </div>
    )
}

export default DashboardCard
