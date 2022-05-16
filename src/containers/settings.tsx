// Setting Profile Acccount
import { Box, Typography, OutlinedInput, Button } from "@mui/material";
import EditPassword from "../components/loginForm/editPassword"
import { useState } from "react";

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
            gridSpan:""
        },
        {
            label:"Last Name",
            placeHolder:"William",
            gridSpan:""
        },
        {
            label:"Email Address",
            placeHolder:"samantha@gmail.com",
            gridSpan:"span 2"
            
        },
        {
            label:"Areas of Interest",
            placeHolder:"Bakken, Permian",
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
                                <Box sx={{ mb: { md: "0px", xs: "30px" }, display: "flex", alignItems: "center", gap: { lg: "25px", xs: "20px" } }} >
                                    <Box >
                                        <Typography variant="h3"
                                            sx={{
                                                color: "primary.contrastText"
                                            }}
                                            component={"h4"}>
                                            Samantha William
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{
                                            display: "block", color: "secondary.dark",
                                            mt: "12px"
                                        }} component={"span"}>
                                            samantha@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    "& button": {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center", gap: "12px",
                                        border: "1px solid #0F75BC",
                                        borderRadius: "6px",
                                        fontWeight: "600",
                                        fontSize: { lg: "14px", xs: "12px" },
                                        lineHeight: "16px",
                                        color: "#1876B2",
                                        p: "16px 35px ",
                                        "&:hover": { background: "primary.main", color: "common.white", "& svg path": { fill: "#fff" } }
                                    }
                                }}>
                                    <Button type="button" onClick={EditPasswordBtn}>
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.52988 12.2188C3.56504 12.2188 3.6002 12.2152 3.63535 12.21L6.59199 11.6914C6.62715 11.6844 6.66055 11.6686 6.68516 11.6422L14.1365 4.19082C14.1528 4.17456 14.1657 4.15524 14.1746 4.13398C14.1834 4.11271 14.1879 4.08992 14.1879 4.06689C14.1879 4.04387 14.1834 4.02108 14.1746 3.99981C14.1657 3.97855 14.1528 3.95923 14.1365 3.94297L11.215 1.01973C11.1816 0.986328 11.1377 0.96875 11.0902 0.96875C11.0428 0.96875 10.9988 0.986328 10.9654 1.01973L3.51406 8.47109C3.4877 8.49746 3.47187 8.5291 3.46484 8.56426L2.94629 11.5209C2.92919 11.6151 2.9353 11.712 2.96409 11.8033C2.99288 11.8945 3.04349 11.9774 3.11152 12.0447C3.22754 12.1572 3.37344 12.2188 3.52988 12.2188ZM4.71465 9.15312L11.0902 2.7793L12.3787 4.06777L6.00312 10.4416L4.44043 10.7176L4.71465 9.15312ZM14.4688 13.6953H1.53125C1.22012 13.6953 0.96875 13.9467 0.96875 14.2578V14.8906C0.96875 14.968 1.03203 15.0312 1.10938 15.0312H14.8906C14.968 15.0312 15.0312 14.968 15.0312 14.8906V14.2578C15.0312 13.9467 14.7799 13.6953 14.4688 13.6953Z" fill="#1876B3" />
                                        </svg>
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
                                {SettingFormDatat.map((value,index)=>{
                                    return(
                                        <Box key={index} sx={{gridColumn:{lg:`${value.gridSpan}`}, width: "1" }}>
                                            <Typography variant="h6" sx={{
                                                mb: "12px",
                                                mt:{lg:"30px",xs:"20px"},
                                                color: "primary.contrastText"
                                            }} component={"h3"}>
                                                {value.label}
                                            </Typography>
                                            <OutlinedInput required sx={{ border: " 1px solid #CCCCCC", "& :focus-visible": { border: "none" }, "& fieldset": { display: "none" } }} fullWidth placeholder={value.placeHolder} />
                                        </Box>
                                    )
                                })} 
                            </Box>
                            <Box sx={{ mt: "30px", "& Button": { maxWidth: "fit-content", width: "1", m: " auto 0 auto auto", p: "16px 48px", display: "block" } }}>
                                <Button type="submit" variant="contained">Save Changes</Button>
                            </Box>
                      
                    </form>
                </Box >
            </Box>
        </>
    )
}
export default Setting;