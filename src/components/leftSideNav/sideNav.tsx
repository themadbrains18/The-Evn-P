import { useEffect, useState } from 'react';
import { Box, Typography,Divider,IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import SideNavItem from './sideNavItem';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

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
                    <IconButton aria-label="Toggle Nav" sx={{ mb: "34px" }} onClick={() => { setToggleNav(!toggleNav) }}>
                        <FormatAlignLeftIcon  sx={{color:"#878f97"}} />
                    </IconButton>
                    {/* Logo  */}
                    <Box >
                        <Link to="/"  >
                            <Box component="img" sx={{ maxWidth: 'unset' }} src={require(`../../assets/img/${toggleNav ? "short-logo" : 'logo'}.png`)} alt="logo" />
                        </Link>
                    </Box>
                    {/* Divider */}
                    <Divider sx={{ my: { lg: 3, xs: 2 }, borderBottomWidth: "2px" }} />
                    <Box sx={{ overflow: "hidden" }}>
                        {/*  Navigation */}
                        <SideNavItem />
                    </Box>
                </Box>
                {/* Developed Logo  */}
                <Box >
                    {!toggleNav &&
                    <Typography  variant="body2" sx={{ mb: 1.5,  color: "secondary.dark"}}>
                        Developed by
                    </Typography>}
                    <Box component="img" sx={{ maxWidth: "unset" }} src={require(`../../assets/img/${toggleNav ? "short-dev-logo" : 'devby'}.png`)} alt="logo" />
                </Box>
            </Box>
        </>
    )
}
export default SideNav;