// Login Account
import { Box, Typography, OutlinedInput, Button } from "@mui/material";
import { useState } from "react";
const Login = (props: any) => {
    // Hide Password State
    const [hidepswd, Sethidepswd] = useState(false)
    const HidePassword = () => {
        Sethidepswd(!hidepswd)
    }

    // Hide New Password
    const [hideConfirmpswd, SethideConfirmpswd] = useState(false)
    const HideConfirmPassword = () => {
        SethideConfirmpswd(!hideConfirmpswd)
    }

    // Hide Confirm Password
    const [hideNewmpswd, SethideNewmpswd] = useState(false)
    const HideNewPassword = () => {
        SethideNewmpswd(!hideNewmpswd)

    }
    return (
        <>
            <Box sx={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50% ,-50%)", zIndex: "9", "& form": { maxWidth: "529px", width: "100%", p: "50px 30px", background: "#FFFFFF", boxShadow: " 0px 0px 5px #F3F4F6" }, display: "grid", placeItems: "center", height: "100%", minHeight: "calc(100vh - 84px) " }}>
                <form onSubmit={props.UpdatePassword} action="">
                    <Typography sx={{ color: "#454560", fontWeight: "600", fontSize: { lg: "36px", xs: "30px" }, lineHeight: "40px" }} component={"h2"}>
                        Edit Your Password
                    </Typography>
                    <Box sx={{ width: "100%", mt: "30px" }}>
                        <Typography sx={{
                            fontWeight: "600",
                            fontSize: { lg: "16px", xs: "14px" },
                            lineHeight: "18px",
                            mb: "12px",
                            color: "#454560"
                        }} component={"h3"}>
                            Old Password
                        </Typography>
                        <Box sx={{ position: "relative" }}>
                            <OutlinedInput type={`${!hideConfirmpswd && ("password")}`} required sx={{ border: " 1px solid #CCCCCC", color: "#454560", fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "18px", "& ::placeholder": { color: "#454560", fontWeight: "500", fontSize: "16px", lineHeight: "18px" }, borderRadius: "6px", "& fieldset": { display: "none" } }} fullWidth placeholder="Enter new password" />
                            <Button onClick={HideConfirmPassword} sx={{ "& img": { height: "18px", width: "21.5px" }, position: "absolute", top: "50%", right: "20px", transform: ("translateY(-50%)"), p: "0", display: "flex", textAlign: "end", maxWidth: "fit-content", minWidth: "initial" }}>
                                {!hideConfirmpswd && (
                                    <img src={require("../../assets/svg/hide-password-icon.svg").default} alt="" />
                                )}
                                {hideConfirmpswd && (
                                    <Typography sx={{ "& svg path": { stroke: "#ACACAC", fill: "#ACACAC" }, display: "flex", "& svg": { height: "25px", width: "22px" } }} component={"span"}>
                                        <svg id="Layer_1" enableBackground="new 0 0 32 32" height={512} viewBox="0 0 32 32" width={512} xmlns="http://www.w3.org/2000/svg"><path d="m16 26c-6.1 0-11.5-3.9-13.3-9.7-.1-.2-.1-.4 0-.6 2.4-7.4 10.3-11.4 17.6-9 4.3 1.4 7.6 4.7 9 9 .1.2.1.4 0 .6-1.8 5.8-7.2 9.7-13.3 9.7zm-11.3-10c2.2 6.2 9.1 9.5 15.3 7.3 3.4-1.2 6.1-3.9 7.3-7.3-2.2-6.2-9.1-9.5-15.3-7.3-3.4 1.2-6.1 3.9-7.3 7.3z" /><path d="m16 21c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" /></svg>
                                    </Typography>
                                )}
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", mt: "30px" }}>
                        <Typography sx={{
                            fontWeight: "600",
                            fontSize: { lg: "16px", xs: "14px" },
                            lineHeight: "18px",
                            mb: "12px",
                            color: "#454560"
                        }} component={"h3"}>
                            New Password
                        </Typography>
                        <Box sx={{ position: "relative" }}>
                            <OutlinedInput type={`${!hideNewmpswd && ("password")}`} required sx={{ border: " 1px solid #CCCCCC", color: "#454560", fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "18px", "& ::placeholder": { color: "#454560", fontWeight: "500", fontSize: "16px", lineHeight: "18px" }, borderRadius: "6px", "& fieldset": { display: "none" } }} fullWidth placeholder="Enter confirm password" />
                            <Button onClick={HideNewPassword} sx={{ position: "absolute", top: "50%", right: "20px", transform: ("translateY(-50%)"), p: "0", display: "flex", textAlign: "end", maxWidth: "fit-content", minWidth: "initial" }}>
                                {!hideNewmpswd && (
                                    <img src={require("../../assets/svg/hide-password-icon.svg").default} alt="" />
                                )}
                                {hideNewmpswd && (
                                    <Typography sx={{ "& svg path": { stroke: "#ACACAC", fill: "#ACACAC" }, display: "flex", "& svg": { height: "25px", width: "22px" } }} component={"span"}>
                                        <svg id="Layer_1" enableBackground="new 0 0 32 32" height={512} viewBox="0 0 32 32" width={512} xmlns="http://www.w3.org/2000/svg"><path d="m16 26c-6.1 0-11.5-3.9-13.3-9.7-.1-.2-.1-.4 0-.6 2.4-7.4 10.3-11.4 17.6-9 4.3 1.4 7.6 4.7 9 9 .1.2.1.4 0 .6-1.8 5.8-7.2 9.7-13.3 9.7zm-11.3-10c2.2 6.2 9.1 9.5 15.3 7.3 3.4-1.2 6.1-3.9 7.3-7.3-2.2-6.2-9.1-9.5-15.3-7.3-3.4 1.2-6.1 3.9-7.3 7.3z" /><path d="m16 21c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" /></svg>
                                    </Typography>
                                )}
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", mt: "30px" }}>
                        <Typography sx={{
                            fontWeight: "600",
                            fontSize: { lg: "16px", xs: "14px" },
                            lineHeight: "18px",
                            mb: "12px",
                            color: "#454560"
                        }} component={"h3"}>
                            Confirm Password
                        </Typography>
                        <Box sx={{ position: "relative" }}>
                            <OutlinedInput type={`${!hidepswd && ("password")}`} required sx={{ border: " 1px solid #CCCCCC", color: "#454560", fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "18px", "& ::placeholder": { color: "#454560", fontWeight: "500", fontSize: "16px", lineHeight: "18px" }, borderRadius: "6px", "& fieldset": { display: "none" } }} fullWidth placeholder="Enter confirm password" />
                            <Button onClick={HidePassword} sx={{ position: "absolute", top: "50%", right: "20px", transform: ("translateY(-50%)"), p: "0", display: "flex", textAlign: "end", maxWidth: "fit-content", minWidth: "initial" }}>
                                {!hidepswd && (
                                    <img src={require("../../assets/svg/hide-password-icon.svg").default} alt="" />
                                )}
                                {hidepswd && (
                                    <Typography sx={{ "& svg path": { stroke: "#ACACAC", fill: "#ACACAC" }, display: "flex", "& svg": { height: "25px", width: "22px" } }} component={"span"}>
                                        <svg id="Layer_1" enableBackground="new 0 0 32 32" height={512} viewBox="0 0 32 32" width={512} xmlns="http://www.w3.org/2000/svg"><path d="m16 26c-6.1 0-11.5-3.9-13.3-9.7-.1-.2-.1-.4 0-.6 2.4-7.4 10.3-11.4 17.6-9 4.3 1.4 7.6 4.7 9 9 .1.2.1.4 0 .6-1.8 5.8-7.2 9.7-13.3 9.7zm-11.3-10c2.2 6.2 9.1 9.5 15.3 7.3 3.4-1.2 6.1-3.9 7.3-7.3-2.2-6.2-9.1-9.5-15.3-7.3-3.4 1.2-6.1 3.9-7.3 7.3z" /><path d="m16 21c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" /></svg>
                                    </Typography>
                                )}
                            </Button>
                        </Box>

                    </Box>
                    <Box sx={{ mt: "23px", "& Button": { width: "100%", lineHeight: "1", p: "17px 48px", display: "block", fontSize: { lg: "14px", xs: "12px" }, fontWeight: "600" } }}>
                        <Button type="submit" variant="contained">Update Password</Button>
                    </Box>
                </form>
            </Box>
            <Box onClick={props.ClickBtn} sx={{
                position: "fixed", top: "50%", left: "50%", transform: "translate(-50% ,-50%)", width: "100%", height: "100%", zIndex: "8", background: "#000", opacity: "0.2",
            }}>
            </Box>
        </>
    )
}
export default Login;