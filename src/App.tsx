import { createTheme, ThemeProvider, Box, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SideNav from './components/SideNav/sideNav';
import Route from './routes/index'

const useStyles = makeStyles({
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: "auto 1fr",
    height: "100vh",
    overflow: "hidden"
  }
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
        <Route />
      </Box>
    </ThemeProvider>
  );
}


export default App;