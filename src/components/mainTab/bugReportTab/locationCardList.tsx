import { Box, InputBase, Paper, Typography, Grid, Button } from '@mui/material';
import LocationCard from "./locationCard";
const cardDtat = [
    {
        cardHeading: "Select Persian Locations",
    },
    {
        cardHeading: "Select Bakken Locations",
    },
    {
        cardHeading: "Select Eagleford Locations",
    }
]
const LocationCardList = () => {
    return (
        <Box sx={{ p: "30px", background: "#fff", fontWeight: "500", fontSize: "20px", lineheight: "22px" }}>
            {/* Select Basins */}
            <Typography component={"h3"} sx={{ color: "#000000", fontSize: { lg: "16px", xs: "14px" } }}>
                Select Basins
            </Typography>
            <Paper component="form"
                sx={{ width: "100%", mt: "22px", border: "1px solid rgba(135, 148, 195, 0.3)", borderRadius: "5px", boxShadow: "none" }}>
                <InputBase sx={{ p: '10.5px 20px', flex: 1, fontWeight: "500", fontSize: "14px", lineHeight: " 16px", width: "100%", }}
                    placeholder="All Basins" inputProps={{ 'aria-label': 'Search a location....' }} />
            </Paper>
            {/* Grid Card */}
            <Grid container spacing={{ xl: 3.8, lg: 3, xs: 1 }} >
                {cardDtat.map((val, index) => {
                    return (
                        <LocationCard key={index} cardHeading={val.cardHeading} />
                    )
                })}
                <Box sx={{ width: "100%", textAlign: "end", mt: "30px" }}>
                    <Button variant="contained" sx={{ lineHeight: "13px", fontSize: { lg: "12px", xs: "10px" }, fontWeight: "400", p: { lg: "12px 16px", xs: "10px 16px" }, mr: "20px", gap: "12px" }}>
                        <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4707 10V10.75C1.4707 11.3467 1.7217 11.919 2.16848 12.341C2.61526 12.7629 3.22122 13 3.85306 13H11.7942C12.4261 13 13.032 12.7629 13.4788 12.341C13.9256 11.919 14.1766 11.3467 14.1766 10.75V10M11.0001 7L7.82364 10M7.82364 10L4.64717 7M7.82364 10V1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        KMZ
                    </Button>

                    <Button variant="contained" sx={{ lineHeight: "13px", fontSize: { lg: "12px", xs: "10px" }, fontWeight: "400", p: { lg: "12px 16px", xs: "10px 16px" }, gap: "12px" }}>
                        <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4707 10V10.75C1.4707 11.3467 1.7217 11.919 2.16848 12.341C2.61526 12.7629 3.22122 13 3.85306 13H11.7942C12.4261 13 13.032 12.7629 13.4788 12.341C13.9256 11.919 14.1766 11.3467 14.1766 10.75V10M11.0001 7L7.82364 10M7.82364 10L4.64717 7M7.82364 10V1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        CSV
                    </Button>
                </Box>
            </Grid >
        </Box >
    );
}
export default LocationCardList;