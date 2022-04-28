import { Box, Button, Typography, Divider } from "@mui/material";
type headerData = {
    tabheading: String,
    blockInfo: Boolean,
    tabInfo: String,
    blockInfoheading: String,
    divider: Boolean
    headerOption: any; // headerOption Must be = Download , Search,MapView,Reports

}


const Header = (props: headerData) => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Box >
                    <Typography component={"h2"} sx={{ fontWeight: 'bold', fontSize: { lg: 19, xs: 17 }, lineHeight: "21px" }}>
                        {/* Tab Heading */}
                        {props.tabheading}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>

                    {props.headerOption.map((elem: any, index: any) => {
                        return (
                            <Box key={index} >
                               
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
                        <Typography component="h4" sx={{ fontSize: { lg: 20, xs: 18 }, lineHeight: "22px", fontWeight: "500" }}>
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