import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider, Box, } from '@mui/material';
import SideNav from './components/leftSideNav/sideNav';
import Route from './routes/index'
import TopHeader from './components/header/topHeader'


const theme = createTheme({
  palette: {
    primary: {
      main: "#0F75BC"
    }
  },
  typography: {
    fontFamily: "'Spartan',sans-serif"
  },
});

const App = () => {

  const [viewTopHeader, setViewTopHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkPath = () => {
      if (location.pathname === "/login") {
        setViewTopHeader(true)
      }
    }
    checkPath();

  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'grid', gridTemplateColumns: viewTopHeader ? " 1fr" : "auto 1fr", height: viewTopHeader ? "initial" : "100vh", overflow: "hidden" }}>
        {/* Top Header  */}
        {viewTopHeader ? <TopHeader /> :
          <SideNav />
        }
        {/* Right Side Main Content */}
        <Route />
      </Box>
    </ThemeProvider >
  );
}

export default App;