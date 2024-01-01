import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react';
import diamond from "../../assets/diamond.svg"
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import triangle from "../../assets/triangle.svg"
const Advantage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [columnSpacing, setColumnSpacing] = useState(2);

    useEffect(() => {
        const handleScroll = () => {
            // Determine the scroll position
            const scrollPosition = window.scrollY;

            // Set column spacing based on scroll position or other conditions
            if (isMobile && scrollPosition > 600) {
                setColumnSpacing(0);
            } else {
                setColumnSpacing(2);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    return (
        <Box className="advantage-box">
            <Container maxWidth="xl">
                <Box sx={{ position: 'relative' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }} sx={{ gap: isMobile ? 0 : 30 }}>
                        <Grid item xs={12} md={6} sm={12}>
                            <Box className="advantage-data">
                                <Box className="advantage-img">
                                    <Image src={diamond} alt="diamond" />
                                </Box>
                                <Box>
                                    <Box className="advantage-heading">
                                        <Typography>
                                            Are you an expert trader?
                                        </Typography>
                                    </Box>
                                    <Box className="advantage-content">
                                        <Typography>
                                            Start trading with our Advantage account.
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} sm={12}>
                            <Box className="advantage-btn-box">
                                <Box className="advantage-compare-btn">
                                    <Button>
                                        <Typography>
                                            COMPARE ACCOUNTS <ArrowForwardIosIcon />
                                        </Typography>
                                    </Button>
                                </Box>

                                <Box className="advantage-open-btn">
                                    <Button>
                                        <Typography>
                                            OPEN ADVANTAGE ACCOUNT <ArrowForwardIosIcon />
                                        </Typography>
                                    </Button>
                                </Box>
                            </Box>

                        </Grid>
                    </Grid>

                    <Box className="triangle-box" sx={{
                        position: 'absolute',
                        top: -75,
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}>
                        <Image src={triangle} alt="triangle" />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Advantage
