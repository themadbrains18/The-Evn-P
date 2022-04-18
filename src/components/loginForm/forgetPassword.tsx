// Forget Password Account
import { Box, Typography, OutlinedInput, Button } from "@mui/material";
const Login = (props: any) => {
    return (
        <>
            <Box sx={{ "& form": { maxWidth: "529px", width: "100%", padding: "50px 30px", background: "#FFFFFF", boxShadow: " 0px 4px 10px #F3F4F6" }, display: "grid", placeItems: "center", height: "100%", minHeight: "calc(100vh - 84px) " }}>
                <form onSubmit={props.OnSubmitUpdatePwsd} action="">
                    <Typography sx={{ color: "#454560", fontWeight: "600", fontSize: { lg: "36px", xs: "30px" }, lineHeight: "40px" }} component={"h2"}>
                        Forget Password
                    </Typography>
                    <Box sx={{ width: "100%", marginTop: "38px" }}>
                        <Typography sx={{
                            fontWeight: "600",
                            fontSize: { lg: "16px", xs: "14px" },
                            lineHeight: "18px",
                            marginBottom: "12px",
                            color: "#454560"
                        }} component={"h3"}>
                            Email Address
                        </Typography>
                        <OutlinedInput type="email" required sx={{ border: " 1px solid #CCCCCC", color: "#454560", fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "18px", "& ::placeholder": { color: "#454560", fontWeight: "500", fontSize: "16px", lineHeight: "18px" }, borderRadius: "6px", "& fieldset": { display: "none" } }} fullWidth placeholder="Enter email address" />
                    </Box>
                    <Box sx={{ marginTop: "23px", "& Button": { width: "100%", lineHeight: "1", padding: "17px 48px", display: "block", fontSize: { lg: "14px", xs: "12px" }, fontWeight: "600" } }}>
                        <Button type="submit" variant="contained">Continue</Button>
                    </Box>
                    <Box sx={{ textAlign: "center", marginTop: "26px", "& button": { display: "flex", gap: "11px", justifyContent: "center", maxWidth: "fit-content", width: "100%", margin: "0 auto", alignItems: "center", color: "#0F75BC", fontWeight: "600", fontSize: { lg: "14px", xs: "14px" }, lineHeight: "16px" } }}>
                        <button type="button" onClick={props.backLogin}>
                            <img src={require("../../assets/svg/back-arrow-icon.svg").default} alt="" />
                            Back to Login</button>
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default Login;