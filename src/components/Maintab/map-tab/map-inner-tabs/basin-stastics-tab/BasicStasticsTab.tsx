import { Box, Button, Typography } from "@mui/material";
// import { makeStyles } from '@mui/styles';
import MapInnerTabHeading from "../MapInnerTabHeading";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import MapDataList from "./MapDataList";


// const useStyles = makeStyles({

// });

const BasicStasticsTab = () => {
    // const classes = useStyles();

    return (
        <>
            <Box>
                <Box>
                    <MapInnerTabHeading heading={"Basic Stastics"} />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <Button variant="outlined" sx={{ color: "#0F75BC", lineHeight: "11px", fontSize: "10px", fontWeight: "700", padding: "8px 11px" }}>
                                <Box component="img" src={require("../../../../../assets/svg/edit-icon.svg").default} sx={{ mr: "4px" }} alt="" />
                                EDIT
                            </Button>
                        </Box>

                        <Box >
                            <Button variant="outlined" sx={{ color: "#0F75BC", lineHeight: "11px", fontSize: "10px", fontWeight: "700", padding: "8px 11px", mr: "6px" }}>
                                <Box component="img" src={require("../../../../../assets/svg/download-icon.svg").default} sx={{ mr: "4px" }} alt="" />
                                KMZ
                            </Button>

                            <Button variant="outlined" sx={{ color: "#0F75BC", lineHeight: "11px", fontSize: "10px", fontWeight: "700", padding: "8px 11px" }}>
                                <Box component="img" src={require("../../../../../assets/svg/download-icon.svg").default} sx={{ mr: "4px" }} alt="" />
                                CSV
                            </Button>

                        </Box>
                    </Box>


                    {/* Line Chart  */}
                    <LineChart/>
                    {/* Donut Chart  */}
                    <DonutChart />

                    {/* Map Data List */}
                    <MapDataList />

                </Box>

                <Box >
                    <Typography >
                        See report for this selection
                    </Typography>
                </Box>
            </Box>
        </>
    );
}
export default BasicStasticsTab;