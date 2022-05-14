import { useEffect, useState } from 'react';
import { Box, Typography,Divider } from '@mui/material';
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
            <Box sx={{ overflowY: "scroll", overflowX: "hidden", transition: "0.3s", p: { lg: "22px 30px 40px", xs: "22px 20px 40px 10px" }, whiteSpace: "nowrap", display: "flex", flexDirection: "column", justifyContent: "space-between",backgroundColor: "background.paper" }} id="navBar" style={{ maxWidth: toggleNav === true ? `${navBarWidth}px` : `${defaultNavBarWidth}px` }}>
                <Box >
                    {/* Toggle   */}
                    <Box component="button" sx={{ mb: "34px" }} onClick={() => { setToggleNav(!toggleNav) }}>
                        <Box component="img" sx={{ maxWidth: "unset" }} src={require(`../../assets/svg/nav-toggle.svg`).default} alt="nav Toggle" />
                    </Box>
                    
                    {/* Logo  */}
                    <Box>
                        <Link to="/"  >
                            <Box component="img" sx={{ maxWidth: 'unset' }} src={require(`../../assets/img/${toggleNav ? "short-logo" : 'logo'}.png`)} alt="logo" />
                        </Link>
                    </Box>

                    {/* Divider */}
                    <Divider sx={{ my: { lg: 3, xs: 2 }, border: "none!important", height: "2px", background: "#F2F6FE", width: "160px" }} />

                    <Box sx={{ overflow: "hidden" }}>
                        {/*  Navigation */}
                        <SideNavItem />
                    </Box>
                </Box>
                {/* Developed Logo  */}
                <Box >
                    {!toggleNav &&
                        <Typography component="span" sx={{ mb: 1.5, display: "block", color: "secondary.dark", fontSize: 12, lineHeight: "13px" }}>
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