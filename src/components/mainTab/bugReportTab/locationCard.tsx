import { Box, Typography, Checkbox, Grid } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const checckBoxList = [
    {
        "CheckboxLabel": "All Persian",
        "CheckboxLabelName": "All Persian",
    },
    {
        "CheckboxLabel": "Persian 1",
        "CheckboxLabelName": "Persian1",
    },
    {
        "CheckboxLabel": "Persian 2",
        "CheckboxLabelName": "Persian2",
    },
    {
        "CheckboxLabel": "Persian 3",
        "CheckboxLabelName": "Persian3",
    },
    {
        "CheckboxLabel": "Persian 4",
        "CheckboxLabelName": "Persian4",
    },
    {
        "CheckboxLabel": "Persian 5",
        "CheckboxLabelName": "Persian5",
    },
    {
        "CheckboxLabel": "Persian 6",
        "CheckboxLabelName": "Persian6",
    },
    {
        "CheckboxLabel": "Persian 7",
        "CheckboxLabelName": "Persian7",
    },
    {
        "CheckboxLabel": "Persian 8",
        "CheckboxLabelName": "Persian8",
    },
    {
        "CheckboxLabel": "Persian 9",
        "CheckboxLabelName": "Persian9",
    },
    {
        "CheckboxLabel": "Persian 10",
        "CheckboxLabelName": "Persian10",
    },
]

// Checkbox
const LocationCard = (props: any) => {
    return (
        <>
            <Grid sx={{ mt: "24px" }} item xl={4} lg={6} xs={12} >
                <Box sx={{ padding: "30px", borderRadius: "5px", background: "#F9FAFC" }}>
                    <Typography variant="h4" sx={{  borderBottom: "1px solid rgba(135, 148, 195, 0.3)", paddingBottom: "20px", textAlign: "center" }} component={"h3"}>
                        {props.cardHeading}
                    </Typography>
                    <FormGroup>
                        <Grid sx={{ mt: "16px" }} container spacing={2}>
                            {checckBoxList.map((item, index) => {
                                return (
                                    <Grid key={index} item xs={6}>
                                        <FormControlLabel sx={{
                                            color: "#8794C3", fontWeight: "500", fontSize: { lg: "14px", xs: "12px" }, lineHeight: "16px", "& svg": {
                                                color: "rgba(0, 0, 0, 0.2)",
                                                height: { lg: "24px", xs: "20px" },
                                                width: { lg: "24px", xs: "20px" },
                                            },
                                            "& span": {
                                                fontWeight: "400",
                                                fontSize: { lg: "14px", xs: "12px" },
                                                lineHeight: "16px",
                                                color: "#8794C3",
                                            },
                                            "& .Mui-checked svg path": {
                                                color: "#0F75BC",
                                            },
                                        }}
                                            control={<Checkbox name={item.CheckboxLabelName} />} label={item.CheckboxLabel} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </FormGroup>
                </Box>

            </Grid>
        </>
    )
}
export default LocationCard;




