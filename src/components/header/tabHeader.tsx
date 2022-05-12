import { Box, Button, Typography, Divider } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PestControlIcon from '@mui/icons-material/PestControl';
import LanguageIcon from '@mui/icons-material/Language';
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
                <Typography variant="h3" component={"h2"}>
                    {/* Tab Heading */}
                    {props.tabheading}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>

                    {props.headerOption.map((elem: any, index: any) => {
                        return (
                            <Box key={index} >
                                {/* Map View */}
                                {elem === "MapView" &&
                                    <Button variant="text" sx={{ alignItems: "center" }}>
                                        <LanguageIcon sx={{color:"#0079b4"}}  />
                                        <Typography variant="subtitle1" component="span" sx={{ color: "secondary.light", textTransform: 'capitalize', ml: 1 }}>
                                            Map View
                                        </Typography>
                                    </Button>
                                }
                                {
                                    elem === "Download" &&
                                    <Button variant="text" sx={{ alignItems: "center" }}>
                                        <DownloadIcon sx={{color:"#0079b4"}} />
                                        <Typography variant="subtitle1" component="span" sx={{ color: "secondary.light", textTransform: 'capitalize', ml: 1 }}>
                                            Download
                                        </Typography>
                                    </Button>
                                }    
                                {
                                    elem === "Reports" &&
                                    <Button variant="text" sx={{ alignItems: "center" }}>
                                        <AssessmentIcon sx={{color:"#0079b4"}} />
                                        <Typography variant="subtitle1" component="span" sx={{ color: "secondary.light", textTransform: 'capitalize', ml: 1 }}>
                                            Reports
                                        </Typography>
                                    </Button>
                                }
                            </Box>
                        )
                    })}
                </Box>
            </Box>
            {/* Heading Content */}
            {
                props.blockInfo ?
                    <Box sx={{ backgroundColor: "#FDFDFD", padding: "14px 33px 30px 13px", boxShadow: "0px 0px 10px #F3F4F6", mt: 3.75 }}>
                        <Typography variant="h4" component="h4" sx={{}}>
                            {props.blockInfoheading}
                        </Typography>
                        <Divider sx={{ borderBottomWidth: "2px", my: "16px", borderColor: "#F5F5F5", ml: "-13px", width: "340px" }} />
                        <Typography variant="h6" component="p" sx={{ color: "text.secondary", lineHeight: "23px", fontWeight: "fontWeightRegular", textAlign: "justify" }}>
                            {/* Tab Info */}
                            {props.tabInfo}
                        </Typography>
                    </Box>
                    :
                    <Typography variant="h6" component="p" sx={{ textAlign: "justify" }}>
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