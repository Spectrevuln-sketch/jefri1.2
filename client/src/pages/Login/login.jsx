import React, { useState } from 'react'
import './login.css'
import {
    Form, FormGroup, Input, Label,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, NavLink
} from 'reactstrap'
import homePic from '../../assets/home-pic.jpg'
import axios from 'axios'

const Login = () => {

    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")

    const onSubmitLogin = (e) => {
        e.preventDefault()
        axios.get(
            '/api-login', {
                params: {
                    email : email,
                    password : password
                }
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
                <Card id="card-login" className="container mb-5">
                    <img className="image1 container" alt="home-pic" src={homePic} />
                    <h1 className="login-sketch">Login to Sketch</h1>
                    <h6 className="login-sketch">Boost your content with Sketch !</h6>
                    <FormGroup className="container">
                        <Label>Username or Email</Label>
                        <Input className="input-login" type="email" onChange={e => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="container">
                        <Label>Password</Label>
                        <Input className="input-login" type="password" onChange={e => setPassword(e.target.value)} />
                    </FormGroup>
                    <a className="my-3 container" id="forgot-password" href="/forgotpassword">Forgot password ?</a>
                    <div id="login-btn" className="container my-3">
                        <Button onClick={onSubmitLogin} id="login-text" >Login Now !</Button>
                        <h6 className="my-3">O R</h6>
                        <Button id="google-text" >Login with Google</Button>
                        <span className="mt-4">
                            <h6>Don't have account ? <a href="/register" id="register-now"> Register now !</a></h6>
                        </span>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Login