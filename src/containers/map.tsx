
import MapArea from "../components/mainTab/mapTab/mapArea";
import MapInnerTabs from "../components/mainTab/mapTab/mapRightInnerTabs/mapInnerTabs";
import { Box } from "@mui/material";

const Map = () => {
    return (
        <>
            <Box sx={{ display: "grid", gridTemplateColumns: { xl: "1fr 369px", lg: "1fr 300px", xs: "1fr 250px" }, height: "1" }}>
                <MapArea />
                <Box sx={{ overflowY: "scroll", overflowX: "hidden", backgroundColor: "background.default" }}>
                    <MapInnerTabs />
                </Box>
            </Box>
        </>
    )
}
export default Map;