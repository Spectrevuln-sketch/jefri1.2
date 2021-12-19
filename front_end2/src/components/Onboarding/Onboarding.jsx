import React, { useState } from 'react'
import {
    Button, ButtonGroup, Card, CardTitle,
    DropdownToggle, Dropdown, DropdownMenu,
    DropdownItem
} from 'reactstrap'
import '../Onboarding/Onboarding.css'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Onboarding = () => {
    var [days, setDays] = useState(0)
    var [seen, setSeen] = useState(0)
    const [dropdownOpenBP, setDropdownOpenBP] = useState(false);
    const [dropdownOpenSP, setDropdownOpenSP] = useState(false);
    var [months, setMonths] = useState(0)
    var [income, setIncome] = useState(0)

    const toggleBP = () => setDropdownOpenBP(prevState => !prevState);
    const toggleSP = () => setDropdownOpenSP(prevState => !prevState);

    const getSeenProfile = (e) => {
        e.preventDefault();
        axios.get(
            'api', {
                params: {
                    days: days,
                    seen: seen
                }
            }
        ).then(res => {

        })
    }

    const getIncome = (e) => {
        e.preventDefault();
        axios.get(
            'api', {
                params: {
                    months: months,
                    income: income
                }
            }
        ).then(res => {

        })
    }

    return (
        <div className="row">
            <div className="container col-12">
                <Card id="card" className="container">
                    <CardTitle>
                        <h4>Seen Profile</h4>
                        <h6>Last {days} days</h6>
                        <h6 id="total">Total seen {seen}</h6>
                        {/* <Line id="chart-onboard"
                            data={{
                                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                datasets: [
                                    {
                                        label: '# of Votes',
                                        data: [12, 19, 3, 5, 2, 3],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)'
                                        ],
                                        borderWidth: 1
                                    },
                                ],
                            }}
                            height={100}
                            width={600}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                beginAtZero: true,
                                            }
                                        }
                                    ]
                                }
                            }}
                        /> */}
                    </CardTitle>
                </Card>
            </div>
            <div className="col-6 mt-5 container">
                <Card id="card" className="container">
                    <CardTitle>
                        <h4>Get Your Page Ready to Achieve Success</h4>
                    </CardTitle>
                    <Card className="mt-3">
                        <Dropdown isOpen={dropdownOpenBP} toggle={toggleBP}>
                            <DropdownToggle caret id="build-profile-btn">
                                Build Profile
                            </DropdownToggle>
                            <DropdownMenu id="build-profile-btn">
                                <DropdownItem>
                                    <Button id="build-profile-btn">Add Profile's Photo</Button>
                                </DropdownItem>
                                <DropdownItem>
                                    <Button id="build-profile-btn">Add Cover</Button>
                                </DropdownItem>
                                <DropdownItem>
                                    <Button id="build-profile-btn">Add Description</Button>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Card>
                    <Card id="card" className="mb-3">
                        <Dropdown isOpen={dropdownOpenSP} toggle={toggleSP}>
                            <DropdownToggle caret id="build-profile-btn">
                                Share Your Page
                            </DropdownToggle>
                            <DropdownMenu id="share-page">
                                <DropdownItem>
                                    <Button id="build-profile-btn">Get 100 Followers</Button>
                                    <Button id="share-btn" color="danger">Share</Button>
                                </DropdownItem>
                                <DropdownItem>
                                    <Button id="build-profile-btn">Share Page</Button>
                                    <Button id="share-btn" color="danger">Share</Button>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Card>
                </Card>
            </div>
            <div className="mt-5 col-7 container">
                <Card id="card" className="container">
                    <CardTitle>
                        <h4>Income</h4>
                        <h6>Last {months} months</h6>
                        <h6 id="total">Total Rp {income}</h6>
                    </CardTitle>
                </Card>
            </div>
            <div className="container mt-5" id="landing-page">
                <Link to="/">
                    <Button id="btn-home">Landing Page</Button>
                </Link>
            </div>
        </div>
    )
}

export default Onboarding