import { Box, Container, Link } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import latest_data from "../../data/latest/latest.json"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import book from "../../assets/book.svg"
import Image from 'next/image';




const Latestcarousel = () => {

    const [isSliderInitialized, setIsSliderInitialized] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
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



        <Box>
            <Container maxWidth="xl">
                <Box className="latestcarousel-heading">
                    <Typography>
                        LATEST NEWS
                    </Typography>
                </Box>
                <Box className="latestcarousel-article-link">
                    <Link href="#">
                        <Typography>
                            All articles <ArrowForwardIosIcon />
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                    <Slider {...settings}>
                        {
                            latest_data.map((data) => (
                                <Card sx={{ maxWidth: 400, boxShadow: "none" }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={data.img}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Box className="latestcarousel-content">
                                            <Box className="date" sx={{ position: "relative" }}>
                                                <Box className="time-forex-box" sx={{
                                                    position: 'absolute',
                                                    left: "90%",
                                                  
                                                    transform: 'translateX(-50%)',
                                                }}>
                                                    <Image src={book} alt="book" />
                                                </Box>
                                                <Box className="date-time-box" sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Typography>
                                                        {data.date} <AccessTimeIcon sx={{ marginY: -1 }} /> {data.time}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className="latestcarousel-content-heading">
                                                <Typography>
                                                    {data.heading}
                                                </Typography>
                                            </Box>
                                            <Box className="latestcarousel-content-subhead">
                                                <Typography>
                                                    {data.subhead}
                                                </Typography>
                                            </Box>

                                            <Box className='tags-box' sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography>
                                                    <LocalOfferOutlinedIcon sx={{ marginY: -1, marginRight: "3px" }} /> {data.tag1} <LocalOfferOutlinedIcon sx={{ marginY: -1, marginRight: "3px" }} /> {data.tag2}  <LocalOfferOutlinedIcon sx={{ marginY: -1, marginRight: "3px" }} /> {data.tag3}  <LocalOfferOutlinedIcon sx={{ marginY: -1, marginRight: "3px" }} />  {data.tag4}  <LocalOfferOutlinedIcon sx={{ marginY: -1, marginRight: "3px" }} />  {data.tag5}
                                                </Typography>

                                            </Box>
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

export default Latestcarousel
