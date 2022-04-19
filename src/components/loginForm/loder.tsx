// Login Account
import { Box, Typography, CircularProgress } from "@mui/material";
const Login = (props: any) => {

    return (
        <>
            <Box sx={{ display: "grid", placeItems: "center", height: "100%", minHeight: "calc(100vh - 84px) " }}>
                <Box sx={{ maxWidth: "529px", width: "100%", height: "512px", padding: "50px 30px", background: "#FFFFFF", boxShadow: " 0px 4px 10px #F3F4F6", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "35px" }}>
                    <CircularProgress sx={{ width: "105px!important", height: "105px!important", }} />
                    <Typography sx={{ color: "#454560", fontWeight: "600", fontSize: { lg: "18px", xs: "16px" }, lineHeight: "20px" }} component={"h3"}>
                        Waiting for the moment
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Login;