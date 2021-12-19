import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    /* ----------------------------- AXIOS INSTANCE ----------------------------- */
    var api = axios.create({
        baseURL: process.env.REACT_APP_USER_API,
        withCredentials: true,
    })
    /* ----------------------------- End AXIOS INSTANCE ----------------------------- */


    const onSubmit = () => {
        console.log(username)
        api.post('/auth-login', {
            auth_user: username,
            password
        }).then(res => {
            if (res.status === 200) {
                Swal.fire(
                    'Login Success',
                    `${res.data.message}`,
                    'success'
                )
                navigate(`/dashboard/onboard`)
            }
        }).catch(err => {
            if (err.response !== undefined) {
                Swal.fire(
                    'Gagal Login !',
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
        <>
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
                                                        name="email"
                                                        id="email"
                                                        className="form-control"
                                                        placeholder="username"
                                                        onChange={(e) => setUsername(e.target.value)}
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
                                                    <button
                                                        type="button"
                                                        id="send_message"
                                                        defaultValue="Submit"
                                                        className="btn btn-main btn-fullwidth color-2 text-indigo-600 hover:text-white"
                                                        onClick={onSubmit}
                                                    >Submit</button>
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
        </>
    )
}

export default LoginPage
