import { Box, Typography } from "@mui/material";
// import LocationCardList from "../components/mainTab/bugReportTab/locationCardList";
import BugReport from "../components/mainTab/bugReportTab/reportBug"
const Bugreport = () => {
    return (
        <>
            <Box sx={{ p: 4.75 }}>
                <Typography component={"h2"} sx={{ fontWeight: '700', fontSize: { lg: 19, xs: 17 }, lineHeight: "21px", color: "#000" }}>
                    Report a Bug
                </Typography>
                <Box sx={{ mt: "30px" }}>
                    {/* <LocationCardList /> */}
                    <BugReport />
                </Box>

            </Box>
        </>
    )

}
export default Bugreport;

