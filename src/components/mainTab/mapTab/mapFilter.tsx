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
        setOpen(true);
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
                            sx={{ justifyContent: "flex-start", minHeight: "auto", padding: "8px 10px", margin: "0" }}
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
                                                    <img src={require("../../../assets/svg/filter-arrow-icon.svg").default} alt="" />
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
                                            {/* <Box sx={{ m: 0, width: "100%" }} variant="standard">
                                                <NativeSelect
                                                    id="demo-customized-select-native"
                                                    value={age}
                                                    onChange={handleChange}
                                                    input={<BootstrapInput />}
                                                >
                                                    <option aria-label="None" value="">Persian</option>
                                                    <option value={10}>Ten</option>
                                                    <option value={20}>Twenty</option>
                                                    <option value={30}>Thirty</option>
                                                </NativeSelect>
                                            </Box> */}

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
                                <svg width={34} height={34} className="filtor_icon" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1795 19.457H22.8205L25.6395 14.543H8.36056L11.1795 19.457ZM29.2221 5.11328H4.77794C3.96446 5.11328 3.45646 5.9998 3.86485 6.70703L7.13868 12.418H26.8613L30.1385 6.70703C30.5436 5.9998 30.0356 5.11328 29.2221 5.11328V5.11328ZM11.5879 27.8242C11.5879 28.4119 12.0594 28.8867 12.6438 28.8867H21.3563C21.9406 28.8867 22.4121 28.4119 22.4121 27.8242V21.582H11.5879V27.8242Z" fill="#8794C4" />
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