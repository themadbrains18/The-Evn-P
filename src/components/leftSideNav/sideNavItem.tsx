import { NavLink } from "react-router-dom";
import { Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LanguageIcon from '@mui/icons-material/Language';
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import PestControlIcon from '@mui/icons-material/PestControl';
import LogoutIcon from '@mui/icons-material/Logout';
import AssessmentIcon from '@mui/icons-material/Assessment';

const SideNavItems = [
    {
        "NavItemIcon": <DashboardIcon fontSize="large" />,
        "NavItemTxt": "Dashboard",
        "NavItemLink": "/",
    },
    {
        "NavItemIcon": <LanguageIcon  fontSize="large"/>,
        "NavItemTxt": "Maps",
        "NavItemLink": "/maps",
    },
    {
        "NavItemIcon": <AssessmentIcon fontSize="large"/>,
        "NavItemTxt": "Reports",
        "NavItemLink": "/reports",
    },
    {
        "NavItemIcon": <DownloadIcon fontSize="large" />,
        "NavItemTxt": "Downloads",
        "NavItemLink": "/downloads",
    },
    {
        "NavItemIcon": <SettingsIcon  fontSize="large"/>,
        "NavItemTxt": "Settings",
        "NavItemLink": "/Settings",
    },
    {
        "NavItemIcon": <PestControlIcon fontSize="large"/>,
        "NavItemTxt": "Feedback",
        "NavItemLink": "/feedback",
    },
    {
        "NavItemIcon": <LogoutIcon fontSize="large"/>,
        "NavItemTxt": "Logout",
        "NavItemLink": "/login",
    },
];

const SideNavItem = () => {
    return (
        <>
            {/* Nav Item */}
            {SideNavItems.map((elem, index) => {
                return (
                    <Typography key={index} variant="h5" component={NavLink} to={elem.NavItemLink} sx={{mb: { lg: 3, xs: 2 }, p: { lg: "6px 10px", xs: "5px 10px" }, display :"flex",alignItems:"center",gap:"15px"}}>
                        {elem.NavItemIcon}
                        {elem.NavItemTxt}
                    </Typography>
                )
            })}
        </>
    )
}
export default SideNavItem;