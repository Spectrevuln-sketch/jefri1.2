import React, { useState } from 'react'
import '../UserProfile/UserProfile.css'
import NavBar from '../../components/Navbar/Navbar'
import axios from 'axios'
import {
    Card, CardImg, CardTitle,
    Button
} from 'reactstrap'
import image1 from '../../assets/home-pic.jpg'
import { Link } from 'react-router-dom'

const UserProfile = () => {
    var [username, setUsername] = useState("")
    var [followers, setFollowers] = useState(0)
    var [following, setFollowing] = useState(0)
    var [role, setRole] = useState("")
    var [publication, setPubliaction] = useState(0)
    var [supporter, setSupporter] = useState(0)
    var [collection, setCollection] = useState(0)

    const getUsername = () => {
        axios.get(
            'api', {
            params: {
                username: username,
                followers: followers,
                following: following,
                role: role
            }
        }
        ).then(res => {

        })
    }

    return (
        <div>
            <NavBar />
            <div className="container mt-5">
                <Card className="container" id="profile-card">
                    <CardImg className="container mt-5" id="profile-img" src={image1} />
                    <CardTitle className="mt-5" id="username">Username{username}</CardTitle>
                    <CardTitle id="role">Role{role}</CardTitle>
                    <hr></hr>
                    <div id="creator-support" className="row">
                        <h6 className="col-1" id="foll">{followers} Pengikut</h6>
                        <h6 className="col-1" id="foll">{following} Diikuti</h6>
                        <div className="col-2 container">
                            <Button id="modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Support Creator
                            </Button>
                        </div>
                        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <Link to="/">
                                            <Button id="commision-modal-btn">
                                                <span>
                                                    <img className="feature-img" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/20/000000/external-commission-stock-market-wanicon-lineal-color-wanicon.png" />
                                                    <h6>Commission</h6>
                                                </span>
                                            </Button>
                                        </Link>
                                        <Link to="/">
                                            <Button id="commision-modal-btn">
                                                <span>
                                                    <img className="feature-img" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/20/000000/external-commission-stock-market-wanicon-lineal-color-wanicon.png" />
                                                    <h6>Commission</h6>
                                                </span>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <Button color="info">Change Profile</Button>
                        </div>
                        <div className="col-1">
                            <Button id="btn-chat" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://img.icons8.com/ios-filled/30/000000/ellipsis.png" />
                            </Button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <div id="about-creator" className="row container">
                        <Card id="goal-card">
                            <div className="row">
                                <CardTitle id="set-goal" className="col-6">Set Goal</CardTitle>
                                <Button id="add-goal-btn" className="col-1">Add</Button>
                            </div>
                        </Card>
                        <div id="about" className="container">
                            <h1>About</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, repudiandae?
                            </p>
                        </div>
                    </div>
                    <div id="btn-three" className="col-6">
                        <Button id="btn">Publication ({publication})</Button>
                        <Button id="btn">Supporter ({supporter})</Button>
                        <Button id="btn">Collection ({collection})</Button>
                    </div>
                    <div id="add-publication" className="row container">
                        <Card id="publication-card">
                            <div className="row">
                                <CardTitle id="add-new-publication" className="col-6">Add New Publication</CardTitle>
                                <Button id="add-publication-btn" className="col-1">Add</Button>
                            </div>
                        </Card>
                    </div>
                </Card>
                <div id="landing-page" className="container mt-5">
                    <a href="/">
                        <Button size="lg" id="landing-page-btn">Landing Page</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UserProfile