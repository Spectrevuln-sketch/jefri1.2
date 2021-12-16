import React, { useState } from 'react'


const MutationContent = () => {



    return (
        <>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">Mutation</h2>

            </div>
            <div className="flex flex-col justify-center  mt-4">
                {/* table here */}

                <div className="flex flex-row justify-between">
                    <h6 className="font-bold text-sm text-gray-400">Balance</h6>
                    <div className='bg-indigo-500 rounded-md w-max px-2 flex flex-row justify-center items-center'>
                        <span className="text-white">0</span>
                    </div>
                </div>
                <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>

            </div>

        </>
    )
}

export default MutationContent
