import { Box, Button, Typography, Divider, Input } from "@mui/material";
import { useEffect, useState } from "react";
type headerData = {
    tabheading: String,
    blockInfo: Boolean,
    tabInfo: String,
    blockInfoheading: String,
    divider: Boolean
    headerOption: any; // headerOption Must be = Download , Search,MapView,Reports
   
}


const Header = (props: headerData) => {

    const [InputToggle, SetInputToggle] = useState(false)

    const InputButton = () => {
        SetInputToggle(!InputToggle)
    }
    useEffect(() => {
        if (InputToggle) {
            let searchInput: any = document.querySelector(".search_input input");
            searchInput.focus();
            setTimeout(() => {
                searchInput.focus();
            }, 350)
        }
    }, [InputToggle]);
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Box >
                    <Typography component={"h2"} sx={{ fontWeight: 'bold', fontSize: { lg: 19, xs: 17 }, lineHeight: "21px" }}>
                        {/* Tab Heading */}
                        {props.tabheading}
                    </Typography>
                </Box>
                <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>

                    {props.headerOption.map((elem: any, index: any) => {
                        return (
                            <Box key={index} >
                                {/* Search Option */}
                                {
                                    elem === "Search" &&
                                    (
                                        <>
                                            <Box sx={{

                                                transition: "0.3s",
                                                position: "relative",
                                                height: "50px",
                                                width: "250px",
                                                overflow: "hidden",
                                                textAlign: "end"
                                            }}>
                                                <Button className={`search_btn ${InputToggle && ("active")}`} variant="text" sx={{
                                                    alignItems: "center", justifyContent: "end!important",
                                                    transition: "0.4s  linear !important",
                                                    "&.active": {
                                                        opacity: "0",
                                                        transitionDelay: "0 !important",
                                                        visibility: "hidden",
                                                        transform: "translateX(-150px)"
                                                    }
                                                }} onClick={InputButton}>
                                                    <img src={require("../../assets/svg/search.svg").default} alt="Search" />
                                                    <Typography component="span" sx={{ fontWeight: "400", fontSize: 16, lineHeight: "18px", color: "#1D8CD4", textTransform: 'capitalize', ml: 1.38 }}>
                                                        Search
                                                    </Typography>
                                                </Button>
                                                <Box className={` ${InputToggle && ("active")}`} sx={{

                                                    position: "absolute",
                                                    top: "50%",
                                                    right: "calc(-100% + 67px)",
                                                    height: "100%",
                                                    transform: "translateY(-50%)",
                                                    opacity: "0",
                                                    visibility: "hidden",
                                                    zIndex: "15",
                                                    transition: "0.4s linear !important",
                                                    width: "250px",
                                                    overflow: "hidden",
                                                    "&.active": {
                                                        opacity: "1",
                                                        visibility: "visible",
                                                        right: "0",
                                                    }
                                                }}>
                                                    <Input className="search_input" sx={{

                                                        position: "relative",
                                                        zIndex: "9",
                                                        width: "250px",
                                                        fontWeight: "400",
                                                        fontSize: 16,
                                                        lineHeight: "18px",
                                                        color: "#1D8CD4",
                                                        textTransform: 'capitalize',

                                                        "& input::placeholder": {
                                                            fontWeight: "400",
                                                            fontSize: 16,
                                                            lineHeight: "18px",
                                                            color: "#1D8CD4",
                                                            opacity: "1"
                                                        }
                                                    }} placeholder="Search" autoFocus />
                                                </Box>
                                            </Box>

                                            <Typography className={` ${InputToggle && ("active")}`} sx={{

                                                position: "fixed",
                                                top: "0",
                                                left: "0",
                                                background: "transparent",
                                                height: "100%",
                                                width: "100%",
                                                zIndex: "8",
                                                display: "none",
                                                "&.active": {
                                                    display: "block",
                                                },
                                            }} component={"span"} onClick={InputButton}>
                                            </Typography  >
                                        </>
                                    )
                                }
                                {/* Map View */}
                                {
                                    elem === "MapView" &&
                                    <Button variant="text" sx={{ alignItems: "center" }}>
                                        <img src={require("../../assets/svg/globe.svg").default} alt="Globe" />
                                        <Typography component="span" sx={{ fontWeight: "400", fontSize: { lg: 16, xs: 14 }, lineHeight: "18px", color: "#1D8CD4", textTransform: 'capitalize', ml: 1 }}>
                                            Map View
                                        </Typography>
                                    </Button>
                                }
                                {
                                    elem === "Download" &&
                                    <Button variant="text" sx={{ alignItems: "center" }}>
                                        <img src={require("../../assets/svg/card-download-icon.svg").default} alt="Globe" />
                                        <Typography component="span" sx={{ fontWeight: "400", fontSize: { lg: 16, xs: 14 }, lineHeight: "18px", color: "#1D8CD4", textTransform: 'capitalize', ml: 1 }}>
                                            Download
                                        </Typography>
                                    </Button>
                                }
                                {
                                    elem === "Reports" &&
                                    <Button variant="text" sx={{ alignItems: "center" }}>
                                        <img src={require("../../assets/svg/report.svg").default} alt="report" />
                                        <Typography component="span" sx={{ fontWeight: "400", fontSize: { lg: 16, xs: 14 }, lineHeight: "18px", color: "#1D8CD4", textTransform: 'capitalize', ml: 1 }}>
                                             Reports
                                        </Typography>
                                    </Button>
                                }
                            </Box>
                        )
                    })}



                </Box>
            </Box>
            {
                props.blockInfo ?
                    <Box sx={{ backgroundColor: "#FDFDFD", padding: "14px 33px 30px 13px", boxShadow: "0px 0px 10px #F3F4F6", mt: 3.75 }}>
                        <Typography component="h4" sx={{ fontSize: { lg: 16, xs: 14 }, lineHeight: "18px", fontWeight: "400" }}>
                            {props.blockInfoheading}
                        </Typography>
                        <Divider sx={{ borderBottomWidth: "2px", my: "16px", borderColor: "#F5F5F5", ml: "-13px", width: "340px" }} />

                        <Typography component="p" sx={{ fontSize: { lg: 14, xs: 12 }, textAlign: "justify", color: "#121212", lineHeight: "23px" }}>
                            {/* Tab Info */}
                            {props.tabInfo}
                        </Typography>
                    </Box>
                    :
                    <Typography component="p" sx={{ fontSize: { lg: 14, xs: 12 }, textAlign: "justify", color: "#121212", lineHeight: "23px" }}>
                        {/* Tab Info */}
                        {props.tabInfo}
                    </Typography>
            }

            {/* Divider */}
            {props.divider && <Divider sx={{ borderBottomWidth: "2px", mt: "18px", borderColor: "#DEDEDE" }} />}
        </>
    );
}
export default Header;