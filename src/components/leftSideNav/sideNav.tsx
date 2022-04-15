import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SideNavItem from './sideNavItem';

const SideNav = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const [navBarWidth, setNavBarWidth] = useState(null);
    const [defaultNavBarWidth, setdefaultNavBarWidth] = useState(null);

    useEffect(() => {
        const navBar = document.querySelector("#navBar") as any;
        setdefaultNavBarWidth(navBar.offsetWidth);
    }, []);

    useEffect(() => {

        if (window.innerWidth <= 1200) {
            let toggleNavWidth: any = 80;
            setNavBarWidth(toggleNavWidth);
        } else {
            let toggleNavWidth: any = 118;
            setNavBarWidth(toggleNavWidth);
        }
    }, [toggleNav]);
    return (
        <>
            <Box sx={{ overflowY: "scroll", overflowX: "hidden", transition: "0.3s", padding: { lg: "22px 30px 40px", xs: "22px 20px 40px 10px" }, background: "#fff", whiteSpace: "nowrap", display: "flex", flexDirection: "column", justifyContent: "space-between", }} id="navBar" style={{ maxWidth: toggleNav === true ? `${navBarWidth}px` : `${defaultNavBarWidth}px` }}>
                <Box sx={{ mb: 3 }}>
                    {/* Toggle   */}
                    <Box component="button" sx={{ marginBottom: "34px", lineHeight: "0" }} onClick={() => { setToggleNav(!toggleNav) }}>
                        <Box component="img" sx={{ maxWidth: "unset" }} src={require(`../../assets/svg/nav-toggle.svg`).default} alt="nav Toggle" />
                    </Box>
                    {/* Logo  */}
                    <Box component={Link} to="/" sx={{ display: "block" }} className="line-height-0">
                        <Box component="img" sx={{ maxWidth: 'unset' }} src={require(`../../assets/img/${toggleNav ? "short-logo" : 'logo'}.png`)} alt="logo" />
                    </Box>
                    {/*  Navigation */}
                    <Box component="nav" sx={{ overflow: "hidden" }}>
                        <SideNavItem />
                    </Box>
                </Box>
                {/* Developed Logo  */}
                <Box className="line-height-0">
                    {!toggleNav &&
                        <Typography component="span" sx={{ mb: 1.5, display: "block", color: "#979797", fontSize: 12, lineHeight: "13px" }}>
                            Developed by
                        </Typography>}
                    <Box>
                        <Box component="img" sx={{ maxWidth: "unset" }} src={require(`../../assets/img/${toggleNav ? "short-dev-logo" : 'devby'}.png`)} alt="logo" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default SideNav;