import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../containers/dashboard';
import Map from '../containers/map';
import Reports from '../containers/reports';
import Setting from '../containers/setting';

const Routing = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#F9FAFC',overflowY: "scroll",overflowX: "hidden"}}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/maps" element={<Map />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/Setting" element={<Setting />} />
                    <Route path="/*" element={<Dashboard />} />
                </Routes>
            </Box>
        </>
    );
}
export default Routing;