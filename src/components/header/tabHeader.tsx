import { Box, Button, Typography, Divider } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LanguageIcon from '@mui/icons-material/Language';
type headerData = {
    tabheading: String,
    blockInfo: Boolean,
    tabInfo: String,
    blockInfoheading: String,
    divider: Boolean
    headerOption: any; // headerOption Must be = Download , Search,MapView,Reports
}

const MapHEad=[
    {
        HeadBtnName:"Map View",
        ElemName:"MapView",
        btnIcon:<LanguageIcon sx={{color:"secondary.light"}} />
    },
    {
        HeadBtnName:"Download",
        ElemName:"Download",
        btnIcon:<DownloadIcon sx={{color:"secondary.light"}} />
    },
    {
        HeadBtnName:"Reports",
        ElemName:"Reports",
        btnIcon:<AssessmentIcon sx={{color:"secondary.light"}} />
    },
]
const Header = (props: headerData) => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Typography variant="h3">
                    {/* Tab Heading */}
                    {props.tabheading}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    {props.headerOption.map((elem: any, index: any) => {
                        return (
                            <Box key={index} >
                                {MapHEad.map((value,index)=>{
                                    return(
                                        <Box key={index}>
                                            {elem === `${value.ElemName}` &&
                                                <>
                                                    <Button variant="text" startIcon={value.btnIcon} sx={{"&:hover svg path":{ fill: "inherit"}, alignItems: "center" }}>
                                                        <Typography variant="subtitle1"  sx={{ color: "secondary.light", textTransform: 'capitalize' }}>
                                                            {value.HeadBtnName}
                                                        </Typography>
                                                    </Button>
                                                </>
                                            }
                                        </Box>
                                    )
                                })}
                            </Box>
                        )
                    })}
                </Box>
            </Box>
            {/* Heading Content */}
            {
                props.blockInfo ?
                    <Box sx={{ backgroundColor: "background.paper", p: "14px 33px 30px 13px", boxShadow: "0px 0px 10px #F3F4F6", mt: 3.75 }}>
                        <Typography variant="h4" component="h4" >
                            {props.blockInfoheading}
                        </Typography>
                        <Divider sx={{ borderBottomWidth: "2px", my: "16px",}} />
                        <Typography variant="h6" component="p" sx={{ color: "text.secondary", lineHeight: "23px", fontWeight: "fontWeightRegular", textAlign: "justify" }}>
                            {/* Tab Info */}
                            {props.tabInfo}
                        </Typography>
                    </Box>
                    :
                    <Typography variant="h6" component="p" sx={{ color: "text.secondary", lineHeight: "23px", fontWeight: "fontWeightRegular", textAlign: "justify" }}>
                        {/* Tab Info */}
                        {props.tabInfo}
                    </Typography>
            }
            {/* Divider */}
            {props.divider && <Divider sx={{ borderBottomWidth: "2px", mt: "18px" }} />}
        </>
    );
}
export default Header;