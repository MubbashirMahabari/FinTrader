import { Box, Container, Typography,Button } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Copytrading = () => {
    return (
        <Box className="copytrade-box" sx={{ position: 'relative', backgroundImage: `linear-gradient(rgba(26, 29, 48, 0.8), rgba(26, 29, 48, 0.8)), url(/static/copytrade-bg.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <Container maxWidth="xl">
                <Box className="copytrade-data">
                    <Box className="copytrade-head">
                        <Typography>
                            COPY TRADING WITH FXTM
                        </Typography>
                    </Box>
                    <Box className="copytrade-subhead">
                        <Typography>
                            Trade setups done for you
                        </Typography>
                    </Box>
                    <Box className="copytrade-content1">
                        <Typography>
                            Follow strategy managers and copy their trades, removing the hassle of having to trade yourself.
                        </Typography>
                    </Box>
                    <Box className="copytrade-content2">
                        <Typography>
                            Get started with as little as $100 today.
                        </Typography>
                    </Box>

                    <Box className="copytrade-btn-box">
                        <Button>
                            <Typography>
                               START COPY TRADING {" "} <ArrowForwardIosIcon sx={{fontSize:"20px"}}/>
                            </Typography>
                        </Button>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Copytrading
