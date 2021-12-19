import React, { Component } from 'react'
import NavBar from '../../components/Navbar/Navbar'
import './home.css'
import homePic from '../../assets/home-pic.jpg'
import {
    InputGroupAddon, Input, Button,
    InputGroupText, InputGroup
} from 'reactstrap'

const Home = () => {
    return (
        <div className="mb-5">
            <NavBar />
            <div className="container">
                <div className="mt-5">
                    <img className="image1" alt="home-pic" src={homePic} />
                    <h1 className="work-earn">Work & Earn Money </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus error culpa sapiente, in voluptas libero soluta delectus asperiores mollitia, dolore, aliquid rem consequuntur consectetur odit quos. Omnis commodi inventore molestias cumque dolorem qui? Quo esse iste incidunt? Animi vero impedit odit velit hic quisquam, enim dolorum expedita. Quibusdam in asperiores sint esse sapiente sed voluptatem nihil voluptatibus repudiandae sunt, nobis ipsam aperiam, veritatis rerum voluptatum. Voluptates necessitatibus ut dolorum qui explicabo provident earum tempore, quaerat architecto, deleniti mollitia, non neque in eaque vel officiis eligendi corrupti omnis. Voluptatem fuga iste necessitatibus officia beatae ab, debitis suscipit corporis eaque iusto cumque labore minima vero explicabo ex atque, maxime, amet sunt ipsa nesciunt expedita porro! Neque dolorum provident cumque quam porro aut corrupti magni a voluptates blanditiis nam laborum, inventore suscipit quidem temporibus et consequatur cum molestiae exercitationem est nulla amet! Eum quos dignissimos eveniet odio qui? Odio hic esse alias est, delectus vel eos sit deleniti recusandae, distinctio dignissimos sunt porro laborum assumenda modi nam veniam quo! Reiciendis veniam velit deleniti labore et quod in, eligendi ab optio neque quia reprehenderit aspernatur a natus quam deserunt laborum doloribus placeat vel at id hic repudiandae? Corrupti, necessitatibus possimus minus distinctio dolorum non?
                    </p>
                </div>
                <div>
                    <InputGroup id="input-group" className="mt-5 container">
                        <Input placeholder="sketch.com/coolcreatorname" />
                        <InputGroupAddon addonType="append"><Button color="danger" size="lg">Register</Button></InputGroupAddon>
                    </InputGroup>
                </div>
                <div>
                    <img id="home-pic" alt="home-pic" src={homePic} />
                </div>
                <div className="mt-5 row" id="build-community">
                    <h1 className="work-earn">Build Your Own Community</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, minus!
                    </p>
                    <img className="image2" alt="home-pic" src={homePic} />
                    <Button color="info" className="mt-3 col-3 container">More About Donation</Button>
                </div>
                <div className="mt-5" id="offer-commission">
                    <h1 className="work-earn">Offer a Creative Commission</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt ex magni maxime nemo assumenda, culpa, expedita sapiente ab ratione adipisci dignissimos laborum, fuga minima.
                    </p>
                    <img className="image2" alt="home-pic" src={homePic} />
                </div>
                <div className="mt-5" id="international-support">
                    <h1 className="work-earn">International Support</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt ex magni maxime nemo assumenda, culpa, expedita sapiente ab ratione adipisci dignissimos laborum, fuga minima.
                    </p>
                    <img id="checkbox" src="https://img.icons8.com/color-glass/25/000000/checked-checkbox.png" />
                    <h6>Language Selection</h6>
                    <img id="checkbox" src="https://img.icons8.com/color-glass/25/000000/checked-checkbox.png" />
                    <h6>Local Price & International</h6>
                    <Button className="mt-3" color="info">More About Commission</Button>
                </div>
                <div className="mt-5 row" id="publication-content">
                    <h1 className="work-earn">Publication of Work & Exclusive Content</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt ex magni maxime nemo assumenda, culpa, expedita sapiente ab ratione adipisci dignissimos laborum, fuga minima.
                    </p>
                    <img className="image2" alt="home-pic" src={homePic} />
                    <Button className="mt-3 col-3 container" color="info">More About Publication</Button>
                </div>
            </div>
        </div>
    )
}

export default Home