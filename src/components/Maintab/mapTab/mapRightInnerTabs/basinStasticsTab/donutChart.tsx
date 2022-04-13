import { Box, Typography } from "@mui/material";
const DonutChart = () => {
    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Typography component="h5" sx={{ fontWeight: "600", fontSize: "18px", lineHeight: "20px", color: "#000000" }}>
                    source contributions
                </Typography>

                <Box sx={{ textAlign: "center", mt: 2.5, mb: 3.875 }} >
                    <img src={require("../../../../../assets/svg/inner-dout.svg").default} alt="" />
                </Box>


                <Box sx={{ textAlign: "center", mt: 2.5, display: "grid", gridTemplateColumns: "repeat(3,33.333%)", gap: "5px" }}>
                    <Box sx={{ display: "grid", alignItems: "center", gridTemplateColumns: "auto 1fr", gap: "12px" }}>
                        <Box sx={{ height: "24px", backgroundColor: "#5F6DD0", borderRadius: "5px", width: "27px" }}></Box>
                        <Typography component="h5" sx={{ fontWeight: "500", fontSize: "10px", lineHeight: "1", color: "#000000", textAlign: "left", opacity: "0.4" }}>
                            Change later
                        </Typography>
                    </Box>
                    <Box sx={{ display: "grid", alignItems: "center", gridTemplateColumns: "auto 1fr", gap: "12px" }}>
                        <Box sx={{ height: "24px", backgroundColor: "#8695EB", borderRadius: "5px", width: "27px" }}></Box>
                        <Typography component="h5" sx={{ fontWeight: "500", fontSize: "10px", lineHeight: "1", color: "#000000", textAlign: "left", opacity: "0.4" }}>
                            Change later
                        </Typography>
                    </Box>
                    <Box sx={{ display: "grid", alignItems: "center", gridTemplateColumns: "auto 1fr", gap: "12px" }}>
                        <Box sx={{ height: "24px", backgroundColor: "#C8CDFF", borderRadius: "5px", width: "27px" }}></Box>
                        <Typography component="h5" sx={{ fontWeight: "500", fontSize: "10px", lineHeight: "1", color: "#000000", textAlign: "left", opacity: "0.4" }}>
                            Change later
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default DonutChart;