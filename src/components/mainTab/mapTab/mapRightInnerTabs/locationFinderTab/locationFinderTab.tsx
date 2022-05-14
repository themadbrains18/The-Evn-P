import { Typography, Box, Divider, List, Paper, InputBase, IconButton, Button } from '@mui/material';
import MapInnerTabHeading from "../mapInnerTabHeading";
import LocationSearch from "./locationSearch";
import SearchItems from "./searchItems";
import { useState } from 'react';

const LocationFinderTab = () => {


    const [fileUploadName, SetFileUploadName] = useState('');
    const [itemoutput, setitemvalue] = useState(["india"]);
    const [searchValue, SetsearchValue] = useState("");

    const fileUpload = (e: any) => {
        if (e.target.files[0].name) {
            SetFileUploadName(e.target.files[0].name);
        }
    }

    const removeFile = () => {
        SetFileUploadName('');
        let fileField: any = document.querySelector("#ChooseFile");
        fileField.value = "";
    }

    const searchBtn = (e: any) => {
        SetsearchValue(e.target.value);
    }

    const reserForm = (e: any) => {
        // Empty search Field  
        SetsearchValue("");

        // Empty file Field  
        removeFile();
    }

    const submitBtn = () => {
        setitemvalue((olditems: any) => {
            return [...olditems, searchValue]
        });
        SetsearchValue("");
    }

    // Clear Data From Search Dropdown
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
        SetremoveDropdown(!removeDropdown);
    }


    // Drag File Code
    const handleDragOver: any = (e: any) => {
        let InnerInput = document.querySelector(".drop-zone__input");
        InnerInput?.setAttribute("style", "z-index:1")
    };
    const handleDrop: any = (e: any) => {
        let InnerInput = document.querySelector(".drop-zone__input");
        InnerInput?.setAttribute("style", "z-index:-1")
    };
    return (
        <>
            <Box sx={{ position: "relative" }}>
                {/* Tab Heading */}
                <MapInnerTabHeading heading={"Location Finder"} />
                <Paper component="form" sx={{ boxShadow: "0", borderRadius: "0" }}>
                    {/* Location Search */}
                    <Typography variant='h6' component={"h4"} sx={{  marginTop: "22px", fontWeight: "fontWeightMedium", marginBottom: "10px", }} >Location Search</Typography>
                    <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", border: "1px solid rgba(0, 0, 0, 0.12)", boxShadow: "0" }}>
                        <InputBase onClick={opendropdownBtn} onChange={searchBtn} value={searchValue} 
                            sx={{ ml: 1, flex: 1}} placeholder="Search a location...." inputProps={{ 'aria-label': 'Search a location....' }} />
                        <IconButton onClick={submitBtn} type="submit" sx={{ p: '11px' }} aria-label="search">
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </IconButton>
                    </Box>
                    <Divider sx={{ padding: "9.5px 0", margin: "9px 0 4px " }} flexItem>
                        OR
                    </Divider>
                    {/* Upload File */}
                    <Box onDrop={e => handleDrop(e)} onDragOver={(e: any) => handleDragOver(e)} sx={{ padding: `${fileUploadName === "" ? "32px 24px" : "24px"}`, border: "1px dashed #979797" }}>
                        <Box sx={{ display: `${fileUploadName === "" ? "block" : "none"}` }}>
                            <Typography variant='h6' sx={{
                                textAlign: "center"
                            }} component={"h5"}>Drop CSV file or browse</Typography>
                            <Box sx={{ marginTop: "10px", textAlign: "center" }}>
                                <Typography variant='subtitle1' component="label" sx={{
                                    backgroundColor: "primary.light",
                                    borderRadius: "6px",
                                    color: "common.white",
                                    padding: "6px 8px",
                                    cursor: "pointer",
                                }} htmlFor="ChooseFile"> Browse</Typography>
                                <Box className='drop-zone__input' component="input" sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50% , -50%)",
                                    opacity: "0",
                                    height: "100%",
                                    zIndex: "-1",
                                    width: "100%",
                                }} type="file" id="ChooseFile" name="Browse" onChange={(e: any) => { fileUpload(e) }} />
                            </Box>
                        </Box>

                        <Box sx={{ display: `${fileUploadName === "" ? "none" : "flex"}`, alignItems: "center", justifyContent: "center", width: "max-content", mx: "auto", backgroundColor: "default", boxShadow: "1", borderRadius: "14px", p: "16px 20px" }}>
                            <img src={require("../../../../../assets/svg/file-icon.svg").default} alt="" />
                            <Typography variant='body2' sx={{
                                ml: "8px",
                                mr: "4px",
                                fontWeight: "fontWeightMedium",
                            }} component={"span"}>{fileUploadName}</Typography>
                            <Box onClick={removeFile} sx={{ height: "14px", width: "14px", background: "#FF5722", boxShadow: "1", display: "grid", placeItems: "center", borderRadius: "50%", cursor: "pointer" }}>
                                <img src={require("../../../../../assets/svg/delete-icon.svg").default} alt="" />
                            </Box>
                        </Box>
                    </Box>
                    <Divider sx={{ padding: "9.5px 0", color: "#4F4F4F", margin: "9px 0 4px ", fontWeight: "500", fontSize: { lg: "14px", xs: "12px" }, lineHeight: "16px" }} flexItem>
                        OR
                    </Divider>
                    {/* Latitude & Longtitude */}
                    <Typography variant='h6' component={"h4"} sx={{  marginBottom: "10px", }} >Latitude & Longtitude</Typography>
                    <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', border: "1px solid rgba(0, 0, 0, 0.12)", boxShadow: "0" }}>
                        <InputBase sx={{ ml: 1, flex: 1}}
                            placeholder="Search a location...." inputProps={{ 'aria-label': 'Search a location....' }} />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19M19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1M19 10H1M10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10M10 19C11.657 19 14 14.97 14 10C14 5.03 11.657 1 10 1M10 19V1M10 19C8.343 19 6 14.97 6 10C6 5.03 8.343 1 10 1M10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10" stroke="#4F4F4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </IconButton>
                    </Box>
                    {/* Buttons  */}
                    <Box sx={{ marginTop: "27px", textAlign: "end" }}>
                        <Button sx={{
                            padding: "16px 29px",
                        }} variant="outlined" type="reset" onClick={reserForm}>Clear</Button>

                        <Button sx={{
                            marginLeft: "14px",
                            padding: "16px 29px"
                        }} variant="contained">Go</Button>
                    </Box>

                    {/* Search dropdown */}
                    {removeDropdown && (
                        <>
                            <Box sx={{
                                position: "absolute",
                                top: "150px",
                                background: "#fff",
                                width: "100%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                boxShadow: "1",
                                borderRadius: "4px",
                                padding: "10px",
                                zIndex: "10"
                            }}>
                                {/* Search Options */}
                                <LocationSearch itemsNumber={itemoutput.length} clearData={clearData} />
                                <List sx={{ maxHeight: "400px", overflowY: "scroll" }} component="ul">
                                    {itemoutput.map((itemvalue, index) => {
                                        return (
                                            <SearchItems
                                                key={index}
                                                recordid={index}
                                                searcHeading={itemvalue}
                                                clearData={clearData} />
                                        )
                                    })}
                                </List>
                            </Box>
                            <Typography onClick={opendropdownBtn} sx={{ position: "fixed", top: "0", left: "0", height: "100%", width: "100%", zIndex: "9", display: "block" }} component={"span"}>
                            </Typography>
                        </>
                    )}
                </Paper>
            </Box>
        </>
    );
}
export default LocationFinderTab;