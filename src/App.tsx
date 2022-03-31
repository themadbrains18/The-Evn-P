import { createTheme, ThemeProvider, Box, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SideNav from './components/SideNav/sideNav';
import MainTab from './components/Maintab/mainTab';

const useStyles = makeStyles({
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: "auto 1fr",
    minHeight: "100vh",
  },

});

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
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.mainGrid} >
        {/* Left Side Navigation */}
        <SideNav />
        {/* Right Side Main Content */}
        <MainTab />
      </Box>
    </ThemeProvider>
  );
}


export default App;