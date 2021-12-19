import React from 'react'
import Particles from "react-tsparticles";
import { Link } from 'react-router-dom'
// atoms
import { Slider } from '../../../Components'



const HeroBanner = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };


    // slider
    const slider = [
        { src: "assets/images/custom/anime_2.png" },
        { src: "assets/images/custom/anime-girl2.png" },

    ]


    return (
        <section
            id="section-hero"
            aria-label="section"
            className="text-white overflow-hidden"
            data-bgimage="url(assets/images/background/2d.jpg) top"
        >
            <Particles id="section-hero" url="particles.json" init={particlesInit} loaded={particlesLoaded} />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="text_top">
                            <div className="spacer-double" />
                            <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-green-600'>Create Your Own Design</h1>
                            <p className="lead">
                                Easiest place to buy and sell cryptocurrency.
                                <br />
                                Sign up and get started today.
                            </p>
                            <div className="spacer-20" />
                            <Link to="" className="btn-main bg-gradient-to-r from-red-300 to-blue-600">
                                Explore
                            </Link>
                            &nbsp;&nbsp;
                            <Link to="" className="btn-main btn-white">
                                Create
                            </Link>
                            <div className="spacer-double" />
                        </div>
                    </div>
                    <div className="col-lg-6 -mb-32">
                        {/* image here */}
                        <Slider sliderData={slider} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner
