import React, { useState, useEffect } from 'react'
import '../SetupCreator/setupcreator.css'
import {
    Form, FormGroup, Input, Label,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, NavLink,
    DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown, ButtonGroup
} from 'reactstrap'
import image1 from '../../assets/home-pic.jpg'

const SetupCreator = () => {

    const [acc, setAcc] = useState("")
    const [tab, setTab] = useState("")

    return (
        <div>
            <div className="container">
                <h1 id="center">Welcome to Sketch</h1>
                <h6 id="center">Please fill the form below</h6>
                <Card id="card-setup" >
                    <div className="container">
                        <CardTitle id="title">Choose your account type</CardTitle>
                        <div>
                            <Input onChange={e => setAcc(e.target.value)} id="radio-btn" type="radio" />
                            <Label id="label" className="mx-3" check>Art lover</Label>
                        </div>
                        <div>
                            <Input onChange={e => setAcc(e.target.value)} id="radio-btn" type="radio" />
                            <Label id="label" className="mx-3">Creator</Label>
                        </div>
                        <div className="mt-3 mb-5">
                            {/* <Input placeholder="Choose your creator's category" type="select">
                                <option id="option" value="" disabled selected>Choose category</option>
                                <option id="option" value="">Animator</option>
                                <option id="option" value="">Lorem, ipsum dolor.</option>
                                <option id="option" value="">Lorem, ipsum dolor.</option>
                                <option id="option" value="">Lorem, ipsum dolor.</option>
                                <option id="option" value="">Lorem, ipsum dolor.</option>
                                <option id="option" value="">Lorem, ipsum dolor.</option>
                            </Input> */}
                            <select id="select">
                                <option id="option" value="" disabled selected>Choose category</option>
                                <option id="option" value="">Animator</option>
                                <option id="option" value="">Lorem, ipsum dolor.</option>
                                <option id="option" value="">Lorem, ipsum dolor.</option>
                                <option id="option" value="">Lorem, ipsum dolor.</option>
                                <option id="option" value="">Lorem, ipsum dolor.</option>
                                <option id="option" value="">Lorem, ipsum dolor.</option>
                            </select>
                        </div>
                        <CardTitle id="title">Choose publication's layout for your profile</CardTitle>
                        <div className="mb-5">
                            <Button className="mr-5" outline color="secondary">
                                <img id="layout-pic" src={image1} />
                            </Button>
                            <Button outline color="secondary">
                                <img id="layout-pic" src={image1} />
                            </Button>
                        </div>
                        <CardTitle id="title">Which tab is shown to your first-time profile visitor?</CardTitle>
                        <div>
                            <Input onChange={e => setTab(e.target.value)} id="radio-btn" type="radio" />
                            <Label id="label" className="mx-3" check>Publication</Label>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quia!</p>
                        </div>
                        <div>
                            <Input onChange={e => setTab(e.target.value)} id="radio-btn" type="radio" />
                            <Label id="label" className="mx-3">Supporter</Label>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quia!</p>
                        </div>
                        <div className="mt-3 mb-3">
                            <Input placeholder="New Password" type="text" />
                        </div>
                        <Button id="save-btn" className="mb-3 col-6 mx-auto" color="primary">Save</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default SetupCreator
