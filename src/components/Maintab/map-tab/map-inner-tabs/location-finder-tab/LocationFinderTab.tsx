import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Typography, Box, Divider } from '@mui/material';
import MapInnerTabHeading from "../MapInnerTabHeading";
// import LocationSearch from "./LocationSearch";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    map_location_heading: {
    },
    map_location_btn: {
        "&:hover": {
            backgroundColor: '#0F75BC!important',
            color: "#fff"
        }
    },

    choose_file: {
        background: "#8794C4",
        borderRadius: " 6px",
        color: "#fff",
        padding: "6px 8px",
        position: "absolute",
        textAlign: "center",
        marginTop: "10px",
        cursor: "pointer"
    },
    empty_line: {
        height: "1px",
        width: "100%",

        background: "#000",

        display: "block"
    },
    browse_heading: {
    },
    input_browse: {
        visibility: "hidden"
    },
    remove_list: {
        display: "flex",
        alignItems: "center",
        gap: "6.4px",
        "& span": {
            color: "#FF5722"
        }
    }
})
const LocationFinderTab = () => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <MapInnerTabHeading heading={"Location Finder"} />
                <Typography className={classes.map_location_heading} component={"h4"} sx={{ fontSize: "14px", marginTop: "22px", lineHeight: "16px", fontWeight: "500", color: "#000000", marginBottom: "10px", }} >Location Search</Typography>
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", border: "1px solid rgba(0, 0, 0, 0.12)", boxShadow: "none" }}>
                    <InputBase sx={{ ml: 1, flex: 1, fontWeight: "500", fontSize: "14px", lineHeight: " 16px" }} placeholder="Search a location...." inputProps={{ 'aria-label': 'Search a location....' }} />
                    <IconButton type="submit" sx={{ p: '11px' }} aria-label="search">
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </IconButton>
                </Paper>
                <Divider sx={{
                    padding: "9.5px 0", color: "#4F4F4F", margin: "9px 0 4px ", fontWeight: "500", fontSize: "14px",
                    lineHeight: "16px"
                }} flexItem>
                    OR
                </Divider>
                <Box sx={{ padding: "32px 60px 50px", border: "1px dashed #979797" }}>
                    <Typography className={classes.browse_heading} sx={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "14px",
                        linHeight: "16px"
                    }} component={"h5"}>Drop CSV file or browse</Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <label className={classes.choose_file} htmlFor="ChooseFile"> Browse</label>
                        <input className={classes.input_browse} type="file" id="ChooseFile" name="Browse" multiple />
                    </Box>
                </Box>
                <Divider sx={{
                    padding: "9.5px 0", color: "#4F4F4F", margin: "9px 0 4px ", fontWeight: "500", fontSize: "14px",
                    lineHeight: "16px"
                }} flexItem>
                    OR
                </Divider>
                <Typography className={classes.map_location_heading} component={"h4"} sx={{ fontSize: "14px", lineHeight: "16px", fontWeight: "500", color: "#000000", marginBottom: "10px", }} >Latitude & Longtitude</Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", border: "1px solid rgba(0, 0, 0, 0.12)", boxShadow: "none" }}
                >
                    <InputBase sx={{ ml: 1, flex: 1, fontWeight: "500", fontSize: "14px", lineHeight: " 16px" }}
                        placeholder="Search a location...." inputProps={{ 'aria-label': 'Search a location....' }} />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19M19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1M19 10H1M10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10M10 19C11.657 19 14 14.97 14 10C14 5.03 11.657 1 10 1M10 19V1M10 19C8.343 19 6 14.97 6 10C6 5.03 8.343 1 10 1M10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10" stroke="#4F4F4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </IconButton>
                </Paper>
                <Box sx={{ marginTop: "27px", textAlign: "end" }}>
                    <Button className={classes.map_location_btn} sx={{
                        border: "1px solid #0F75BC", borderRadius: "6px", padding: "16px 29px", color: "#0F75BC",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "1",
                    }} variant="outlined">Clear</Button>

                    <Button className={classes.map_location_btn} sx={{
                        border: "1px solid #0F75BC", borderRadius: "6px", padding: "16px 29px", color: "#0F75BC", marginLeft: "14px",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "1",
                    }} variant="outlined">Go</Button>
                </Box>
                <Box>
                    <Box sx={{}}>
                        <Typography component={"h5"}>
                            Search Results: 5
                        </Typography>
                        <Button className={classes.remove_list}>
                            <svg width={12} height={14} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.20002 0.599976C5.0515 0.600055 4.90592 0.641482 4.7796 0.719617C4.65329 0.797753 4.55122 0.909511 4.48482 1.04238L3.90562 2.19998H1.20002C0.987851 2.19998 0.784368 2.28426 0.634339 2.43429C0.48431 2.58432 0.400024 2.7878 0.400024 2.99998C0.400024 3.21215 0.48431 3.41563 0.634339 3.56566C0.784368 3.71569 0.987851 3.79998 1.20002 3.79998V11.8C1.20002 12.2243 1.3686 12.6313 1.66865 12.9313C1.96871 13.2314 2.37568 13.4 2.80002 13.4H9.20003C9.62437 13.4 10.0313 13.2314 10.3314 12.9313C10.6315 12.6313 10.8 12.2243 10.8 11.8V3.79998C11.0122 3.79998 11.2157 3.71569 11.3657 3.56566C11.5157 3.41563 11.6 3.21215 11.6 2.99998C11.6 2.7878 11.5157 2.58432 11.3657 2.43429C11.2157 2.28426 11.0122 2.19998 10.8 2.19998H8.09443L7.51522 1.04238C7.44883 0.909511 7.34676 0.797753 7.22045 0.719617C7.09413 0.641482 6.94855 0.600055 6.80002 0.599976H5.20002ZM3.60002 5.39998C3.60002 5.1878 3.68431 4.98432 3.83434 4.83429C3.98437 4.68426 4.18785 4.59998 4.40002 4.59998C4.6122 4.59998 4.81568 4.68426 4.96571 4.83429C5.11574 4.98432 5.20002 5.1878 5.20002 5.39998V10.2C5.20002 10.4121 5.11574 10.6156 4.96571 10.7657C4.81568 10.9157 4.6122 11 4.40002 11C4.18785 11 3.98437 10.9157 3.83434 10.7657C3.68431 10.6156 3.60002 10.4121 3.60002 10.2V5.39998ZM7.60003 4.59998C7.38785 4.59998 7.18437 4.68426 7.03434 4.83429C6.88431 4.98432 6.80002 5.1878 6.80002 5.39998V10.2C6.80002 10.4121 6.88431 10.6156 7.03434 10.7657C7.18437 10.9157 7.38785 11 7.60003 11C7.8122 11 8.01568 10.9157 8.16571 10.7657C8.31574 10.6156 8.40003 10.4121 8.40003 10.2V5.39998C8.40003 5.1878 8.31574 4.98432 8.16571 4.83429C8.01568 4.68426 7.8122 4.59998 7.60003 4.59998Z" fill="#FF5722" />
                            </svg>
                            <Typography component={"span"}>
                                Remove List
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
export default LocationFinderTab;