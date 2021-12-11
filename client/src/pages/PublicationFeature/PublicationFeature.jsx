import React, { useState } from 'react'
import NavBar from '../../components/Navbar/Navbar'
import '../PublicationFeature/PublicationFeature.css'
import homePic from '../../assets/home-pic.jpg'
import { Button, Input, InputGroup, InputGroupAddon, NavLink } from 'reactstrap'

const PublicationFeature = () => {
    return (
        <div>
            <NavBar />
            <div id="top-page">
                <div className="container">
                    <img className="image1" alt="home-pic" src={homePic} />
                    <img id="publication-img" src="https://img.icons8.com/cotton/20/000000/publication--v1.png" />
                    <h2 id="publication">Publication</h2>
                    <h1 className="publish">Publish your free or paid content</h1>
                    <p id="top-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus enim, sed deleniti eligendi odio rerum voluptatum quod aut, dolorem illo voluptate. Adipisci sint sapiente aliquid tempora dolorem odio excepturi.
                    </p>
                </div>
                <div className="container" id="publish-content">
                    <h1 className="text">Publish your unique content</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, minus!
                    </p>
                    <img className="image" alt="home-pic" src={homePic} />
                </div>
                <div className="container" id="text-h1">
                    <h1 className="text">Custom profile view</h1>
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
                <div id="bottom-page">
                    <div className="container">
                        <img id="bottom-img" className="image1" alt="home-pic" src={homePic} />
                        <h1 className="addfiles">Add downloaded files in your publication</h1>
                        <p id="bottom-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus enim, sed deleniti eligendi odio rerum voluptatum quod aut, dolorem illo voluptate. Adipisci sint sapiente aliquid tempora dolorem odio excepturi.
                        </p>
                    </div>
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

export default PublicationFeature