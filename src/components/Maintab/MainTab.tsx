import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import DashboardTab from './dashboard-tab/DashboardTab';
import MapTab from './map-tab/MapTab';
import ReportsTab from './ReportsTab';


const MainTab = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#F9FAFC', width: "100%" }}>
                <Routes>
                    <Route  path="/" element={<DashboardTab />} />
                    <Route path="/maps" element={<MapTab />} />
                    <Route path="/reports" element={<ReportsTab />} />
                    <Route path="/*" element={<DashboardTab />} />
                </Routes>
            </Box>
        </>
    );
}
export default MainTab;