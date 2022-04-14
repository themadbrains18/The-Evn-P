import { createTheme, ThemeProvider, Box, } from '@mui/material';
import SideNav from './components/leftSideNav/sideNav';
import Route from './routes/index'

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
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'grid', gridTemplateColumns: "auto 1fr", height: "100vh", overflow: "hidden" }}>
        {/* Left Side Navigation */}
        <SideNav />
        {/* Right Side Main Content */}
        <Route />
      </Box>
    </ThemeProvider >
  );
}

export default App;