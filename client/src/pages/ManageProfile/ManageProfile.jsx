import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '../../components/Navbar/Navbar'
import '../ManageProfile/ManageProfile.css'
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Button } from 'reactstrap';
import image1 from '../../assets/home-pic.jpg'
import { Link } from 'react-router-dom'
import Onboarding from '../../components/Onboarding/Onboarding';
import SetProfile from '../../components/SetProfile/SetProfile'
import Tip from '../../components/Tip/Tip'

const ManageProfile = () => {
    var [username, setUsername] = useState("")
    var [onboarding, setOnboarding] = useState()
    var [editProfile, setEditProfile] = useState()
    var [tip, setTip] = useState()

    const getUsername = (e) => {
        e.preventDefault()
        axios.get(
            'api', {
            params: {
                username: username
            }
        }
        ).then(res => {

        })
    }

    const onboardingView = () => {
        setOnboarding(<Onboarding />)
    }

    const setProfileView = () => {
        setEditProfile(<SetProfile/>)
    }

    // const Tip = () => {
    //     setTip(<Tip/>)
    // }

    return (
        <div>
            <NavBar />
            <div className="row">
                <div className="col-10">
                    {/* <Onboarding/> */}
                    {/* <SetProfile/> */}
                    {/* <Tip/> */}
                    <ProSidebar id="sidebar-full">
                        <SidebarHeader id="sidebar">
                            <h2 style={{ textAlign: "center" }}>Manage S k e t c h</h2>
                            <Link className="mt-5" to="/profile">
                                <Button id="btn-profile">
                                    <div className="row">
                                        <img className="col-1" id="user-pic" src={image1} />
                                        <div className="col-6">
                                            <h4>Hi, {username}</h4>
                                            <h6 >See Profile</h6>
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        </SidebarHeader>
                        <SidebarContent id="sidebar">
                            <Button onClick={onboardingView} id="sidebar-btn">
                                <img id="sidebar-img" src="https://img.icons8.com/color-glass/35/000000/home.png" />
                                <h5 id="sidebar-text">Onboarding</h5>
                            </Button>
                            <Button id="sidebar-btn">
                                <img id="sidebar-img" src="https://img.icons8.com/office/35/000000/test-account.png" />
                                <h5 id="sidebar-text">Set Profile</h5>
                            </Button>
                            <Button id="sidebar-btn">
                                <img id="sidebar-img" src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/35/000000/external-donation-medical-itim2101-lineal-color-itim2101-1.png" />
                                <h5 id="sidebar-text">Tip</h5>
                            </Button>
                            <Button id="sidebar-btn">
                                <img id="sidebar-img" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/35/000000/external-commission-stock-market-wanicon-lineal-color-wanicon.png" />
                                <h5 id="sidebar-text">Commission</h5>
                            </Button>
                            <Button id="sidebar-btn">
                                <img id="sidebar-img" src="https://img.icons8.com/cotton/35/000000/publication--v1.png" />
                                <h5 id="sidebar-text">Publication</h5>
                            </Button>
                            <hr></hr>
                            <Button id="sidebar-btn">
                                <img id="sidebar-img" src="https://img.icons8.com/color/35/000000/help--v1.png" />
                                <h5 id="sidebar-text">Help</h5>
                            </Button>
                        </SidebarContent>
                    </ProSidebar>;
                </div>
                {/* <div className="col-10">
                    {onboarding}
                </div> */}
            </div>
        </div>
    )
}

export default ManageProfile
