import { Box, Container, MobileStepper, Button, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import hints_data from "../../data/hints/hints.json"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import quote from "../../../public/static/quote.svg"
import Image from 'next/image';

const Hints = () => {

    const settings = {
        dots: true,
        arrows: false,
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
                    marginTop: "25px",
                    fontSize: "20px",
                    color: "hsla(0,0%,100%,.19)!important",
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: i === activeSlide ? '#ff4521' : (scrolling ? 'grey' : 'orange'),
                    marginRight: '5px',
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


        <Box className="hintcarousel-box">
            <Container maxWidth="xl">
                <Box className="hintcarousel-container" sx={{ position: 'relative' }}>
                    <Box className="hintcarousel-container-head">
                        <Typography>
                            HINTS FROM EXPERTS
                        </Typography>
                    </Box>


                    <Slider {...settings}>
                        {
                            hints_data.map((data) => (
                                <Box className="hintcarousel-data">
                                    <Box className="hintcarousel-head">
                                        <Typography>
                                            "{data.qoute}"
                                        </Typography>
                                    </Box>
                                    <Box className="hintcarousel-poet">
                                        <Typography>
                                            {data.poet}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Slider>
                    <Box className="quote-box" sx={{
                        position: 'absolute',
                        top: "-100px",
                        left: '50%','@media (max-width: 600px)': {
                            top: '-45px',
                          },
                      
                        transform: 'translateX(-50%)',
                    }}>
                        <Image src={quote} alt="quote" />
                    </Box>
                </Box>

            </Container>
        </Box>

    )
}

export default Hints
