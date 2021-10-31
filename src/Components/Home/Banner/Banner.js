import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner-1.jpg';
import banner2 from '../../../images/banner/banner-2.jpg';
import banner3 from '../../../images/banner/banner-3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
        <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100 banner-img"
                src= {banner3}
                alt="First slide"
                />
                <Carousel.Caption className="text-position">
                    <h1>Bangla Foodie</h1>
                    <h3>Online Food Delivery at your Door Step</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 banner-img"
                src= {banner2}
                alt="Second slide"
                />

                <Carousel.Caption className="text-position">
                    <h1>Bangla Foodie</h1>
                    <h3>Online Food Delivery at your Door Step</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 banner-img"
                src= {banner1}
                alt="Third slide"
                />

                <Carousel.Caption className="text-position">
                    <h1>Bangla Foodie</h1>
                    <h3>Online Food Delivery at your Door Step</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;