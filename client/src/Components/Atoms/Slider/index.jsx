import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Slider = ({ sliderData }) => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            renderIndicator={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={2000}
        >
            {sliderData && (
                sliderData.map(data => {
                    return (

                        <div>
                            <img src={data.src} />
                        </div>
                    )
                })
            )}

        </Carousel>
    )
}

export default Slider
