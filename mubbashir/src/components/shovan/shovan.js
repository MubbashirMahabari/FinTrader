import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Shovan = () => {
    return (
        <Box>
            <Container maxWidth="xl">
                <Box className="shovan-box">
                    <Box className="shovan-heading">
                        <Typography sx={{fontSize:"20px"}}>
                            Shovan. Join forces with a leading global broker and start getting more from the markets.
                        </Typography>
                    </Box>
                    <Box className="shovan-content">
                        <Typography>
                        With friendly Customer Support, the latest technology and a range of account types, we've got everything you need to discover better trading.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Shovan
