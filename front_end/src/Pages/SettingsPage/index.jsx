import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, SideTabLink, LinkNav } from '../../Components'
// icon
import { IconContext } from 'react-icons'
import { FaUserAlt, FaKey } from 'react-icons/fa'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'


const SettingsPage = () => {
    return (
        <>
            <Navbar />
            <div _ngcontent-woq-c91 id="content" className>

                <div _ngcontent-woq-c91>
                    <div _ngcontent-woq-c91 style={{ minHeight: '90vh' }}>
                        <router-outlet _ngcontent-woq-c91 />
                        <app-setting-template _nghost-woq-c116>
                            <div _ngcontent-woq-c116 className="relative bg-blue-400 pb-32 overflow-hidden hidden lg:block">
                                <header _ngcontent-woq-c116 className="relative py-10">
                                    <div _ngcontent-woq-c116 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <h1 _ngcontent-woq-c116 className="text-3xl font-bold text-white"> Settings </h1>
                                    </div>
                                </header>
                            </div>
                            <main _ngcontent-woq-c116 className="relative lg:-mt-36">
                                <div _ngcontent-woq-c116 className="max-w-screen-xl mx-auto pb-6 px-0 sm:px-6 lg:pb-16 lg:px-8">
                                    <div _ngcontent-woq-c116 className="bg-white rounded-lg lg:shadow overflow-hidden" style={{ minHeight: '600px' }}>
                                        <div _ngcontent-woq-c116 className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                                            {/* SideBar Tab */}
                                            <SideTabLink>

                                                <LinkNav label="General" uri="general">
                                                    <IconContext.Provider value={{ className: "flex item-center mx-2", size: "15px" }}>
                                                        <span>
                                                            <FaUserAlt />
                                                        </span>
                                                    </IconContext.Provider>
                                                </LinkNav>
                                                <LinkNav label="Change Password" uri="password">
                                                    <IconContext.Provider value={{ className: "flex item-center mx-2", size: "15px" }}>
                                                        <span>
                                                            <FaKey />
                                                        </span>
                                                    </IconContext.Provider>
                                                </LinkNav>
                                                <LinkNav label="Bank Account Option" uri="bank-setting">
                                                    <IconContext.Provider value={{ className: "flex item-center mx-2", size: "15px" }}>
                                                        <span>
                                                            <BsFillCreditCard2FrontFill />
                                                        </span>
                                                    </IconContext.Provider>
                                                </LinkNav>

                                            </SideTabLink>
                                            {/* End SideBar Tab */}

                                            <div _ngcontent-woq-c116 className="divide-y divide-gray-200 lg:col-span-9">
                                                <div _ngcontent-woq-c116 className="lg:py-6 px-0 md:px-4 sm:p-6 lg:pb-8">
                                                    {/* Content Here */}
                                                    <Outlet />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </app-setting-template> {/**/}
                    </div> {/**/}
                </div>
            </div>
        </>
    )
}

export default SettingsPage
