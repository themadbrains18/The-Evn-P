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
                <form onSubmit={props.onSubmit} action="">
                    <Typography variant="h1">
                        Login
                    </Typography>
                    <Typography variant="subtitle1" sx={{
                        mb: "12px",
                        mt: "38px", fontWeight: "600"
                    }} color="primary.contrastText" >
                        Username
                    </Typography>
                    <OutlinedInput type="text" required fullWidth placeholder="Enter you username" />

                    <Typography variant="subtitle1" sx={{ mb: "12px", mt: "30px", fontWeight: "fontWeightMedium" }} color="primary.contrastText">
                        Password
                    </Typography>
                    <OutlinedInput placeholder="Enter your password" fullWidth type={`${!showPassword && ("password")}`} required
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={toggleShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility sx={{ color: "#ACACAC" }} /> : <VisibilityOff sx={{ color: "#ACACAC" }} />}
                                </IconButton>
                            </InputAdornment>
                        } />

                    <Button sx={{ mt: "23px" }} type="submit" fullWidth size="large" variant="contained">Continue</Button>

                    <Box sx={{ textAlign: "center", mt: "26px" }}>
                        <Button type="button" variant="text" sx={{color:"primary.main","&:hover":{background:"transparent",color:"primary.main"},width:"1"}} onClick={props.onClickfogetBtn} > Forgot password?</Button>
                    </Box>
                </form>
            </FullscreenCard>
        </>
    )
}

export default Login;