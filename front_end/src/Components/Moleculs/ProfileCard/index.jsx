import React from 'react'

const ProfileCard = ({ title, children, ...rest }) => {
    return (
        <div className="w-full xl:w-4/12 px-4" >
            {/* Profile Data */}
            <div  {...rest}>
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700">
                                {title}
                            </h3>
                        </div>

                    </div>
                </div>

                {children}

            </div>
            {/* End Profile Data */}
        </div>
    )
}

export default ProfileCard
