import React, { useContext } from 'react'
import {
    Link,
    useLocation,
    Outlet,
    useRoutes,
    matchRoutes,
    useResolvedLocation,
    useParams,
    Navigate
} from "react-router-dom";
import {
    Header,
    HeroBanner
} from '../../Components'
/* --------------------------------- Content -------------------------------- */
import {
    ExplorePage,
    LandingPage,
    LoginPage,
    RegisterPage,
    AdminMain,
    AdminDashboard,
    AdminKomisi,
    AturHalaman,
    ProfilePage,
    TipTab,
    PublicationPage
} from '../Contents'

import IsloginContext from '../../Context/isLoginContext'
const MainApp = () => {
    const { islogin, AuthLogin } = useContext(IsloginContext)

    const routes = [
        {
            path: "/",
            element: <LandingPage />,
            children: [
                {
                    path: ":username",
                    element: <ProfilePage />,
                }
            ]
        },

        {
            path: "/register",
            element: <RegisterPage />
        },
        {
            path: "/explore",
            element: <ExplorePage />
        },
        {
            path: "/commisions",
            element: <div>comisi</div>
        },

        {
            path: "/dashboard",
            element: <AdminMain />,
            children: [
                {
                    path: "onboard",
                    element: <AdminDashboard />
                },
                {
                    path: "tip",
                    element: <TipTab />
                },
                {
                    path: "komisi",
                    element: <AdminKomisi />
                },
                {
                    path: "atur-halaman",
                    element: <AturHalaman />
                },
                {
                    path: "publication",
                    element: <PublicationPage />
                },
            ]
        },
        {
            path: "/login",
            element: <LoginPage />,

        },

    ]

    const element = useRoutes(routes)

    return (
        <>
            {element.props.children.type.name === "AdminMain" && (
                element
            )}
            {element.props.children.type.name !== "AdminMain" && (

                <>
                    <Header />
                    <div id="wrapper">
                        {element}
                    </div>
                    {/* content close */}
                    <a href="#" id="back-to-top" />
                    {/* footer begin */}
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-1">
                                    <div className="widget">
                                        <h5>General</h5>
                                        <ul>
                                            <li>
                                                <a href="#">About</a>
                                            </li>
                                            <li>
                                                <a href="#">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="#">Support</a>
                                            </li>
                                            <li>
                                                <a href="#">Build</a>
                                            </li>
                                            <li>
                                                <a href="#">Careers</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-1">
                                    <div className="widget">
                                        <h5>Technology</h5>
                                        <ul>
                                            <li>
                                                <a href="#">Technology</a>
                                            </li>
                                            <li>
                                                <a href="#">Roadmap</a>
                                            </li>
                                            <li>
                                                <a href="#">Token</a>
                                            </li>
                                            <li>
                                                <a href="#">Telemetry</a>
                                            </li>
                                            <li>
                                                <a href="#">Lightpaper</a>
                                            </li>
                                            <li>
                                                <a href="#">Whitepaper</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-1">
                                    <div className="widget">
                                        <h5>Community</h5>
                                        <ul>
                                            <li>
                                                <a href="#">Community</a>
                                            </li>
                                            <li>
                                                <a href="#">Documentation</a>
                                            </li>
                                            <li>
                                                <a href="#">Brand Assets</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                            <li>
                                                <a href="#">Forum</a>
                                            </li>
                                            <li>
                                                <a href="#">Mailing List</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-1">
                                    <div className="widget">
                                        <h5>Newsletter</h5>
                                        <p>
                                            Signup for our newsletter to get the latest news in your inbox.
                                        </p>
                                        <form
                                            action="blank.php"
                                            className="row form-dark"
                                            id="form_subscribe"
                                            method="post"
                                            name="form_subscribe"
                                        >
                                            <div className="col text-center">
                                                <input
                                                    className="form-control"
                                                    id="txt_subscribe"
                                                    name="txt_subscribe"
                                                    placeholder="enter your email"
                                                    type="text"
                                                />{" "}
                                                <a href="#" id="btn-subscribe">
                                                    <i className="arrow_right bg-color-secondary" />
                                                </a>
                                                <div className="clearfix" />
                                            </div>
                                        </form>
                                        <div className="spacer-10" />
                                        <small>Your email is safe with us. We don't spam.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="subfooter">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="de-flex">
                                            <div className="de-flex-col">
                                                <a href="dark-index.html">
                                                    <img alt className="f-logo" src="assets/images/logo-light.png" />
                                                    <span className="copy">
                                                        © Copyright 2021 - Gigaland by Designesia
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="de-flex-col">
                                                <div className="social-icons">
                                                    <a href="#">
                                                        <i className="fa fa-facebook fa-lg" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-twitter fa-lg" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-linkedin fa-lg" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-pinterest fa-lg" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-rss fa-lg" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </>
            )}
        </>
    )
}

export default MainApp
