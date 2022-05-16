import { Box,  Typography, Grid, Button,OutlinedInput } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

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
        BtnIcon: <DownloadIcon />,
        BtnName: "KMZ"
    },
    {
        BtnIcon: <DownloadIcon />,
        BtnName: "CSV"
    }
]
const LocationCardList = () => {
    return (
        <Box  component="form"  sx={{ padding: "30px", backgroundColor: "background.default" }}>
            {/* Select Basins */}
            
            <Typography variant='subtitle1' component={"h3"} sx={{ color: "common.black",mb: "22px" }}>
                Select Basins
            </Typography>
                <OutlinedInput placeholder="All Basins" fullWidth type="text" required />
            {/* Grid Card */}
            <Grid container spacing={{ xl: 3.8, lg: 3, xs: 1 }} >
                {cardDtat.map((val, index) => {
                    return (
                        <LocationCard key={index} cardHeading={val.cardHeading} />
                    )
                })}
                <Box sx={{ width: "1", textAlign: "end", marginTop: "30px" }}>
                    {cardBtn.map((value,index) => {
                        return (
                            <Button key={index} variant="contained" startIcon={value.BtnIcon} size="small" sx={{ml:"15px"}}>
                                {value.BtnName}
                            </Button>
                        )
                    })}
                </Box>
            </Grid >
        </Box>
    );
}
export default LocationCardList;