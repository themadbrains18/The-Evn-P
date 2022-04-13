
import MapArea from "../components/mainTab/mapTab/mapArea";
import MapInnerTabs from "../components/mainTab/mapTab/mapRightInnerTabs/mapInnerTabs";
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