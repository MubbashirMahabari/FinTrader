import { Box, Container, MobileStepper, Button, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import account_data from "../../data/account/account.json"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Accountcarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => setActiveSlide(next),
        customPaging: (i) => (
           
                <Box
                    className={`custom-dot ${i === activeSlide ? 'active' : ''}`}
                    sx={{
                        marginTop: "-180px",
                        color: "hsla(0,0%,100%,.19)!important",
                        width: '15px',
                        height: '15px',
                        border: i === activeSlide ? '3px solid #ff4521' : 'none',
                        borderRadius: '50%',
                        backgroundColor: i === activeSlide ? '#ff4521' : (scrolling ? 'lightgrey' : 'orange'),
                        marginRight: '10px',
                        transition: 'background-color 0.3s ease',
                    }}
                ></Box>
           

        ),
    };


    const [activeStep, setActiveStep] = useState(0);

    const [scrolling, setScrolling] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (


        <Box className="accountcarousel-box">
            <Container maxWidth="xl">
                <Box className="accountcarousel-container">
                    <Box className="accountcarousel-container-head">
                        <Typography>
                            How to open a demo account
                        </Typography>
                    </Box>


                    <Slider {...settings}>
                        {
                            account_data.map((data) => (
                                <Box className="accountcarousel-data">
                                    <Box className="accountcarousel-img">
                                        <img src={data.img} alt="step" />
                                    </Box>

                                    <Box className="accountcarousel-head">
                                        <Typography>
                                            {data.head}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Slider>

                </Box>
            </Container>
        </Box>

    )
}

export default Accountcarousel
