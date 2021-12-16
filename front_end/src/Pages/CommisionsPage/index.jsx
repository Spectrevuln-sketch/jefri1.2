import React from 'react'
import tw from "twin.macro";
import { useNavigate } from 'react-router-dom'
import { SearchIcon } from '@heroicons/react/outline'

// components
import { Navbar } from '../../Components'


const Background = tw.div`
bg-blue-400
`;


const CommisionPage = () => {
    return (
        <>
            <Navbar />
            <div _ngcontent-bis-c206 id="template" className="pb-12">
                <Background _ngcontent-bis-c206 className="bg-red-floating" style={{ zIndex: -2 }} />
                <div className='flex flex-row justify-between items-center mx-24'>
                    <div className='flex flex-col justify-center items-center mt-16'>
                        <h1 className='text-white font-extrabold font-mono text-4xl'>Freelance Kreatif Untuk Kebutuhan Kustom</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-16'>
                        <div class="flex relative ">
                            <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <SearchIcon className="text-black flex justify-center items-center h-3 w-3" />
                            </span>
                            <div className="flex flex-row justify-center items-center bg-white p-2 rounded-r-md">
                                <input type="text" id="email-with-icon" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Search" />
                                <button className='bg-blue-400 text-white p-2 rounded-md ml-2'>Cari</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Login */}

                {/* End Form Login */}
            </div>

        </>
    )
}

export default CommisionPage
