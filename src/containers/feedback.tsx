import { Box, Typography } from "@mui/material";
// import LocationCardList from "../components/mainTab/bugReportTab/locationCardList";
import BugReport from "../components/mainTab/bugReportTab/feedback"
const Bugreport = () => {
    return (
        <>
            <Box sx={{ p: 4.75 }}>
                <Typography variant="h3" >
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

