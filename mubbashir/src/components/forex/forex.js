import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Forex = () => {
    return (
        <Box>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                    <Grid item xs={12} md={6} sm={12} sx={{ order: { xs: 2, md: 2 } }}>
                        <Box className="forex-data-align">
                            <Box className="forex-data">
                                <Box className="forex-heading">
                                    <Typography sx={{}}>
                                        What is Forex Trading?
                                    </Typography>
                                </Box>
                                <Box className="forex-content">
                                    <Typography>
                                        Forex (also known as FX) is short for foreign exchange the global marketplace to buy and sell foreign currencies.
                                    </Typography>
                                </Box>
                                <Box className="forex-content">
                                    <Typography>
                                        This market is worth over $6 trillion daily, with central and private banks, hedge funds, traders, and travelers worldwide open 24 hours a day, 5.5 days per week exchanging money at different prices.
                                    </Typography>
                                </Box>
                                <Box className="forex-content">
                                    <Typography>
                                        Currency prices change every second, giving investors limitless opportunities to enter trades. And investors try to make money by correctly predicting the price movements of different pairs.
                                    </Typography>
                                </Box>

                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6} sm={12} sx={{ order: { xs: 1, md: 2 } }} >
                        <Box className="forex-market">

                        </Box>
                    </Grid>
                </Grid>
            </Box>


            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                    <Grid item xs={12} md={6} sm={12} sx={{ order: 1 }}>
                        <Box className="forex-market-trading">

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} sx={{ order: 2 }} >
                        <Box className="forex-data-align">
                            <Box className="forex-data">
                                <Box className="forex-heading">
                                    <Typography>
                                        What is Trading?
                                    </Typography>
                                </Box>
                                <Box className="forex-content">
                                    <Typography>
                                    Trading is the buying and selling securities, such as stocks, bonds, currencies, and commodities, to make a profit. And success depends on a trader's ability to be profitable over time.
                                    </Typography>
                                </Box>
                                <Box className="forex-content">
                                    <Typography>
                                    Investors try to forecast market price movements and profit from buying or selling an asset at a higher or lower price. You can 'go long' and buy a security, hoping it will go up in value and give you a profit, or you can 'go short' and sell in the belief that it will go down in value.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}

export default Forex
