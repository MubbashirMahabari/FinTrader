import { Box, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import advance_data from "../../data/advance/advance.json"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import timeforex from "../../../public/static/time-forex.svg"
import Image from 'next/image';

const Advance = () => {
    const [isSliderInitialized, setIsSliderInitialized] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
            {
                breakpoint: 1200, // number of pixels between 991 and 1200
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991, // number of pixels between 768 and 991
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768, // number of pixels between 576 and 768
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576, // number of pixels between 0 and 576
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 200 && !isSliderInitialized) {
                setIsSliderInitialized(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSliderInitialized]);



    return (
        <Box className="advance-box">
            <Container maxWidth="xl">
                <Box className="advance-head">
                    <Typography>
                        ADVANCE GUIDES
                    </Typography>
                </Box>
                <Box className="advance-link">
                    <Link href="#">
                        <Typography>
                            All advanced Videos <ArrowForwardIosIcon sx={{fontSize:"16px"}}/>
                        </Typography>
                    </Link>
                </Box>

                <Box className="advance-data">
                    <Slider {...settings}>
                        {
                            advance_data.map((data) => (

                                <Card sx={{ maxWidth: 395, boxShadow: "none", borderRadius:"8px" }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={data.img}
                                        title="green iguana"
                                    />
                                    <CardContent sx={{padding:"15px 25px 60px"}}>
                                        <Box className="advance-card-heading-box">
                                            <Typography>
                                                {data.head}
                                            </Typography>
                                            <Box className="time-forex-box">
                                                <Image src={timeforex} alt="" />
                                            </Box>
                                        </Box>
                                        <Box className="advance-card-content-box">
                                            <Typography>
                                                {data.content}
                                            </Typography>
                                        </Box>
                                        <Box className="advance-card-link-box">
                                            <Link href="#">
                                                <Typography>
                                                    Read Article <ArrowForwardIosIcon sx={{fontSize:"16px"}}/>
                                                </Typography>
                                            </Link>
                                        </Box>
                                    </CardContent>



                                </Card>






                            ))
                        }
                    </Slider>
                </Box>

            </Container>
        </Box>
    )
}

export default Advance
