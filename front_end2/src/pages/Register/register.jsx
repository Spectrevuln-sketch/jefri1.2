import React, { useState } from 'react'
import './register.css'
import {
    Form, FormGroup, Input, Label,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, NavLink
} from 'reactstrap'
import axios from 'axios'

const Register = () => {   

    var [username, setUsername] = useState("")
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")

    const onSubmitRegister = (e) => {
        e.preventDefault()
        axios.post(
            '/  api-register', {
                username : username,
                email : email,
                password : password
            }
        ).then(res => {

        })
    }

    return (
        <div>
            <h1>
                <NavLink id="sketch" href="/">S k e t c h</NavLink>
            </h1>
            <div className="container">
                <Card id="card-register" className="container mb-5">
                    <h1 className="register-sketch">Regist here !</h1>
                    <h6 className="register-sketch">Boost your content with Sketch !</h6>
                    <FormGroup className="container">
                        <Label>Username</Label>
                        <Input onChange={e => setUsername(e.target.value)} className="input-register" type="email" />
                    </FormGroup>
                    <FormGroup className="container">
                        <Label>Email</Label>
                        <Input onChange={e => setEmail(e.target.value)} className="input-register" type="text" />
                    </FormGroup>
                    <FormGroup className="container">
                        <Label>Password</Label>
                        <Input onChange={e => setPassword(e.target.value)} className="input-register" type="password" />
                    </FormGroup>
                    <div id="register-btn" className="container my-3">
                        <Button onClick={onSubmitRegister} id="register-text" >Register Now</Button>
                        <span className="mt-4">
                            <h6>Already have account ? <a href="/login" id="login-now"> Login now !</a></h6>
                        </span>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Register