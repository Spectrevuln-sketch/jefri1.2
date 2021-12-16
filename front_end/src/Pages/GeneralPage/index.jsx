import React, { useState, useEffect } from 'react'
import { LoginInput, CheckBoxGenders } from '../../Components'
import tw, { css } from "twin.macro";
import axios from 'axios'


const Form = tw.form`
flex-col
justify-between
items-start
my-3
`;





const GeneralPage = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    // GET DATA
    const [gender, setGender] = useState([])

    const [gender_id, setGenderID] = useState()

    /* ----------------------------- axios instance ----------------------------- */
    var api = axios.create({
        baseURL: process.env.REACT_APP_USER_API,
        withCredentials: true
    })
    /* -------------------------------- end axios ------------------------------- */
    // LOOP CHACKBOX



    useEffect(() => {
        GetGenderData()
    }, [])


    const GetGenderData = async () => {
        await api.get('/get-genders')
            .then(res => {
                if (res.status === 200) {
                    setGender(res.data)
                }
            }).catch(err => {
                console.log(err)
            })
    }




    return (
        <app-setting-general _nghost-woq-c138>
            <mobile-appbar _ngcontent-woq-c138>
                <div className="mobile-appbar">
                    <div _ngcontent-woq-c138 className="item-center font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-green-400 to-blue-600 h-20">General Setting</div>
                </div>
            </mobile-appbar>
            <div _ngcontent-woq-c138 className="publish-form mobile-container">
                {/* General Page */}
                <Form>
                    <LoginInput style={{ margin: '5px 0' }} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <LoginInput style={{ margin: '5px 0' }} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />

                    <div _ngcontent-ynj-c138 className="mb-4 ng-star-inserted">
                        <label _ngcontent-ynj-c138 htmlFor className="block font-bold mb-2">Gender</label>
                        {/* CheckBox Gender */}
                        <CheckBoxGenders onChange={(e) => setGenderID(e.target.value)} data={gender} />

                        {/* End CheckBox Gender */}
                    </div>
                    <button type="button" className="py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                        Free space
                    </button>
                </Form>
                {/* End General Page */}
            </div>
        </app-setting-general>
    )
}

export default GeneralPage
