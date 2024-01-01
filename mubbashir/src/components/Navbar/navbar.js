import {
    Box, Container, Drawer, Typography, Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid, Popover, MenuList, Input, List, ListItem
} from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import logo from "../../assets/logo-dark.svg"
import scrolledLogo from "../../../public/static/logo-white.svg"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import useMediaQuery from '@mui/material/useMediaQuery';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Person2Icon from '@mui/icons-material/Person2';
import CloseIcon from '@mui/icons-material/Close';


const pages = ['ABOUT', 'MARKETS', 'TRADING', 'FXTM INVEST', "EDUCATION", "AFFLIATES"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Search = styled('div')({
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.4375em',
    letterSpacing: '0.00938em',
    textAlign: "center",
    maxWidth: "195"

});


// Customize the InputBase component
const StyledInputBase = styled(InputBase)({


});



const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorEl, setAnchorEl] = useState(null);



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            if (!isTop) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 600px)');
        setIsMobile(mobileQuery.matches);
        mobileQuery.addListener(() => {
            setIsMobile(mobileQuery.matches);
        });
    }, []);





    const handleAccordionChange = (panel) => (event, isExpanded) => {
        // Your logic to handle accordion panel change
    };







    const handleOpenPopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const handleLanguageSelect = (language) => {
        // Handle language selection logic here
        console.log(`Selected language: ${language}`);
        handleClosePopover();
    };



    return (
        <>
            <Box className="navbar-initial" sx={{ display: { xs: "none", md: "flex" } }}>
                <Container maxWidth="xl" sx={{ display: { xs: "none", md: "block" } }}>
                    <List className="navbar-initial-inner-box">
                        <ListItem sx={{ padding: "0 0 0 0", margin: "0px 0px" }}>
                            <Input className="input-box"
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </ListItem>


                        <ListItem className='navbar-contact-box' sx={{ padding: "0 0 0 0", margin: "0 11px" }}>
                            <Button>
                                <Typography>
                                    CONTACT US
                                </Typography>
                            </Button>
                        </ListItem>

                        <ListItem className='navbar-open-acc-box' sx={{ padding: "0 0 0 0" }}>
                            <Button>
                                <Typography>
                                    OPEN ACCOUNT
                                </Typography>
                            </Button>
                        </ListItem>

                        <ListItem className='navbar-login-box' sx={{ padding: "0 0 0 0" }}>
                            <Button>
                                <Typography>
                                    LOGIN
                                </Typography>
                            </Button>
                        </ListItem>
                    </List>

                </Container>
            </Box>




            {/* <Container maxWidth="xl">
                <Toolbar className='toolbar' sx={{
                    position: 'fixed',
                    width: '100%',
                    top: scrolling ? 0 : 50,
                    zIndex: 1000,
                    backgroundColor: isMobile ? (scrolling ? '#1A1D30' : 'rgba(26,29,48,.76)') : (scrolling ? 'rgba(26,29,48,.76)' : 'white'),
                    border: scrolling ? '1px solid rgba(26,29,48,.76)' : '1px solid white',
                    color: scrolling || isMobile ? 'white' : 'black',
                }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }} sx={{ margin: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Grid item xs={2} md={2} sm={2} className="grid-item-btn" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Link href="#" sx={{ textAlign: "center" }}>
                                {isMobile ? (
                                    <IconButton
                                        size="large"
                                        aria-label="menu"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                    >
                                        {anchorElNav ? <CloseIcon /> : <MenuIcon />}
                                    </IconButton>
                                ) : (
                                    <Image src={scrolling ? scrolledLogo : logo} alt="logo" />
                                )}
                            </Link>
                        </Grid>
                        {isMobile ? null : (
                            <>
                                <Grid item xs={8} md={8} sm={8} sx={{ padding: 0, display: "flex", alignItems: "center" }}>
                                    <Box sx={{ display: "flex" }}>
                                        <Button className='navbar-item-btn' sx={{}}>
                                            <Typography sx={{ color: scrolling ? 'white' : '#1a1d30', fontWeight: 600, fontSize: "1rem", fontFamily: "'Source Sans Pro', sans-serif" }}>
                                                ABOUT
                                            </Typography>
                                        </Button>
                                        <Button href="#" className='navbar-item-btn'>
                                            <Typography sx={{ color: scrolling ? 'white' : '#1a1d30', fontWeight: 600, fontSize: "1rem", fontFamily: "'Source Sans Pro', sans-serif" }}>
                                                MARKETS
                                            </Typography>
                                        </Button>
                                        <Button href="#" className='navbar-item-btn'>
                                            <Typography sx={{ color: scrolling ? 'white' : '#1a1d30', fontWeight: 600, fontSize: "1rem", fontFamily: "'Source Sans Pro', sans-serif" }}>
                                                TRADING
                                            </Typography>
                                        </Button>
                                        <Button href="#" className='navbar-item-btn'>
                                            <Typography sx={{ color: scrolling ? 'white' : '#1a1d30', fontWeight: 600, fontSize: "1rem", fontFamily: "'Source Sans Pro', sans-serif" }}>
                                                FXTM INVEST
                                            </Typography>
                                        </Button>
                                        <Button href="#" className='navbar-item-btn'>
                                            <Typography sx={{ color: scrolling ? 'white' : '#1a1d30', fontWeight: 600, fontSize: "1rem", fontFamily: "'Source Sans Pro', sans-serif" }}>
                                                EDUCATION
                                            </Typography>
                                        </Button>
                                        <Button href="#" className='navbar-item-btn'>
                                            <Typography sx={{ color: scrolling ? 'white' : '#1a1d30', fontWeight: 600, fontSize: "1rem", fontFamily: "'Source Sans Pro', sans-serif" }}>
                                                AFFILIATES
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} md={2} sm={2}>
                                    <Box className="lang-box">
                                        <Button onClick={handleOpenPopover}>
                                            <Typography sx={{ color: scrolling ? 'white' : 'rgba(0, 0, 0, 0.87)', fontSize: "1rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                English<ArrowDropDownTwoToneIcon sx={{ color: scrolling ? 'white' : 'rgba(0, 0, 0, 0.54)', }} />
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Grid>
                            </>
                        )}
                    </Grid>

                </Toolbar>
            </Container> */}









            <Box className="navbar-container" sx={{

                position: isMobile ? 'static' : 'fixed',
                width: '100%',
                top: scrolling ? 0 : 50,
                zIndex: 1000,
                backgroundColor: isMobile ? (scrolling ? '#1A1D30' : '#1A1D30') : (scrolling ? 'rgba(26,29,48,.76)' : 'white'),
                border: scrolling ? '1px solid rgba(26,29,48,.76)' : '',
                color: scrolling || isMobile ? 'white' : 'black',

            }}>

                <Box className="navbar-toolbar" sx={{}}>

                    <Toolbar disableGutters sx={{
                        paddingLeft: "30px", paddingRight: "30px", "@media (max-width: 600px)": {
                            padding: 0
                        },
                    }}>

                        <Box sx={{ mr: 3, display: { xs: 'none', md: 'block' } }}>
                            <Image src={scrolling ? scrolledLogo : logo} alt="logo" style={{}} width={150}/>
                        </Box>



                        <Box className="menu-bar" sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                sx={{ padding: "12px 0 12px 5px" }}
                            >

                                {anchorElNav ? <CloseIcon sx={{ fontSize: "30px", }} /> : <MenuIcon sx={{ fontSize: "30px", }} />}

                            </IconButton>


                            <Menu
                                className='menu-main-bar'
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'center',
                                    horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    background: "", width: "100%", top: 45, display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <Box className="accordion-box">
                                    <Box>
                                        <Accordion sx={{ background: "#1A1D30" }}>
                                            <AccordionSummary
                                                expandIcon={<ArrowForwardIosIcon sx={{ color: "#fff", padding: "8px",fontSize:"15px" }} />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem", fontFamily: "Source Sans Pro" }}>ABOUT</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>


                                    <Box>
                                        <Accordion sx={{ background: "#1A1D30" }}>
                                            <AccordionSummary
                                                expandIcon={<ArrowForwardIosIcon sx={{ color: "#fff", padding: "8px",fontSize:"15px" }} />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem", fontFamily: "Source Sans Pro" }}>MARKETS</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>


                                    <Box>
                                        <Accordion sx={{ background: "#1A1D30" }}>
                                            <AccordionSummary
                                                expandIcon={<ArrowForwardIosIcon sx={{ color: "#fff", padding: "8px",fontSize:"15px" }} />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem", fontFamily: "Source Sans Pro" }}>TRADING</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>

                                    <Box>
                                        <Accordion sx={{ background: "#1A1D30" }}>
                                            <AccordionSummary
                                                expandIcon={<ArrowForwardIosIcon sx={{ color: "#fff", padding: "8px",fontSize:"15px" }} />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem", fontFamily: "Source Sans Pro" }}>FXTM INVEST</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>

                                    <Box>
                                        <Accordion sx={{ background: "#1A1D30" }}>
                                            <AccordionSummary
                                                expandIcon={<ArrowForwardIosIcon sx={{ color: "#fff", padding: "8px",fontSize:"15px" }} />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem", fontFamily: "Source Sans Pro" }}>EDUCATION</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>

                                    <Box>
                                        <Accordion sx={{ background: "#1A1D30" }}>
                                            <AccordionSummary
                                                expandIcon={<ArrowForwardIosIcon sx={{ color: "#fff", padding: "8px",fontSize:"15px" }} />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem", fontFamily: "Source Sans Pro" }}>AFFLIATES</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>

                                    <Box className="contact-info" sx={{ marginTop: 5, display: "flex", gap: 5, justifyContent: "center", alignItems: "center" }}>
                                        <Box>
                                            <LocalPhoneIcon sx={{ color: '#fff' }} />
                                        </Box>
                                        <Box className='navbar-open-acc-box'>
                                            <Button>
                                                <Typography>
                                                    OPEN ACCOUNT
                                                </Typography>
                                            </Button>
                                        </Box>

                                        <Box>
                                            <Person2Icon sx={{ color: '#fff' }} />
                                        </Box>
                                    </Box>

                                </Box>



                            </Menu>






                            <Box className="menu-logo">
                                <Image src={isMobile || scrolling ? scrolledLogo : logo} alt="logo" width={122} />
                            </Box>
                        </Box>




                        <Box className="navbar-items" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 0, color: scrolling ? 'white !important' : 'black !important' }}
                                >
                                    <Typography className={`navbar-link${scrolling ? ' scrolling' : 'noscroll'}`}>
                                        <Link href="#" sx={{ color: scrolling ? 'white' : 'black' }}>{page}</Link>
                                    </Typography>
                                </Button>
                            ))}
                        </Box>

                        <Box className="language-box" sx={{ flexGrow: 0 }}>
                            <Button onClick={handleOpenPopover}>
                                <Typography className={`navbar-link${isMobile || scrolling ? ' scrolling' : 'noscroll'}`}>
                                    English<ArrowDropDownTwoToneIcon sx={{ color: isMobile || scrolling ? 'white' : 'rgba(0, 0, 0, 0.54)' }} />
                                </Typography>
                            </Button>
                            <Popover
                                open={Boolean(anchorEl)}
                                anchorEl={anchorEl}
                                onClose={handleClosePopover}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuList>
                                    <MenuItem onClick={() => handleLanguageSelect('English')}>English</MenuItem>
                                    <MenuItem onClick={() => handleLanguageSelect('Hindi')}>Hindi</MenuItem>
                                    <MenuItem onClick={() => handleLanguageSelect('Spanish')}>Spanish</MenuItem>
                                </MenuList>
                            </Popover>


                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >


                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Box>
            </Box>

        </>

    )
}

export default Navbar
