import React, { useState, useEffect } from 'react'
import { LoginInput } from '../../Components'
import tw, { css } from "twin.macro";
import axios from 'axios'
// icon
import { IconContext } from 'react-icons'
import { BsFillInfoCircleFill } from 'react-icons/bs'


const Form = tw.form`
flex-col
justify-between
items-start
my-3
`;

const NoteWrapper = tw.div`
flex
flex-row
bg-blue-400
text-blue-600
items-start
justify-evenly
bg-opacity-30
my-5
p-3
h-40
w-10/12
`;



const BankSettingPage = () => {

    /* ----------------------------- axios instance ----------------------------- */
    var api = axios.create({
        baseURL: process.env.REACT_APP_USER_API,
        withCredentials: true
    })
    /* -------------------------------- end axios ------------------------------- */
    // LOOP CHACKBOX



    useEffect(() => {
    }, [])







    return (
        <app-setting-general _nghost-woq-c138>
            <mobile-appbar _ngcontent-woq-c138>
                <div className="mobile-appbar">
                    <div _ngcontent-woq-c138 className="item-center font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-green-400 to-blue-600 h-20">Bank Account Setting</div>
                </div>
            </mobile-appbar>
            <div _ngcontent-woq-c138 className="publish-form mobile-container">
                {/* Bank Account Page */}
                <Form>
                    <LoginInput style={{ margin: '10px 0' }} placeholder="Bank" />
                    <LoginInput style={{ margin: '10px 0' }} placeholder="Card Holder Name" />
                    <LoginInput style={{ margin: '10px 0' }} placeholder="Card ID" />
                    <NoteWrapper>
                        <IconContext.Provider value={{ className: "flex item-center mx-4 text-blue-600", size: "20px" }}>
                            <span>
                                <BsFillInfoCircleFill />
                            </span>
                        </IconContext.Provider>
                        <ul>
                            <li>
                                Bantuan Pengisian
                            </li>
                            <li>
                                Rekening BCA membutuhkan panjang hingga 10 karakter
                            </li>
                            <li>
                                Bank lain tidak memiliki panjang maksimum
                            </li>
                            <li>
                                E-Wallet (GoPay, OVO, dsb) menggunakan Nomor telepon yang terdaftar (Contoh: 0812XXXXXX)
                            </li>
                        </ul>
                    </NoteWrapper>


                    <button type="button" className="py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                        Save
                    </button>
                </Form>
                {/* End Bank Account Page */}
            </div>
        </app-setting-general>
    )
}

export default BankSettingPage
