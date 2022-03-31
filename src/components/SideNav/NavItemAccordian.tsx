import { useState } from 'react';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ClickAwayListener from '@mui/material/ClickAwayListener';

type toogleCheck = {
    checkToggle: Boolean
}
const useStyles = makeStyles({

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
        "&:hover,&.active,&.Mui-expanded,&[aria-labelledby*='mui-']": {
            backgroundColor: "rgba(242, 246, 254, 0.5)!important",
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
        justifyContent: "flex-start!important",
        minHeight: "auto!important",
        padding: "8px 10px!important",
        margin: "0!important",
    },

    filter_label: {
        color: "#8794C3",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "13px"
    },
    filter_input: {
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    },
    input: {
        background: "#FFFFFF",
        borderRadius: "4px",
        border: "none",
        padding: "9px 12px",
        color: "#979797",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "13px",
        "&:focus": {
            outlineColor: "#1D8CD4"
        }
    },
    tool_tipinput: {
        border: "1px solid rgba(213, 213, 213, 0.4)",
        borderRadius: "4px",
        padding: "8px 12px",
        color: "#979797",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "13px",
        "&:focus": {
            outlineColor: "#1D8CD4"
        },
    },
});

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "#fff",
    },
    [`& .${tooltipClasses.tooltip}`]: {
        marginLeft: "35px!important",
        padding: 0,
    },
}));

const NavItemAccordian = (props: toogleCheck) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };
    const handleTooltipOpen = () => {
        setOpen(true);
    };

    if (!props.checkToggle) {
        if (open) {
            handleTooltipClose();
        }
    }
    return (
        <>


            <Box>
                {props.checkToggle && (
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                        <Box >
                            <CustomTooltip
                                arrow
                                placement="right"
                                onClose={handleTooltipClose}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                className={classes.nav_list_item_acc}
                                title={<Box sx={{ background: "#fff", padding: "12px 10px 17px", borderRadius: " 4px" }}>
                                    <form>
                                        <Box >
                                            <Typography component="h4" sx={{ color: "#0F75BC", fontWeight: "600", fontSize: "14px", lineHeight: "16px", marginBottom: "31px" }}>
                                                Filter
                                            </Typography>
                                            <Box className={classes.filter_input} >
                                                <label className={classes.filter_label} htmlFor="tooltipfrom" >From</label>
                                                <input className={classes.tool_tipinput} type="date" id="tooltipfrom" name="trip-start" defaultValue="dd/mm/yyy" min="01-01-1999" max="01-01-2030" />
                                            </Box>
                                            <Box className={classes.filter_input} sx={{ marginTop: "10px" }} >
                                                <label className={classes.filter_label} htmlFor="to">To</label>
                                                <input className={classes.tool_tipinput} type="date" id="to" name="trip-start" defaultValue="dd/mm/yyy" min="01-01-1999" max="01-01-2030" />
                                            </Box>
                                        </Box>
                                        <Button variant="contained" sx={{
                                            width: "100%", marginTop: "10px", padding: "12.5px 0", fontWeight: "400", fontSize: " 12px", lineHeight: "13px", color: "#FFFFFF", background: "#0F75BC"
                                        }} >Apply Filter</Button>
                                    </form>
                                </Box>}>
                                <Button onClick={handleTooltipOpen} sx={{ mr: 0, display: "grid", placeItems: "center", minWidth: "auto", padding: "8px 10px" }} className={classes.nav_accordian} >
                                    <svg width={34} height={34} className="filtor_icon" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.1795 19.457H22.8205L25.6395 14.543H8.36056L11.1795 19.457ZM29.2221 5.11328H4.77794C3.96446 5.11328 3.45646 5.9998 3.86485 6.70703L7.13868 12.418H26.8613L30.1385 6.70703C30.5436 5.9998 30.0356 5.11328 29.2221 5.11328V5.11328ZM11.5879 27.8242C11.5879 28.4119 12.0594 28.8867 12.6438 28.8867H21.3563C21.9406 28.8867 22.4121 28.4119 22.4121 27.8242V21.582H11.5879V27.8242Z" fill="#8794C4" />
                                    </svg>
                                </Button>
                            </CustomTooltip>
                        </Box>
                    </ClickAwayListener>
                )}

                {!props.checkToggle && (
                    <Accordion sx={{ boxShadow: "none" }} className={classes.nav_accordian}>
                        <AccordionSummary className={classes.nav_list_item_acc}
                            expandIcon={<svg width={14} className="nav_list_item_arrow" height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L7 6.5L13 1.5" stroke="#8794C4" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                <Box sx={{ mr: 2, display: "grid", placeItems: "center" }} >
                                    <svg width={34} height={34} className="filtor_icon" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.1795 19.457H22.8205L25.6395 14.543H8.36056L11.1795 19.457ZM29.2221 5.11328H4.77794C3.96446 5.11328 3.45646 5.9998 3.86485 6.70703L7.13868 12.418H26.8613L30.1385 6.70703C30.5436 5.9998 30.0356 5.11328 29.2221 5.11328V5.11328ZM11.5879 27.8242C11.5879 28.4119 12.0594 28.8867 12.6438 28.8867H21.3563C21.9406 28.8867 22.4121 28.4119 22.4121 27.8242V21.582H11.5879V27.8242Z" fill="#8794C4" />
                                    </svg>
                                </Box>
                                <Typography className={classes.filter_acc} >Filters</Typography>
                            </Box>
                        </AccordionSummary>

                        <AccordionDetails sx={{ padding: "5px 15px 17px 14px" }}>
                            <Box component="form">
                                <Box>
                                    <Box className={classes.filter_input} >
                                        <label className={classes.filter_label} htmlFor="from" >From</label>
                                        <input className={classes.input} type="date" id="from" name="trip-start" defaultValue="dd/mm/yyy" min="01-01-1999" max="01-01-2030" />
                                    </Box>
                                    <Box className={classes.filter_input} sx={{ marginTop: "8px" }} >
                                        <label className={classes.filter_label} htmlFor="to">To</label>
                                        <input className={classes.input} type="date" id="to" name="trip-start" defaultValue="dd/mm/yyy" min="01-01-1999" max="01-01-2030" />
                                    </Box>
                                </Box>
                                <Button variant="contained" sx={{
                                    width: "100%", marginTop: "10px", padding: "12.5px 0", fontWeight: "400", fontSize: " 12px", lineHeight: "13px", color: "#FFFFFF", background: "#0F75BC"
                                }} >Apply Filter</Button>
                            </Box>
                        </AccordionDetails>
                    </Accordion >
                )}

            </Box >
        </>
    )
}

export default NavItemAccordian;