import { List, Divider } from '@mui/material';
import SideNavSingleItem from './sideNavSingleItem';
import NavItemAccordian from './navItemAccordian';

type NavToggle = {
    toggleNav: Boolean
}


const SideNavItem = (props: NavToggle) => {
    return (
        <>
            {/* Divider */}
            <Divider sx={{ my: 3, border: "none!important", height: "2px", background: "#F2F6FE", width: "160px" }} />

            {/* Nav List */}
            <List sx={{ p: 0 }}>
                {/* Nav Item */}
                <SideNavSingleItem />
            </List>

            {/* Divider */}
            <Divider sx={{ my: 3, p: 0, border: "none!important", height: "2px", background: "#F2F6FE", width: "160px" }} />

            {/* Nav Drop Down */}
            <NavItemAccordian checkToggle={props.toggleNav} />
        </>
    )
}


export default SideNavItem;