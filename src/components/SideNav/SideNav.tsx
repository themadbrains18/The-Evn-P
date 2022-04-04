import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import SideNavItem from './sideNavItem';

const useStyles = makeStyles({
    NavToggle: {
        marginBottom: "34px",
        lineHeight: "0"
    },
    side_nav: {
        transition: "0.3s",
        padding: "22px 30px 40px",
        background: "#fff",
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& img": {
            maxWidth: "unset"
        }
    }
});

const SideNav = () => {
    const classes = useStyles();
    const [toggleNav, setToggleNav] = useState(false);
    const [navBarWidth, setNavBarWidth] = useState(null);

    useEffect(() => {
        const navBar = document.querySelector("#navBar") as any;
        setNavBarWidth(navBar.offsetWidth);
    }, []);
    
    return (
        <>
            <Box sx={{ overflowY: "scroll", overflowX: "hidden" }} className={classes.side_nav} id="navBar" style={{ maxWidth: toggleNav === true ? '118px' : `${navBarWidth}px` }}>
                <Box sx={{ mb: 3 }}>
                    {/* Toggle   */}
                    <Box component="button" className={classes.NavToggle} onClick={() => { setToggleNav(!toggleNav) }}>
                        <img src={require(`../../assets/svg/nav-toggle.svg`).default} alt="nav Toggle" />
                    </Box>
                    {/* Logo  */}
                    <Box component={Link} to="/" sx={{ display: 'block' }} className="line-height-0">
                        <img src={require(`../../assets/img/${toggleNav ? "short-logo" : 'logo'}.png`)} alt="logo" />
                    </Box>
                    {/*  Navigation */}
                    <Box component="nav" sx={{ overflow: "hidden" }}>
                        <SideNavItem toggleNav={toggleNav} />
                    </Box>
                </Box>
                {/* Developed Logo  */}
                <Box className="line-height-0">
                    {!toggleNav &&
                        <Typography component="span" sx={{ mb: 1.5, display: "block", color: "#979797", fontSize: 12, lineHeight: "13px" }}>
                            Developed by
                        </Typography>}

                    <Box>
                        <img src={require(`../../assets/img/${toggleNav ? "short-dev-logo" : 'devby'}.png`)} alt="logo" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default SideNav;