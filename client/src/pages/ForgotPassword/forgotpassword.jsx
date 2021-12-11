import axios from 'axios'
import React, { useState } from 'react'
import {
    Input, Button
} from 'reactstrap'
import '../ForgotPassword/forgotpassword.css'

const ForgotPassword = () => {

    var [email, setEmail] = useState("")

    const onSubmitEmail = (e) => {
        e.preventDefault()
        axios.post(
            '/api', {
                email : email
            }
        ).then(res => {

        })
    }

    return (
        <div className="parent-div">
            <div className="container">
                <h1>Write New Password</h1>
                <h6>Please make sure your email has been registered</h6>
            </div>
            <div className="container">
                <Input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
            </div>
            <div className="container" id="btn1">
                <Button onClick={onSubmitEmail} className="mt-4" id="send-btn">Send</Button>
            </div>
            <div className="container" id="btn1">
                <a href="/login" id="back-btn">Back</a>
            </div>
        </div>
    )
}

export default ForgotPassword