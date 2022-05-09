import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider, Box, } from '@mui/material';
import SideNav from './components/leftSideNav/sideNav';
import Route from './routes/index'
import TopHeader from './components/header/topHeader'


const theme = createTheme({
  palette: {
    common:{
      white:"#fff",
      black:"#000",
    },
    primary: {
      main: "#0F75BC",
      light : "#8794C4",
      contrastText: "#454560",
    },
    secondary : {
      main : "#1D8CD4",
      light : "#1D8CD4",
      dark: "#979797",
      contrastText: "#8794C3",
    },
    text:{
      secondary:"#121212",
    },
    divider: "#F5F5F5",
    background: {
      paper: "#FDFDFD"
    },
    action :{
      active : "#0F75BC",
      hover : "#0F75BC",
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
      else {
        setViewTopHeader(false);
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