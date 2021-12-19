import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState()
    const navigate = useNavigate()

    /* ----------------------------- AXIOS INSTANCE ----------------------------- */
    var axiosApi = axios.create({
        baseURL: process.env.REACT_APP_USER_API,
        withCredentials: true,
    })
    /* ----------------------------- End AXIOS INSTANCE ----------------------------- */


    const OnSubmit = async (e) => {

        e.preventDefault()
        console.log(role)
        await axiosApi.post('/register-user', {
            username,
            password_user: password,
            email,
            role
        }).then(res => {
            if (res.status === 200) {
                Swal.fire(
                    'Register',
                    `${res.data.message}`,
                    'success'
                )
                navigate(`/login`)
            }
        }).catch(err => {
            if (err.response !== undefined) {

                Swal.fire(
                    'Gagal Menyimpan !',
                    `${err.response.data.message}`,
                    'error'
                )
                if (err.response.status === 404) {
                    const Err = err.response.data.errMsg
                    Err.map(errData => {

                        Swal.fire(
                            'Gagal Login !',
                            `${errData.msg}`,
                            'error'
                        )
                    })
                }
            }
        })

    }



    return (
        <div className="no-bottom no-top" id="content">
            <div id="top" />
            <section
                className="full-height relative no-top no-bottom vertical-center"
                data-bgimage="url(assets/images/background/subheader-dark.jpg) top"
                data-stellar-background-ratio=".5"
            >
                <div className="overlay-gradient t50">
                    <div className="center-y relative">
                        <div className="container">
                            <div className="row align-items-center">
                                <div
                                    className="col-lg-5 wow fadeInRight"
                                    data-wow-delay=".5s"
                                >
                                    <div className="spacer-10" />
                                    <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-300 to-red-600'>Create, sell or collect digital items.</h1>
                                    <p className="lead text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        ut enim.
                                    </p>
                                </div>
                                <div
                                    className="col-lg-4 offset-lg-2 wow fadeIn"
                                    data-wow-delay=".5s"
                                >
                                    <div className="box-rounded padding40" data-bgcolor="#21273e">
                                        <h3 className="mb10">Sign In</h3>
                                        <p>
                                            Login using an existing account or create a new account{" "}
                                            <Link className='text-indigo-500 text-md font-semibold underline' to="/register">
                                                HERE
                                                <span />
                                            </Link>
                                            .
                                        </p>
                                        <form
                                            name="contactForm"
                                            id="contact_form"
                                            className="form-border"
                                            method="post"
                                        >
                                            <div className="field-set">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    className="form-control"
                                                    placeholder="username"
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                            <div className="field-set">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="field-set">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="form-control"
                                                    placeholder="password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="field-set">

                                                <div class="flex items-center gap-8">
                                                    <label class="inline-flex items-center">
                                                        <input type="radio" name="role" class="h-5 w-5 text-red-600"
                                                            onChange={(e) => setRole("Penikmat Karya")} />
                                                        <span class="ml-2 text-gray-700">
                                                            Explorer
                                                        </span>
                                                    </label>
                                                    <label class="inline-flex items-center">
                                                        <input type="radio" name="role" class="h-5 w-5 text-red-600" onChange={(e) => setRole("Creator")} />
                                                        <span class="ml-2 text-gray-700">
                                                            Creator
                                                        </span>
                                                    </label>
                                                </div>

                                            </div>
                                            <div className="field-set">
                                                <button className='flex felx-row justify-center items-center bg-transparent hover:shadow-lg hover:bg-indigo-400  hover:text-white' type="submit" onClick={OnSubmit}> Submit</button>
                                            </div>
                                            <div className="clearfix" />
                                            <div className="spacer-single" />
                                            {/* social icons */}
                                            {/* <ul className="list s3">
                                            <li>Login with:</li>
                                            <li>
                                                <a href="#">Facebook</a>
                                            </li>
                                            <li>
                                                <a href="#">Google</a>
                                            </li>
                                        </ul> */}
                                            {/* social icons close */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RegisterPage
