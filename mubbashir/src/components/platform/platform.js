import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import tradinglp from "../../assets/trading-lp.webp"
import Image from 'next/image'
const Platform = () => {
    return (
        <Box className="platform-box">
            <Container maxWidth="xl">
                <Box className="platform-data">
                    <Box className="platform-head">
                        <Typography>
                            Trading platforms
                        </Typography>
                    </Box>
                    <Box className="platform-content">
                        <Typography sx={{}}>
                            MetaTrader is the universally popular online trading platform that lets you monitor the markets and trade in real-time. When you trade with us, you trade on one of these two powerful platforms, beloved by traders of all experience levels around the world.
                        </Typography>
                    </Box>

                    <Box className="platform-img">
                        <Image src={tradinglp} alt="" />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Platform
