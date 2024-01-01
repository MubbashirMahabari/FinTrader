import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import Link from 'next/link';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
const Footer = () => {
    return (
        <Box className="footer-box" sx={{ position: 'relative', backgroundImage: "url(/static/footer-bg.svg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <Container maxWidth="xl">
                <Box className="footer-container">

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                        <Grid item xs={12} md={6} sm={12}>
                            <Box className="footer-join-box">
                                <Typography>
                                    Join our community
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6}>
                            <Box className="footer-icons">
                                <Box className="telegram">
                                    <TelegramIcon />
                                </Box>
                                <Box className="twitter">
                                    <TwitterIcon />
                                </Box>
                                <Box className="linkedin">
                                    <LinkedInIcon />
                                </Box>
                                
                                <Box className="youtube">
                                    <YouTubeIcon />
                                </Box>
                                <Box className="instagram">
                                    <InstagramIcon />
                                </Box>
                                <Box className="facebook">
                                    <FacebookOutlinedIcon />
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>


                <Box className="main-menu">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                        <Grid item xs={12} md={3} sm={6}>
                            <Box className="footer-menu">
                                <Box className="market-menu">
                                    <Typography>
                                        MARKETS
                                    </Typography>
                                </Box>
                                <Box className="market-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Metals
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="market-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Stocks
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="market-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Currency Pairs (FX)
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="market-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Indices
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="market-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Commodities
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="market-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            All Instruments
                                        </Typography>
                                    </Link>
                                </Box>


                                <Box className="trading-menu">
                                    <Box className="trading">
                                        <Link href='#'>
                                            <Typography>
                                                TRADING
                                            </Typography>
                                        </Link>
                                    </Box>
                                    <Box className="trading-menu-item">
                                        <Link href='#'><Typography>
                                            Accounts Overview & Comparison
                                        </Typography></Link>
                                    </Box>
                                    <Box className="trading-menu-item">
                                        <Link href='#'><Typography>
                                            Advantage Account
                                        </Typography></Link>
                                    </Box>
                                    <Box className="trading-menu-item">
                                        <Link href='#'><Typography>
                                            Demo Trading
                                        </Typography></Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>


                        <Grid item xs={12} md={3} sm={6}>
                            <Box className="footer-menu">
                                <Box className="knowledge-menu">
                                    <Typography>
                                        KNOWLEDGE HUB
                                    </Typography>
                                </Box>
                                <Box className="knowledge-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Full Library
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="knowledge-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Trading Videos
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="knowledge-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Ebooks
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="knowledge-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Trading Tools
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="knowledge-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Pip Calculator
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="knowledge-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Glossary
                                        </Typography>
                                    </Link>
                                </Box>


                                <Box className="platforms-menu">
                                    <Box className="platforms">
                                        <Typography>
                                            PLATFORMS
                                        </Typography>
                                    </Box>
                                    <Box className="platforms-menu-item">
                                        <Link href="#"><Typography>
                                            MT4
                                        </Typography>  </Link>
                                    </Box>
                                    <Box className="platforms-menu-item">
                                        <Link href="#"><Typography>
                                            MT5
                                        </Typography>  </Link>
                                    </Box>
                                    <Box className="platforms-menu-item">
                                        <Link href="#"><Typography>
                                            Mobile Trading
                                        </Typography>  </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>


                        <Grid item xs={12} md={3} sm={6}>
                            <Box className="footer-menu">
                                <Box className="regulation-menu">
                                    <Typography>
                                        REGULATION & LICENSING
                                    </Typography>
                                </Box>
                                <Box className="regulation-menu-item">

                                    <Link href="#"><Typography>
                                        Licensed Broker
                                    </Typography>  </Link>

                                </Box>
                                <Box className="regulation-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Financial Commission Compensation Fund
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="regulation-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Policy Statement
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="regulation-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Cookie Policy
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="regulation-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Risk Disclosure
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box className="regulation-menu-item">
                                    <Link href="#">
                                        <Typography>
                                            Terms and Conditions
                                        </Typography>
                                    </Link>
                                </Box>


                                <Box className="pricing-menu">
                                    <Box className="pricing">
                                        <Typography>
                                            PRICING
                                        </Typography>
                                    </Box>
                                    <Box className="pricing-menu-item">
                                        <Link href="#"><Typography>
                                            Performance Statistics

                                        </Typography>  </Link>
                                    </Box>
                                    <Box className="pricing-menu-item">
                                        <Link href="#"><Typography>
                                            Commissions and Fees
                                        </Typography></Link>
                                    </Box>
                                    <Box className="pricing-menu-item">
                                        <Link href="#"><Typography>
                                            Deposits and Withdrawals
                                        </Typography></Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3} sm={6}>
                            <Box className="about">
                                <Box className="about-menu">
                                    <Typography>
                                        ABOUT
                                    </Typography>
                                </Box>


                                <Box className="contact">
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                                        <Grid item xs={1} md={1} sm={1}>
                                            <Box>
                                                <ForumOutlinedIcon sx={{ color: "white" }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={11} md={11} sm={11}>
                                            <Box className="contact-mail">
                                                <Link href="#">
                                                    <Typography>
                                                        Contact Us :<br />
                                                        Email: support@fxtm.com
                                                    </Typography>
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box className="location1">
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                                        <Grid item xs={1} md={1} sm={1}>
                                            <Box>
                                                <FmdGoodOutlinedIcon sx={{ color: "white" }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={11} md={11} sm={11}>
                                            <Box className="contact-location">
                                                <Link href="#">
                                                    <Typography>
                                                        Exinity Limited: Exinity Limited, 5th Floor, 355 NEX Tower, Rue du Savoir, Cybercity, Ebene 72201, Mauritius
                                                    </Typography>
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box className="location2">
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                                        <Grid item xs={1} md={1} sm={1}>
                                            <Box>
                                                <FmdGoodOutlinedIcon sx={{ color: "white" }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={11} md={11} sm={11}>
                                            <Box className='contact-location'>
                                                <Link href="#">
                                                    <Typography>
                                                        Exinity Capital East Africa Ltd: West End Towers, Waiyaki Way, 6th Floor, P.O. Box 1896-00606, Nairobi, Republic of Kenya
                                                    </Typography>
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box className="careers-menu">
                                    <Box className="career">
                                        <Typography>
                                            CAREERS
                                        </Typography>
                                    </Box>
                                    <Box className="career-menu-item">
                                        <Link href="#"><Typography>
                                            FXTM in Nigeria

                                        </Typography>  </Link>
                                    </Box>
                                    <Box className="career-menu-item">
                                        <Link href="#"><Typography>
                                            FXTM Partnership - Affiliates
                                        </Typography></Link>
                                    </Box>
                                    <Box className="career-menu-item">
                                        <Link href="#"><Typography>
                                            Sponsorships and ESG
                                        </Typography></Link>
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

export default Footer
