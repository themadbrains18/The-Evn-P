// Setting Profile Acccount
import { Box, FormControl, Typography, OutlinedInput, Button } from "@mui/material";
const Setting = () => {
    return (
        <>
            <Box sx={{
                margin: { xl: "38px 79px 38px 38px", lg: " 27px 24px 24px ", xs: "27px 24px 24px " }
            }}>
                {/* Screen Heading */}
                <Typography sx={{ borderBottom: "2px solid #DEDEDE", paddingBottom: "24px", marginBottom: "30px", color: "#000000", fontWeight: "700", fontSize: { lg: "19px", xs: "17px" }, lineHeight: "21px" }} component={"h2"}>
                    User Account
                </Typography>

                {/* Account Form  */}
                <Box sx={{ padding: "40px 30px 36px", background: "#fff" }}>
                    <form action="">
                        <FormControl fullWidth>
                            {/* Account prifile  */}
                            <Box sx={{ display: { md: "flex" }, justifyContent: "space-between", alignItems: "center", paddingBottom: "24px", borderBottom: "2px solid #DEDEDE" }}>
                                <Box sx={{ marginBottom: { md: "0px", xs: "30px" }, display: "flex", alignItems: "center", gap: { lg: "25px", xs: "20px" } }} >
                                    <img src={require("../assets/img/accont-profile.png")} alt="profile" />
                                    <Box >
                                        <Typography
                                            sx={{
                                                color: "#454560", fontWeight: "600",
                                                fontSize: { lg: "18px", xs: "16px" },
                                                lineHeight: "20px"
                                            }}
                                            component={"h4"}>
                                            Samantha William
                                        </Typography>
                                        <Typography sx={{
                                            display: "block", color: "#979797", fontWeight: "500",
                                            fontSize: { lg: "16px", xs: "14px" },
                                            lineHeight: "18px",
                                            marginTop: "12px"
                                        }} component={"span"}>
                                            samantha@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    "& button": {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center", gap: "12px",
                                        border: "1px solid #0F75BC",
                                        borderRadius: "6px",
                                        fontWeight: "600",
                                        fontSize: { lg: "14px", xs: "12px" },
                                        lineHeight: "16px",
                                        color: "#1876B2",
                                        padding: "16px 35px "
                                    }
                                }}>
                                    <button >
                                        <img src={require("../assets/svg/edit-icon.svg").default} alt="" />
                                        Edit Password
                                    </button>
                                </Box>
                            </Box>
                            <Typography sx={{
                                fontWeight: "600",
                                fontSize: { lg: "18px", xs: "16px" },
                                lineHeight: "20px",
                                marginTop: "30px"
                            }} component={"h3"}>
                                Edit Profile
                            </Typography>
                            <Box sx={{ display: { lg: "flex" }, alignItems: "center", gap: "24px", marginTop: "22px" }}>
                                <Box sx={{ width: "100%" }}>
                                    <Typography sx={{
                                        fontWeight: "600",

                                        fontSize: { lg: "16px", xs: "14px" },
                                        lineHeight: "18px",
                                        marginBottom: "12px",
                                        color: "#454560"
                                    }} component={"h3"}>
                                        First Name
                                    </Typography>
                                    <OutlinedInput required sx={{ border: " 1px solid #CCCCCC", "& :focus-visible": { border: "none" }, color: "#454560", fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "18px", "& ::placeholder": { color: "#454560", fontWeight: "500", fontSize: "16px", lineHeight: "18px" }, borderRadius: "6px", "& fieldset": { display: "none" } }} fullWidth placeholder="Samantha" />
                                </Box>
                                <Box sx={{ width: "100%", marginTop: { lg: "0px", xs: "30px" } }}>
                                    <Typography sx={{
                                        fontWeight: "600",
                                        fontSize: { lg: "16px", xs: "14px" },
                                        lineHeight: "18px",
                                        marginBottom: "12px",
                                        color: "#454560"
                                    }} component={"h3"}>
                                        Last Name
                                    </Typography>
                                    <OutlinedInput required sx={{ border: " 1px solid #CCCCCC", color: "#454560", fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "18px", "& ::placeholder": { color: "#454560", fontWeight: "500", fontSize: "16px", lineHeight: "18px" }, borderRadius: "6px", "& fieldset": { display: "none" } }} fullWidth placeholder="William" />
                                </Box>
                            </Box>
                            <Box sx={{ width: "100%", marginTop: "30px" }}>
                                <Typography sx={{
                                    fontWeight: "600",
                                    fontSize: { lg: "16px", xs: "14px" },
                                    lineHeight: "18px",
                                    marginBottom: "12px",
                                    color: "#454560"
                                }} component={"h3"}>
                                    Email Address
                                </Typography>
                                <OutlinedInput type="email" required sx={{ border: " 1px solid #CCCCCC", background: "#F7F7F7", color: "#454560", fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "18px", "& ::placeholder": { color: "#454560", fontWeight: "500", fontSize: "16px", lineHeight: "18px" }, borderRadius: "6px", "& fieldset": { display: "none" } }} fullWidth placeholder="samantha@gmail.com" />
                            </Box>
                            <Box sx={{ width: "100%", marginTop: "30px" }}>
                                <Typography sx={{
                                    fontWeight: "600",
                                    fontSize: { lg: "16px", xs: "14px" },
                                    lineHeight: "18px",
                                    marginBottom: "12px",
                                    color: "#454560"
                                }} component={"h3"}>
                                    Areas of Interest
                                </Typography>
                                <OutlinedInput required sx={{ border: " 1px solid #CCCCCC", color: "#454560", fontWeight: "500", fontSize: { lg: "16px", xs: "14px" }, lineHeight: "18px", "& ::placeholder": { color: "#454560", fontWeight: "500", fontSize: "16px", lineHeight: "18px" }, borderRadius: "6px", "& fieldset": { display: "none" } }} fullWidth placeholder="Bakken, Permian" />
                            </Box>
                            <Box sx={{ marginTop: "30px", "& Button": { maxWidth: "fit-content", width: "100%", margin: " auto 0 auto auto", lineHeight: "1", padding: "16px 48px", display: "block", fontSize: { lg: "14px", xs: "12px" }, fontWeight: "600" } }}>
                                <Button type="submit" variant="contained">Save Changes</Button>
                            </Box>
                        </FormControl>
                    </form>
                </Box >
            </Box>
        </>
    )
}
export default Setting;