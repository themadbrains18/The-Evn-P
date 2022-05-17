// Login Account With Token Number
import { Typography, Button } from "@mui/material";
import FullscreenCard from "./FullScreenCard";
import InputComp from './inputComp';

const LoginWithToken = () => {
    return (
        <>
            <FullscreenCard>
                <Typography variant="h1">
                    Login
                </Typography>

                <Typography variant="h6" mt="26px">
                    Please enter the 2FA token sent to your email.
                </Typography>
                <InputComp label="Token" inputPlaceHolder="Enter token" inputType="text"/>
                <Typography variant="body2" sx={{ m: "15px 0 50px", color: "primary.contrastText", "& a": { color: "#2b93d6" } }} >
                    If you did not receive your token, please contact <a href="mailto:nicole.downey@earthsystemsciences.com">nicole.downey@earthsystemsciences.com</a>  for assistance.
                </Typography>
                <Button type="submit" fullWidth size="large" variant="contained">Continue</Button>
            </FullscreenCard>
        </>
    )
}

export default LoginWithToken;