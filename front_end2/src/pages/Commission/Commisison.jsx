import React, { useState } from 'react'
import axios from 'axios'
import {
    NavLink, Button, Card, CardTitle, ButtonGroup,
    CardImg
} from 'reactstrap'
import NavBar from '../../components/Navbar/Navbar'
import '../Commission/Commission.css'

const Commission = () => {
    var [bestSelling, setBestSelling] = useState([])
    var [newest, setNewest] = useState([])

    const getBestSelling = (e) => {
        e.preventDefault()
        axios.get(
            'api-bestselling', {
            params: {
                bestSelling: bestSelling
            }
        }
        ).then(res => {

        })
    }

    const getNewest = (e) => {
        e.preventDefault()
        axios.get(
            'api-newest', {
            params: {
                newest: newest
            }
        }
        ).then(res => {

        })
    }

    const renderBestSelling = () => {
        return (
            <Button id="card-btn">
                <Card id="card-content">
                    <CardImg id="content-img" alt="content" />
                    <CardTitle className="mt-2 mx-3" id="content-title">Content-title</CardTitle>
                    <div id="price" className="mx-2">
                        <p id="start-from">Start From</p>
                        <p id="price-number">Rp. XXX</p>
                    </div>
                </Card>
            </Button>
        )
    }

    const renderNewest = () => {
        return (
            <Button id="card-btn">
                <Card id="card-content">
                    <CardImg id="content-img" alt="content" />
                    <CardTitle className="mt-2 mx-3" id="content-title">Content-title</CardTitle>
                    <div id="price" className="mx-2">
                        <p id="start-from">Start From</p>
                        <p id="price-number">Rp. XXX</p>
                    </div>
                </Card>
            </Button>
        )
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <Card id="card">
                    <CardTitle className="mt-5 mx-3">
                        <h3 >Commission</h3>
                    </CardTitle>
                    <CardTitle id="category">
                        <select id="selects">
                            <option id="option" value="" disabled selected>Choose category</option>
                            <option id="option" value="">Animator</option>
                            <option id="option" value="">Lorem, ipsum dolor.</option>
                            <option id="option" value="">Lorem, ipsum dolor.</option>
                            <option id="option" value="">Lorem, ipsum dolor.</option>
                            <option id="option" value="">Lorem, ipsum dolor.</option>
                            <option id="option" value="">Lorem, ipsum dolor.</option>
                        </select>
                    </CardTitle>
                    <hr className="mt-5"></hr>
                    <div className="mb-5">
                        <Button id="btn-commission" className="mx-3">Best Selling</Button>
                        <Button id="btn-commission" className="mx-3">Newest</Button>
                    </div>
                </Card>
            </div>
            <div className="container mt-5">
                <Button id="card-btn">
                    <Card id="card-content">
                        <CardImg id="content-img" alt="content" />
                        <CardTitle className="mt-2 mx-3" id="content-title">Content-title</CardTitle>
                        <div id="price" className="mx-2">
                            <p id="start-from">Start From</p>
                            <p id="price-number">Rp. XXX</p>
                        </div>
                    </Card>
                </Button>
            </div>
        </div>
    )
}

export default Commission