import BingMapsReact from "bingmaps-react";
import MapFilter from "./mapFilter";
import { Box } from '@mui/material';


const MapArea = () => {
    return (
        <>
            <Box sx={{ height: "100%", width: "1", position: "relative" }}>
                <BingMapsReact
                    bingMapsKey="Ale3xyjVbYBOroya7rsMi-cA0lDmzO6A2Qw61lfCyUJWftPneGLKNFLKXpv_DIIS"
                    height="1"
                    mapOptions={{
                        navigationBarMode: "square",
                    }}
                    
                    viewOptions={{
                        center: { latitude: 30.13770000, longitude: 74.20254300 },
                        mapTypeId: "grayscale",
                    }}
                />
                <MapFilter />
            </Box>
        </>
    );
}

export default MapArea;