import { Box, Typography } from "@mui/material";

const SourceDatat = [
    {
        ChangeLater: "Change later",
        backgroun:"#5F6DD0"
    },
    {
        ChangeLater: "Change later",
        backgroun:"#8695EB"
    },
    {
        ChangeLater: "Change later",
        backgroun:"#C8CDFF"
    }

]
const DonutChart = () => {
    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Typography variant="h3" component="h5" sx={{ fontWeight: "600" }}>
                    source contributions
                </Typography>
                <Box sx={{ textAlign: "center", mt: 2.5, mb: 3.875 }} >
                    <img src={require("../../../../../assets/svg/inner-dout.svg").default} alt="" />
                </Box>
                <Box sx={{ textAlign: "center", mt: 2.5, display: "grid", gridTemplateColumns: { lg: "repeat(3,33.333%)", xs: "repeat(2,50%)" }, rowGap: "10px!important", gap: "5px" }}>
                    {SourceDatat.map((value,index) => {
                        return(
                        <Box key={index} sx={{ display: "grid", alignItems: "center", gridTemplateColumns: "auto 1fr", gap: { lg: "12px", xs: "5px" } }}>
                            <Box sx={{ height: "24px", backgroundColor: `${value.backgroun}`, borderRadius: "5px", width: "27px" }}></Box>
                            <Typography variant="subtitle2" component="h5" sx={{ color: "common.black", textAlign: "left", opacity: "0.4" }}>
                                {value.ChangeLater}
                            </Typography>
                        </Box>
                        )
                    })
                    }
                </Box>
            </Box>
        </>
    )
}
export default DonutChart;