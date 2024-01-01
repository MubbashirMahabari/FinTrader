import { Box, Typography, Container, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react';
// import scenarios from "../../assets/scenarios.png"
import Image from 'next/image'
import info_data from "../../data/info data/info.json"
import Infocarousel from '../infocarousel/infocarousel'

const Info = () => {

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
        <>
            <Box className={isMobile ? 'accordion-container' : 'tab-container'}>
                {isMobile ? (
                    <Box className="accordion-content">
                        <Infocarousel />
                    </Box>
                ) : (
                    <Box className="info-container-box">

                        <Box className="info-box">
                            <Container maxWidth="xl">
                                <Box className="info-heading">
                                    <Typography>
                                        Why choose FXTM?
                                    </Typography>
                                </Box>


                                <Box className="grid-info">
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                                        {
                                            info_data.map((data) => (
                                                <Grid item xs={12} md={3} sm={6}>
                                                    <Box className="info-grid-box">
                                                        <Box className="info-grid-img">
                                                            <Image src={data.img} alt="" width={50} height={50} />
                                                        </Box>
                                                        <Box className="info-grid-heading">
                                                            <Typography>
                                                                {data.heading}
                                                            </Typography>
                                                        </Box>
                                                        <Box className="info-grid-content">
                                                            <Typography>
                                                                {data.content}
                                                            </Typography>
                                                        </Box>
                                                    </Box>

                                                </Grid>
                                            ))
                                        }
                                    </Grid>


                                </Box>
                            </Container>

                        </Box>



                    </Box>
                )}
            </Box >
        </>

    )
}

export default Info
