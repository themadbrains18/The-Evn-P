// Login Account
import { Box, Typography, OutlinedInput, Button, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import FullscreenCard from "./FullScreenCard";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

const Login = (props: any) => {
    // Hide Password State
    const [hidepswd, Sethidepswd] = useState(false)
    const HidePassword = () => {
        Sethidepswd(!hidepswd)
    }

    // Hide New Password
    const [hideConfirmpswd, SethideConfirmpswd] = useState(false)
    const HideConfirmPassword = () => {
        SethideConfirmpswd(!hideConfirmpswd)
    }

    // Hide Confirm Password
    const [hideNewmpswd, SethideNewmpswd] = useState(false)
    const HideNewPassword = () => {
        SethideNewmpswd(!hideNewmpswd)

    }
    
    return (
        <>
            <Box sx={{"&>div":{p:"0"}, position: "fixed", top: "50%", left: "50%", transform: "translate(-50% , -50%)",zIndex:"99" }}>
                <FullscreenCard >
                    <Typography variant="h1">
                        Edit Your Password
                    </Typography>

                    {/* Old Password */}
                    <Typography variant="subtitle1" sx={{ mb: "12px", mt: "30px", fontWeight: "600" }} color="primary.contrastText">
                        Old Password
                    </Typography>
                    <OutlinedInput placeholder="Enter your password" fullWidth type={`${!hideConfirmpswd && ("password")}`} required
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={HideConfirmPassword}
                                    edge="end"
                                >
                                    {hideConfirmpswd ? <Visibility sx={{ color: "#ACACAC" }} /> : <VisibilityOff sx={{ color: "#ACACAC" }} />}
                                </IconButton>
                            </InputAdornment>
                        } />

                    {/* New Password */}
                    <Typography variant="subtitle1" sx={{ mb: "12px", mt: "30px", fontWeight: "600" }} color="primary.contrastText">
                        New Password
                    </Typography>
                    <OutlinedInput placeholder="Enter your password" fullWidth type={`${!hideNewmpswd && ("password")}`} required
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={HideNewPassword}
                                    edge="end"
                                >
                                    {hideNewmpswd ? <Visibility sx={{ color: "#ACACAC" }} /> : <VisibilityOff sx={{ color: "#ACACAC" }} />}
                                </IconButton>
                            </InputAdornment>
                        } />


                    {/* Confirm Password */}
                    <Typography variant="subtitle1" sx={{ mb: "12px", mt: "30px", fontWeight: "600" }} color="primary.contrastText">
                        Confirm Password
                    </Typography>
                    <OutlinedInput placeholder="Enter your password" fullWidth type={`${!hidepswd && ("password")}`} required
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={HidePassword}
                                    edge="end"
                                >
                                    {hidepswd ? <Visibility sx={{ color: "#ACACAC" }} /> : <VisibilityOff sx={{ color: "#ACACAC" }} />}
                                </IconButton>
                            </InputAdornment>
                        } />

                    <Button sx={{ mt: "23px" }} type="submit" fullWidth size="large" variant="contained">Update Password</Button>
                </FullscreenCard>
            </Box>

            <Box onClick={props.ClickBtn} sx={{
                position: "fixed", top: "50%", left: "50%", transform: "translate(-50% ,-50%)", width: "1", height: "1", zIndex: "8", backgroundColor: "common.black", opacity: "0.2",
            }}>
            </Box>
        </>
    )
}
export default Login;