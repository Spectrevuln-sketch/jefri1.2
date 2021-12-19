import React, { useState } from 'react'
import axios from 'axios'
import '../Tip/Tip.css'
import {
    Button, Card, CardImg, CardTitle, Input, Table,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import image1 from '../../assets/home-pic.jpg'

const Tip = () => {
    var [username, setUsername] = useState("")
    var [layout, setLayout] = useState(0)
    var [newest, setNewest] = useState([])
    var [best, setBest] = useState([])
    var [biggest, setBiggest] = useState([])
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const toggle1 = () => setDropdownOpen1(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);


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

    const getNewest = (e) => {
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

    const getBest = (e) => {
        e.preventDefault()
        axios.get(
            'api', {
            params: {
                best: best
            }
        }
        ).then(res => {

        })
    }

    const getBiggest = (e) => {
        e.preventDefault()
        axios.get(
            'api', {
            params: {
                biggest: biggest
            }
        }
        ).then(res => {

        })
    }

    return (
        <div>
            <h1 className="container">Support</h1>
            <div className="container">
                <Button onClick={() => setLayout(0)} id="support-btn">Set Tip</Button>
                <Button onClick={() => setLayout(layout + 1)} id="support-btn">The Supporters</Button>
            </div>
            <div className="container">
                <Card id="card-tip" className="mt-5">
                    {
                        (layout === 0) ?
                            <div className="row container">
                                <div className="col-6 mt-5">
                                    <Input placeholder="Tip's price per unit" />
                                    <Input className="mt-3" placeholder="Message in the tip's page" />
                                    <Button className="mt-5 mb-5" id="save-btn">Save</Button>
                                </div>
                                <div id="user-data" className="col-6 mt-5">
                                    <img id="user-image" src={image1} />
                                    <CardTitle>{username}</CardTitle>
                                    <p id="link">sketch.com/tip/{username}</p>
                                    <div id="share-tip" className="container">
                                        <Button id="share">Share</Button>
                                        <Button id="see-tip">See Tip</Button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="container">
                                <div className="row">
                                    <Dropdown className="col-6" isOpen={dropdownOpen1} toggle={toggle1}>
                                        <DropdownToggle id="dropdown" caret>
                                            All Time
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Show All</DropdownItem>
                                            <DropdownItem>Last 7 days</DropdownItem>
                                            <DropdownItem>Last 30 days</DropdownItem>
                                            <DropdownItem>Last 60 days</DropdownItem>
                                            <DropdownItem>Last 90 days</DropdownItem>
                                            <DropdownItem>Last 180 days</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <Dropdown className="col-6" isOpen={dropdownOpen2} toggle={toggle2}>
                                        <DropdownToggle id="dropdown" caret>
                                            Order by Newest
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={getNewest}>Newest</DropdownItem>
                                            <DropdownItem onClick={getBest}>Best Supporter</DropdownItem>
                                            <DropdownItem onClick={getBiggest}>Biggest</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Account</th>
                                            <th>Unit</th>
                                            <th>Message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                    }
                </Card>
            </div>
        </div>
    )
}

export default Tip