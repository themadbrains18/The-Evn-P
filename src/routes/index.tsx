import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../containers/dashboard';
import Map from '../containers/map';
import Reports from '../containers/reports';
import Settings from '../containers/settings';
import Downloads from '../containers/downloads';
import Feedback from '../containers/feedback';
import Login from '../containers/login';

const Routing = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#F9FAFC', overflowY: "scroll", overflowX: "hidden" }}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/maps" element={<Map />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/downloads" element={<Downloads />} />
                    <Route path="/feedback" element={<Feedback/>} />
                    <Route path="/Settings" element={<Settings />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </Box>
        </>
    );
}
export default Routing;