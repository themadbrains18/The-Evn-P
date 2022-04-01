import { Box, Typography, Checkbox, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const useStyles = makeStyles({
    location_card: {
        padding: "30px",
        borderRadius: "5px",
        background: "#F9FAFC"
    },

    card_heading: {
        borderBottom: "1px solid rgba(135, 148, 195, 0.3)",
        paddingBottom: "20px",
        textAlign: "center"
    },
    checkbox_txt: {
        "& svg": {
            color: "rgba(0, 0, 0, 0.2)",
            height: "24px",
            width: "24px",
        },
        "& span": {
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#8794C3",
        },
        "& .Mui-checked svg path": {
            color: "#5D5FEF",
        },
    },
});


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
    const classes = useStyles();
    return (
        <>
            <Grid sx={{ mt: "24px" }} item xs={4}>
                <Box className={classes.location_card}>
                    <Typography className={classes.card_heading} sx={{ color: "#000", fontWeight: 600, fontSize: "20px", lineHeight: "22px" }} component={"h3"}>
                        {props.cardHeading}
                    </Typography>
                    <FormGroup>
                        <Grid sx={{ mt: "16px" }} container spacing={2}>
                            {checckBoxList.map((item) => {
                                return (
                                    <Grid item xs={6}>
                                        <FormControlLabel className={classes.checkbox_txt} sx={{ color: "#8794C3", fontWeight: "500", fontSize: "14px", lineHeight: "16px" }}
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




