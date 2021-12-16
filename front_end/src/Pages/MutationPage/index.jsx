import React, { useState, useRef, Fragment } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import tw from 'twin.macro'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { Navbar, InputData, SelectInput } from '../../Components'
// icons
import { IconContext } from 'react-icons'
import { FcMoneyTransfer, FcBullish } from 'react-icons/fc'
import { motion } from 'framer-motion'


const Background = tw.div`
bg-blue-400
`;

const FormContainer = tw.div`
flex-row
items-center
`;

const Form = tw.form`
flex-col
justify-between
items-center
my-3
`;
const Wraper = tw.div`
flex-row
items-center
justify-around
my-3
`;

const ChildWrapper = tw.div`
flex
flex-row
justify-evenly
items-center
`;



const ButtonFloat = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1,
            duration: 2
        }
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }

    }
}

const ModalAnimate = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.3,
            duration: 0.5
        }
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }

    }
}


const MutationPage = () => {


    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
    const Modal = () => {
        return (

            <Transition show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto mt-10" initialFocus={cancelButtonRef} onClose={setOpen}

                >
                    <motion.div className=" flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-gray-300 bg-opacity-70"
                        variants={ModalAnimate}
                        initial="hidden"
                        animate="visible"
                    >

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 justify-center items-center">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex flex-col">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Widthdraw
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <FormContainer>
                                                <Form>
                                                    <InputData type="number" placeholder="Rp." className="bg-gray-200 text-black" label="Withdraw Amount" />
                                                    <SelectInput label="Payout" optionDefault="Pilih Payout" className="w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-400 focus:text-gray-400" name="animals">

                                                    </SelectInput>
                                                    {/* Note Box */}
                                                    <div className='my-2 flex flex-row  justify-start items-start font-semibold text-opacity-60 bg-gray-300 border-2 border-gray-500 text-black mt-4 rounded-md bg-opacity-50 text-sm'>
                                                        <InformationCircleIcon className="text-blue-300 h-6 w-6 mr-2" aria-hidden="true" />
                                                        <p>Manual Payment Memerlukan Proses Sampai Dengan 3 Hari</p>
                                                    </div>
                                                    {/* End Note Box */}
                                                    <SelectInput label="Bank Account" optionDefault="Pilih Bank" className="w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-400 focus:text-gray-400" name="animals">

                                                    </SelectInput>
                                                    {/* Note Box */}
                                                    <div className='my-2 flex flex-row justify-start items-start font-semibold text-opacity-60 bg-gray-300 border-2 border-gray-500 text-black mt-4 rounded-md bg-opacity-50 text-sm'>
                                                        <InformationCircleIcon className="text-blue-300 h-6 w-6 mr-2" aria-hidden="true" />
                                                        <p>Buat Rekening Terlebi Dahulu Sebelum Withdraw</p>
                                                    </div>
                                                    {/* End Note Box */}
                                                    <InputData type="text" placeholder="Password" className="bg-gray-200 text-black" label="Password" />
                                                </Form>
                                            </FormContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setOpen(false)}
                                >
                                    Simpan
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setOpen(false)}
                                    ref={cancelButtonRef}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </Dialog>
            </Transition>
        )
    }

    return (
        <>
            <Navbar />
            <div _ngcontent-bis-c206 id="template" className="pb-12">

                <Background _ngcontent-bis-c206 className="bg-red-floating" style={{ zIndex: -2 }} />
                <div _ngcontent-bis-c206 className="flex justify-around flex-row items-center mt-12">
                    <button onClick={() => setOpen(!open)} className="flex flex-col justify-center items-center hover:bg-blue-500 bg-blue-400 p-4 rounded-md text-white text-lg mb-2">
                        Withdraw Balance
                    </button>
                    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                        <div className="flex justify-center -mt-16">
                            {/* Icons Button */}
                            <NavLink to="withdraw"
                                className={({ isActive }) => isActive ? "mr-2 border-2 border-red-400 rounded-full w-auto" : "mr-2"}
                            >
                                <IconContext.Provider value={{ className: 'w-20 h-20 rounded-full border-2 bg-white shadow-md cursor-pointer hover:shadow-md', size: "10px" }}>
                                    <motion.span
                                        variants={ButtonFloat}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                    >
                                        <FcMoneyTransfer />
                                    </motion.span>
                                </IconContext.Provider>
                            </NavLink>
                            {/* End Icons Button */}
                            {/* Icons Button */}
                            <NavLink to="mutation"
                                className={({ isActive }) => isActive ? "mr-2 border-2 border-red-400 rounded-full w-auto" : "mr-2"}
                            >
                                <IconContext.Provider value={{ className: 'w-20 h-20 rounded-full border-2 bg-white shadow-md cursor-pointer hover:shadow-md', size: "10px" }}>
                                    <motion.span
                                        variants={ButtonFloat}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                    >
                                        <FcBullish />
                                    </motion.span>
                                </IconContext.Provider>
                            </NavLink>
                            {/* End Icons Button */}

                        </div>


                        <Outlet />
                    </div>
                </div>
            </div>
            <Modal />
        </>
    )
}

export default MutationPage
