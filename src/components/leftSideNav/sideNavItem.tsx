import { List, Divider } from '@mui/material';
import SideNavSingleItem from './sideNavSingleItem';

const SideNavItem = () => {
    return (
        <>
            {/* Divider */}
            <Divider sx={{ my: { lg: 3, xs: 2 }, border: "none!important", height: "2px", background: "#F2F6FE", width: "160px" }} />
            {/* Nav Item */}
            <SideNavSingleItem />
        </>
    )
}
export default SideNavItem;