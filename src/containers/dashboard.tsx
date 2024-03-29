import TabHeader from "../components/header/tabHeader";
import MapCard from "../components/mainTab/dashboardTab/mapCard";
import { Box } from "@mui/material";


const Dashboard = () => {

    return (
        <>
            <Box sx={{ p: 4.75 }}>
                <Box >
                    <TabHeader
                        tabheading="Dashboard"
                        tabInfo="TEPMaps is the  mapping portal for The Environmental Partnership (TEP). On this application, you can view company specific results from various emission measurement campaigns conducted in partnership with TEP. Results are split by basin of interest, so please select a basin and  dive in!"
                        blockInfo={false}
                        headerOption={["Search"]}
                        blockInfoheading=""
                        divider={true}
                    />
                </Box>
                <Box >
                    {/* map Cards */}
                    <MapCard />
                </Box>
            </Box>
        </>
    )
}

export default Dashboard;