
import Map from "./Map";
import MapInnerTabs from "./map-inner-tabs/MapInnerTabs";
import { Box } from "@mui/material";

const MainTab = () => {
    return (
        <>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 369px",height:"100%",width:"100%" }}>
                <Box>
                    <Map/>
                </Box>
                <Box>
                    <MapInnerTabs />
                </Box>
            </Box>
            
        </>
    )
}

export default MainTab;




