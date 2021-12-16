import React from 'react'
import { Link } from 'react-router-dom'

const DashboardFooter = () => {

    const GoToProto = () => {
        window.open("https://porto.storymadeid.my.id", "_blank")
    }


    return (
        <footer className="block py-4">
            <div className="container mx-auto px-4">
                <hr className="mb-4 border-b-1 border-blueGray-200" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4">
                        <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                            Copyright © Storymadeid
                        </div>
                    </div>
                    <div className="w-full md:w-8/12 px-4">
                        <ul className="flex flex-wrap list-none md:justify-end justify-center">
                            <li>
                                <span onClick={GoToProto} to="https://porto.storymadeid.my.id" className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3 hover:text-blue-400 cursor-pointer">
                                    Developers Profile
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default DashboardFooter
