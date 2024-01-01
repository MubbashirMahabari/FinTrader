import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import phone from "../../assets/phone.png"
import mobileapp from "../../assets/mobileapp.png"
import appstore from "../../assets/app-store.svg"
import googlestore from "../../assets/google-play.svg"
import Image from 'next/image'
const Straight = () => {
    return (
        <Box className="straight-box" sx={{ position: 'relative', backgroundImage: "url(/static/straight-bg.png)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <Container maxWidth="lg">
                <Box className="straight-container-box">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                        <Grid item xs={12} md={6} sm={12} sx={{ order: { xs: 1, md: 2 } }}>
                            <Box className="straight-data">
                                <Box className="straight-heading">
                                    <Typography>
                                        Trade on the go, straight from your phone
                                    </Typography>
                                </Box>
                                <Box className="straight-content">
                                    <Typography>
                                        Never miss another trading opportunity again.
                                    </Typography>
                                </Box>
                                <Box className="straight-content">
                                    <Typography>
                                        Get the FXTM Trader app for commission-free trading and spreads as low as zero on major FX pairs and gold.</Typography>
                                </Box>
                                <Box className="straight-content">
                                    <Typography>
                                        Everything you need. One app.</Typography>
                                </Box>
                                <Box className="straight-btn" sx={{ display: { xs: "none", md: "block" } }}>
                                    <Box className="straight-open-btn" sx={{ display: { xs: "none", md: "block" } }}>
                                        <Button>
                                            <Image src={appstore} alt="" />
                                        </Button>
                                    </Box>
                                    <Box className="straight-google-btn" sx={{ display: { xs: "none", md: "block" } }}>
                                        <Button>
                                            <Image src={googlestore} alt="" />
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sm={12} sx={{ order: { xs: 2, md: 2 } }}>
                            <Box className="straight-img-box">
                                <Image src={mobileapp} alt="" />
                            </Box>
                            <Box className="straight-btn" sx={{ display: { xs: "block", md: "none" } }}>
                                <Box className="straight-open-btn" sx={{ display: { xs: "block", md: "none" } }}>
                                    <Button>
                                        <Image src={appstore} alt="" />
                                    </Button>
                                </Box>
                                <Box className="straight-google-btn" sx={{ display: { xs: "block", md: "none" } }}>
                                    <Button>
                                        <Image src={googlestore} alt="" />
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </Box>
    )
}

export default Straight
