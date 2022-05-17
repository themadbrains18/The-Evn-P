import FullscreenCard from "./FullScreenCard";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputComp from './inputComp';

// Forget Password Account
const ForgetPassword = (props: any) => {
    return (
        <>
            <FullscreenCard>
                <form onSubmit={props.OnSubmitUpdatePwsd} action="">
                    <Typography variant="h1">
                        Forget Password
                    </Typography>
                    <InputComp label=" Email Address" inputPlaceHolder="Enter email address" inputType="email"/>
                    <Button sx={{ mt: "23px" }} type="submit" fullWidth size="large" variant="contained">Continue</Button>
                    <Box sx={{ textAlign: "center", mt: "26px" }}>
                        <Button sx={{color:"primary.main" ,"&:hover svg path":{fill:"#0F75BC"},"&:hover":{background:"transparent",color:"primary.main"}}} type="button" variant="text" onClick={props.backLogin} startIcon={<ArrowBackIcon />}> Back to Login</Button>
                    </Box>
                </form>
            </FullscreenCard>

        </>
    )
}

export default ForgetPassword;