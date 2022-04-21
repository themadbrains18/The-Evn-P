import { Box, Typography, MenuItem, FormControl, Button } from '@mui/material';
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from 'react';

const BugreportForm = () => {
    const [fileUploadName, SetFileUploadName] = useState('');
    // const [searchValue, SetsearchValue] = useState("");

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

    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    }

    return (
        <Box sx={{ padding: "30px", background: "#fff", fontWeight: "500", fontSize: "20px", lineheight: "22px", borderRadius: "5px" }}>
            <form >
                <Typography sx={{ fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "16px", color: "#000", marginBottom: "30px" }} component={"span"}>
                    Theme
                </Typography>
                <FormControl required fullWidth sx={{
                    "& svg": {
                        display: "none!important",
                    },
                    marginTop: "10px!important", minWidth: 120,
                    zIndex: "1"
                }}>
                    <Select
                        sx={{
                            fontSize: { lg: "14px", xs: "12px" }, color: "#000000", fontWeight: "500", lineHeight: "16px", "&>div": {
                                padding: "12px 15px",
                                minHeight: "initial!important",
                                " & span": {
                                    fontSize: { lg: "14px", xs: "12px" }, color: "#000000", fontWeight: "500", lineHeight: "16px",
                                },
                                position: "relative",
                                "&[aria-expanded=true]": {
                                    "&::after": {
                                        transform: "translateY(-50%) rotate(180deg)",
                                    }
                                },
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    backgroundImage: `url(${require("../../../assets/svg/filter-arrow-icon.svg").default})`,
                                    backgroundRepeat: "no-repeat",
                                    height: "10px",
                                    width: "19px",
                                    right: "15px",
                                    zIndex: "-1",
                                }
                            }
                        }}
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}

                    >
                        <MenuItem value="">
                            <Typography component={"span"}>Web App Error</Typography>
                        </MenuItem>
                        <MenuItem value={10}>1</MenuItem>
                        <MenuItem value={20}>2</MenuItem>
                        <MenuItem value={30}>3</MenuItem>
                    </Select>
                </FormControl>
                {/* Text Area Input */}
                <Typography sx={{ display: "block", fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "16px", color: "#000", margin: "30px 0 10px" }} component={"span"}>
                    Description
                </Typography>
                <Box sx={{ "& textarea ": { width: "100%", height: "200px!important", borderRadius: "4px", border: "1px solid rgba(0, 0, 0, 0.23)", padding: "12px 15px", fontSize: { lg: "14px", xs: "12px" }, color: "#000", fontWeight: "500", lineHeight: "16px", "&:focus": { outlineColor: "#0F75BC" } } }}>
                    <TextareaAutosize
                        aria-label="empty textarea"
                    />
                </Box>

                {/* Drop File Input  */}
                <Box sx={{ position: "relative" }}>
                    {/* Tab Heading */}
                    <Box sx={{ boxShadow: "none", borderRadius: "0" }}>
                        {/* Location Search */}

                        {/* Upload File */}
                        <Typography sx={{ display: "block", fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "16px", color: "#000", margin: "30px 0 10px" }} component={"span"}>
                            Drop File Here
                        </Typography>
                        <Box sx={{ display: "grid", placeItems: "center", height: "200px", padding: `${fileUploadName === "" ? "32px 24px" : "24px"}`, border: "1px dashed #979797" }}>
                            {/* Text Area Input */}

                            <Box sx={{ display: `${fileUploadName === "" ? "block" : "none"}` }}>
                                <Typography sx={{
                                    color: "#000",
                                    fontWeight: "500",
                                    fontSize: { lg: "16px", xs: "14px" },
                                    lineHeight: "16px",
                                    textAlign: "center"
                                }} component={"h5"}>Drop  file or browse</Typography>
                                <Box sx={{ marginTop: "10px", textAlign: "center" }}>
                                    <Box component="label" sx={{
                                        background: "#8794C4",
                                        borderRadius: " 6px",
                                        color: "#fff",
                                        padding: "6px 8px",
                                        textAlign: "center",
                                        fontSize: { lg: "16px", xs: "14px" },
                                        cursor: "pointer",
                                        display: "inline-block"
                                    }} htmlFor="ChooseFile"> Browse</Box>
                                    <Box component="input" sx={{ display: "none" }} type="file" id="ChooseFile" name="Browse" onChange={(e: any) => { fileUpload(e) }} />
                                </Box>
                            </Box>

                            <Box sx={{ display: `${fileUploadName === "" ? "none" : "flex"}`, alignItems: "center", justifyContent: "center", width: "max-content", mx: "auto", background: "#FFFFFF", boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.06)", borderRadius: "14px", p: "16px 20px" }}>
                                <img src={require("../../../assets/svg/file-icon.svg").default} alt="" />
                                <Typography sx={{
                                    ml: "8px",
                                    mr: "4px",
                                    color: "#000",
                                    fontWeight: "500",
                                    fontSize: "12px",

                                }} component={"span"}>{fileUploadName}</Typography>
                                <Box onClick={removeFile} sx={{ height: "14px", width: "14px", background: "#FF5722", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.12)", display: "grid", placeItems: "center", borderRadius: "50%", cursor: "pointer" }}>
                                    <img src={require("../../../assets/svg/delete-icon.svg").default} alt="" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* Button */}
                <Box sx={{ marginTop: "22px", textAlign: "end" }}>
                    <Button sx={{
                        border: "1px solid #0F75BC", borderRadius: "6px", padding: { lg: "16px 35px", xs: "13px 35px", width: "145px" }, color: "#0F75BC",
                        fontWeight: "600",
                        fontSize: { lg: "14px", xs: "12px" },
                        lineHeight: "1",
                        "&:hover": {
                            backgroundColor: '#0F75BC',
                            color: "#fff"
                        }
                    }} variant="outlined" type="reset" >Clear</Button>

                    <Button type="submit" sx={{
                        border: "1px solid #0F75BC", borderRadius: "6px", padding: { lg: "16px 35px", xs: "13px 35px", width: "145px" }, color: "#fff", marginLeft: "14px",
                        fontWeight: "600",
                        background: "#0F75BC",
                        fontSize: { lg: "14px", xs: "12px" },
                        lineHeight: "1",
                        "&:hover": {
                            backgroundColor: '#0F75BC',
                            color: "#fff"
                        }
                    }} variant="outlined" >Submit</Button>
                </Box>
            </form>
        </Box >
    );
}
export default BugreportForm;