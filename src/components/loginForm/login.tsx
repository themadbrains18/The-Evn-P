// Login Account
import { Box, Typography, OutlinedInput, Button, InputAdornment, IconButton } from "@mui/material";
import FullscreenCard from "./FullScreenCard";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

import { useState } from "react";
const Login = (props: any) => {
    // Hide Password State
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <FullscreenCard>
                <Typography variant="h1">
                    Login
                </Typography>
                <Typography variant="subtitle1" sx={{
                    mb: "12px",
                    mt: "38px"
                }} >
                    Username
                </Typography>
                <OutlinedInput type="text" required fullWidth placeholder="Enter you username" />

                <Box sx={{ width: "100%", marginTop: "30px" }}>
                    <Typography variant="subtitle1" sx={{ mb: "12px" }}>
                        Password
                    </Typography>
                    <Box sx={{ position: "relative" }}>
                        <OutlinedInput fullWidth type={`${!showPassword && ("password")}`} required
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggleShowPassword}
                                        onMouseDown={toggleShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Box>

                </Box>
                <Button sx={{ mt: "23px" }} type="submit" fullWidth size="large"  variant="contained">Continue</Button>


                <Box sx={{ textAlign: "center", marginTop: "26px", "& button": { color: "#0F75BC", fontWeight: "600", fontSize: { lg: "14px", xs: "12px" }, lineHeight: "16px" } }}>
                    <button type="button" onClick={props.onClickfogetBtn}> Forgot password?</button>
                </Box>
            </FullscreenCard>

        </>
    )
}

export default Login;