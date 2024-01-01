import { Box, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import tradingbasicdata from "../../data/tradingbasic/tradingbasic.json"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Tradingbasic = () => {

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
        <Container maxWidth="xl">
            <Box className="tradebasic-box">

                <Box className="tradebasic-head">
                    <Typography>
                        TRADING BASIC
                    </Typography>
                </Box>
                <Box className="tradebasic-link">
                    <Link href="#">
                        <Typography>
                            All guides <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
                        </Typography>
                    </Link>
                </Box>

                <Box className="tradebasic-data">
                    <Slider {...settings}>
                        {
                            tradingbasicdata.map((data) => (

                                <Card sx={{ borderRadius: "8px", maxWidth: 395, boxShadow: "none" }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={data.img}
                                        title="green iguana"
                                    />
                                    <CardContent sx={{ padding: "20px 35px 60px" }}>
                                        <Box className="card-heading-box">
                                            <Typography>
                                                {data.head}
                                            </Typography>
                                        </Box>
                                        <Box className="card-content-box">
                                            <Typography>
                                                {data.content}
                                            </Typography>
                                        </Box>
                                        <Box className="card-link-box">
                                            <Link href="#">
                                                <Typography>
                                                    Read Article <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
                                                </Typography>
                                            </Link>
                                        </Box>
                                    </CardContent>



                                </Card>






                            ))
                        }
                    </Slider>
                </Box>


            </Box>
        </Container>
    )
}

export default Tradingbasic
