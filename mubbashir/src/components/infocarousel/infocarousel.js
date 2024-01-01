import { Box, Container, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import info_data from "../../data/info data/info.json"
import Image from 'next/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Infocarousel = () => {


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
                    fontSize: "20px",
                    color: "hsla(0,0%,100%,.19)!important",
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: i === activeSlide ? '#ff4521' : "grey",
                    marginRight: '5px',
                    transition: 'background-color 0.3s ease',
                }}
            ></Box>
        ),
    };


    return (
        <>
            <Box className="info-carousel-box">
                <Container maxWidth="xl">
                    <Box className="info-carousel-title">
                        <Typography>
                            Why choose FXTM?
                        </Typography>
                    </Box>
                    <Slider {...settings}>
                        {
                            info_data.map((data) => (
                                <Box className="info-map-box">
                                    <Box className="info-carousel-img">
                                        <Image src={data.img} alt="" width={50} height={50} />
                                    </Box>
                                    <Box className="info-carousel-heading">
                                        <Typography>
                                            {data.heading}
                                        </Typography>
                                    </Box>
                                    <Box className="info-carousel-content">
                                        <Typography>
                                            {data.content}
                                        </Typography>
                                    </Box>
                                </Box>

                            ))
                        }
                    </Slider>

                </Container>

            </Box>
        </>

    )
}

export default Infocarousel
