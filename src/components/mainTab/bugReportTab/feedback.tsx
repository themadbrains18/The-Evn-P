import { Box, Typography, MenuItem, FormControl, Button } from '@mui/material';
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from 'react';

const BugreportForm = () => {
    const [fileUploadName, SetFileUploadName] = useState('');
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
        <Box sx={{ p: "30px", backgroundColor: "background.default" }}>
            <form >
                <Typography variant='subtitle1' sx={{ mb: "10px" }} >
                    Theme
                </Typography>
                <FormControl required fullWidth>
                    <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty>
                        <MenuItem value="">
                            Web App Error
                        </MenuItem>
                        <MenuItem value={10}>1</MenuItem>
                        <MenuItem value={20}>2</MenuItem>
                        <MenuItem value={30}>3</MenuItem>
                    </Select>
                </FormControl>
                {/* Text Area Input */}
                <Typography variant='subtitle1' sx={{ m: "30px 0 10px" }} >
                    Description
                </Typography>
                <Box  sx={{ "& textarea ": { width: "1", height: "200px!important", border: "1px solid rgba(0, 0, 0, 0.23)", p: "12px 15px", "&:focus": { outlineColor: "#0F75BC" } } }}>
                    <TextareaAutosize 
                        aria-label="description"
                    />
                </Box>

                {/* Drop File Input  */}
                <Box sx={{ position: "relative" }}>
                    
                    {/* Upload File */}
                    <Typography variant='subtitle1' sx={{ display: "block", m: "30px 0 10px" }}>
                        Drop File Here
                    </Typography>
                    <Box onDrop={e => handleDrop(e)} onDragOver={(e: any) => handleDragOver(e)} sx={{ position: "relative", display: "grid", placeItems: "center", height: "200px", p: `${fileUploadName === "" ? "32px 24px" : "24px"}`, border: "1px dashed #979797" }}>
                        {/* Text Area Input */}
                        <Box sx={{ display: `${fileUploadName === "" ? "block" : "none"}` }}>
                            <Typography variant='subtitle1' sx={{
                                textAlign: "center"
                            }} component={"h5"}>Drop  file or browse</Typography>
                            <Box sx={{ mt: "20px", textAlign: "center" }}>
                                <Typography variant='subtitle1' component="label" sx={{
                                    backgroundColor: "primary.light",
                                    borderRadius: " 6px",
                                    color: "common.white",
                                    p: "6px 8px",
                                    cursor: "pointer",
                                }} htmlFor="ChooseFile"> Browse</Typography>

                                <Box className='drop-zone__input' sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50% , -50%)",
                                    opacity: "0",
                                    height: "1",
                                    zIndex: "-1",
                                    width: "1",
                                }} component="input" type="file" id="ChooseFile" name="Browse" onChange={(e: any) => { fileUpload(e) }} />
                            </Box>
                        </Box>

                        <Box sx={{ display: `${fileUploadName === "" ? "none" : "flex"}`, alignItems: "center", justifyContent: "center", width: "max-content", mx: "auto", backgroundColor: "background.default", boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.06)", borderRadius: "14px", p: "16px 20px" }}>
                            <img src={require("../../../assets/svg/file-icon.svg").default} alt="" />
                            <Typography variant='body2' sx={{
                                ml: "8px",
                                mr: "4px",
                            }} component={"span"}>{fileUploadName}</Typography>
                            <Box onClick={removeFile} sx={{ height: "14px", width: "14px", background: "#FF5722", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.12)", display: "grid", placeItems: "center", borderRadius: "50%", cursor: "pointer" }}>
                                <img src={require("../../../assets/svg/delete-icon.svg").default} alt="" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* Button */}
                <Box sx={{ mt: "22px", textAlign: "end" }}>
                    <Button variant="outlined" type="reset" >Clear</Button>
                    <Button type="submit" sx={{
                        ml: "14px",
                    }} variant="contained" >Submit</Button>
                </Box>
            </form>
        </Box >
    );
}
export default BugreportForm;