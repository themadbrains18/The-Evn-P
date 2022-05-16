// Login Account
import { Typography, Button } from "@mui/material";
import FullscreenCard from "./FullScreenCard";
import InputPasswordComp from './inputPasswordComp';

const Login = (props: any) => {
    
    return (
        <>
            <FullscreenCard>

                <form onSubmit={props.recoveronSubmit} action="">
                    <Typography variant="h1">
                        Recover Your Password
                    </Typography>

                    <InputPasswordComp label="New Password" inputPlaceHolder="Enter Your Password" inputType="password"/>

                    <InputPasswordComp label="Confirm Password" inputPlaceHolder="Enter Your Password" inputType="password"/>

                    <Button sx={{ mt: "23px" }} type="submit" fullWidth size="large" variant="contained">Continue</Button>
                </form>
            </FullscreenCard>
        </>
    )
}

export default Login;