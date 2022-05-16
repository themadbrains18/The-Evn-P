import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider, Box } from '@mui/material';
import SideNav from './components/leftSideNav/sideNav';
import Route from './routes/index'

import TopHeader from './components/header/topHeader'

const theme = createTheme({
  palette: {
    common: {
      white: "#fff",
      black: "#000",
    },
    primary: {
      main: "#0F75BC",
      light: "#8794C4",
      contrastText: "#454560",
    },
    secondary: {
      main: "#1D8CD4",
      light: "#1D8CD4",
      dark: "#979797",
      contrastText: "#8794C3",
    },
    text: {
      secondary: "#121212",
    },
    divider: "#F5F5F5",
    background: {
      paper: "#FDFDFD",
      default: "#fff"
    },
    action: {
      active: "#0F75BC",
      hover: "#0F75BC",
    },
  },
  // shape: {
  //   borderRadius: "6px"
  // },
  typography: {
    fontFamily: "'Spartan',sans-serif",
    fontSize: 14,
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    body1: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "23px",
      color: "#121212",
    },
    body2: {
      fontSize: "12px",
      lineHeight: "13px",
    },
    h1: {
      fontSize: "36px",
      fontWeight: "600",
      color: "#454560",
      lineHeight: "40px",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#fff",
      lineHeight: "27px",
    },
    h3: {
      fontSize: "19px",
      fontWeight: "700",
      color: "#000",
      lineHeight: "21px",
    },
    h4: {
      fontSize: "20px",
      color: "#000",
      fontWeight: "500",
      lineHeight: "22px",
    },
    h5: {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "16px",
      color: "#8794c4",
      "& path": {
        fill: "#8794c4",
      },
      "& svg": {
        minWidth: "34px",
      },
      "&:hover,&.active": {
        fontSize: "14px",
        fontWeight: "600",
        color: "#0f75bc",
        backgroundColor: "#f2f6fe"
      },
      "&:hover path,&.active path": {
        fill: "#0f75bc",
      }
    },
    h6: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#000",
    },
    button: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "18px",
      color: "#454560",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "18px",
      color: "#000",
    },
    subtitle2: {
      fontSize: "10px",
      fontWeight: "500",
    },
  },

  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#454560",
          fontWeight: "500",
        }
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected,&.Mui-selected:hover": {
            backgroundColor: "#0F75BC",
            color: "#fff"
          },
          "&:hover": {
            color: "#fff"
          },
          },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked svg path": {
          color: "#5D5FEF",
        },
        },
      },
    },
    MuiFormControlLabel:{
      styleOverrides: {
        root: {
          "& span": {
            fontWeight: "600",
            lineHeight: "16px",
            color: "#454560",
        },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: "#fff",
          }
        },
        {
          props: { variant: 'text' },
          style: {
            color: "#fff",
            padding: "0px",
            "&:hover": {
              background: "#0F75BC",
              backgroundColor: "rgba(15, 117, 188, 0.04)"
            }
          }
        }
      ],
      styleOverrides: {
        root: {
          padding: "16px 61px",
          "&:hover": {
            background: "#0F75BC",
            color: "#fff",
            "& svg path": {
              fill: "#fff"
            }
          }
        }
      }
    },
  }
});
theme.typography = {
  ...theme.typography,
  h2 : {
      ...theme.typography.h2,
      [theme.breakpoints.down('lg')]: {
        fontSize: '20px',
      }
  },
  body2: {
    ...theme.typography.body2,
    [theme.breakpoints.down('lg')]: {
      fontSize: "10px",
    }
  },
  h1: {
    ...theme.typography.h1,
    [theme.breakpoints.down('lg')]: {
      fontSize: "28px",
    }
  },
  h3: {
    ...theme.typography.h3,
    [theme.breakpoints.down('lg')]: {
      fontSize: "17px",
    }
  },
  h4: {
    ...theme.typography.h4,
    [theme.breakpoints.down('lg')]: {
      fontSize: "18px",
    }
  },
  h5: {
    ...theme.typography.h5,
    [theme.breakpoints.down('lg')]: {
      fontSize: "12px",
    }
  },
  h6: {
    ...theme.typography.h6,
    [theme.breakpoints.down('lg')]: {
      fontSize: "12px",
    }
  },
  button: {
    ...theme.typography.button,
    [theme.breakpoints.down('lg')]: {
      fontSize: "12px",
      padding:"10px 20px"
    }
  },
  subtitle1: {
    ...theme.typography.subtitle1,
    [theme.breakpoints.down('lg')]: {
      fontSize: "14px",
    }
  },


  


};

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