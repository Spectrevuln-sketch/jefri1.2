import React, { useState, useEffect } from 'react'
import { LoginInput } from '../../Components'
import tw, { css } from "twin.macro";
import axios from 'axios'


const Form = tw.form`
flex-col
justify-between
items-start
my-3
`;





const ChangePasswordPage = () => {

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
                    <div _ngcontent-woq-c138 className="item-center font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-green-400 to-blue-600 h-20">Password Setting</div>
                </div>
            </mobile-appbar>
            <div _ngcontent-woq-c138 className="publish-form mobile-container">
                {/* General Page */}
                <Form>
                    <LoginInput style={{ margin: '10px 0' }} placeholder="Old Password" />
                    <LoginInput style={{ margin: '10px 0' }} placeholder="New Password" />
                    <LoginInput style={{ margin: '10px 0' }} placeholder="Re New Password" />

                    <button type="button" className="py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                        Save
                    </button>
                </Form>
                {/* End General Page */}
            </div>
        </app-setting-general>
    )
}

export default ChangePasswordPage
