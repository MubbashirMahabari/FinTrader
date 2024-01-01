import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import best1 from "../../assets/best1.svg"
import Image from 'next/image'
const Awards = () => {
    return (
        <Box className="awards-box">
            <Container maxWidth="xl">
                <Box className="awards-container">
                    <Box className="awards-heading">
                        <Typography>
                            AWARDS
                        </Typography>
                    </Box>

                    <Box className="awards-grid-box">
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                            <Grid item xs={6} md={3} sm={6}>
                                <Box className="awards-img">
                                    <Image src={best1} alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={3} sm={6}>
                                <Box className="awards-img">
                                    <Image src={best1} alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={3} sm={6}>
                                <Box className="awards-img">
                                    <Image src={best1} alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={3} sm={6}>
                                <Box className="awards-img">
                                    <Image src={best1} alt="" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Awards
