import React, { useState } from 'react'
import NavBar from '../../components/Navbar/Navbar'
import '../CommissionFeature/CommissionFeature.css'
import homePic from '../../assets/home-pic.jpg'
import { Button, Input, InputGroup, InputGroupAddon, NavLink } from 'reactstrap'

const CommissionFeature = () => {
    return (
        <div>
            <NavBar />
            <div id="top-page">
                <div className="container">
                    <img className="image1" alt="home-pic" src={homePic} />
                    <img id="commission-img" src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/20/000000/external-commission-medical-itim2101-lineal-color-itim2101-1.png" />
                    <h2 id="commission">Donation</h2>
                    <h1 className="receive-commission">Receive commission safely and easily </h1>
                    <p id="top-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus enim, sed deleniti eligendi odio rerum voluptatum quod aut, dolorem illo voluptate. Adipisci sint sapiente aliquid tempora dolorem odio excepturi.
                    </p>
                </div>
                <div className="container" id="escrow-system">
                    <h1 className="text">Why must Escrow system</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, minus!
                    </p>
                    <img className="image" alt="home-pic" src={homePic} />
                </div>
                <div className="container" id="text-h1">
                    <h1 className="text">Provide commission package</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, minus!
                    </p>
                    <img className="image" alt="home-pic" src={homePic} />
                </div>
                <div className="container" id="text-h1">
                    <h1 className="text">Custom Commission</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, minus!
                    </p>
                    <img className="image" alt="home-pic" src={homePic} />
                </div>
                <div className="container" id="text-h1">
                    <h1 className="text">Set commission with large amount</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, minus!
                    </p>
                    <img className="image" alt="home-pic" src={homePic} />
                </div>
                <div className="container" id="text-h1">
                    <h1 className="text">International Support</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt ex magni maxime nemo assumenda, culpa, expedita sapiente ab ratione adipisci dignissimos laborum, fuga minima.
                    </p>
                    <div className="container" id="check">
                        <img id="checklist" src="https://img.icons8.com/color-glass/25/000000/checked-checkbox.png" />
                        <h6 id="checklist-text">Language Selection</h6>
                        <img id="checklist" src="https://img.icons8.com/color-glass/25/000000/checked-checkbox.png" />
                        <h6 id="checklist-text">Local Price & International</h6>
                    </div>
                </div>
                <div className="container" id="text-h1">
                    <h1 className="text">Payment method</h1>
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

export default CommissionFeature