import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Typography, Box, Divider, List } from '@mui/material';
import MapInnerTabHeading from "../mapInnerTabHeading";
import LocationSearch from "./locationSearch";
import SearchItems from "./searchItems";
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

// Search Dropdown Option Data
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
    dropdown_items: {
        position: "absolute",
        top: "150px",
        background: "#fff",
        width: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        boxShadow: "0 0 10px #ccc",
        borderRadius: "4px",
        padding: "10px",


    },
    option_items: {
        "&::-webkit-scrollbar": {
            width: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
            width: "10px",
            background: "#ccc"
        }
    },
    browse_heading: {
    },
    input_browse: {
        visibility: "hidden"
    },
})
const LocationFinderTab = () => {
    const [itemoutput, setitemvalue] = useState(["india"])
    const [searchValue, SetsearchValue] = useState("")
    const searchBtn = (e: any) => {
        SetsearchValue(e.target.value)
    }
    const submitBtn = () => {
        setitemvalue((olditems: any) => {
            return [...olditems, searchValue]
        })
        SetsearchValue("")
    }

    const classes = useStyles();

    const clearData = (id: any) => {
        if (id !== 'undefined') {
            var array = [...itemoutput];
            var index = array.indexOf(id)
            if (index !== -1) {
                array.splice(index, 1);
                setitemvalue(array);
            }
        }
        else {
            setitemvalue([]);
            SetremoveDropdown(false);
        }
    }
    // Add Remove Dropdown
    const [removeDropdown, SetremoveDropdown] = useState(false);
    const opendropdownBtn = () => {
        SetremoveDropdown(!removeDropdown)
    }
    return (
        <>
            <Box sx={{ position: "relative" }}>
                <MapInnerTabHeading heading={"Location Finder"} />
                <Typography className={classes.map_location_heading} component={"h4"} sx={{ fontSize: "14px", marginTop: "22px", lineHeight: "16px", fontWeight: "500", color: "#000000", marginBottom: "10px", }} >Location Search</Typography>
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", border: "1px solid rgba(0, 0, 0, 0.12)", boxShadow: "none" }}>
                    <InputBase onClick={opendropdownBtn} onChange={searchBtn} value={searchValue} sx={{ ml: 1, flex: 1, fontWeight: "500", fontSize: "14px", lineHeight: " 16px" }} placeholder="Search a location...." inputProps={{ 'aria-label': 'Search a location....' }} />
                    <IconButton onClick={submitBtn} type="submit" sx={{ p: '11px' }} aria-label="search">
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
                {
                    removeDropdown && (
                        <Box className={classes.dropdown_items}>
                            {/* Search Options */}
                            <LocationSearch itemsNumber={itemoutput.length} clearData={clearData}
                            />
                            <List className={classes.option_items} sx={{
                                maxHeight: "400px", overflowY: "scroll"
                            }} component="ul">
                                {itemoutput.map((itemvalue, index) => {
                                    return (
                                        <SearchItems
                                            key={index}
                                            recordid={index}
                                            searcHeading={itemvalue}
                                            clearData={clearData}
                                        />
                                    )
                                })
                                }
                            </List>
                        </Box>
                    )
                }

            </Box>
        </>
    );
}
export default LocationFinderTab;