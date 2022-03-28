import { List, Divider, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SideNavSingleItem from './SideNavSingleItem';


const useStyles = makeStyles({
    divider: {
        border: "none!important",
        height: "2px",
        background: "#F2F6FE",
        width: "160px",
    },

    filter_acc: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#8794C4",

    },
    nav_accordian: {

        color: "#8794C4",
        
        "& p": {
            color: "#8794C3",
        },
        "& .MuiAccordionSummary-content": {
            margin: "0!important",

        },
        "&:hover,&.active,&.Mui-expanded": {
            backgroundColor: "#F2F6FE!important",
            "& p": {
                fontWeight: "600",
                color: "#0F75BC",
            },
            "& .filtor_icon path": {
                fill: "#0F75BC"
            },
            "& .nav_list_item_arrow path": {
                stroke: "#0F75BC"
            },
        }
    },
    nav_list_item_acc: {
        minHeight: "auto!important",
        padding: "8px 10px!important",
    }


});

const SideNavItem = () => {
    const classes = useStyles();
    return (
        <>
            <Divider className={classes.divider} sx={{ my: 3 }} />

            <List sx={{ p: 0 }}>
                <SideNavSingleItem />
            </List>



            <Divider className={classes.divider} sx={{ my: 3, p: 0 }} />
            {/* Nav Drop Down */}
            <Box >
                <Accordion sx={{ boxShadow: "none" }} className={classes.nav_accordian}>
                    <AccordionSummary className={classes.nav_list_item_acc}
                        expandIcon={<svg width={14} className="nav_list_item_arrow" height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L7 6.5L13 1.5" stroke="#8794C4" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >                                   

                        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                            <svg width={34} height={34} className="filtor_icon" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1795 19.457H22.8205L25.6395 14.543H8.36056L11.1795 19.457ZM29.2221 5.11328H4.77794C3.96446 5.11328 3.45646 5.9998 3.86485 6.70703L7.13868 12.418H26.8613L30.1385 6.70703C30.5436 5.9998 30.0356 5.11328 29.2221 5.11328V5.11328ZM11.5879 27.8242C11.5879 28.4119 12.0594 28.8867 12.6438 28.8867H21.3563C21.9406 28.8867 22.4121 28.4119 22.4121 27.8242V21.582H11.5879V27.8242Z" fill="#8794C4" />
                            </svg>
                            <Typography className={classes.filter_acc} >Filters</Typography>
                        </Box>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <label htmlFor="start">From</label>
                        </Box>
                        <input type="date" id="start" name="trip-start" defaultValue="2018-07-22" min="2018-01-01" max="2018-12-31" />
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    )
}


export default SideNavItem;