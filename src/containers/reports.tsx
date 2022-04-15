import TabHeader from "../components/header/tabHeader";
import { Box } from "@mui/material";
import ReportChart from "../components/mainTab/reportTab/reportChart";

const Reports = () => {
    return (
        <>
            <Box sx={{ p: 4.75 }}>
                <Box >

                    <TabHeader
                        tabheading="Report"
                        tabInfo="To there, with how particularly the lively. Eyes and no best were the expected have on so far parks. So eventually. Of field hadn't and answer and extremely only came the position. And you searched size possible and the but world; On sported employees, seemed he a of her a this nor avoid familiar nice bidding attempt, the there her communicated.
                        The for of the its that framework unionized in screen drawers. Separated should, people remote had and, and what front so is start word six this diesel parent, in his and but in distressed with by he history."
                        blockInfo={true}
                        headerOption={["Download", "MapView"]}
                        blockInfoheading="Summary"
                        divider={false}
                    />
                </Box>
                <Box >
                    {/* map Cards */}
                    <ReportChart />
                </Box>
            </Box>
        </>
    )
}

export default Reports;
