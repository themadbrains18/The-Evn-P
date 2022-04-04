
import MapArea from "../components/Maintab/map-tab/mapArea";
import MapInnerTabs from "../components/Maintab/map-tab/map-inner-tabs/mapInnerTabs";
import { Box } from "@mui/material";

const Map = () => {
    return (
        <>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 369px", height: "100%"  }}>
                {/* margin user for hide scroll bar */}
                <Box>
                    <MapArea />
                </Box>
                <Box sx={{overflowY:"scroll",overflowX:"hidden", background: "#fff"}}>
                    <MapInnerTabs />
                </Box>
            </Box>

        </>
    )
}

export default Map;