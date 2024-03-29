import { Box, Typography } from "@mui/material";

const LineChart = () => {
    return (
        <>
            <Box sx={{ mt: 6.875, mb: 4.75 }}>
                <Typography component="h5" sx={{ fontWeight: "600", fontSize: { lg: "18px", xs: "16px" }, lineHeight: "20px", color: "#000000" }}>
                    Emissions over time
                </Typography>

                <Box sx={{ textAlign: "center", mt: 2.5 }} >
                    <img src={require("../../../../../assets/img/LineChart.png")} alt="" />
                </Box>
            </Box>
        </>
    );
}
export default LineChart;