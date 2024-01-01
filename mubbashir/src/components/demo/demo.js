import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import phone from "../../assets/phone.png"
import Image from 'next/image'
const Demo = () => {
    return (
        <Box className="demo-box">
            <Container maxWidth="lg">
                <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                        <Grid item xs={12} md={6} sm={12} sx={{ order: { xs: 2, md: 2 } }}>
                            <Box className="demo-img-box">
                                <Image src={phone} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sm={12} sx={{ order: { xs: 1, md: 2 } }}>
                            <Box className="demo-data">
                                <Box className="demo-heading">
                                    <Typography>
                                        DEMO ACCOUNT
                                    </Typography>
                                </Box>
                                <Box className="demo-subhead">
                                    <Typography>
                                        Power up your trading skills
                                    </Typography>
                                </Box>
                                <Box className="demo-content">
                                    <Typography>
                                        Master the markets and skill up to the next level on our free demo account. Explore hundreds of instruments and tools, and practise trading with zero risk. And when you feel more confident, switch over to a live account and start trading for real.
                                    </Typography>
                                </Box>
                                <Box className="demo-btn">
                                    <Box className="demo-open-btn">
                                        <Button>
                                            <Typography>
                                                OPEN DEMO
                                            </Typography>
                                        </Button>
                                    </Box>
                                    <Box className="fxtm-btn">
                                        <Button>
                                            <Typography>FXTM TRADER</Typography>
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Demo
