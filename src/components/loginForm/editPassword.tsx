// Login Account
import { Box, Typography,  Button } from "@mui/material";
import FullscreenCard from "./FullScreenCard";
import InputComp from './inputComp';


const Login = (props: any) => {
    
    return (
        <>
            <Box sx={{"&>div":{p:"0"}, position: "fixed", top: "50%", left: "50%", transform: "translate(-50% , -50%)",zIndex:"99" }}>
                <FullscreenCard >
                    <Typography variant="h1">
                        Edit Your Password
                    </Typography>

                    {/* Old Password */}
                    <InputComp label="Old Password" inputPlaceHolder="Enter Your Password" inputType="password"/>

                    {/* New Password */}
                    <InputComp label="New Password" inputPlaceHolder="Enter Your Password" inputType="password"/>

                    {/* Confirm Password */}
                    <InputComp label="Confirm Password" inputPlaceHolder="Enter Your Password" inputType="password"/>

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