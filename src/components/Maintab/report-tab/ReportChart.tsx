import { Box, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import DonutChartComp from './donutChart';
import BarChart from './barChart';

const useStyles = makeStyles({
    chartItem: {
        boxShadow: "0px 4px 10px #F3F4F6",
        backgroundColor: "#fff",
        textAlign: "center",
        height: "100%",
    }
});

const ReportChart = () => {
    const classes = useStyles();
    return (
        <>
            <Box mt={3.75}>
                <Grid container spacing={3.75}>
                    <Grid item xs={6}>
                        <Box className={classes.chartItem}>
                            <DonutChartComp />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.chartItem}>
                            <BarChart />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.chartItem}>
                            <img src={require("../../../assets/img/piechart.jpg")} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.chartItem}>
                            <img src={require("../../../assets/img/piechart.jpg")} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ReportChart;