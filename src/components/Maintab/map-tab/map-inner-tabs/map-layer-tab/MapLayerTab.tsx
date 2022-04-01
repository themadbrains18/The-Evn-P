import { Box } from '@mui/material';
import MapInnerTabHeading from "../mapInnerTabHeading";
import MapLayerListItem from "./mapLayerListItem";

const MapLayerTab = () => {
    return (
        <>
            <MapInnerTabHeading heading={"Map Layers"} />
            <Box component="form">
                <MapLayerListItem />
            </Box>
        </>
    );
}
export default MapLayerTab;