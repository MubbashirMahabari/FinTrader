import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from 'react';


const Expert = () => {

    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            const scrollThreshold = 600;

            if (window.scrollY > scrollThreshold) {
                setIsMobileView(true);
            } else {
                setIsMobileView(false);
            }
        };


        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <Box className="expert-box" sx={{ position: 'relative', backgroundImage: `linear-gradient(rgba(26, 29, 48, 0.8), rgba(26, 29, 48, 0.8)), url(/static/expert-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <Container maxWidth="xl">
                <Box className="expert-container-box">
                    <Grid className="expert-grid-container" container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }} sx={{ gap: 25 }}>
                        <Grid item xs={12} md={8} sm={6}>
                            <Box className="expert-heading-box">
                                <Box className="expert-heading">
                                    <Typography>
                                        EXPERT TRADER
                                    </Typography>
                                </Box>
                                <Box className="already-box">
                                    <Typography>
                                        Already trading?
                                    </Typography>
                                </Box>
                                <Box className="expert-content">
                                    <Typography>
                                        Sharpen your edge with the latest market updates, expert analysis, real-time prices, and innovative trading tools.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2} sm={6}>
                            <Box className="expert-btn-box">
                                <Button>
                                    <Typography>
                                        EXPERT TRADER <ArrowForwardIosIcon />
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </Box>
    )
}

export default Expert
