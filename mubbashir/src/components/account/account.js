import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import step1 from "../../assets/step1.svg"
import Image from 'next/image'
import account_data from "../../data/account/account.json"
import Accountcarousel from '../accountcarousel/accountcarousel';
const Account = () => {

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
                        <Accountcarousel />
                    </Box>
                ) : (
                    <Box className="account-box">
                        <Container maxWidth="xl">
                            <Box className="account-container">
                                <Box className="account-container-head">
                                    <Typography>
                                        How to open a demo account
                                    </Typography>
                                </Box>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                                    {
                                        account_data.map((data) => (
                                            <Grid item xs={12} md={3} sm={12}>
                                                <Box className="account-data">
                                                    <Box className="account-img">
                                                        <img src={data.img} alt="step" />
                                                    </Box>
                                                </Box>
                                                <Box className="account-head">
                                                    <Typography>
                                                        {data.head}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))
                                    }

                                </Grid>
                            </Box>
                        </Container>
                    </Box>
                )}
            </Box>
        </>

    )
}

export default Account
