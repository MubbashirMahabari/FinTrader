import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import banner from "../../assets/banner.webp"
import hero_data from "../../data/herocarousel/herocarousel.json"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useMediaQuery from '@mui/material/useMediaQuery';



const Herocarousel = () => {


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
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => setActiveSlide(next),
        customPaging: (i) => (
            <Box
                className={`custom-dot ${i === activeSlide ? 'active' : ''}`}
                sx={{
                    marginTop:"-30px",
                    fontSize: "20px",
                    color: "hsla(0,0%,100%,.19)!important",
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: i === activeSlide ? '#fff' : (scrolling ? 'grey' : 'orange'),
                    marginRight: '5px',
                    transition: 'background-color 0.3s ease',
                }}
            ></Box>
        ),
    };

    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <>

            <Box className="carousel-box" sx={{}}>
                <Slider {...settings}>
                    {
                        hero_data.map((data, index) => (
                            <Box key={index} className="banner-outer-img-box" sx={{ position: 'relative', backgroundImage: `url(${data.bigbackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                <Box className="banner-inner-box" sx={{ backgroundImage: isMobile ? 'none' : 'url(/static/jumbotron.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                    <Box className="carousol-banner-inner-box-content" sx={{ width: "70%", padding: "150px 15px" }}>
                                        <Box className="banner-inner-heading">
                                            <Typography>
                                                {data.heading}
                                            </Typography>
                                        </Box>

                                        <Box className="banner-inner-content">
                                            <Typography>
                                                {data.content}
                                            </Typography>
                                        </Box>
                                        <Box className="open-acc-box">
                                            <Button>
                                                Open Account
                                            </Button>
                                        </Box>
                                        <Box className="risk-warning">
                                            <Typography>
                                                {data.warning}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Slider>
            </Box>
        </>

    )
}

export default Herocarousel
