import { Box, Button, Typography } from "@mui/material";
import MapInnerTabHeading from "../mapInnerTabHeading";
import LineChart from "./lineChart";
import DonutChart from "./donutChart";
import MapDataList from "./mapDataList";
import { Link } from "react-router-dom";

const BasinTabBtn = [
    {
        BtnIcon: <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12.5V13.25C3 13.8467 3.23705 14.419 3.65901 14.841C4.08097 15.2629 4.65326 15.5 5.25 15.5H12.75C13.3467 15.5 13.919 15.2629 14.341 14.841C14.7629 14.419 15 13.8467 15 13.25V12.5M12 9.5L9 12.5M9 12.5L6 9.5M9 12.5V3.5" stroke="#0F75BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        BtnNmae: "KMZ"
    },
    {
        BtnIcon: <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12.5V13.25C3 13.8467 3.23705 14.419 3.65901 14.841C4.08097 15.2629 4.65326 15.5 5.25 15.5H12.75C13.3467 15.5 13.919 15.2629 14.341 14.841C14.7629 14.419 15 13.8467 15 13.25V12.5M12 9.5L9 12.5M9 12.5L6 9.5M9 12.5V3.5" stroke="#0F75BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        BtnNmae: "CSV"
    }
]

const BasicStasticsTab = () => {
    return (
        <>
            <Box sx={{ paddingBottom: "80px", overflow: "hidden" }}>
                <Box>
                    <MapInnerTabHeading heading={"Basic Stastics"} />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <Button variant="outlined" sx={{ padding: "8px 11px" }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.52988 12.2188C3.56504 12.2188 3.6002 12.2152 3.63535 12.21L6.59199 11.6914C6.62715 11.6844 6.66055 11.6686 6.68516 11.6422L14.1365 4.19082C14.1528 4.17456 14.1657 4.15524 14.1746 4.13398C14.1834 4.11271 14.1879 4.08992 14.1879 4.06689C14.1879 4.04387 14.1834 4.02108 14.1746 3.99981C14.1657 3.97855 14.1528 3.95923 14.1365 3.94297L11.215 1.01973C11.1816 0.986328 11.1377 0.96875 11.0902 0.96875C11.0428 0.96875 10.9988 0.986328 10.9654 1.01973L3.51406 8.47109C3.4877 8.49746 3.47187 8.5291 3.46484 8.56426L2.94629 11.5209C2.92919 11.6151 2.9353 11.712 2.96409 11.8033C2.99288 11.8945 3.04349 11.9774 3.11152 12.0447C3.22754 12.1572 3.37344 12.2188 3.52988 12.2188ZM4.71465 9.15312L11.0902 2.7793L12.3787 4.06777L6.00312 10.4416L4.44043 10.7176L4.71465 9.15312ZM14.4688 13.6953H1.53125C1.22012 13.6953 0.96875 13.9467 0.96875 14.2578V14.8906C0.96875 14.968 1.03203 15.0312 1.10938 15.0312H14.8906C14.968 15.0312 15.0312 14.968 15.0312 14.8906V14.2578C15.0312 13.9467 14.7799 13.6953 14.4688 13.6953Z" fill="#1876B3" />
                                </svg>
                                EDIT
                            </Button>
                        </Box>
                        <Box >
                            {
                                BasinTabBtn.map((value) => {
                                    return (
                                        <Button variant="outlined" sx={{ "&:hover": { "& svg path": { stroke: "#fff", fill: "none" } }, padding: "8px 11px", mr: "6px" }}>
                                            {value.BtnIcon}
                                            {value.BtnNmae}
                                        </Button>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                    {/* Line Chart  */}
                    <LineChart />
                    {/* Donut Chart  */}
                    <DonutChart />
                    {/* Map Data List */}
                    <MapDataList />
                </Box>
                <Box to="/dashboard" component={Link} sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: { lg: "25px", xs: "10px" }, padding: "18px 0", borderTop: " 1px solid #0000001f", position: "fixed", right: "0px", bottom: "0", width: { xl: "373px", lg: "304px", xs: "254px" }, background: "background.default" }}>
                    <Typography variant="h6" component={"span"} sx={{ color: "primary.main", fontWeight: "600", textDecoration: "underline" }}>
                        See report for this selection
                    </Typography>
                    <Typography sx={{ display: "flex", "& svg": { height: { lg: "16px", xs: "12px" } } }} component={"span"}>
                        <svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 15L8 8L1 1" stroke="#0F75BC" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Typography>
                </Box>
            </Box >
        </>
    );
}
export default BasicStasticsTab;