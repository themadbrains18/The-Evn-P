// Setting Profile Acccount
import { Box, Typography, Button } from "@mui/material";
import EditPassword from "../components/loginForm/editPassword"
import { useState } from "react";
import InputComp from '../components/loginForm/inputComp';
import EditIcon from '@mui/icons-material/Edit';
const Setting = () => {
    // Edit Password State 
    const [OpenEditPswd, SetOpenEditPswd] = useState(false)
    const EditPasswordBtn = () => {
        SetOpenEditPswd(!OpenEditPswd);
    }
    const EditPasswordBtnform = () => {
        SetOpenEditPswd(!OpenEditPswd);
        setTimeout(() => {
            alert("Password Updated");
        }, 100);
    }

    // Setting Form Data
    const SettingFormDatat=[
        {
            label:"First Name",
            placeHolder:"Samantha",
            inputtype:"text",
            gridSpan:""
        },
        {
            label:"Last Name",
            placeHolder:"William",
            inputtype:"text",
            gridSpan:""
        },
        {
            label:"Email Address",
            placeHolder:"samantha@gmail.com",
            inputtype:"email",
            gridSpan:"span 2"
            
        },
        {
            label:"Areas of Interest",
            placeHolder:"Bakken, Permian",
            inputtype:"text",
            gridSpan:"span 2"
        }
        
    ]
    return (
        <>
            {/* Edit Passsword Popup */}
            {OpenEditPswd && <EditPassword ClickBtn={EditPasswordBtn} UpdatePassword={EditPasswordBtnform} />}
            <Box sx={{
                m: { xl: "38px 79px 38px 38px", lg: " 27px 24px 24px ", xs: "27px 24px 24px " }
            }}>
                {/* Screen Heading */}
                <Typography variant="h3" sx={{ borderBottom: "2px solid #DEDEDE", pb: "24px", mb: "30px" }} component={"h2"}>
                    User Account
                </Typography>
                {/* Account Form  */}
                <Box sx={{ p: "40px 30px 36px", backgroundColor: "background.default" }}>
                    <form action="">
                        
                            {/* Account prifile  */}
                            <Box sx={{ display: { md: "flex" }, justifyContent: "space-between", alignItems: "center", pb: "24px", borderBottom: "2px solid #DEDEDE" }}>
                                <Box sx={{ mb: { md: "0px", xs: "30px"}}} >
                                        <Typography variant="h3" sx={{color: "primary.contrastText"}}>
                                            Samantha William
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{
                                            display: "block", color: "secondary.dark",
                                            mt: "12px"
                                        }} component={"span"}>
                                            samantha@gmail.com
                                        </Typography>
                                </Box>
                                <Box sx={{
                                    "& button": {
                                        gap: "12px",
                                        border: "1px solid #0F75BC",
                                        color: "primary.main",
                                        p: "16px 35px ",
                                        "&:hover": { backgroundColor: "primary.main"}
                                    }
                                }}>
                                    <Button  type="button" onClick={EditPasswordBtn}>
                                        <EditIcon sx={{color:"primary.main"}}/>
                                            Edit Password
                                    </Button>
                                </Box>
                            </Box>
                            <Typography variant="h3" sx={{
                                mt: "30px"
                            }} component={"h3"}>
                                Edit Profile
                            </Typography>
                            <Box sx={{display:"grid",gridTemplateColumns:{lg:"1fr 1fr",xs:"1fr"},gap:{lg:"20px",xs:"10px"}}}>
                                {SettingFormDatat.map((value:any,index)=>{
                                    return(
                                        <Box key={index} sx={{gridColumn:{lg:`${value.gridSpan}`}}}>
                                            <InputComp  label={value.label} inputPlaceHolder={value.placeHolder} inputType={value.inputtype}/>
                                        </Box>
                                    )
                                })} 
                            </Box>
                            <Box  sx={{textAlign:"end", mt: "30px"}}>
                                <Button type="submit" variant="contained">Save Changes</Button>
                            </Box>
                      
                    </form>
                </Box >
            </Box>
        </>
    )
}
export default Setting;