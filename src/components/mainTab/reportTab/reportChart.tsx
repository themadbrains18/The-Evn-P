import { Box, Grid } from "@mui/material";
import DonutChartComp from './donutChart';
import BarChart from './barChart';



const ReportChart = () => {
    return (
        <>
            <Box mt={3.75}>
                <Grid container spacing={3.75}>
                    <Grid item lg={6} md={12} xs={12} >
                        <Box sx={{ boxShadow: "0px 4px 10px #F3F4F6", backgroundColor: "#fff", textAlign: "center", height: "100%" }}>
                            <DonutChartComp />
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={12} xs={12} >
                        <Box sx={{ boxShadow: "0px 4px 10px #F3F4F6", backgroundColor: "#fff", textAlign: "center", height: "100%" }}>
                            <BarChart />
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={12} xs={12} >
                        <Box sx={{ boxShadow: "0px 4px 10px #F3F4F6", backgroundColor: "#fff", textAlign: "center", height: "100%" }}>
                            <img src={require("../../../assets/img/piechart.jpg")} alt="" />
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={12} xs={12} >
                        <Box sx={{ boxShadow: "0px 4px 10px #F3F4F6", backgroundColor: "#fff", textAlign: "center", height: "100%" }}>
                            <img src={require("../../../assets/img/piechart.jpg")} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ReportChart;