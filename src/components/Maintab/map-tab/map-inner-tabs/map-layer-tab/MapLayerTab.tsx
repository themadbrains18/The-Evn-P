import { Box} from '@mui/material';
import MapInnerTabHeading from "../MapInnerTabHeading";
import MapLayerListItem from "./MapLayerListItem";

const MapLayerTab = () => {
    return (
        <>
            <MapInnerTabHeading heading={"Map Layers"} />
            <Box component="form">
                <MapLayerListItem/>
            </Box>
        </>
    );
}
export default MapLayerTab;