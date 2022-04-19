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
    const handleTooltipClose = () => {
        setOpen(false);
    };
    const handleTooltipOpen = () => {
        setOpen(!open);
    };

    // Filter Dropdown State
    const [filterValue, SetfilterValue] = useState("Persian");

    const [OpenDorpdown, SetOpenDorpdown] = useState(false);
    const ToggleDropdown = () => {
        SetOpenDorpdown(!OpenDorpdown);
    }
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
                            sx={{ "& span": { top: "5px!important" }, justifyContent: "flex-start", minHeight: "auto", padding: "8px 10px", margin: "0" }}
                            title={<Box sx={{ background: "#fff", padding: "12px 10px 17px", borderRadius: " 4px" }}>
                                <form>
                                    <Box >
                                        {/* Heading */}
                                        <Typography component="h4" sx={{ color: "#0F75BC", fontWeight: "600", fontSize: "14px", lineHeight: "16px", marginBottom: "24px" }}>
                                            Filter
                                        </Typography>

                                        {/* Basic Select  */}
                                        <Box sx={{ marginBottom: "17px" }}>
                                            <Box component="span" sx={{ color: "#8794C3", fontWeight: "400", fontSize: "12px", lineHeight: "13px", display: "block", marginBottom: "4px" }} >Basin</Box>
                                            <Box>
                                                <Box onClick={ToggleDropdown} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 9px", background: "#FFFFFF", border: "1px solid rgba(213, 213, 213, 0.4)", borderRadius: "4px" }}>
                                                    <Typography sx={{ color: "#979797", fontWeight: "400", fontSize: "12px", lineHeight: "13px" }} component={"span"}>
                                                        {filterValue}
                                                    </Typography>
                                                    <Typography sx={{ transform: ` ${OpenDorpdown && "rotate(180deg)"}` }}>
                                                        <img src={require("../../../assets/svg/filter-arrow-icon.svg").default} alt="" />
                                                    </Typography>
                                                </Box>
                                                {OpenDorpdown && (
                                                    <>
                                                        <List sx={{ position: 'absolute', zIndex: "101", borderRadius: "4px", background: "#fff", boxShadow: "0 0 10px #ccc", maxWidth: "155px", width: "100%" }} >
                                                            <ListItem onClick={() => { SetfilterValue("One"); ToggleDropdown() }} sx={{ color: "#979797", fontWeight: "400", fontSize: "12px", lineHeight: "13px", cursor: "pointer" }}>
                                                                One
                                                            </ListItem>
                                                            <ListItem onClick={() => { SetfilterValue("Two"); ToggleDropdown() }} sx={{ color: "#979797", fontWeight: "400", fontSize: "12px", lineHeight: "13px", cursor: "pointer" }} >
                                                                Two
                                                            </ListItem>
                                                            <ListItem onClick={() => { SetfilterValue("Three"); ToggleDropdown() }} sx={{ color: "#979797", fontWeight: "400", fontSize: "12px", lineHeight: "13px", cursor: "pointer" }}>
                                                                Three
                                                            </ListItem>
                                                        </List>
                                                        <Typography onClick={ToggleDropdown} sx={{ display: `  ${OpenDorpdown ? "block" : "none"}`, zIndex: "100", position: "fixed", top: "0", left: "0", height: "100%", width: "100%", background: "transparent" }} component={"span"}>
                                                        </Typography>
                                                    </>
                                                )}

                                            </Box>

                                        </Box>


                                        {/* Date From  */}
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}  >
                                            <Box component="label" sx={{ color: "#8794C3", fontWeight: "400", fontSize: "12px", lineHeight: "13px" }} htmlFor="tooltipFrom" >From</Box>
                                            <Box component="input" sx={{
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
                                            }} type="date" id="tooltipFrom" name="trip-start" defaultValue="dd/mm/yyy" min="01-01-1999" max="01-01-2030" />
                                        </Box>
                                        {/* Date To  */}
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "10px" }} >
                                            <Box component="label" sx={{ color: "#8794C3", fontWeight: "400", fontSize: "12px", lineHeight: "13px" }} htmlFor="tooltipTo">To</Box>
                                            <Box component="input" sx={{
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
                                            }} type="date" id="tooltipTo" name="trip-start" defaultValue="dd/mm/yyy" min="01-01-1999" max="01-01-2030" />
                                        </Box>
                                    </Box>
                                    <Button variant="contained" sx={{
                                        textTransform: "capitalize",
                                        width: "100%", marginTop: "10px", padding: "12.5px 0", fontWeight: "400", fontSize: " 12px", lineHeight: "13px", color: "#FFFFFF", background: "#0F75BC"
                                    }} >Apply Filter</Button>
                                </form>
                            </Box>}>
                            <Button onClick={handleTooltipOpen} sx={{
                                mr: 0, display: "grid", placeItems: "center", minWidth: "auto", padding: "10px",
                                color: "#8794C4",
                                background: "#F2F6FE", borderRadius: "50%",
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