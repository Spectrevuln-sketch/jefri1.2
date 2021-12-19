import React, { useState } from 'react'
import axios from 'axios'
import {
    NavLink, Button, Card, CardTitle, ButtonGroup,
    CardImg
} from 'reactstrap'
import NavBar from '../../components/Navbar/Navbar'
import '../Creator/Creator.css'
import homePic from '../../assets/home-pic.jpg'

const Creator = () => {
    var [popular, setPopular] = useState([])
    var [newest, setNewest] = useState([])

    const getDataPopular = (e) => {
        e.preventDefault()
        axios.get(
            'api', {
                params: {
                    popular: popular
                }
            }
        ).then(res => {
            
        })
    }

    const getDataNewest = (e) => {
        e.preventDefault()
        axios.get(
            'api', {
                params: {
                    newest: newest
                }
            }
        ).then(res => {

        })
    }

    const renderPopular = () => {
        return (
            <Button id="card-btn">
                <Card id="map-creator">
                    <CardTitle>
                        <div className="m-lg-3 my-3" >
                            <img src={homePic} alt="user-pic" id="user-pic" />
                            <div className="row" id="creator-desc">
                                <h3>Creator's name</h3>
                                <h5 id="role">Role</h5>
                            </div>
                        </div>
                    </CardTitle>
                    <CardTitle className="mx-3" id="follow">
                        <Button size="lg" id="btn-follow" color="danger">Follow</Button>
                    </CardTitle>
                </Card>
            </Button>
        )
    }

    const renderNewest = () => {
        return (
            <Button id="card-btn">
                <Card id="map-creator">
                    <CardTitle>
                        <div className="m-lg-3 my-3" >
                            <img src={homePic} alt="user-pic" id="user-pic" />
                            <div className="row" id="creator-desc">
                                <h3>Creator's name</h3>
                                <h5 id="role">Role</h5>
                            </div>
                        </div>
                    </CardTitle>
                    <CardTitle className="mx-3" id="follow">
                        <Button size="lg" id="btn-follow" color="danger">Follow</Button>
                    </CardTitle>
                </Card>
            </Button>
        )
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <Card id="creator-card">
                    <h1 className="mt-3 mx-3">Creator</h1>
                    <hr></hr>
                    <div className="my-3">
                        <Button id="btn-creator" className="mx-3">Popular</Button>
                        <Button id="btn-creator" className="mx-3">Newest</Button>
                    </div>
                </Card>
            </div>
            <div className="container mt-5">
                <Button id="card-btn">
                    <Card id="map-creator">
                        <CardTitle>
                            <div className="m-lg-3 my-3" >
                                <img src={homePic} alt="user-pic" id="user-pic" />
                                <div className="row" id="creator-desc">
                                    <h3>Creator's name</h3>
                                    <h5 id="role">Role</h5>
                                </div>
                            </div>
                        </CardTitle>
                        <CardTitle className="mx-3" id="follow">
                            <Button size="lg" id="btn-follow" color="danger">Follow</Button>
                        </CardTitle>
                    </Card>
                </Button>
            </div>
        </div>
    )
}

export default Creator