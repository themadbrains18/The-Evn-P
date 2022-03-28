import { Box, Button, Typography, Divider, Input } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";

type headerData = {
    tabheading: String,
    blockInfo: Boolean,
    tabInfo: String,
    blockInfoheading: String,
    divider: Boolean
    headerOption: "Search" | "MapView"

}
const useStyles = makeStyles({
    bglayer: {
        position: "fixed",
        top: "0",
        left: "0",
        background: "transparent",
        height: "100%",
        width: "100%",
        zIndex: "8"
    },
    headerinput: {
        position: "relative",
        zIndex: "9",
        width: "250px",
        transition: "0.5s",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: "18px",
        color: "#1D8CD4",
        textTransform: 'capitalize',
        "& input::placeholder": {
            transition: "0.5s",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: "18px",
            color: "#1D8CD4"
        },
    },
})

const TabHeader = (props: headerData) => {
    const classes = useStyles();

    const [InputToggle, SetInputToggle] = useState(false)
    const InputButton = () => {
        SetInputToggle(!InputToggle)
    }
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Box >
                    <Typography component={"h2"} sx={{ fontWeight: 'bold', fontSize: 19, lineHeight: "21px" }}>
                        {/* Tab Heading */}
                        {props.tabheading}
                    </Typography>
                </Box>
                <Box>
                    {/* Search Option */}
                    {props.headerOption === "Search" &&
                        (
                            <>
                                {!InputToggle && (
                                    <>
                                        <Button variant="text" sx={{ alignItems: "center" }} onClick={InputButton}>
                                            <img src={require("../../../assets/svg/search.svg").default} alt="Search" />
                                            <Typography component="span" sx={{ fontWeight: "400", fontSize: 16, lineHeight: "18px", color: "#1D8CD4", textTransform: 'capitalize', ml: 1.38 }}>
                                                Search
                                            </Typography>
                                        </Button>
                                    </>
                                )}
                                {InputToggle && (
                                    <>
                                        <Input className={classes.headerinput} placeholder="Search" />
                                        <Typography className={classes.bglayer} component={"span"} onClick={InputButton}>
                                        </Typography  >
                                    </>
                                )
                                }
                            </>
                        )
                    }

                    {/* Map View */}
                    {props.headerOption === "MapView" &&

                        <Button variant="text" sx={{ alignItems: "center" }}>
                            <img src={require("../../../assets/svg/globe.svg").default} alt="Globe" />
                            <Typography component="span" sx={{ fontWeight: "400", fontSize: 16, lineHeight: "18px", color: "#1D8CD4", textTransform: 'capitalize', ml: 1 }}>
                                Map View
                            </Typography>
                        </Button>
                    }
                </Box>
            </Box>

            {
                props.blockInfo ?
                    <Box sx={{ backgroundColor: "#FDFDFD", padding: "14px 33px 30px 13px", boxShadow: "0px 0px 10px #F3F4F6" }}>
                        <Typography component="h4" sx={{ fontSize: "16px", lineHeight: "18px", fontWeight: "400" }}>
                            {props.blockInfoheading}
                        </Typography>
                        <Divider sx={{ borderBottomWidth: "2px", my: "16px", borderColor: "#F5F5F5", ml: "-13px", width: "340px" }} />

                        <Typography component="p" sx={{ fontSize: "14px", textAlign: "justify", color: "#121212", lineHeight: "23px" }}>
                            {/* Tab Info */}
                            {props.tabInfo}
                        </Typography>
                    </Box>
                    :
                    <Typography component="p" sx={{ fontSize: "14px", textAlign: "justify", color: "#121212", lineHeight: "23px" }}>
                        {/* Tab Info */}
                        {props.tabInfo}
                    </Typography>
            }

            {/* Divider */}
            {props.divider && <Divider sx={{ borderBottomWidth: "2px", mt: "18px", borderColor: "#DEDEDE" }} />}

        </>
    );
}
export default TabHeader;