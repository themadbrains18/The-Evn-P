import { Box, Button, Typography } from "@mui/material";
import MapInnerTabHeading from "../mapInnerTabHeading";
import LineChart from "./lineChart";
import DonutChart from "./donutChart";
import MapDataList from "./mapDataList";
import { Link } from "react-router-dom";

const BasicStasticsTab = () => {
    return (
        <>
            <Box sx={{ paddingBottom: "80px", overflow: "hidden" }}>
                <Box>
                    <MapInnerTabHeading heading={"Basic Stastics"} />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <Button variant="outlined" sx={{ color: "#0F75BC", lineHeight: "11px", fontSize: "10px", height: "100%", fontWeight: "700", padding: "8px 11px" }}>
                                <Box component="img" src={require("../../../../../assets/svg/edit-icon.svg").default} sx={{ mr: "4px" }} alt="" />
                                EDIT
                            </Button>
                        </Box>

                        <Box >
                            <Button variant="outlined" sx={{ color: "#0F75BC", lineHeight: "11px", fontSize: "10px", height: "100%", fontWeight: "700", padding: "8px 11px", mr: "6px" }}>
                                <Box component="img" src={require("../../../../../assets/svg/download-icon.svg").default} sx={{ mr: "4px" }} alt="" />
                                KMZ
                            </Button>

                            <Button variant="outlined" sx={{ color: "#0F75BC", lineHeight: "11px", fontSize: "10px", height: "100%", fontWeight: "700", padding: "8px 11px" }}>
                                <Box component="img" src={require("../../../../../assets/svg/download-icon.svg").default} sx={{ mr: "4px" }} alt="" />
                                CSV
                            </Button>

                        </Box>
                    </Box>
                    {/* Line Chart  */}
                    <LineChart />
                    {/* Donut Chart  */}
                    <DonutChart />

                    {/* Map Data List */}
                    <MapDataList />
                </Box>
                <Box to="/dashboard" component={Link} sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: { lg: "25px", xs: "10px" }, padding: "18px 0", borderTop: " 1px solid #0000001f", position: "fixed", right: "0px", bottom: "0", width: { xl: "373px", lg: "304px", xs: "254px" }, background: "#fff" }}>
                    <Typography component={"span"} sx={{ color: "#0F75BC", fontWeight: "600", fontSize: { lg: "14px", xs: "12px" }, lineHeight: "16px", textDecoration: "underline" }}>
                        See report for this selection
                    </Typography>
                    <Typography sx={{ "& svg": { height: { lg: "16px", xs: "12px" } } }} component={"span"}>
                        <svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 15L8 8L1 1" stroke="#0F75BC" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Typography>
                </Box>
            </Box>
        </>
    );
}
export default BasicStasticsTab;