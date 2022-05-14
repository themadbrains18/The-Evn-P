// Login Account
import { Typography, OutlinedInput, Button, InputAdornment, IconButton } from "@mui/material";
import FullscreenCard from "./FullScreenCard";
import { useState } from "react";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';


const Login = (props: any) => {
    // Hide Password State
    const [hidepswd, Sethidepswd] = useState(false)
    const HidePassword = () => {
        Sethidepswd(!hidepswd)
    }
    // Hide Confirm Password
    const [hideConfirmpswd, SethideConfirmpswd] = useState(false)
    const HideConfirmPassword = () => {
        SethideConfirmpswd(!hideConfirmpswd)
    }
    return (
        <>
            <FullscreenCard>

                <form onSubmit={props.recoveronSubmit} action="">
                    <Typography variant="h1">
                        Recover Your Password
                    </Typography>

                    <Typography variant="subtitle1" sx={{ mb: "12px", mt: "30px", fontWeight: "600" }} color="primary.contrastText">
                        New Password
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
                    <Button sx={{ mt: "23px" }} type="submit" fullWidth size="large" variant="contained">Continue</Button>
                </form>
            </FullscreenCard>
        </>
    )
}

export default Login;