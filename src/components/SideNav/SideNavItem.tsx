import { List, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SideNavSingleItem from './SideNavSingleItem';
import NavItemAccordian from './NavItemAccordian';


const useStyles = makeStyles({
    divider: {
        border: "none!important",
        height: "2px",
        background: "#F2F6FE",
        width: "160px",
    },
});

const SideNavItem = () => {
    const classes = useStyles();
    return (
        <>
            {/* Divider */}
            <Divider className={classes.divider} sx={{ my: 3 }} />

            {/* Nav List */}
            <List sx={{ p: 0 }}>
                {/* Nav Item */}
                <SideNavSingleItem />
            </List>

            {/* Divider */}
            <Divider className={classes.divider} sx={{ my: 3, p: 0 }} />

            {/* Nav Drop Down */}
            <NavItemAccordian/>
        </>
    )
}


export default SideNavItem;