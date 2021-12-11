import React, { useState } from 'react'
import NavBar from '../../components/Navbar/Navbar'
import '../DonationFeature/DonationFeature.css'
import homePic from '../../assets/home-pic.jpg'
import { Button, Input, InputGroup, InputGroupAddon, NavLink } from 'reactstrap'

const DonationFeature = () => {
    return (
        <div>
            <NavBar />
            <div id="top-page">
                <div className="container">
                    <img className="image1" alt="home-pic" src={homePic} />
                    <img id="donation-img" src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/20/000000/external-donation-medical-itim2101-lineal-color-itim2101-1.png" />
                    <h2 id="donation">Donation</h2>
                    <h1 className="earn-money">Earn money from who loved your content </h1>
                    <p id="top-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus enim, sed deleniti eligendi odio rerum voluptatum quod aut, dolorem illo voluptate. Adipisci sint sapiente aliquid tempora dolorem odio excepturi.
                    </p>
                </div>
                <div className="container" id="collect-affection">
                    <h1 className="text">Collect more affection</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, minus!
                    </p>
                    <img className="image" alt="home-pic" src={homePic} />
                </div>
                <div className="container" id="text-h1">
                    <h1 className="text">Membership for your loyal fans</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, minus!
                    </p>
                    <img className="image" alt="home-pic" src={homePic} />
                </div>
                <div className="container" id="text-h1">
                    <h1 className="text">Exclusive content only for your fans</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, minus!
                    </p>
                    <img className="image" alt="home-pic" src={homePic} />
                </div>
                <div className="container" id="text-h1">
                    <h1 className="text">Payment Method</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, minus!
                    </p>
                    <img className="image" alt="home-pic" src={homePic} />
                </div>
                <div className="container" id="text-h1">
                    <h1 className="text">All in one platform</h1>
                    <InputGroup id="input-group" className="mt-5 container">
                        <Input placeholder="sketch.com/coolcreatorname" />
                        <InputGroupAddon addonType="append"><Button color="danger" size="lg">Register</Button></InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="container" id="text-h1">
                    <NavLink href="/">
                        <Button className="mb-5" color="secondary" size="lg">Landing Page</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default DonationFeature