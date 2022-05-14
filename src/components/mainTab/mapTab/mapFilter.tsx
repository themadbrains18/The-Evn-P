import { useState } from 'react';
import { Box, Typography, Button, Tooltip, TooltipProps, tooltipClasses, ClickAwayListener, styled, ListItem, List } from '@mui/material';

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "#fff",
    },
    [`& .${tooltipClasses.tooltip}`]: {
        padding: 0,
    },
}));

const MapFilter = () => {
    const [open, setOpen] = useState(false);

    //  Date State
    const [dateFrom, setDateFrom] = useState(null) as any;

    const handleTooltipClose = () => {
        setOpen(false);
    };
    const handleTooltipOpen = () => {
        setOpen(!open);
    };

    const inputChange = (e: any) => {
        if (e.target.matches(".frominput_date")) {
            setDateFrom(e.target.value);
        } else {
            if (new Date(dateFrom).getFullYear() < new Date(e.target.value).getFullYear()) {
            } else if (new Date(dateFrom).getFullYear() === new Date(e.target.value).getFullYear()) {
                if (new Date(dateFrom).getMonth() < new Date(e.target.value).getMonth()) {
                } else if (new Date(dateFrom).getMonth() === new Date(e.target.value).getMonth()) {
                    if (new Date(dateFrom).getDate() === new Date(e.target.value).getDate()) {
                    }
                    else {
                        alert("Please Enter The Correct Day")
                    }
                }
                else {
                    alert("Please Enter The Correct Month")
                }
            }
            else {
                alert("Please Enter The Correct Year")
            }
        }
    };


    // Filter Dropdown State
    const [filterValue, SetfilterValue] = useState("All Basins");
    const [OpenDorpdown, SetOpenDorpdown] = useState(false);
    const ToggleDropdown = () => {
        SetOpenDorpdown(!OpenDorpdown);
    }

    const [FilterDot, SetFilterDot] = useState(false);
    const SubmitFilterForm = (e: any) => {
        e.preventDefault();
        setOpen(!open);
        if (e._reactName) {
            SetFilterDot(true)
        }
    }

    // DropDown Filter Dropdown Data
    const filterDopdownItem=[
        {
            item:"All Basins",
        },
        {
            item:"Appalachian",
        },
        {
            item:"Bakken",
        },
        {
            item:"Denver-Julesburg",
        },
        {
            item:"Eagleford",
        },
        {
            item:"Permian",
        }
    ]
    return (
        <>
            <Box sx={{
                position: "absolute", top: "25px", left: "25px", "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                    zIndex: "2501"
                }
            }}>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <Box >
                        <CustomTooltip
                            arrow
                            placement="right-start"
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            sx={{ minWidth: "215px", "& span": { top: "5px!important" }, justifyContent: "flex-start", minHeight: "auto", padding: "8px 10px", margin: "0" }}
                            title={
                                <Box sx={{ display: `${!open && ("none")}`, backgroundColor: "background.default", padding: "12px 10px 17px", borderRadius: " 4px" }}>
                                    <form onSubmit={SubmitFilterForm}>
                                        <Box >
                                            {/* Heading */}
                                            <Typography variant='h6' component="h4" sx={{ color: "primary.main", fontWeight: "600", marginBottom: "24px" }}>
                                                Filter
                                            </Typography>
                                            {/* Basic Select  */}
                                            <Box sx={{ marginBottom: "17px" }}>
                                                <Typography variant='body2'  sx={{ color: "secondary.contrastText",  display: "block", marginBottom: "4px" }} >Basin</Typography>
                                                <Box>
                                                    <Box onClick={ToggleDropdown} sx={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center", padding: "12px 9px", background: "#FFFFFF", border: "1px solid rgba(213, 213, 213, 0.4)", borderRadius: "4px" }}>
                                                        <Typography variant='body2' sx={{ color: "secondary.dark" }} component={"span"}>
                                                            {filterValue}
                                                        </Typography>
                                                        <Typography sx={{ transition: "0.3s", transform: ` ${OpenDorpdown && "rotate(-180deg)"}` }}>
                                                            <img src={require("../../../assets/svg/filter-arrow-icon.svg").default} alt="" />
                                                        </Typography>
                                                    </Box>
                                                    {OpenDorpdown && (
                                                        <>
                                                            <List sx={{ position: 'absolute', zIndex: "101", borderRadius: "4px", backgroundColor: "background.default", boxShadow: "1", maxWidth: "155px", width: "100%" }} >
                                                                {filterDopdownItem.map((val)=>{
                                                                    return(
                                                                    <ListItem onClick={() => { SetfilterValue(val.item); ToggleDropdown() }} sx={{ color: "secondary.dark", cursor: "pointer" }}>
                                                                        {val.item}
                                                                    </ListItem>
                                                                    )
                                                                })}
                                                            </List>
                                                            <Typography onClick={ToggleDropdown} sx={{ display: `  ${OpenDorpdown ? "block" : "none"}`, zIndex: "100", position: "fixed", top: "0", left: "0", height: "100%", width: "100%", background: "transparent" }} component={"span"}>
                                                            </Typography>
                                                        </>
                                                    )}
                                                </Box>
                                            </Box>
                                            {/* Date From  */}
                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}  >
                                                <Typography variant="body2" component="label" sx={{ color: "secondary.contrastText"}} htmlFor="tooltipFrom" >From</Typography>
                                                <Box sx={{
                                                    position: "relative",
                                                    "&::after": {
                                                        content: '""',
                                                        position: "absolute",
                                                        top: "50%",
                                                        transform: "translateY(-50%)",
                                                        right: "12px",
                                                        backgroundImage: `url(${require("../../../assets/svg/calander-cion.svg").default})`,
                                                        height: "16px",
                                                        width: "16px",
                                                        zIndex: "1"
                                                    }
                                                }}>
                                                    <Typography variant='body2' className='frominput_date' component="input" sx={{
                                                        border: "1px solid rgba(213, 213, 213, 0.4)",
                                                        borderRadius: "4px",
                                                        padding: "8px 12px",
                                                        color: "secondary.contrastText",
                                                        position: "relative",
                                                        background: "transparent",
                                                        width: "100%",
                                                        zIndex: "4",
                                                        "&:focus": {
                                                            outlineColor: "#1D8CD4"
                                                        }
                                                    }} type="date" required id="tooltipFrom" name="trip-start" defaultValue="dd/mm/yyy" min="01-01-1999" max="01-01-2030" onChange={inputChange} />
                                                </Box>
                                            </Box>
                                            {/* Date To  */}
                                            <Box  sx={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "10px" }} >
                                                <Typography variant='body2' component="label" sx={{ color: "secondary.contrastText" }} htmlFor="tooltipTo">To</Typography>
                                                <Box sx={{
                                                    position: "relative",
                                                    "&::after": {
                                                        content: '""',
                                                        position: "absolute",
                                                        top: "50%",
                                                        transform: "translateY(-50%)",
                                                        right: "12px",
                                                        backgroundImage: `url(${require("../../../assets/svg/calander-cion.svg").default})`,
                                                        height: "16px",
                                                        width: "16px",
                                                        zIndex: "1"
                                                    }
                                                }}>
                                                    <Typography variant='body2' component="input" sx={{
                                                        border: "1px solid rgba(213, 213, 213, 0.4)",
                                                        borderRadius: "4px",
                                                        padding: "8px 12px",
                                                        color: "secondary.dark",
                                                        position: "relative",
                                                        background: "transparent",
                                                        width: "100%",
                                                        zIndex: "4",
                                                        "&:focus": {
                                                            outlineColor: "#1D8CD4"
                                                        },
                                                    }} type="date" required id="tooltipTo" name="trip-start" defaultValue="dd/mm/yyy" min="01-01-1999" max="01-01-2030" onChange={inputChange} />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Button type='submit' variant="contained" sx={{
                                            textTransform: "capitalize",
                                            width: "100%", marginTop: "10px", padding: "12.5px 0", 
                                        }} >Apply Filter</Button>
                                    </form>
                                </Box>
                            }
                        >
                            <Button onClick={handleTooltipOpen} sx={{
                                mr: 0, display: "grid", placeItems: "center", minWidth: "auto", padding: "17px 16px",
                                color: "primary.light",
                                background: "#F2F6FE", borderRadius: "50%",
                                position: "relative",
                                "& p": {
                                    color: "#8794C3",
                                },
                                "& .MuiAccordionSummary-content": {     
                                    margin: "0",
                                },
                                "& .filtor_icon path": {
                                    fill: "#8794C3"
                                },
                                "&:hover,&.active,&.Mui-expanded,&[aria-labelledby*='mui-']": {
                                    background: "#F2F6FE",
                                    "& .filtor_icon path": {
                                        fill: "#0F75BC"
                                    },
                                    "& .nav_list_item_arrow path": {
                                        stroke: "#0F75BC"
                                    },
                                },
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    top: "14px",
                                    right: "4px",
                                    background: "#EB5757",
                                    height: "9px",
                                    width: "9px",
                                    borderRadius: "50%",
                                    display: `${FilterDot ? "block" : "none"}`
                                }
                            }}  >
                                <svg width={22} height={20} className="filtor_icon" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.86131 18.2773C6.86131 18.7268 7.22185 19.0898 7.66873 19.0898H14.3312C14.7781 19.0898 15.1387 18.7268 15.1387 18.2773V13.3008H6.86131V18.2773ZM20.3463 0.910156H1.65369C1.03162 0.910156 0.643143 1.58809 0.955448 2.12891L6.57439 11.6758H15.4306L21.0496 2.12891C21.3568 1.58809 20.9683 0.910156 20.3463 0.910156Z" fill="#0F75BC" />
                                </svg>
                            </Button>
                        </CustomTooltip>
                    </Box >
                </ClickAwayListener >
            </Box >
            <Typography onClick={ToggleDropdown} sx={{ display: `  ${OpenDorpdown ? "block" : "none"}`, zIndex: "100", position: "fixed", top: "0", left: "0", height: "100%", width: "100%", background: "transparent" }} component={"span"}>
            </Typography>
        </>
    )
}
export default MapFilter;