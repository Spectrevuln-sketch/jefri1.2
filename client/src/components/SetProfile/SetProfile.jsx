import React, { useState } from 'react'
import axios from 'axios'
import {
    Card, CardImg, Button, Input,
    Label, CardTitle
} from 'reactstrap'
import image1 from '../../assets/home-pic.jpg'
import '../SetProfile/SetProfile.css'

const SetProfile = () => {
    var [pic, setPic] = useState(null)
    var [name, setName] = useState("")
    var [bio, setBio] = useState("")
    var [location, setLocation] = useState("")
    var [type, setType] = useState("")
    var [category, setCategory] = useState("")
    var [layout, setLayout] = useState(null)
    var [tab, setTab] = useState("")
    var [gender, setGender] = useState("")
    var [website, setWebsite] = useState("")
    var [facebook, setFacebook] = useState("")
    var [youtube, setYoutube] = useState("")
    var [twitter, setTwitter] = useState("")
    var [instagram, setInstagram] = useState("")
    var [github, setGithub] = useState("")
    var [twitch, setTwitch] = useState("")
    var [spotify, setSpotify] = useState("")

    const getProfile = (e) => {
        e.preventDefault()
        axios.get(
            'api', {
                params: {
                    pic: pic,
                    name: name,
                    bio: bio,
                    location: location,
                    type: type,
                    category: category,
                    layout: layout,
                    tab: tab,
                    gender: gender,
                    website: website,
                    facebook: facebook,
                    youtube: youtube,
                    twitter: twitter,
                    instagram: instagram,
                    github: github,
                    twitch: twitch,
                    spotify: spotify
                }
            }
        ).then(res => {

        })
    }


    return (
        <div>
            <div className="container">
                <h1 style={{ textAlign: "center" }}>Edit Profile</h1>
            </div>
            <div className="container">
                <Card id="card-edit" className="container">
                    <Button onChange={e => setPic(e.target)} id="submit-btn" type="submit">
                        <CardImg id="user-img" src={image1} />
                    </Button>
                    <Input className="mt-5" placeholder="Name" onChange={e => setName(e.target.value)} value={name} />
                    <Input id="bio" className="mt-5" placeholder="Bio" type="textarea" onChange={e => setBio(e.target.value)} />
                    <Input className="mt-5" placeholder="Location" onChange={e => setLocation(e.target.value)} />
                    <CardTitle className="mt-5" id="title">Choose your account type</CardTitle>
                    <div>
                        <Input onChange={e => setType(e.target.value)} id="radio-btn" type="radio" />
                        <Label id="label" className="mx-3" check>Art lover</Label>
                    </div>
                    <div>
                        <Input onChange={e => setType(e.target.value)} id="radio-btn" type="radio" />
                        <Label id="label" className="mx-3">Creator</Label>
                    </div>
                    <div className="mt-5">
                        <select id="select-category">
                            <option id="option-category" value="" disabled selected>Choose category</option>
                            <option id="option-category" onChange={e => setCategory(e.target.value)} value="">Animator</option>
                            <option id="option-category" onChange={e => setCategory(e.target.value)} value="">Lorem, ipsum dolor.</option>
                            <option id="option-category" onChange={e => setCategory(e.target.value)} value="">Lorem, ipsum dolor.</option>
                            <option id="option-category" onChange={e => setCategory(e.target.value)} value="">Lorem, ipsum dolor.</option>
                            <option id="option-category" onChange={e => setCategory(e.target.value)} value="">Lorem, ipsum dolor.</option>
                            <option id="option-category" onChange={e => setCategory(e.target.value)} value="">Lorem, ipsum dolor.</option>
                        </select>
                    </div>
                    <CardTitle className="mt-5" id="title">Choose publication's layout for your profile</CardTitle>
                    <div className="mb-5">
                        <Button onChange={e => setLayout(e.target)} className="mr-5" outline color="secondary">
                            <img id="layout-pic" src={image1} />
                        </Button>
                        <Button onChange={e => setLayout(e.target)} outline color="secondary">
                            <img id="layout-pic" src={image1} />
                        </Button>
                    </div>
                    <CardTitle className="mt-5" id="title">Which tab is shown to your first-time profile visitor?</CardTitle>
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
                    <CardTitle className="mt-5" id="title">Gender</CardTitle>
                    <div>
                        <Input onChange={e => setGender(e.target.value)} id="radio-btn" type="radio" />
                        <Label id="label" className="mx-3" check>Male</Label>
                    </div>
                    <div>
                        <Input onChange={e => setGender(e.target.value)} id="radio-btn" type="radio" />
                        <Label id="label" className="mx-3">Female</Label>
                    </div>
                    <div>
                        <Input onChange={e => setGender(e.target.value)} id="radio-btn" type="radio" />
                        <Label id="label" className="mx-3">Not mention</Label>
                    </div>
                    <CardTitle className="mt-5" id="title">Social Media</CardTitle>
                    <Input className="mt-3" onChange={e => setWebsite(e.target.value)} placeholder="Website (URL)" />
                    <Input className="mt-3" onChange={e => setFacebook(e.target.value)} placeholder="Facebook (URL)"/>
                    <Input className="mt-3" onChange={e => setYoutube(e.target.value)} placeholder="Youtube (URL)" />
                    <Input className="mt-3" onChange={e => setTwitter(e.target.value)} placeholder="Twitter (URL)" />
                    <Input className="mt-3" onChange={e => setInstagram(e.target.value)} placeholder="Instagram (URL)" />
                    <Input className="mt-3" onChange={e => setGithub(e.target.value)} placeholder="Github (URL)" />
                    <Input className="mt-3" onChange={e => setTwitch(e.target.value)} placeholder="Twitch (URL)" />
                    <Input className="mt-3" onChange={e => setSpotify(e.target.value)} placeholder="Spotify (URL)" />
                    <Button className="mt-5 mb-5" color="danger" style={{fontWeight: "bold"}}>Save</Button>
                </Card>
            </div>
        </div>
    )
}

export default SetProfile