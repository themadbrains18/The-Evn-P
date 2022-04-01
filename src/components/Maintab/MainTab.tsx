import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import DashboardTab from './dashboard-tab/dashboardTab';
import MapTab from './map-tab/mapTab';
import ReportsTab from './report-tab/reportsTab';
import SettingTab from './settings-tab/settingTab';


const MainTab = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#F9FAFC' }}>
                <Routes>
                    <Route path="/" element={<DashboardTab />} />
                    <Route path="/maps" element={<MapTab />} />
                    <Route path="/reports" element={<ReportsTab />} />
                    <Route path="/Setting" element={<SettingTab />} />
                    <Route path="/*" element={<DashboardTab />} />
                </Routes>
            </Box>
        </>
    );
}
export default MainTab;