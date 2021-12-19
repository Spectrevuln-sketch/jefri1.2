import react, { useRef, useState } from 'react'
import '../Publication/publication.css'
import NavBar from '../../components/Navbar/Navbar'
import image1 from '../../assets/home-pic.jpg'
import {
    NavLink, Button, Card, CardTitle, ButtonGroup
} from 'reactstrap'
import NewestPublication from '../../components/NewestPublication/NewestPublication'
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// Swiper.use([Navigation, Pagination]);

// const swiper = new Swiper(...);

const Publication = () => {
    return (
        <div>
            <NavBar />
            <div>
                <h1 id="rank">
                    Today's Rank of Publication
                </h1>
            </div>
            <div id="see-more" >
                <Button size="lg" color="danger">See More</Button>
            </div>
            <div className="container mt-5">
                <h1 id="followed-publication">
                    Followed creators' publication
                </h1>
            </div>
            <div id="see-more" >
                <Button size="lg" color="danger">See More</Button>
            </div>
            <div className="row mt-5" id="last-part-of-page">
                <div className="col">
                    <h1>Choosen creator</h1>
                </div>
                <div className="col">
                    <h1>Newest publication</h1>
                    <NewestPublication className="mt-5"/>
                </div>
                <div className="col">
                    <Card id="card-category">
                        <h1>Choosen category</h1>
                        <ButtonGroup className="row container">
                            <Button className="col-12 my-2" id="btn-group">
                                <h6>
                                    Animation
                                    <ion-icon name="arrow-forward-outline" className="mx-3"></ion-icon>
                                </h6>
                            </Button>
                            <Button className="col-12 my-2" id="btn-group">
                                <h6>
                                    Comics
                                    <ion-icon name="arrow-forward-outline" className="mx-3"></ion-icon>
                                </h6>
                            </Button>
                            <Button className="col-12 my-2" id="btn-group">
                                <h6>
                                    Cosplay / Fashion
                                    <ion-icon name="arrow-forward-outline" className="mx-3"></ion-icon>
                                </h6>
                            </Button>
                            <Button className="col-12 my-2" id="btn-group">
                                <h6>
                                    Illustration
                                    <ion-icon name="arrow-forward-outline" className="mx-3"></ion-icon>
                                </h6>
                            </Button>
                            <Button className="col-12 my-2" id="btn-group">
                                <h6>
                                    Music
                                    <ion-icon name="arrow-forward-outline" className="mx-3"></ion-icon>
                                </h6>
                            </Button>
                            <Button className="col-12 my-2" id="btn-group">
                                <h6>
                                    Others
                                    <ion-icon name="arrow-forward-outline" className="mx-3"></ion-icon>
                                </h6>
                            </Button>
                            <Button className="col-12 my-2" id="btn-group">
                                <h6>
                                    Photography
                                    <ion-icon name="arrow-forward-outline" className="mx-3"></ion-icon>
                                </h6>
                            </Button>
                        </ButtonGroup>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Publication