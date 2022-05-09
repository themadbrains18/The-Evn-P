// Login Account With Token Number
import { Box, Typography, OutlinedInput, Button } from "@mui/material";
const Login = () => {
    return (
        <>
            <Box sx={{ "& form": { maxWidth: "529px", width: "100%", p: "50px 30px", background: "#FFFFFF", boxShadow: " 0px 4px 10px #F3F4F6" }, display: "grid", placeItems: "center", height: "100%", minHeight: "calc(100vh - 84px) " }}>
                <form action="">
                    <Typography sx={{ color: "#454560", fontWeight: "600", fontSize: { lg: "36px", xs: "30px" }, lineHeight: "40px" }} component={"h2"}>
                        Login
                    </Typography>
                    <Typography sx={{ color: "#454560", fontWeight: "500", fontSize: { lg: "14px", xs: "12px" }, lineHeight: "15px", m: "26px 0" }} component={"p"}>
                        Please enter the 2FA token sent to your email.
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                        <Typography sx={{
                            fontWeight: "600",
                            fontSize: { lg: "16px", xs: "14px" },
                            lineHeight: "18px",
                            mb: "12px",
                            color: "#454560"
                        }} component={"h3"}>
                            Token
                        </Typography>
                        <OutlinedInput type="text" required sx={{ border: " 1px solid #CCCCCC", color: "#454560", fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "18px", "& ::placeholder": { color: "#454560", fontWeight: "500", fontSize: "16px", lineHeight: "18px" }, borderRadius: "6px", "& fieldset": { display: "none" } }} fullWidth placeholder="Enter token" />
                    </Box>
                    <Typography sx={{ m: "15px 0 50px", color: "#454560", fontWeight: "500", fontSize: "12px", lineHeight: "20px", "& a": { color: "#2b93d6" } }} component={"p"}>
                        If you did not receive your token, please contact <a href="mailto:nicole.downey@earthsystemsciences.com">nicole.downey@earthsystemsciences.com</a>  for assistance.
                    </Typography>
                    <Box sx={{ mt: "23px", "& Button": { width: "100%", lineHeight: "1", p: "17px 48px", display: "block", fontSize: { lg: "14px", xs: "12px" }, fontWeight: "600" } }}>
                        <Button type="submit" variant="contained">Continue</Button>
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default Login;