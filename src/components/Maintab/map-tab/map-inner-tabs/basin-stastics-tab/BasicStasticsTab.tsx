import { Box, Button, Typography, List, ListItem, ListItemText } from "@mui/material";
// import { makeStyles } from '@mui/styles';
import MapInnerTabHeading from "../MapInnerTabHeading";

// const useStyles = makeStyles({

// });

const BasicStasticsTab = () => {
    // const classes = useStyles();

    return (
        <>
            <Box sx={{}}>
                <Box>
                    <MapInnerTabHeading heading={"Basic Stastics"} />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <Button variant="outlined" sx={{ color: "#0F75BC", lineHeight: "11px", fontSize: "10px", fontWeight: "700", padding: "8px 11px" }}>
                                <Box component="img" src={require("../../../../../assets/svg/edit-icon.svg").default} sx={{ mr: "4px" }} alt="" />
                                EDIT
                            </Button>
                        </Box>

                        <Box >
                            <Button variant="outlined" sx={{ color: "#0F75BC", lineHeight: "11px", fontSize: "10px", fontWeight: "700", padding: "8px 11px",mr:"6px" }}>
                                <Box component="img" src={require("../../../../../assets/svg/download-icon.svg").default} sx={{ mr: "4px" }} alt="" />
                                KMZ
                            </Button>

                            <Button variant="outlined" sx={{ color: "#0F75BC", lineHeight: "11px", fontSize: "10px", fontWeight: "700", padding: "8px 11px" }}>
                                <Box component="img" src={require("../../../../../assets/svg/download-icon.svg").default} sx={{ mr: "4px" }} alt="" />
                                CSV
                            </Button>

                        </Box>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <Typography component="h5" sx={{ fontWeight: "600", fontSize: "18px", lineHeight: "20px", color: "#000000" }}>
                            source contributions
                        </Typography>

                        <Box sx={{ textAlign: "center", mt: 2.5, mb: 3.875 }} >
                            <img src={require("../../../../../assets/svg/inner-dout.svg").default} alt="" />
                        </Box>
                        <Box sx={{ textAlign: "center", mt: 2.5, display: "grid", gridTemplateColumns: "repeat(3,33.333%)", gap: "5px" }}>
                            <Box sx={{ display: "grid", alignItems: "center", gridTemplateColumns: "auto 1fr", gap: "12px" }}>
                                <Box sx={{ height: "24px", backgroundColor: "#5F6DD0", borderRadius: "5px", width: "27px" }}></Box>
                                <Typography component="h5" sx={{ fontWeight: "500", fontSize: "10px", lineHeight: "1", color: "#000000", textAlign: "left", opacity: "0.4" }}>
                                    Change later
                                </Typography>
                            </Box>
                            <Box sx={{ display: "grid", alignItems: "center", gridTemplateColumns: "auto 1fr", gap: "12px" }}>
                                <Box sx={{ height: "24px", backgroundColor: "#8695EB", borderRadius: "5px", width: "27px" }}></Box>
                                <Typography component="h5" sx={{ fontWeight: "500", fontSize: "10px", lineHeight: "1", color: "#000000", textAlign: "left", opacity: "0.4" }}>
                                    Change later
                                </Typography>
                            </Box>
                            <Box sx={{ display: "grid", alignItems: "center", gridTemplateColumns: "auto 1fr", gap: "12px" }}>
                                <Box sx={{ height: "24px", backgroundColor: "#C8CDFF", borderRadius: "5px", width: "27px" }}></Box>
                                <Typography component="h5" sx={{ fontWeight: "500", fontSize: "10px", lineHeight: "1", color: "#000000", textAlign: "left", opacity: "0.4" }}>
                                    Change later
                                </Typography>
                            </Box>
                        </Box>
                    </Box>


                    <List sx={{ mt: 4.75, p: 0 }}>
                        <ListItem disablePadding sx={{ mt: 3.625 }}>
                            <ListItemText >
                                <Typography component="span" sx={{ fontWeight: "600", fontSize: "12px", lineHeight: "13px", color: "#979797", display: "block" }}>
                                    source contributions
                                </Typography>
                                <Typography component="span" sx={{ fontWeight: "500", fontSize: "12px", lineHeight: "13px", color: "#454560", display: "block", mt: 1.75 }}>
                                    29
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding sx={{ mt: 3.625 }}>
                            <ListItemText >
                                <Typography component="span" sx={{ fontWeight: "600", fontSize: "12px", lineHeight: "13px", color: "#979797", display: "block" }}>
                                    MOST RECENT SURVEY DATE
                                </Typography>
                                <Typography component="span" sx={{ fontWeight: "500", fontSize: "12px", lineHeight: "13px", color: "#454560", display: "block", mt: 1.75 }}>
                                    4/12/2022
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding sx={{ mt: 3.625 }}>
                            <ListItemText >
                                <Typography component="span" sx={{ fontWeight: "600", fontSize: "12px", lineHeight: "13px", color: "#979797", display: "block" }}>
                                    Bridger Processed Emissions
                                </Typography>
                                <Typography component="span" sx={{ fontWeight: "500", fontSize: "12px", lineHeight: "13px", color: "#454560", display: "block", mt: 1.75 }}>
                                    28
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding sx={{ mt: 3.625 }}>
                            <ListItemText >
                                <Typography component="span" sx={{ fontWeight: "600", fontSize: "12px", lineHeight: "13px", color: "#979797", display: "block" }}>
                                    Bridger Premilinary Detections
                                </Typography>
                                <Typography component="span" sx={{ fontWeight: "500", fontSize: "12px", lineHeight: "13px", color: "#454560", display: "block", mt: 1.75 }}>
                                    28
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>

                {/* <Box className={classes.tab_footer_report} >
                    See report for this selection
                </Box> */}
            </Box>
        </>
    );
}
export default BasicStasticsTab;