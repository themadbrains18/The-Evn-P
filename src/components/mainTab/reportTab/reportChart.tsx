import { Box, Grid } from "@mui/material";
import DonutChartComp from './donutChart';
import BarChart from './barChart';
import SeclectBasin from "../../../components/header/selectBasin"


// Component Chart
const ChartGridData = [
    {
        grid:DonutChartComp 
    },
    {
        grid:BarChart 
    }
]
const ReportChart = () => {
    return (
        <>
            {/* Select Basin Form Start */}
            <SeclectBasin />
            {/* Select Basin Form End */}
            <Box mt={3.75}>
                <Grid container spacing={3.75}>
                    {ChartGridData.map((value:any,index:any) => {
                        return (
                            <Grid key={index}  item lg={6} md={12} xs={12} >
                                <Box sx={{ boxShadow: "0px 4px 10px #F3F4F6", backgroundColor: "#fff", textAlign: "center", height: "100%" }}>
                                    {<value.grid/>}
                                </Box>
                            </Grid>
                        )
                    })
                    }
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