import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import momentum from "../../assets/momentum.webp"
import Image from 'next/image'
import Link from 'next/link'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import book from "../../assets/book.svg"
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import latest_data from "../../data/latest/latest.json"
import Latestcarousel from '../latestcarousel/latestcarousel';

const Latest = () => {

    const isBrowser = typeof window !== 'undefined';
    const [isMobile, setIsMobile] = useState(isBrowser ? window.innerWidth < 600 : false);

    const handleResize = () => {
        setIsMobile(isBrowser ? window.innerWidth < 600 : false);
    };
    useEffect(() => {
        if (isBrowser) {
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [isBrowser]);
    return (

        <Box className={isMobile ? 'accordion-container' : 'tab-container'}>
            {isMobile ? (
                <Box className="accordion-content">
                    <Latestcarousel />
                </Box>
            ) : (
                <Box className="latest-box">
                    <Container maxWidth="xl">
                        <Box className="latest-container">
                            <Box className="latest-heading">
                                <Typography>
                                    LATEST NEWS
                                </Typography>
                            </Box>
                            <Box className="latest-article-link">
                                <Link href="#">
                                    <Typography>
                                        All articles <ArrowForwardIosIcon />
                                    </Typography>
                                </Link>
                            </Box>

                            {
                                latest_data.map((data) => (
                                    <Box className="latest-grid-box">
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                                            <Grid item xs={12} md={2} sm={12} sx={{ height: '200px', overflow: 'hidden' }}>
                                                <img src={data.img} alt="momentum" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </Grid>
                                            <Grid item xs={12} md={9} sm={12}>
                                                <Box className="latest-content">
                                                    <Box className="date">
                                                        <Box className="date-time-box" sx={{ display: 'flex', alignItems: 'center' }}>
                                                            <Typography>
                                                                {data.date} <AccessTimeIcon sx={{ marginY: -1 }} /> {data.time}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box className="latest-content-heading">
                                                        <Typography>
                                                            {data.heading}
                                                        </Typography>
                                                    </Box>
                                                    <Box className="latest-content-subhead">
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


                                            </Grid>
                                            <Grid item xs={12} md={1} sm={12}>
                                                <Box className="latest-article">
                                                    <img src={data.lastimg} alt="" />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                ))
                            }

                        </Box>
                    </Container>
                </Box>

            )}
        </Box>
    )
}

export default Latest
