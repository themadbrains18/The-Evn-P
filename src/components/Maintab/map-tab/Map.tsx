import BingMapsReact from "bingmaps-react";
const Map = () => {
    return (
        <>
            <BingMapsReact
                bingMapsKey="Ale3xyjVbYBOroya7rsMi-cA0lDmzO6A2Qw61lfCyUJWftPneGLKNFLKXpv_DIIS"
                height="100%"
                mapOptions={{
                    navigationBarMode: "square",
                }}
                width="100%"
                viewOptions={{
                    center: { latitude: 30.13770000, longitude: 74.20254300 },
                    mapTypeId: "grayscale",
                }}
            />

        </>
    );
}

export default Map;