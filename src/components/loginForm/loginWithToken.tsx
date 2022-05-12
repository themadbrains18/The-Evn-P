// Login Account With Token Number
import { Typography, OutlinedInput, Button } from "@mui/material";
import FullscreenCard from "./FullScreenCard";

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
                <Typography variant="subtitle1" sx={{ mb: "12px", mt: "30px", fontWeight: "600" }} color="primary.contrastText">
                    Token
                </Typography>
                <OutlinedInput type="text" required fullWidth placeholder="Enter token" />

                <Typography variant="body2" sx={{ margin: "15px 0 50px", color: "#454560", "& a": { color: "#2b93d6" } }} >
                    If you did not receive your token, please contact <a href="mailto:nicole.downey@earthsystemsciences.com">nicole.downey@earthsystemsciences.com</a>  for assistance.
                </Typography>
                <Button type="submit" fullWidth size="large" variant="contained">Continue</Button>
            </FullscreenCard>
        </>
    )
}

export default LoginWithToken;