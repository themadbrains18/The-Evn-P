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

const cardBtn = [
    {
        BtnIcon: <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4707 10V10.75C1.4707 11.3467 1.7217 11.919 2.16848 12.341C2.61526 12.7629 3.22122 13 3.85306 13H11.7942C12.4261 13 13.032 12.7629 13.4788 12.341C13.9256 11.919 14.1766 11.3467 14.1766 10.75V10M11.0001 7L7.82364 10M7.82364 10L4.64717 7M7.82364 10V1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        BtnName: "KMZ"
    },
    {
        BtnIcon: <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4707 10V10.75C1.4707 11.3467 1.7217 11.919 2.16848 12.341C2.61526 12.7629 3.22122 13 3.85306 13H11.7942C12.4261 13 13.032 12.7629 13.4788 12.341C13.9256 11.919 14.1766 11.3467 14.1766 10.75V10M11.0001 7L7.82364 10M7.82364 10L4.64717 7M7.82364 10V1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        BtnName: "CSV"

    }
]
const LocationCardList = () => {
    return (
        <Typography variant='h4' sx={{ padding: "30px", background: "common.white" }}>
            {/* Select Basins */}
            <Typography variant='subtitle1' component={"h3"} sx={{ color: "common.black" }}>
                Select Basins
            </Typography>
            <Paper component="form"
                sx={{ width: "1", mt: "22px", border: "1px solid rgba(135, 148, 195, 0.3)", borderRadius: "5px", boxShadow: "none" }}>
                <InputBase sx={{ p: '10.5px 20px', flex: 1, width: "1", }}
                    placeholder="All Basins" inputProps={{ 'aria-label': 'Search a location....' }} />
            </Paper>
            {/* Grid Card */}
            <Grid container spacing={{ xl: 3.8, lg: 3, xs: 1 }} >
                {cardDtat.map((val, index) => {
                    return (
                        <LocationCard key={index} cardHeading={val.cardHeading} />
                    )
                })}
                <Box sx={{ width: "1", textAlign: "end", marginTop: "30px" }}>
                    {cardBtn.map((value) => {
                        return (
                            <Button variant="contained" sx={{ p: { lg: "12px 16px", xs: "10px 16px" }, mr: "20px", gap: "12px" }}>
                                {value.BtnIcon}
                                {value.BtnName}
                            </Button>
                        )
                    })}
                </Box>
            </Grid >
        </Typography >
    );
}
export default LocationCardList;